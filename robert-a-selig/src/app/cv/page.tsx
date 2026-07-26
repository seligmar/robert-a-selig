import PageLayout from '../layout/pagelayout';
import './cv.css';

export default function cv() {
  return (
    <>
      <PageLayout>
        <h2>Curriculum Vitae</h2>
        <div className='centre-cv'>
          <iframe
            src={'SeligCV.pdf'}
            width='700'
            height='500'
            className='cv-iframe'
          />
        </div>
      </PageLayout>
    </>
  );
}
