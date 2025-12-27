'use client'

import CalEmbed from '@/components/CalEmbled'
import styles from './ContactSection.module.css'
import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import CustomLink from '@/components/ui/CustomLink'
import {useLocale} from 'next-intl'

export default function ContactSectionEn() {
  const locale = useLocale() as 'fr' | 'en'

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.inner}>
        <HomeSectionTitle
          kicker="Contact"
          title="Let’s talk about your project."
          subtitle={
            <>
              Book a time slot for a first phone call. If that format isn’t ideal, you can also{' '}
              <CustomLink href={`/${locale}/contact`}>send me a message</CustomLink>.
            </>
          }
        />

        <div className={styles.calWrapper}>
          <CalEmbed url="https://cal.com/hugo-calmels-t2fw2o/hugo-calmels" />
        </div>
      </div>
    </section>
  )
}
