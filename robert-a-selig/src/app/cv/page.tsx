import PageLayout from '../layout/pagelayout';
//import cvToShow from './SeligCV.pdf';

export default function cv() {
  return (
    <>
      <PageLayout>
        <h2>Curriculum Vitae</h2>
        <iframe src={'SeligCV.pdf'} width='600' height='500' />
        <object
          data='SeligCV.pdf'
          type='application/pdf'
          width='100%'
          height='100%'
        >
          <p>
            Unable to display PDF file. <a href='sample.pdf'>Download</a>{' '}
            instead.
          </p>
        </object>
        <embed
          src={'SeligCV.pdf'}
          type='application/pdf'
          width='600'
          height='500'
        />
      </PageLayout>
    </>
  );
}
