import Image from 'next/image';
import PageLayout from '../layout/pagelayout';
import roadmap from './route-map-vertical.jpg';
import './publications.css';

export default function publications() {
  return (
    <>
      <PageLayout>
        <h2>Publications</h2>
        {/*  https://nextjs.org/docs/app/api-reference/components/image */}
        {/* https://www.nps.gov/waro/learn/historyculture/washington-rochambeau-revolutionary-route.htm */}
        <figure>
          <Image
            src={roadmap}
            alt='Portrait of Robert A. Selig'
            className='roadmap-image'
          />{' '}
          <figcaption>
            French map of the route to Yorktown, 1782
            <div className='image-caption-source'>
              Geography and Map Division, Library of Congress
            </div>
          </figcaption>
        </figure>
      </PageLayout>
    </>
  );
}
