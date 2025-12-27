'use client'

import {useLocale} from 'next-intl'
import AboutFreelanceFr from './AboutFreelance.fr'
import AboutFreelanceEn from './AboutFreelance.en'

export default function AboutFreelance() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <AboutFreelanceEn /> : <AboutFreelanceFr />
}
