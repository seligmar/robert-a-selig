'use client';
import './contact.css';

interface submitButtonTypes {
  onSubmit: () => void;
}

//onSubmit: { onSubmit: () => void }
export default function SubmitButton() {
  return (
    <button type='submit' className='send-message-button'>
      Send Message
    </button>
  );
}
