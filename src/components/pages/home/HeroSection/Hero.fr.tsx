'use client'

import CTA from '@/components/ui/Cta'
import Image from 'next/image'
import styles from './Hero.module.css'

export default function HeroFr() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el instanceof HTMLElement) el.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.content}>
            <p className={styles.kicker}>Développeur web indépendant</p>

            <h1 className={styles.title}>
              <span>Sites et logiciels web</span>
              <span>sur-mesure.</span>
              <span className={styles.accent}>Simples. Rapides. Fiables.</span>
            </h1>

            <p className={styles.subtitle}>
              Sans CMS lourd. Sans plugins inutiles. Un site propre, fidèle à votre besoin.
            </p>

            <div className={styles.actions}>
              <CTA onClick={() => scrollTo('#services')}>Voir les services</CTA>
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
