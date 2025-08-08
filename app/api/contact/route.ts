import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate required field
    if (!email) {
      return NextResponse.json(
        { error: 'Missing email field' },
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
      subject: 'New Contact - RISE Enterprises',
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1e293b;">New Contact Submission</h2>
        <p style="font-size: 16px; color: #334155;">A user submitted their email via the website:</p>
        <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; font-size: 18px; color: #1e293b;">
          <strong>Email:</strong> ${email}
        </div>
        <p style="color: #64748b; font-size: 12px; margin-top: 30px;">© 2025 RISE Enterprises | Website Contact</p>
      </div>`
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