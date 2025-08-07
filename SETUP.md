# RISE Enterprises - Contact Form Backend Setup Guide

## Overview
This implementation adds backend functionality to the contact form using Next.js API routes with Resend email notifications.

## Features
- ✅ Email notifications to admin (swarajp363@gmail.com)
- ✅ Confirmation emails to users
- ✅ Form data validation
- ✅ In-memory data storage (can be replaced with database)
- ✅ Error handling and success responses
- ✅ Loading states and user feedback
- ✅ Vercel deployment ready

## Setup Instructions

### 1. Environment Variables
Create a `.env.local` file in the root directory with the following variables:

```env
# Email Configuration for Contact Form
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 2. Gmail App Password Setup
For Gmail authentication, you need to use an App Password:

1. Go to your Google Account settings: https://myaccount.google.com/
2. Enable 2-Step Verification if not already enabled
3. Go to Security > App passwords
4. Generate a new app password for "Mail"
5. Use that password in the `EMAIL_PASS` environment variable

### 3. Email Configuration
Update the email configuration in `app/api/contact/route.ts`:

```typescript
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});
```

### 4. Admin Email
The admin notification email is set to `swarajp363@gmail.com`. You can change this in the API route:

```typescript
const adminEmail = 'swarajp363@gmail.com';
```

## API Endpoints

### POST /api/contact
Handles form submissions with the following data:
- `name` (required): Full name
- `email` (required): Email address
- `phone` (required): Phone number
- `budget` (optional): Project budget range
- `project` (required): Project type
- `message` (required): Project details

### GET /api/contact
Retrieves all form submissions (for admin purposes)

## Form Features

### Frontend Enhancements
- Loading states during submission
- Success/error message display
- Form field validation
- Disabled form during submission
- Automatic form reset on success

### Email Templates
- **Admin Notification**: Detailed project inquiry with contact information
- **User Confirmation**: Thank you email with project details and company contact info

## Deployment on Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your Gmail app password
4. Deploy

## Alternative Email Services

### Using Resend (Recommended for Production)
Replace nodemailer with Resend for better deliverability:

```bash
npm install resend
```

Update the API route:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Send email
await resend.emails.send({
  from: 'noreply@yourdomain.com',
  to: [adminEmail],
  subject: adminSubject,
  html: adminHtml,
});
```

### Using Other Email Services
- **SendGrid**: `npm install @sendgrid/mail`
- **Mailgun**: `npm install mailgun.js`
- **AWS SES**: `npm install @aws-sdk/client-ses`

## Data Storage Options

### Current: In-Memory Storage
Form data is stored in memory (resets on server restart).

### Production Recommendations:
1. **Database**: PostgreSQL, MongoDB, or Supabase
2. **Google Sheets**: Using Google Sheets API
3. **Airtable**: Using Airtable API
4. **Notion**: Using Notion API

## Security Considerations

1. **Rate Limiting**: Implement rate limiting to prevent spam
2. **CORS**: Configure CORS for production domains
3. **Input Sanitization**: Sanitize user inputs
4. **Email Validation**: Validate email format and domain
5. **CAPTCHA**: Consider adding reCAPTCHA for spam protection

## Testing

Test the contact form by:
1. Filling out the form with valid data
2. Checking admin email for notification
3. Checking user email for confirmation
4. Testing error scenarios (invalid email, missing fields)

## Troubleshooting

### Common Issues:
1. **Email not sending**: Check Gmail app password and 2FA settings
2. **CORS errors**: Configure CORS in production
3. **Environment variables**: Ensure `.env.local` is properly configured
4. **Vercel deployment**: Add environment variables in Vercel dashboard

### Debug Mode:
Add console logs in the API route for debugging:
```typescript
console.log('Form submission:', body);
console.log('Email sent to admin:', adminEmail);
``` 