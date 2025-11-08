/**
 * Netlify Serverless Function - Contact Form Handler
 * Sends emails via SMTP2GO API
 *
 * Environment Variables Required:
 * - SMTP2GO_API_KEY: Your SMTP2GO API key
 * - SMTP2GO_FROM_EMAIL: Sender email address (must be verified in SMTP2GO)
 * - BUSINESS_EMAIL: Email address to receive contact form submissions
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
    const { name, email, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: 'Všetky polia sú povinné.',
          details: 'Name, email, and message are required fields.'
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
      subject: `Nová správa z kontaktného formulára - ${name}`,
      text_body: `
Nová správa z kontaktného formulára AEB Digital

Od: ${name}
Email: ${email}

Správa:
${message}

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
    body {
      font-family: 'Montserrat', Arial, sans-serif;
      line-height: 1.6;
      color: #ffffff;
      background: #16171A;
      margin: 0;
      padding: 40px 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
    }
    .heading {
      color: #ffffff;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 30px;
      text-align: center;
      font-family: 'Montserrat', Arial, sans-serif;
    }
    .form-container {
      background: rgba(255, 255, 255, 0.05);
      padding: 30px;
      border-radius: 20px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .form-group {
      margin-bottom: 20px;
    }
    .label {
      display: block;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 8px;
      font-size: 0.95rem;
      font-family: 'Montserrat', Arial, sans-serif;
    }
    .value {
      background: rgba(255, 255, 255, 0.1);
      padding: 12px 16px;
      border-radius: 10px;
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.2);
      font-family: 'Montserrat', Arial, sans-serif;
    }
    .value a {
      color: #00997d;
      text-decoration: none;
    }
    .message-box {
      background: rgba(255, 255, 255, 0.1);
      padding: 15px;
      border-radius: 10px;
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.2);
      min-height: 100px;
      white-space: pre-wrap;
      font-family: 'Montserrat', Arial, sans-serif;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 12px;
      color: rgba(255, 255, 255, 0.6);
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2 class="heading">Nová správa z kontaktného formulára</h2>
    <div class="form-container">
      <div class="form-group">
        <div class="label">Meno *</div>
        <div class="value">${name}</div>
      </div>
      <div class="form-group">
        <div class="label">Email *</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="form-group">
        <div class="label">Správa *</div>
        <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
      </div>
      <div class="footer">
        <p>Odoslané z: ${event.headers.referer || 'Unknown'}<br>
        IP: ${event.headers['x-forwarded-for'] || event.headers['client-ip'] || 'Unknown'}<br>
        ${new Date().toLocaleString('sk-SK', { timeZone: 'Europe/Bratislava' })}</p>
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
      console.log('Email sent successfully:', result);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: 'Ďakujeme! Vaša správa bola úspešne odoslaná.',
          details: 'Message sent successfully via SMTP2GO.'
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
    console.error('Error processing contact form:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Nastala chyba pri spracovaní vašej správy.',
        details: error.message || 'Internal server error.'
      })
    };
  }
};
