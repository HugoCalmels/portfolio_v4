'use client'

import SeoHead from '@/components/SeoHead'
import styles from './Home.module.css'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'


const Home = () => {
  const params = useParams()
  const locale = params?.locale || 'fr'
  const t = useTranslations('home')

  return (
    <>
      <SeoHead
        title={t('title')}
        description="Développeur web basé à Toulouse. Sites vitrines, outils sur mesure, missions en freelance."
      />
      <main className={styles.main}>
        <section className={styles.intro}>
          <h1>{t('title')}</h1>
          <p>{t('intro')}</p>
        </section>

        <section className={styles.cards}>
          <div className={styles.card}>
            <h2>{t('creationTitle')}</h2>
            <p>{t('creationText')}</p>
            <Link href={`/${locale}/creation-site-internet-toulouse`}>
              {t('creationLink')}
            </Link>
          </div>

          <div className={styles.card}>
            <h2>{t('profileTitle')}</h2>
            <p>{t('profileText')}</p>
            <Link href={`/${locale}/profil-it`}>
              {t('profileLink')}
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
