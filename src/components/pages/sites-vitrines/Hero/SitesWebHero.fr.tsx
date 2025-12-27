'use client'

import SecondaryHero from '@/components/ui/SecondaryHero'
import Image from 'next/image'

export default function SitesWebHeroFr() {
  return (
    <SecondaryHero
      kicker="Sites web"
      title={
        <>
          <span>Un site web</span>
          <span className="accent"> clair, rapide, durable.</span>
        </>
      }
      subtitle={
        <>
          Réalisation et conception de sites web sur mesure&nbsp;: vitrines, landing pages et projets
          spécifiques.
          <br />
          Développés sans CMS, en React / Next.js.
        </>
      }
      visual={
        <Image
          src="/images/hero-vitrine.png"
          alt=""
          width={520}
          height={360}
          priority
          fetchPriority="high"
          sizes="(max-width: 640px) 100vw, 520px"
        />
      }
    />
  )
}
