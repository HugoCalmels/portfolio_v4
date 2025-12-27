// app/[locale]/layout.tsx

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import { Archivo_Black, Montserrat } from 'next/font/google';
import '@/styles/globals.css';

// ---- Locales supportées
const SUPPORTED = ['fr', 'en'] as const;
type Locale = (typeof SUPPORTED)[number];

// ---- Messages JSON (imports statiques -> SSG-friendly)





// ---- Forcer le segment en statique
export const dynamic = 'force-static';
export const dynamicParams = false;
export function generateStaticParams() {
  return SUPPORTED.map((locale) => ({ locale }));
}

/**
 * ---- Metadata global (défaut)
 * Les pages pourront surcharger title/description avec `export const metadata`
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://hugo-calmels.fr'),

  title: {
    default: 'Hugo Calmels — Développeur web',
    template: '%s — Hugo Calmels',
  },

  description:
    'Sites et logiciels web sur-mesure : simples, rapides, fiables. Une base propre, sans CMS lourd.',

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: 'website',
    siteName: 'Hugo Calmels',
    url: 'https://hugo-calmels.fr',
    images: ['/images/og.png'],
  },

  twitter: {
    card: 'summary_large_image',
  },
};

// ---- Fonts (✅ uniquement celles utilisées, + display swap)
const archivo = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-title',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

// ---- Layout (params est une Promise -> on attend avant d'accéder à locale)
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (rawLocale as Locale) || 'fr';
  if (!SUPPORTED.includes(locale)) notFound();

  // Cast unique au boundary pour NextIntl


  return (
    <html lang={locale} className={`${archivo.variable} ${montserrat.variable}`}>
      <body className="antialiased">

          <Navbar />
          <main>{children}</main>
          <Footer />

      </body>
    </html>
  );
}
