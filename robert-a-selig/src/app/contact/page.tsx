'use client';
import PageLayout from '../layout/pagelayout';
import ContactForm from './contactForm';
import Image from 'next/image';
//import seige from './american-map-of-siege.png';
import './contact.css';

//https://www.npmjs.com/package/nodemailer

export default function Contact() {
  return (
    <>
      <PageLayout>
        <h2>Contact</h2>
        <div className='contact-grid'>
          {/* https://www.nps.gov/waro/learn/historyculture/washington-rochambeau-revolutionary-route.htm */}
          <figure>
            <Image
              src='/contactPage.png'
              alt='American map of the Siege of Yorktown'
              className='seige-image'
              width={231}
              height={350}
            />
            <figcaption>
              Robert A. Selig, PhD.
              <div className='image-caption-source'>
                Royal Deux-Ponts Grenadier
              </div>
            </figcaption>
          </figure>
          <ContactForm />{' '}
        </div>
      </PageLayout>
    </>
  );
}
