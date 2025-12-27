'use client'

import {useLocale} from 'next-intl'
import ContactFormFr from './ContactForm.fr'
import ContactFormEn from './ContactForm.en'


export default function ContactForm() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <ContactFormEn /> : <ContactFormFr />
}
