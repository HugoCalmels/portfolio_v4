'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import FadeIn from '@/components/common/FadeIn';
import styles from './Then.module.css';
import { FaLock, FaBolt, FaFileAlt, FaPencilRuler } from 'react-icons/fa';

export default function Then() {
  const params = useParams();
  const locale = params?.locale || 'fr';

  return (
    <section className={styles.after}>
      <FadeIn>
        {/* Bloc 1 : Accompagnement créatif */}
        <h3 className={styles.title}>Accompagnement créatif</h3>

        <p className={styles.text}>
          <FaFileAlt className={styles.icon} />
          Contenu adapté — j’intègre vos textes et images, ou je peux rédiger si vous partez de zéro.
        </p><br/>

        <p className={styles.text}>
          <FaPencilRuler className={styles.icon} />
          Maquettes sur demande — possibilité de prévisualiser le design avant développement.
        </p>

        {/* Bloc 2 : Après mise en ligne */}
        <h3 className={styles.title}>Et après la mise en ligne&nbsp;?</h3>

        <p className={styles.text}>
          <FaLock className={styles.icon} />
          Suivi technique simple & prévisible — frais dès <strong>100 €/an</strong>.{' '}
          <Link
            href={`/${locale}/frais-recurrents`}
            className={styles.link}
          >
            Voir les détails →
          </Link>
        </p><br/>

        <p className={styles.text}>
          <FaBolt className={styles.icon} />
          Fonctionnalités évolutives — réservation, espace client, modules spécifiques…{' '}
          <Link
            href={`/${locale}/developpement-web-toulouse`}
            className={styles.link}
          >
            Découvrir le sur-mesure →
          </Link>
        </p>
      </FadeIn>
    </section>
  );
}
