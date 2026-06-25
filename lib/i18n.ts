/**
 * Helpers i18n : slugs localisés EN + alternates hreflang réciproques.
 * FR à la racine (sans préfixe), EN sous /en avec slugs traduits.
 */
import type { Metadata } from 'next';

/**
 * Correspondance chemin FR → chemin EN « nu » (sans préfixe /en).
 * Seuls les mots génériques sont traduits ; les noms de marque (alatere-*) restent.
 * Tout chemin absent de la table garde son slug (ex. /contact, /alatere-forma/webmarketing).
 */
export const EN_SLUG: Record<string, string> = {
  '/a-propos': '/about',
  '/conditions-generales-de-vente': '/terms-of-sale',
  '/mentions-legales': '/legal-notice',
  '/confidentialite': '/privacy',
  '/plan-du-site': '/sitemap',
  '/organisme-de-formation': '/training-provider',
  '/accessibilite-et-handicap': '/accessibility',
  '/alatere-forma/intelligence-artificielle': '/alatere-forma/artificial-intelligence',
  '/alatere-forma/langues': '/alatere-forma/languages',
  '/alatere-forma/communication-digitale': '/alatere-forma/digital-communication',
  '/alatere-forma/immobilier': '/alatere-forma/real-estate',
  '/alatere-forma/formateurs': '/alatere-forma/trainers',
};

/** Correspondance inverse : chemin EN nu → chemin FR. */
export const FR_FROM_EN: Record<string, string> = Object.fromEntries(
  Object.entries(EN_SLUG).map(([fr, en]) => [en, fr]),
);

/** Chemin EN nu (sans /en) à partir d'un chemin FR. */
export function toEnLocalized(frPath: string): string {
  return EN_SLUG[frPath] ?? frPath;
}

/** Chemin FR à partir d'un chemin EN nu (sans /en). */
export function frFromEnLocalized(enLocalized: string): string {
  return FR_FROM_EN[enLocalized] ?? enLocalized;
}

/** URL EN complète (avec /en + slug localisé) à partir d'un chemin FR. */
export function enPath(frPath: string): string {
  const loc = toEnLocalized(frPath);
  return loc === '/' ? '/en' : `/en${loc}`;
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
