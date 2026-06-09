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
          <figure>
            <Image
              src={seige}
              alt='American map of the Siege of Yorktown'
              className='seige-image'
            />
            <figcaption>
              American map of the Siege of Yorktown
              <div className='image-caption-source'>
                Geography and Map Division, Library of Congress
              </div>
            </figcaption>
          </figure>
          <ContactForm />{' '}
        </div>
      </PageLayout>
    </>
  );
}
