'use client';
import SubmitButton from './submitButton';
import './contact.css';

export default function ContactForm({
  onSubmit,
}: {
  onSubmit: (e: any) => void;
}) {
  return (
    <>
      <form id='contact-form' className='contact-form' onSubmit={onSubmit}>
        <div className='form-group'>
          <div className='form-label-padding'>
            <label htmlFor='name'>Name</label>
            <span className='error'>* </span>
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
            <span className='error'>* </span>
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
            <span className='error'>* </span>
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
