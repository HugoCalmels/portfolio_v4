'use client'

import {useLocale} from 'next-intl'
import ServicesFr from './Services.fr'
import ServicesEn from './Services.en'

export default function Services() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <ServicesEn /> : <ServicesFr />
}
