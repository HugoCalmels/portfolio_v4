'use client'

import styles from './Legal.module.css'

export default function ContactLegalEn() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Text */}
          <div className={styles.textBlock}>
            <h2 className={styles.title}>Legal notice & privacy</h2>

            <p className={styles.text}>Hugo Calmels — Sole trader.</p>

            <p className={styles.text}>
              Contact&nbsp;:{' '}
              <a href="mailto:calmels.hugo.pro@gmail.com" className={styles.link}>
                calmels.hugo.pro@gmail.com
              </a>
            </p>

            <p className={styles.text}>Publisher&nbsp;: Hugo Calmels.</p>

            <p className={styles.text}>Hosting&nbsp;: Hostinger.</p>

            <h3 className={styles.subTitle}>Privacy</h3>
            <p className={styles.text}>
              Information submitted through forms is used solely to respond to your request. It is
              neither sold nor shared with third parties.
            </p>
          </div>

          {/* Map */}
          <div className={styles.mapWrapper}>
            <iframe
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28288.902537036887!2d1.4272881242145745!3d43.609562965458984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4c040963ff33f6db%3A0x2acfdcf598daadad!2sHugo%20Calmels!5e0!3m2!1sfr!2sfr!4v1766691949706!5m2!1sfr!2sfr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
