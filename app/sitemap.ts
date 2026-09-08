import type { MetadataRoute } from 'next';
import { enPath } from '@/lib/i18n';
import { REALISATIONS_READY } from '@/lib/realisations';
import { publishedPosts } from '@/lib/blog';

const BASE = 'https://www.alatere-web.com';

/** Pages disponibles en FR (racine) et EN (/en) → hreflang réciproques. */
const BILINGUAL = [
  '',
  // Publiée seulement quand les vraies études de cas sont saisies (cf. lib/realisations.ts).
  ...(REALISATIONS_READY ? ['/clients-et-realisations'] : []),
  '/alatere-ecom',
  '/alatere-ecom/partenaires',
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
  '/blog',
  // Les articles sont ajoutés depuis lib/blog.ts : seuls ceux dont la date de
  // diffusion est passée y figurent (cf. publishedPosts).
  ...publishedPosts('en').map((p) => `/blog/${p.slug}`),
];

/** Pages FR uniquement (todo, mentions/confidentialité noindex). */
const FR_ONLY = [
  '/alatere-todo.html',
  // Articles publiés en français uniquement (frOnly dans lib/blog.ts), diffusés.
  ...publishedPosts('fr')
    .filter((p) => p.frOnly)
    .map((p) => `/blog/${p.slug}`),
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
