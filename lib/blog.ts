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
};

export const posts: Post[] = [
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
