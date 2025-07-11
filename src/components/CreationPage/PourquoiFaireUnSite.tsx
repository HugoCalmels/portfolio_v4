'use client'

import { useEffect } from 'react'
import styles from './PourquoiFaireUnSite.module.css'
import { useTranslations } from 'next-intl'

export default function PourquoiFaireUnSite() {
  const t = useTranslations('whySite')

  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.item}`)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.1 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const items = [
    {
      title: t('items.0.title'),
      desc: t('items.0.desc'),
      level: t('items.0.level'),
    },
    {
      title: t('items.1.title'),
      desc: t('items.1.desc'),
      level: t('items.1.level'),
    },
    {
      title: t('items.2.title'),
      desc: t('items.2.desc'),
      level: t('items.2.level'),
    },
    {
      title: t('items.3.title'),
      desc: t('items.3.desc'),
      level: t('items.3.level'),
    },
    {
      title: t('items.4.title'),
      desc: t('items.4.desc'),
      level: t('items.4.level'),
    },
    {
      title: t('items.5.title'),
      desc: t('items.5.desc'),
      level: t('items.5.level'),
    },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('title')}</h2>
        <p className={styles.lead}>{t('intro')}</p>
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={index} className={styles.item}>
              <div className={styles.itemMain}>
                <strong>{item.title}</strong>
                <span className={styles.desc}>— {item.desc}</span>
              </div>
              <span className={styles.level}>{item.level}</span>
            </li>
          ))}
        </ul>
        <div className={styles.metaBlock}>
          <h3 className={styles.subtitle}>{t('meta.title')}</h3>
          <p className={styles.lead}>
            {t('meta.paragraph.0')}<br />
            <strong>{t('meta.paragraph.1')}</strong>
            <br />
            {t('meta.paragraph.2')}
          </p>
        </div>
      </div>
    </section>
  )
}
