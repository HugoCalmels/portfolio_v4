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
  const [errorMessage, setErrorMessage] = useState('')

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
    setErrorMessage('')
    if (!validate()) return
    setLoading(true)

    try {
      const response = await fetch(`${API_URL}/mail/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, budget, projectType }),
      })

      if (response.ok) {
        setFields({ lastName: '', firstName: '', email: '', phone: '', details: '' })
        setBudget('')
        setProjectType('')
        setSuccess(true)
      } else if (response.status === 429) {
        setErrorMessage(t('errorTooManyRequests'))
      } else {
        setErrorMessage(t('errorServer'))
      }
    } catch {
      setErrorMessage(t('errorNetwork'))
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
      <div className={styles.row}>
  <label className={`${styles.formLabel} ${errors.lastName ? styles.errorLabel : ''}`}>
    {t('lastName')}
    <input
      className={`${styles.formInput} ${errors.lastName ? styles.errorInput : ''}`}
      type="text"
      name="lastName"
      autoComplete="family-name"
      placeholder={t('placeholders.lastName')}
      value={fields.lastName}
      onChange={(e) => handleChange('lastName', e.target.value)}
      required
      aria-invalid={!!errors.lastName}
    />
  </label>

  <label className={`${styles.formLabel} ${errors.firstName ? styles.errorLabel : ''}`}>
    {t('firstName')}
    <input
      className={`${styles.formInput} ${errors.firstName ? styles.errorInput : ''}`}
      type="text"
      name="firstName"
      autoComplete="given-name"
      placeholder={t('placeholders.firstName')}
      value={fields.firstName}
      onChange={(e) => handleChange('firstName', e.target.value)}
      required
      aria-invalid={!!errors.firstName}
    />
  </label>
</div>

      <label className={`${styles.formLabel} ${errors.email ? styles.errorLabel : ''}`}>
        {t('email')}
        <input
          className={`${styles.formInput} ${errors.email ? styles.errorInput : ''}`}
          type="email"
          name="email"
          autoComplete="email"
          placeholder={t('placeholders.email')}
          value={fields.email}
          onChange={(e) => handleChange('email', e.target.value)}
          required
          aria-invalid={!!errors.email}
        />
      </label>

      <label className={styles.formLabel}>
        {t('phone')}
        <input
          className={styles.formInput}
          type="tel"
          name="phone"
          autoComplete="tel"
          inputMode="tel"
          placeholder={t('placeholders.phone')}
          value={fields.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          aria-invalid={false}
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
          name="details"
          placeholder="Décrivez votre besoin (pages, objectifs, fonctionnalités)… Lien vers cahier des charges si vous en avez un."
          value={fields.details}
          onChange={(e) => handleChange('details', e.target.value)}
          required
          aria-invalid={!!errors.details}
        />
      </label>

      <button type="submit" className={styles.cta} disabled={loading}>
        {loading ? t('loading') : t('cta')}
      </button>

      {success && <p className={styles.successMessage}>{t('success')}</p>}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </form>
  )
}
