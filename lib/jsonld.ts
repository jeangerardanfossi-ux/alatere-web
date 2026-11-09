import { company } from './site';
import {
  faqPairs,
  homeFaqTx,
  domoFaqTx,
  formaFaqTx,
  ecomFaqTx,
  cowoFaqTx,
  type FaqDict,
} from './faq';
import { FORMA_DOMAINS } from './forma-domains';
import { enPath } from './i18n';

const SITE_URL = 'https://www.alatere-web.com';

/** Date de dernière mise à jour du contenu forMa (signal de fraîcheur AI SEO). */
export const CONTENT_UPDATED = '2026-06-25';

const address = {
  '@type': 'PostalAddress',
  streetAddress: company.address,
  postalCode: company.postalCode,
  addressLocality: company.city,
  addressCountry: 'FR',
};

const geo = {
  '@type': 'GeoCoordinates',
  latitude: 43.5793777,
  longitude: 7.122309,
};

/** Jours ouvrés - les trois entités locales sont fermées le week-end. */
const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

/**
 * Horaires d'ouverture. Doivent refléter les horaires affichés sur la page :
 * accueil / contact 9 h - 18 h, retrait du courrier doMo 9 h - 17 h.
 */
const openingHours = (opens: string, closes: string) => [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: WEEKDAYS,
    opens,
    closes,
  },
];

/**
 * Offre tarifaire. `per` exprime un prix récurrent ('MON' = par mois,
 * 'DAY' = par jour, codes UN/CEFACT) ; sans `per`, c'est un forfait unique.
 * `vatIncluded` doit suivre l'affichage de la page : doMo annonce des prix HT,
 * coWo des prix TTC.
 */
function offer(opts: {
  name: string;
  price: number;
  vatIncluded: boolean;
  per?: 'MON' | 'DAY';
  url?: string;
  availability?: 'InStock' | 'SoldOut';
}) {
  const { name, price, vatIncluded, per, url, availability = 'InStock' } = opts;
  return {
    '@type': 'Offer',
    name,
    availability: `https://schema.org/${availability}`,
    ...(url ? { url } : {}),
    priceSpecification: {
      '@type': per ? 'UnitPriceSpecification' : 'PriceSpecification',
      price,
      priceCurrency: 'EUR',
      valueAddedTaxIncluded: vatIncluded,
      ...(per
        ? {
            referenceQuantity: {
              '@type': 'QuantitativeValue',
              value: 1,
              unitCode: per,
            },
          }
        : {}),
    },
  };
}

export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.legalName,
  url: SITE_URL,
  // E-mail volontairement omis des données structurées (anti-spam) :
  // le téléphone, l'adresse et le formulaire de contact suffisent.
  telephone: company.phone,
  foundingDate: String(company.since),
  address,
  // Profils officiels (réseaux + fiches Google Business) - graphe d'entité pour l'IA.
  sameAs: [
    company.facebook,
    company.linkedin,
    company.facebookDomo,
    company.linkedinDomo,
    company.mapsForma,
    company.mapsDomo,
    company.mapsCowo,
    company.mapsEcom,
  ],
};

export const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Alatere Web',
  url: SITE_URL,
  image: `${SITE_URL}/logo-alatere.png`,
  telephone: company.phone,
  priceRange: '€€',
  address,
  geo,
  areaServed: 'Côte d’Azur, Alpes-Maritimes',
  // Horaires affichés sur /contact (ContactPage : « 9h - 18h »).
  openingHoursSpecification: openingHours('09:00', '18:00'),
  sameAs: [company.facebook, company.linkedin, company.mapsForma],
};

/** Alatere doMo - domiciliation (entité locale dédiée). */
export const domoLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: "Alatere doMo - Domiciliation d'entreprise à Antibes",
  url: `${SITE_URL}/alatere-domo`,
  telephone: company.phone,
  priceRange: '€€',
  address,
  geo,
  areaServed: ['Antibes', 'Juan-les-Pins', 'Sophia Antipolis', 'Mougins', 'Vallauris', 'Biot', 'Alpes-Maritimes'],
  // Retrait du courrier à l'accueil : lundi - vendredi, 9 h - 17 h (cf. DomoPage).
  openingHoursSpecification: openingHours('09:00', '17:00'),
  // Tarifs affichés sur /alatere-domo - prix HT, frais de dossier inclus au catalogue.
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Formules de domiciliation',
    itemListElement: [
      offer({ name: 'Dropbox - boîte aux lettres', price: 25, vatIncluded: false, per: 'MON' }),
      offer({ name: 'Headquarters - adresse de siège social', price: 30, vatIncluded: false, per: 'MON' }),
      offer({ name: 'Forward - numérisation et réexpédition', price: 50, vatIncluded: false, per: 'MON' }),
      offer({ name: 'Frais de dossier (une seule fois, à l’ouverture)', price: 50, vatIncluded: false }),
    ],
  },
  sameAs: [company.mapsDomo, company.facebookDomo, company.linkedinDomo],
};

