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
            title="Carte Google Maps – localisation de Hugo Calmels à Toulouse"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46232.32518157955!2d1.403789191906102!3d43.59570671332603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebc96234d6589%3A0x5b7eaafd50e0210e!2s13%20Rue%20du%20G%C3%A9n%C3%A9ral%20Jean%20P%C3%A9got%2C%2031500%20Toulouse!5e0!3m2!1sfr!2sfr!4v1752039655677!5m2!1sfr!2sfr"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
