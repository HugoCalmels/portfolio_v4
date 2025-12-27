'use client'

import ReactIcon from '@/components/ReactIcon'
import SpringIcon from '@/components/SpringIcon'
import styles from './Technos.module.css'
import SectionSubtitle from '@/components/ui/SectionSubtitle'

export default function SitesVitrinesTechnosFr() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionSubtitle>Technologies utilisées</SectionSubtitle>

        <p className={styles.techIntro}>
          Pas de CMS type WordPress. Sans thèmes ni plugins génériques.
          <br />
          Le site est <strong>entièrement développé en code</strong>, sur mesure.
          <br />
          Beaucoup moins exposé aux attaques automatisées et aux piratages courants.
        </p>

        <div className={styles.techGrid}>
          {/* React */}
          <article className={styles.techCard}>
            <div className={styles.techHeader}>
              <div className={styles.techIconReact} aria-hidden="true">
                <ReactIcon />
              </div>
              <h3 className={styles.techTitle}>React / Next.js (interface)</h3>
            </div>

            <p className={styles.text}>
              React et Next.js me permettent de construire l’interface de votre site vitrine : pages,
              sections, formulaires, etc.
            </p>

            <ul className={styles.list}>
              <li>Interface fluide et rapide sur mobile et ordinateur.</li>
              <li>Aucune dépendance à des plugins ou thèmes tiers.</li>
              <li>Structure claire, facile à faire évoluer.</li>
              <li>Technologie largement utilisée dans le monde professionnel.</li>
            </ul>

            <p className={styles.textMuted}>
              Navigation fluide&nbsp;: le petit sablier n’a même pas le temps d’apparaître.
            </p>
          </article>

          {/* Spring Boot */}
          <article className={styles.techCard}>
            <div className={styles.techHeader}>
              <div className={styles.techIconSpring} aria-hidden="true">
                <SpringIcon />
              </div>
              <h3 className={styles.techTitle}>Spring Boot (backend)</h3>
            </div>

            <p className={styles.text}>
              Spring Boot est un framework Java utilisé quand un vrai backend est nécessaire : API,
              données, interface d’administration, logique métier.
            </p>

            <ul className={styles.list}>
              <li>Backend stable pour gérer les données du site.</li>
              <li>API fiable pour les sites modifiables.</li>
              <li>Technologie utilisée à grande échelle dans l’industrie.</li>
              <li>Conçu pour durer dans le temps.</li>
            </ul>

            <p className={styles.textMuted}>
              Java est utilisé jusque dans le spatial&nbsp;: côté serveur, c’est du solide.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
