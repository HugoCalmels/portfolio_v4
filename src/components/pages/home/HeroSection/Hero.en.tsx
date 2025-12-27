'use client'

import CTA from '@/components/ui/Cta'
import Image from 'next/image'
import styles from './Hero.module.css'

export default function HeroEn() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el instanceof HTMLElement) el.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.content}>
            <p className={styles.kicker}>Freelance web developer</p>

            <h1 className={styles.title}>
              <span>Websites and web apps</span>
              <span>built to fit.</span>
              <span className={styles.accent}>Simple. Fast. Reliable.</span>
            </h1>

            <p className={styles.subtitle}>
              No heavy CMS. No useless plugins. A clean site that fits your needs.
            </p>

            <div className={styles.actions}>
              <CTA onClick={() => scrollTo('#services')}>View services</CTA>
            </div>
          </div>

          <div className={styles.visualCol} aria-hidden="true">
            <div className={styles.visualFrame}>
              <Image
                src="/images/hacker5.png"
                alt=""
                width={520}
                height={360}
                priority
                fetchPriority="high"
                sizes="(max-width: 640px) 100vw, 520px"
                className={styles.visualImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
