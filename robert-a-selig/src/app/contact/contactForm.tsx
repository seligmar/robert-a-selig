'use client';
import SubmitButton from './submitButton';
import transporter from './transporter';
import './contact.css';

//https://www.npmjs.com/package/nodemailer

export default function ContactForm() {
  console.log(transporter);

  function onSubmit() {
    console.log('submit?');
  }

  return (
    <>
      <form
        id='contact-form'
        action={onSubmit}
        // action='mailto:seligmar@gmail.com'
        className='contact-form'
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
        <SubmitButton onSubmit={onSubmit} />
        {/* <button
          type='submit'
          className='send-message-button'
          onClick={() => onSubmit}
        >
          Send Message
        </button> */}
      </form>
    </>
  );
}
