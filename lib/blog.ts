/**
 * Registre des articles du blog (« Ressources »).
 * Chaque article a sa propre route sous app/blog/<slug>/ (FR) et app/en/blog/<slug>/ (EN) ;
 * ce fichier sert à l'index, au sitemap et aux données structurées.
 */
import type { PoleBrand } from '@/components/grommet/BrandName';
import type { Lang } from '@/components/grommet/lang';

/** Champ de contenu bilingue FR/EN. */
export type Bi = { fr: string; en: string };

export type Post = {
  slug: string;
  pole: PoleBrand; // pôle associé (titre coloré dans l'en-tête)
  title: Bi; // titre de l'article (H1)
  metaTitle: Bi; // <title> SEO
  excerpt: Bi; // chapô / meta description
  keyword: Bi; // mot-clé cible
  category: Bi;
  date: string; // ISO - publication
  updated: string; // ISO - dernière mise à jour
  readingMin: number;
  author?: { name: string; url: string; bio?: Bi }; // auteur nommé (E-E-A-T) - sinon Alatere Web
};

/** Article avec les champs de contenu résolus dans une langue (chaînes simples). */
export type LocalPost = {
  slug: string;
  pole: PoleBrand;
  title: string;
  metaTitle: string;
  excerpt: string;
  keyword: string;
  category: string;
  date: string;
  updated: string;
  readingMin: number;
  author?: { name: string; url: string; bio?: string };
};

