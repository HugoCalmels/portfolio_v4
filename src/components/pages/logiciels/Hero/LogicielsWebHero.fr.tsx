'use client'

import SecondaryHero from '@/components/ui/SecondaryHero'
import Image from 'next/image'

export default function LogicielsWebHeroFr() {
  return (
    <SecondaryHero
      kicker="Logiciels web"
      title={
        <>
          <span>Des outils web</span>
          <span className="accent"> adaptés à ce que vous faites.</span>
        </>
      }
      subtitle={
        <>
          Des logiciels accessibles depuis un navigateur, pour vous ou vos clients.
          <br />
          Pensés pour répondre à un besoin concret.
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
