import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, budget, project, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !project || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    // Create email HTML content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: white; padding: 30px; border-radius: 10px; margin-bottom: 20px;">
          <h1 style="margin: 0; font-size: 28px; text-align: center;">RISE ENTERPRISES</h1>
          <p style="margin: 10px 0 0 0; text-align: center; opacity: 0.9;">New Project Inquiry Received</p>
        </div>
        
        <div style="background-color: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #1e293b; margin-top: 0; border-bottom: 2px solid #475569; padding-bottom: 10px;">
            Contact Information
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #334155; width: 120px;">Full Name:</td>
              <td style="padding: 8px 0; color: #475569;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #334155;">Email Address:</td>
              <td style="padding: 8px 0; color: #475569;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #334155;">Phone Number:</td>
              <td style="padding: 8px 0; color: #475569;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #334155;">Project Budget:</td>
              <td style="padding: 8px 0; color: #475569;">${budget || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #334155;">Project Type:</td>
              <td style="padding: 8px 0; color: #475569;">${project}</td>
            </tr>
          </table>
        </div>
        
        <div style="background-color: #f1f5f9; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #1e293b; margin-top: 0; border-bottom: 2px solid #475569; padding-bottom: 10px;">
            Project Details
          </h2>
          <div style="background-color: white; padding: 20px; border-radius: 6px; border-left: 4px solid #475569;">
            <p style="margin: 0; line-height: 1.6; color: #334155; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        
        <div style="background-color: #e2e8f0; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #334155; margin-top: 0;">Submission Details</h3>
          <p style="margin: 0; color: #475569; font-size: 14px;">
            <strong>Submitted:</strong> ${new Date().toLocaleString('en-IN', { 
              timeZone: 'Asia/Kolkata',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
          <p style="margin: 5px 0 0 0; color: #475569; font-size: 14px;">
            <strong>Source:</strong> RISE Enterprises Website Contact Form
          </p>
        </div>
        
        <div style="text-align: center; padding: 20px; background-color: #f8fafc; border-radius: 8px;">
          <p style="margin: 0; color: #64748b; font-size: 12px;">
            This inquiry was submitted through the RISE Enterprises website contact form.<br>
            Please respond to the client within 24 hours.
          </p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 12px; margin: 0;">
            © 2025 RISE Enterprises | Building Excellence Since 2022 | Pune, Maharashtra
          </p>
        </div>
      </div>
    `;

    // Check if API key is properly configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy-key') {
      console.log('Resend API key not configured - skipping email send');
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your inquiry! We will contact you within 24 hours.',
          note: 'Email notification skipped - API key not configured'
        },
        { status: 200 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'RISE Enterprises <noreply@riseenterprises.com>', // Update with your verified domain
      to: ['swarajp363@gmail.com'],
      subject: 'New Project Inquiry - RISE Enterprises',
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email notification' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your inquiry! We will contact you within 24 hours.',
        emailId: data?.id
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