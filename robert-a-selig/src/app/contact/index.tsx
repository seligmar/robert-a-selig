//const nodemailer = require('nodemailer');
'use server';
import nodemailer from 'nodemailer';
//const nodemailer = require('nodemailer');
// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
// (async () => {
//   await transporter.sendMail({
//     from: '', // your email
//     to: '', // the email address you want to send an email to
//     subject: '', // The title or subject of the email
//     html: '', // I like sending my email as html, you can send \
//     // emails as html or as plain text
//   });

//   console.log('Email sent');
// })();

export default transporter;
