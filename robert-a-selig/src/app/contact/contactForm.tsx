'use client';
import SubmitButton from './submitButton';
import { publicKey, templateKey, serviceKey } from '../keys.js';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

export default function ContactForm() {
  useEffect(() => {
    // https://dashboard.emailjs.com/admin/account
    // https://www.emailjs.com/docs/tutorial/overview/
    emailjs.init({
      publicKey: publicKey,
    });
  }, []);

  function onSubmit(e: any) {
    e.preventDefault();
    const userName = e.target['name'].value;
    const userEmail = e.target['email'].value;
    const userMessage = e.target['message'].value;
    const form = e.target;

    console.log('form?', form);

    const templateParams = {
      name: userName,
      title: userEmail,
      message: userMessage,
    };

    var x = document.getElementById('alert');
    console.log(x);
    x.className = 'toast-alert show';

    return;

    emailjs
      .send(serviceKey, templateKey, templateParams, {
        publicKey: publicKey,
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          form.reset();
          var x = document.getElementById('alert');
          console.log(x);
          x.className = 'toast-alert show';
          // setTimeout(function () {
          //   x.className = x.className.replace('show', '');
          // }, 3000);
        },
        (err) => {
          console.log('FAILED...', err);
          // e.preventDefault();
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
