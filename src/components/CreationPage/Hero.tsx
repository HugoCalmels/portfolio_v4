'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function Hero() {
  const [ready, setReady] = useState(false)

  const params = useParams()
  const locale = (params?.locale as string) || 'fr'

  useEffect(() => {
    const timeout = setTimeout(() => setReady(true), 200) // Légère attente avant d'animer
    return () => clearTimeout(timeout)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src="/images/testa42.png"
          alt="Création de site internet à Toulouse"
          fill
          placeholder="blur"
          blurDataURL="/images/testa42-small-blur.jpg"
          style={{ objectFit: 'cover', filter: 'brightness(0.65) blur(1.5px)' }}
          priority
        />
      </div>

      <div className={styles.inner}>
        <h1 className={`${styles.title} ${ready ? styles.fadeIn : ''}`}>
          Création de site internet<br />
          <span className={styles.accent}>à Toulouse</span>
        </h1>

        <p className={`${styles.subtitle} ${ready ? styles.fadeIn : ''}`}>
          Indépendant, artisan ou petite entreprise ?<br />
          Je conçois des <strong>sites web</strong> et <strong>logiciels métiers</strong> adaptés à votre activité – pour être trouvé, gagner du temps, ou mieux gérer vos demandes.
        </p>

        <div className={`${styles.actions} ${ready ? styles.fadeIn : ''}`}>
          <button className={styles.cta} onClick={() => scrollTo('#offres')}>
            Voir mes offres
          </button>

          <p className={styles.linkAlt}>
            ou <Link href={`/${locale}/contact`}>me contacter</Link>
          </p>
        </div>
      </div>

      <div className={styles.cardsStack}>
        {ready && (
          <>
            <div className={`${styles.card} ${styles.fadeIn}`} style={{ animationDelay: '0.6s' }}>
              <h3>Pourquoi me choisir</h3>
              <ul>
                <li>✔️ 100 % sur mesure, sans CMS</li>
                <li>📄 Contenu structuré & pensé pour Google</li>
                <li>🛠️ Développement full-stack, vitrine ou métier</li>
                <li>📍 Basé à Toulouse, dispo partout en visio</li>
              </ul>
            </div>
            <div className={`${styles.card} ${styles.fadeIn}`} style={{ animationDelay: '0.9s' }}>
              <h3>Tarifs de base</h3>
              <ul>
                <li><span style={{ color: '#34d399' }}>🟩</span> Site simple — dès 500 €</li>
                <li><span style={{ color: '#fbbf24' }}>🟨</span> Site complet — dès 900 €</li>
                <li><span style={{ color: '#60a5fa' }}>🟦</span> SEO local — dès 1200 €</li>
              </ul>
            </div>
          </>
        )}
      </div>

      <div className={styles.fader}></div>
    </section>
  )
}
