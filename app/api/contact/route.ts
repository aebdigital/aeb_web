import { NextRequest, NextResponse } from 'next/server';

const DEFAULT_ALLOWED_ORIGINS = ['https://aebdigital.sk', 'https://www.aebdigital.sk'];
const LOCAL_ORIGIN_PATTERN = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/;

function configuredAllowedOrigins(): Set<string> {
  const envOrigins = process.env.CONTACT_ALLOWED_ORIGINS
    ?.split(',')
    .map((origin) => origin.trim())
    .filter(Boolean) || [];

  return new Set([...DEFAULT_ALLOWED_ORIGINS, ...envOrigins]);
}

function allowedCorsOrigin(origin: string | null): string | null {
  if (!origin) return null;

  if (configuredAllowedOrigins().has(origin)) {
    return origin;
  }

  if (process.env.NODE_ENV !== 'production' && LOCAL_ORIGIN_PATTERN.test(origin)) {
    return origin;
  }

  return null;
}

function createJsonHeaders(request: NextRequest) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Vary: 'Origin',
  };

  const origin = allowedCorsOrigin(request.headers.get('origin'));
  if (origin) {
    headers['Access-Control-Allow-Origin'] = origin;
    headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS';
    headers['Access-Control-Allow-Headers'] = 'Content-Type';
  }

  return headers;
}

function hasBlockedOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  return Boolean(origin && !allowedCorsOrigin(origin));
}

function toStringField(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

function escapeHtml(value: unknown): string {
  return String(value ?? '').replace(/[&<>"']/g, (char) => {
    switch (char) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&#39;';
      default:
        return char;
    }
  });
}

function cleanEmailSubject(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim().slice(0, 120);
}

// Utility function to verify Cloudflare Turnstile token
async function verifyTurnstile(token: string, ip?: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    console.error('TURNSTILE_SECRET_KEY is not configured.');
    return process.env.NODE_ENV !== 'production';
  }

  try {
    const formData = new URLSearchParams();
    formData.append('secret', secretKey);
    formData.append('response', token);
    if (ip) {
      formData.append('remoteip', ip);
    }

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
      // headers:
      //   {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //   },
    });

    const data = await response.json();

    if (!data.success) {
      console.warn('Turnstile verification failed:', data);
    }

    return data.success;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false; // Fail closed in case of network error to Cloudflare
  }
}

// Utility to detect high-entropy gibberish (common in bot strings like 'JMwzyzngCTXj')
function isGibberish(text: string): boolean {
  if (!text || text.length < 5) return false;

  // High consonant to vowel ratio or long strings without vowels
  const vowels = text.match(/[aeiouyáéíóúýäô]/gi) || [];
  const consonants = text.match(/[bcdfghjklmnpqrstvwxzščťžďň]/gi) || [];

  if (consonants.length > 5 && vowels.length === 0) return true;
  if (consonants.length / (vowels.length || 1) > 5 && text.length > 10) return true;

  // Check for very long strings of characters with no spaces (common in gibberish)
  const words = text.split(/\s+/);
  for (const word of words) {
    if (word.length > 15 && !word.includes('@') && !word.includes('http')) {
      return true;
    }
  }

  return false;
}

// Durable rate limiting is used in production when UPSTASH_REDIS_REST_URL/TOKEN are configured.
// Development falls back to in-memory counters so the form remains easy to test locally.
const ipRateLimit = new Map<string, { count: number; lastReset: number }>();
const emailRateLimit = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_MAX = 3; // Max submissions per hour per IP/Email
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_WINDOW_SECONDS = RATE_LIMIT_WINDOW / 1000;

function rateLimitKey(scope: 'ip' | 'email', value: string): string {
  return `aeb:contact:${scope}:${Buffer.from(value || 'unknown').toString('base64url')}`;
}

