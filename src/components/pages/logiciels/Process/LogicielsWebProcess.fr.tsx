'use client'

import DashList from '@/components/ui/DashList'
import styles from './Process.module.css'

export default function LogicielsWebProcessFr() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.mainTitle}>Méthode & tarifs</h2>

        <p className={styles.text}>
          On démarre toujours par une version simple du logiciel pour éviter les projets
          surdimensionnés.
        </p>

        <DashList>
          <li>on définit ensemble les écrans importants,</li>
          <li>on clarifie le flux principal (qui fait quoi, dans quel ordre),</li>
          <li>on limite le périmètre à ce qui est vraiment utile au départ.</li>
        </DashList>

        <p className={styles.text}>
          Ensuite, j’avance par petits cycles (quelques jours ou une semaine), avec un point
          régulier pour valider que ce qui est livré correspond bien à votre besoin.
        </p>

        <div className={styles.methodsGrid}>
          <article className={styles.methodCard}>
            <h3 className={styles.methodTitle}>Modèle classique</h3>
            <ul className={styles.list}>
              <li>devis basé sur un périmètre défini ensemble,</li>
              <li>40&nbsp;% à la commande,</li>
              <li>le reste à la livraison de l’étape prévue.</li>
            </ul>
            <p className={styles.textMuted}>
              Adapté quand le besoin est clair et bien cadré.
            </p>
          </article>

          <article className={styles.methodCard}>
            <h3 className={styles.methodTitle}>Travail par jalons courts</h3>
            <ul className={styles.list}>
              <li>cycles de 3 à 7 jours, livrables à chaque jalon,</li>
              <li>paiement à la fin de chaque jalon validé,</li>
              <li>on peut arrêter ou ajuster à tout moment.</li>
            </ul>
            <p className={styles.textMuted}>
              Adapté aux projets logiciels où il faut avancer, tester, puis ajuster au réel.
            </p>
          </article>
        </div>

        <div className={styles.pricingBlock}>
          <h3 className={styles.blockTitle}>Tarifs</h3>
          <DashList>
            <li>125&nbsp;€ / jour pour les projets logiciels,</li>
            <li>estimation du volume nécessaire avant chaque étape,</li>
            <li>possibilité de commencer petit pour limiter les risques.</li>
          </DashList>
        </div>
      </div>
    </section>
  )
}
