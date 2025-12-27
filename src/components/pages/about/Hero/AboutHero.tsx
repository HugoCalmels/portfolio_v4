'use client'

import {useLocale} from 'next-intl'
import AboutHeroFr from './AboutHero.fr'
import AboutHeroEn from './AboutHero.en'

export default function AboutHero() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <AboutHeroEn /> : <AboutHeroFr />
}
