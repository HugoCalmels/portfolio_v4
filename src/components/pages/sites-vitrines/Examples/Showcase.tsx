'use client';

import SectionSubtitle from '@/components/ui/SectionSubtitle';
import styles from './Showcase.module.css';

export default function SitesVitrinesShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionSubtitle>Derniers sites web réalisés</SectionSubtitle>

        <div className={styles.showcaseGrid}>
          <article className={styles.showcaseCard}>
            <div className={styles.showcaseThumb}>
              <span className={styles.showcaseTag}>Exemple</span>
            </div>
            <div className={styles.showcaseContent}>
              <h3 className={styles.showcaseTitle}>Indépendant / freelance</h3>
              <p className={styles.showcaseText}>
                Page d’accueil claire, présentation de l’activité, services, courte bio
                et bloc contact simple.
              </p>
            </div>
          </article>

          <article className={styles.showcaseCard}>
            <div className={styles.showcaseThumb}>
              <span className={styles.showcaseTag}>Exemple</span>
            </div>
            <div className={styles.showcaseContent}>
              <h3 className={styles.showcaseTitle}>Petite entreprise</h3>
              <p className={styles.showcaseText}>
                Mise en avant des services, présentation de l’équipe, avis clients
                et informations pratiques (horaires, zone d’intervention).
              </p>
            </div>
          </article>

          <article className={styles.showcaseCard}>
            <div className={styles.showcaseThumb}>
              <span className={styles.showcaseTag}>Exemple</span>
            </div>
            <div className={styles.showcaseContent}>
              <h3 className={styles.showcaseTitle}>Structure avec actualités</h3>
              <p className={styles.showcaseText}>
                Pages de présentation + section actualités ou événements, pour publier
                ponctuellement des infos importantes.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
