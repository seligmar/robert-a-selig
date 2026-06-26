'use client';
import './contact.css';

//onSubmit: { onSubmit: () => void }
export default function SubmitButton() {
  return (
    <button type='submit' className='send-message-button'>
      Send Message
    </button>
  );
}
