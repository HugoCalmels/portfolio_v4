import { NextIntlClientProvider } from 'next-intl';
import type { AbstractIntlMessages } from 'next-intl';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import { Geist, Geist_Mono } from 'next/font/google';
import { Archivo_Black, Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import Footer from '@/components/layout/Footer';
import BootLoader from './BootLoader';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});
const archivo = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-title',
});
const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Hugo Calmels – Développeur Web Freelance à Toulouse',
  description: 'Sites rapides, propres, sur-mesure. Développement web & outils métier.',
};

type LocaleParams = { locale: string };
type LayoutParams = LocaleParams | Promise<LocaleParams>;

/** Type guard : détecte proprement une Promise sans `any` */
function isPromise<T>(val: unknown): val is Promise<T> {
  return !!val && typeof (val as { then?: unknown }).then === 'function';
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LayoutParams;
}) {
  const resolved: LocaleParams = isPromise<LocaleParams>(params) ? await params : params;

  const locale = resolved?.locale ?? 'fr';

  if (!['fr', 'en'].includes(locale)) {
    redirect('/fr');
  }

  let messages: AbstractIntlMessages = {};
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    // eslint-disable-next-line no-console
    console.warn(`❌ Locale "${locale}" non supportée ou fichier manquant`);
  }

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${montserrat.variable}`}
    >
      <body className="antialiased">
        {/* Visible au F5 uniquement; disparaît à l’hydratation */}
        <BootLoader />

        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
