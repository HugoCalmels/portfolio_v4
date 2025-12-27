'use client'

import {useLocale} from 'next-intl'
import AboutPersoFr from './AboutPerso.fr'
import AboutPersoEn from './AboutPerso.en'

export default function AboutPerso() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <AboutPersoEn /> : <AboutPersoFr />
}
