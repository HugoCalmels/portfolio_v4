'use client'

import ReactIcon from '@/components/ReactIcon'
import SpringIcon from '@/components/SpringIcon'
import styles from './Technos.module.css'

export default function LogicielsWebTechnosFr() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.blockTitle}>Technologies utilisées</h2>

        <p className={styles.techIntro}>
          Pour un <strong>logiciel web</strong>, je sépare clairement le <strong>front</strong>{' '}
          (interface) et le <strong>backend</strong> (API / données).
          <br />
          Les mêmes briques que dans beaucoup de projets web en entreprise, pensées pour évoluer.
        </p>

        <div className={styles.techGrid}>
          {/* Front */}
          <article className={styles.techCard}>
            <div className={styles.techHeader}>
              <div className={styles.techIconReact} aria-hidden="true">
                <ReactIcon />
              </div>
              <h3 className={styles.techTitle}>Front (React)</h3>
            </div>

            <p className={styles.text}>
              Pour construire l’interface&nbsp;: écrans, dashboards, formulaires, tables, filtres…
              <br />
              J&apos;utilise également Next.js pour le SEO.
            </p>

            <ul className={styles.list}>
              <li>Interface fluide et réactive, type “app”.</li>
              <li>Composants modulaires, faciles à faire évoluer.</li>
              <li>Parfait pour des outils avec beaucoup d’interactions.</li>
              <li>Technos utilisées au quotidien en entreprise.</li>
            </ul>

            <p className={styles.textMuted}>
              Objectif&nbsp;: une UI qui répond vite, sans friction.
            </p>
          </article>

          {/* Backend */}
          <article className={styles.techCard}>
            <div className={styles.techHeader}>
              <div className={styles.techIconSpring} aria-hidden="true">
                <SpringIcon />
              </div>
              <h3 className={styles.techTitle}>Backend (Spring Boot)</h3>
            </div>

            <p className={styles.text}>
              Le backend gère la logique du logiciel&nbsp;: données, comptes utilisateurs, règles
              métier, e-mails et accès sécurisés.
            </p>

            <ul className={styles.list}>
              <li>API pour lire et écrire des données.</li>
              <li>Gestion des comptes, rôles et permissions.</li>
              <li>Logique métier côté serveur.</li>
              <li>Base solide pour un outil interne ou un MVP.</li>
            </ul>

            <p className={styles.textMuted}>
              Je préfère travailler avec des technos que je maîtrise réellement, plutôt que promettre
              une stack “à la mode” sans recul.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
