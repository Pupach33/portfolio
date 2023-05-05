import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames';

interface Props{
    href: string;
    children:any;
    classna:string
}

export default function CustomLinkForHeader({ href, children,classna }:Props) {
  const router = useRouter();
  const isActive = router.pathname === href;

  let def:string = classna
  const linkClasses = classNames('nav-link-for-header', { active: isActive });

  return (
    <Link className={linkClasses} href={href}>
      {children}
    </Link>
  );
}