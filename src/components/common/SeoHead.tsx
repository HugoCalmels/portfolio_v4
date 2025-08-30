'use client'

import Head from 'next/head'
import { usePathname } from 'next/navigation'

export type SeoMeta = {
  title: string
  description: string
  image?: string           // pour Open Graph (LinkedIn, etc.)
  noIndex?: boolean        // exclure certaines pages (404, merci…)
  localBusiness?: boolean  // activer données locales (SEO local)
}

const DOMAIN = 'https://hugo-calmels.fr'

export default function SeoHead({
  title,
  description,
  image,
  noIndex = false,
  localBusiness = false,
}: SeoMeta) {
  const pathname = usePathname() || '/'
  const canonicalUrl =
    pathname === '/' ? DOMAIN : `${DOMAIN}${pathname.replace(/\/$/, '')}`

  return (
    <Head>
      {/* --- SEO de base --- */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="robots"
        content={noIndex ? 'noindex, nofollow, noarchive' : 'index, follow'}
      />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" href="/favicon.ico" />

      {/* --- Open Graph (LinkedIn, WhatsApp, Slack, FB…) --- */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      {image && <meta property="og:image" content={image} />}

      {/* --- JSON-LD LocalBusiness (optionnel) --- */}
      {localBusiness && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Hugo Calmels',
              url: DOMAIN,
              image:
                image ||
                `${DOMAIN}/images/developpeur-web-independant-toulouse.png`,
              description: description,
              address: {
                '@type': 'PostalAddress',
                streetAddress: '13 rue Pégot',
                postalCode: '31500',
                addressLocality: 'Toulouse',
                addressCountry: 'FR',
              },
              priceRange: '€€',
            }),
          }}
        />
      )}
    </Head>
  )
}
