'use client';
import './toast-alert.css';

export default function ToastAlert({
  closeToast,
  open,
}: {
  closeToast: () => void;
  open: boolean;
}) {
  const classes = open
    ? 'toast-alert show-success'
    : 'toast-alert show-failure';
  //className='toast-alert'
  return (
    <div id='alert' className={classes}>
      Thank you for contacting Dr. Robert Selig! We will be reponding to your
      message shortly.
      <button className='close-alert-button' onClick={() => closeToast()}>
        X
      </button>
    </div>
  );
}
