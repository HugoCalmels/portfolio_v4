'use client'

import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import CustomLink from '@/components/ui/CustomLink'
import styles from './Index.module.css'

export default function IndexFr() {
  return (
    <nav className={styles.section} aria-label="Sommaire de la page">
      <div className={styles.inner}>
        <HomeSectionTitle title="Index" />

        <ul className={styles.list}>
          <li className={styles.item}>
            <CustomLink href="#parcours" className={styles.link}>
              Parcours
            </CustomLink>
          </li>

          <li className={styles.item}>
            <CustomLink href="#freelance" className={styles.link}>
              Freelance, SEO et modèle économique
            </CustomLink>
          </li>

          <li className={styles.item}>
            <CustomLink href="#stack" className={styles.link}>
              Langages, frameworks et outils
            </CustomLink>
          </li>

          <li className={styles.item}>
            <CustomLink href="#perso" className={styles.link}>
              Une touche personnelle
            </CustomLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
