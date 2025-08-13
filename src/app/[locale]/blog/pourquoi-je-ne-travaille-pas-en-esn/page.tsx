'use client'

import { useEffect } from 'react'
import styles from './ArticleEsn.module.css'

export default function ArticleEsnPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className={styles.article}>

      {/* SECTION 1 */}
      <section className={styles.container}>
        <h1 className={styles.heading}>L’industrie ne voulait pas de moi</h1>
      </section>

      <section className={styles.wrapper}>
        <p className={styles.paragraph}>
          À 33 ans, je me suis reconverti dans le développement web.<br />
          <strong>Sans diplôme, sans passé dans la tech</strong>.
        </p>

        <p className={styles.paragraph}>Mon parcours s’est construit en trois étapes :</p>
        <ul className={styles.list}>
          <li>6 mois de formation intensive, validée par <strong>13 personnes sur 550</strong>,</li>
          <li>3 ans en autodidacte : apprendre, coder, rater, recommencer, livrer,</li>
          <li>1 an mentoré par un développeur senior : architecture, rigueur, collaboration.</li>
        </ul>

        <p className={styles.paragraph}>
          Au total, des années passées à apprendre et livrer des projets — seul ou en binôme, du front au back.
        </p>
      </section>

      {/* SECTION 2 */}
      <section className={styles.container}>
        <h2 className={styles.subheading}>Le mur des candidatures</h2>
      </section>

      <section className={styles.wrapper}>
        <p className={styles.paragraph}>
          Quand j’ai voulu rejoindre le marché français, j’ai envoyé plus de <strong>200 candidatures</strong>.<br />
          Ciblées, personnalisées, avec un CV retravaillé à chaque fois.
        </p>

        <p className={styles.paragraph}>
          <strong>Résultat :</strong> zéro appel, zéro entretien, zéro test technique.
        </p>

        <p className={styles.paragraph}>
          J’ai fini par traquer les IP des recruteurs pour vérifier s’ils consultaient mon portfolio.<br />
          Conclusion : seuls <strong>2 à 5 %</strong> ont cliqué.<br />
          Les autres n’ont rien ouvert.
        </p>

        <p className={styles.paragraph}>
          Et même parmi ceux qui regardaient mes projets, rien ne bougeait.<br />
          Quand on est autodidacte, on est vite perçu avec suspicion.<br />
          On s’attend presque à ce que vous soyez une startup à vous tout seul : tout faire, tout livrer, innover, scaler…<br />
          Concevoir et livrer ne suffit pas si la ligne “<strong>Bac+5</strong>” n’apparaît pas sur le CV.
        </p>
      </section>

  {/* SECTION 3 */}
<section className={styles.container}>
  <h2 className={styles.subheading}>Le filtre à l’embauche en France</h2>
</section>

<section className={styles.wrapper}>
  <p className={styles.paragraph}>
    En France, “rentrer dans les cases” pour être embauché signifie souvent :
  </p>
  <ul className={styles.list}>
    <li>Payer cher pour un titre RNCP ou une école privée</li>
    <li>Passer par la fac : quasi gratuite, mais lente et théorique, sans pratique avant l’alternance</li>
    <li>Ou miser sur l’alternance — massivement subventionnée pour les moins de 30 ans</li>
  </ul>

  <p className={styles.paragraph}>
    Conséquence logique : les entreprises privilégient ceux qui coûtent moins cher.
    Après 30 ans, la reconversion par l’alternance est presque fermée.
  </p>

  <p className={styles.paragraph}>
    Même les annonces “sans diplôme” ferment la porte : <strong>3 à 5 ans d’expérience exigés</strong>.
    Cercle fermé : pour avoir de l’expérience, il faut déjà avoir été embauché.
  </p>
