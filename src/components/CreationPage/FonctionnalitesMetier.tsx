'use client'

import styles from './FonctionnalitesMetier.module.css'
import { useTranslations } from 'next-intl'
import {
  FaClipboardList,
  FaCalendarAlt,
  FaUserShield,
  FaFilePdf,
  FaCloudUploadAlt,
  FaCreditCard,
  FaEnvelope,
  FaMapMarkerAlt,
  FaExchangeAlt,
  FaChartBar,
  FaLock,
  FaTools,
  FaPuzzlePiece
} from 'react-icons/fa'

export default function FonctionnalitesMetier() {
  const t = useTranslations('features')

  const cards = [
    { icon: <FaClipboardList />, title: t('order.title'), text: t('order.text') },
    { icon: <FaCalendarAlt />, title: t('booking.title'), text: t('booking.text') },
    { icon: <FaUserShield />, title: t('client.title'), text: t('client.text') },
    { icon: <FaLock />, title: t('security.title'), text: t('security.text') },
    { icon: <FaCloudUploadAlt />, title: t('files.title'), text: t('files.text') },
    { icon: <FaCreditCard />, title: t('payment.title'), text: t('payment.text') },
    { icon: <FaExchangeAlt />, title: t('auth.title'), text: t('auth.text') },
    { icon: <FaChartBar />, title: t('stats.title'), text: t('stats.text') },
    { icon: <FaPuzzlePiece />, title: t('custom.title'), text: t('custom.text') },
  ]

  return (
    <section className={styles.section} id="fonctionnalites">
      <div className={styles.container}>
        <h2 className={styles.heading}>{t('title')}</h2>
        <p className={styles.lead}>{t('lead')}</p>

        <div className={styles.cards}>
          {cards.map((card, index) => (
            <Card key={index} icon={card.icon} title={card.title} text={card.text} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.icon}>{icon}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <p className={styles.cardText}>{text}</p>
    </div>
  )
}
