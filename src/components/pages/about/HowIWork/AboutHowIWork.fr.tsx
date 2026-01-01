// app/[locale]/(site)/a-propos/_sections/HowIWork/AboutHowIWork.fr.tsx
'use client'

import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import styles from './HowIWork.module.css'

export default function AboutHowIWorkFr() {
  return (
    <section
      className={styles.section}
      id="how-i-work"
      aria-labelledby="how-i-work-title"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <div id="how-i-work-title">
            <HomeSectionTitle title="Comment je travaille" />
          </div>
        </header>

        <div className={styles.prose}>
          <h3 className={styles.h3}>Approche</h3>

          <p>Je travaille de manière directe et progressive.</p>

          <p>
            Tout commence par un premier échange pour comprendre le besoin réel,
            le contexte et vérifier si le projet est pertinent des deux côtés.
          </p>

          <p>
            Si le périmètre est clair, je peux donner une estimation rapidement.
            Sinon, on prend un peu plus de temps pour cadrer avant devis.
          </p>

          <p>
            Je ne pars pas d’un thème à remplir ni d’une plateforme imposée.
            Le point de départ, c’est votre activité, vos contenus et l’usage attendu —
            puis on construit autour de ça.
          </p>

          <p>
            Vous échangez directement avec la personne qui conçoit et développe
            le projet, <strong>du début à la fin</strong>.
          </p>

          <h3 className={styles.h3}>Déroulé</h3>

          <p>
            Une fois le devis validé, nous travaillons ensemble sur la structure
            du site ou de l’application.
          </p>

          <p>
            Cela peut passer par des échanges écrits, des appels ou des sessions
            en visio avec partage d’écran pour poser des <strong>wireframes simples</strong>&nbsp;
            et valider l’organisation des pages ou des fonctionnalités.
          </p>

          <p>
            Les inspirations existantes sont bienvenues&nbsp;: sites, éléments
            précis, fonctionnalités, références visuelles. Elles servent de base
            de discussion, pas de copie.
          </p>

          <p>
            Le développement commence ensuite. Selon le projet, je peux avancer
            en autonomie ou solliciter des retours réguliers afin de rester
            aligné avec votre activité et votre manière de communiquer.
          </p>

          <p>
            Avant la livraison, l’ensemble est testé. Une période de retouches
            mineures est incluse après la mise en ligne.
          </p>

          <h3 className={styles.h3}>Cadre</h3>

          <p>Les délais dépendent du périmètre et de la réactivité des échanges.</p>

          <p>
            À titre indicatif, un site vitrine simple peut être réalisé en{' '}
            <strong>5 à 10 jours ouvrés</strong>, répartis sur plusieurs semaines si nécessaire.
          </p>

          <p>
            Ce délai suppose un périmètre clair et des contenus disponibles
            (textes, images, etc.). Sinon, on planifie différemment dès le départ.
          </p>

          <p>
            Le rythme s’adapte à votre agenda&nbsp;: certains projets avancent
            vite, d’autres demandent plus de temps pour valider les contenus ou
            les choix.
          </p>

          <p>
            Mon objectif est de livrer un projet fonctionnel, clair et
            maintenable, sans précipitation inutile.
          </p>
        </div>
      </div>
    </section>
  )
}
