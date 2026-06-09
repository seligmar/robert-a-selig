import Link from 'next/link';
import './header-footer.css';
import { usePathname } from 'next/navigation';

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
