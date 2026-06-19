import type { MetadataRoute } from 'next';

const BASE = 'https://www.alatere-web.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/alatere-ecom',
    '/alatere-forma',
    '/alatere-domo',
    '/alatere-cowo',
    '/alatere-todo.html',
    '/a-propos',
    '/organisme-de-formation',
    '/blog',
    '/blog/domicilier-entreprise-antibes',
    '/blog/financer-formation-opco-faf',
    '/blog/coworking-antibes-guide',
    '/blog/domiciliation-ou-bureau-antibes',
    '/contact',
    '/accessibilite-et-handicap',
    '/conditions-generales-de-vente',
    '/mentions-legales',
    '/confidentialite',
    '/plan-du-site',
  ];

  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency: path === '' ? 'monthly' : 'yearly',
    priority: path === '' ? 1 : 0.7,
  }));
}