/** Alatere coWo - coworking (entité locale dédiée). */
export const cowoLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Alatere coWo - Espace de coworking à Antibes',
  url: `${SITE_URL}/alatere-cowo`,
  telephone: company.phone,
  priceRange: '€€',
  address,
  geo,
  areaServed: 'Antibes, Alpes-Maritimes, Côte d’Azur',
  // Accès à l'espace 9 h - 18 h du lundi au vendredi ; les abonnés mensuels
  // disposent d'un badge 24 h/24 (non exprimable en OpeningHoursSpecification).
  openingHoursSpecification: openingHours('09:00', '18:00'),
  // Tarifs affichés sur /alatere-cowo - prix TTC.
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Formules de coworking',
    itemListElement: [
      offer({ name: 'Pass journée', price: 30, vatIncluded: true, per: 'DAY' }),
      offer({ name: 'Abonnement mensuel open-space', price: 360, vatIncluded: true, per: 'MON' }),
      offer({
        name: 'Bureau privatif',
        price: 72,
        vatIncluded: true,
        per: 'DAY',
        availability: 'SoldOut',
      }),
      offer({ name: 'Salle de réunion - journée', price: 180, vatIncluded: true, per: 'DAY' }),
      offer({ name: 'Salle de réunion - fin de journée (après 16 h)', price: 80, vatIncluded: true }),
    ],
  },
  sameAs: [company.mapsCowo, company.facebookDomo, company.linkedinDomo],
};

export const educationalOrganizationLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Alatere Web SAS',
  alternateName: 'Alatere forMa',
  url: `${SITE_URL}/alatere-forma`,
  telephone: company.phone,
  address,
  description:
    'Organisme de formation professionnelle certifié Qualiopi à Antibes : formation IA, ' +
    'webmarketing, anglais professionnel, communication digitale et immobilier. ' +
    'Enregistré sous le n° ' +
    company.formationNumber +
    '.',
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Certification Qualiopi',
  },
  sameAs: [company.mapsForma, company.facebook, company.linkedin],
};

/**
 * Intitulés qualifiés « formation » : ce sont des noms de `Course`, pas des
 * domaines d'activité - ils doivent lever l'ambiguïté avec le pôle agence.
 * Clés = slugs de FORMA_DOMAINS, pour que noms, ordre et URL restent en phase.
 */
const COURSE_NAMES: Record<string, { fr: string; en: string }> = {
  webmarketing: { fr: 'Formation webmarketing', en: 'Web marketing training' },
  'intelligence-artificielle': {
    fr: 'Formation IA (intelligence artificielle)',
    en: 'AI (artificial intelligence) training',
  },
  langues: {
    fr: 'Anglais professionnel et langues',
    en: 'Business English and languages',
  },
  'communication-digitale': {
    fr: 'Formation communication digitale',
    en: 'Digital communication training',
  },
  immobilier: { fr: 'Formation immobilier', en: 'Real-estate training' },
};

/**
 * Catalogue `Course` de la page forMa, dans la langue de la page. Chaque cours
 * pointe vers sa sous-page « domaine », au slug localisé (`enPath`).
 */
export function coursesLd(lang: Lang = 'fr') {
  return FORMA_DOMAINS.map((d) => {
    const frPath = `/alatere-forma/${d.slug}`;
    const name = COURSE_NAMES[d.slug]?.[lang] ?? d.name[lang];
    return {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name,
      description:
        lang === 'en'
          ? `${name}: professional training delivered in Antibes or remotely by Alatere Web SAS (Alatere forMa brand), a Qualiopi-certified training provider.`
          : `${name} : formation professionnelle dispensée à Antibes ou à distance par Alatere Web SAS (marque Alatere forMa), organisme de formation certifié Qualiopi.`,
      url: `${SITE_URL}${lang === 'en' ? enPath(frPath) : frPath}`,
      inLanguage: LANG_TAG[lang],
      provider: {
        '@type': 'EducationalOrganization',
        name: 'Alatere Web SAS',
        url: `${langBase(lang)}/alatere-forma`,
      },
    };
  });
}

/** Course - sous-page « domaine » d'Alatere forMa (enrichi pour l'AI SEO). */
export function courseLd(opts: {
  name: string;
  description: string;
  path: string;
  /** Compétences enseignées (alimente le champ schema.org `teaches`). */
  teaches?: string[];
  /** Date ISO de dernière mise à jour du contenu (signal de fraîcheur). */
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    inLanguage: 'fr-FR',
    availableLanguage: ['fr', 'en'],
    isAccessibleForFree: false,
    ...(opts.teaches && opts.teaches.length ? { teaches: opts.teaches } : {}),
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Alatere Web SAS',
      alternateName: 'Alatere forMa',
      url: `${SITE_URL}/alatere-forma`,
      sameAs: [company.linkedin, company.facebook, company.mapsForma],
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['Onsite', 'Online'],
      location: {
        '@type': 'Place',
        name: 'Alatere forMa - Antibes',
        address,
      },
    },
  };
}

/** Person[] - formateurs d'Alatere forMa (entités + E-E-A-T via sameAs LinkedIn). */
export function formateursLd(people: { name: string; role: string; linkedin: string }[]) {
  return people.map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: p.name,
    jobTitle: p.role,
    worksFor: {
      '@type': 'EducationalOrganization',
      name: 'Alatere Web SAS',
      alternateName: 'Alatere forMa',
      url: `${SITE_URL}/alatere-forma`,
    },
    sameAs: [p.linkedin],
  }));
}

