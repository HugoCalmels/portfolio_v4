'use client';

import styles from './HomeSectionTitle.module.css';

type Props = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  kicker?: React.ReactNode; // optionnel
  align?: 'left' | 'center';
};

export default function HomeSectionTitle({
  title,
  subtitle,
  kicker,
  align = 'left',
}: Props) {
  return (
    <header
      className={`${styles.header} ${align === 'center' ? styles.center : ''}`}
    >
      {kicker && <p className={styles.kicker}>{kicker}</p>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
}
