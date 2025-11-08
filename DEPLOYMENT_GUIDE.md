# AEB Digital - Netlify Deployment Guide

## 🚀 Quick Start

Your AEB Digital website is now ready for deployment on Netlify with SMTP2GO email integration!

### What Was Changed

✅ **Replaced** `.htaccess` with Netlify `_redirects` file
✅ **Created** Netlify configuration (`netlify.toml`)
✅ **Built** serverless contact form with SMTP2GO
✅ **Updated** contact form JavaScript to use async/await
✅ **Added** loading states and success/error messages
✅ **Created** comprehensive setup documentation

---

## 📂 New Files Created

| File | Purpose |
|------|---------|
| `_redirects` | Netlify URL redirects for clean URLs |
| `netlify.toml` | Netlify build and function configuration |
| `netlify/functions/contact.js` | Serverless function for email sending |
| `.env.example` | Environment variables template |
| `SMTP_SETUP.md` | Complete SMTP2GO setup instructions |
| `DEPLOYMENT_GUIDE.md` | This file |

---

## 🔧 Files Modified

| File | Changes |
|------|---------|
| `js/contact-form.js` | Updated to use Netlify serverless function with async/await |
| `styles/components/contact-form.css` | Added loading spinner, success/error message styles |

---

## 🌐 Deployment Steps

### 1. Push to GitHub ✅ (Already Done!)

Your code is now at: **https://github.com/aebdigital/aeb_web**

### 2. Deploy to Netlify

1. Go to [Netlify](https://www.netlify.com/) and sign up/login
2. Click **"Add new site" → "Import an existing project"**
3. Connect to GitHub and select: `aebdigital/aeb_web`
4. Configure build settings:
   - **Build command**: Leave empty
   - **Publish directory**: `.` (root)
   - **Functions directory**: `netlify/functions` (auto-detected)
5. Click **"Deploy site"**

### 3. Configure SMTP2GO

Follow the detailed instructions in **[SMTP_SETUP.md](SMTP_SETUP.md)**

**Quick Summary:**
1. Create account at [SMTP2GO](https://www.smtp2go.com/)
2. Verify sender email address
3. Generate API key
4. Add environment variables in Netlify:
   - `SMTP2GO_API_KEY`
   - `SMTP2GO_SENDER`
   - `CONTACT_EMAIL`

### 4. Test Contact Form

1. Visit your deployed site
2. Fill out the contact form
3. Submit and verify email delivery
4. Check SMTP2GO dashboard for logs

---

## 🔗 Clean URL Structure

The `_redirects` file provides clean URLs:

| Clean URL | Actual File |
|-----------|-------------|
| `/blog` | `/subpages/blog.html` |
| `/kontakt` | `/subpages/kontakt.html` |
| `/o-nas` | `/subpages/o-nas.html` |
| `/portfolio` | `/subpages/portfolio.html` |
| `/sluzby` | `/subpages/sluzby.html` |
| `/api/contact` | `/.netlify/functions/contact` |

---

## 📧 Contact Form Features

### Client-Side (JavaScript)
- ✅ Form validation (required fields, email format)
- ✅ Loading spinner during submission
- ✅ Success/error message display
- ✅ Auto-reset form on success
- ✅ Comprehensive error handling

### Server-Side (Netlify Function)
- ✅ SMTP2GO API integration
- ✅ HTML formatted emails
- ✅ Metadata tracking (IP, timestamp, referrer)
- ✅ Slovak language support
- ✅ CORS headers for security
- ✅ Environment variable configuration

---

## 🎨 Form Message Styles

### Success Message
- Green background with glow effect
- Auto-hides after 5 seconds
- Slide-down animation

### Error Message
- Red background with glow effect
- Stays visible until dismissed
- Slide-down animation

### Loading State
- Animated spinner icon
- Disabled submit button
- "Odosiela sa..." text

---

## 🔒 Security Features

- ✅ Environment variables stored securely in Netlify
- ✅ API keys never exposed to client
- ✅ CORS configured for API endpoint
- ✅ Email validation on both client and server
- ✅ Security headers in `netlify.toml`
- ⚠️ **Recommended**: Add reCAPTCHA to prevent spam (future enhancement)

---

## 📊 SMTP2GO Free Tier

- **1,000 emails/month** included
- Monitor usage in SMTP2GO dashboard
- Upgrade if needed for higher volume

---

## 🐛 Troubleshooting

### Form submission fails
1. Check Netlify environment variables are set
2. Verify SMTP2GO sender email is verified
3. Check Netlify Functions logs for errors

### Emails not arriving
1. Check spam/junk folder
2. Verify `CONTACT_EMAIL` is correct
3. Check SMTP2GO dashboard → Email Logs

### Configuration error
1. Ensure all 3 environment variables are set
2. Redeploy site after adding variables
3. Check API key is valid in SMTP2GO

**Full troubleshooting guide**: See [SMTP_SETUP.md](SMTP_SETUP.md)

---

## 📞 Support Resources

- **SMTP2GO Docs**: https://apidoc.smtp2go.com/
- **Netlify Functions**: https://docs.netlify.com/functions/overview/
- **Repository**: https://github.com/aebdigital/aeb_web

---

## 🎯 Next Steps

1. ✅ Deploy to Netlify
2. ✅ Configure SMTP2GO environment variables
3. ✅ Test contact form submission
4. ⚠️ (Optional) Add custom domain
5. ⚠️ (Optional) Add reCAPTCHA for spam protection
6. ⚠️ (Optional) Set up analytics (Google Analytics, Plausible, etc.)

---

## 📝 Notes

- The old PHP file `send-contact-simple.php` is no longer needed
- All contact form processing now happens via Netlify serverless functions
- Form works in both development (local) and production (Netlify)
- Slovak language messages throughout the form and emails

---

**Last Updated**: 2025-11-08
**Version**: 1.0
**Status**: Ready for deployment ✅
