'use client'

import styles from './Tarifs.module.css'
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Icônes variées et adaptées
import { FiTool } from 'react-icons/fi'
import { 
  FiGlobe, FiServer, FiDatabase
} from 'react-icons/fi'
import {  FaSearchDollar } from 'react-icons/fa'
import { HiOutlineShieldCheck} from 'react-icons/hi'
import { MdAutoGraph, MdOutlineDesignServices } from 'react-icons/md'
import FadeIn from '@/components/common/FadeIn'
import SeoHead from '@/components/common/SeoHead'

export default function FraisRecurrents() {
  const params = useParams()
  const locale = params?.locale || 'fr'

  return (
    <>
          <SeoHead
        title="Maintenance & frais récurrents – Hébergement, mises à jour, support"
        description="Coûts détaillés : hébergement, maintenance, sécurité, mises à jour et accompagnement. Formules simples et transparentes."
      />
    <section className={styles.page}>
      <div className={styles.container}>
        {/* Intro */}
        <FadeIn>
        <div className={styles.introWrapper}>
          <p className={styles.kicker}>Frais récurrents d’un site web</p>
          <h1 className={styles.heading}>Anticipez votre budget annuel et mensuel</h1>
<p className={styles.intro}>
  Découvrez combien votre site peut coûter <strong>chaque mois</strong> ou <strong>chaque année</strong> pour l’hébergement, la maintenance et le suivi SEO. Préparez votre budget sans surprises et choisissez les options adaptées à vos besoins.
</p>


                     <p className={styles.returnLink}>
                <Link href={`/${locale}/`}>Voir mes offres de création de sites web→</Link>
              </p>
        </div>
        </FadeIn>
        
               <FadeIn>
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
          </div>
        </div>
        </FadeIn>
        
            <FadeIn>
        {/* Bases de données */}
        <div className={styles.block}>
          <h2 className={styles.subheading}>
            <FiDatabase className={styles.icon} /> Bases de données
          </h2>
          <div className={styles.grid}>
            <div className={styles.miniCard}>
              <h3>
                <FiServer className={styles.icon} /> BDD partagée
              </h3>
              <p className={styles.miniDesc}>
                Pour les projets simples avec besoin léger de stockage dynamique
                (ex: suivi client simple). Hébergement partagé optimisé.<br />
                → Sauvegardes incluses
              </p>
              <div className={styles.price}>À partir de 150 €/an</div>
            </div>

            <div className={styles.miniCard}>
              <h3>
                <FiDatabase className={styles.icon} /> BDD dédiée
              </h3>
              <p className={styles.miniDesc}>
                Pour les projets plus complexes avec besoin de performance et isolation
                (ex: boutique en ligne, espace client complet).<br />
                → Sauvegardes incluses
              </p>
              <div className={styles.price}>À partir de 300 €/an</div>
            </div>
                      <p className={styles.note}>
            <strong>→ 90&nbsp;% des sites vitrines</strong> n’ont pas besoin de base de données.
            Elle n’est utile que si vous souhaitez un espace client,
            une boutique en ligne ou des fonctionnalités dynamiques avancées.
          </p>
          </div>
        </div>
        </FadeIn>
        
        <FadeIn>

{/* SEO évolutif */}
<div className={styles.block}>
  <h2 className={styles.subheading}>
    <FaSearchDollar className={styles.icon} /> SEO évolutif
  </h2>
  <div className={styles.grid}>
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
        </FadeIn>
        
          <FadeIn>
{/* Modifications & Maintenance */}
<div className={styles.block}>
  <h2 className={styles.subheading}>
    <MdOutlineDesignServices className={styles.icon} /> Modifications & Maintenance
  </h2>
  <div className={styles.grid}>
    <div className={styles.miniCard}>
      <h3>
        <FiTool className={styles.icon} /> À la demande
      </h3>
      <p className={styles.miniDesc}>
        Pour modifier du contenu ou gérer un bug/souci technique, j’interviens à l’heure. Idéal pour rester autonome, sans frais annuels.

      </p>
      <div className={styles.price}>50 €/h</div>
    </div>
  </div>
</div>
        </FadeIn>
         <FadeIn>
        {/* CTA finale */}
        <div className={styles.finalCta}>
          <p className={styles.finalText}>
            Vous avez un projet ou une demande particulière&nbsp;?
          </p>
          <Link href={`/${locale}/contact`} className={styles.finalButton}>
            Discutons ensemble →
          </Link>
          </div>
                </FadeIn>
      </div>
      </section>
      </>
  )
}
