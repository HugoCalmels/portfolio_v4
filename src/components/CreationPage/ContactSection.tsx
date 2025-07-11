'use client'

import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import styles from './ContactSection.module.css'
import { useTranslations } from 'next-intl'

const ContactSection = () => {
  const t = useTranslations('contact')
  const params = useParams()
  const locale = params?.locale || 'fr' // adapte selon ta config

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>{t('title')}</h2>
        <p className={styles.description}>{t('description')}</p>
        <Link href={`/${locale}/contact`} className={styles.cta}>
          {t('cta')}
        </Link>
      </div>
    </section>
  )
}

export default ContactSection