type Lang = 'fr' | 'en';
const LANG_TAG: Record<Lang, string> = { fr: 'fr-FR', en: 'en' };
/** Préfixe d'URL selon la langue (FR à la racine, EN sous /en). */
const langBase = (lang: Lang) => (lang === 'en' ? `${SITE_URL}/en` : SITE_URL);

/** Blog (page d'index « Ressources »). */
export function blogLd(lang: Lang = 'fr') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: lang === 'en' ? 'Resources - Alatere Web' : 'Ressources - Alatere Web',
    url: `${langBase(lang)}/blog`,
    inLanguage: LANG_TAG[lang],
    publisher: { '@type': 'Organization', name: company.legalName },
  };
}

/** Article de blog (BlogPosting). `post` est déjà résolu dans la langue voulue. */
export function blogPostingLd(
  post: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    updated: string;
    category: string;
    keyword: string;
    author?: { name: string; url: string };
  },
  lang: Lang = 'fr',
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updated,
    inLanguage: LANG_TAG[lang],
    author: post.author
      ? {
          '@type': 'Person',
          name: post.author.name,
          url: post.author.url,
          sameAs: [post.author.url],
        }
      : { '@type': 'Organization', name: 'Alatere Web', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: company.legalName,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo-alatere.png` },
    },
    mainEntityOfPage: `${langBase(lang)}/blog/${post.slug}`,
    articleSection: post.category,
    keywords: post.keyword,
  };
}

/** Schéma WebSite (reconnaissance d'entité). */
export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Alatere Web',
  url: SITE_URL,
  inLanguage: 'fr-FR',
  publisher: { '@type': 'Organization', name: company.legalName },
};

/** Fil d'Ariane structuré pour une sous-page. */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

/** FAQPage - le contenu DOIT refléter une FAQ visible sur la page. */
export function faqLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

/**
 * FAQPage des pages de pôle - construits depuis `lib/faq.ts`, qui alimente aussi
 * le rendu visible des mêmes questions. Le balisage reflète donc exactement la
 * FAQ affichée, dans la langue de la page : appeler avec 'en' sur /en/....
 */
const txFaqLd =
  (tx: FaqDict) =>
  (lang: Lang = 'fr') =>
    faqLd(faqPairs(tx, lang));

export const homeFaqLd = txFaqLd(homeFaqTx);
export const domoFaqLd = txFaqLd(domoFaqTx);
export const formaFaqLd = txFaqLd(formaFaqTx);
export const ecomFaqLd = txFaqLd(ecomFaqTx);
export const cowoFaqLd = txFaqLd(cowoFaqTx);

/**
 * FAQ d'articles de blog - bilingues. Le contenu DOIT refléter la FAQ visible
 * de l'article (même langue). Chaque export est une fonction de la langue.
 */
const biFaqLd =
  (fr: { q: string; a: string }[], en: { q: string; a: string }[]) =>
  (lang: Lang = 'fr') =>
    faqLd(lang === 'en' ? en : fr);

/** FAQ visible de l'article « coworking à Antibes : guide » (miroir du FAQPage). */
export const cowoGuideFaqLd = biFaqLd(
  [
    {
      q: "Qu'est-ce que le coworking ?",
      a: "Le coworking est un espace de travail partagé : on loue un poste, un bureau ou une salle, à la journée ou au mois, avec les services inclus (wifi fibre, café, salles de réunion). C'est une alternative souple au bureau classique et au travail à domicile.",
    },
    {
      q: 'Pour qui le coworking est-il intéressant ?',
      a: 'Pour les indépendants et freelances, les télétravailleurs en quête d’un cadre professionnel, les petites équipes et entreprises en création, ainsi que les professionnels de passage sur la Côte d’Azur.',
    },
    {
      q: 'Quelles formules de coworking existe-t-il à Antibes ?',
      a: "Pass à la journée pour un besoin ponctuel, abonnement mensuel en open-space pour un usage régulier, bureau privatif à l'année, et location de salle de réunion à la journée. Chez Alatere coWo, le pass journée est à 30 € TTC et l'abonnement mensuel à 360 € TTC.",
    },
    {
      q: 'Comment choisir son espace de coworking à Antibes ?',
      a: 'Regardez l’emplacement (proximité gare, port, parking), les services réellement inclus, la flexibilité des formules et de l’engagement, l’ambiance et la taille de la communauté, et les services annexes comme la domiciliation.',
    },
    {
      q: 'Peut-on domicilier son entreprise dans un espace de coworking ?',
      a: 'Oui. Chez Alatere coWo, vous pouvez domicilier le siège social de votre entreprise sur place via Alatere doMo, avec des conditions avantageuses pour les membres du coworking.',
    },
  ],
  [
    {
      q: 'What is coworking?',
      a: "Coworking is a shared workspace: you rent a desk, an office or a room, by the day or by the month, with services included (fibre wifi, coffee, meeting rooms). It's a flexible alternative to a conventional office and to working from home.",
    },
    {
      q: 'Who is coworking useful for?',
      a: 'For independent workers and freelancers, remote workers looking for a professional setting, small teams and start-ups, as well as professionals passing through the Côte d’Azur.',
    },
    {
      q: 'What coworking plans are available in Antibes?',
      a: 'A day pass for occasional needs, a monthly open-space subscription for regular use, a private office on a yearly basis, and meeting-room rental by the day. At Alatere coWo, the day pass is €30 incl. VAT and the monthly subscription €360 incl. VAT.',
    },
    {
      q: 'How do you choose a coworking space in Antibes?',
      a: 'Look at the location (proximity to the station, the port, parking), the services actually included, the flexibility of the plans and commitment, the atmosphere and size of the community, and add-on services such as a business address.',
    },
    {
      q: "Can you register your company's address at a coworking space?",
      a: "Yes. At Alatere coWo, you can register your company's head office on site through Alatere doMo, with favourable terms for coworking members.",
    },
  ],
);

/** FAQ visible de l'article « domiciliation ou bureau » (miroir du FAQPage). */
export const domoBureauFaqLd = biFaqLd(
  [
    {
      q: 'Quelle est la différence entre domiciliation et location de bureau ?',
      a: 'La domiciliation fournit une adresse de siège social et la gestion du courrier, sans espace de travail dédié. La location de bureau fournit un espace physique, mais avec un bail, des charges et un engagement. Le coworking est intermédiaire : un poste flexible, sans bail long.',
    },
    {
      q: 'Qu’est-ce qui coûte le moins cher, domiciliation ou bureau ?',
      a: 'La domiciliation, nettement : à partir de 30 € HT par mois chez Alatere doMo, contre un loyer plus charges pour un bureau. Le coworking se situe entre les deux.',
    },
    {
      q: 'Quand choisir la domiciliation plutôt qu’un bureau ?',
      a: "Si vous travaillez de chez vous ou en déplacement, que vous démarrez votre activité, ou que vous voulez une adresse professionnelle séparée de votre domicile à moindre coût. Elle convient aussi à un transfert de siège vers Antibes.",
    },
    {
      q: 'Peut-on combiner domiciliation et coworking ?',
      a: 'Oui, et c’est souvent le plus pratique : domicilier son siège et disposer d’un poste de coworking au même endroit, à Antibes. Alatere réunit domiciliation, coworking et secrétariat externalisé sous un seul interlocuteur.',
    },
  ],
  [
    {
      q: "What's the difference between a business address and renting an office?",
      a: 'A business address provides a registered head-office address and mail handling, with no dedicated workspace. Renting an office provides a physical space, but with a lease, charges and a commitment. Coworking sits in between: a flexible desk, without a long lease.',
    },
    {
      q: 'Which is cheaper, a business address or an office?',
      a: 'A business address, by far: from €30 excl. VAT per month at Alatere doMo, versus rent plus charges for an office. Coworking sits between the two.',
    },
    {
      q: 'When should you choose a business address rather than an office?',
      a: "If you work from home or on the move, are just starting out, or want a professional address separate from your home at low cost. It also suits a head-office transfer to Antibes.",
    },
    {
      q: 'Can you combine a business address and coworking?',
      a: 'Yes, and it’s often the most practical option: register your head office and have a coworking desk in the same place, in Antibes. Alatere brings together business address, coworking and outsourced secretarial services under a single point of contact.',
    },
  ],
);

/** FAQ visible de l'article « domicilier son entreprise à Antibes » (miroir du FAQPage). */
export const domicilierFaqLd = biFaqLd(
  [
    {
      q: "Qu'est-ce que la domiciliation d'entreprise ?",
      a: "Domicilier une entreprise, c'est lui attribuer une adresse de siège social officielle, distincte du domicile personnel. Cette adresse figure sur le Kbis, les factures et les documents légaux. Seule une société de domiciliation agréée par la préfecture peut délivrer l'attestation exigée par le greffe et le RCS.",
    },
    {
      q: "Combien coûte une domiciliation d'entreprise à Antibes ?",
      a: "Chez Alatere doMo : offre Dropbox (boîte aux lettres) à 25 € HT/mois, offre Headquarters (adresse de siège social) à 30 € HT/mois, offre Forward (numérisation et réexpédition incluses) à 50 € HT/mois, plus 50 € HT de frais de dossier réglés une seule fois à l'ouverture.",
    },
    {
      q: 'Quels documents faut-il pour domicilier son entreprise ?',
      a: 'Une pièce d’identité du dirigeant, un justificatif de domicile personnel récent, les statuts ou le Kbis pour une société déjà immatriculée, et un RIB pour le mandat de prélèvement. La liste exacte varie selon la forme juridique et la situation.',
    },
    {
      q: 'Combien de temps faut-il pour domicilier son entreprise ?',
      a: "Chez Alatere doMo, l'attestation de domiciliation est émise sous 24 à 48 heures une fois le dossier complet. L'adresse est utilisable dès l'attestation émise.",
    },
    {
      q: 'Peut-on transférer le siège d’une entreprise existante ?',
      a: 'Oui. La domiciliation s’accompagne d’un transfert de siège : nous vous aidons pour les formalités auprès du greffe et la mise à jour de vos statuts.',
    },
  ],
  [
    {
      q: 'What is company address registration (domiciliation)?',
      a: "Registering a company's address means giving it an official head-office address, separate from your personal home. This address appears on the Kbis, invoices and legal documents. Only a business-address company approved by the préfecture can issue the certificate required by the commercial court registry and the RCS.",
    },
    {
      q: 'How much does a business address in Antibes cost?',
      a: 'At Alatere doMo: the Dropbox plan (letterbox) at €25 excl. VAT/month, the Headquarters plan (head-office address) at €30 excl. VAT/month, the Forward plan (scanning and forwarding included) at €50 excl. VAT/month, plus a one-off €50 excl. VAT set-up fee at opening.',
    },
    {
      q: "What documents do you need to register a company's address?",
      a: 'Proof of ID for the director, a recent proof of personal address, the articles of association or the Kbis for an already-registered company, and bank details (RIB) for the direct-debit mandate. The exact list varies with the legal form and the situation.',
    },
    {
      q: "How long does it take to register a company's address?",
      a: 'At Alatere doMo, the business-address certificate is issued within 24 to 48 hours once the file is complete. The address can be used as soon as the certificate is issued.',
    },
    {
      q: 'Can you transfer the head office of an existing company?',
      a: 'Yes. A business address comes with a head-office transfer: we help you with the formalities at the court registry and with updating your articles of association.',
    },
  ],
);

/** FAQ visible de l'article « financer sa formation : OPCO et FAF » (miroir du FAQPage). */
export const financerFormationFaqLd = biFaqLd(
  [
    {
      q: 'Qui finance ma formation professionnelle ?',
      a: "Selon votre statut : l'OPCO (opérateur de compétences) pour les salariés, le FAF (Fonds d'Assurance Formation) pour les travailleurs non-salariés, et France Travail pour les demandeurs d'emploi.",
    },
    {
      q: 'Quelle différence entre OPCO et FAF ?',
      a: "L'OPCO finance la formation des salariés dans le cadre du plan de développement des compétences de l'employeur. Le FAF finance la formation continue des travailleurs non-salariés, indépendants et professions libérales (FIF PL, AGEFICE…), selon des plafonds annuels propres à chaque fonds.",
    },
    {
      q: 'Comment faire financer sa formation sans reste à charge ?',
      a: 'Obtenez un devis et un programme détaillé, identifiez votre financeur (OPCO de votre branche ou FAF des non-salariés), déposez la demande de prise en charge avant le début de la formation, obtenez l’accord, puis transmettez les justificatifs après la formation.',
    },
    {
      q: 'Faut-il un organisme certifié Qualiopi pour être financé ?',
      a: 'Oui. Seuls les organismes certifiés Qualiopi ouvrent droit aux financements publics et mutualisés (OPCO, FAF…). Alatere Web SAS (marque Alatere forMa) est certifié Qualiopi, enregistré sous le n° 93.06.07588.06.',
    },
    {
      q: 'Combien de temps prend un dossier de financement ?',
      a: 'Un dossier OPCO ou FAF demande souvent plusieurs semaines d’instruction. Chez Alatere forMa, le devis personnalisé est envoyé sous 48 heures et le démarrage intervient en moyenne sous 14 jours une fois le financement validé.',
    },
    {
      q: 'Je suis dirigeant et j’ai des salariés : qui finance quoi ?',
      a: 'Deux financeurs différents. Votre propre formation relève de votre FAF (FIFPL, AGEFICE ou FAFCEA) si vous êtes non-salarié ; celle de vos salariés relève de l’OPCO de votre entreprise. Une même formation suivie avec votre équipe peut donc être financée par deux dossiers.',
    },
    {
      q: 'Un micro-entrepreneur peut-il faire financer sa formation ?',
      a: 'Oui, par le FAF de son activité, à condition d’avoir déclaré un chiffre d’affaires et payé la contribution à la formation professionnelle (CFP). L’attestation est disponible sur l’espace URSSAF.',
    },
    {
      q: 'Le CPF peut-il compléter un financement OPCO ou FAF ?',
      a: 'Oui, pour une formation certifiante inscrite au RNCP ou au Répertoire spécifique : le CPF peut alors couvrir le reste à charge.',
    },
  ],
  [
    {
      q: 'Who funds my professional training?',
      a: 'It depends on your status: the OPCO (skills operator) for employees, the FAF (training insurance fund) for the self-employed, and France Travail for jobseekers.',
    },
    {
      q: "What's the difference between OPCO and FAF?",
      a: "The OPCO funds employee training as part of the employer's skills-development plan. The FAF funds the continuing training of the self-employed, sole traders and the liberal professions (FIF PL, AGEFICE, etc.), within annual ceilings specific to each fund.",
    },
    {
      q: 'How can you get your training funded with nothing to pay out of pocket?',
      a: "Get a quote and a detailed programme, identify your funder (your sector's OPCO or the self-employed FAF), submit the funding request before the training starts, obtain approval, then send the supporting documents after the training.",
    },
    {
      q: 'Do you need a Qualiopi-certified provider to get funding?',
      a: 'Yes. Only Qualiopi-certified providers give access to public and pooled funding (OPCO, FAF, etc.). Alatere Web SAS (Alatere forMa brand) is Qualiopi-certified, registered under no. 93.06.07588.06.',
    },
    {
      q: 'How long does a funding application take?',
      a: 'An OPCO or FAF application often takes several weeks to process. At Alatere forMa, the personalised quote is sent within 48 hours and training starts on average within 14 days once funding is approved.',
    },
  ],
);

/** FAQ visible de l'article « 4 piliers du e-commerce » (miroir du FAQPage). */
export const piliersEcomFaqLd = biFaqLd(
  [
    {
      q: "Quels sont les 4 piliers d'une activité e-commerce ?",
      a: "Une activité e-commerce durable repose sur quatre piliers : le produit (qualité de la confection à la livraison, emballage compris), le site internet (navigation, performance, conformité aux standards Google), la communication (ciblage, mesure du ROI, réajustement permanent) et le service client (satisfaction avant et après la commande). Ils sont interdépendants : négliger l'un affaiblit les trois autres.",
    },
    {
      q: 'Par quel pilier faut-il commencer quand on lance une boutique en ligne ?',
      a: "Par le produit. Un article irréprochable, bien emballé et livré dans les délais est la condition de base : sans lui, ni la meilleure publicité ni le meilleur service client ne suffisent à fidéliser. Une fois le produit maîtrisé, on solidifie le site, puis on active la communication, en gardant le service client présent à chaque étape.",
    },
    {
      q: 'Le e-commerce a-t-il vraiment changé depuis les années 2000 ?',
      a: "Les outils, oui, radicalement ; les fondamentaux, non. En 2003, il n'existait ni réseaux sociaux, ni retargeting, ni IA, et Google AdWords démarrait tout juste. Aujourd'hui s'ajoutent l'AI SEO, la publicité programmatique et l'analyse de données en temps réel. Les quatre piliers, eux, sont restés identiques.",
    },
    {
      q: "Comment l'intelligence artificielle transforme-t-elle le e-commerce en 2026 ?",
      a: "L'IA agit surtout sur le pilier communication : elle déplace l'enjeu du référencement classique vers l'AI SEO, c'est-à-dire être cité comme source dans les réponses de ChatGPT, Perplexity, Google AI Overviews ou Claude. Elle transforme aussi la relation client (assistance, recommandations) et la production de contenu. Mais elle ne remplace pas la qualité produit ni un service client humain.",
    },
    {
      q: "Pourquoi le service client est-il un pilier et pas un simple « détail » ?",
      a: "Parce qu'il agit avant la vente (lever les doutes, conseiller sur le bon support ou format) autant qu'après (traiter un incident). Sur des produits fabriqués sur mesure, c'est souvent le service client qui transforme une réclamation en preuve de fiabilité, et un acheteur ponctuel en client fidèle.",
    },
  ],
  [
    {
      q: 'What are the 4 pillars of an e-commerce business?',
      a: 'A lasting e-commerce business rests on four pillars: the product (quality from crafting to delivery, packaging included), the website (navigation, performance, compliance with Google standards), marketing (targeting, ROI measurement, constant readjustment) and customer service (satisfaction before and after the order). They are interdependent: neglecting one weakens the other three.',
    },
    {
      q: 'Which pillar should you start with when launching an online shop?',
      a: 'The product. A flawless item, well packaged and delivered on time, is the baseline: without it, neither the best advertising nor the best customer service is enough to build loyalty. Once the product is mastered, strengthen the website, then activate marketing, keeping customer service present at every step.',
    },
    {
      q: 'Has e-commerce really changed since the 2000s?',
      a: 'In its tools, yes, radically; in its fundamentals, no. In 2003 there were no social networks, no retargeting, no AI, and Google AdWords was just getting started. Today AI SEO, programmatic advertising and real-time data analysis have been added. The four pillars, though, have stayed the same.',
    },
    {
      q: 'How is artificial intelligence transforming e-commerce in 2026?',
      a: 'AI mainly affects the marketing pillar: it shifts the focus from classic search rankings to AI SEO, meaning being cited as a source in the answers of ChatGPT, Perplexity, Google AI Overviews or Claude. It also transforms customer relations (assistance, recommendations) and content production. But it does not replace product quality or human customer service.',
    },
    {
      q: 'Why is customer service a pillar and not just a "detail"?',
      a: 'Because it acts before the sale (clearing up doubts, advising on the right medium or format) as much as after (handling an incident). With made-to-order products, it is often customer service that turns a complaint into proof of reliability, and a one-off buyer into a loyal customer.',
    },
  ],
);

/** FAQ visible de l'article « coworking à la journée » (miroir du FAQPage). */
export const cowoJourneeFaqLd = biFaqLd(
  [
    {
      q: 'Combien coûte une journée de coworking à Antibes ?',
      a: 'Le pass à la journée est à 30 € TTC chez Alatere coWo : un poste en open-space, café, fibre et Wi-Fi inclus, sans engagement.',
    },
    {
      q: 'Peut-on venir sans abonnement ?',
      a: "Oui. Le pass journée est sans engagement. Un appel ou un e-mail la veille permet de s'assurer qu'un poste est disponible le jour souhaité.",
    },
    {
      q: 'Y a-t-il le Wi-Fi et de quoi passer des appels ?',
      a: "Oui : fibre haut-débit et Wi-Fi sécurisé partout. Pour les appels et visios, la grande salle à bureau partagé sert de coin appels (casque recommandé) et le bar de la cuisine permet de s'isoler ; les salles fermées, en majorité louées à l'année, se réservent à l'avance.",
    },
    {
      q: 'Peut-on louer une salle de réunion juste pour la journée ?',
      a: "Oui, mais la disponibilité est limitée : la plupart de nos salles sont louées à l'année par des entreprises. Mieux vaut réserver quelques jours à l'avance. Tarif : 180 € TTC la journée, ou 80 € TTC en fin de journée (après 16 h).",
    },
    {
      q: "Où se situe l'espace et comment y accéder ?",
      a: 'Au 9 boulevard Albert 1er (immeuble La Caravelle), 06600 Antibes, à deux pas du port Vauban et à dix minutes à pied (700 m) de la gare SNCF.',
    },
    {
      q: 'Peut-on aussi y domicilier son entreprise ?',
      a: 'Oui, via Alatere doMo. Les membres du coworking profitent de conditions avantageuses sur la domiciliation.',
    },
  ],
  [
    {
      q: 'How much does a day of coworking in Antibes cost?',
      a: 'The day pass is €30 incl. VAT at Alatere coWo: an open-space desk, coffee, fibre and Wi-Fi included, with no commitment.',
    },
    {
      q: 'Can you come without a subscription?',
      a: 'Yes. The day pass has no commitment. A call or an email the day before is enough to make sure a desk is available on the day you want.',
    },
    {
      q: 'Is there Wi-Fi and somewhere to take calls?',
      a: 'Yes: high-speed fibre and secure Wi-Fi everywhere. For calls and video meetings, the large shared-desk room serves as a call corner (headset recommended) and the kitchen bar lets you step aside; the closed rooms, mostly rented by the year, are booked in advance.',
    },
    {
      q: 'Can you rent a meeting room just for the day?',
      a: "Yes, but availability is limited: most of our rooms are rented by the year by companies. It's best to book a few days ahead. Rate: €180 incl. VAT for the day, or €80 incl. VAT late in the day (after 4 pm).",
    },
    {
      q: 'Where is the space and how do you get there?',
      a: "At 9 boulevard Albert 1er (La Caravelle building), 06600 Antibes, a stone's throw from Port Vauban and a ten-minute walk (700 m) from the SNCF train station.",
    },
    {
      q: "Can you also register your company's address there?",
      a: 'Yes, through Alatere doMo. Coworking members enjoy favourable terms on the business address.',
    },
  ],
);
/* ------------------------------------------------------------------------- *
 * Article « Comparatif domiciliation Antibes » (bilingue FR/EN)
 * ------------------------------------------------------------------------- */

/**
 * FAQ visible de l'article « créer son entreprise à Antibes » (miroir du FAQPage).
 * Article publié en français uniquement : pas de version anglaise à baliser.
 */
export const creerEntrepriseFaqLd = faqLd([
  {
    q: 'Peut-on démarrer chez soi puis transférer le siège ?',
    a: "Oui. Le transfert de siège est une formalité modificative : décision de l'associé ou de l'assemblée, publication d'une annonce légale, dépôt au guichet unique. Elle a un coût et prend quelques jours. Si vous savez déjà que vous ne resterez pas à votre adresse personnelle, autant partir directement sur une adresse professionnelle.",
  },
  {
    q: 'Que se passe-t-il si je déménage hors du département ?',
    a: "Le transfert entraîne un changement de greffe. La procédure est la même, mais le dossier transite par le greffe d'origine vers le nouveau. Une adresse de domiciliation stable évite précisément cette formalité quand c'est vous qui déménagez, pas votre activité.",
  },
  {
    q: 'La domiciliation change-t-elle quelque chose à la CFE ?',
    a: "La cotisation foncière des entreprises est due dans la commune où vous disposez de locaux ou de terrains. Une adresse de domiciliation vous rattache à la commune du domiciliataire. Les modalités de calcul dépendent de votre situation : c'est un point à valider avec votre expert-comptable.",
  },
]);

/** FAQ visible de l'article comparatif (miroir exact du FAQPage, FR et EN). */
export const comparatifDomiciliationFaqLd = biFaqLd(
  [
    {
      q: "Quel est le prix d'une domiciliation d'entreprise à Antibes ?",
      a: "Parmi les prestataires dont le tarif est affiché publiquement, une adresse de siège social se situe entre 25 et 43 € HT par mois selon la formule et le statut juridique, et jusqu'à 45 € pour une société étrangère ; les offres de simple boîte aux lettres, qui ne permettent pas d'y domicilier un siège, démarrent également autour de 25 €. Plusieurs centres d'affaires ne publient pas leur grille. À ce montant s'ajoutent parfois des frais de dossier et des options facturées séparément : numérisation, réexpédition, gestion des recommandés.",
    },
    {
      q: 'Une société de domiciliation doit-elle être agréée par la préfecture ?',
      a: "Oui. La domiciliation d'entreprise est une activité réglementée : seule une société agréée peut délivrer l'attestation de domiciliation exigée par le greffe du tribunal de commerce. Demandez le numéro d'agrément avant de signer : une adresse fournie par un prestataire non agréé sera refusée au greffe.",
    },
    {
      q: "Quelle est la durée minimale d'un contrat de domiciliation ?",
      a: "Trois mois, renouvelable par tacite reconduction. Certains prestataires imposent un engagement plus long ou une facturation annuelle : c'est un point à vérifier avant de signer, en même temps que les conditions de sortie si vous transférez votre siège.",
    },
    {
      q: 'Vaut-il mieux domicilier à Antibes centre ou à Sophia Antipolis ?',
      a: "Le droit ne fait aucune différence, le signal commercial oui. Une adresse en centre-ville d'Antibes parle à une clientèle locale et facilite le passage pour récupérer le courrier. Une adresse à Sophia Antipolis associe votre entreprise à la technopole, ce qui compte pour une activité tech ou une levée de fonds.",
    },
    {
      q: 'Peut-on changer de société de domiciliation en cours de route ?',
      a: "Oui. C'est un transfert de siège social : décision de l'associé unique ou de l'assemblée, publication d'une annonce légale, dépôt au guichet unique de l'INPI. Comptez quelques jours et un coût de formalité. Vérifiez au préalable les conditions de résiliation de votre contrat en cours.",
    },
  ],
  [
    {
      q: 'How much does a registered business address in Antibes cost?',
      a: 'Among providers that publish their rates, a registered office costs between €25 and €43 excl. VAT per month depending on the package and legal form, and up to €45 for a foreign company; plain mailbox plans, which cannot host a registered office, also start at around €25. Several business centres do not publish a price list. Set-up fees and separately billed options (scanning, forwarding, registered-mail handling) are sometimes added on top.',
    },
    {
      q: 'Must a business-address provider be approved by the préfecture?',
      a: 'Yes. Providing a registered business address is a regulated activity: only an approved company can issue the certificate of domiciliation required by the commercial court registry. Ask for the approval number before signing: an address supplied by an unapproved provider will be rejected by the registry.',
    },
    {
      q: 'What is the minimum term of a domiciliation contract?',
      a: 'Three months, renewable by tacit agreement. Some providers impose a longer term or annual billing: check that before signing, along with the exit terms if you move your registered office.',
    },
    {
      q: 'Is it better to register in central Antibes or in Sophia Antipolis?',
      a: 'The law draws no distinction; the commercial signal does. A central Antibes address speaks to local clients and makes collecting mail easy. A Sophia Antipolis address associates your company with the technology park, which counts for a tech business or a fundraising round.',
    },
    {
      q: 'Can you change business-address provider along the way?',
      a: 'Yes. It is a transfer of registered office: a decision by the sole shareholder or the general meeting, publication of a legal notice, and filing with the INPI one-stop shop. Allow a few days and a formality fee. Check the cancellation terms of your current contract first.',
    },
  ],
);

/**
 * Liste des prestataires comparés dans l'article (relevé du 8 septembre 2026).
 * Nom et adresse uniquement : aucun tarif, aucune note, aucun avis n'est balisé
 * pour les tiers - le balisage doit refléter ce que la page affiche, et Google
 * sanctionne les avis auto-attribués.
 */
const comparatifDomiciliationItems: { name: string; street: string; city: string; zip: string }[] =
  [
    { name: 'Alatere doMo', street: '9 boulevard Albert 1er', city: 'Antibes', zip: '06600' },
    { name: 'Riviera Secrétariat', street: '46 boulevard du Président Wilson', city: 'Antibes', zip: '06600' },
    { name: "Centre d'Affaires Antibes", street: '540 1ère Avenue', city: 'Antibes', zip: '06600' },
    { name: "Centre d'Affaires Wilson", street: '82 boulevard du Président Wilson', city: 'Antibes', zip: '06600' },
    { name: 'SelfBuro', street: '92 boulevard du Président Wilson', city: 'Antibes', zip: '06600' },
    { name: 'Na&Co Antibes Fontonne', street: '256 route de Nice', city: 'Antibes', zip: '06600' },
    { name: 'Mail Boxes Etc. Antibes', street: '2793 chemin de Saint-Claude', city: 'Antibes', zip: '06600' },
    { name: 'Na&Co Sophia Antipolis', street: '1856 chemin de Saint-Bernard', city: 'Vallauris', zip: '06220' },
    { name: 'Baya Axess Sophia Antipolis', street: '400 avenue de Roumanille', city: 'Biot', zip: '06410' },
    { name: 'Pearl Partner Sophia Antipolis', street: '535 route des Lucioles', city: 'Valbonne', zip: '06560' },
    { name: 'Starter Business Center', street: '2000 route des Lucioles', city: 'Biot', zip: '06410' },
    { name: 'Dom Box Services', street: '1609 chemin de Saint-Bernard', city: 'Vallauris', zip: '06220' },
    { name: "Centre d'Affaires du Loup", street: '806 avenue des Plans', city: 'Villeneuve-Loubet', zip: '06270' },
    { name: 'Acceptis', street: '240 chemin des Prés', city: 'Villeneuve-Loubet', zip: '06270' },
    { name: 'Azur Secrétariat Services', street: '60 avenue de Nice', city: 'Cagnes-sur-Mer', zip: '06800' },
  ];

/** ItemList des prestataires comparés - lisible par les moteurs de réponse IA. */
export const comparatifDomiciliationItemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Services de domiciliation d'entreprise à Antibes et alentours",
  description:
    "Prestataires de domiciliation commerciale comparés à Antibes, Sophia Antipolis, Vallauris, Villeneuve-Loubet et Cagnes-sur-Mer.",
  numberOfItems: comparatifDomiciliationItems.length,
  itemListOrder: 'https://schema.org/ItemListUnordered',
  itemListElement: comparatifDomiciliationItems.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'LocalBusiness',
      name: it.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: it.street,
        addressLocality: it.city,
        postalCode: it.zip,
        addressRegion: 'Alpes-Maritimes',
        addressCountry: 'FR',
      },
    },
  })),
};
