'use client'

import {useState} from 'react'
import styles from './ExpandableSections.module.css'
import DashList from '@/components/ui/DashList'

type Section = {
  id: string
  title: string
  content: React.ReactNode
}

export default function ExpandableSectionsFr() {
  const sections: Section[] = [
    {
      id: 'hosting',
      title: 'Hébergement & coûts',
      content: (
        <>
          <p className={styles.subText}>
            Les sites sont hébergés sur une infrastructure moderne et fiable.
            <br />
            L’hébergement de base est inclus et sans coût mensuel.
          </p>

          <ul className={styles.subList}>
            <li>
              <strong>Hébergement inclus</strong> (Netlify).
            </li>
            <li>
              <strong>Coût mensuel&nbsp;: 0&nbsp;€</strong> pour l’hébergement du site.
            </li>
            <li>
              <strong>Domaine au nom du client</strong>&nbsp;: accompagnement possible pour l’achat /
              configuration.
            </li>
          </ul>

          <p className={styles.note}>
            Le client paie uniquement son nom de domaine (environ 10 à 20&nbsp;€ / an). Aucun abonnement
            n’est requis pour le site.
          </p>
        </>
      ),
    },

    {
      id: 'content',
      title: 'Module — Modification de contenu',
      content: (
        <>
          <p className={styles.subText}>
            Par défaut, le site ne dispose pas d’interface d’édition. Les modifications peuvent être
            réalisées soit par mes soins, soit via un module d’édition autonome optionnel.
          </p>

          <h4 className={styles.subTitle}>Édition autonome (interface sur mesure)</h4>

          <p className={styles.subText}>
            Définition en amont des éléments modifiables (textes, images, blocs, prix, horaires…). Mise en
            place d’une page d’administration sécurisée, intégrée directement au site.
          </p>

          <ul className={styles.subList}>
            <li>
              <strong>10 éléments modifiables</strong> définis ensemble.
            </li>
            <li>Accès sécurisé.</li>
            <li>Maintenance et hébergement inclus.</li>
          </ul>

          <p className={styles.subPrice}>
            <strong>À partir de 350&nbsp;€</strong>
            &nbsp;<br />
            <strong>+10&nbsp;€/mois</strong>
          </p>

          <p className={styles.note}>
            Alternative&nbsp;: modifications réalisées à la demande — <strong>30&nbsp;€/h</strong> ou{' '}
            <strong>125&nbsp;€/jour</strong>.
          </p>
        </>
      ),
    },

    {
      id: 'marketing',
      title: 'Module — SEO & visibilité',
      content: (
        <>
          <p className={styles.subText}>
            Je suis moins expérimenté en SEO que sur la conception et le développement de sites web.
            <br />
            L’approche est donc volontairement simple, sans engagement long, avec un budget correspondant
            à <strong>une journée de travail par mois</strong>.
          </p>

          <ul className={styles.subList}>
            <li>Analyse de mots-clés simples et priorités atteignables.</li>
            <li>Optimisation des pages existantes (titres, contenus, structure légère).</li>
            <li>Création ou enrichissement ponctuel de contenus ciblés.</li>
            <li>Suivi via Search&nbsp;Console et ajustements continus.</li>
            <li>
              Activation ponctuelle d’autres leviers si pertinent (SEO local, tests Google Ads, réseaux
              sociaux simples, netlinking léger selon budget).
            </li>
          </ul>

          <p className={styles.note}>
            La priorité est d’abord un site clair, rapide et bien structuré. Le travail de visibilité vient
            ensuite, sur une base saine.
          </p>

          <p className={styles.price}>
            <strong>125&nbsp;€/mois</strong> — environ 1&nbsp;journée de travail
            <br />
            <span className={styles.note}>Point mensuel fourni (actions réalisées + pistes pour la suite).</span>
          </p>
        </>
      ),
    },

    {
      id: 'ecommerce',
      title: 'Module — E-commerce',
      content: (
        <>
          <p className={styles.subText}>
            Deux niveaux selon votre besoin&nbsp;: encaissement simple, ou boutique avec panier.
          </p>

          <div className={styles.subSection}>
            <h4 className={styles.subTitle}>Encaissement (1–5 offres)</h4>
            <ul className={styles.subList}>
              <li>Paiement Stripe et/ou PayPal.</li>
              <li>Page dédiée ou redirection sécurisée.</li>
              <li>Email de confirmation.</li>
            </ul>
            <p className={styles.subPrice}>
              <strong>À partir de 400&nbsp;€</strong>
              <br />
              <span>+ 10&nbsp;€ / mois</span>
            </p>
          </div>

          <div className={styles.subSection}>
            <h4 className={styles.subTitle}>Boutique (catalogue + panier)</h4>
            <ul className={styles.subList}>
              <li>Catalogue (environ 3 à 20 produits).</li>
              <li>Panier + paiement Stripe/PayPal.</li>
              <li>Email de confirmation de commande.</li>
              <li>Gestion des commandes via Stripe / PayPal.</li>
            </ul>

            <p className={styles.note}>
              Hors cas complexes (alimentaire, fiscalité avancée, logistique spécifique).
            </p>

            <p className={styles.subPrice}>
              <strong>À partir de 900&nbsp;€</strong>
              <br />
              <span>+ 20&nbsp;€ / mois</span>
            </p>
          </div>

          <p className={styles.note}>
            Fonctionnalités supplémentaires sur devis (gestion de stock, règles métier, options, filtres,
            variations, etc.).
          </p>
        </>
      ),
    },

    {
      id: 'services',
      title: 'Services à la carte',
      content: (
        <>
          <p className={styles.subText}>
            Prestations ponctuelles, facturées à l’acte. Pas d’abonnement, pas d’engagement.
          </p>

          <DashList>
            <li className={styles.serviceItem}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceLeft}>
                  <span className={styles.serviceTitle}>Google Search Console</span>
                  <span className={styles.serviceSep} aria-hidden="true">
                    {' '}
                    —{' '}
                  </span>
                  <span className={styles.serviceInlineText}>
                    Ajout du site, vérification du domaine, soumission du sitemap, accès transmis.
                  </span>
                </div>
                <span className={styles.servicePrice}>45&nbsp;€</span>
              </div>

              <p className={styles.serviceMuted}>
                Hors périmètre : problèmes DNS complexes, suivi ou optimisations SEO.
              </p>
            </li>

            <li className={styles.serviceItem}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceLeft}>
                  <span className={styles.serviceTitle}>Google Business Profile</span>
                  <span className={styles.serviceSep} aria-hidden="true">
                    {' '}
                    —{' '}
                  </span>
                  <span className={styles.serviceInlineText}>
                    Création ou optimisation de la fiche (adresse, horaires, lien vers le site).
                  </span>
                </div>
                <span className={styles.servicePrice}>60&nbsp;€</span>
              </div>

              <p className={styles.serviceMuted}>
                Hors périmètre : stratégie d’avis, gestion continue, publications régulières.
              </p>
            </li>

            <li className={styles.serviceItem}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceLeft}>
                  <span className={styles.serviceTitle}>Email pro (formulaire du site)</span>
                  <span className={styles.serviceSep} aria-hidden="true">
                    {' '}
                    —{' '}
                  </span>
                  <span className={styles.serviceInlineText}>
                    Adresse <strong className={styles.inlineStrong}>contact@votredomaine</strong> utilisée
                    comme expéditeur + config SMTP/DNS minimale.
                  </span>
                </div>
                <span className={styles.servicePrice}>60&nbsp;€</span>
              </div>

              <p className={styles.serviceMuted}>
                Hors périmètre : gestion de messagerie, redirections complexes, support long terme.
              </p>
            </li>

            <li className={styles.serviceItem}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceLeft}>
                  <span className={styles.serviceTitle}>Outil de réservation simple</span>
                  <span className={styles.serviceSep} aria-hidden="true">
                    {' '}
                    —{' '}
                  </span>
                  <span className={styles.serviceInlineText}>
                    Intégration Cal.com ou Calendly (page dédiée ou lien direct).
                  </span>
                </div>
                <span className={styles.servicePrice}>60&nbsp;€</span>
              </div>

              <p className={styles.serviceMuted}>Hors périmètre : règles complexes, paiement intégré.</p>
            </li>

            <li className={styles.serviceItem}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceLeft}>
                  <span className={styles.serviceTitle}>Carte Google Maps</span>
                  <span className={styles.serviceSep} aria-hidden="true">
                    {' '}
                    —{' '}
                  </span>
                  <span className={styles.serviceInlineText}>
                    Intégration responsive + lien vers l’itinéraire.
                  </span>
                </div>
                <span className={styles.servicePrice}>45&nbsp;€</span>
              </div>
            </li>

            <li className={styles.serviceItem}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceLeft}>
                  <span className={styles.serviceTitle}>Site bilingue (FR / EN)</span>
                  <span className={styles.serviceSep} aria-hidden="true">
                    {' '}
                    —{' '}
                  </span>
                  <span className={styles.serviceInlineText}>
                    Mise en place de la structure multilingue (routes, sélecteur de langue), intégration
                    des contenus traduits sur l’ensemble du site.
                  </span>
                </div>
                <span className={styles.servicePrice}>120&nbsp;€</span>
              </div>

              <p className={styles.serviceMuted}>
                Traductions fournies ou validées par le client. Autres langues sur devis.
              </p>
            </li>
          </DashList>

          <p className={styles.noteTight}>
            Si une prestation dépasse le périmètre prévu : devis ou temps passé (30 &nbsp;€/h).
          </p>
        </>
      ),
    },

