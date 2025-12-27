'use client';

import Link from 'next/link';
import styles from './CustomLink.module.css';

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function CustomLink({ href, children, className }: Props) {
  return (
    <Link href={href} className={`${styles.link} ${className ?? ''}`}>
      {children}
    </Link>
  );
}
