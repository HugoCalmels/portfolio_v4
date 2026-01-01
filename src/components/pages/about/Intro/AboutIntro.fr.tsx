// app/[locale]/(site)/a-propos/_sections/Intro/AboutIntro.fr.tsx
'use client'

import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import styles from './Intro.module.css'

export default function AboutIntroFr() {
  return (
    <section className={styles.section} id="intro" aria-labelledby="intro-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div id="intro-title">
            <HomeSectionTitle title="À propos" />
          </div>
        </header>

        <div className={styles.prose}>
          <p>
            Quelques éléments de contexte.
          </p>

          <p>
            Je suis développeur web. Cette page est une page “bonus” :
            elle rassemble mon parcours, ma pratique, et les technos que j’utilise aujourd’hui.
          </p>

          <p className={styles.meta}>
            Si vous voulez juste du concret : allez directement à <a href="#parcours">Parcours</a> et{' '}
            <a href="#technos">Technos</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
