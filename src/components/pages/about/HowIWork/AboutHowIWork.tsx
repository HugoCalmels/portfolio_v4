// app/[locale]/(site)/a-propos/_sections/HowIWork/AboutHowIWork.tsx
'use client'

import { useLocale } from 'next-intl'
import AboutHowIWorkFr from './AboutHowIWork.fr'
import AboutHowIWorkEn from './AboutHowIWork.en'

export default function AboutHowIWork() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <AboutHowIWorkEn /> : <AboutHowIWorkFr />
}
