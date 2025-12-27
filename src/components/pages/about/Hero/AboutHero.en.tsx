'use client'

import Image from 'next/image'
import SecondaryHero from '@/components/ui/SecondaryHero'

export default function AboutHeroEn() {
  return (
    <SecondaryHero
      kicker="About"
      title={
        <>
          <span>A bit of</span>
          <span className="accent"> context.</span>
        </>
      }
      subtitle={<>A “bonus” page to give some context about my background and how I work.</>}
      visual={
        <Image
          src="/images/hero-about.png"
          alt=""
          width={800}
          height={600}
          priority
        />
      }
    />
  )
}
