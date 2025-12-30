'use client'

import Image from 'next/image'
import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import styles from './Seo.module.css'

export default function AboutSeoFr() {
function formatDurationFr(ms: number) {
  const totalMinutes = Math.floor(ms / (1000 * 60))

  const days = Math.floor(totalMinutes / (60 * 24))
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60)
  const minutes = totalMinutes % 60

  return `${days} jour${days > 1 ? 's' : ''} ${hours} heure${
    hours > 1 ? 's' : ''
  } et ${minutes} minute${minutes > 1 ? 's' : ''}`
}


const deployedAt = new Date(2025, 11, 30, 0, 0, 0).getTime()
const durationMs = Date.now() - deployedAt
const onlineSince = formatDurationFr(durationMs)



  return (
    <section className={styles.section} id="seo" aria-labelledby="seo-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div id="seo-title">
            <HomeSectionTitle title="SEO, visibilité et positionnement" />
          </div>
        </header>

        <div className={styles.prose}>
         <p>
  J’ai commencé à travailler le SEO début été 2025. Une première version du site,
  plus orientée <strong>SEO local</strong>, a été mise en ligne à la fin de l’été.
</p>

<p>
  La visibilité a progressé, mais le site ne me convenait pas&nbsp;: pas assez clair,
  pas assez aligné avec mon activité réelle.
</p>

<p>
  Le site mélangeait deux logiques incompatibles&nbsp;:
  d’un côté, un positionnement <strong>global</strong>&nbsp;
  (répondre à des appels d’offres, convaincre partout),
  de l’autre, du <strong>SEO local</strong>&nbsp;
  avec “Toulouse” omniprésent — jusque dans les URLs.
  Résultat&nbsp;: un message brouillé.
</p>


<p>
  J’ai donc préféré arrêter là et repartir de zéro&nbsp;: simplifier, clarifier,
  et recentrer le site sur ce que je fais vraiment.
</p>

<figure className={styles.figure}>
  <Image
    src="/images/stats.png"
    alt="Évolution de la visibilité du site dans Google Search Console"
    className={styles.image}
    width={1200}
    height={800}
    sizes="(max-width: 640px) 100vw, 760px"
  />
  <figcaption className={styles.figcaption}>
    Capture Google Search Console — période de test SEO (6 mois).
  </figcaption>
</figure>

<p>
  La courbe reflète simplement ça&nbsp;: un test <em>one-shot</em>, puis un arrêt,
  sans itérations ni publication continue.
</p>

<p>
  Le site actuel est en ligne depuis <strong>{onlineSince}</strong>.
</p>

<p>
  Pour l’instant, j’observe simplement sur quelles requêtes il apparaît
  naturellement. Si des axes se dégagent avec le temps, ils seront plutôt
 &nbsp;<strong>globaux et niches</strong>, par exemple autour du <em>site web sur mesure</em>.
</p>

<p>
  Morale de l’histoire, surtout quand on part de zéro&nbsp;:
  il est crucial d’identifier précisément à qui on veut vendre
  avant de construire un site autour de ça.
</p>

<p>
  À titre de repère, Paul Vengeons a mis <strong>4 ans</strong> à se positionner sur
  <strong> “Agence SEO”</strong>, et chez Superprof le SEO est porté par une équipe
  d’environ <strong>30 personnes</strong>.
  Le SEO sur des requêtes compétitives est donc un travail long,
  exigeant, et rarement immédiat.
</p>



        </div>
      </div>
    </section>
  )
}
