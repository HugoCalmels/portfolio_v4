'use client'

import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import styles from './Freelance.module.css'

export default function AboutFreelanceFr() {
  return (
    <section className={styles.section} id="freelance" aria-labelledby="freelance-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div id="freelance-title">
            <HomeSectionTitle title="Freelance, SEO et modèle économique" />
          </div>
        </header>

        <div className={styles.prose}>
          <p>
            Je me suis intéressé au <strong>freelance</strong> parce que je connaissais quelqu’un qui vivait
            correctement du <strong>SEO local</strong>, en vendant des sites web — simples ou plus complexes.
            Deux sujets se sont alors imposés&nbsp;: le <strong>SEO</strong>, et le{' '}
            <strong>modèle économique</strong>.
          </p>

          <h3 className={styles.h3}>Le SEO</h3>

          <p>
            J’ai mené une première expérimentation de <strong>SEO local</strong> en tentant de me positionner
            sur une requête très compétitive&nbsp;: <strong> “création site internet Toulouse”</strong>.
          </p>

          <p>
            C’était volontairement un <strong>one-shot</strong>. Pas de budget, pas de stratégie de contenu
            sur la durée, pas de netlinking&nbsp;: l’objectif n’était pas un <strong>résultat immédiat</strong>
            , mais d’observer comment le site réagissait&nbsp;: <strong>indexation</strong>,{' '}
            <strong>impressions</strong>, <strong>visibilité locale</strong>.
          </p>

          <p>
            Le site ne s’est pas positionné sur la requête principale. En revanche, il a commencé à
            apparaître sur des <strong>requêtes plus longues</strong>, avec quelques impressions via Google et
            la fiche Google Business, <strong>sans trafic ni conversion réelle</strong>.
          </p>

          <p>
            Cette expérience m’a surtout rappelé une réalité simple&nbsp;: sur ce type de requêtes, le{' '}
            <strong>SEO est un travail de long terme</strong>. Certains acteurs mettent plusieurs années à
            se positionner. Par exemple, <strong>Paul Vengeons</strong> a mis environ <strong>4 ans</strong>
            &nbsp;à se positionner sur “Agence SEO”, en publiant du contenu régulièrement.
          </p>

          <p>
            De mon côté, je me suis vite rendu compte que le problème n’était pas le SEO en lui-même. En
            one-shot, sur un site encore en cours d’affinage, ce que je proposais n’était pas encore{' '}
            <strong>assez clair</strong> pour que j’aie envie de le promouvoir sérieusement.
          </p>

          <p>
            Avant de chercher de la visibilité, il fallait d’abord <strong>clarifier les bases</strong>
            &nbsp;: ce que je propose, à qui, et dans quel cadre. C’est ce travail-là qui m’a naturellement
            amené à revoir le <strong>modèle business</strong>.
          </p>

          <h3 className={styles.h3}>Le modèle business</h3>

          <p>
            La création de sites web est aujourd’hui largement dominée par les <strong>CMS</strong>. C’est la
            norme, et dans beaucoup de cas, elle fonctionne très bien.
          </p>

          <p>
            De mon côté, mon point d’entrée a toujours été le <strong>développement logiciel</strong>&nbsp;:
            interfaces web, <strong>logique applicative</strong>, et <strong>backend sur mesure</strong> quand
            c’est nécessaire. Ce sont les mêmes compétences que j’utilise pour des <strong>applications web</strong>.
          </p>

          <p>
            En regardant le marché de plus près, je me suis rendu compte qu’il existait aussi une{' '}
            <strong>petite niche</strong> hors CMS&nbsp;: des projets de sites web simples, souvent{' '}
            <strong>peu modifiables</strong>, pour lesquels une approche <strong>sur mesure</strong> peut avoir
            du sens.
          </p>

          <p>
            Ce sont typiquement des <strong>sites vitrines</strong> ou des <strong>landing pages</strong>, dont
            les évolutions sont <strong>ponctuelles</strong>, là où un CMS complet peut devenir{' '}
            <strong>inutilement lourd</strong>.
          </p>

          <p>
            J’ai donc fait le choix de proposer <strong>à la fois</strong> des <strong>sites web</strong> et des{' '}
            <strong>logiciels web</strong>, en m’appuyant sur une <strong>base technique commune</strong> et sur
            les outils que je maîtrise réellement.
          </p>

          <p>
            Le <strong>pari</strong> ne porte pas sur la technique, mais sur le <strong>positionnement</strong>
            &nbsp;: proposer des sites web avec des outils habituellement utilisés pour des{' '}
            <strong>applications</strong>, dans un marché largement <strong>dominé par les CMS</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}
