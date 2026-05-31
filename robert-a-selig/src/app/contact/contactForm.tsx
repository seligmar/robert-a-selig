import './contact.css';

//https://www.npmjs.com/package/nodemailer

export default function ContactForm() {
  return (
    <>
      <form
        id='contact-form'
        action='mailto:seligmar@gmail.com'
        className='contact-form'
      >
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <span className='error-message' id='nameError'></span>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Your Name'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <span className='error-message' id='nameError'></span>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Your Email'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message:</label>
          <span className='error-message' id='nameError'></span>
          <textarea
            id='message'
            name='message'
            placeholder='Your Message'
            required
          ></textarea>
        </div>
        <button type='submit' className='submit-button'>
          Send Message
        </button>
      </form>
    </>
  );
}
