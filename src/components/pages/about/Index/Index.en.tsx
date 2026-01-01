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
            <CustomLink href="#how-i-work" className={styles.link}>
              How I work
            </CustomLink>
          </li>

          <li className={styles.item}>
            <CustomLink href="#parcours" className={styles.link}>
              Background
            </CustomLink>
          </li>

          <li className={styles.item}>
            <CustomLink href="#stack" className={styles.link}>
              Tech stack
            </CustomLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
