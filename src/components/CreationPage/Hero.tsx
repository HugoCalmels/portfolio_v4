'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import FadeIn from '@/components/FadeIn';

// 👇 icônes (couleur gérée par CSS via var(--accent))
import { FiCheckCircle, FiFileText, FiTool, FiMapPin } from 'react-icons/fi';

// Type utilitaire pour accepter des variables CSS personnalisées
type CSSWithVars = React.CSSProperties & { ['--ad']?: string };

export default function Hero() {
  // flags d’affichage (stagger après le boot)
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [showCard1, setShowCard1] = useState(false);
  const [showCard2, setShowCard2] = useState(false);

  useEffect(() => {
    let t1: number | undefined,
      t2: number | undefined,
      t3: number | undefined,
      t4: number | undefined,
      t5: number | undefined;

    const start = () => {
      setShowTitle(true); // 0 ms
      t2 = window.setTimeout(() => setShowSubtitle(true), 120);
      t3 = window.setTimeout(() => setShowActions(true), 220);
      t4 = window.setTimeout(() => setShowCard1(true), 600);
      t5 = window.setTimeout(() => setShowCard2(true), 900);
    };

    if (
      typeof document !== 'undefined' &&
      document.documentElement.dataset.boot === 'done'
    ) {
      start();
    } else {
      const onBoot = () => {
        start();
        window.removeEventListener('boot:done', onBoot);
      };
      window.addEventListener('boot:done', onBoot, { once: true });
      t1 = window.setTimeout(start, 1500); // fail-safe
    }

    return () => {
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
      if (t3) clearTimeout(t3);
      if (t4) clearTimeout(t4);
      if (t5) clearTimeout(t5);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el instanceof HTMLElement) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Styles avec variable CSS typée
  const cardDelay150: CSSWithVars = { '--ad': '150ms' };
  const cardDelay200: CSSWithVars = { '--ad': '200ms' };

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src="/images/testa42.png"
          alt="Création de site internet à Toulouse"
          fill
          placeholder="blur"
          blurDataURL="/images/testa42-small-blur.jpg"
          style={{ objectFit: 'cover', filter: 'brightness(0.75) blur(1.5px)' }}
          priority
        />
      </div>

      <div className={styles.inner}>
        {showTitle && (
          <FadeIn>
            <h1 className={styles.title}>
              Création de site internet
              <br />
              <span className={styles.accent}>à Toulouse</span>
            </h1>
          </FadeIn>
        )}

        {showSubtitle && (
          <FadeIn>
            <p className={styles.subtitle}>
              Indépendant, artisan ou petite entreprise ?
              <br />
              Je conçois des <strong>sites web</strong> et{' '}
              <strong>logiciels métiers</strong> adaptés à votre activité – pour être
              trouvé, gagner du temps, ou mieux gérer vos demandes.
            </p>
          </FadeIn>
        )}

        {showActions && (
          <FadeIn>
            <div className={styles.actions}>
              <button className={styles.cta} onClick={() => scrollTo('#offres')}>
                Voir mes offres
              </button>
            </div>
          </FadeIn>
        )}
      </div>

      <div className={styles.cardsStack}>
        <div
          className={`${styles.card} ${
            showCard1 ? styles.cardShow : styles.cardPre
          }`}
          style={cardDelay150}
        >
          <div className={styles.cardAnim}>
            <h3>Pourquoi me choisir</h3>

            <ul>
              <li>
                <FiCheckCircle className={styles.listIcon} aria-hidden />
                <span>100 % sur mesure, sans CMS</span>
              </li>
              <li>
                <FiFileText className={styles.listIcon} aria-hidden />
                <span>Contenu structuré &nbsp;et pensé pour Google</span>
              </li>
              <li>
                <FiTool className={styles.listIcon} aria-hidden />
                <span>Développement full-stack, vitrine ou métier</span>
              </li>
              <li>
                <FiMapPin className={styles.listIcon} aria-hidden />
                <span>Basé à Toulouse, dispo partout en visio</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`${styles.card} ${
            showCard2 ? styles.cardShow : styles.cardPre
          }`}
          style={cardDelay200}
        >
          <div className={styles.cardAnim}>
            <h3>Tarifs de base</h3>
            <ul>
              <li>
                <span style={{ color: '#34d399' }}>🟩</span> Site simple — dès 700 €
              </li>
              <li>
                <span style={{ color: '#fbbf24' }}>🟨</span> Site complet — dès 1200 €
              </li>
              <li>
                <span style={{ color: '#60a5fa' }}>🟦</span> SiteSEO local — dès 1800 €
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.fader}></div>
    </section>
  );
}
