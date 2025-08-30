'use client';

import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import styles from './Projects.module.css';
import { useTranslations } from 'next-intl';
import FadeIn from '@/components/common/FadeIn';

export default function Projects() {
  const t = useTranslations('projects');

  const projects = [
    {
      title: 'Blog d’artiste',
description:
  'Site portfolio avec galerie de plus de 500 images et navigation fluide, optimisé pour un affichage rapide.',
  imageUrl: '/images/projects/blog.png',
      context: 'Projet client',
      link: 'https://gaelle-boucherit.com/',

    },
    {
      title: 'Application métier',
      description:
        'Plateforme web avec authentification externe et gestion de réservations.',
      imageUrl: '/images/projects/f17.png',
      context: 'Démonstration technique',
      link: 'https://app.dota-arena.fr/home',

    },
    {
      title: 'Plateforme sociale',
      description:
        'Démonstration technique d’un réseau social : flux, profils, interactions et gestion d’amis.',
      imageUrl: '/images/projects/createPost.png',
      context: 'Démonstration technique',
      link: 'https://clonebook-super.netlify.app/',

    },
  ] as const;

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (
    <section className={styles.projectsSection}>
      <FadeIn>
      <h2 className={styles.heading}>{t('title')}</h2>

      <div className={styles.sliderWrapper}>
        <div className={styles.embla}>
          <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
              {projects.map((project, i) => (
                <div className={styles.embla__slide} key={project.title}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={640}
                      height={360}
                      className={styles.image}
                      priority={i === 0}
                    />
                  </div>

                  <div className={styles.slideContent}>
<div className={styles.meta}>
  {project.context && <span className={styles.context}>{project.context}</span>}
</div>

                    <h3>{project.title}</h3>
                    <p className={styles.description}>{project.description}</p>



                    <div className={styles.ctaWrapper}>
                      <a
                        href={project.link}
                        className={styles.cta}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t('cta')}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.dots}>
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`${styles.dot} ${selectedIndex === index ? styles.activeDot : ''}`}
              aria-label={t('ariaLabel', { index: index + 1 })}
            />
          ))}
        </div>
        </div>
        </FadeIn>
    </section>
  );
}
