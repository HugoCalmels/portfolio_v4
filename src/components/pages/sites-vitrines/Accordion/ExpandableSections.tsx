'use client'

import {useLocale} from 'next-intl'
import ExpandableSectionsFr from './ExpandableSections.fr'
import ExpandableSectionsEn from './ExpandableSections.en'

export default function ExpandableSections() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <ExpandableSectionsEn /> : <ExpandableSectionsFr />
}
