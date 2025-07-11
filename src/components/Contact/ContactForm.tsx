'use client'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import styles from './ContactForm.module.css'

interface ContactFields {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const t = useTranslations('contactForm')
  const [fields, setFields] = useState<ContactFields>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [success, setSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const API_URL = process.env.NEXT_PUBLIC_API_URL_PROD

  const emailIsValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  function validate() {
    const newErrors: Record<string, boolean> = {}
    if (!fields.name.trim()) newErrors.name = true
    if (!emailIsValid(fields.email.trim())) newErrors.email = true
    if (!fields.message.trim()) newErrors.message = true
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setSuccess(false)
    setErrorMsg('')
    setLoading(true)

    try {
      const response = await fetch(`${API_URL}/mail`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })

      if (response.ok) {
        setSuccess(true)
        setFields({ name: '', email: '', message: '' })
      } else if (response.status === 429) {
        setErrorMsg(t('errorTooManyRequests'))
      } else {
        setErrorMsg(t('errorServer'))
      }
    } catch {
      setErrorMsg(t('errorNetwork'))
    } finally {
      setLoading(false)
    }
  }

  function handleChange(field: keyof ContactFields, value: string) {
    setFields((f) => ({ ...f, [field]: value }))
    setErrors((e) => ({ ...e, [field]: false }))
    setErrorMsg('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label className={`${styles.formLabel} ${errors.name ? styles.errorLabel : ''}`}>
        {t('name')}
        <input
          className={`${styles.formInput} ${errors.name ? styles.errorInput : ''}`}
          type="text"
          required
          placeholder={t('namePlaceholder')}
          value={fields.name}
          onChange={(e) => handleChange('name', e.target.value)}
          name="name"
        />
      </label>

      <label className={`${styles.formLabel} ${errors.email ? styles.errorLabel : ''}`}>
        {t('email')}
        <input
          className={`${styles.formInput} ${errors.email ? styles.errorInput : ''}`}
          type="email"
          required
          placeholder={t('emailPlaceholder')}
          value={fields.email}
          onChange={(e) => handleChange('email', e.target.value)}
          name="email"
        />
      </label>

      <label className={`${styles.formLabel} ${errors.message ? styles.errorLabel : ''}`}>
        {t('message')}
        <textarea
          className={`${styles.formInput} ${errors.message ? styles.errorInput : ''}`}
          rows={5}
          required
          placeholder={t('messagePlaceholder')}
          value={fields.message}
          onChange={(e) => handleChange('message', e.target.value)}
          name="message"
        />
      </label>

      <button type="submit" className={styles.cta} disabled={loading}>
        {loading ? t('loading') : t('cta')}
      </button>

      {success && <p className={styles.successMessage}>{t('success')}</p>}
      {errorMsg && <p className={styles.errorMessage}>{errorMsg}</p>}
    </form>
  )
}