</section>


      {/* SECTION 4 */}
      <section className={styles.container}>
        <h2 className={styles.subheading}>Ailleurs, ça marche autrement</h2>
      </section>

      <section className={styles.wrapper}>
        <p className={styles.paragraph}>
          Dans beaucoup de pays, on peut entrer dans le métier via un bootcamp, un projet concret, ou en apprenant sur le tas.<br />
          Pas besoin d’avoir coché toutes les cases scolaires au bon moment : si vous prouvez que vous savez faire, vous avez une chance.
        </p>

        <p className={styles.paragraph}>
          En France, c’est l’inverse : le recrutement filtre d’abord sur le diplôme et le parcours académique.<br />
          Résultat : la porte est presque fermée à ceux qui arrivent plus tard ou par un chemin atypique.
        </p>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Pays</th>
                <th>% Diplôme / % Talent</th>
                <th>% utilisateurs mondiaux apps</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>France</td><td>85 % / 15 %</td><td>~1-2 % (Deezer, Doctolib…)</td></tr>
              <tr><td>Allemagne</td><td>70 % / 30 %</td><td>~3 % (SAP, SoundCloud…)</td></tr>
              <tr><td>Espagne</td><td>80 % / 20 %</td><td>&lt;1 % (Glovo, Cabify…)</td></tr>
              <tr><td>Suède</td><td>50 % / 50 %</td><td>~8-10 % (Spotify, Klarna…)</td></tr>
              <tr><td>Pays-Bas</td><td>45 % / 55 %</td><td>~5-7 % (Booking, Adyen…)</td></tr>
              <tr><td>UK / 🇮🇪</td><td>35 % / 65 %</td><td>~10-15 % (Wise, Revolut…)</td></tr>
              <tr><td>USA</td><td>30 % / 70 %</td><td>&gt;70 % (Google, Facebook…)</td></tr>
            </tbody>
          </table>
        </div>

        <p className={styles.paragraph}>
          Ce n’est pas que les développeurs français sont moins bons — loin de là.<br />
          Mais enfermés dans de grandes structures ou des marchés locaux, ils produisent peu d’outils visibles à l’échelle mondiale.<br />
          Dans d’autres pays, on mise davantage sur la compétence et la prise d’initiative.<br />
          Et ce sont leurs applications que tout le monde utilise aujourd’hui.
        </p>
      </section>

{/* SECTION 5 */}
<section className={styles.container}>
  <h2 className={styles.subheading}>Pourquoi c’est une bonne nouvelle pour vous</h2>
</section>

<section className={styles.wrapper}>
  <p className={styles.paragraph}>
    Selon la taille de votre projet, vous pouvez passer par :
  </p>
  <ul className={styles.list}>
    <li><strong>ESN</strong> — 400 à 1000 h minimum, 80 à 150 €/h HT, plusieurs intermédiaires</li>
    <li><strong>Agences</strong> — 100 à 300 h, 80 à 120 €/h HT, gestion multi-profils</li>
    <li><strong>Freelances seniors</strong> — 100 à 400 h, 400 à 800 €/jour</li>
  </ul>

  <p className={styles.paragraph}>
  Moi, je prends les projets courts ou moyens — qu’ils durent 10 heures ou 300 — à 150 à 300 €/jour, sans marge d’intermédiaire et avec un seul interlocuteur : celui qui construit.
  </p>

  <p className={styles.paragraph}>
    Résultat : vous payez moins, vous attendez moins, et vous obtenez un produit qui tourne — rapidement.
  </p>
</section>

      {/* SECTION 6 */}
      <section className={styles.container}>
        <h2 className={styles.subheading}>En résumé</h2>
      </section>

      <section className={styles.wrapper}>
  <p className={styles.paragraph}>
    L’industrie ne voulait pas de moi.<br />
    J’ai laissé tomber les recruteurs pour parler directement aux clients.<br />
    Ironie : me placer en haut de Google m’a demandé moins d’efforts que décrocher un stage… ou un CDI au SMIC.
  </p>
</section>
    </main>
  )
}
