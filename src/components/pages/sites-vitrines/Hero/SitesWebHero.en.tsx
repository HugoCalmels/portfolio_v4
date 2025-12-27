'use client'

import SecondaryHero from '@/components/ui/SecondaryHero'
import Image from 'next/image'

export default function SitesWebHeroEn() {
  return (
    <SecondaryHero
      kicker="Websites"
      title={
        <>
          <span>A website</span>
          <span className="accent"> clear, fast, built to last.</span>
        </>
      }
      subtitle={
        <>
          Design and development of custom websites&nbsp;: brochure sites, landing pages, and specific
          projects.
          <br />
          Built without a CMS, in React / Next.js.
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
