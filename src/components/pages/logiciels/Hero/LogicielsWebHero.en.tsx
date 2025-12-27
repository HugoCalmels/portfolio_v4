'use client'

import SecondaryHero from '@/components/ui/SecondaryHero'
import Image from 'next/image'

export default function LogicielsWebHeroEn() {
  return (
    <SecondaryHero
      kicker="Web software"
      title={
        <>
          <span>Web tools</span>
          <span className="accent"> tailored to what you do.</span>
        </>
      }
      subtitle={
        <>
          Software accessible directly from a browser, for you or your clients.
          <br />
          Designed to solve a concrete need.
        </>
      }
      visual={
        <Image
          src="/images/hero-logiciels2.png"
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
