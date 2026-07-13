import Image from 'next/image';
import './header-footer.css';
import { Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='header-footer-outside'>
      <div className='header-footer-inside footer-inside'>
        <link
          rel='icon'
          href='/W3rShieldLogo.svg'
          type='image/W3rShieldLogo.svg'
          // sizes='<generated>'
        />
        <Camera />;<div> Copyright 2026</div>
        <div>Website by: Mary Selig</div>
      </div>
    </footer>
  );
}
