'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import styles from './Blog.module.css'

export default function BlogPage() {
  const params = useParams()
  const locale = params?.locale || 'fr'

  return (
    <main className={styles.blog}>
      <div className={styles.container}>
        <h1 className={styles.title}>Le blog</h1>
        <p className={styles.subtitle}>
          Conseils, retours d’expérience et réflexions sur le web utile.
          <br />
          Je partage ici mes retours de développeur freelance, mes projets
          et mes réflexions sur la création de sites qui ont un vrai impact.
        </p>

        <div className={styles.articles}>
          {/* --- ARTICLE 1 : ESN --- */}
          <div className={styles.card}>
            <div className={styles.thumbnail}>
              <Image
                src="/images/blog/esn.avif"
                alt="Rejet des ESN en tant que développeur"
                fill
                placeholder="blur"
                blurDataURL="/images/blog/esn.avif"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <h2 className={styles.cardTitle}>L’industrie ne voulait pas de moi</h2>
            <p className={styles.date}>Juillet 2025</p>
            <p className={styles.description}>
              200 candidatures, 0 réponse.  
              5 % de clics sur mon portfolio… et aucune porte ouverte.  
              J’explique pourquoi le marché ignore des profils capables de livrer
              et pourquoi j’ai choisi de créer mes propres résultats.
            </p>
            <Link href={`/${locale}/blog/pourquoi-je-ne-travaille-pas-en-esn`} className={styles.readMore}>
              Lire l'article
            </Link>
          </div>

          {/* --- ARTICLE 2 : WordPress vs Codé --- */}
          <div className={styles.card}>
            <div className={styles.thumbnail}>
              <Image
                src="/images/blog/wpwp.avif"
                alt="WordPress ou site codé sur mesure"
                fill
                placeholder="blur"
                blurDataURL="/images/blog/wpwp.avif"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <h2 className={styles.cardTitle}>WordPress vs site codé</h2>
            <p className={styles.date}>Juillet 2025</p>
            <p className={styles.description}>
  WordPress s’accompagne souvent de frais cachés : maintenance, plugins, 
  performances moyennes. Un site codé sur mesure reste rapide, stable et 
  économique sur le long terme, tout en étant plus durable.
</p>
            <Link href={`/${locale}/blog/comparatif-wordpress-site-code`} className={styles.readMore}>
              Lire l'article
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaSection}>
          <p className={styles.ctaPrompt}>Vous avez un projet de site internet à Toulouse ?</p>
          <Link href="/contact" className={styles.btnAccent}>
            Me contacter →
          </Link>
        </div>

        {/* --- JSON-LD Schema.org --- */}
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "L’industrie ne voulait pas de moi",
            datePublished: "2025-07-01",
            author: { "@type": "Person", name: "Hugo Calmels" },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `/${locale}/blog/pourquoi-je-ne-travaille-pas-en-esn`
            },
            image: "/images/blog/esn.avif",
            description:
              "200 candidatures, 0 réponse. 5% d'ouvertures. J'explique pourquoi le marché ignore des profils capables de livrer."
          })}
        </script>

        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "WordPress vs site codé",
            datePublished: "2025-07-01",
            author: { "@type": "Person", name: "Hugo Calmels" },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `/${locale}/blog/comparatif-wordpress-site-code`
            },
            image: "/images/blog/wpwp.avif",
            description:
              "WordPress s’accompagne souvent de frais cachés : maintenance, plugins, performances moyennes. Un site codé sur mesure reste rapide, stable et économique sur le long terme, tout en étant plus durable."
          })}
        </script>
      </div>
    </main>
  )
}
