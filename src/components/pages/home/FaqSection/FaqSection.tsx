'use client'

import {useLocale} from 'next-intl'
import FaqSectionFr from './FaqSection.fr'
import FaqSectionEn from './FaqSection.en'

export default function FaqSection() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <FaqSectionEn /> : <FaqSectionFr />
}
