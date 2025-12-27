'use client'

import styles from './Skills.module.css'

export default function LogicielsWebSkillsFr() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.mainTitle}>Mes compétences</h2>

        <div className={styles.grid}>
          <article className={styles.block}>
            <h3 className={styles.blockTitle}>Côté fonctionnel</h3>
            <ul className={styles.list}>
              <li>formulaires et gestion de comptes simples,</li>
              <li>tableaux avec recherche, tri et filtres,</li>
              <li>création / modification de contenus via une interface web,</li>
              <li>accès réservé après connexion (espace privé, tableau de bord),</li>
              <li>gestion de dates, horaires, statuts ou réservations,</li>
              <li>workflows simples&nbsp;: demande → validation → notification e-mail.</li>
            </ul>
          </article>

          <article className={styles.block}>
            <h3 className={styles.blockTitle}>Côté technique</h3>
            <ul className={styles.list}>
              <li>API REST pour lire et écrire des données,</li>
              <li>authentification avec tokens (JWT), sessions et rôles simples,</li>
              <li>base de données&nbsp;: création, mise à jour, requêtes ciblées,</li>
              <li>envoi d’e-mails automatiques (formulaires, confirmations),</li>
              <li>gestion d’images (upload, remplacement, suppression),</li>
              <li>intégration d’API externes si besoin (auth, données, etc.).</li>
            </ul>
            <p className={styles.textMuted}>
              L’idée est de rester sur des briques maîtrisées, que l’on peut faire évoluer si l’outil
              est vraiment utilisé.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
