'use client'

import {useLocale} from 'next-intl'
import ContactLegalFr from './ContactLegal.fr'
import ContactLegalEn from './ContactLegal.en'

export default function ContactLegal() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <ContactLegalEn /> : <ContactLegalFr />
}
