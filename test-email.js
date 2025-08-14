// Test script to verify SMTP configuration
// Run with: node test-email.js

const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testEmail() {
  console.log('Testing email configuration...');
  
  // Check if all required env vars are set
  const requiredVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'OWNER_EMAIL'];
  const missing = requiredVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    console.error('❌ Missing environment variables:', missing);
    return;
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify connection
    await transporter.verify();
    console.log('✅ SMTP connection successful');

    // Send test email
    const info = await transporter.sendMail({
      from: `RISE Enterprises Test <${process.env.SMTP_USER}>`,
      to: process.env.OWNER_EMAIL,
      subject: 'New Business Inquiry - RISE Enterprises',
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e7eb;">
          
          <!-- Header -->
          <div style="background: #1e293b; padding: 40px 30px; border-bottom: 3px solid #334155;">
            <div style="text-align: center;">
              <h1 style="color: #ffffff; font-size: 32px; font-weight: 700; margin: 0; letter-spacing: 3px; text-transform: uppercase;">
                RISE ENTERPRISES
              </h1>
              <div style="width: 80px; height: 2px; background: #94a3b8; margin: 15px auto 10px;"></div>
              <p style="color: #cbd5e1; margin: 0; font-size: 14px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase;">
                Premier Civil Construction & Development
              </p>
            </div>
          </div>

          <!-- Content Header -->
          <div style="background: #f8fafc; padding: 25px 30px; border-bottom: 1px solid #e2e8f0;">
            <h2 style="color: #1e293b; font-size: 22px; font-weight: 600; margin: 0; text-transform: uppercase; letter-spacing: 1px;">
              Test Email - System Working!
            </h2>
            <p style="color: #64748b; margin: 8px 0 0 0; font-size: 15px;">
              Your contact form with name, email, and phone is ready to receive submissions.
            </p>
          </div>

          <!-- Main Content -->
          <div style="padding: 35px 30px;">
            <table style="width: 100%; border-collapse: collapse; background: #f8fafc; border: 1px solid #e2e8f0;">
              <tr>
                <td style="padding: 15px 20px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #374151; width: 140px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                  Full Name:
                </td>
                <td style="padding: 15px 20px; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 16px; font-weight: 600;">
                  Test User
                </td>
              </tr>
              <tr>
                <td style="padding: 15px 20px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #374151; width: 140px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                  Email Address:
                </td>
                <td style="padding: 15px 20px; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 16px; font-weight: 600;">
                  test@example.com
                </td>
              </tr>
              <tr>
                <td style="padding: 15px 20px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #374151; width: 140px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                  Phone Number:
                </td>
                <td style="padding: 15px 20px; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 16px; font-weight: 600;">
                  +91 9876543210
                </td>
              </tr>
            </table>
          </div>
        </div>
      `
    });

    console.log('✅ Test email sent successfully');
    console.log('Message ID:', info.messageId);
    
  } catch (error) {
    console.error('❌ Email test failed:', error.message);
    
    // Common error solutions
    if (error.message.includes('Invalid login')) {
      console.log('\n💡 Solution: Check your email and app password');
      console.log('   - For Gmail: Use App Password, not regular password');
      console.log('   - Enable 2FA first, then generate App Password');
    }
    
    if (error.message.includes('getaddrinfo ENOTFOUND')) {
      console.log('\n💡 Solution: Check your SMTP host');
      console.log('   - Gmail: smtp.gmail.com');
      console.log('   - Outlook: smtp-mail.outlook.com');
    }
  }
}

testEmail();
