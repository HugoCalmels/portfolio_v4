'use client'

import Link from 'next/link'
import styles from './Footer.module.css'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('footer')
  const params = useParams()
  const locale = params?.locale || 'fr'

  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        {/* Colonne 1 - Présentation */}
        <div className={styles.column}>
          <h2 className={styles.title}>Hugo Calmels</h2>
          <p className={styles.description}>
            {t('description.line1')}<br />
            {t('description.line2')}
          </p>
          <a
            href="https://www.linkedin.com/in/hugo-calmels"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Colonne 2 - Pages */}
        <div className={styles.column}>
          <h3 className={styles.subtitle}>{t('pages.title')}</h3>
          <ul className={styles.list}>
            <li><Link href={`/${locale}`}>{t('pages.home')}</Link></li>
            <li><Link href={`/${locale}/creation-site-internet-toulouse`}>{t('pages.creation')}</Link></li>
            <li><Link href={`/${locale}/contact`}>{t('pages.contact')}</Link></li>
            <li><Link href={`/${locale}/profil-it`}>{t('pages.profil')}</Link></li>
          </ul>
        </div>

        {/* Colonne 3 - Contact infos */}
        <div className={styles.column}>
          <h3 className={styles.subtitle}>{t('contact.title')}</h3>
          <ul className={styles.list}>
            <li>{t('contact.address1')}</li>
            <li>{t('contact.address2')}</li>
            <li>{t('contact.availability')}</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {year} Hugo Calmels. {t('rights')}</span>
      </div>
    </footer>
  )
}

export default Footer
