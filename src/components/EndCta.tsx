'use client';

import styles from './EndCta.module.css';

type Props = {
  kicker?: string;
  text?: string;
  href?: string;
  label?: string;
};

export default function EndCtaMinimal({
  kicker = 'Contact',
  text = 'Si vous avez une idée ou un besoin, on peut simplement en discuter.',
  href = '/contact',
  label = 'Me contacter',
}: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.kicker}>{kicker}</p>
        <p className={styles.text}>{text}</p>
        <a className={styles.button} href={href}>
          {label}
        </a>
      </div>
    </section>
  );
}
