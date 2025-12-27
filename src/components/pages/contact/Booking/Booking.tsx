'use client'

import {useLocale} from 'next-intl'
import BookingFr from './Booking.fr'
import BookingEn from './Booking.en'

export default function Booking() {
  const locale = useLocale() as 'fr' | 'en'
  return locale === 'en' ? <BookingEn /> : <BookingFr />
}
