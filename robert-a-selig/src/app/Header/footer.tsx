import Image from 'next/image';
import './header-footer.css';
import { Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='header-footer-outside'>
      <div className='header-footer-inside footer-inside'>
        <Camera />
        <div> Copyright 2026 Website by: Mary Selig</div>
      </div>
    </footer>
  );
}
