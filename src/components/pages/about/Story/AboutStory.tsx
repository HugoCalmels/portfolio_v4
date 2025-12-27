'use client'

import {useLocale} from 'next-intl'
import AboutStoryFr from './AboutStory.fr'
import AboutStoryEn from './AboutStory.en'

export default function AboutStory() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <AboutStoryEn /> : <AboutStoryFr />
}
