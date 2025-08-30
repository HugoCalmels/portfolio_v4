'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import FadeIn from '@/components/common/FadeIn';
import { IoChevronDown } from 'react-icons/io5';
import Stats from './Stats';

export default function Hero() {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    let tBoot: number | undefined;
    let t2: number | undefined;
    let t3: number | undefined;
    let t4: number | undefined;

    const start = () => {
      setShowTitle(true);                         // 0 ms
      t2 = window.setTimeout(() => setShowSubtitle(true), 400);
      t3 = window.setTimeout(() => setShowActions(true), 800);
      t4 = window.setTimeout(() => setShowStats(true), 1200); // 👈 stats en dernier
    };

    if (typeof document !== 'undefined' && document.documentElement.dataset.boot === 'done') {
      start();
    } else {
      const onBoot = () => {
        start();
        window.removeEventListener('boot:done', onBoot);
      };
      window.addEventListener('boot:done', onBoot, { once: true });
      tBoot = window.setTimeout(start, 1500); // fail-safe
    }

    return () => {
      if (tBoot) clearTimeout(tBoot);
      if (t2) clearTimeout(t2);
      if (t3) clearTimeout(t3);
      if (t4) clearTimeout(t4);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el instanceof HTMLElement) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src="/images/developpeur-web-independant-toulouse.png"
          alt="Création de site internet à Toulouse"
          fill
          placeholder="blur"
          blurDataURL="/images/testa42-small-blur.jpg"
          style={{ objectFit: 'cover', filter: 'brightness(1.05) blur(1.5px)' }}
          priority
        />
      </div>

      <div className={styles.inner}>
        {/* Title */}
        {showTitle && (
          <FadeIn>
            <h1 className={styles.title}>
              Développeur web indépendant
              <br />
              <span className={styles.accent}>à Toulouse</span>
            </h1>
          </FadeIn>
        )}

        {/* Subtitle */}
        {showSubtitle && (
          <FadeIn>
            <div className={styles.subtitle}>
              <p>
                Je conçois des <strong>sites internet modernes</strong> et développe des
                <strong> applications web sur-mesure</strong>, pour les professionnels, indépendants
                et petites entreprises, à Toulouse comme à distance.
              </p>
            </div>
          </FadeIn>
        )}

        {/* CTA */}
        {showActions && (
          <FadeIn>
            <div className={styles.actions}>
              <button
                className={styles.cta}
                onClick={() => scrollTo('#services')}
                aria-label="Aller à la section services"
              >
                Explorer mes services <IoChevronDown className={styles.chevronIcon} aria-hidden />
              </button>
            </div>
          </FadeIn>
        )}
      </div>

      {/* Fader décor si tu l’utilises encore */}
      <div className={styles.fader} />

      {/* Stats en dernier */}
      {showStats && (
      
          <div className={styles.statsWrap}>
                <FadeIn>
            <Stats />
            </FadeIn>
          </div>

      )}
    </section>
  );
}
