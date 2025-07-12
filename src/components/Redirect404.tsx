'use client';

import { usePathname } from 'next/navigation';

export default function Redirect404() {
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] || 'fr';

  return (
    <div style={{ padding: '100px', fontSize: '1.5rem', textAlign: 'center' }}>
      ❌ Cette page n’existe pas<br />
      <a href={`/${locale}`} style={{ marginTop: '20px', display: 'inline-block' }}>
        👉 Retour à l’accueil
      </a>
    </div>
  );
}
