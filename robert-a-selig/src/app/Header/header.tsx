import Image from 'next/image'
//  import * as list from "./list.svg"
import "./header-footer.css"

export default function Header() {
  return (   
<header className="header-footer-outside">
      <div className="header-footer-inside header-inside"><h1>
        Robert A. Selig, PhD.</h1>
        {/* <Image  src={list}
              alt="list-menu"
              className="list-menu"
              /> */}
                <div className='menu-outside'>
                  {/* https://blog.logrocket.com/css-style-button-accessibility/#button-accessibility */}
         <a className='menu-link'>About</a> <a className='menu-link'>Publications</a><a className='menu-link'>Multi-Media</a><a className='menu-link'>Links</a>
         <a className='menu-link'>Contact</a>
         </div>
        </div>        
      </header>
    )}
