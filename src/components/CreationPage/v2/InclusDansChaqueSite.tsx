'use client'

import styles from './InclusDansChaqueSite.module.css'

export default function InclusDansChaqueSite() {
  const features = [
    'Responsive & mobile-friendly',
    'Chargement rapide',
    'Code propre & maintenable',
    'SEO local de base',
    'Rédaction ou contenu co-rédigé',
    'Site évolutif (pas bloqué par des plugins)',
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Inclus dans chaque site</h2>
        <div className={styles.table}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.row}>
              <div className={styles.feature}>{feature}</div>
              <div className={styles.check}>✓</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
