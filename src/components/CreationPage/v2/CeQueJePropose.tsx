'use client'

import styles from './CeQueJePropose.module.css'
import FadeIn from '@/components/FadeIn'
import Section2 from './megaSection/Section2'
// import Section3 from './megaSection/Section3'
import { useParams } from 'next/navigation'

export default function CeQueJePropose() {
  const params = useParams()
  const locale = params?.locale || 'fr'

  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        <FadeIn>
          <h2 className={styles.title}>Mon parcours, ma façon de faire</h2>
        </FadeIn>

        <div className={styles.paragraphs}>
          <FadeIn>
            <p>
              Je propose la <strong>création de site internet à Toulouse</strong> — des sites <strong>simples</strong>, <strong>fiables</strong> et adaptés aux pros.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              À la base je suis développeur logiciel web, mais l’industrie ne voulait pas de moi.<br />
              👉 <a className={styles.linkHoverUnderline} href={`/${locale}/blog/pourquoi-je-ne-travaille-pas-en-esn`}>J’explique pourquoi ici.</a>
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Alors j’ai décidé de tenter ma chance, en indépendant.  
              Pas de réseau, pas de pub, pas de budget — juste ce site, <strong>mes compétences</strong>, et <strong>l’envie de faire mes preuves</strong>.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Je suis confiant dans ce que je propose. J’ai appris à <strong>concevoir</strong>, structurer, coder — à créer un site de A à Z, du contenu à l’interface.  
              &nbsp;<strong>Site vitrine</strong>, interface métier, app web complète — je construis selon le <strong>besoin réel</strong>, sans superflu.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Je travaille seul, mais je touche à tout : structuration, interface, logique métier, optimisation, contenus…<br />
              Quand je construis un site, je pense autant à <strong>son message</strong> qu’à sa <strong>solidité technique</strong>. Je réfléchis, j’écris, je code, j’organise.<br />
              Ce n’est pas “un peu de tout”, c’est <strong>tout ce qu’il faut</strong> pour un site qui tient la route.
            </p>
          </FadeIn>
        </div>
      </div>

      <Section2 />
      {/* <Section3 /> */}
    </section>
  )
}
