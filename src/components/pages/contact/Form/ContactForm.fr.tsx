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

export default function ContactFormFr() {
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

  console.log(API_URL);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof Fields, string>> = {}

    if (!fields.name.trim()) e.name = 'Nom requis.'
    if (!fields.email.trim()) e.email = 'E-mail requis.'
    else if (!isEmailValid(fields.email)) e.email = 'E-mail invalide.'
    if (!fields.message.trim()) e.message = 'Message requis.'

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
    if (errors.name) missing.push('Nom')
    if (errors.email) missing.push('E-mail')
    if (errors.message) missing.push('Message')
    if (missing.length === 0) return null
    return `Merci de compléter : ${missing.join(', ')}.`
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (loading || inFlightRef.current) return

    setFeedback(null)

    setTouched(prev => ({...prev, name: true, email: true, message: true}))

    if (!isFormValid) {
      setFeedback({type: 'error', text: requiredSummary() ?? 'Merci de compléter les champs requis.'})
      focusFirstInvalid()
      return
    }

    if (!API_URL) {
      setFeedback({
        type: 'error',
        text: 'API_URL manquante (NEXT_PUBLIC_API_URL / NEXT_PUBLIC_API_URL_PROD).',
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
      
      console.log(API_URL);
      const res = await fetch(`${API_URL}/api/mail`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
        signal: controller.signal,
      })

      if (res.ok) {
        setFeedback({type: 'success', text: '✅ Message envoyé avec succès !'})
        resetForm()
        return
      }

      if (res.status === 429) {
        setFeedback({type: 'error', text: 'Trop de requêtes. Réessayez dans quelques instants.'})
        return
      }

      const text = await res.text().catch(() => '')
      setFeedback({type: 'error', text: text?.trim() || 'Erreur serveur. Merci de réessayer plus tard.'})
    } catch (err: unknown) {
      if (isAbortError(err)) {
        setFeedback({
          type: 'info',
          text: '⏳ L’envoi prend plus de temps que prévu. Si vous ne recevez pas de réponse, réessayez dans quelques minutes.',
        })
      } else {
        setFeedback({type: 'error', text: 'Erreur réseau. Vérifiez votre connexion.'})
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
            <h2 className={styles.cardTitle}>Envoyer un message</h2>
            <p className={styles.cardIntro}>
              Pour une question, un début de projet ou une demande de devis. Quelques lignes suffisent pour
              commencer.
            </p>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="name">
                  Nom / structure <span className={styles.required}>*</span>
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
                  E-mail <span className={styles.required}>*</span>
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
                    Type de projet <span className={styles.optional}>(optionnel)</span>
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
                    <option value="">Sélectionner…</option>
                    <option value="vitrine">Site vitrine</option>
                    <option value="ecommerce">Site e-commerce</option>
                    <option value="logiciel">Logiciel / outil web</option>
                    <option value="autre">Autre / à préciser</option>
                  </select>
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="budget">
                    Budget approximatif <span className={styles.optional}>(optionnel)</span>
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
                    <option value="">Non défini</option>
                    <option value="200-500">200 – 500 €</option>
                    <option value="500-1000">500 – 1 000 €</option>
                    <option value="1000-3000">1 000 – 3 000 €</option>
                    <option value="3000-plus">3 000 € et plus</option>
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
                  placeholder="Décrivez simplement votre besoin, votre activité, et ce que vous attendez du site ou de l’outil."
                  value={fields.message}
                  onChange={e => setField('message', e.target.value)}
                  onBlur={() => markTouched('message')}
                  aria-invalid={touched.message && !!errors.message}
                  required
                  disabled={loading}
                />
              </div>

              <p className={styles.helpText}>
                Pas besoin d’un cahier des charges complet : quelques phrases sur le contexte, vos objectifs
                et le type de projet suffisent.
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
                {loading ? 'Envoi en cours…' : 'Envoyer le message'}
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
            <h2 className={styles.cardTitle}>Infos pratiques</h2>
            <ul className={styles.list}>
              <li>Basé à Toulouse, projets possibles partout en France.</li>
<li>Téléphone ou e-mail. Partage d’écran possible si besoin.</li>

              <li>Réponse en général sous 24–48&nbsp;h ouvrées.</li>
            </ul>

            <div className={styles.contactBlock}>
              <p className={styles.blockLabel}>Contact direct</p>
              <p className={styles.contactLine}>
                E-mail&nbsp;:{' '}
                <a href="mailto:calmels.hugo.pro@gmail.com" className={styles.link}>
                  calmels.hugo.pro@gmail.com
                </a>
              </p>
              <p className={styles.contactLine}>Téléphone&nbsp;: 07&nbsp;68&nbsp;10&nbsp;99&nbsp;80</p>
<p className={styles.smallNote}>
  Premier échange par appel téléphonique. Visio possible si besoin.
</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
