'use client'

import SeoHead from '@/components/SeoHead'
import styles from './Profile.module.css'
import { useTranslations } from 'next-intl'

const Profile = () => {
  const t = useTranslations('profile')

  return (
    <>
      <SeoHead
        title={t('title')}
        description={t('description')}
      />
      <main className={styles.main}>
        {/* HEADER */}
        <section className={styles.header}>
          <h1>Hugo Calmels</h1>
          <p className={styles.subtitle}>{t('subtitle')}</p>
          <p className={styles.availability}>{t('availability')}</p>
        </section>

        {/* PRESENTATION */}
        <section className={styles.section}>
          <h2>{t('presentationTitle')}</h2>
          <p>{t('presentationText')}</p>
        </section>

        {/* BACKGROUND */}
        <section className={styles.section}>
          <h2>{t('backgroundTitle')}</h2>
          <ul>
            <li><strong>Bootcamp:</strong> {t('backgroundList.bootcamp')}</li>
            <li><strong>Autodidacte:</strong> {t('backgroundList.selfTaught')}</li>
            <li><strong>Mentorat:</strong> {t('backgroundList.mentored')}</li>
          </ul>
        </section>

        {/* STACK */}
        <section className={styles.section}>
          <h2>{t('stackTitle')}</h2>
          <ul>
            <li><strong>Back-end:</strong> {t('stackBack')}</li>
            <li><strong>Front-end:</strong> {t('stackFront')}</li>
            <li><strong>Outils:</strong> {t('stackTools')}</li>
          </ul>
        </section>

        {/* SERVICES */}
        <section className={styles.section}>
          <h2>{t('servicesTitle')}</h2>
          <ul>
            {t.raw('servicesList').map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}

export default Profile
