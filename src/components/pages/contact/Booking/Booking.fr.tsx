'use client'

import CalEmbed from '@/components/CalEmbled'
import styles from './Booking.module.css'

export default function BookingFr() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>Choisir un créneau</h2>
          <p className={styles.subtitle}>
            Pour un premier échange, réservez un créneau téléphonique ci-dessous.
          </p>
        </header>

        <div className={styles.calWrapper}>
          <CalEmbed url="https://cal.com/hugo-calmels-t2fw2o/hugo-calmels" />
        </div>
      </div>
    </section>
  )
}
