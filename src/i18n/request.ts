import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const safeLocale = (locale ?? 'fr') as 'fr' | 'en';

  // ⚠️ IMPORTANT: on ne met ici QUE les messages globaux (layout)
  const messages = (await import(`../messages/${safeLocale}/layout.json`)).default;

  return {
    locale: safeLocale,
    messages
  };
});
