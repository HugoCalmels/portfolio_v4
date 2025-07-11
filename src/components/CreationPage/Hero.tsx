'use client'

import Image from 'next/image'
import styles from './Hero.module.css'
import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('hero')

  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src="/images/testa4.png"
          alt="Vue de Toulouse"
          fill
          style={{
            objectFit: 'cover',
            filter: 'brightness(0.7) blur(1.5px)',
          }}
          priority
        />
      </div>

      <div className={styles.inner}>
        <h1 className={styles.title}>
          {t('title')}<br />
          <span className={styles.accent}>{t('highlight')}</span>
        </h1>

        <p className={styles.subtitle}>
          {t('subtitle.line1')}<br />
          {t('subtitle.line2')}
        </p>

        <div className={styles.actions}>
          <button className={styles.cta} onClick={() => scrollTo('#offres')}>
            {t('cta')}
          </button>
        </div>
      </div>

      <div className={styles.fader}></div>
    </section>
  )
}
