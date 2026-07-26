'use client';
import SubmitButton from './submitButton';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

export default function ContactForm() {
  useEffect(() => {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: 'gQs4K67EDJeDgHyqk',
    });
  }, []);

  function onSubmit(e: any) {
    e.preventDefault();
    const userName = e.target['name'].value;
    const userEmail = e.target['email'].value;
    const userMessage = e.target['message'].value;

    const templateParams = {
      name: userName,
      title: userEmail,
      message: userMessage,
    };

    emailjs
      .send('service_7708ahp', 'template_c2efc7b', templateParams, {
        publicKey: 'gQs4K67EDJeDgHyqk',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        },
      );
  }

  return (
    <>
      <form
        id='contact-form'
        // action={onSubmit}
        //  action='mailto:seligmar@gmail.com'
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
