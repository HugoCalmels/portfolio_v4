'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import FadeIn from '@/components/common/FadeIn';
import styles from './CombienCoute.module.css';
import SeoHead from '@/components/common/SeoHead';

export default function CombienCouteSiteInternetToulouse() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale ?? 'fr';

  return (
    <>
          <SeoHead
        title="Combien coûte un site internet à Toulouse en 2025 ?"
        description="Prix réalistes des sites web à Toulouse en 2025 : vitrine, e-commerce, sur-mesure. Ce qui fait varier un devis et les coûts annuels à prévoir."
      />
    <main className={styles.article}>
      <section className={styles.container}>
        <FadeIn>
          <h1 className={styles.title}>
            Combien coûte un site internet à Toulouse en 2025&nbsp;?
          </h1>

          {/* Intro courte */}
          <p className={styles.paragraph}>
            Vous cherchez un prix clair, sans jargon. Voici des fourchettes réalistes pour
            Toulouse, ce qui fait varier un devis, et ce qu’il faut prévoir après la mise en
            ligne.
          </p>
        </FadeIn>

        <FadeIn>
          {/* 1) Estimation directe */}
          <h2 className={styles.subheading}>Estimation rapide</h2>
          <p className={styles.paragraph}>
            Les budgets dépendent du périmètre et du niveau d’accompagnement, mais on observe
            le plus souvent&nbsp;:
          </p>
          <ul className={styles.list}>
            <li>
              <strong>Site vitrine essentiel</strong> (1–3 pages clés, formulaire de
              contact)&nbsp;: <strong>800–1&nbsp;500&nbsp;€</strong>.
            </li>
            <li>
              <strong>Site vitrine complet</strong> (4–6 pages, portfolio/blog, textes
              travaillés)&nbsp;: <strong>1&nbsp;500–3&nbsp;000&nbsp;€</strong>.
            </li>
            <li>
              <strong>E-commerce</strong> (catalogue, paiement, gestion des
              commandes)&nbsp;: <strong>2&nbsp;500–6&nbsp;000&nbsp;€</strong> selon la
              complexité.
            </li>
            <li>
              <strong>Sur-mesure</strong> / fonctionnalités spécifiques (réservation, espace
              client, intégrations)&nbsp;: <strong>5&nbsp;000&nbsp;€ et +</strong>.
            </li>
          </ul>
        </FadeIn>

        <FadeIn>
          {/* 2) Ce qui fait varier le prix */}
          <h2 className={styles.subheading}>Ce qui fait vraiment varier le prix</h2>
          <ul className={styles.list}>
            <li>
              <strong>Contenu</strong> : textes/visuels fournis ou à produire (atelier,
              rédaction, photos).
            </li>
            <li>
              <strong>Fonctionnalités</strong> : blog, filtres, réservation, paiement,
              multilingue, espace client.
            </li>
            <li>
              <strong>Design</strong> : adaptation d’un modèle vs mise en page sur-mesure +
              micro-interactions.
            </li>
            <li>
              <strong>SEO</strong> : simple base technique vs recherche de mots-clés et pages
              locales dédiées.
            </li>
            <li>
              <strong>Intégrations</strong> : CRM, emailing, outils métier, connecteurs tiers.
            </li>
            <li>
              <strong>Délais &amp; accompagnement</strong> : calendrier serré, ateliers,
              itérations, support.
            </li>
          </ul>
        </FadeIn>

        <FadeIn>
          {/* 3) Après la mise en ligne */}
          <h2 className={styles.subheading}>Coûts annuels à prévoir</h2>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Poste / Service</th>
                  <th>Prix annuel typique</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nom de domaine</td>
                  <td>15–20&nbsp;€/an</td>
                </tr>
                <tr>
                  <td>Hébergement + sauvegardes</td>
                  <td>80–200&nbsp;€/an</td>
                </tr>
                <tr>
                  <td>Maintenance / mises à jour</td>
                  <td>200–600&nbsp;€/an</td>
                </tr>
                <tr>
                  <td>Licences éventuelles</td>
                  <td>0–150&nbsp;€/an</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className={styles.totalRow}>
                  <td>Total annuel</td>
                  <td>
                    <strong>≈ 100–500&nbsp;€/an</strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </FadeIn>

        <FadeIn>
          {/* 4) Comment obtenir un chiffrage précis */}
          <h2 className={styles.subheading}>Obtenir un chiffrage précis</h2>
          <p className={styles.paragraph}>
            Pour affiner rapidement un devis, partagez&nbsp;: votre objectif (contacts, ventes,
            référencement local), 3–5 sites de référence, la liste des pages, l’état des
            contenus (prêts ou non), les fonctionnalités attendues, et votre délai. Avec ces
            éléments, on cale un budget et un planning réalistes.
          </p>
        </FadeIn>

        <FadeIn>
          {/* CTA finale */}
          <section className={styles.final} aria-labelledby="call">
            <div className={styles.ctaRow}>
              <div className={styles.btnContainer}>
                <Link
                  href={`/${locale}/contact`}
                  className={styles.btnPrimary}
                  aria-label="Demander un devis"
                  title="Demander un devis"
                >
                  Contact / Devis →
                </Link>
              </div>

              <span className={styles.ctaText}>
                ou&nbsp;
                <Link
                  href={`/${locale}/offres-creation-site-internet`}
                  className={styles.linkAccent}
                >
                  voir mes offres de création de site internet
                </Link>
              </span>
            </div>
          </section>
        </FadeIn>
      </section>
      </main>
      </>
  );
}