async function checkDurableRateLimit(scope: 'ip' | 'email', value: string): Promise<boolean | null> {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL?.replace(/\/$/, '');
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!redisUrl || !redisToken) {
    return null;
  }

  const key = rateLimitKey(scope, value);
  const response = await fetch(`${redisUrl}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${redisToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      ['INCR', key],
      ['EXPIRE', key, RATE_LIMIT_WINDOW_SECONDS, 'NX'],
    ]),
  });

  if (!response.ok) {
    throw new Error(`Durable rate limit failed with status ${response.status}`);
  }

  const result = (await response.json()) as Array<{ result?: unknown }>;
  const count = Number(result?.[0]?.result ?? 0);
  return count <= RATE_LIMIT_MAX;
}

function checkRateLimit(map: Map<string, { count: number; lastReset: number }>, key: string): boolean {
  const now = Date.now();
  const record = map.get(key);

  if (!record) {
    map.set(key, { count: 1, lastReset: now });
    return true;
  }

  if (now - record.lastReset > RATE_LIMIT_WINDOW) {
    map.set(key, { count: 1, lastReset: now });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count += 1;
  return true;
}

async function checkContactRateLimit(
  scope: 'ip' | 'email',
  map: Map<string, { count: number; lastReset: number }>,
  key: string
): Promise<boolean> {
  try {
    const durableResult = await checkDurableRateLimit(scope, key);
    if (durableResult !== null) {
      return durableResult;
    }
  } catch (error) {
    console.error('Durable rate limiting error:', error);
    if (process.env.NODE_ENV === 'production') {
      return false;
    }
  }

  if (process.env.NODE_ENV === 'production') {
    console.warn('UPSTASH_REDIS_REST_URL/TOKEN are not configured; using in-memory contact rate limiting fallback.');
  }

  return checkRateLimit(map, key);
}

export async function POST(request: NextRequest) {
  const headers = createJsonHeaders(request);

  if (hasBlockedOrigin(request)) {
    return NextResponse.json(
      {
        error: 'Nepovolený pôvod požiadavky.',
        details: 'Origin is not allowed.',
      },
      { status: 403, headers }
    );
  }

  try {
    const data = await request.json();
    const name = toStringField(data.name).trim();
    const email = toStringField(data.email).trim();
    const message = toStringField(data.message).trim();
    const turnstileToken = toStringField(data.turnstileToken);
    const website = toStringField(data.website);
    const startTime = Number(data.startTime);

    // Fast submission block (bots typically submit instantly)
    if (Number.isFinite(startTime) && Date.now() - startTime < 3000) {
      console.warn(`Fast submission detected. Bot suspected.`);
      return NextResponse.json(
        {
          success: true,
          message: 'Ďakujeme! Vaša správa bola úspešne odoslaná.',
        },
        { status: 200, headers }
      );
    }

    // Gibberish Detection (Blocks random strings like 'JMwzyzngCTXj')
    if (isGibberish(name) || isGibberish(message)) {
      console.warn(`Gibberish detected in Name or Message. Bot suspected. Name: ${name}`);
      return NextResponse.json(
        {
          success: true,
          message: 'Ďakujeme! Vaša správa bola úspešne odoslaná.',
        },
        { status: 200, headers }
      );
    }

    // Honeypot check: If the hidden field 'website' is filled, it's a bot.
    if (website && website.length > 0) {
      console.warn(`Honeypot triggered. Bot detected. IP: ${request.headers.get('x-forwarded-for') || request.headers.get('client-ip')}`);
      // Return a fake success response to fool the bot
      return NextResponse.json(
        {
          success: true,
          message: 'Ďakujeme! Vaša správa bola úspešne odoslaná.',
        },
        { status: 200, headers }
      );
    }

    const ip = request.headers.get('x-forwarded-for') || request.headers.get('client-ip') || 'Unknown IP';

    // Rate Limiting Check
    const [ipAllowed, emailAllowed] = await Promise.all([
      checkContactRateLimit('ip', ipRateLimit, ip),
      checkContactRateLimit('email', emailRateLimit, email || 'unknown'),
    ]);

    if (!ipAllowed || !emailAllowed) {
      console.warn(`Rate limit exceeded for IP: ${ip} or Email: ${email}`);
      return NextResponse.json(
        {
          error: 'Prekročili ste limit odoslaní. Skúste to prosím neskôr.',
          details: 'Rate limit exceeded.',
        },
        { status: 429, headers }
      );
    }

    // Verify Turnstile Token
    if (!turnstileToken) {
      return NextResponse.json(
        {
          error: 'Chýba CAPTCHA overenie.',
          details: 'Turnstile token is missing.',
        },
        { status: 400, headers }
      );
    }
    const isHuman = await verifyTurnstile(turnstileToken, ip);
    if (!isHuman) {
      return NextResponse.json(
        {
          error: 'Neúspešné CAPTCHA overenie. Skúste to prosím znova.',
          details: 'Turnstile verification failed.',
        },
        { status: 400, headers }
      );
    }

    // Extract phone, budget, and subject from message if included
    let cleanMessage = message;
    let phone = '';
    let budget = '';
    let subject = '';

    const phoneMatch = message.match(/Telefón:\s*(.+)/);
    const budgetMatch = message.match(/Rozpočet:\s*(.+)/);
    const subjectMatch = message.match(/Typ projektu:\s*(.+)/);

    if (phoneMatch) phone = phoneMatch[1].trim();
    if (budgetMatch) budget = budgetMatch[1].trim();
    if (subjectMatch) subject = subjectMatch[1].trim();

    cleanMessage = message
      .replace(/\n\nTelefón:.*/, '')
      .replace(/Telefón:.*\n?/, '')
      .replace(/Rozpočet:.*\n?/, '')
      .replace(/Typ projektu:.*\n?/, '')
      .trim();

    // Validate required fields
    if (!name || !email || !cleanMessage) {
      return NextResponse.json(
        {
          error: 'Všetky polia sú povinné.',
          details: 'Name, email, and message are required fields.',
        },
        { status: 400, headers }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          error: 'Neplatná emailová adresa.',
          details: 'Invalid email format.',
        },
        { status: 400, headers }
      );
    }

    const SMTP2GO_API_KEY = process.env.SMTP2GO_API_KEY;
    const SMTP2GO_FROM_EMAIL = process.env.SMTP2GO_FROM_EMAIL;
    const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || process.env.SMTP2GO_FROM_EMAIL;

    if (!SMTP2GO_API_KEY || !SMTP2GO_FROM_EMAIL || !BUSINESS_EMAIL) {
      console.error('SMTP2GO environment variables not configured.');
      return NextResponse.json(
        {
          error: 'Konfiguračná chyba servera. Prosím, kontaktujte administrátora.',
          details: 'Email service environment variables are not set.',
        },
        { status: 500, headers }
      );
    }

    const referer = request.headers.get('referer') || 'Unknown';
    const submittedIp = request.headers.get('x-forwarded-for') || request.headers.get('client-ip') || 'Unknown';
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeSubject = escapeHtml(subject);
    const safeBudget = escapeHtml(budget);
    const safeMessage = escapeHtml(cleanMessage).replace(/\n/g, '<br>');
    const safeReferer = escapeHtml(referer);
    const safeSubmittedIp = escapeHtml(submittedIp);
    const sentAt = new Date().toLocaleString('sk-SK', { timeZone: 'Europe/Bratislava' });

    const emailPayload = {
      api_key: SMTP2GO_API_KEY,
      to: [BUSINESS_EMAIL],
      sender: SMTP2GO_FROM_EMAIL,
      subject: `Nová správa z kontaktného formulára - ${cleanEmailSubject(name)}`,
      text_body: `
Nová správa z kontaktného formulára AEB Digital

Od: ${name}
Email: ${email}

Správa:
${message}

---
Odoslané z: ${referer}
IP adresa: ${submittedIp}
Čas: ${sentAt}
      `,
      html_body: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
      line-height: 1.6;
      color: #ffffff;
      background-color: #16171A;
      margin: 0;
      padding: 40px 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #16171A;
      padding: 40px 20px;
    }
    .heading {
      color: #00997d;
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 30px;
      text-align: center;
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
    }
    .form-container {
      background-color: #212327;
      padding: 40px;
      border-radius: 20px;
      border: 0.5px solid #555555;
    }
    .form-group {
      margin-bottom: 20px;
    }
    .label {
      display: block;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 8px;
      font-size: 12px;
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
    }
    .value {
      background-color: #383a3c;
      padding: 12px 16px;
      border-radius: 10px;
      color: #ffffff;
      border: 0.5px solid #555555;
      font-size: 14px;
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
    }
    .value a {
      color: #00997d;
      text-decoration: none;
    }
    .message-box {
      background-color: #383a3c;
      padding: 15px;
      border-radius: 10px;
      color: #ffffff;
      border: 0.5px solid #555555;
      min-height: 100px;
      white-space: pre-wrap;
      font-size: 14px;
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #383a3c;
      font-size: 12px;
      color: #888888;
      text-align: center;
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2 class="heading">Nová správa z kontaktného formulára</h2>
    <div class="form-container">
      <div class="form-group">
        <div class="label">Meno *</div>
        <div class="value">${safeName}</div>
      </div>
      <div class="form-group">
        <div class="label">Email *</div>
        <div class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
      </div>
      ${phone ? `<div class="form-group">
        <div class="label">Telefón</div>
        <div class="value">${safePhone}</div>
      </div>` : ''}
      ${subject ? `<div class="form-group">
        <div class="label">Typ projektu *</div>
        <div class="value">${safeSubject}</div>
      </div>` : ''}
      ${budget ? `<div class="form-group">
        <div class="label">Rozpočet</div>
        <div class="value">${safeBudget}</div>
      </div>` : ''}
      <div class="form-group">
        <div class="label">Správa *</div>
        <div class="message-box">${safeMessage}</div>
      </div>
      <div class="footer">
        <p>Odoslané z: ${safeReferer}<br>
        IP: ${safeSubmittedIp}<br>
        ${escapeHtml(sentAt)}</p>
      </div>
    </div>
  </div>
</body>
</html>
      `
    };

    const smtp2goResponse = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Smtp2go-Api-Key': SMTP2GO_API_KEY,
      },
      body: JSON.stringify(emailPayload),
    });

    const result = await smtp2goResponse.json();

    if (smtp2goResponse.ok && result.data && result.data.succeeded > 0) {
      console.log('Email sent successfully:', result);
      return NextResponse.json(
        {
          success: true,
          message: 'Ďakujeme! Vaša správa bola úspešne odoslaná.',
          details: 'Message sent successfully via SMTP2GO.',
        },
        { status: 200, headers }
      );
    } else {
      console.error('SMTP2GO API error:', result);
      return NextResponse.json(
        {
          error: 'Chyba pri odosielaní emailu.',
          details: result.data?.error || 'Failed to send email via SMTP2GO.',
        },
        { status: 500, headers }
      );
    }
  } catch (error: unknown) {
    console.error('Error processing contact form:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error.';
    return NextResponse.json(
      {
        error: 'Nastala chyba pri spracovaní vašej správy.',
        details: errorMessage,
      },
      { status: 500, headers }
    );
  }
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin');
  if (origin && !allowedCorsOrigin(origin)) {
    return new NextResponse(null, { status: 403, headers: { Vary: 'Origin' } });
  }

  const allowedOrigin = allowedCorsOrigin(origin);
  const headers = {
    ...(allowedOrigin ? { 'Access-Control-Allow-Origin': allowedOrigin } : {}),
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
  return new NextResponse(null, { status: 204, headers });
}
