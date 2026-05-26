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
         <button className='menu-button'>About</button> <button className='menu-button'>Publications</button><button className='menu-button'>Multi-Media</button><button className='menu-button'>Links</button>
         <button className='menu-button'>Contact</button>
         </div>
        </div>        
      </header>
    )}
