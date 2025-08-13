'use client';
import styles from './Formules.module.css';
import { useParams } from 'next/navigation' 

export default function Formules() {
    const params = useParams()
  const locale = params?.locale || 'fr'
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Offres de sites vitrines</h1>
      <p className={styles.intro}>
        Je développe trois types de sites, adaptés aux indépendants, artisans et petites structures qui veulent une présence en ligne efficace et durable.
      </p>

      <div className={styles.tableSection}>
        <h2 className={styles.subheading}>Comparatif rapide</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Critère</th>
                <th>Simple</th>
                <th>Complet</th>
                <th>SEO local</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pages incluses</td>
                <td>1 à 2 pages</td>
                <td>3 à 6 pages</td>
                <td>4 à 8 pages optimisées</td>
              </tr>
              <tr>
                <td>Contenu & aide</td>
                <td>Formulation essentielle</td>
                <td>Structuration & rédaction</td>
                <td>Mots-clés, structure SEO</td>
              </tr>
              <tr>
                <td>Design</td>
                <td>Lisible et rapide</td>
                <td>Aligné à votre image</td>
                <td>Clarté, hiérarchie, vitesse</td>
              </tr>
              <tr>
                <td>SEO</td>
                <td>Basique (nom + ville)</td>
                <td>Structuré, balisage propre</td>
                <td>Optimisé localement</td>
              </tr>
              <tr>
                <td>Délais</td>
                <td>5 à 10 jours</td>
                <td>2–3 semaines</td>
                <td>3–4 semaines</td>
              </tr>
              <tr>
                <td>Tarif</td>
                <td>À partir de 700 € TTC</td>
                <td>À partir de 1200 € TTC</td>
                <td>À partir de 1800 € TTC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <section className={styles.alert}>
  <h3>Un repère, pas un forfait</h3>
  <p>
    Les tarifs affichés sont <strong>indicatifs</strong> :  
    chaque projet est <strong>unique</strong> et fait l’objet d’un devis sur mesure.
  </p>
  <p>
    Le prix dépend surtout de ce qu’il y a à faire :  
    contenu à intégrer, objectifs du site et options demandées.  <br/>
    Plus votre projet est clair dès le départ,  
    plus je peux livrer un site rapide et impeccable.
  </p>
</section>



      <section className={styles.offer}>
  <h3>Tout ce qui est compris d’office</h3>
  <p>
    Quel que soit le format choisi, chaque site inclut automatiquement :
  </p>
  <ul>
    <li>Design responsive (mobile, tablette, desktop)</li>
    <li>Optimisation de base pour Google (titres, balises, vitesse)</li>
    <li>Site sécurisé en HTTPS</li>
    <li>Formulaire de contact relié à votre email</li>
    <li>Contenu structuré pour présenter votre activité</li>
  </ul>
  <p >
    Pas de surprise, pas de frais cachés : votre site est prêt à l’emploi dès la livraison.
  </p>
</section>


<section className={styles.offer}>
  <h2>Rédaction incluse</h2>
  <p className={styles.description}>
    Je prends en charge la création de votre contenu (textes et images) à partir des informations que vous me fournissez.  
    C’est mon métier de parler aux internautes : vous me donnez la matière, je m’occupe du reste.
  </p>
  <ul>
    <li>Vous me transmettez vos infos, je les transforme en contenu web clair</li>
    <li>Ton simple, concis, orienté visiteurs</li>
    <li>Et si vous préférez écrire vous-même, c’est possible aussi</li>
  </ul>
</section>

<section className={styles.offer}>
  <h2>Site vitrine simple</h2>
  <p className={styles.description}>
    Pour présenter votre activité sans superflu.
  </p>
        <ul>
        <li>1 à 2 pages (accueil, contact)</li>
  <li>Vos services présentés clairement</li>
  <li>Mise en ligne rapide et efficace</li>
  </ul>
</section>

      <section className={styles.offer}>
        <h2>Site vitrine complet</h2>
        <p className={styles.description}>
          Un site structuré avec plusieurs pages, un design aligné à votre image et un accompagnement éditorial.
        </p>
        <ul>
          <li>3 à 6 pages (accueil, services, contact…)</li>
          <li>Design soigné, contrasté, professionnel</li>
          <li>Structuration du contenu et aide à la rédaction</li>
          <li>SEO propre : balisage, hiérarchie, titres</li>
          <li>Pensé pour évoluer si besoin</li>
        </ul>
      </section>

      <section className={styles.offer}>
  <h2>Site optimisé SEO local</h2>
  <p className={styles.description}>
          Conçu pour être visible dans votre ville grâce à une structure et un contenu optimisés pour le référencement local, à partir d’un audit de mots-clés lié à votre activité.
          Un abonnement mensuel SEO est à prévoir.
  </p>
  <ul className={styles.offer}>
    <li>4 à 8 pages optimisées (services, zones)</li>
    <li>Structure et mots-clés locaux validés</li>
    <li>Formulaire de contact mis en avant</li>
    <li>Clarté visuelle et performance rapide</li>
    <li>Base solide pour un suivi SEO ultérieur</li>
  </ul>
</section>

      <section className={styles.faqBlock}>
        <h3>Ai-je besoin d’une base de données&nbsp;?</h3>
        <p>
          Dans 90 % des cas, non. Un site vitrine simple (texte, images, boutons) n’en a pas besoin. J’installe une base de données uniquement si le site doit stocker ou modifier du contenu de manière dynamique : blog, fiches produits, espace client, etc.
        </p>
      </section>

      <div className={styles.cta}>
      <h3>Prêt à lancer votre projet ?</h3>
      <a href={`/${locale}/contact`} className={styles.buttonPrimary}>
        Me contacter
      </a>
      <p className={styles.note}>
        Réponse rapide, devis gratuit et sans engagement.
      </p>
    </div>

    </section>
  );
}
