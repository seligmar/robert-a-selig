import PageLayout from '../layout/pagelayout';
import ContactForm from './contactForm';
import Image from 'next/image';
import roadmap from './route-map-vertical.jpg';
import seige from './american-map-of-siege.webp';
import './contact.css';

//https://www.npmjs.com/package/nodemailer

export default function Contact() {
  return (
    <>
      <PageLayout>
        <h2>Contact</h2>
        <div className='contact-grid'>
          {/* https://www.nps.gov/waro/learn/historyculture/washington-rochambeau-revolutionary-route.htm */}
          <Image
            src={seige}
            alt='Portrait of Robert A. Selig'
            className='seige-image'
          />
          <ContactForm />{' '}
        </div>
      </PageLayout>
    </>
  );
}
