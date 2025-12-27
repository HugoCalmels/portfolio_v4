'use client'

import {useLocale} from 'next-intl'
import LogicielsWebFeaturesFr from './LogicielsWebFeatures.fr'
import LogicielsWebFeaturesEn from './LogicielsWebFeatures.en'

export default function LogicielsWebFeatures() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <LogicielsWebFeaturesEn /> : <LogicielsWebFeaturesFr />
}
