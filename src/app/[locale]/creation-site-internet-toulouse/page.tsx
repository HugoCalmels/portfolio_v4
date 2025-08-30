'use client';

import { useTranslations } from 'next-intl';

import SeoHead from '@/components/common/SeoHead';
import OffresSimples from '@/components/pages/creation-sites-internet/OffresSimples';
import Projects from '@/components/pages/creation-sites-internet/Projects';
import Testi from '@/components/pages/creation-sites-internet/Testi';
import MiniFaq from '@/components/common/MiniFaq';
import ContactSection from '@/components/common/ContactSection';
import Then from '@/components/pages/creation-sites-internet/Then';

export default function Home() {
  const t = useTranslations('creationSeo');

  return (
    <>
           <SeoHead
        title="Création de site internet à Toulouse – Sites vitrines & e-commerce"
        description="Conception de sites pros à Toulouse : vitrine, e-commerce et SEO local. Design moderne, performance et accompagnement après mise en ligne."
      />
      <main>
        <OffresSimples />
        <Then />
        <Projects />
        <Testi />
        <MiniFaq />
        <ContactSection />
      </main>
    </>
  );
}
