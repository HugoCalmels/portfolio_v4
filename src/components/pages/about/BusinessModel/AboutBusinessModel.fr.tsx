'use client'

import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import styles from './BusinessModel.module.css'

export default function AboutBusinessModelFr() {
  return (
    <section
      className={styles.section}
      id="business-model"
      aria-labelledby="business-model-title"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <div id="business-model-title">
            <HomeSectionTitle title="Modèle économique" />
          </div>
        </header>

        <div className={styles.prose}>
          {/* ===================== */}
          {/* Sites web */}
          {/* ===================== */}
          <h3 className={styles.h3}>Sites web</h3>

          <p>
            Aujourd’hui, créer un site web est devenu banal.
            CMS, no-code, templates&nbsp;: il y a énormément d’offres,
            beaucoup de concurrence, et peu de barrières à l’entrée.
          </p>

          <p>
            Sur des sites classiques (vitrines, landing pages, petits e-commerce),
            on est probablement autour de <strong>70–80&nbsp;% CMS</strong>,&nbsp;
            <strong>10–15&nbsp;% no-code</strong>,
            et <strong>5–15&nbsp;% en code</strong>.
            Ce sont des ordres de grandeur, pas des chiffres officiels,
            mais ça reflète assez bien la réalité du terrain.
          </p>

          <div
            className={styles.matrixA}
            role="table"
            aria-label="Comparaison code, CMS et no-code"
          >


            {/* CODE */}
            <div className={styles.matrixGroup} role="rowgroup">
              <div className={styles.matrixGroupTitle}>Code</div>
              <div className={styles.matrixRowA} role="row">
                <div className={styles.matrixCell} role="cell">
                  <ul className={styles.bulletsPlus}>
                    <li>0&nbsp;€ / mois possible (site statique)</li>
                    <li>Le plus rapide / performant des 3</li>
                    <li>Liberté technique + créativité totale</li>
                    <li>Contrôle total sur le comportement du site</li>
                  </ul>
                </div>

                <div className={styles.matrixCell} role="cell">
                  <ul className={styles.bulletsMinus}>
                    <li>Reprise du projet plus exigeante (React requis)</li>
                    <li>Temps de dev parfois plus long qu’un CMS</li>
                    <li>
                      Pas d’interface d’édition par défaut (admin sur mesure possible)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CMS */}
            <div className={styles.matrixGroup} role="rowgroup">
              <div className={styles.matrixGroupTitle}>CMS</div>
              <div className={styles.matrixRowA} role="row">
                <div className={styles.matrixCell} role="cell">
                  <ul className={styles.bulletsPlus}>
                    <li>Templates (design + structure) prêts</li>
                    <li>Interface d’édition intégrée</li>
                    <li>Plugins pour avancer rapidement</li>
                    <li>Facile de trouver un prestataire</li>
                  </ul>
                </div>

                <div className={styles.matrixCell} role="cell">
                  <ul className={styles.bulletsMinus}>
                    <li>Plugins / thèmes souvent payants</li>
                    <li>Coûts mensuels + maintenance</li>
                    <li>Performance dépend de l’empilement</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* NO-CODE */}
            <div className={styles.matrixGroup} role="rowgroup">
              <div className={styles.matrixGroupTitle}>No-code</div>
              <div className={styles.matrixRowA} role="row">
                <div className={styles.matrixCell} role="cell">
                  <ul className={styles.bulletsPlus}>
                    <li>Très rapide pour prototyper</li>
                    <li>Accessible sans profil technique</li>
                    <li>OK pour MVP simples</li>
                  </ul>
                </div>

                <div className={styles.matrixCell} role="cell">
                  <ul className={styles.bulletsMinus}>
                    <li>Limites dès que la logique devient spécifique</li>
                    <li>Dépendance forte à la plateforme</li>
                    <li>Transition compliquée vers du code propre</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <p>
            La part de WordPress a augmenté de manière continue pendant plus de dix ans,
            passant d’environ 13&nbsp;% en 2011 à plus de 43&nbsp;% en 2022.
            Depuis 2022–2023, cette progression s’est nettement ralentie,
            au moment même où l’IA est devenue un outil courant dans le no-code
            comme dans le développement en code.
          </p>

          <p>
            L’IA n’a pas remplacé les CMS,
            mais elle a changé les équilibres&nbsp;:
            elle permet aux outils no-code d’aller plus vite,
            et aux développeurs de produire du code beaucoup plus rapidement qu’avant.
            Des approches qui étaient marginales deviennent simplement plus viables.
          </p>

          <p>
            Au final, peu importe l’outil.
            Si vous voulez vraiment un bon site,
            il faudra soit y passer beaucoup de temps vous-même,
            soit travailler avec un bon développeur.
          </p>

          {/* ===================== */}
          {/* Logiciels web */}
          {/* ===================== */}
          <h3 className={styles.h3}>Logiciels web</h3>

          <p>
            Le second volet de mon activité concerne les{' '}
            <strong>logiciels web</strong>&nbsp;:
            applications métier, outils internes, SaaS, MVP.
          </p>

          <p>
            Techniquement, je sais concevoir et développer ce type de projets.
            En revanche, c’est un axe que je développe plus lentement côté business.
            Créer un logiciel ne consiste pas seulement à écrire du code.
          </p>

          <p>
            Un logiciel implique souvent&nbsp;:
            développement continu, retours utilisateurs,
            maintenance, support, évolutions,
            et parfois acquisition d’utilisateurs.
            C’est un travail lourd à porter seul.
          </p>

          <p>
            Aujourd’hui, je me concentre principalement sur les sites web
            afin de stabiliser cette activité.
            Le logiciel reste un axe que je souhaite développer,
            idéalement sur des projets bien cadrés,
            avec des besoins concrets et identifiés.
          </p>

          <p>
            À terme, je suis également ouvert à travailler en équipe&nbsp;:
            startup, agence, éditeur logiciel ou entreprise.
            Le format importe moins que le contexte technique
            et la qualité des projets.
          </p>
        </div>
      </div>
    </section>
  )
}
