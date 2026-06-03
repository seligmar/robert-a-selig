import Link from 'next/link';
import './header-footer.css';

export default function LinkComponent({
  linkHref,
  linkText,
}: {
  linkHref: string;
  linkText: string;
}) {
  return (
    <Link
      className='menu-link'
      href={linkHref}
      // onClick={() => setActive('contact')}
      // onMouseEnter={() => setActive('contact')}
      // onNavigate={(e) => {
      //   e.preventDefault();
      //   // Only executes during SPA navigation
      //   setActive('/contact');
      //   console.log(e, 'Navigating...', active);
      // }}
    >
      {linkText}
    </Link>
  );
}
