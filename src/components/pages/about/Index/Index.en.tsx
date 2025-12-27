'use client'

import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import CustomLink from '@/components/ui/CustomLink'
import styles from './Index.module.css'

export default function IndexEn() {
  return (
    <nav className={styles.section} aria-label="Page index">
      <div className={styles.inner}>
        <HomeSectionTitle title="Index" />

        <ul className={styles.list}>
          <li className={styles.item}>
            <CustomLink href="#parcours" className={styles.link}>
              Background
            </CustomLink>
          </li>

          <li className={styles.item}>
            <CustomLink href="#freelance" className={styles.link}>
              Freelancing, SEO & business model
            </CustomLink>
          </li>

          <li className={styles.item}>
            <CustomLink href="#stack" className={styles.link}>
              Languages, frameworks & tools
            </CustomLink>
          </li>

          <li className={styles.item}>
            <CustomLink href="#perso" className={styles.link}>
              A personal touch
            </CustomLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
