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
      onClick={() => onSubmit}
    >
      Send Message
    </button>
  );
}
