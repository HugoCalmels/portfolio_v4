// app/loading.tsx
'use client'

import styles from './Loading.module.css'

export default function Loading() {
  return (
    <div className={styles.wrapper} aria-live="polite" aria-busy="true">
      <div className={styles.dot} />
      <span className={styles.label}>Chargement…</span>
    </div>
  )
}