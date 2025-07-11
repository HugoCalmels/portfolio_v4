'use client'
import { useState, useEffect } from 'react'
import styles from './Contact.module.css'

interface TabOption {
  label: string
  value: string
}

interface TabsSelectProps {
  label: string
  name?: string
  options: TabOption[]
  value: string
  onChange: (value: string) => void
  required?: boolean
  error?: boolean
}

function TabsSelectBase({
  label,
  name,
  options,
  value,
  onChange,
  required = false,
  error = false,
  fontSizeClass,
}: TabsSelectProps & { fontSizeClass: string }) {
  return (
    <fieldset className={styles.tabsSelectFieldset}>
      <legend
        className={`${styles.formLabel} ${error ? styles.errorLabel : ''}`}
      >
        {label}
      </legend>
      <input type="hidden" name={name} value={value} required={required} />
      <div
        role="radiogroup"
        className={`${styles.tabsSelectContainer} ${styles[fontSizeClass]} ${
          error ? styles.errorInput : ''
        }`}
      >
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={value === opt.value}
            tabIndex={value === opt.value ? 0 : -1}
            className={`${styles.tabsSelectBtn} ${
              value === opt.value ? styles.tabsSelectBtnActive : ''
            }`}
            onClick={() => onChange(opt.value)}
            onKeyDown={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault()
                onChange(opt.value)
              }
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </fieldset>
  )
}

export function TabsSelect(props: TabsSelectProps) {
  return <TabsSelectBase {...props} fontSizeClass="largeFont" />
}

export function TabsSelect2(props: TabsSelectProps) {
  return <TabsSelectBase {...props} fontSizeClass="normalFont" />
}