{
  id: 'good-to-know',
  title: 'Bon à savoir',
  content: (
    <>
      <p className={styles.subText}>
        Les délais annoncés (2–5 jours pour une landing, 5–10 jours pour un site vitrine)
        s’appliquent quand le projet est déjà clair&nbsp;:
        activité définie, offre comprise, messages principaux identifiés,
        et idée précise de ce qui doit apparaître sur le site.
      </p>

      <p className={styles.subText}>
        Quand un projet démarre de zéro,
        il ne s’agit pas seulement de “faire un site”.
        Il faut aussi décider quoi dire,
        quoi mettre en avant,
        et comment organiser l’ensemble.
      </p>

      <p className={styles.subText}>
        À titre d’exemple,
        mon propre site s’est construit sur plusieurs semaines.
        Le temps n’a pas été consacré uniquement au développement,
        mais aussi à réfléchir à l’offre, aux messages et à la structure,
        avec plusieurs ajustements avant d’arriver à quelque chose de cohérent.
      </p>

      <p className={styles.note}>
        Ce travail fait partie de mon métier
        et peut être réalisé pour un projet client,
        mais il ne peut pas être compressé
        dans les délais courts indiqués ici.
      </p>
    </>
  ),
}


  ]

  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {sections.map(section => {
          const isOpen = openId === section.id

          return (
            <div key={section.id} className={styles.item}>
              <button
                type="button"
                className={styles.header}
                onClick={() => setOpenId(isOpen ? null : section.id)}
                aria-expanded={isOpen}
              >
                <span className={styles.title}>{section.title}</span>
                <span className={styles.icon} aria-hidden="true">
                  {isOpen ? '–' : '+'}
                </span>
              </button>

              {isOpen && (
                <div className={styles.panel}>
                  <div className={styles.content}>{section.content}</div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
