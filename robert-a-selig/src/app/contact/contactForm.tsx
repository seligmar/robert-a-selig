'use client';
import SubmitButton from './submitButton';
import transporter from './index';
import nodemailer from 'nodemailer';
import './contact.css';

//https://www.npmjs.com/package/nodemailer

export default function ContactForm() {
  //const transp: any = transporter;

  function onSubmit(e: any) {
    const userName = e.target['name'].value;
    const userEmail = e.target['email'].value;
    const userMessage = e.target['message'].value;

    // console.log(transporter.sendMail);
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    console.log('submit?', formData);
    sendEmail();
  }

  const sendEmail = async () => {
    console.log(await transporter);
    try {
      await transporter.verify();
      console.log('Server is ready to take our messages');
    } catch (err) {
      console.error('Verification failed:', err);
    }
    // try {
    //   const info = await transporter.sendMail({
    //     from: '"Example Team" <team@example.com>', // sender address
    //     to: 'alice@example.com, bob@example.com', // list of recipients
    //     subject: 'Hello', // subject line
    //     text: 'Hello world?', // plain text body
    //     html: '<b>Hello world?</b>', // HTML body
    //   });

    //   console.log('Message sent: %s', info.messageId);
    //   // Preview URL is only available when using an Ethereal test account
    //   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // } catch (err) {
    //   console.error('Error while sending mail:', err);
    // }
  };

  return (
    <>
      <form
        id='contact-form'
        // action={onSubmit}
        // action='mailto:seligmar@gmail.com'
        className='contact-form'
        onSubmit={onSubmit}
      >
        <div className='form-group'>
          <div className='form-label-padding'>
            <label htmlFor='name'>Name</label>
            <span className='error' id='nameError'>
              *{' '}
            </span>
          </div>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Your Name'
            required
            // onChange={(e) => console.log(e)}
          />
        </div>
        <div className='form-group'>
          <div>
            <label htmlFor='email'>Email</label>
            <span className='error' id='nameError'>
              *{' '}
            </span>
          </div>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Your Email'
            required
          />
        </div>
        <div className='form-group'>
          <div>
            <label htmlFor='message'>Message</label>
            <span className='error' id='nameError'>
              *{' '}
            </span>
          </div>
          <textarea
            id='message'
            name='message'
            placeholder='Your Message'
            required
          ></textarea>
        </div>
        <SubmitButton />
      </form>
    </>
  );
}
