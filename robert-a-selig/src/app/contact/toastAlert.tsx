'use client';
import './toast-alert.css';

export default function ToastAlert({
  closeToast,
  open,
  status,
}: {
  closeToast: () => void;
  open: boolean;
  status: string | undefined;
}) {
  const class1 = 'toast-alert';
  const class2 = open ? 'show' : 'hide';
  const class3 = status;

  const successMessage =
    'Thank you for contacting Dr. Robert Selig! We will be reponding to your message shortly.';

  const failureMessage =
    'We were unable to send your message. Please try again.';

  return (
    <div id='alert' className={class1 + ' ' + class2 + ' ' + class3}>
      {status === 'success' ? successMessage : failureMessage}
      <button className='close-alert-button' onClick={() => closeToast()}>
        X
      </button>
    </div>
  );
}
