'use client'
import React, { useState } from 'react'
import { TabsSelect } from './TabsSelect'
import styles from './ContactForm.module.css' // même style que ContactForm

interface QuoteFields {
  lastName: string
  firstName: string
  email: string
  phone: string
  details: string
}

interface QuoteFormProps {
  budgetOptions: { label: string; value: string }[]
  projectTypeOptions: { label: string; value: string }[]
  onSubmit: (fields: QuoteFields, budget: string, projectType: string) => void
}

export default function QuoteForm({ budgetOptions, projectTypeOptions, onSubmit }: QuoteFormProps) {
  const [fields, setFields] = useState<QuoteFields>({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    details: '',
  })
  const [budget, setBudget] = useState('')
  const [projectType, setProjectType] = useState('')
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const emailIsValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  function validate() {
    const newErrors: Record<string, boolean> = {}
    if (!fields.lastName.trim()) newErrors.lastName = true
    if (!fields.firstName.trim()) newErrors.firstName = true
    if (!emailIsValid(fields.email.trim())) newErrors.email = true
    if (!budget) newErrors.budget = true
    if (!projectType) newErrors.projectType = true
    if (!fields.details.trim()) newErrors.details = true
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (validate()) onSubmit(fields, budget, projectType)
  }

  function handleChange(field: keyof QuoteFields, value: string) {
    setFields((f) => ({ ...f, [field]: value }))
    setErrors((e) => ({ ...e, [field]: false }))
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label className={`${styles.formLabel} ${errors.lastName ? styles.errorLabel : ''}`}>
        Nom
        <input
          className={`${styles.formInput} ${errors.lastName ? styles.errorInput : ''}`}
          type="text"
          required
          placeholder="Votre nom"
          value={fields.lastName}
          onChange={(e) => handleChange('lastName', e.target.value)}
          name="lastName"
        />
      </label>

      <label className={`${styles.formLabel} ${errors.firstName ? styles.errorLabel : ''}`}>
        Prénom
        <input
          className={`${styles.formInput} ${errors.firstName ? styles.errorInput : ''}`}
          type="text"
          required
          placeholder="Votre prénom"
          value={fields.firstName}
          onChange={(e) => handleChange('firstName', e.target.value)}
          name="firstName"
        />
      </label>

      <label className={`${styles.formLabel} ${errors.email ? styles.errorLabel : ''}`}>
        Adresse email
        <input
          className={`${styles.formInput} ${errors.email ? styles.errorInput : ''}`}
          type="email"
          required
          placeholder="votre@email.com"
          value={fields.email}
          onChange={(e) => handleChange('email', e.target.value)}
          name="email"
        />
      </label>

      <label className={styles.formLabel}>
        Téléphone
        <input
          className={styles.formInput}
          type="tel"
          placeholder="Votre numéro de téléphone"
          value={fields.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          name="phone"
        />
      </label>

      <TabsSelect
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
        fontSizeClass="normalFont"
      />

      <TabsSelect
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
        fontSizeClass="normalFont"
      />

      <label className={`${styles.formLabel} ${errors.details ? styles.errorLabel : ''}`}>
        Expliquez votre besoin en quelques lignes
        <textarea
          className={`${styles.formInput} ${errors.details ? styles.errorInput : ''}`}
          rows={5}
          placeholder="Ex. : site vitrine pour ma société de conseil à Toulouse..."
          required
          value={fields.details}
          onChange={(e) => handleChange('details', e.target.value)}
          name="details"
        />
      </label>

      <button type="submit" className={styles.cta}>
        Demander un devis
      </button>
    </form>
  )
}
