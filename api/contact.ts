import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, company, phone, email, requirement } = req.body;

  // Validate data
  if (!name || !company || !phone || !email || !requirement) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailHost = process.env.EMAIL_HOST || "smtp.titan.email";
    const emailPort = Number(process.env.EMAIL_PORT) || 465;
    const emailSecure = process.env.EMAIL_SECURE === "true" || emailPort === 465;

    if (!emailUser || !emailPass) {
      console.warn("EMAIL_USER or EMAIL_PASS environment variables are missing.");
    }

    const transportConfig: any = {
      host: emailHost,
      port: emailPort,
      secure: emailSecure,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: "TLSv1.2"
      }
    };

    if (emailHost.includes("gmail.com")) {
      delete transportConfig.host;
      delete transportConfig.port;
      delete transportConfig.secure;
      transportConfig.service = "gmail";
    }

    const transporter = nodemailer.createTransport(transportConfig);

    const mailOptions = {
      from: emailUser,
      to: "info@vetrox.co.in",
      subject: `New Contact Request from ${name} (${company})`,
      text: `
        Name: ${name}
        Company: ${company}
        Phone: ${phone}
        Email: ${email}
        
        Requirement:
        ${requirement}
      `,
      replyTo: email,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Requirement:</strong></p>
        <p>${requirement.replace(/\n/g, '<br>')}</p>
      `,
    };

    if (emailUser && emailPass) {
      await transporter.sendMail(mailOptions);
    } else {
      console.log("Email simulation mode active (Missing SMTP credentials).");
      console.log(mailOptions.text);
    }

    return res.status(200).json({ status: "ok" });
  } catch (error) {
    console.error("Detailed SMTP Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown SMTP error";
    
    return res.status(500).json({ 
      error: "Authentication failed with the email provider.",
      details: errorMessage
    });
  }
}
