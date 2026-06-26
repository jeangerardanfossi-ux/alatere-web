import type { MetadataRoute } from 'next';
import { enPath } from '@/lib/i18n';

const BASE = 'https://www.alatere-web.com';

/** Pages disponibles en FR (racine) et EN (/en) → hreflang réciproques. */
const BILINGUAL = [
  '',
  '/alatere-ecom',
  '/alatere-forma',
  '/alatere-forma/webmarketing',
  '/alatere-forma/intelligence-artificielle',
  '/alatere-forma/langues',
  '/alatere-forma/communication-digitale',
  '/alatere-forma/immobilier',
  '/alatere-forma/formateurs',
  '/alatere-domo',
  '/alatere-cowo',
  '/contact',
  '/a-propos',
  '/organisme-de-formation',
  '/accessibilite-et-handicap',
  '/conditions-generales-de-vente',
  '/plan-du-site',
];

/** Pages FR uniquement (non traduites : blog long-format, todo, mentions/confidentialité noindex). */
const FR_ONLY = [
  '/alatere-todo.html',
  '/blog',
  '/blog/domicilier-entreprise-antibes',
  '/blog/financer-formation-opco-faf',
  '/blog/coworking-antibes-journee',
  '/blog/coworking-antibes-guide',
  '/blog/domiciliation-ou-bureau-antibes',
];

const frUrl = (p: string) => `${BASE}${p}`;
const enUrl = (p: string) => `${BASE}${enPath(p)}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const p of BILINGUAL) {
    const languages = { 'fr-FR': frUrl(p), en: enUrl(p), 'x-default': frUrl(p) };
    const priority = p === '' ? 1 : 0.7;
    const changeFrequency = p === '' ? ('monthly' as const) : ('yearly' as const);
    entries.push({ url: frUrl(p), lastModified, changeFrequency, priority, alternates: { languages } });
    entries.push({
      url: enUrl(p),
      lastModified,
      changeFrequency,
      priority: priority * 0.9,
      alternates: { languages },
    });
  }

  for (const p of FR_ONLY) {
    entries.push({ url: frUrl(p), lastModified, changeFrequency: 'yearly', priority: 0.6 });
  }

  return entries;
}
