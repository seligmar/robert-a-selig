//import Image from 'next/image'
import Link from 'next/link'
//import { useRouter } from 'next/navigation'
//  import * as list from "./list.svg"
import "./header-footer.css"

export default function Header() {
  // useRouter
// const router = useRouter()
//router.push('/dashboard', { scroll: false })

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
                  {/* <nav> */}
         <Link className='menu-link' href={"/about"}>About</Link>   
         <Link className='menu-link' href={"/publications"}>Publications</Link>
         <Link className='menu-link' href={"/multi-media"}>Multi-Media</Link>
         <Link className='menu-link' href={"/links"}>Links</Link>
         <Link className='menu-link' href={"/contact"}>Contact</Link>
         {/* </nav> */}
         </div>
        </div>        
      </header>
    )}
