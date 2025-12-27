'use client'

import {useLocale} from 'next-intl'
import TechStackFr from './TechStack.fr'
import TechStackEn from './TechStack.en'

export default function TechStack() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <TechStackEn /> : <TechStackFr />
}
