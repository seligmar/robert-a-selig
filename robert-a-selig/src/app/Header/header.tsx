import Image from 'next/image'
 import * as list from "./list.svg"
import "./header-footer.css"

export default function Header() {
  return (   
<header className="header-footer-outside">
      <div className="header-footer-inside"><h1>
        Robert A. Selig, PhD.</h1>
        {/* <Image  src={list}
              alt="list-menu"
              className="list-menu"
              /> */}
               <div>
         <div>About </div> <div>Publications</div><div>Links</div><div>Contact</div>
        </div>
        </div>
       
      </header>
    )}
