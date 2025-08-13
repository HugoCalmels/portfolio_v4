'use client'

import styles from './Solutions.module.css'
import {
  FaCalendarAlt,
  FaCreditCard,
  FaCloudUploadAlt,
  FaRegNewspaper,
  FaImage,
  FaEnvelopeOpenText,
  FaChartBar,
  FaFilePdf,
  FaExchangeAlt,
  FaUserShield,
  FaLock,
  FaWarehouse,
  FaNetworkWired,
  FaPuzzlePiece
} from 'react-icons/fa'
import { FiPackage } from 'react-icons/fi'
import { HiOutlineLightBulb } from 'react-icons/hi'
import Link from 'next/link'
import { useParams } from 'next/navigation'
export default function Solutions() {
    const params = useParams()
    const locale = params?.locale || 'fr'
  const modularFeatures = [
    {
      icon: <FaCalendarAlt />,
      title: 'Prise de rendez-vous',
      text: 'Créneaux, rappels automatiques, synchronisation agenda (Google, iCal…).',
      price: 'À partir de 500 € TTC'
    },
    {
      icon: <FaCreditCard />,
      title: 'Paiement en ligne',
      text: 'Paiement unique ou récurrent via Stripe, avec gestion des statuts et notifications.',
      price: 'Sur devis'
    },
    {
      icon: <FaCloudUploadAlt />,
      title: 'Gestion de fichiers',
      text: 'Upload, stockage sécurisé (cloud/local), tri, téléchargement. Compatible RGPD.',
      price: 'À partir de 500 € TTC'
    },
    {
      icon: <FaEnvelopeOpenText />,
      title: 'Emails & newsletters',
      text: 'Collecte d’emails, envois automatisés, intégration Mailchimp ou Brevo.',
      price: 'À partir de 600 € TTC'
    },
    {
      icon: <FaChartBar />,
      title: 'Statistiques personnalisées',
      text: 'Tableau de bord simple : visites, clics, formulaires, données clés selon votre logique métier.',
      price: 'À partir de 400 € TTC'
    },
    {
      icon: <FaFilePdf />,
      title: 'Exports PDF ou documents',
      text: 'Génération de devis, factures ou rapports à partir de vos données internes.',
      price: 'À partir de 500 € TTC'
    },
    {
      icon: <FaExchangeAlt />,
      title: 'Connexion à des services',
      text: 'Intégration d’APIs tierces (login Google, Zapier, CRM, etc.). Sur mesure.',
      price: 'Sur devis'
    },
    {
      icon: <FaRegNewspaper />,
      title: 'Blog ou actualités',
      text: 'Publication d’articles via une interface simple, pensée pour le SEO.',
      price: 'À partir de 400 € TTC'
    },
    {
      icon: <FaImage />,
      title: 'Galerie / portfolio',
      text: 'Présentation rapide et responsive de vos projets ou produits.',
      price: 'À partir de 400 € TTC'
    }
  ]

  return (
<section className={styles.page}>
  <div className={styles.container}>
    <h1 className={styles.heading}>Développement web sur mesure</h1>
    <p className={styles.intro}>
      J’aide les entreprises, indépendants et porteurs de projet à ajouter des fonctionnalités concrètes à leur
      site, ou à concevoir un outil web sur mesure adapté à leurs besoins métier.
      <br />
      Du module spécifique à l’application complète, je développe des solutions robustes, évolutives et
      maintenables.
    </p>

    {/* Section 1 - Modules fonctionnels */}
    <section className={styles.sectionBlock}>
      <h2 className={styles.subheading}>
        <FiPackage className={styles.iconAccent} /> Ajouter des modules métier à votre site
      </h2>

      <p className={styles.text}>
        Tous les sites que je conçois sont pensés pour évoluer : vous pouvez commencer simple, puis ajouter des
        fonctionnalités au fur et à mesure, selon vos besoins métier.
        <br />
        Ces ajouts prennent la forme de <strong>modules sur mesure</strong> — développés pour s’intégrer proprement
        à votre base existante, sans surcharge ni refonte.
        <br />
        Chaque module est indépendant, testé, et pensé pour garder une structure claire et maintenable.
      </p>

      <div className={styles.cards}>
        {modularFeatures.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            text={card.text}
            price={card.price}
          />
        ))}
      </div>
    </section>

    <section className={styles.sectionBlock}>
  <h2 className={styles.subheading}>
    <HiOutlineLightBulb className={styles.iconAccent} /> Logiciels & applications web métier
  </h2>

  <p className={styles.text}>
  Vous avez besoin d’un outil web qui va plus loin qu’un simple site :  
  <strong>&nbsp;connexion sécurisée, logique métier, interface claire</strong>, et une base technique robuste.  
  Ce type d’application permet de centraliser vos données, fluidifier vos opérations internes,  
  ou remplacer un outil trop rigide (Excel, no-code, SaaS hors de prix).
</p>

<ul className={styles.list}>
  <li>Portail client — rôles, permissions, tableaux dynamiques</li>
  <li>Connexion sécurisée — JWT, refresh token, cookies httpOnly</li>
  <li>Suivi personnalisé — produits, commandes, alertes</li>
  <li>Tableaux de bord — indicateurs, filtres</li>
</ul>

  <p className={styles.text}>
    Chaque projet démarre par un cadrage simple.  
    Vous m’expliquez votre besoin, je découpe une première version fonctionnelle, et je livre vite une base solide — sans surprises.
  </p>

  <p className={styles.text}>
    Pour un besoin bien défini, je travaille <strong>au forfait</strong> : périmètre clair, livrable prévu, tarif fixé.  
    Sur les projets plus ambitieux (plusieurs centaines d’heures), je passe <strong>au service</strong> :  
    objectif défini ensemble, développement par jalons, <strong>TJM entre 150 € et 250 € / jour</strong>.
  </p>

  <p className={styles.text}>
    Vous restez maître du rythme, du périmètre, et du budget — sans dépendance à une usine à gaz technique.
  </p>

  <div className={styles.finalCta}>
  <p className={styles.finalText}>
    Une idée, un besoin, ou juste envie de poser vos questions&nbsp;?
  </p>
  <Link href={`/${locale}/contact`} className={styles.finalButton}>
    Discutons ensemble →
  </Link>
</div>
</section>




  </div>
</section>

  )
}

function Card({
  icon,
  title,
  text,
  price
}: {
  icon: React.ReactNode
  title: string
  text: string
  price: string
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.icon}>{icon}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <p className={styles.cardText}>{text}</p>
      <div className={styles.cardPrice}>{price}</div>
    </div>
  )
}
