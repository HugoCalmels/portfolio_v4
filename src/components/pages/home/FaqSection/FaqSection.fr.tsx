'use client'

import {useMemo, useState, useCallback} from 'react'
import Link from 'next/link'
import styles from './FaqSection.module.css'
import HomeSectionTitle from '@/components/ui/HomeSectionTitle'

type FaqItem = {
  q: string
  a: React.ReactNode
}

const ChevronDown = ({open}: {open: boolean}) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    aria-hidden
    focusable="false"
    className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
  >
    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
)

export default function FaqSectionFr() {
  const items: FaqItem[] = useMemo(
    () => [
      {
        q: 'Refonte : pouvez-vous repartir d’un site existant ou d’une maquette ?',
        a: (
          <>
            Oui. Je peux refaire un site existant (WordPress, Shopify, Wix…) ou partir d’une maquette
            (Figma/PSD).
            <br />
            Concrètement : on garde ce qui est utile (structure, contenus) et on reconstruit une version
            plus propre, plus rapide et plus claire.
          </>
        ),
      },
      {
        q: 'Quels délais prévoir pour un site vitrine ?',
        a: (
          <>
            Les délais varient selon le contenu et la réactivité sur les retours, mais en pratique :
            <ul className={styles.ul}>
              <li>
                <strong>One-page</strong> : environ <strong>2 à 5 jours ouvrés</strong>
              </li>
              <li>
                <strong>Vitrine 3–5 pages</strong> : environ <strong>5 à 10 jours ouvrés</strong>
              </li>
            </ul>
            Lorsque les textes et visuels sont déjà disponibles, une première version peut être mise en
            ligne très rapidement, puis ajustée ensuite si besoin.
          </>
        ),
      },
      {
        q: 'De quoi a-t-on besoin pour démarrer ?',
        a: (
          <>
            Pas grand-chose. L’activité, l’objectif du site, et 2–3 exemples de sites que vous aimez
            (même trouvés au hasard).
            <br />
            Un message du type&nbsp;:
            <em>
              {' '}
              « j’aime bien le style d’Uber », « je veux quelque chose de simple », « je veux surtout être
              contacté »
            </em>
            , ça suffit.
            <br />
            Vous envoyez ce que vous avez (liens, notes, idées en vrac), et on avance à partir de ça.
          </>
        ),
      },
      {
        q: 'Est-il possible de modifier le site soi-même ?',
        a: (
          <>
            Oui, en option. Certains blocs clés peuvent être rendus modifiables (textes, images,
            coordonnées, horaires…) via une petite interface dédiée. Sinon, les modifications peuvent être
            gérées ponctuellement.
            <br />
            <span className={styles.inlineLinks}>
              Voir :{' '}
              <Link href="/fr/sites-vitrines" className={styles.link}>
                sites vitrines
              </Link>
              .
            </span>
          </>
        ),
      },
      {
        q: 'Domaine, hébergement, propriété : comment ça se passe ?',
        a: (
          <>
            <strong>Le site vous appartient</strong> (contenus + code + accès).
            <br />
            <strong>Le domaine</strong> est à votre charge (abonnement annuel), mais je peux m’en occuper
            pour vous si vous préférez.
            <br />
            <strong>L’hébergement</strong> est inclus / gratuit.
          </>
        ),
      },
    ],
    []
  )

  // 👇 Rien d'ouvert par défaut
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = useCallback((i: number) => {
    setOpenIndex(prev => (prev === i ? null : i))
  }, [])

  return (
    <section className={styles.faq}>
      <div className={styles.inner}>
        <HomeSectionTitle
          kicker="Q/R"
          title="Questions fréquentes"
          subtitle="Quelques réponses rapides pour clarifier l’essentiel avant de prendre rendez-vous."
        />

        <div className={styles.list}>
          {items.map((item, i) => {
            const open = openIndex === i
            const panelId = `faq-panel-${i}`
            const btnId = `faq-btn-${i}`

            return (
              <div key={item.q} className={styles.card}>
                <button
                  id={btnId}
                  className={styles.question}
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                  aria-controls={panelId}
                  type="button"
                >
                  <span className={styles.qText}>{item.q}</span>
                  <ChevronDown open={open} />
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`${styles.answerWrap} ${open ? styles.open : styles.closed}`}
                >
                  <div className={styles.answer}>{item.a}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
