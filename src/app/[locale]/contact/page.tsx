'use client'
import { useState } from 'react'
import styles from './Contact.module.css'
import { TabsSelect } from '@/components/Contact/TabsSelect'
import ContactForm from '@/components/Contact/ContactForm'
import QuoteForm from '@/components/Contact/QuoteForm'



export default function ContactPage() {
  const [need, setNeed] = useState('contact')

  const needOptions = [
    { label: 'Demande de devis', value: 'devis' },
    { label: 'Contact / Question générale', value: 'contact' },
  ]

  const budgetOptions = [
    { label: '500 € - 1 000 €', value: '500-1000' },
    { label: '1 000 € - 3 000 €', value: '1000-3000' },
    { label: 'Plus de 3 000 €', value: '3000+' },
    { label: 'Je ne sais pas', value: 'unknown' },
  ]

  const projectTypeOptions = [
    { label: 'Création de site vitrine', value: 'site' },
    { label: 'Logiciel métier', value: 'logiciel' },
    { label: 'Autre', value: 'autre' },
  ]

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Contactez-moi</h1>

      <TabsSelect
        label="Quel est votre besoin ?"
        name="need"
        options={needOptions}
        value={need}
        onChange={setNeed}
        required
        fontSizeClass="largeFont"
      />

      {need === 'contact' && (
        <ContactForm onSubmit={(fields) => alert('Message envoyé !')} />
      )}

      {need === 'devis' && (
        <QuoteForm
          budgetOptions={budgetOptions}
          projectTypeOptions={projectTypeOptions}
          onSubmit={(fields, budget, projectType) =>
            alert('Demande de devis envoyée !')
          }
        />
      )}
    </main>
  )
}
