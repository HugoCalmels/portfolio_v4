'use client'

import {useLocale} from 'next-intl'
import SitesVitrinesOffersFr from './SitesVitrinesOffers.fr'
import SitesVitrinesOffersEn from './SitesVitrinesOffers.en'

export default function SitesVitrinesOffers() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <SitesVitrinesOffersEn /> : <SitesVitrinesOffersFr />
}
