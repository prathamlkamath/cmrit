const nodemailer = require('nodemailer');
const axios = require('axios');
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

async function sendEmails(users, camp) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'jpj41976@gmail.com', // Your email address
        pass: 'susz wvhz axle ozmu' // Your email password
    }
  });
  for (const user of users) {

  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Greeting Card</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f8f9fa;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: #343a40;
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      color: #6c757d;
      font-size: 16px;
      line-height: 1.6;
    }

    a {
      color: #007bff;
      text-decoration: none;
      font-weight: bold;
    }

    a:hover {
      text-decoration: underline;
    }
  </style>
  </head>
  <body>

  <div class="container">
  <h1>Hello ${user.name}</h1>
    <p>This is a greeting card.<br>
      There is a camp in your area by <strong>${camp.docname}</strong>.<br>
      Camp details:<br>
      <em>${camp.desc}</em>.<br>
      Please visit our website for more details.<br>
      <a href="http://localhost:5173/">X to infinity</a>
    </p>
  </div>

  </body>
  </html>`;

  

    const mailOptions = {
        from: 'jpj41976@gmail.com', // Sender address
        
        subject: 'Greetings', // Subject line
        html: html, // HTML content
      };
    mailOptions.to = user.email; // Set recipient email address
    try {
      await transporter.sendMail(mailOptions); // Send email
      console.log(`Email sent to ${user.email}`);

      await client.messages.create({
        body: `Hello ${user.name},\nThis is a greeting card.\nThere is a camp in your area by doctor ${camp.docname}.\nCamp details: ${camp.desc}.\nPlease visit our website for more details: http://localhost:5173/`,
        from: '+17402763303',
        to: user.phone // Assuming user.phone contains the recipient's phone number
      });
      console.log(`SMS sent to ${user.phone}`);
    } catch (error) {
      console.error(`Error sending email to ${user.email}: ${error.message}`);
    }
  }
}

module.exports = sendEmails;
