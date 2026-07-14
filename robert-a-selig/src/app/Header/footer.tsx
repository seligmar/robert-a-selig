import Image from 'next/image';
import './header-footer.css';

export default function Footer() {
  return (
    <footer className='header-footer-outside'>
      <div className='header-footer-inside footer-inside'>
        <div className='icon-div'>
          <a
            href='https://www.linkedin.com/in/robert-a-selig-492b7612/'
            target='_blank'
            className='linkedin-link'
          >
            {' '}
            <Image
              src='/linkedinLogo.svg'
              alt='linkedIn'
              width={40}
              height={40}
              className='footer-link'
            />
          </a>
          <a href='https://www.facebook.com/robert.a.selig.7'>
            <Image
              src='/facebookIcon.png'
              alt='facebook'
              width={40}
              height={40}
              // className='footer-link'
            />
          </a>
        </div>
        <div> Copyright 2026 Website by: Mary Selig</div>
      </div>
    </footer>
  );
}
