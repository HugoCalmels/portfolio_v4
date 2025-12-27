'use client'

import {useLocale} from 'next-intl'
import HeroFr from './Hero.fr'
import HeroEn from './Hero.en'

export default function Hero() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <HeroEn /> : <HeroFr />
}
