'use client'

import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import styles from './Projects.module.css'

export default function ProjectsFr() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.inner}>
        <HomeSectionTitle
          kicker="Derniers projets"
          title="Quelques exemples de réalisations."
          subtitle={
            <>
              Quelques types de projets que je peux développer&nbsp;: site vitrine, e-commerce et outil
              sur-mesure.
            </>
          }
        />

        <div className={styles.grid}>
          {/* Carte 1 */}
          <article className={styles.card}>
            <div className={styles.thumb} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Site vitrine</h3>
              <p className={styles.cardMeta}>Présentation d’une petite entreprise locale.</p>
              <p className={styles.cardText}>
                Page d’accueil claire, présentation des services, informations pratiques et formulaire de
                contact.
              </p>
            </div>
          </article>

          {/* Carte 2 */}
          <article className={`${styles.card} ${styles.cardRight}`}>
            <div className={styles.thumb} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Site e-commerce</h3>
              <p className={styles.cardMeta}>Boutique en ligne avec paiement sécurisé.</p>
              <p className={styles.cardText}>
                Catalogue simple, panier, paiement Stripe, et espace pour gérer les produits.
              </p>
            </div>
          </article>

          {/* Carte 3 */}
          <article className={styles.card}>
            <div className={styles.thumb} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Outil / tableau de bord</h3>
              <p className={styles.cardMeta}>Suivi interne adapté au métier du client.</p>
              <p className={styles.cardText}>
                Interface web pour centraliser des données, suivre des réservations ou automatiser quelques
                tâches.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
