'use client'

import styles from './OffresSimples.module.css'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function OffresSimples() {
  const t = useTranslations('offers')
  const params = useParams()
  const locale = params?.locale || 'fr' // adapte selon ta config

  return (
    <section className={styles.section} id="offres">
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={styles.heading}>{t('title')}</h2>
          <p className={styles.lead}>{t('intro')}</p>
        </div>

        <div className={styles.cards}>
          {/* Site de base */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{t('basic.title')}</h3>
            <p className={styles.cardText}>{t('basic.text')}</p>
            <ul className={styles.cardList}>
              <li>{t('basic.list.0')}</li>
              <li>{t('basic.list.1')}</li>
              <li>{t('basic.list.2')}</li>
              <li>{t('basic.list.3')}</li>
            </ul>
            <div className={styles.price}>{t('basic.price')}</div>
          </div>

          {/* Design sur mesure */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{t('design.title')}</h3>
            <p className={styles.cardText}>{t('design.text')}</p>
            <ul className={styles.cardList}>
              <li>{t('design.list.0')}</li>
              <li>{t('design.list.1')}</li>
              <li>{t('design.list.2')}</li>
            </ul>
            <div className={styles.price}>{t('design.price')}</div>
          </div>

          {/* SEO */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{t('seo.title')}</h3>
            <p className={styles.cardText}>{t('seo.text')}</p>
            <ul className={styles.cardList}>
              <li>{t('seo.list.0')}</li>
              <li>{t('seo.list.1')}</li>
              <li>{t('seo.list.2')}</li>
            </ul>
            <div className={styles.price}>{t('seo.price')}</div>
          </div>
        </div>

        <div className={styles.conclusion}>
          <p>{t('conclusion.text')}</p>
          <Link href={`/${locale}/contact`} className={styles.cta}>
            {t('conclusion.cta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
