'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { SeoMeta } from '@/types/seo';

const SeoHead = ({ title, description }: SeoMeta) => {
  const pathname = usePathname();
  const domain = 'https://hugo-calmels.fr';
  const canonicalUrl = `${domain}${pathname.replace(/\/$/, '')}`;

  return (
    <Head>
      {/* SEO de base */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};

export default SeoHead;
