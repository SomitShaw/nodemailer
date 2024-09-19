const nodemailer = require("nodemailer");
require('dotenv').config(); // Import and configure dotenv

async function main() {
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // SMTP server address from .env
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // Email address from .env
      pass: process.env.EMAIL_PASS, // Password from .env
    },
  });

  // Define and send message
  let info = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: "otsh@novonordisk.com",
    subject: "Testing mails via NodeMailer !!",
    html: `
      <div style="
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      background-color: #f7f7f7;
      text-align: center;
    ">
      <h1 style="color: #333; margin-bottom: 20px;">🎉 You're Invited! 🎉</h1>
      <p style="font-size: 18px; color: #555; margin-bottom: 20px;">
        We are excited to invite you to our upcoming event. Don’t miss the chance to be part of something great!
      </p>
      <p style="font-size: 16px; color: #777; margin-bottom: 30px;">
        Nodemailer working just fine !!
      </p>
      <div style="
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        text-align: left;
      ">
        <h2 style="color: #333; margin-bottom: 10px;">Event Details</h2>
        <p style="font-size: 16px; color: #555;">
          <strong>Date:</strong> 25th September 2024<br>
          <strong>Time:</strong> 5:00 PM to 8:00 PM<br>
          <strong>Venue:</strong> 1234 Example Street, City
        </p>
      </div>
      <p style="margin-top: 30px; font-size: 14px; color: #888;">
        Signed by <strong>DEV_Clown</strong>
      </p>
    </div>
    `,
  });

  console.log(info.messageId); // Random ID generated after successful send (optional)
}

main().catch(err => console.log(err));
