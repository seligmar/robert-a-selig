'use client';
import Link from 'next/link';
import './header-footer.css';
import { useState } from 'react';
import { useRouter } from 'next/compat/router';

export default function Header() {
  const [active, setActive] = useState('/'); //<string>;
  const router = useRouter();
  // useState(())
  // console.log('router?', router?.pathname);

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
          <Link
            className='menu-link'
            href={'/'}
            // onNavigate={(e) => {
            //   // Only executes during SPA navigation
            //   e.preventDefault();
            //   setActive('/');
            //   console.log(e, 'Navigating...');
            // }}
            //  onClick={() => router.push('/dashboard')}
            // onClick={() => setActive('/')}
            // onMouseEnter={() => setActive('/')}
          >
            About
          </Link>
          <Link
            className='menu-link'
            href={'/publications'}
            // onClick={() => setActive('publications')}
            // onMouseEnter={() => setActive('publications')}
          >
            Publications
          </Link>
          <Link
            className='menu-link'
            href={'/multi-media'}
            // onClick={() => setActive('multi-media')}
            // onMouseEnter={() => setActive('multi-media')

            // }
          >
            Multi-Media
          </Link>
          <Link
            className='menu-link'
            href={'/links'}
            // onClick={() => setActive('links')}
            // onMouseEnter={() => setActive('links')}
          >
            Links
          </Link>
          <Link
            className='menu-link'
            href={'/contact'}
            // onClick={() => setActive('contact')}
            // onMouseEnter={() => setActive('contact')}
            // onNavigate={(e) => {
            //   e.preventDefault();
            //   // Only executes during SPA navigation
            //   setActive('/contact');
            //   console.log(e, 'Navigating...', active);
            // }}
          >
            Contact
          </Link>
          {/* </nav> */}
        </div>
      </div>
    </header>
  );
}
