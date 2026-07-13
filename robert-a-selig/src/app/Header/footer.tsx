import Image from 'next/image';
import './header-footer.css';
import { Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='header-footer-outside'>
      <div className='header-footer-inside footer-inside'>
        <link
          rel='icon'
          href='/w3rShieldLogo.ico'
          type='image/w3rShieldLogo.ico'
          // sizes='<generated>'
        />
        {/* <link
          rel='icon'
          href='/linkedinLogo.svg'
          type='image/linkedinLogo.svg'
          // sizes='<generated>'
        /> */}
        <Camera />;<div> Copyright 2026</div>
        <div>Website by: Mary Selig</div>
      </div>
    </footer>
  );
}
