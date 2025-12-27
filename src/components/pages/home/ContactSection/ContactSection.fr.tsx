'use client'

import CalEmbed from '@/components/CalEmbled'
import styles from './ContactSection.module.css'
import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import CustomLink from '@/components/ui/CustomLink'
import {useLocale} from 'next-intl'

export default function ContactSectionFr() {
  const locale = useLocale() as 'fr' | 'en'

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.inner}>
        <HomeSectionTitle
          kicker="Contact"
          title="Parlons de votre projet."
          subtitle={
            <>
              Réservez un créneau pour un premier échange par téléphone. Si ce format n’est pas
              idéal, il est aussi possible de{' '}
              <CustomLink href={`/${locale}/contact`}>m’envoyer un message</CustomLink>.
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
