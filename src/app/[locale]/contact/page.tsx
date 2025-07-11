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
    </main>
  )
}
