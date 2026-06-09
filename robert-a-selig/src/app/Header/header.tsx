'use client';
import './header-footer.css';
import LinkComponent from './LinkComponent';

export default function Header() {
  return (
    <header className='header-footer-outside'>
      <div className='header-footer-inside header-inside'>
        <h1>Robert A. Selig, PhD.</h1>
        {/* <Image  src={list}
              alt="list-menu"
              className="list-menu"
              /> */}
        <div className='menu-outside'>
          {/* https://blog.logrocket.com/css-style-button-accessibility/#button-accessibility */}
          {/* <nav> */}
          <LinkComponent linkHref={'/'} linkText={'About'} />
          <LinkComponent linkHref={'/publications'} linkText={'Publications'} />
          <LinkComponent linkHref={'/multi-media'} linkText={'Multi-Media'} />
          <LinkComponent linkHref={'/links'} linkText={'Links'} />
          <LinkComponent linkHref={'/contact'} linkText={'Contact'} />
          {/* </nav> */}
        </div>
      </div>
    </header>
  );
}
