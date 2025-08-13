'use client'

import { useState } from 'react'
import styles from './MiniFaq.module.css'
import { FaChevronDown } from 'react-icons/fa'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import FadeIn from '@/components/FadeIn'

export default function MiniFaq() {
  const [openIndex, setOpenIndex] = useState<null | number>(null)
  const params = useParams()
  const locale = params?.locale || 'fr'

  const questions = [
    {
      question: 'Un développeur web peut-il remplacer une agence ?',
      answer:
        'Oui. Je fais tout ce qu’une agence propose — maquettes, contenu, SEO, développement — mais sans intermédiaires. Moins de frais, plus de clarté, un seul interlocuteur du début à la fin.',
    },
    {
      question: 'Quelle différence entre un site vitrine et une application web ?',
      answer:
        'Un site vitrine présente votre activité. Une application web propose des fonctionnalités sur mesure : tableau de bord, interface client, outil métier…',
    },
    {
      question: 'Et si je veux modifier le site plus tard ?',
      answer:
        'Pas de souci. Vous pouvez me transmettre les changements à faire, ou je peux développer une interface simple pour que vous puissiez les gérer vous-même.',
    },
  ]

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <section className={styles.section} id="minifaq">
      <div className={styles.container}>
        <FadeIn>
          <h2 className={styles.heading}>Questions fréquentes</h2>
        </FadeIn>

        <div className={styles.items}>
          {questions.map((item, index) => (
            <FadeIn key={index}>
              <div className={styles.item}>
                <button className={styles.question} onClick={() => toggle(index)}>
                  <span>{item.question}</span>
                  <FaChevronDown
                    className={`${styles.icon} ${openIndex === index ? styles.rotate : ''}`}
                  />
                </button>
                <div
                  className={`${styles.answerWrapper} ${openIndex === index ? styles.open : ''}`}
                >
                  <div className={styles.answer}>{item.answer}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className={styles.linkWrapper}>
            <Link href={`/${locale}/faq`} className={styles.link}>
              Voir toutes les questions
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
