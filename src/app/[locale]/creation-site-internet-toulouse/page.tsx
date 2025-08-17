// app/creation-site-internet-toulouse/page.tsx
import Head from "next/head";
import Link from "next/link";
import styles from "./page.module.css";

export default function CreationSiteInternetToulouse() {
  const title = "Création site internet Toulouse – sites & solutions sur mesure";
  const description =
    "Création de site internet à Toulouse. Basé à Toulouse, je conçois des sites et applications web sur mesure. Travail à distance ou intervention sur site (déplacements facturés au tarif horaire).";
  const canonical = "https://tondomaine.fr/creation-site-internet-toulouse";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Création de site internet à Toulouse",
    url: canonical,
    areaServed: "Toulouse",
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index,follow" />
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <section className={styles.wrapper}>
        <header className={styles.intro}>
          <h1 className={styles.heading}>Création de site internet à Toulouse</h1>

          <ul className={styles.metaChips} aria-label="Informations clés">
            <li>Basé à Toulouse</li>
            <li>À distance & sur site</li>
            <li>Devis rapide</li>
          </ul>

          <p className={styles.lead}>
            Basé à Toulouse, je conçois et développe des sites vitrines, e-commerce et applications web sur mesure.
          </p>
          <p className={styles.lead}>
            La plupart des projets se font efficacement à distance, mais je peux intervenir dans vos locaux lorsque
            c’est pertinent&nbsp;: par exemple pour un site vitrine hautement qualitatif ou un logiciel métier
            nécessitant une compréhension fine sur place.
          </p>
          <p className={styles.lead}>
            Comme la majorité des indépendants, les déplacements sont facturés au temps passé, temps de trajet inclus
            (au tarif horaire habituel). 
          </p>
        </header>

        <p className={styles.zones}>
          Intervention : Toulouse, Occitanie et déplacements longue distance si nécessaires.
        </p>

        <nav aria-label="Pages utiles">
  <p className={styles.linksLabel}>Pour en savoir plus&nbsp;:</p>
  <ul className={styles.list}>
    <li>
      <Link href="/offres" className={styles.link}>
        Mes offres de création de sites
      </Link>
    </li>
    <li>
      <Link href="/solutions-metier" className={styles.link}>
        Solutions métier sur mesure
      </Link>
    </li>
    <li>
      <Link href="/tarifs" className={styles.link}>
        Mes tarifs
      </Link>
    </li>
  </ul>
</nav>

        <div className={styles.cta}>
          <h3>Prêt à lancer votre projet ?</h3>
          <Link href="/contact" className={styles.buttonPrimary}>
            Me contacter
          </Link>
          <p className={styles.note}>
            Réponse rapide, devis gratuit et sans engagement.
          </p>
        </div>
      </section>
    </>
  );
}
