'use client'

import {useLocale} from 'next-intl'
import LogicielsWebDefinitionFr from './LogicielsWebDefinition.fr'
import LogicielsWebDefinitionEn from './LogicielsWebDefinition.en'

export default function LogicielsWebDefinition() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <LogicielsWebDefinitionEn /> : <LogicielsWebDefinitionFr />
}
