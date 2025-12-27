'use client'

import SecondaryHero from '@/components/ui/SecondaryHero'
import Image from 'next/image'

export default function ContactHeroEn() {
  return (
    <SecondaryHero
      kicker="Contact"
      title={
        <>
          <span>Let’s talk about your project.</span>
          <span className="accent"> Message or call.</span>
        </>
      }
      subtitle={<>Send a message or book a time slot for a first phone call.</>}
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
