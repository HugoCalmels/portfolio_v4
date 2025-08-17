'use client'
import { useState } from 'react'
import styles from './Contact.module.css'
import { TabsSelect } from '@/components/Contact/TabsSelect'
import ContactForm from '@/components/Contact/ContactForm'
import QuoteForm from '@/components/Contact/QuoteForm'
import { useTranslations } from 'next-intl'

export default function ContactPage() {
  const [need, setNeed] = useState<'contact' | 'devis'>('contact')
  const t = useTranslations('contactPage')

  const needOptions = [
    { label: t('options.quote'), value: 'devis' },
    { label: t('options.contact'), value: 'contact' },
  ]

  const budgetOptions = [
    { label: t('budget.0'), value: '500-1000' },
    { label: t('budget.1'), value: '1000-3000' },
    { label: t('budget.2'), value: '3000+' },
    { label: t('budget.3'), value: 'unknown' },
  ]

  const projectTypeOptions = [
    { label: t('projectType.0'), value: 'site' },
    { label: t('projectType.1'), value: 'logiciel' },
    { label: t('projectType.2'), value: 'autre' },
  ]

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{t('title')}</h1>

      <TabsSelect
  label={t('question')}
  name="need"
  options={needOptions}
  value={need}
  onChange={(value) => setNeed(value as 'contact' | 'devis')}
  required
  fontSizeClass="largeFont"
/>

      {need === 'contact' && <ContactForm />}
      {need === 'devis' && (
        <QuoteForm
          budgetOptions={budgetOptions}
          projectTypeOptions={projectTypeOptions}
        />
      )}

<section className={styles.legal}>
    <h2>Mentions légales</h2>
    <p>Éditeur du site : Hugo Calmels — Auto-entrepreneur (SIRET 989 199 385 00018), basé à Toulouse.</p>
    <p>Contact : calmels.hugo.pro@gmail.com</p>
    <p>Hébergeur : Hostinger (www.hostinger.fr)</p>
    <p>Directeur de la publication : Hugo Calmels.</p>

    <h2>Vie privée</h2>
    <p>Les données envoyées via les formulaires (nom, email, message) sont utilisées uniquement pour répondre à votre demande. 
    Elles ne sont pas partagées à des tiers et sont conservées au maximum 12 mois. 
    Vous pouvez demander leur suppression par email.</p>
  </section>
    </main>
  )
}
