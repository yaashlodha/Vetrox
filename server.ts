import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/contact", async (req, res) => {
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

      // If using Gmail, use the specialized 'service' config which is more reliable
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
        },
        debug: true,
        logger: true
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
        replyTo: email, // Allow the recipient to reply to the person who filled the form
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
        console.log("Email sent successfully to info@vetrox.co.in");
      } else {
        console.log("Email simulation mode active (Missing SMTP credentials). Message details:");
        console.log(mailOptions.text);
      }

      res.status(200).json({ status: "ok" });
    } catch (error) {
      console.error("Detailed SMTP Error:", error);
      
      const errorMessage = error instanceof Error ? error.message : "Unknown SMTP error";
      
      res.status(500).json({ 
        error: "Authentication failed with the email provider.",
        details: errorMessage,
        suggestion: "Please verify your EMAIL_USER and EMAIL_PASS. If you have 2FA enabled, you may need an 'App Password'."
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
