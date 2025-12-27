'use client'

import styles from './Features.module.css'
import DashList from '@/components/ui/DashList'

export default function LogicielsWebFeaturesFr() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.mainTitle}>Fonctionnalités déjà développées</h2>

        <p className={styles.text}>
          Quelques briques que j’ai déjà mises en place sur des projets concrets, et que je peux
          réutiliser ou adapter selon votre cas.
        </p>

        <DashList>
          <li>
            authentification via API externe (ex.&nbsp;: Steam OpenID, transposable à Google OAuth,
            etc.),
          </li>
          <li>gestion d’équipes, invitations et rôles simples,</li>
          <li>upload / remplacement d’images côté serveur,</li>
          <li>tables avec tri, filtres et pagination,</li>
          <li>systèmes de réservation ou prise de rendez-vous,</li>
          <li>gestion d’événements datés (UTC, statuts, validation),</li>
          <li>espaces utilisateurs privés et pages réservées,</li>
          <li>CRUD complet&nbsp;: formulaires → base de données → interface,</li>
          <li>dashboard simple avec quelques stats ou indicateurs.</li>
        </DashList>

        <p className={styles.textMuted}>
          Ce n’est pas une liste fermée&nbsp;: si votre besoin est proche de l’une de ces briques,
          on peut souvent l’adapter plutôt que repartir de zéro.
        </p>
      </div>
    </section>
  )
}
