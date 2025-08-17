'use client'

import Link from 'next/link'
import styles from './Footer.module.css'
import { useParams } from 'next/navigation'
import { FaMapMarkerAlt, FaGlobeEurope, FaCheckCircle } from "react-icons/fa";
const Footer = () => {
  const params = useParams()
  const locale = params?.locale || 'fr'
  const year = new Date().getFullYear()

  const pagesLeft = [
    { label: 'Accueil', href: `/${locale}` },
    { label: 'Offres de sites vitrine', href: `/${locale}/offres-site-vitrine` },
    { label: 'Solutions métier', href: `/${locale}/solutions-metier` },
    { label: 'Tarifs', href: `/${locale}/tarifs` },
  ]

  const pagesRight = [
    { label: 'Blog', href: `/${locale}/blog` },
    { label: 'FAQ', href: `/${locale}/faq` },
    { label: 'Contact / Devis', href: `/${locale}/contact` },
    { label: 'Services web Toulouse', href: `/${locale}/creation-site-internet-toulouse` },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        {/* Col 1 */}
        <div className={styles.column}>
          <h2 className={styles.title}>Hugo Calmels</h2>
          <p className={styles.description}>
  Développeur web indépendant à Toulouse.<br />
  Création de sites vitrines, applications et logiciels web.
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

        {/* Col 2 — Pages en 2 colonnes */}
        <div className={styles.column}>
          <h3 className={styles.subtitle}>Pages</h3>
          <div className={styles.pageColumns}>
            <ul className={styles.list}>
              {pagesLeft.map(p => (
                <li key={p.href}><Link href={p.href}>{p.label}</Link></li>
              ))}
            </ul>
            <ul className={styles.list}>
              {pagesRight.map(p => (
                <li key={p.href}><Link href={p.href}>{p.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Col 3 */}
        <div className={styles.column}>
          <h3 className={styles.subtitle}>Contact</h3>
          <ul className={styles.listIcon}>
  <li>
    <FaMapMarkerAlt className={styles.icon} /> 13 rue Pégot
  </li>
  <li>
    <FaGlobeEurope className={styles.icon} /> 31500 Toulouse, France
  </li>
  <li>
    <FaCheckCircle className={styles.icon} /> Disponible rapidement
  </li>
</ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {year} Hugo Calmels. Tous droits réservés.</span>
      </div>
    </footer>
  )
}

export default Footer
