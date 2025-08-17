'use client'
import React, { useState } from 'react'
import styles from './ContactForm.module.css'

interface ContactFields {
  lastName: string
  firstName: string
  email: string
  message: string
}

export default function ContactForm() {
  const [fields, setFields] = useState<ContactFields>({
    lastName: '',
    firstName: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<keyof ContactFields, boolean>>({
    lastName: false,
    firstName: false,
    email: false,
    message: false,
  })
  const [success, setSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const API_URL = process.env.NEXT_PUBLIC_API_URL_PROD

  const emailIsValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  function validateField(field: keyof ContactFields, value: string): boolean {
    const v = value.trim()
    if (field === 'email') return emailIsValid(v)
    return v.length > 0
  }

  function validateAll(): boolean {
    const next: Record<keyof ContactFields, boolean> = {
      lastName: !validateField('lastName', fields.lastName),
      firstName: !validateField('firstName', fields.firstName),
      email: !validateField('email', fields.email),
      message: !validateField('message', fields.message),
    }
    setErrors(next)
    return !Object.values(next).some(Boolean)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSuccess(false)
    setErrorMsg('')

    if (!validateAll()) return
    setLoading(true)

    try {
      const response = await fetch(`${API_URL}/mail`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })

      if (response.ok) {
        setSuccess(true)
        setFields({ lastName: '', firstName: '', email: '', message: '' })
        setErrors({ lastName: false, firstName: false, email: false, message: false })
      } else if (response.status === 429) {
        setErrorMsg('Trop de requêtes. Réessayez dans quelques instants.')
      } else {
        setErrorMsg('Erreur serveur. Merci de réessayer plus tard.')
      }
    } catch {
      setErrorMsg('Erreur réseau. Vérifiez votre connexion.')
    } finally {
      setLoading(false)
    }
  }

  function handleChange(field: keyof ContactFields, value: string) {
    setFields((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: !validateField(field, value) }))
    setErrorMsg('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <label className={`${styles.formLabel} ${errors.lastName ? styles.errorLabel : ''}`}>
          Nom
          <input
            className={`${styles.formInput} ${errors.lastName ? styles.errorInput : ''}`}
            type="text"
            name="lastName"
            autoComplete="family-name"
            placeholder="Dupont"
            value={fields.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            required
            aria-invalid={!!errors.lastName}
          />
        </label>

        <label className={`${styles.formLabel} ${errors.firstName ? styles.errorLabel : ''}`}>
          Prénom
          <input
            className={`${styles.formInput} ${errors.firstName ? styles.errorInput : ''}`}
            type="text"
            name="firstName"
            autoComplete="given-name"
            placeholder="Jean"
            value={fields.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            required
            aria-invalid={!!errors.firstName}
          />
        </label>
      </div>

      <label className={`${styles.formLabel} ${errors.email ? styles.errorLabel : ''}`}>
        Email
        <input
          className={`${styles.formInput} ${errors.email ? styles.errorInput : ''}`}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="jean@exemple.com"
          value={fields.email}
          onChange={(e) => handleChange('email', e.target.value)}
          required
          aria-invalid={!!errors.email}
        />
      </label>

      <label className={`${styles.formLabel} ${errors.message ? styles.errorLabel : ''}`}>
        Message
        <textarea
          className={`${styles.formInput} ${errors.message ? styles.errorInput : ''}`}
          rows={5}
          name="message"
          placeholder="Parlez-moi de votre projet…"
          value={fields.message}
          onChange={(e) => handleChange('message', e.target.value)}
          required
          aria-invalid={!!errors.message}
        />
      </label>

      <button type="submit" className={styles.cta} disabled={loading}>
        {loading ? 'Envoi en cours…' : 'Envoyer le message'}
      </button>

      {success && <p className={styles.successMessage}>✅ Message envoyé avec succès !</p>}
      {errorMsg && <p className={styles.errorMessage}>{errorMsg}</p>}
    </form>
  )
}
