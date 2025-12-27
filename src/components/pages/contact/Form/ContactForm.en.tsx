'use client'

import {useMemo, useRef, useState} from 'react'
import styles from './Form.module.css'

type Fields = {
  name: string
  email: string
  projectType: string
  budget: string
  message: string
}

type Touched = Record<keyof Fields, boolean>

type FeedbackType = 'error' | 'success' | 'info'
type Feedback = {type: FeedbackType; text: string} | null

function isEmailValid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

function isAbortError(err: unknown): boolean {
  return (
    typeof err === 'object' &&
    err !== null &&
    'name' in err &&
    (err as {name?: unknown}).name === 'AbortError'
  )
}

export default function ContactFormEn() {
  const [fields, setFields] = useState<Fields>({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  })

  const [touched, setTouched] = useState<Touched>({
    name: false,
    email: false,
    projectType: false,
    budget: false,
    message: false,
  })

  const [feedback, setFeedback] = useState<Feedback>(null)
  const [loading, setLoading] = useState(false)
  const inFlightRef = useRef(false)

  // local: NEXT_PUBLIC_API_URL=http://localhost:4646
  // prod:  NEXT_PUBLIC_API_URL_PROD=https://ton-back
  const API_URL = process.env.NEXT_PUBLIC_API_URL ?? process.env.NEXT_PUBLIC_API_URL_PROD

  const errors = useMemo(() => {
    const e: Partial<Record<keyof Fields, string>> = {}

    if (!fields.name.trim()) e.name = 'Name is required.'
    if (!fields.email.trim()) e.email = 'Email is required.'
    else if (!isEmailValid(fields.email)) e.email = 'Invalid email.'
    if (!fields.message.trim()) e.message = 'Message is required.'

    return e
  }, [fields])

  const isFormValid = useMemo(() => Object.keys(errors).length === 0, [errors])

  function setField<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields(prev => ({...prev, [key]: value}))
    setFeedback(null)
  }

  function markTouched<K extends keyof Fields>(key: K) {
    setTouched(prev => ({...prev, [key]: true}))
  }

  function fieldClass(key: keyof Fields, base: string) {
    if (!touched[key]) return base
    const hasError = !!errors[key]
    return `${base} ${hasError ? styles.fieldInvalid : styles.fieldValid}`
  }

  function focusFirstInvalid() {
    const order: Array<keyof Fields> = ['name', 'email', 'message', 'projectType', 'budget']
    for (const k of order) {
      if (errors[k]) {
        const el = document.getElementById(k) as HTMLElement | null
        el?.focus()
        break
      }
    }
  }

  function resetForm() {
    setFields({name: '', email: '', projectType: '', budget: '', message: ''})
    setTouched({name: false, email: false, projectType: false, budget: false, message: false})
  }

  function requiredSummary() {
    const missing: string[] = []
    if (errors.name) missing.push('Name')
    if (errors.email) missing.push('Email')
    if (errors.message) missing.push('Message')
    if (missing.length === 0) return null
    return `Please fill in: ${missing.join(', ')}.`
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (loading || inFlightRef.current) return

    setFeedback(null)

    setTouched(prev => ({...prev, name: true, email: true, message: true}))

    if (!isFormValid) {
      setFeedback({type: 'error', text: requiredSummary() ?? 'Please fill in the required fields.'})
      focusFirstInvalid()
      return
    }

    if (!API_URL) {
      setFeedback({
        type: 'error',
        text: 'Missing API_URL (NEXT_PUBLIC_API_URL / NEXT_PUBLIC_API_URL_PROD).',
      })
      return
    }

    inFlightRef.current = true
    setLoading(true)

    const controller = new AbortController()
    const timeoutMs = 25000
    const t = window.setTimeout(() => controller.abort(), timeoutMs)

    try {
      const payload = {
        name: fields.name.trim(),
        email: fields.email.trim(),
        projectType: fields.projectType || '',
        budget: fields.budget || '',
        message: fields.message.trim(),
      }

      const res = await fetch(`${API_URL}/api/mail`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
        signal: controller.signal,
      })

      if (res.ok) {
        setFeedback({type: 'success', text: '✅ Message sent successfully!'})
        resetForm()
        return
      }

      if (res.status === 429) {
        setFeedback({type: 'error', text: 'Too many requests. Please try again in a moment.'})
        return
      }

      const text = await res.text().catch(() => '')
      setFeedback({type: 'error', text: text?.trim() || 'Server error. Please try again later.'})
    } catch (err: unknown) {
      if (isAbortError(err)) {
        setFeedback({
          type: 'info',
          text: '⏳ Sending is taking longer than expected. If you don’t get a reply, try again in a few minutes.',
        })
      } else {
        setFeedback({type: 'error', text: 'Network error. Please check your connection.'})
      }
    } finally {
      window.clearTimeout(t)
      inFlightRef.current = false
      setLoading(false)
    }
  }

  const feedbackClass =
    feedback?.type === 'success'
      ? styles.formSuccess
      : feedback?.type === 'info'
        ? styles.formInfo
        : styles.formError

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>Send a message</h2>
            <p className={styles.cardIntro}>
              For a question, a project idea, or a quote request. A few lines are enough to get started.
            </p>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="name">
                  Name / company <span className={styles.required}>*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  className={fieldClass('name', styles.input)}
                  type="text"
                  autoComplete="name"
                  value={fields.name}
                  onChange={e => setField('name', e.target.value)}
                  onBlur={() => markTouched('name')}
                  aria-invalid={touched.name && !!errors.name}
                  required
                  disabled={loading}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="email">
                  Email <span className={styles.required}>*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  className={fieldClass('email', styles.input)}
                  type="email"
                  autoComplete="email"
                  value={fields.email}
                  onChange={e => setField('email', e.target.value)}
                  onBlur={() => markTouched('email')}
                  aria-invalid={touched.email && !!errors.email}
                  required
                  disabled={loading}
                />
              </div>

              <div className={styles.inlineFields}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="projectType">
                    Project type <span className={styles.optional}>(optional)</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className={styles.select}
                    value={fields.projectType}
                    onChange={e => setField('projectType', e.target.value)}
                    onBlur={() => markTouched('projectType')}
                    disabled={loading}
                  >
                    <option value="">Select…</option>
                    <option value="vitrine">Brochure website</option>
                    <option value="ecommerce">E-commerce website</option>
                    <option value="logiciel">Web software / tool</option>
                    <option value="autre">Other / please specify</option>
                  </select>
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="budget">
                    Approximate budget <span className={styles.optional}>(optional)</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className={styles.select}
                    value={fields.budget}
                    onChange={e => setField('budget', e.target.value)}
                    onBlur={() => markTouched('budget')}
                    disabled={loading}
                  >
                    <option value="">Not defined</option>
                    <option value="200-500">€200 – €500</option>
                    <option value="500-1000">€500 – €1,000</option>
                    <option value="1000-3000">€1,000 – €3,000</option>
                    <option value="3000-plus">€3,000 and up</option>
                  </select>
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="message">
                  Message <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={fieldClass('message', styles.textarea)}
                  rows={6}
                  placeholder="Briefly describe your needs, your business, and what you expect from the website or tool."
                  value={fields.message}
                  onChange={e => setField('message', e.target.value)}
                  onBlur={() => markTouched('message')}
                  aria-invalid={touched.message && !!errors.message}
                  required
                  disabled={loading}
                />
              </div>

              <p className={styles.helpText}>
                No need for a full specification document: a few sentences about the context, your goals,
                and the type of project are enough.
              </p>

              <button
                type="submit"
                className={styles.submit}
                disabled={loading}
                aria-disabled={loading}
                aria-busy={loading}
                data-loading={loading ? 'true' : 'false'}
                style={loading ? {pointerEvents: 'none'} : undefined}
              >
                {loading ? 'Sending…' : 'Send message'}
              </button>

              {feedback && (
                <p
                  className={feedbackClass}
                  role={feedback.type === 'error' ? 'alert' : 'status'}
                  aria-live="polite"
                >
                  {feedback.text}
                </p>
              )}
            </form>
          </article>

          <article className={styles.sideCard}>
            <h2 className={styles.cardTitle}>Practical info</h2>
            <ul className={styles.list}>
      <li>Based in Toulouse, working with clients across France and worldwide.</li>

<li>Phone calls or email. Screen sharing available if needed.</li>

              <li>Reply usually within 24–48 business hours.</li>
            </ul>

            <div className={styles.contactBlock}>
              <p className={styles.blockLabel}>Direct contact</p>
              <p className={styles.contactLine}>
                Email&nbsp;:{' '}
                <a href="mailto:calmels.hugo.pro@gmail.com" className={styles.link}>
                  calmels.hugo.pro@gmail.com
                </a>
              </p>
              <p className={styles.contactLine}>Phone&nbsp;: +33 7&nbsp;68&nbsp;10&nbsp;99&nbsp;80</p>

<p className={styles.smallNote}>
  First discussion by phone. Video call available if needed.
</p>

            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
