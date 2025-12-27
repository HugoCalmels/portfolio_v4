'use client'

import {useLocale} from 'next-intl'
import HomeCraftFr from './HomeCraft.fr'
import HomeCraftEn from './HomeCraft.en'

export default function HomeCraft() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <HomeCraftEn /> : <HomeCraftFr />
}