export const posts: Post[] = [
  {
    slug: '4-piliers-ecommerce-durable',
    pole: 'ecom',
    title: {
      fr: "Les 4 piliers d'une activité e-commerce qui dure : 20 ans de leçons terrain",
      en: 'The 4 pillars of a lasting e-commerce business: 20 years of hands-on lessons',
    },
    metaTitle: {
      fr: "Les 4 piliers d'une activité e-commerce qui dure | Alatere ecoM",
      en: 'The 4 pillars of a lasting e-commerce business | Alatere ecoM',
    },
    excerpt: {
      fr: "Produit, site, communication, service client : les 4 piliers d'un e-commerce durable, expliqués par un e-commerçant actif depuis 2003 (Repro-Tableaux.com, Copia-di-Arte.com) et illustrés par 20 ans d'avis clients vérifiés.",
      en: 'Product, website, marketing, customer service: the 4 pillars of a lasting e-commerce business, explained by an online retailer active since 2003 (Repro-Tableaux.com, Copia-di-Arte.com) and illustrated by 20 years of verified customer reviews.',
    },
    keyword: { fr: 'piliers du e-commerce', en: 'pillars of e-commerce' },
    category: { fr: 'E-commerce', en: 'E-commerce' },
    date: '2026-07-08',
    updated: '2026-07-08',
    readingMin: 7,
    author: {
      name: 'Jean-Gérard Anfossi',
      url: 'https://www.linkedin.com/in/jeangerardanfossi/',
      bio: {
        fr: "Jean-Gérard Anfossi dirige Alatere Web à Antibes (pôle Alatere ecoM). E-commerçant depuis septembre 2003, il conçoit et opère ses propres boutiques d'art en ligne, Repro-Tableaux.com et Copia-di-Arte.com.",
        en: 'Jean-Gérard Anfossi runs Alatere Web in Antibes (Alatere ecoM division). An online retailer since September 2003, he designs and operates his own online art shops, Repro-Tableaux.com and Copia-di-Arte.com.',
      },
    },
  },
  {
    slug: 'coworking-antibes-journee',
    pole: 'cowo',
    title: {
      fr: 'Coworking à la journée à Antibes : où travailler quand on est de passage',
      en: "Day-pass coworking in Antibes: where to work when you're passing through",
    },
    metaTitle: {
      fr: 'Coworking à la journée à Antibes - pass dès 30 € | Alatere coWo',
      en: 'Day-pass coworking in Antibes - from €30 | Alatere coWo',
    },
    excerpt: {
      fr: "Travailler à Antibes le temps d'une journée ? Pass coworking à 30 €, café et fibre inclus, à deux pas du port Vauban. Sans engagement - réservez votre poste.",
      en: "Working in Antibes just for the day? A €30 coworking day pass, coffee and fibre included, a stone's throw from Port Vauban. No commitment - book your desk.",
    },
    keyword: { fr: 'coworking Antibes à la journée', en: 'day-pass coworking Antibes' },
    category: { fr: 'Coworking', en: 'Coworking' },
    date: '2026-06-23',
    updated: '2026-06-23',
    readingMin: 4,
    author: {
      name: 'Jean-Gérard Anfossi',
      url: 'https://www.linkedin.com/in/jeangerardanfossi/',
      bio: {
        fr: "Jean-Gérard Anfossi dirige Alatere Web à Antibes. Il y conçoit et opère ses propres sites e-commerce et anime l'espace de coworking Alatere coWo, à deux pas du port Vauban.",
        en: 'Jean-Gérard Anfossi runs Alatere Web in Antibes. There he designs and operates his own e-commerce sites and runs the Alatere coWo coworking space, a stone’s throw from Port Vauban.',
      },
    },
  },
  {
    slug: 'financer-formation-opco-faf',
    pole: 'forma',
    title: {
      fr: 'Financer sa formation professionnelle : OPCO et FAF expliqués',
      en: 'Funding your professional training: OPCO and FAF explained',
    },
    metaTitle: {
      fr: 'Financer sa formation : OPCO et FAF (guide 2026)',
      en: 'Funding your training: OPCO and FAF (2026 guide)',
    },
    excerpt: {
      fr: 'OPCO pour les salariés, FAF pour les travailleurs non-salariés : à quoi sert chaque dispositif, qui peut en bénéficier et comment faire financer sa formation sans reste à charge.',
      en: 'OPCO for employees, FAF for the self-employed: what each scheme is for, who qualifies, and how to get your training funded with nothing to pay out of pocket.',
    },
    keyword: { fr: 'financer sa formation professionnelle', en: 'funding professional training' },
    category: { fr: 'Formation', en: 'Training' },
    date: '2026-06-17',
    updated: '2026-06-17',
    readingMin: 6,
    author: {
      name: 'Jean-Gérard Anfossi',
      url: 'https://www.linkedin.com/in/jeangerardanfossi/',
      bio: {
        fr: "Jean-Gérard Anfossi dirige Alatere Web à Antibes, dont la marque Alatere forMa est l'organisme de formation professionnelle certifié Qualiopi (n° 93.06.07588.06).",
        en: 'Jean-Gérard Anfossi runs Alatere Web in Antibes, whose Alatere forMa brand is its Qualiopi-certified professional training organisation (no. 93.06.07588.06).',
      },
    },
  },
  {
    slug: 'coworking-antibes-guide',
    pole: 'cowo',
    title: {
      fr: 'Coworking à Antibes : avantages, formules et comment choisir',
      en: 'Coworking in Antibes: benefits, plans and how to choose',
    },
    metaTitle: {
      fr: 'Coworking à Antibes : guide complet (formules & avantages)',
      en: 'Coworking in Antibes: complete guide (plans & benefits)',
    },
    excerpt: {
      fr: "Pour qui, à quel prix, avec quels services : le guide pour choisir un espace de coworking à Antibes adapté à votre activité.",
      en: "Who it's for, at what price and with which services: the guide to choosing a coworking space in Antibes suited to your business.",
    },
    keyword: { fr: 'coworking à Antibes', en: 'coworking in Antibes' },
    category: { fr: 'Coworking', en: 'Coworking' },
    date: '2026-06-17',
    updated: '2026-06-17',
    readingMin: 5,
    author: {
      name: 'Jean-Gérard Anfossi',
      url: 'https://www.linkedin.com/in/jeangerardanfossi/',
      bio: {
        fr: "Jean-Gérard Anfossi dirige Alatere Web à Antibes. Il y conçoit et opère ses propres sites e-commerce et anime l'espace de coworking Alatere coWo, à deux pas du port Vauban.",
        en: 'Jean-Gérard Anfossi runs Alatere Web in Antibes. There he designs and operates his own e-commerce sites and runs the Alatere coWo coworking space, a stone’s throw from Port Vauban.',
      },
    },
  },
  {
    slug: 'domiciliation-ou-bureau-antibes',
    pole: 'domo',
    title: {
      fr: 'Domiciliation ou location de bureau : que choisir à Antibes ?',
      en: 'Business address or office rental: which to choose in Antibes?',
    },
    metaTitle: {
      fr: 'Domiciliation ou bureau à Antibes : comment choisir ?',
      en: 'Business address or office in Antibes: how to choose?',
    },
    excerpt: {
      fr: 'Coûts, flexibilité, image, services : comparatif entre la domiciliation d’entreprise et la location de bureau pour votre siège à Antibes.',
      en: 'Cost, flexibility, image, services: a comparison between a registered business address and renting an office for your head office in Antibes.',
    },
    keyword: {
      fr: 'domiciliation ou location de bureau',
      en: 'business address or office rental',
    },
    category: { fr: 'Domiciliation', en: 'Business address' },
    date: '2026-06-17',
    updated: '2026-06-17',
    readingMin: 5,
    author: {
      name: 'Jean-Gérard Anfossi',
      url: 'https://www.linkedin.com/in/jeangerardanfossi/',
      bio: {
        fr: "Jean-Gérard Anfossi dirige Alatere Web à Antibes, où il opère le service de domiciliation d'entreprise Alatere doMo, agréé par la préfecture, à deux pas du port Vauban.",
        en: 'Jean-Gérard Anfossi runs Alatere Web in Antibes, where he operates the Alatere doMo business-address service, approved by the préfecture, a stone’s throw from Port Vauban.',
      },
    },
  },
  {
    slug: 'domicilier-entreprise-antibes',
    pole: 'domo',
    title: {
      fr: "Comment domicilier son entreprise à Antibes : le guide complet",
      en: "How to register your company's address in Antibes: the complete guide",
    },
    metaTitle: {
      fr: "Domicilier son entreprise à Antibes : guide complet (2026)",
      en: 'Registering your company address in Antibes: complete guide (2026)',
    },
    excerpt: {
      fr: "Étapes, documents, prix et avantages : tout ce qu'il faut savoir pour domicilier le siège social de votre entreprise à Antibes.",
      en: "Steps, documents, prices and benefits: everything you need to know to register your company's head office address in Antibes.",
    },
    keyword: {
      fr: "domicilier son entreprise à Antibes",
      en: 'register a company address in Antibes',
    },
    category: { fr: 'Domiciliation', en: 'Business address' },
    date: '2026-06-17',
    updated: '2026-06-17',
    readingMin: 6,
    author: {
      name: 'Jean-Gérard Anfossi',
      url: 'https://www.linkedin.com/in/jeangerardanfossi/',
      bio: {
        fr: "Jean-Gérard Anfossi dirige Alatere Web à Antibes, où il opère le service de domiciliation d'entreprise Alatere doMo, agréé par la préfecture, à deux pas du port Vauban.",
        en: 'Jean-Gérard Anfossi runs Alatere Web in Antibes, where he operates the Alatere doMo business-address service, approved by the préfecture, a stone’s throw from Port Vauban.',
      },
    },
  },
];

/** Résout les champs bilingues d'un article dans une langue donnée. */
export function localizePost(post: Post, lang: Lang): LocalPost {
  return {
    slug: post.slug,
    pole: post.pole,
    date: post.date,
    updated: post.updated,
    readingMin: post.readingMin,
    title: post.title[lang],
    metaTitle: post.metaTitle[lang],
    excerpt: post.excerpt[lang],
    keyword: post.keyword[lang],
    category: post.category[lang],
    author: post.author
      ? { name: post.author.name, url: post.author.url, bio: post.author.bio?.[lang] }
      : undefined,
  };
}

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

const MONTHS_FR = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
];

const MONTHS_EN = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/** Formate une date ISO (AAAA-MM-JJ) en français : « 8 juillet 2026 ». */
export function formatFrDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS_FR[m - 1]} ${y}`;
}

/** Formate une date ISO selon la langue : FR « 8 juillet 2026 », EN « July 8, 2026 ». */
export function formatDate(iso: string, lang: Lang) {
  if (lang === 'fr') return formatFrDate(iso);
  const [y, m, d] = iso.split('-').map(Number);
  return `${MONTHS_EN[m - 1]} ${d}, ${y}`;
}
