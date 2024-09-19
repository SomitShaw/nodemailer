const nodemailer = require("nodemailer");
// Import NodeMailer 

async function main() {


  
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // SMTP server address 
    port: 465, 
    secure: true, 
    auth: {
      user: 'labslexo@gmail.com', // Your email address
      pass: 'pass', // Password (for gmail, your app password) will use .env later
    },
  });
  
  // Define and send message inside transporter.sendEmail()
  let info = await transporter.sendMail({
    from: 'labslexo@gmail.com',
    to: "somitshaw1999@gmail.com",
    subject: "Testing, testing, 123",
    html: `
    <h1>Hello there</h1>
    <p>Isn't NodeMailer useful?</p>
    <p>Signed by DEV Clown</p>
    `,
  });

  console.log(info.messageId); // Random ID generated after successful send (optional)
}

main()
.catch(err => console.log(err));