'use client';
import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import styles from './Projects.module.css';
import { useTranslations } from 'next-intl';

export default function Projects() {
  const t = useTranslations('projects');

  const projects = [
    {
      title: t('list.0.title'),
      description: t('list.0.description'),
      imageUrl: '/images/projects/blog.png',
      context: t('list.0.context'),
      stack: t('list.0.stack'),
    },
    {
      title: t('list.1.title'),
      description: t('list.1.description'),
      imageUrl: '/images/projects/f17.png',
      context: t('list.1.context'),
      stack: t('list.1.stack'),
    },
    {
      title: t('list.2.title'),
      description: t('list.2.description'),
      imageUrl: '/images/projects/createPost.png',
      context: t('list.2.context'),
      stack: t('list.2.stack'),
    },
  ];

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

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.heading}>{t('title')}</h2>
      <div className={styles.sliderWrapper}>
        <div className={styles.embla}>
          <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
              {projects.map((project, i) => (
                <div className={styles.embla__slide} key={i}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={640}
                      height={360}
                      className={styles.image}
                      priority={i === 0} // Charge d'abord la première image
                    />
                  </div>
                  <div className={styles.slideContent}>
                    <h3>{project.title}</h3>
                    <p className={styles.description}>{project.description}</p>
                    <p className={styles.context}>
                      <strong>{t('contextLabel')} :</strong> {project.context}
                    </p>
                    <p className={styles.stack}>
                      <strong>{t('stackLabel')} :</strong> {project.stack}
                    </p>
                    <div className={styles.ctaWrapper}>
                      <a href="#" className={styles.cta}>
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
    </section>
  );
}
