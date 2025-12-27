'use client'

import {useLocale} from 'next-intl'
import SitesVitrinesTechnosFr from './SitesVitrinesTechnos.fr'
import SitesVitrinesTechnosEn from './SitesVitrinesTechnos.en'

export default function SitesVitrinesTechnos() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <SitesVitrinesTechnosEn /> : <SitesVitrinesTechnosFr />
}
