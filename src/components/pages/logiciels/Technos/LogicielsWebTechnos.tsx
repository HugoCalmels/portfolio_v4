'use client'

import {useLocale} from 'next-intl'
import LogicielsWebTechnosFr from './LogicielsWebTechnos.fr'
import LogicielsWebTechnosEn from './LogicielsWebTechnos.en'

export default function LogicielsWebTechnos() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <LogicielsWebTechnosEn /> : <LogicielsWebTechnosFr />
}
