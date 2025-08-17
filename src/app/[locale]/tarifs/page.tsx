'use client'

import styles from './Tarifs.module.css'
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Icônes variées et adaptées
import { FiTool } from 'react-icons/fi'
import { MdHealthAndSafety } from 'react-icons/md'
import { 
  FiGlobe, FiServer, FiDatabase, FiFileText
} from 'react-icons/fi'
import { FaRocket, FaCogs, FaSearchDollar } from 'react-icons/fa'
import { HiOutlineShieldCheck, HiOutlineDocumentAdd } from 'react-icons/hi'
import { MdAutoGraph, MdOutlineDesignServices } from 'react-icons/md'

export default function Tarifs() {
  const params = useParams()
  const locale = params?.locale || 'fr'

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        {/* Intro */}
        <div className={styles.introWrapper}>
          <h1 className={styles.heading}>Tarifs récurrents & services techniques</h1>
          <p className={styles.intro}>
            Coûts annuels liés à l’hébergement, la maintenance et le suivi SEO.
          </p>

          <div className={styles.notice}>
            <p>
              Vous cherchez plutôt la création de votre site&nbsp;?{' '}
              <Link href={`/${locale}/offres-site-vitrine`}>
                Découvrez les offres de site vitrine →
              </Link>
            </p>
          </div>
        </div>

        {/* Hébergement & technique */}
        <div className={styles.block}>
          <h2 className={styles.subheading}>
            <HiOutlineShieldCheck className={styles.icon} /> Hébergement & gestion technique
          </h2>
          <div className={styles.grid}>
            <div className={styles.miniCard}>
              <h3>
                <FiGlobe className={styles.icon} /> Je m’occupe du domaine
              </h3>
              <p className={styles.miniDesc}>
                Je réserve le nom de domaine, je le configure, je le renouvelle.
                Vous n’avez rien à gérer.
              </p>
              <div className={styles.price}>À partir de 100 €/an</div>
            </div>

            <div className={styles.miniCard}>
              <h3>
                <FiServer className={styles.icon} /> Serveur partagé
              </h3>
              <p className={styles.miniDesc}>
                Pour les projets simples avec une fonction métier légère
                (formulaire, tableau de suivi…). Hébergement commun optimisé.<br />
                → Sauvegardes incluses
              </p>
              <div className={styles.price}>À partir de 150 €/an</div>
            </div>

            <div className={styles.miniCard}>
              <h3>
                <FiDatabase className={styles.icon} /> Serveur dédié
              </h3>
              <p className={styles.miniDesc}>
                Si le projet demande une base de données ou un backend,
                je fournis un serveur prêt à l’emploi.<br />
                → Sauvegardes incluses
              </p>
              <div className={styles.price}>À partir de 300 €/an</div>
            </div>
          </div>
        </div>

        {/* Modifications */}
        <div className={styles.block}>
          <h2 className={styles.subheading}>
            <MdOutlineDesignServices className={styles.icon} /> Modifications
          </h2>
          <div className={styles.grid}>
            <div className={styles.miniCard}>
              <h3>
                <FaCogs className={styles.icon} /> Forfait annuel
              </h3>
              <p className={styles.miniDesc}>
                1 à 2 heures de modifications par an, sans devis ni attente.
                Idéal pour rester autonome.
              </p>
              <div className={styles.price}>100 €/an</div>
            </div>

            <div className={styles.miniCard}>
              <h3>
                <FiFileText className={styles.icon} /> Sur devis
              </h3>
              <p className={styles.miniDesc}>
                Vous me décrivez ce qu’il faut changer.
                Je vous envoie un devis clair, et je facture au temps passé.
              </p>
              <div className={styles.price}>50 €/h</div>
            </div>

            <div className={styles.miniCard}>
              <h3>
                <HiOutlineDocumentAdd className={styles.icon} /> Interface admin
              </h3>
              <p className={styles.miniDesc}>
                Je mets en place un accès sécurisé pour modifier vos textes ou images.
                Code léger, sans frais externes.
              </p>
              <div className={styles.price}>À partir de 500 € TTC</div>
            </div>
          </div>
        </div>

        {/* SEO évolutif */}
        <div className={styles.block}>
          <h2 className={styles.subheading}>
            <FaSearchDollar className={styles.icon} /> SEO évolutif
          </h2>
          <div className={styles.grid}>
            <div className={styles.miniCard}>
              <h3>
                <FaRocket className={styles.icon} /> Nouvelles pages SEO
              </h3>
              <p className={styles.miniDesc}>
                Création de pages ciblées (mots-clés, zones, services)
                pour renforcer votre visibilité Google.
              </p>
              <div className={styles.price}>Sur devis</div>
            </div>

            <div className={styles.miniCard}>
              <h3>
                <MdAutoGraph className={styles.icon} /> Accompagnement mensuel
              </h3>
              <p className={styles.miniDesc}>
                Suivi SEO, ajustements réguliers, ajout de contenu stratégique.
                Vous progressez mois après mois.
              </p>
              <div className={styles.price}>À partir de 200 €/mois</div>
            </div>
          </div>
        </div>

        {/* Maintenance */}
<div className={styles.block}>
  <h2 className={styles.subheading}>
    <MdHealthAndSafety className={styles.icon} /> Maintenance
  </h2>
  <div className={styles.grid}>
    <div className={styles.miniCard}>
      <h3>
        <FiTool className={styles.icon} /> À la demande
      </h3>
      <p className={styles.miniDesc}>
        Un bug ou un souci technique rare ?
        J’interviens ponctuellement, facturé à l’heure.
        (Généralement inutile pour un site vitrine.)
      </p>
      <div className={styles.price}>50 €/h</div>
    </div>
  </div>
</div>


        {/* CTA finale */}
        <div className={styles.finalCta}>
          <p className={styles.finalText}>
            Vous avez un projet ou une demande particulière&nbsp;?
          </p>
          <Link href={`/${locale}/contact`} className={styles.finalButton}>
            Discutons ensemble →
          </Link>
        </div>
      </div>
    </section>
  )
}
