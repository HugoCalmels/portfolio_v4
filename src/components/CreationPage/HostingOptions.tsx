'use client'

import styles from './HostingOptions.module.css'
import { useTranslations } from 'next-intl'

export default function HostingOptions() {
  const t = useTranslations('hosting')

  return (
    <section className={styles.section} id="hosting">
      <div className={styles.container}>
        <h2 className={styles.heading}>{t('title')}</h2>

        <p className={styles.intro}>{t('intro')}</p>

        <div className={styles.educationBox}>
          <strong>{t('question')}</strong>
          <p>{t('answer')}</p>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{t('option1.title')}</h3>
            <p className={styles.cardText}>{t('option1.text')}</p>
            <ul className={styles.cardList}>
              <li>{t('option1.list.0')}</li>
              <li>{t('option1.list.1')}</li>
              <li>{t('option1.list.2')}</li>
            </ul>
            <p className={styles.price}>{t('option1.price')}</p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{t('option2.title')}</h3>
            <p className={styles.cardText}>{t('option2.text')}</p>
            <ul className={styles.cardList}>
              <li>{t('option2.list.0')}</li>
              <li>{t('option2.list.1')}</li>
              <li>{t('option2.list.2')}</li>
            </ul>
            <p className={styles.price}>{t('option2.price')}</p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{t('option3.title')}</h3>
            <p className={styles.cardText}>{t('option3.text')}</p>
            <ul className={styles.cardList}>
              <li>{t('option3.list.0')}</li>
              <li>{t('option3.list.1')}</li>
              <li>{t('option3.list.2')}</li>
            </ul>
            <p className={styles.price}>{t('option3.price')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
