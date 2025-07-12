'use client';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import styles from './NotFound.module.css';

export default function NotFound() {
  const t = useTranslations('notFound');
  const locale = useLocale();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>😕 {t('title')}</h1>
      <p className={styles.message}>{t('message')}</p>
      <Link href={`/${locale}`} className={styles.backLink}>
        {t('backHome')}
      </Link>
    </div>
  );
}
