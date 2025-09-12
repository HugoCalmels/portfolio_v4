'use client';

import { useParams } from 'next/navigation';
import styles from './OffresSimples.module.css';
import FadeIn from '@/components/common/FadeIn';
import { FiCheckCircle, FiShield, FiTrendingUp, FiMail } from 'react-icons/fi';

export default function OffresSimples() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale ?? 'fr';

  return (
    <section className={styles.section} id="offres">
      <div className={styles.container}>
        {/* Intro */}
        <FadeIn>
          <header className={styles.intro}>
            <p className={styles.kicker}>Création de site internet Toulouse</p>
            <h1 className={styles.h1}>Les différents types de site internet</h1>
            <p className={styles.lead}>
              Besoin d’un site qui <strong>présente</strong>, <strong>vend</strong> ou{' '}
              <strong>vous rend visible</strong> à Toulouse&nbsp;?
            </p>
          </header>
        </FadeIn>

        {/* Cards */}
        <div className={styles.cards}>
          <FadeIn>
            <article className={styles.card}>
              <header>
                <h3 className={styles.cardTitle}>🟩 Site vitrine</h3>
                <p className={styles.cardText}>
                  Pour présenter clairement vos services et être contacté rapidement.
                </p>
              </header>

              <div className={styles.price}>À partir de 500 € TTC</div>

              <ul className={styles.bulletList}>
                <li>1 à 5 pages essentielles</li>
                <li>À votre image</li>
                <li>Livré sous 5 jours</li>
              </ul>

              <a href={`/${locale}/creation-site-internet-toulouse/site-vitrine`} className={styles.ctaMain}>
                Voir l’offre vitrine →
              </a>
            </article>
          </FadeIn>

          <FadeIn>
            <article className={styles.card}>
              <header>
                <h3 className={styles.cardTitle}>🟨 Site e-commerce</h3>
                <p className={styles.cardText}>
                  Pour encaisser en ligne et gérer simplement vos produits.
                </p>
              </header>

              <div className={styles.price}>À partir de 1200 € TTC</div>

              <ul className={styles.bulletList}>
                <li>Catalogue produits</li>
                <li>Paiement sécurisé (Stripe)</li>
                <li>Gestion simple du stock</li>
              </ul>

              <a href={`/${locale}/creation-site-internet-toulouse/site-e-commerce`} className={styles.ctaMain}>
                Voir l’offre e-commerce →
              </a>
            </article>
          </FadeIn>

          <FadeIn>
            <article className={styles.card}>
              <header>
                <h3 className={styles.cardTitle}>🟦 Site SEO local</h3>
                <p className={styles.cardText}>
                  Pour être trouvé sur Google quand on cherche votre activité à Toulouse.
                </p>
              </header>

              <div className={styles.price}>Sur devis</div>
<ul className={styles.bulletList}>
  <li>Pages ciblées mots-clés locaux</li>
  <li>Structure optimisée Google</li>
  <li>Conseils Google Business</li>
</ul>

              <a href={`/${locale}/creation-site-internet-toulouse/site-seo-local`} className={styles.ctaMain}>
                Voir l’offre SEO local →
              </a>
            </article>
          </FadeIn>
        </div>

        {/* Inclus / conclusion */}
        <FadeIn>
          <div className={styles.includedWrap}>
            <h3 className={styles.includedTitle}>Inclus dans chaque site</h3>
            <ul className={styles.includedInline} role="list">
              <li className={styles.incItem}>
                <FiCheckCircle className={styles.incIcon} aria-hidden />
                <span>Design responsive</span>
              </li>
              <li className={styles.incDivider} aria-hidden="true" />
              <li className={styles.incItem}>
                <FiShield className={styles.incIcon} aria-hidden />
                <span>HTTPS & sécurité</span>
              </li>
              <li className={styles.incDivider} aria-hidden="true" />
              <li className={styles.incItem}>
                <FiTrendingUp className={styles.incIcon} aria-hidden />
                <span>SEO de base</span>
              </li>
              <li className={styles.incDivider} aria-hidden="true" />
              <li className={styles.incItem}>
                <FiMail className={styles.incIcon} aria-hidden />
                <span>Formulaire contact</span>
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
