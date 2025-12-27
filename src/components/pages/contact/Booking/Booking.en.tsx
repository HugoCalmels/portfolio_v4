'use client'

import CalEmbed from '@/components/CalEmbled'
import styles from './Booking.module.css'

export default function BookingEn() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>Choose a time slot</h2>
          <p className={styles.subtitle}>
            For a first discussion, book a phone call using the calendar below.
          </p>
        </header>

        <div className={styles.calWrapper}>
          <CalEmbed url="https://cal.com/hugo-calmels-t2fw2o/hugo-calmels" />
        </div>
      </div>
    </section>
  )
}
