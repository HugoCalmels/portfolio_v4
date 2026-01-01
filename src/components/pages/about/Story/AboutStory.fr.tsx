'use client'

import styles from './Story.module.css'
import HomeSectionTitle from '@/components/ui/HomeSectionTitle'

export default function AboutStoryFr() {
  return (
    <section className={styles.section} id="parcours">
      <div className={styles.inner}>
        <header className={styles.header}>
          <HomeSectionTitle title="Parcours" />

          <p className={styles.prose}>
            Je suis un développeur web, à <strong>80&nbsp;% autodidacte</strong>, 10&nbsp;% de formation et
            10&nbsp;% de mentorat.
          </p>

          <p className={styles.prose}>
            <strong>Pas de diplôme.</strong>
            <br />
            Pas d’expérience professionnelle “classique” (ESN, éditeurs, agences).
            <br />
            Pas de stage ni d’alternance.
            <br />
            <strong>Juste 4 à 5 ans de pratique réelle.</strong>
          </p>
        </header>

        <div className={styles.stack}>
          {/* Bootcamp */}
          <article className={styles.block}>
            <h3 className={styles.h3}>6 mois — Bootcamp (formation accélérée)</h3>
            <p className={styles.badge}>Développeur fullstack Ruby / React</p>

            <div className={styles.prose}>
              <p>
                Sur <strong>550 participants</strong>, seulement <strong>13</strong> ont obtenu la certification.
              </p>

              <p>
                Parmi ces 13, certains codaient déjà depuis <strong>3 à 5 ans</strong>.
                <br />
                Moi, je partais de zéro.
              </p>

              <p>
                Ce n’était pas facile.
                <br />
                Mais j’étais clairement <strong>le plus persévérant du groupe</strong>.
                <br />
                Never give up.
              </p>

              <p>
                Au final j&apos;avais appris les bases, j&apos;avais une roadmap, mais je savais que{' '}
                <strong>j&apos;étais nul</strong>.
              </p>
            </div>
          </article>

          {/* Grind solo */}
          <article className={styles.block}>
            <h3 className={styles.h3}>2 à 3 ans — Grind solo (apprentissage autodidacte)</h3>
            <p className={styles.badge}>Développeur fullstack Ruby / React</p>

            <div className={styles.prose}>
              <p>
                Cette période a été consacrée à une <strong>pratique régulière et autonome</strong>&nbsp; du développement
                web.
                <br />
                L’objectif était simple&nbsp;: coder souvent, comprendre ce que je faisais, et progresser sur des projets
                concrets.
              </p>

              <p>
                Côté frontend, j’ai travaillé sur des interfaces en React&nbsp;: composants, gestion des données à l’écran,
                interactions utilisateur, et échanges avec le backend via des API.
              </p>

              <p>
                J’ai aussi beaucoup progressé sur l’UI / UX.
                <br />
                Mes premières interfaces étaient brouillonnes, puis j’ai appris à organiser les pages, rendre les parcours
                plus clairs, et éviter d’en faire trop.
              </p>

              <p>
                Côté backend, j’ai travaillé surtout avec Ruby et PostgreSQL.
                <br />
                Création d’API, logique métier, authentification, envoi d’emails, gestion des données, et structuration du
                code.
              </p>

              <p>
                Cette phase m’a permis de comprendre&nbsp; <strong>comment fonctionne réellement un projet web</strong> :
                ce qui se passe côté interface, côté serveur, et dans la base de données.
              </p>

              <p>
                Je me suis aussi entraîné sur des exercices algorithmiques.
                <br />
                Intéressant techniquement, mais sans impact concret dans un contexte sans entretiens.
              </p>

              <p>
                À ce stade, j’avais un <strong>niveau technique suffisant</strong>&nbsp; pour travailler sur de vrais
                projets.
                <br />
                Mais le marché était compliqué&nbsp;: Ruby + React à Toulouse, et peu d’opportunités pour des profils
                juniors en 2023.
              </p>

              <p>
                J’ai donc compris qu’il fallait apprendre un autre langage backend plus demandé sur le marché (Node, Java
                ou Python).
              </p>
            </div>
          </article>

          {/* Mentorat */}
          <article className={styles.block}>
            <h3 className={styles.h3}>1 an — Mentorat</h3>
            <p className={styles.badge}>Java / Angular</p>

            <div className={styles.prose}>
              <p>
                J&apos;ai choisi <strong>Java</strong>.
                <br />
                Simplement parce que j&apos;ai trouvé un mentor motivé pour m&apos;aider. Un ingénieur récemment recruté
                chez <strong>Rolex</strong>.
              </p>

              <p>
                Le but était simple&nbsp;: <strong>se former en développant un projet complet</strong>, comme en entreprise.
              </p>

              <p>
                Je n&apos;avais jamais touché ni à Java, ni à Angular.
                <br />
                J&apos;ai donc dû <strong>apprendre les bases seul</strong> avant de commencer le projet.
              </p>

              <p>
                Nous avons développé un outil de planification de matchs pour des équipes de Dota&nbsp;2.
                <br />
                Sécurité avancée&nbsp;: OpenID, JWT, refresh tokens, cookies http-only.
                <br />
                Tableaux triables, gestion d’équipes, planification de matchs, gestion des fuseaux horaires, et même{' '}
                <strong>un peu de SSR et de WebSockets</strong>.
              </p>

              <p>
                Chaque ligne de code devait être validée via des code reviews.
                <br />
                Jusqu’à atteindre un <strong>niveau junior solide</strong>, prêt pour l’industrie.
              </p>
            </div>
          </article>

 <article className={styles.block}>
  <h3 className={styles.h3}>Aujourd’hui — Freelance</h3>
  <p className={styles.badge}>Java / React</p>

  <div className={styles.prose}>
    <p>
      Aujourd’hui, il n’est pas rare que <strong>plusieurs centaines de développeurs</strong>&nbsp;
      postulent pour une même annonce.
      Pour un profil junior, obtenir un premier poste en ESN ou chez un éditeur
      est devenu très difficile.
    </p>

    <p>
      Beaucoup de profils diplômés ne trouvent pas de place.
      Pour un autodidacte, l’accès au marché est encore plus restreint.
    </p>

    <p>
      Le freelance s’est donc imposé comme une alternative réaliste&nbsp;:
      trouver des missions par soi-même, travailler directement avec des clients finaux
      et rester proche de la pratique du développement.
    </p>

    <p>
      Ce n’est pas un “freelance dream”.
      C’est un choix pragmatique, pour avancer, gagner en expérience
      et voir où cette voie peut mener.
    </p>
  </div>
</article>



        </div>
      </div>
    </section>
  )
}
