'use client'

import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import CustomLink from '@/components/ui/CustomLink'
import styles from './Index.module.css'

export default function IndexEn() {
  return (
    <nav className={styles.section} aria-label="Page table of contents">
      <div className={styles.inner}>
        <HomeSectionTitle title="Index" />

        <ul className={styles.list}>
          <li className={styles.item}>
            <CustomLink href="#business-model" className={styles.link}>
              Business model
            </CustomLink>
          </li>

          <li className={styles.item}>
            <CustomLink href="#seo" className={styles.link}>
              SEO, visibility and positioning
            </CustomLink>
          </li>

          <li className={styles.item}>
            <CustomLink href="#parcours" className={styles.link}>
              Background
            </CustomLink>
          </li>

          <li className={styles.item}>
            <CustomLink href="#stack" className={styles.link}>
              Languages, frameworks and tools
            </CustomLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
