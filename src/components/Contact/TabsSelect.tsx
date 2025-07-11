'use client'
import React from 'react'
import styles from './TabsSelect.module.css'

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
  fontSizeClass?: string
}

export function TabsSelect({
  label,
  name,
  options,
  value,
  onChange,
  required = false,
  error = false,
  fontSizeClass = '',
}: TabsSelectProps) {
  if (!options || options.length === 0) return null

  return (
    <fieldset className={styles.tabsSelectFieldset}>
      <legend className={`${styles.formLabel} ${error ? styles.errorLabel : ''}`}>
        {label}
      </legend>
      <input type="hidden" name={name} value={value} required={required} />
      <div
        role="radiogroup"
        className={`${styles.tabsSelectContainer} ${fontSizeClass ? styles[fontSizeClass] : ''} ${
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