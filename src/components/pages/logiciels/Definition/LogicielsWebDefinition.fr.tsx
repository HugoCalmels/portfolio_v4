'use client'

import styles from './Definition.module.css'
import DashList from '@/components/ui/DashList'

export default function LogicielsWebDefinitionFr() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>Vous utilisez déjà des logiciels web.</h2>

        <p className={styles.text}>
          Une messagerie en ligne, un espace client, un outil de réservation ou un tableau de
          suivi&nbsp;: tout ça fonctionne directement dans un navigateur.
        </p>

        <p className={styles.text}>
          Dans un contexte professionnel, c’est pareil&nbsp;: un outil en ligne conçu pour faciliter
          une tâche précise.
        </p>

        <DashList>
          <li>gérer des données ou des dossiers,</li>
          <li>administrer un site ou un service,</li>
          <li>outiller une équipe avec des écrans simples,</li>
          <li>tester une idée ou poser les bases d’un MVP.</li>
        </DashList>

        <p className={styles.note}>
          On appelle ça un <strong>logiciel web</strong>. Mon rôle est d’en construire des versions
          utiles, claires et adaptées à votre besoin réel — pas des plateformes surdimensionnées.
        </p>
      </div>
    </section>
  )
}
