'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import styles from './Blog.module.css';
import FadeIn from '@/components/common/FadeIn';
import SeoHead from '@/components/common/SeoHead';

export default function BlogPage() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale ?? 'fr';

  return (
    <>
          <SeoHead
        title="Blog – Conseils web, SEO et création de site à Toulouse"
        description="Retours d’expérience d’un développeur freelance à Toulouse : prix de sites internet, SEO local, projets clients et bonnes pratiques pour un web utile."
      />
    <main className={styles.blog}>
      <div className={styles.container}>
        <FadeIn>
          <h1 className={styles.title}>Le blog</h1>
          <p className={styles.subtitle}>
            Conseils, retours d’expérience et réflexions sur le web utile.
            <br />
            Je partage ici mes retours de développeur freelance, mes projets et mes réflexions sur la création de
            sites qui ont un vrai impact.
          </p>
        </FadeIn>

        <FadeIn>
          <div className={styles.articles}>
            {/* --- NOUVEL ARTICLE : Coût d’un site à Toulouse en 2025 --- */}
            <div className={styles.card}>
              <div className={styles.thumbnail}>
                {/* TEMP: réutilisation d'une image existante. Remplace quand tu auras la bonne. */}
                <Image
                  src="/images/photo-blog-1.jpeg"
                  alt="Combien coûte un site internet à Toulouse en 2025 ? (illustration budget & Toulouse)"
                  fill
                  placeholder="blur"
                  blurDataURL="/images/photo-blog-1.jpeg"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <h2 className={styles.cardTitle}>
                Combien coûte un site internet à Toulouse en 2025&nbsp;?
              </h2>
              <p className={styles.date}>Août 2025</p>
              <p className={styles.description}>
                Fourchettes de prix réalistes pour Toulouse, ce qui fait varier un devis (contenus, fonctionnalités,
                design, SEO, intégrations, délais) et les coûts annuels à prévoir. Plus une checklist pour obtenir un
                chiffrage précis.
              </p>
              <Link
                href={`/${locale}/blog/combien-coute-site-internet-toulouse`}
                className={styles.readMore}
              >
                {"Lire l'article"}
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          {/* CTA */}
          <div className={styles.ctaSection}>
            <p className={styles.ctaPrompt}>
              Vous avez un projet de site internet à Toulouse&nbsp;?
            </p>
            <Link href="/contact" className={styles.cta}>
              Me contacter →
            </Link>
          </div>
        </FadeIn>

        {/* --- JSON-LD Schema.org --- */}
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: 'Combien coûte un site internet à Toulouse en 2025 ?',
            datePublished: '2025-08-28',
            author: { '@type': 'Person', name: 'Hugo Calmels' },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `/${locale}/blog/combien-coute-site-internet-toulouse`,
            },
            image: '/images/photo-blog-1.jpeg',
            description:
              "Fourchettes de prix pour Toulouse, facteurs clés d’un devis (contenus, fonctionnalités, design, SEO, intégrations), coûts annuels et checklist pour obtenir un chiffrage précis.",
          })}
        </script>
      </div>
      </main>
      </>
  );
}
