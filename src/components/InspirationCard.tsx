'use client'

import InspirationModal from '@/components/InspirationModal'
import styles from './InspirationCard.module.css'

export default function InspirationCard() {
  return (
    <aside className={styles.inspCard} aria-label="Inspiration du design">
      <h3>Pourquoi ce style</h3>
      <ul>
        <li>H1 massif + sous-texte court pour aller à l’essentiel.</li>
        <li>Illustration IA ancrée à Toulouse pour poser le décor.</li>
        <li>Structure claire : titre, texte, CTA + rail d’infos.</li>
      </ul>

      {/* ouvre ton modal image (même visuel que le hero) */}
<InspirationModal triggerLabel="Voir l’inspiration" />
    </aside>
  )
}
