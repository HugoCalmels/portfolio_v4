// app/[locale]/(site)/about/_sections/Intro/AboutIntro.en.tsx
'use client'

import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import styles from './Intro.module.css'

export default function AboutIntroEn() {
  return (
    <section
      className={styles.section}
      id="intro"
      aria-labelledby="intro-title"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <div id="intro-title">
            <HomeSectionTitle title="About" />
          </div>
        </header>

        <div className={styles.prose}>
          <p>
            A few contextual notes.
          </p>

          <p>
            I am a web developer. This page is a “bonus” page:
            it documents my background, my practice, and the technologies
            I currently use.
          </p>

          <p className={styles.meta}>
            If you want the concrete parts only, you can jump directly to{' '}
            <a href="#parcours">Background</a> and{' '}
            <a href="#technos">Technologies</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
