import { NextIntlClientProvider } from 'next-intl';
import { redirect } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { Geist, Geist_Mono } from 'next/font/google';
import { Archivo_Black, Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import Footer from '@/components/Footer';

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

export const metadata = {
  title: 'Hugo Calmels – Développeur Web Freelance à Toulouse',
  description: 'Sites rapides, propres, sur-mesure. Développement web & outils métier.',
};

type LocaleParams = {
  locale: string;
};

const SUPPORTED_LOCALES = ['fr', 'en'];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LocaleParams;
}) {
  const locale = params?.locale;

  // 🔁 Redirection si la locale n’est pas supportée
  if (!SUPPORTED_LOCALES.includes(locale)) {
    redirect('/fr');
  }

  let messages = {};
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    console.warn(`❌ Locale "${locale}" non supportée ou fichier manquant`);
  }

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${montserrat.variable}`}
    >
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
