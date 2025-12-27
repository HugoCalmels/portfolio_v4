'use client'

import styles from './Deploy.module.css'
import DashList from '@/components/ui/DashList'

export default function LogicielsWebDeployFr() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.mainTitle}>Déploiement & hébergement</h2>

        <p className={styles.text}>L’idée est de garder quelque chose de simple, fiable et compréhensible.</p>

        <DashList>
          <li>
            interface web déployée sur <strong>Vercel</strong> ou <strong>Netlify</strong> (rapide, adapté
            aux sites modernes),
          </li>
          <li>
            backend (<strong>API Spring Boot</strong>) hébergé sur un <strong>VPS</strong> (par exemple OVH)
            avec <strong>Nginx</strong>,
          </li>
          <li>mise en place possible d’un pipeline de mise à jour (CI/CD simple),</li>
          <li>sauvegardes et bonnes pratiques de base.</li>
        </DashList>

        <p className={styles.textMuted}>
          Le but&nbsp;: un outil qui tourne proprement dans le temps, sans infrastructure inutilement
          compliquée.
        </p>
      </div>
    </section>
  )
}
