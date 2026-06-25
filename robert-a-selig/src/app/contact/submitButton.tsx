'use client';
import './contact.css';

interface submitButtonTypes {
  onSubmit: () => void;
}

export default function SubmitButton(onSubmit: { onSubmit: () => void }) {
  return (
    <button
      type='submit'
      className='send-message-button'
      // onClick={(e) => {
      //    e.preventDefault();
      // onSubmit;
      // }}
    >
      Send Message
    </button>
  );
}
