import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './header-footer.css';

export default function LinkComponent({
  linkHref,
  linkText,
}: {
  linkHref: string;
  linkText: string;
}) {
  const pathname = usePathname();
  const activeClass =
    pathname === linkHref ? 'active-menu-link menu-link' : 'menu-link';

  return (
    <Link className={activeClass} href={linkHref}>
      {linkText}
    </Link>
  );
}
