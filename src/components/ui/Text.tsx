'use client';

import styles from './Text.module.css';

type Props = {
  children: React.ReactNode;
  as?: 'p' | 'div' | 'span';
};

export default function Text({ children, as = 'p' }: Props) {
  const Component = as;

  return <Component className={styles.text}>{children}</Component>;
}
