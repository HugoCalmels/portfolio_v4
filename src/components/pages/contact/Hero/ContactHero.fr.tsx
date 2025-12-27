'use client'

import SecondaryHero from '@/components/ui/SecondaryHero'
import Image from 'next/image'

export default function ContactHeroFr() {
  return (
    <SecondaryHero
      kicker="Contact"
      title={
        <>
          <span>Parlons de votre projet.</span>
          <span className="accent"> Message ou appel.</span>
        </>
      }
      subtitle={<>Envoyez un message ou réservez un créneau pour un premier échange par téléphone.</>}
      visual={
        <Image
          src="/images/hero-contact.png"
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
