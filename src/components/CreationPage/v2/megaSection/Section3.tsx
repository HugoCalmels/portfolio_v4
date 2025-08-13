'use client'

import styles from './Sections.module.css'

export default function Section3() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>🟩 Ce que ça change pour vous</h2>

      <div className={styles.paragraph}>
        <p>
          Les CMS comme WordPress sont rapides à vendre, mais derrière, il y a souvent des coûts cachés :<br />
          maintenance, mises à jour, hébergement spécifique, licences, sécurité…
        </p>

        <p>En créant votre site internet sans CMS, vous évitez ces dépendances — et vous gardez la main.</p>

        <p>
          Voici un comparatif transparent&nbsp;:<br />
          <span className={styles.note}>
            (Ces montants sont des frais techniques récurrents. Le développement du site est facturé à part.)
          </span>
        </p>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Poste</th>
              <th className={styles.th}>Agence WordPress</th>
              <th className={styles.th}>Site codé par moi</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <tr><td className={styles.td}>Nom de domaine</td><td className={styles.td}>10–30 €/an</td><td className={styles.td}>Inclus (≈25 €/an)</td></tr>
            <tr><td className={styles.td}>Hébergement</td><td className={styles.td}>100–200 €/an</td><td className={styles.td}>0–25 €/an</td></tr>
            <tr><td className={styles.td}>Maintenance</td><td className={styles.td}>300–800 €/an</td><td className={styles.td}>0 €</td></tr>
            <tr><td className={styles.td}>Mises à jour</td><td className={styles.td}>Incluse dans maintenance</td><td className={styles.td}>0 €</td></tr>
            <tr><td className={styles.td}>Licences plugins / thèmes</td><td className={styles.td}>50–300 €/an</td><td className={styles.td}>0 €</td></tr>
            <tr><td className={styles.td}>Dépannages</td><td className={styles.td}>100–300 €/an</td><td className={styles.td}>Rare (stack stable)</td></tr>
            <tr><td className={styles.td}>Sécurité</td><td className={styles.td}>À prévoir (plugin)</td><td className={styles.td}>Incluse (native)</td></tr>
            <tr><td className={styles.td}>Vitesse</td><td className={styles.td}>Moyenne</td><td className={styles.td}>Excellente</td></tr>
            <tr><td className={styles.td}>Évolutivité</td><td className={styles.td}>Limitée</td><td className={styles.td}>Totale</td></tr>
          </tbody>
          <tfoot className={styles.tfoot}>
            <tr className={styles.totalRow}>
              <td className={styles.td}>Total annuel estimé</td>
              <td className={styles.td}>600–1500 €/an</td>
              <td className={styles.td}>0–150 €/an</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className={styles.paragraph}>
        <p>👉 <strong>Résultat : moins de dépendances, moins de frais, plus de maîtrise.</strong></p>
        <p>Un site qui tourne bien, sans que vous ayez à vous en occuper.</p>
      </div>
    </section>
  )
}
