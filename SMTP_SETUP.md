# SMTP2GO Contact Form Setup Guide

This guide will help you set up the SMTP2GO email service for the AEB Digital contact form on Netlify.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [SMTP2GO Account Setup](#smtp2go-account-setup)
3. [Netlify Configuration](#netlify-configuration)
4. [Testing the Contact Form](#testing-the-contact-form)
5. [Troubleshooting](#troubleshooting)

---

## Prerequisites

- Netlify account with your site deployed
- Access to your domain's DNS settings (for sender verification)
- SMTP2GO account (free tier available)

---

## SMTP2GO Account Setup

### Step 1: Create SMTP2GO Account

1. Go to [SMTP2GO](https://www.smtp2go.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Verify Sender Email Address

1. Log in to your SMTP2GO dashboard
2. Navigate to **Settings → Senders**
3. Click **Add a New Sender**
4. Enter your sender email (e.g., `noreply@aebdigital.sk` or `info@aebdigital.sk`)
5. Follow the verification process:
   - **Option A**: Email verification (SMTP2GO sends verification link to that address)
   - **Option B**: DNS verification (add TXT record to your domain)
6. Wait for verification to complete

### Step 3: Generate API Key

1. In SMTP2GO dashboard, go to **Settings → API Keys**
2. Click **Add a New API Key**
3. Give it a descriptive name (e.g., "AEB Digital Contact Form")
4. Select permissions: **Send Email** (minimum required)
5. Click **Create API Key**
6. **IMPORTANT**: Copy the API key immediately - you won't be able to see it again!

---

## Netlify Configuration

### Step 1: Deploy to Netlify

1. Push your code to GitHub (already done!)
2. Log in to [Netlify](https://www.netlify.com/)
3. Click **Add new site → Import an existing project**
4. Connect to GitHub and select your repository: `aebdigital/aeb_web`
5. Configure build settings:
   - **Build command**: Leave empty (static site)
   - **Publish directory**: `.` (root directory)
6. Click **Deploy site**

### Step 2: Add Environment Variables

1. In Netlify dashboard, go to your site
2. Navigate to **Site settings → Environment variables**
3. Click **Add a variable** and add the following three variables:

#### Variable 1: SMTP2GO_API_KEY
- **Key**: `SMTP2GO_API_KEY`
- **Value**: Your SMTP2GO API key (from Step 3 above)
- **Scopes**: Check "All scopes"

#### Variable 2: SMTP2GO_SENDER
- **Key**: `SMTP2GO_SENDER`
- **Value**: Your verified sender email (e.g., `noreply@aebdigital.sk`)
- **Scopes**: Check "All scopes"

#### Variable 3: CONTACT_EMAIL
- **Key**: `CONTACT_EMAIL`
- **Value**: Email address to receive contact form submissions (e.g., `info@aebdigital.sk`)
- **Scopes**: Check "All scopes"

4. Click **Save** for each variable

### Step 3: Redeploy Site

1. After adding environment variables, go to **Deploys** tab
2. Click **Trigger deploy → Clear cache and deploy site**
3. Wait for deployment to complete

---

## Testing the Contact Form

### Step 1: Test Form Submission

1. Visit your live site: `https://your-site-name.netlify.app`
2. Navigate to the contact form (on home page or `/kontakt`)
3. Fill out the form with test data:
   - **Name**: Test User
   - **Email**: your-email@example.com
   - **Type**: Select any project type
   - **Message**: Test message from contact form
4. Click **Odoslať správu** (Send message)

### Step 2: Verify Success

1. You should see success message: "Ďakujeme! Vaša správa bola úspešne odoslaná."
2. Check the email inbox of `CONTACT_EMAIL`
3. You should receive an email with:
   - Subject: "Nová správa z kontaktného formulára - Test User"
   - Formatted HTML email with all form details

### Step 3: Check SMTP2GO Dashboard

1. Log in to SMTP2GO dashboard
2. Go to **Activity → Email Logs**
3. You should see the sent email with status "Delivered"

---

## Troubleshooting

### Issue: "Konfiguračná chyba servera" (Server configuration error)

**Solution**:
- Environment variables are not set correctly in Netlify
- Go to Netlify → Site settings → Environment variables
- Verify all three variables are added: `SMTP2GO_API_KEY`, `SMTP2GO_SENDER`, `CONTACT_EMAIL`
- Redeploy the site after adding variables

### Issue: "Chyba pri odosielaní emailu" (Error sending email)

**Solution**:
- Check that sender email is verified in SMTP2GO
- Go to SMTP2GO → Settings → Senders
- Ensure the email in `SMTP2GO_SENDER` has status "Verified"

### Issue: Email not arriving

**Solution**:
- Check spam/junk folder
- Verify `CONTACT_EMAIL` is correct
- Check SMTP2GO dashboard → Activity → Email Logs for delivery status

### Issue: API Key invalid

**Solution**:
- Generate a new API key in SMTP2GO dashboard
- Update `SMTP2GO_API_KEY` in Netlify environment variables
- Redeploy the site

### Issue: Form shows "Nastala chyba pri spracovaní" (Processing error)

**Solution**:
- Check Netlify Functions logs:
  1. Netlify Dashboard → Functions tab
  2. Click on `contact` function
  3. View real-time logs for error details
- Common causes:
  - Missing required fields (name, email, message)
  - Invalid email format
  - Network timeout

---

## Additional Configuration

### Custom Domain Setup

If you're using a custom domain (e.g., `aebdigital.sk`):

1. Update `SMTP2GO_SENDER` to use your domain (e.g., `noreply@aebdigital.sk`)
2. Verify sender email in SMTP2GO using DNS verification
3. Add TXT record to your domain's DNS settings as instructed by SMTP2GO

### SMTP2GO Free Tier Limits

- **1,000 emails per month** (free tier)
- If you exceed this, consider upgrading or using alternative email service
- Monitor usage in SMTP2GO dashboard

### Rate Limiting

The contact form has built-in protection:
- Client-side validation prevents empty submissions
- Server-side validation ensures data integrity
- Consider adding reCAPTCHA for spam protection (future enhancement)

---

## File Structure Reference

Files that power the SMTP2GO contact form:

```
/
├── _redirects                          # Netlify URL redirects
├── netlify.toml                        # Netlify configuration
├── .env.example                        # Environment variables template
├── netlify/functions/contact.js        # Serverless function for email sending
├── js/contact-form.js                  # Client-side form handling
├── styles/components/contact-form.css  # Form styling and loading states
└── SMTP_SETUP.md                       # This file
```

---

## Support

If you need help:

1. Check [SMTP2GO Documentation](https://apidoc.smtp2go.com/)
2. Check [Netlify Functions Documentation](https://docs.netlify.com/functions/overview/)
3. Review Netlify function logs for errors
4. Contact SMTP2GO support for email delivery issues

---

## Security Notes

- ✅ **Never commit `.env` file** to Git (already in `.gitignore`)
- ✅ **API keys are stored as environment variables** in Netlify (secure)
- ✅ **CORS is configured** in the serverless function
- ✅ **Email validation** prevents malformed submissions
- ⚠️ **Consider adding reCAPTCHA** to prevent spam (future enhancement)

---

**Last Updated**: 2025-11-08
**Version**: 1.0
