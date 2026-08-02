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
            title='LinkedIn'
          >
            {' '}
            <Image
              src='https://seligmar.github.io/robert-a-selig/linkedinLogo.svg'
              alt='linkedIn'
              width={40}
              height={40}
              className='footer-link'
            />
          </a>
          <a
            href='https://www.facebook.com/robert.a.selig.7'
            title='Facebook'
            target='_blank'
          >
            <Image
              src='https://seligmar.github.io/robert-a-selig/facebookIcon.png'
              alt='facebook'
              width={40}
              height={40}
              className='footer-link'
            />
          </a>
        </div>
        <div className='footer-text'>
          <div> Copyright 2026 </div>
          <div>Website by: Mary Selig</div>
        </div>
      </div>
    </footer>
  );
}
