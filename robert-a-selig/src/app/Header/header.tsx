import Image from 'next/image'
 import * as list from "./list.svg"
import "./header-footer.css"

export default function Header() {
  return (   
<header className="header-footer-outside">
      <div className="header-footer-inside"><h1>
        Robert A. Selig, PhD.</h1>
        {/* <ListIcon size={32} /> */}
        <Image  src={list}
              alt="list-menu"
              className="list-menu"
              />
        </div>
      </header>
    )}
