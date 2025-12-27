'use client'

import {useLocale} from 'next-intl'
import IndexFr from './Index.fr'
import IndexEn from './Index.en'

export default function Index() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <IndexEn /> : <IndexFr />
}
