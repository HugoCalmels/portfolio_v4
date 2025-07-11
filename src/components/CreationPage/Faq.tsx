'use client'

import { useState } from 'react'
import styles from './Faq.module.css'
import { FaChevronDown } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

export default function Faq() {
  const t = useTranslations('faq')
  const [openIndex, setOpenIndex] = useState<null | number>(null)

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  const faqsCount = Number(t('count'))

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <h2 className={styles.heading}>{t('title')}</h2>
        <div className={styles.items}>
          {[...Array(faqsCount)].map((_, index) => (
            <div key={index} className={styles.item}>
              <button className={styles.question} onClick={() => toggle(index)}>
                <span>{t(`items.${index}.question`)}</span>
                <FaChevronDown
                  className={`${styles.icon} ${openIndex === index ? styles.rotate : ''}`}
                />
              </button>
              <div className={`${styles.answerWrapper} ${openIndex === index ? styles.open : ''}`}>
                <div className={styles.answer}>
                  {t(`items.${index}.answer`)
                    .split('\n')
                    .map((line: string, i: number) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
