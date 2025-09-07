'use client';

import styles from './Geo.module.css';
import { useTranslations } from 'next-intl';

export default function Geo() {
  const t = useTranslations('geo');

  const descriptionHtml = t.raw('description');

  return (
    <section className={styles.section} id="geo">
      <div className={styles.container}>
        <h2 className={styles.heading}>{t('title')}</h2>
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        />
        <div className={styles.mapWrapper}>

          <iframe
              className={styles.map}
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.906001011182!2d1.45390357647294!3d43.60849875532047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4c040963ff33f6db%3A0x2acfdcf598daadad!2sHugo%20Calmels!5e0!3m2!1sfr!2sfr!4v1752937478221!5m2!1sfr!2sfr"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
        </div>
        
      </div>
    </section>
  );
}
