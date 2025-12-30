'use client'

import {useLocale} from 'next-intl'
import AboutBusinessModelFr from './AboutBusinessModel.fr'
import AboutBusinessModelEn from './AboutBusinessModel.en'

export default function AboutBusinessModel() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <AboutBusinessModelEn /> : <AboutBusinessModelFr />
}
