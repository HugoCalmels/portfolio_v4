'use client'

import styles from './CeQueJePropose.module.css'
import FadeIn from '@/components/FadeIn'
import Section2 from './megaSection/Section2'
import { useParams } from 'next/navigation'

export default function CeQueJePropose() {
  const params = useParams()
  const locale = (params as any)?.locale || 'fr'

  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        <FadeIn>
          <h2 className={styles.title}>Mon parcours</h2>
        </FadeIn>

        <div className={styles.paragraphs}>
          <FadeIn>
            <p>
              Je propose la <strong>création de sites internet à Toulouse</strong> — des sites{' '}
              <strong>simples</strong>, <strong>fiables</strong> et adaptés aux pros.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Je suis développeur logiciel web de formation, mais le marché ne m’a pas laissé de place.
              <br />
              <a
                className={styles.linkHoverUnderline}
                href={`/${locale}/blog/pourquoi-je-ne-travaille-pas-en-esn`}
              >
                👉 J’explique pourquoi ici.
              </a>
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Alors plutôt que d’attendre, j’ai décidé d’avancer par moi-même.
              <br />
              Je crée aujourd’hui des <strong>sites vitrines</strong> et des <strong>logiciels web</strong>, 
              pensés de bout en bout&nbsp;: contenu, design, interface, logique métier.
              C’est une façon de mettre mes compétences au service de projets concrets, 
              tout en continuant à nourrir mon parcours de développeur.
            </p>
          </FadeIn>
        </div>
      </div>

      <Section2 />
      {/* <Section3 /> */}
    </section>
  )
}
