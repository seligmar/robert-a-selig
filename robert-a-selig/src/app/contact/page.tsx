'use client';
import PageLayout from '../layout/pagelayout';
import ContactForm from './contactForm';
import Image from 'next/image';
import ToastAlert from './toastAlert';
//import seige from './american-map-of-siege.png';
import { publicKey, templateKey, serviceKey } from '../keys.js';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

//https://www.npmjs.com/package/nodemailer

export default function Contact() {
  const [open, openToast] = useState<boolean>(false);
  const [status, setStatus] = useState<string | undefined>(undefined);

  useEffect(() => {
    // https://dashboard.emailjs.com/admin/account
    // https://www.emailjs.com/docs/tutorial/overview/
    emailjs.init({
      publicKey: publicKey,
    });
  }, []);

  function onSubmit(e: any) {
    e.preventDefault();
    const userName = e.target['name'].value;
    const userEmail = e.target['email'].value;
    const userMessage = e.target['message'].value;
    const form = e.target;

    const templateParams = {
      name: userName,
      title: userEmail,
      message: userMessage,
    };

    openToast(true);
    setStatus('success');

    return;

    emailjs
      .send(serviceKey, templateKey, templateParams, {
        publicKey: publicKey,
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          openToast(true);
          setStatus('success');
          form.reset();
          // var x = document.getElementById('alert');
          // if (!x) return;
          // console.log(x);
          // x.className = 'toast-alert show-success';
          setTimeout(function () {
            //  x.className = 'toast-alert';
            openToast(false);
            setStatus(undefined);
          }, 3000);
        },
        (err) => {
          console.log('FAILED...', err);
          // var x = document.getElementById('alert');
          // if (!x) return;
          openToast(true);
          setStatus('failure');
          //   x.className = 'toast-alert show-failure';
          setTimeout(function () {
            openToast(false);
            setStatus(undefined);
            //   x.className = 'toast-alert';
          }, 3000);
          // e.preventDefault();
        },
      );
  }

  function closeToast() {
    console.log('close');
    setStatus(undefined);
    openToast(false);
  }

  return (
    <>
      <ToastAlert closeToast={closeToast} open={open} status={status} />
      <PageLayout>
        <h2>Contact</h2>
        <div className='contact-grid'>
          {/* https://www.nps.gov/waro/learn/historyculture/washington-rochambeau-revolutionary-route.htm */}
          <figure>
            <Image
              //   src='/contactPage.png'
              src='/seligBook.png'
              alt='American map of the Siege of Yorktown'
              className='seige-image'
              // width={231}
              // height={350}
              width={350}
              height={350}
            />
            <figcaption>
              Robert A. Selig, PhD.
              <div className='image-caption-source'>
                Royal Deux-Ponts Grenadier
              </div>
            </figcaption>
          </figure>
          <ContactForm onSubmit={onSubmit} />{' '}
        </div>
      </PageLayout>
    </>
  );
}
