/**
 * Netlify Serverless Function - Newsletter Subscription Handler
 * Sends newsletter subscription notifications via SMTP2GO API
 *
 * Environment Variables Required:
 * - SMTP2GO_API_KEY: Your SMTP2GO API key
 * - SMTP2GO_FROM_EMAIL: Sender email address (must be verified in SMTP2GO)
 * - BUSINESS_EMAIL: Email address to receive newsletter subscription notifications
 */

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Parse form data
    const data = JSON.parse(event.body);
    const { email } = data;

    // Validate required fields
    if (!email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: 'Email je povinný.',
          details: 'Email address is required.'
        })
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: 'Neplatná emailová adresa.',
          details: 'Invalid email format.'
        })
      };
    }

    // Get environment variables
    const SMTP2GO_API_KEY = process.env.SMTP2GO_API_KEY;
    const SMTP2GO_FROM_EMAIL = process.env.SMTP2GO_FROM_EMAIL;
    const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || process.env.SMTP2GO_FROM_EMAIL;

    // Check if API key is configured
    if (!SMTP2GO_API_KEY) {
      console.error('SMTP2GO_API_KEY not configured');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: 'Konfiguračná chyba servera.',
          details: 'Email service not configured. Please contact administrator.'
        })
      };
    }

    // Prepare email payload for SMTP2GO API
    const emailPayload = {
      api_key: SMTP2GO_API_KEY,
      to: [BUSINESS_EMAIL],
      sender: SMTP2GO_FROM_EMAIL,
      subject: `Nový odber newslettra - ${email}`,
      text_body: `
Nový odber newslettra - AEB Digital

Email: ${email}

---
Odoslané z: ${event.headers.referer || 'Unknown'}
IP adresa: ${event.headers['x-forwarded-for'] || event.headers['client-ip'] || 'Unknown'}
Čas: ${new Date().toLocaleString('sk-SK', { timeZone: 'Europe/Bratislava' })}
      `.trim(),
      html_body: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #00997d; color: white; padding: 20px; text-align: center; }
    .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #00997d; }
    .value { margin-top: 5px; font-size: 18px; }
    .email-box { background-color: white; padding: 15px; border-left: 4px solid #00997d; margin-top: 10px; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
    .icon { font-size: 48px; margin-bottom: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="icon">📧</div>
      <h2>Nový odber newslettra</h2>
      <p>AEB Digital Website</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Nový odberateľ:</div>
        <div class="email-box">
          <div class="value"><a href="mailto:${email}">${email}</a></div>
        </div>
      </div>
      <div class="footer">
        <p><strong>Metadata:</strong></p>
        <p>Odoslané z: ${event.headers.referer || 'Unknown'}<br>
        IP adresa: ${event.headers['x-forwarded-for'] || event.headers['client-ip'] || 'Unknown'}<br>
        Čas: ${new Date().toLocaleString('sk-SK', { timeZone: 'Europe/Bratislava' })}</p>
      </div>
    </div>
  </div>
</body>
</html>
      `.trim()
    };

    // Send email via SMTP2GO API
    const response = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Smtp2go-Api-Key': SMTP2GO_API_KEY
      },
      body: JSON.stringify(emailPayload)
    });

    const result = await response.json();

    // Check SMTP2GO response
    if (response.ok && result.data && result.data.succeeded > 0) {
      console.log('Newsletter subscription email sent successfully:', result);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: 'Ďakujeme za prihlásenie do newslettra!',
          details: 'Newsletter subscription email sent successfully via SMTP2GO.'
        })
      };
    } else {
      console.error('SMTP2GO API error:', result);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: 'Chyba pri odosielaní emailu.',
          details: result.data?.error || 'Failed to send email via SMTP2GO.'
        })
      };
    }

  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Nastala chyba pri spracovaní prihlásenia.',
        details: error.message || 'Internal server error.'
      })
    };
  }
};
