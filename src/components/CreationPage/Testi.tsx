'use client'

import styles from './Testi.module.css'
import { useTranslations } from 'next-intl'

const arthur = '/images/arthur-m.jpg'
const mam = '/images/mam.jpg'

export default function Testi() {
  const t = useTranslations('testimonials')

  const testimonials = [
    {
      img: arthur,
      name: t('arthur.name'),
      job: t('arthur.job'),
      full: t('arthur.full'),
    },
    {
      img: mam,
      name: t('gaelle.name'),
      job: t('gaelle.job'),
      full: t('gaelle.full'),
    },
  ]

  return (
    <section className={styles.testiWrapper}>
      <h2 className={styles.testiLabel}>{t('title')}</h2>

      <div className={styles.testimonials}>
        {testimonials.map(({ img, name, job, full }) => (
          <div className={styles.testiCard} key={name}>
            <div className={styles.header}>
              <img src={img} alt={name} />
              <div>
                <p>{name}</p>
                <p>{job}</p>
              </div>
            </div>
            <p className={styles.fullText}>{full}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
