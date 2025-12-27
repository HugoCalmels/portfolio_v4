'use client'

import {useLocale} from 'next-intl'
import ContactHeroFr from './ContactHero.fr'
import ContactHeroEn from './ContactHero.en'

export default function ContactHero() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <ContactHeroEn /> : <ContactHeroFr />
}
