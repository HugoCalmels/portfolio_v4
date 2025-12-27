'use client'

import styles from './SecondaryHero.module.css'

type Props = {
  kicker: React.ReactNode
  title: React.ReactNode
  subtitle?: React.ReactNode
  visual?: React.ReactNode
}

export default function SecondaryHero({ kicker, title, subtitle, visual }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.layout}>
          <header className={styles.content}>
            <p className={styles.kicker}>{kicker}</p>

            <h1 className={styles.title}>{title}</h1>

            {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
          </header>

          {visual ? (
            <div className={styles.visualFrame} aria-hidden="true">
              {visual}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
