'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const params = useParams() as { locale?: string };
  const locale = params?.locale || 'fr';

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>Contactez-moi</h2>
        <p className={styles.text}>
          Une question, une idée ou un projet&nbsp;?  
          Je suis disponible pour en discuter.
        </p>
        <Link href={`/${locale}/contact`} className={styles.cta}>
          Envoyer un message →
        </Link>
      </div>
    </section>
  );
}
