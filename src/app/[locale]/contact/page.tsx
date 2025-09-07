'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { TabsSelect } from '@/components/pages/contact/TabsSelect';
import ContactForm from '@/components/pages/contact/ContactForm';
import QuoteForm from '@/components/pages/contact/QuoteForm';
import Geo from '@/components/pages/contact/Geo';
import FadeIn from '@/components/common/FadeIn';

import styles from './Contact.module.css';
import SeoHead from '@/components/common/SeoHead';

export default function ContactPage() {
  const [need, setNeed] = useState<'contact' | 'devis'>('contact');
  const t = useTranslations('contactPage');

  const needOptions = [
    { label: t('options.quote'), value: 'devis' },
    { label: t('options.contact'), value: 'contact' },
  ];

  const budgetOptions = [
    { label: t('budget.0'), value: '500-1000' },
    { label: t('budget.1'), value: '1000-3000' },
    { label: t('budget.2'), value: '3000+' },
    { label: t('budget.3'), value: 'unknown' },
  ];

  const projectTypeOptions = [
    { label: t('projectType.0'), value: 'site' },
    { label: t('projectType.1'), value: 'logiciel' },
    { label: t('projectType.2'), value: 'autre' },
  ];

  return (
    <>
       <SeoHead
        title="Contact & devis – Hugo Calmels, développeur web à Toulouse"
        description="Parlez-moi de votre projet : création de site ou développement web à Toulouse. Réponse rapide et devis gratuit."
      />
    <main className={styles.container}>
      <FadeIn>
        <header className={styles.intro}>
          <p className={styles.kicker}>Contact & devis</p>
          <h1 className={styles.h1}>Parlons de votre projet</h1>
          <p className={styles.lead}>
            Besoin d’un <strong>devis</strong> ou d’un <strong>premier échange</strong> pour cadrer votre idée&nbsp;?
            Choisissez l’option ci-dessous et décrivez votre besoin en quelques lignes.
            <br />
            Je prends connaissance de votre demande et vous contacte dès que possible.
          </p>
        </header>
      </FadeIn>

      <FadeIn>
        <div className={styles.wrapper}>
          <TabsSelect
            label={t('question')}
            name="need"
            options={needOptions}
            value={need}
            onChange={(value) => setNeed(value as 'contact' | 'devis')}
            required
            fontSizeClass="largeFont"
          />

          {need === 'contact' && <ContactForm />}

          {need === 'devis' && (
            <QuoteForm budgetOptions={budgetOptions} projectTypeOptions={projectTypeOptions} />
          )}
        </div>
      </FadeIn>

      <FadeIn>
        <Geo />
      </FadeIn>

      <FadeIn>
        <section className={styles.legal}>
          <h2>Mentions légales</h2>
          <p>Éditeur du site : Hugo Calmels — Auto-entrepreneur (SIRET 989 199 385), basé à Toulouse.</p>
          <p>Contact : calmels.hugo.pro@gmail.com</p>
          <p>Hébergeur : Hostinger (www.hostinger.fr)</p>
          <p>Directeur de la publication : Hugo Calmels.</p>

          <h2>Vie privée</h2>
          <p>
            Les données envoyées via les formulaires (nom, email, message) sont utilisées uniquement pour répondre à
            votre demande. Elles ne sont pas partagées à des tiers et sont conservées au maximum 12 mois. Vous pouvez
            demander leur suppression par email.
          </p>
        </section>
      </FadeIn>
      </main>
      </>
  );
}
