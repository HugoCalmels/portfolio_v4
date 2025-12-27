'use client'

import Link from 'next/link'
import styles from './Footer.module.css'
import { useLocale, useTranslations } from 'next-intl'
import {
  FaMapMarkerAlt,
  FaGlobeEurope,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa'

const Footer = () => {
  const locale = useLocale()
  const t = useTranslations('Footer')
  const year = new Date().getFullYear()

  const pagesLeft = [
    { label: t('pages.home'), href: `/${locale}` },
    { label: t('pages.sites'), href: `/${locale}/sites-web` },
    { label: t('pages.apps'), href: `/${locale}/logiciels-web` }
  ]

  const pagesRight = [
    { label: t('pages.about'), href: `/${locale}/a-propos` },
    { label: t('pages.contact'), href: `/${locale}/contact` }
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        {/* Col 1 */}
        <div className={styles.column}>
          <h2 className={styles.title}>{t('brand.name')}</h2>
          <p className={styles.description}>
            {t('brand.description')}
          </p>
          <a
            href="https://www.linkedin.com/in/hugo-calmels"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {t('brand.linkedin')}
          </a>
        </div>

        {/* Col 2 — Pages */}
        <div className={styles.column}>
          <h3 className={styles.subtitle}>{t('pages.title')}</h3>
          <div className={styles.pageColumns}>
            <ul className={styles.list}>
              {pagesLeft.map(p => (
                <li key={p.href}>
                  <Link href={p.href}>{p.label}</Link>
                </li>
              ))}
            </ul>
            <ul className={styles.list}>
              {pagesRight.map(p => (
                <li key={p.href}>
                  <Link href={p.href}>{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Col 3 — Contact */}
        <div className={styles.column}>
          <h3 className={styles.subtitle}>{t('contact.title')}</h3>
          <ul className={styles.listIcon}>
            <li>
              <FaMapMarkerAlt className={styles.icon} />
              {t('contact.address')}
            </li>
            <li>
              <FaGlobeEurope className={styles.icon} />
              {t('contact.city')}
            </li>
            <li>
              <FaPhone className={styles.icon} />
              07 68 10 99 80
            </li>
            <li>
              <FaEnvelope className={styles.icon} />
              <a href="mailto:calmels.hugo.pro@gmail.com">
                calmels.hugo.pro@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>
          © {year} {t('brand.name')}. {t('footer.rights')}
        </span>
      </div>
    </footer>
  )
}

export default Footer
