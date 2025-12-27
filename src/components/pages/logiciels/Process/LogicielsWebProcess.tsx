'use client'

import {useLocale} from 'next-intl'
import LogicielsWebProcessFr from './LogicielsWebProcess.fr'
import LogicielsWebProcessEn from './LogicielsWebProcess.en'

export default function LogicielsWebProcess() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <LogicielsWebProcessEn /> : <LogicielsWebProcessFr />
}
