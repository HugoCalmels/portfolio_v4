'use client'

import {useLocale} from 'next-intl'
import LogicielsWebHeroFr from './LogicielsWebHero.fr'
import LogicielsWebHeroEn from './LogicielsWebHero.en'

export default function LogicielsWebHero() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <LogicielsWebHeroEn /> : <LogicielsWebHeroFr />
}
