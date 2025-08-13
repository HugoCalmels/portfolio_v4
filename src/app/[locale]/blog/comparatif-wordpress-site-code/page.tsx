'use client'

import styles from './ComparatifWordpressSiteCode.module.css'

export default function ComparatifWordpressSiteCode() {
  return (
    <main className={styles.article}>
      <section className={styles.container}>
        <h1 className={styles.title}>WordPress vs site codé</h1>

        <p className={styles.paragraph}>
          Créer un site web implique deux types de dépenses :
        </p>
        <ul className={styles.list}>
          <li><strong>Coûts récurrents</strong> : ce que vous payez chaque année (hébergement, domaine, maintenance…)</li>
          <li><strong>Frais de développement</strong> : ce que vous payez une seule fois à la création du site</li>
        </ul>

        <p className={styles.paragraph}>
          Voici un comparatif entre <strong>un site WordPress en agence</strong>, 
          <strong> un WordPress géré par un indépendant</strong> 
          &nbsp;et <strong>ma solution codée sur-mesure</strong>.  
          Chaque ligne est factuelle et représentative de ce que proposent réellement ces solutions.
        </p>

        <p className={styles.pause}>&nbsp;</p>
{/* ============================= */}
{/* 1. COÛTS RÉCURRENTS */}
{/* ============================= */}
<h2 className={styles.subheading}>1. Coûts récurrents annuels</h2>

<div className={styles.tableContainer}>
  <table className={styles.table}>
    <thead>
      <tr>
        <th>Poste / Service</th>
        <th>Agence WP</th>
        <th>Indé WP</th>
        <th>Moi (site codé)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nom de domaine + gestion</td>
        <td>≈20 €/an</td>
        <td>≈20 €/an</td>
        <td>Inclus & géré (100 €/an)</td>
      </tr>
      <tr>
        <td>Hébergement + sauvegardes</td>
        <td>120–200 €/an</td>
        <td>80–150 €/an</td>
        <td>0–200 €/an</td>
      </tr>
      <tr>
        <td>Maintenance & mises à jour</td>
        <td>300–600 €/an</td>
        <td>0–200 €/an</td>
        <td>0 € (aucune mise à jour requise)</td>
      </tr>
      <tr>
        <td>Licences (thèmes / plugins)</td>
        <td>50–150 €/an</td>
        <td>50–100 €/an</td>
        <td>0 €</td>
      </tr>
    </tbody>
    <tfoot>
      <tr className={styles.totalRow}>
        <td>Total annuel typique</td>
        <td>600–1000 €/an</td>
        <td>250–500 €/an</td>
        <td>100–500 €/an</td>
      </tr>
    </tfoot>
  </table>
</div>

<p className={styles.paragraph}>
👉 <strong>Résultat :</strong> les frais annuels sont proches, mais ma solution revient moins cher
si vous n’avez pas besoin de back‑office.  <br/>
WordPress inclut ce back‑office par défaut, ce qui est très compétitif pour avoir un panel clé en main,
là où un back‑office sur‑mesure me demande quelques heures à développer.  <br/>
En échange, mon interface est simple, claire et adaptée à vos besoins, sans la complexité d’un WordPress classique.
</p>


        <p className={styles.pause}>&nbsp;</p>

        {/* ============================= */}
        {/* 2. FRAIS DE DÉVELOPPEMENT */}
        {/* ============================= */}
        <h2 className={styles.subheading}>2. Frais de développement (paiement unique)</h2>

        <p className={styles.paragraph}>
          Les coûts de création dépendent du type de site : simple, complet ou optimisé pour le SEO local.
        </p>

        {/* --- SITE VITRINE SIMPLE --- */}
        <h3 className={styles.subsubheading}>🟩 Site vitrine simple</h3>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Critère</th>
                <th>Agence WP</th>
                <th>Indé WP</th>
                <th>Moi</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Pages incluses</td><td>1–2</td><td>1–2</td><td>1–2</td></tr>
              <tr><td>Design</td><td>Thème premium prêt à l'emploi</td><td>Thème gratuit ou premium basique</td><td>Design rapide et sur‑mesure</td></tr>
              <tr><td>SEO</td><td>Plugin SEO (Yoast / RankMath)</td><td>Plugin SEO basique</td><td>Structure SEO native</td></tr>
              <tr><td>Contenu</td><td>Client (option rédaction)</td><td>Client, aide ponctuelle</td><td>Je crée à partir de vos infos</td></tr>
              <tr><td>Performance</td><td>Correcte si bien optimisé</td><td>Variable</td><td>Rapide, sans plugin</td></tr>
              <tr><td>Délais</td><td>1–2 sem.</td><td>1–2 sem.</td><td>1–2 sem.</td></tr>
              <tr><td>Tarif</td><td>800–1500 €</td><td>500–1000 €</td><td>À partir de 700 € TTC</td></tr>
            </tbody>
          </table>
        </div>

        {/* --- SITE VITRINE COMPLET --- */}
        <h3 className={styles.subsubheading}>🟨 Site vitrine complet</h3>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Critère</th>
                <th>Agence WP</th>
                <th>Indé WP</th>
                <th>Moi</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Pages incluses</td><td>3–5</td><td>3–5</td><td>3–6</td></tr>
              <tr><td>Design</td><td>Thème premium personnalisé</td><td>Thème premium modifié</td><td>Design codé sur‑mesure</td></tr>
              <tr><td>SEO</td><td>Plugin SEO configuré</td><td>Plugin SEO + réglages</td><td>Structure SEO native</td></tr>
              <tr><td>Contenu</td><td>Client (option rédaction)</td><td>Client, aide à la structuration</td><td>Je crée à partir de vos infos</td></tr>
              <tr><td>Performance</td><td>Bonne si thème optimisé</td><td>Variable</td><td>Rapide, sans plugin</td></tr>
              <tr><td>Délais</td><td>2–4 sem.</td><td>2–3 sem.</td><td>2–3 sem.</td></tr>
              <tr><td>Tarif</td><td>1500–3000 €</td><td>900–1800 €</td><td>À partir de 1200 € TTC</td></tr>
            </tbody>
          </table>
        </div>

        {/* --- SITE SEO LOCAL --- */}
        <h3 className={styles.subsubheading}>🟦 Site optimisé SEO local</h3>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Critère</th>
                <th>Agence WP</th>
                <th>Indé WP</th>
                <th>Moi</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Pages incluses</td><td>5–8</td><td>5–7</td><td>4–8</td></tr>
              <tr><td>Design</td><td>Thème premium + modules SEO</td><td>Thème premium modifié + opti SEO</td><td>Design codé optimisé SEO</td></tr>
              <tr><td>SEO</td><td>Plugin SEO avancé + contenu optimisé</td><td>Plugin SEO + réglages SEO local</td><td>SEO local intégré au code</td></tr>
              <tr><td>Contenu</td><td>Client (option rédaction)</td><td>Client, aide légère</td><td>Je crée à partir de vos infos</td></tr>
              <tr><td>Performance</td><td>Bonne si optimisation sérieuse</td><td>Variable</td><td>Rapide, sans plugin</td></tr>
              <tr><td>Délais</td><td>3–5 sem.</td><td>3–4 sem.</td><td>3–4 sem.</td></tr>
              <tr><td>Tarif</td><td>2000–4000 €</td><td>1200–2500 €</td><td>À partir de 1800 € TTC</td></tr>
            </tbody>
          </table>
        </div>

        <p className={styles.paragraph}>
👉 <strong>En résumé : </strong>  
mes <strong>frais de développement</strong> sont proches de ceux d’une agence  
et légèrement au‑dessus des indépendants WordPress.  
<br/>
Dans la pratique, <strong>la majorité du temps est consacrée à la création de contenu</strong> :  
rédiger des pages claires, choisir les bons mots et organiser l’information  
prend souvent plus de temps que la partie purement technique.<br/>  
Peu importe la solution choisie (WordPress, site codé, ou autre),  
c’est ce travail de contenu qui fait  
qu’un site est vraiment efficace dès sa mise en ligne.
</p>
      </section>
    </main>
  )
}
