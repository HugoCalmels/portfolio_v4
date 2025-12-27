'use client'

import {useLocale} from 'next-intl'
import SitesWebHeroFr from './SitesWebHero.fr'
import SitesWebHeroEn from './SitesWebHero.en'

export default function SitesWebHero() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <SitesWebHeroEn /> : <SitesWebHeroFr />
}
