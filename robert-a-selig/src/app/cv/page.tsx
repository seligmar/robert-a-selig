import PageLayout from '../layout/pagelayout';
//import cvToShow from './SeligCV.pdf';

export default function cv() {
  return (
    <>
      <PageLayout>
        <h2>Curriculum Vitae</h2>
        <div className='centre-cv'>
          <iframe src={'SeligCV.pdf'} width='600' height='500' />
        </div>
      </PageLayout>
    </>
  );
}
