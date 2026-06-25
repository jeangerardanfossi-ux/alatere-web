/**
 * Helpers i18n : URL EN dérivée d'un chemin FR + alternates hreflang réciproques.
 * FR à la racine (sans préfixe), EN sous /en.
 */
import type { Metadata } from 'next';

/** Chemin EN dérivé d'un chemin FR (« / » → « /en »). */
export function enPath(frPath: string): string {
  return frPath === '/' ? '/en' : `/en${frPath}`;
}

/**
 * Bloc `alternates` (canonical + hreflang) pour une page, selon sa langue.
 * `x-default` pointe vers la version FR (langue par défaut du site).
 */
export function pageAlternates(frPath: string, lang: 'fr' | 'en'): Metadata['alternates'] {
  const en = enPath(frPath);
  return {
    canonical: lang === 'en' ? en : frPath,
    languages: {
      'fr-FR': frPath,
      en,
      'x-default': frPath,
    },
  };
}
