'use client'

import styles from './HowIWork.module.css'
import { FaCube, FaRocket, FaPalette } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

export default function HowIWork() {
  const t = useTranslations('howIWork')

  // Récupérer le texte complet
  const paragraphText = t('paragraph')
  const paragraphs = paragraphText.split('\n').map(p => p.trim())

  return (
    <section className={styles.section} id="how-i-work">
      <div className={styles.container}>
        <h2 className={styles.heading}>{t('title')}</h2>

        <div className={styles.split}>
          <div className={styles.text}>
            {paragraphs.map((text, i) => (
              <p className={styles.sentence} key={i}>{text}</p>
            ))}
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{t('techTitle')}</h3>
            <ul className={styles.list}>
              <li><FaCube className={styles.icon} /> <strong>{t('frontend.label')} :</strong> {t('frontend.text')}</li>
              <li><FaRocket className={styles.icon} /> <strong>{t('backend.label')} :</strong> {t('backend.text')}</li>
              <li><FaPalette className={styles.icon} /> <strong>{t('design.label')} :</strong> {t('design.text')}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
