import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields. Please provide name, email, and phone number.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone format (basic validation for numbers and common formats)
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,15}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Validate name length
    if (name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters long' },
        { status: 400 }
      );
    }

    // Check SMTP config
    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.OWNER_EMAIL) {
      return NextResponse.json(
        { error: 'SMTP configuration is missing. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, OWNER_EMAIL in your environment.' },
        { status: 500 }
      );
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `RISE Enterprises <${process.env.SMTP_USER}>`,
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
              New Business Inquiry Received
            </h2>
            <p style="color: #64748b; margin: 8px 0 0 0; font-size: 15px;">
              A potential client has submitted their contact information through your website.
            </p>
          </div>

          <!-- Main Content -->
          <div style="padding: 35px 30px;">
            
            <!-- Client Information Section -->
            <div style="margin-bottom: 30px;">
              <h3 style="color: #1e293b; font-size: 16px; font-weight: 600; margin: 0 0 20px 0; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
                Client Information
              </h3>
              
              <table style="width: 100%; border-collapse: collapse; background: #f8fafc; border: 1px solid #e2e8f0;">
                <tr>
                  <td style="padding: 15px 20px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #374151; width: 140px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                    Full Name:
                  </td>
                  <td style="padding: 15px 20px; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 16px; font-weight: 600;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 20px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #374151; width: 140px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                    Email Address:
                  </td>
                  <td style="padding: 15px 20px; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 16px; font-weight: 600;">
                    ${email}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 20px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #374151; width: 140px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                    Phone Number:
                  </td>
                  <td style="padding: 15px 20px; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 16px; font-weight: 600;">
                    ${phone}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 20px; font-weight: 600; color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                    Submission Date:
                  </td>
                  <td style="padding: 15px 20px; color: #64748b; font-size: 15px;">
                    ${new Date().toLocaleString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      timeZoneName: 'short'
                    })}
                  </td>
                </tr>
              </table>
            </div>

            <!-- Action Items -->
            <div style="background: #fef9e7; border-left: 4px solid #f59e0b; padding: 20px 25px; margin: 30px 0;">
              <h3 style="color: #92400e; font-size: 16px; font-weight: 600; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.5px;">
                Immediate Action Required
              </h3>
              <p style="color: #78350f; margin: 0; font-size: 15px; line-height: 1.6;">
                Industry best practices recommend responding to business inquiries within 2 hours to maximize conversion rates and demonstrate professional responsiveness.
              </p>
            </div>

            <!-- Quick Response Section -->
            <div style="text-align: center; margin: 35px 0;">
              <h3 style="color: #1e293b; font-size: 16px; font-weight: 600; margin: 0 0 20px 0; text-transform: uppercase; letter-spacing: 0.5px;">
                Quick Response Actions
              </h3>
              <a href="mailto:${email}?subject=RE: Your Inquiry - RISE Enterprises Construction Services&body=Dear ${name},%0D%0A%0D%0AThank you for your interest in RISE Enterprises. We appreciate you reaching out to us regarding your construction and development needs.%0D%0A%0D%0AAs a premier civil construction company with over 391,000+ sq ft of completed projects, we would be delighted to discuss how we can assist with your project requirements.%0D%0A%0D%0AWould you be available for a brief consultation call this week to discuss your project in detail? I have your contact number as ${phone} - would this be the best number to reach you?%0D%0A%0D%0ABest regards,%0D%0A%0D%0ARISE Enterprises%0D%0APremier Civil Construction & Development%0D%0ABuilding Excellence Since 2022" 
                 style="display: inline-block; background: #1e293b; color: #ffffff; padding: 15px 35px; text-decoration: none; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border: none; transition: all 0.3s ease;">
                Send Professional Response
              </a>
            </div>

            <!-- Company Stats Reminder -->
            <div style="background: #f1f5f9; border: 1px solid #cbd5e1; padding: 25px; margin: 30px 0;">
              <h3 style="color: #1e293b; font-size: 16px; font-weight: 600; margin: 0 0 15px 0; text-align: center; text-transform: uppercase; letter-spacing: 0.5px;">
                Your Company Credentials
              </h3>
              <div style="display: flex; justify-content: space-around; text-align: center; flex-wrap: wrap;">
                <div style="margin: 10px;">
                  <div style="font-size: 20px; font-weight: 700; color: #1e293b;">391,000+</div>
                  <div style="font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Sq Ft Completed</div>
                </div>
                <div style="margin: 10px;">
                  <div style="font-size: 20px; font-weight: 700; color: #1e293b;">50+</div>
                  <div style="font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Projects Delivered</div>
                </div>
                <div style="margin: 10px;">
                  <div style="font-size: 20px; font-weight: 700; color: #1e293b;">2022</div>
                  <div style="font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Established</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #1e293b; padding: 25px 30px; text-align: center;">
            <div style="color: #cbd5e1; font-size: 11px; line-height: 1.8; text-transform: uppercase; letter-spacing: 1px;">
              <strong style="color: #ffffff;">RISE ENTERPRISES</strong><br>
              Premier Civil Construction & Development Services<br>
              Pune, Maharashtra | Building Excellence Since 2022<br>
              <span style="color: #94a3b8;">This is an automated notification from your website contact system</span>
            </div>
          </div>
        </div>
      `
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! The owner will contact you soon.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        error: 'An error occurred while processing your request. Please try again later.' 
      },
      { status: 500 }
    );
  }
} 