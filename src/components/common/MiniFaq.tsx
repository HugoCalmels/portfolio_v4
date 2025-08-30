'use client';

import { useState } from 'react';
import styles from './MiniFaq.module.css';
import { FaChevronDown } from 'react-icons/fa';
import FadeIn from '@/components/common/FadeIn';
import Script from 'next/script';

export default function MiniFaq() {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  // ❗ FAQ "SERP-first": prix, délais, évolutivité, modifications, WordPress
  const questions = [
    {
      question: 'Combien coûte la création d’un site internet à Toulouse ?',
      answer:
        'Un site vitrine démarre à 900 € TTC, un site e-commerce à 1900 € TTC, et un projet SEO local à 2200 € TTC. Le prix dépend surtout des fonctionnalités et du nombre de pages.',
    },
    {
      question: 'Quel est le délai pour créer un site vitrine ou e-commerce ?',
      answer:
        'Un site vitrine est généralement prêt en 2–3 semaines. Pour un e-commerce, comptez 4–6 semaines selon le catalogue et les intégrations.',
    },
    {
      question: 'Puis-je ajouter des fonctionnalités plus tard ?',
      answer:
        'Oui, chaque site est évolutif : réservation en ligne, espace client, formulaires avancés ou intégrations métier peuvent être ajoutés quand vous en avez besoin.',
    },
    {
      question: 'Que se passe-t-il si je veux modifier mon site après la livraison ?',
      answer:
        'Les petites modifications de contenu sont incluses gratuitement pendant 30 jours après la livraison. Passé ce délai, elles sont facturées au temps passé ou via un forfait clair.',
    },
    {
      question: 'Utilisez-vous WordPress ?',
      answer:
        'Non. Je développe sur-mesure avec des technologies modernes (React/Next.js, Spring) : plus rapide, plus sécurisé et taillé pour vos besoins.',
    },
  ];

  const toggle = (index: number) => setOpenIndex(index === openIndex ? null : index);

  // JSON-LD (FAQ rich results)
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };

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

        {/* Lien global vers la FAQ — optionnel */}
        {/*
        <FadeIn>
          <div className={styles.linkWrapper}>
            <Link href={`/${locale}/faq`} className={styles.link}>
              Voir toutes les questions
            </Link>
          </div>
        </FadeIn>
        */}

        <Script
          id="faq-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </div>
    </section>
  );
}
