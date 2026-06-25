'use client';
import './contact.css';

export default SubmitButton = (onSubmit: Function) => {
  return (
    <button
      type='submit'
      className='send-message-button'
      onClick={() => onSubmit()}
    >
      Send Message
    </button>
  );
};
