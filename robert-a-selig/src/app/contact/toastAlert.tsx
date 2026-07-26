'use client';
import { stat } from 'fs';
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

  //className='toast-alert'
  return (
    <div id='alert' className={class1 + ' ' + class2 + ' ' + class3}>
      Thank you for contacting Dr. Robert Selig! We will be reponding to your
      message shortly.
      <button className='close-alert-button' onClick={() => closeToast()}>
        X
      </button>
    </div>
  );
}
