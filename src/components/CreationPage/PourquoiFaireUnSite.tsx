// components/PourquoiFaireUnSite.tsx
'use client'

import styles from './PourquoiFaireUnSite.module.css'

export default function PourquoiFaireUnSite() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Pourquoi faire un site ou un logiciel web ?</h2>
        <p className={styles.lead}>
          Quelques raisons concrètes de passer au web :
        </p>
        <ul className={styles.list}>
        <li>✅ Être trouvé facilement sur Google</li>
  <li>✅ Inspirer confiance avec une présentation claire</li>
  <li>✅ Recevoir des demandes ou prises de contact</li>
  <li>✅ Gérer vos demandes avec un logiciel adapté à votre métier</li>
        </ul>
      </div>
    </section>
  )
}
