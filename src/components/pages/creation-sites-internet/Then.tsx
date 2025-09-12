'use client';



import FadeIn from '@/components/common/FadeIn';
import styles from './Then.module.css';
import { FaLock,  FaFileAlt } from 'react-icons/fa';

export default function Then() {



  return (
    <section className={styles.after} aria-labelledby="after-title">
      <FadeIn>
        {/* Bloc 1 : Accompagnement créatif (inchangé) */}
        
                <div className={styles.miniBlock}>
        <h3 id="after-title" className={styles.title}>Accompagnement créatif</h3>

        <p className={styles.text}>
          <FaFileAlt className={styles.icon} aria-hidden />
          Textes & visuels — si vous partez de zéro, je peux rédiger vos textes et générer des visuels adaptés (libres de droit ou créés par IA). <br/>Si vous avez déjà vos contenus, je les intègre directement pour un rendu clair et cohérent.
        </p>
    
    </div>


{/* Bloc 2 : Coûts après mise en ligne (résumé simple) */}
        <div className={styles.miniBlock}>
<h3 className={styles.title}>Coûts après mise en ligne</h3>

<p className={styles.text}>
  <FaLock className={styles.icon} aria-hidden />
  <strong>Pas d’abonnement imposé</strong> —   Avec un CMS (WordPress, Wix, Joomla, etc.), les abonnements et la maintenance reviennent
  souvent à <strong>1200–1500 € minimum</strong> sur 3 ans, et peuvent dépasser
  <strong> 3000 €</strong>.
</p>

<br/><br/>



<p className={styles.text}>

  Chez moi, un site vitrine classique vous coûtera
  <strong> 0 €/mois</strong>.<br/> Le seul coût fixe est le
  <em> nom de domaine</em> (~20 €/an), que vous pouvez acheter à votre nom
  ou me laisser gérer pour vous au même tarif.

</p>
</div>


<div className={styles.miniBlock}>
  <h3 className={styles.title}>Pour quels métiers ?</h3>

  <ul className={styles.bulletList}>
    <li>Artisans (plombier, électricien, BTP)</li>
    <li>Santé & bien-être (kiné, ostéo, coach)</li>
    <li>Restauration & food (restaurant, traiteur)</li>
    <li>Services & freelances (consultants, photographes)</li>
    <li>Associations, artistes, créateurs</li>
  </ul>
</div>




      </FadeIn>
    </section>
  );
}