export default function ContactPage() {
  const [need, setNeed] = useState('contact')
  const [budget, setBudget] = useState('')
  const [projectType, setProjectType] = useState('')

  // Form fields state
  const [contactFields, setContactFields] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [quoteFields, setQuoteFields] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    details: '',
  })

  // Validation errors state
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  // Options
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

  // Simple email regex
  const emailIsValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  // On form submit, check validations and highlight errors if any
  function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newErrors: Record<string, boolean> = {}

    if (!contactFields.name.trim()) newErrors.name = true
    if (!emailIsValid(contactFields.email.trim())) newErrors.email = true
    if (!contactFields.message.trim()) newErrors.message = true

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      alert('Message envoyé ! (simulate)')
      // Here you would actually submit the form
    }
  }

  function handleQuoteSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newErrors: Record<string, boolean> = {}

    if (!quoteFields.lastName.trim()) newErrors.lastName = true
    if (!quoteFields.firstName.trim()) newErrors.firstName = true
    if (!emailIsValid(quoteFields.email.trim())) newErrors.email = true
    // phone is optional, no error
    if (!budget) newErrors.budget = true
    if (!projectType) newErrors.projectType = true
    if (!quoteFields.details.trim()) newErrors.details = true

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      alert('Demande de devis envoyée ! (simulate)')
      // Actual submit logic here
    }
  }

  // Handlers to update fields and clear errors on change
  function updateContactField(field: keyof typeof contactFields, val: string) {
    setContactFields((f) => ({ ...f, [field]: val }))
    setErrors((e) => ({ ...e, [field]: false }))
  }

  function updateQuoteField(field: keyof typeof quoteFields, val: string) {
    setQuoteFields((f) => ({ ...f, [field]: val }))
    setErrors((e) => ({ ...e, [field]: false }))
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Contactez-moi</h1>

      <TabsSelect
        label="Quel est votre besoin ?"
        name="need"
        options={needOptions}
        value={need}
        onChange={(v) => {
          setNeed(v)
          setErrors({})
        }}
        required
        error={!!errors.need}
      />

      {need === 'contact' && (
        <form
          className={styles.form}
          name="contact-message"
          noValidate
          onSubmit={handleContactSubmit}
        >
          <label
            className={`${styles.formLabel} ${
              errors.name ? styles.errorLabel : ''
            }`}
          >
            Votre nom
            <input
              className={`${styles.formInput} ${
                errors.name ? styles.errorInput : ''
              }`}
              type="text"
              name="name"
              required
              placeholder="Votre nom"
              value={contactFields.name}
              onChange={(e) => updateContactField('name', e.target.value)}
            />
          </label>

          <label
            className={`${styles.formLabel} ${
              errors.email ? styles.errorLabel : ''
            }`}
          >
            Votre email
            <input
              className={`${styles.formInput} ${
                errors.email ? styles.errorInput : ''
              }`}
              type="email"
              name="email"
              required
              placeholder="votre@email.com"
              value={contactFields.email}
              onChange={(e) => updateContactField('email', e.target.value)}
            />
          </label>

          <label
            className={`${styles.formLabel} ${
              errors.message ? styles.errorLabel : ''
            }`}
          >
            Message
            <textarea
              className={`${styles.formInput} ${
                errors.message ? styles.errorInput : ''
              }`}
              name="message"
              rows={5}
              required
              placeholder="Votre message"
              value={contactFields.message}
              onChange={(e) => updateContactField('message', e.target.value)}
            />
          </label>

          <button type="submit" className={styles.cta}>
            Envoyer le message
          </button>
        </form>
      )}

      {need === 'devis' && (
        <form
          className={styles.form}
          name="contact-quote"
          noValidate
          onSubmit={handleQuoteSubmit}
        >
          <label
            className={`${styles.formLabel} ${
              errors.lastName ? styles.errorLabel : ''
            }`}
          >
            Nom
            <input
              className={`${styles.formInput} ${
                errors.lastName ? styles.errorInput : ''
              }`}
              type="text"
              name="lastName"
              required
              placeholder="Votre nom"
              value={quoteFields.lastName}
              onChange={(e) => updateQuoteField('lastName', e.target.value)}
            />
          </label>

          <label
            className={`${styles.formLabel} ${
              errors.firstName ? styles.errorLabel : ''
            }`}
          >
            Prénom
            <input
              className={`${styles.formInput} ${
                errors.firstName ? styles.errorInput : ''
              }`}
              type="text"
              name="firstName"
              required
              placeholder="Votre prénom"
              value={quoteFields.firstName}
              onChange={(e) => updateQuoteField('firstName', e.target.value)}
            />
          </label>

          <label
            className={`${styles.formLabel} ${
              errors.email ? styles.errorLabel : ''
            }`}
          >
            Adresse email
            <input
              className={`${styles.formInput} ${
                errors.email ? styles.errorInput : ''
              }`}
              type="email"
              name="email"
              required
              placeholder="votre@email.com"
              value={quoteFields.email}
              onChange={(e) => updateQuoteField('email', e.target.value)}
            />
          </label>

          <label className={styles.formLabel}>
            Téléphone
            <input
              className={styles.formInput}
              type="tel"
              name="phone"
              placeholder="Votre numéro de téléphone"
              value={quoteFields.phone}
              onChange={(e) => updateQuoteField('phone', e.target.value)}
            />
          </label>

          <TabsSelect2
            label="Budget indicatif"
            name="budget"
            options={budgetOptions}
            value={budget}
            onChange={(v) => {
              setBudget(v)
              setErrors((e) => ({ ...e, budget: false }))
            }}
            required
            error={!!errors.budget}
          />

          <TabsSelect2
            label="Quel type de projet ?"
            name="projectType"
            options={projectTypeOptions}
            value={projectType}
            onChange={(v) => {
              setProjectType(v)
              setErrors((e) => ({ ...e, projectType: false }))
            }}
            required
            error={!!errors.projectType}
          />

          <label
            className={`${styles.formLabel} ${
              errors.details ? styles.errorLabel : ''
            }`}
          >
            Expliquez votre besoin en quelques lignes
            <textarea
              className={`${styles.formInput} ${
                errors.details ? styles.errorInput : ''
              }`}
              name="details"
              rows={5}
              placeholder="Ex. : site vitrine pour ma société de conseil à Toulouse..."
              required
              value={quoteFields.details}
              onChange={(e) => updateQuoteField('details', e.target.value)}
            />
          </label>

          <button type="submit" className={styles.cta}>
            Demander un devis
          </button>
        </form>
      )}
    </main>
  )
}
