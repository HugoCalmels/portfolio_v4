'use client'

import {useLocale} from 'next-intl'
import ContactSectionFr from './ContactSection.fr'
import ContactSectionEn from './ContactSection.en'

export default function ContactSection() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <ContactSectionEn /> : <ContactSectionFr />
}
