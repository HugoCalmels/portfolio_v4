'use client'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { TabsSelect } from './TabsSelect'
import styles from './ContactForm.module.css'

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
}

export default function QuoteForm({ budgetOptions, projectTypeOptions }: QuoteFormProps) {
  const t = useTranslations('quote')
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
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const API_URL = process.env.NEXT_PUBLIC_API_URL_PROD || 'http://localhost:8080/api'

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSuccess(false)
    if (!validate()) return
    setLoading(true)

    try {
      const response = await fetch(`${API_URL}/mail/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...fields,
          budget,
          projectType,
        }),
      })

      if (response.ok) {
        setFields({ lastName: '', firstName: '', email: '', phone: '', details: '' })
        setBudget('')
        setProjectType('')
        setSuccess(true)
      } else {
        console.error('Erreur serveur')
      }
    } catch (err) {
      console.error('Erreur réseau :', err)
    } finally {
      setLoading(false)
    }
  }

  function handleChange(field: keyof QuoteFields, value: string) {
    setFields((prev) => ({ ...prev, [field]: value }))
    setErrors((e) => ({ ...e, [field]: false }))
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label className={`${styles.formLabel} ${errors.lastName ? styles.errorLabel : ''}`}>
        {t('lastName')}
        <input
          className={`${styles.formInput} ${errors.lastName ? styles.errorInput : ''}`}
          type="text"
          value={fields.lastName}
          onChange={(e) => handleChange('lastName', e.target.value)}
          required
        />
      </label>

      <label className={`${styles.formLabel} ${errors.firstName ? styles.errorLabel : ''}`}>
        {t('firstName')}
        <input
          className={`${styles.formInput} ${errors.firstName ? styles.errorInput : ''}`}
          type="text"
          value={fields.firstName}
          onChange={(e) => handleChange('firstName', e.target.value)}
          required
        />
      </label>

      <label className={`${styles.formLabel} ${errors.email ? styles.errorLabel : ''}`}>
        {t('email')}
        <input
          className={`${styles.formInput} ${errors.email ? styles.errorInput : ''}`}
          type="email"
          value={fields.email}
          onChange={(e) => handleChange('email', e.target.value)}
          required
        />
      </label>

      <label className={styles.formLabel}>
        {t('phone')}
        <input
          className={styles.formInput}
          type="tel"
          value={fields.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
        />
      </label>

      <TabsSelect
        label={t('budget')}
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
        label={t('projectType')}
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
        {t('details')}
        <textarea
          className={`${styles.formInput} ${errors.details ? styles.errorInput : ''}`}
          rows={5}
          value={fields.details}
          onChange={(e) => handleChange('details', e.target.value)}
          required
        />
      </label>

      <button type="submit" className={styles.cta} disabled={loading}>
        {loading ? t('loading') : t('cta')}
      </button>

      {success && <p className={styles.successMessage}>{t('success')}</p>}
    </form>
  )
}
