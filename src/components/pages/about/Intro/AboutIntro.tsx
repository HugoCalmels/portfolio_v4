'use client'

import { useLocale } from 'next-intl'
import AboutIntroFr from './AboutIntro.fr'
import AboutIntroEn from './AboutIntro.en'

export default function AboutIntro() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <AboutIntroEn /> : <AboutIntroFr />
}
