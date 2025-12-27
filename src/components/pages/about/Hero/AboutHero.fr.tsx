'use client'

import Image from 'next/image'
import SecondaryHero from '@/components/ui/SecondaryHero'

export default function AboutHeroFr() {
  return (
    <SecondaryHero
      kicker="À propos"
      title={
        <>
          <span>Quelques éléments</span>
          <span className="accent"> de contexte.</span>
        </>
      }
      subtitle={<>Une page “bonus”, pour donner un peu de contexte sur mon parcours et ma pratique.</>}
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
