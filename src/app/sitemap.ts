// app/sitemap.ts
import type { MetadataRoute } from 'next';

const BASE_URL = 'https://hugo-calmels.fr' as const;

const LOCALES = ['fr', 'en'] as const;
const PAGES = [
  '',
  '/sites-web',
  '/logiciels-web',
  '/a-propos',
  '/contact',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const changeFrequency = 'monthly' as const;

  const entries: MetadataRoute.Sitemap = [];

  for (const path of PAGES) {
    // hreflang via alternates (typage propre)
    const languages: Record<string, string> = {
      fr: `${BASE_URL}/fr${path}`,
      en: `${BASE_URL}/en${path}`,
    };

    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency,
        priority: path === '' ? 1 : 0.8,
        alternates: { languages },
      });
    }
  }

  return entries;
}
