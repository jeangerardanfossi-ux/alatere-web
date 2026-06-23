/**
 * Registre des articles du blog (« Ressources »).
 * Chaque article a sa propre route sous app/blog/<slug>/ ; ce fichier sert
 * à l'index, au sitemap et aux données structurées.
 */
import type { PoleBrand } from '@/components/grommet/BrandName';

export type Post = {
  slug: string;
  pole: PoleBrand; // pôle associé (titre coloré dans l'en-tête)
  title: string; // titre de l'article (H1)
  metaTitle: string; // <title> SEO
  excerpt: string; // chapô / meta description
  keyword: string; // mot-clé cible
  category: string;
  date: string; // ISO — publication
  updated: string; // ISO — dernière mise à jour
  readingMin: number;
  author?: { name: string; url: string; bio?: string }; // auteur nommé (E-E-A-T) — sinon Alatere Web
};

export const posts: Post[] = [
  {
    slug: 'coworking-antibes-journee',
    pole: 'cowo',
    title: 'Coworking à la journée à Antibes : où travailler quand on est de passage',
    metaTitle: 'Coworking à la journée à Antibes — pass dès 30 € | Alatere coWo',
    excerpt:
      "Travailler à Antibes le temps d'une journée ? Pass coworking à 30 €, café et fibre inclus, à deux pas du port Vauban. Sans engagement — réservez votre poste.",
    keyword: 'coworking Antibes à la journée',
    category: 'Coworking',
    date: '2026-07-08',
    updated: '2026-07-08',
    readingMin: 4,
    author: {
      name: 'Jean-Gérard Anfossi',
      url: 'https://www.linkedin.com/in/jeangerardanfossi/',
      bio: "Jean-Gérard Anfossi dirige Alatere Web à Antibes. Il y conçoit et opère ses propres sites e-commerce et anime l'espace de coworking Alatere coWo, à deux pas du port Vauban.",
    },
  },
  {
    slug: 'financer-formation-opco-faf',
    pole: 'forma',
    title: 'Financer sa formation professionnelle : OPCO et FAF expliqués',
    metaTitle: 'Financer sa formation : OPCO et FAF (guide 2026)',
    excerpt:
      'OPCO pour les salariés, FAF pour les travailleurs non-salariés : à quoi sert chaque dispositif, qui peut en bénéficier et comment faire financer sa formation sans reste à charge.',
    keyword: 'financer sa formation professionnelle',
    category: 'Formation',
    date: '2026-06-17',
    updated: '2026-06-17',
    readingMin: 6,
  },
  {
    slug: 'coworking-antibes-guide',
    pole: 'cowo',
    title: 'Coworking à Antibes : avantages, formules et comment choisir',
    metaTitle: 'Coworking à Antibes : guide complet (formules & avantages)',
    excerpt:
      "Pour qui, à quel prix, avec quels services : le guide pour choisir un espace de coworking à Antibes adapté à votre activité.",
    keyword: 'coworking à Antibes',
    category: 'Coworking',
    date: '2026-06-17',
    updated: '2026-06-17',
    readingMin: 5,
  },
  {
    slug: 'domiciliation-ou-bureau-antibes',
    pole: 'domo',
    title: 'Domiciliation ou location de bureau : que choisir à Antibes ?',
    metaTitle: 'Domiciliation ou bureau à Antibes : comment choisir ?',
    excerpt:
      'Coûts, flexibilité, image, services : comparatif entre la domiciliation d’entreprise et la location de bureau pour votre siège à Antibes.',
    keyword: 'domiciliation ou location de bureau',
    category: 'Domiciliation',
    date: '2026-06-17',
    updated: '2026-06-17',
    readingMin: 5,
  },
  {
    slug: 'domicilier-entreprise-antibes',
    pole: 'domo',
    title: "Comment domicilier son entreprise à Antibes : le guide complet",
    metaTitle: "Domicilier son entreprise à Antibes : guide complet (2026)",
    excerpt:
      "Étapes, documents, prix et avantages : tout ce qu'il faut savoir pour domicilier le siège social de votre entreprise à Antibes.",
    keyword: "domicilier son entreprise à Antibes",
    category: 'Domiciliation',
    date: '2026-06-17',
    updated: '2026-06-17',
    readingMin: 6,
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

const MONTHS_FR = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
];

/** Formate une date ISO (AAAA-MM-JJ) en français : « 8 juillet 2026 ». */
export function formatFrDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS_FR[m - 1]} ${y}`;
}
