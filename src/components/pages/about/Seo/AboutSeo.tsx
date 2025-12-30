'use client'

import {useLocale} from 'next-intl'
import AboutSeoFr from './AboutSeo.fr'
import AboutSeoEn from './AboutSeo.en'

export default function AboutSeo() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <AboutSeoEn /> : <AboutSeoFr />
}
