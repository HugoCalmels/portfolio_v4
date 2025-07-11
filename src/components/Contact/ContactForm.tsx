'use client'
import React, { useState } from 'react'
import styles from './ContactForm.module.css'

interface ContactFields {
  name: string
  email: string
  message: string
}

interface ContactFormProps {
  onSubmit: (fields: ContactFields) => void
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [fields, setFields] = useState<ContactFields>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const emailIsValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  function validate() {
    const newErrors: Record<string, boolean> = {}
    if (!fields.name.trim()) newErrors.name = true
    if (!emailIsValid(fields.email.trim())) newErrors.email = true
    if (!fields.message.trim()) newErrors.message = true
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (validate()) onSubmit(fields)
  }

  function handleChange(field: keyof ContactFields, value: string) {
    setFields((f) => ({ ...f, [field]: value }))
    setErrors((e) => ({ ...e, [field]: false }))
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label className={`${styles.formLabel} ${errors.name ? styles.errorLabel : ''}`}>
        Votre nom
        <input
          className={`${styles.formInput} ${errors.name ? styles.errorInput : ''}`}
          type="text"
          required
          placeholder="Votre nom"
          value={fields.name}
          onChange={(e) => handleChange('name', e.target.value)}
          name="name"
        />
      </label>

      <label className={`${styles.formLabel} ${errors.email ? styles.errorLabel : ''}`}>
        Votre email
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

      <label className={`${styles.formLabel} ${errors.message ? styles.errorLabel : ''}`}>
        Message
        <textarea
          className={`${styles.formInput} ${errors.message ? styles.errorInput : ''}`}
          rows={5}
          required
          placeholder="Votre message"
          value={fields.message}
          onChange={(e) => handleChange('message', e.target.value)}
          name="message"
        />
      </label>

      <button type="submit" className={styles.cta}>
        Envoyer le message
      </button>
    </form>
  )
}
