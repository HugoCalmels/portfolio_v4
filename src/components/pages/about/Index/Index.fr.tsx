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
            <CustomLink href="#how-i-work" className={styles.link}>
              Comment je travaille
            </CustomLink>
          </li>

          <li className={styles.item}>
            <CustomLink href="#parcours" className={styles.link}>
              Parcours
            </CustomLink>
          </li>


          <li className={styles.item}>
            <CustomLink href="#stack" className={styles.link}>
              Technos
            </CustomLink>
          </li>

        </ul>
      </div>
    </nav>
  )
}
