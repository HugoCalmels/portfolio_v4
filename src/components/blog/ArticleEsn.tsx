'use client'

import Link from 'next/link'
import styles from './Article.module.css'

export default function ArticleEsn() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        <Link href="/blog/creation-site-vitrine">
          Pourquoi créer un site vitrine en 2025 ?
        </Link>
      </h2>
      <p className={styles.date}>Juillet 2025</p>
      <p className={styles.desc}>
        Un site vitrine reste la meilleure vitrine digitale pour les indépendants, artisans
        et petites entreprises. Voici pourquoi c’est encore essentiel.
      </p>
      <Link href="/blog/creation-site-vitrine" className={styles.readMore}>
        Lire l'article →
      </Link>
    </div>
  )
}
