import { company } from './site';

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
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.5793777,
    longitude: 7.122309,
  },
  areaServed: 'Côte d’Azur, Alpes-Maritimes',
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
  areaServed: 'Antibes, Alpes-Maritimes, Côte d’Azur',
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
  areaServed: 'Antibes, Alpes-Maritimes, Côte d’Azur',
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
    'Organisme de formation professionnelle certifié Qualiopi, enregistré sous le n° ' +
    company.formationNumber +
    '.',
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Certification Qualiopi',
  },
  sameAs: [company.mapsForma, company.facebook, company.linkedin],
};

const domaines = [
  'Webmarketing',
  'Intelligence artificielle',
  'Langues',
  'Communication digitale',
  'Immobilier',
];

export const coursesLd = domaines.map((d) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: d,
  description: `Formation professionnelle « ${d} » dispensée par Alatere Web SAS (marque Alatere forMa), organisme de formation certifié Qualiopi.`,
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Alatere Web SAS',
    url: `${SITE_URL}/alatere-forma`,
  },
}));

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

/** FAQ visible de l'accueil (sert aussi au FAQPage - FR = version de référence). */
export const homeFaq = [
  {
    q: "Qu'est-ce qu'Alatere Web ?",
    a: "Alatere Web est une entreprise familiale installée à Antibes depuis 2002. Elle réunit quatre métiers complémentaires - e-commerce (Alatere ecoM), formation certifiée Qualiopi (Alatere forMa), domiciliation d'entreprise (Alatere doMo) et coworking (Alatere coWo) - avec un seul interlocuteur.",
  },
  {
    q: 'Où se situe Alatere Web ?',
    a: 'Au 9 Boulevard Albert 1er, 06600 Antibes, à deux pas du port Vauban et à environ dix minutes à pied (700 m) de la gare SNCF.',
  },
  {
    q: 'Alatere forMa est-il un organisme de formation certifié Qualiopi ?',
    a: "Oui. L'organisme de formation est Alatere Web SAS, dont Alatere forMa est la marque : il est certifié Qualiopi et enregistré sous le numéro 93.06.07588.06. Les formations peuvent être financées par votre OPCO ou, pour les travailleurs non-salariés, par votre FAF (Fonds d'Assurance Formation).",
  },
  {
    q: "Combien coûte la domiciliation d'entreprise à Antibes ?",
    a: "La domiciliation commence à 25 € HT par mois (offre Dropbox, boîte aux lettres), 30 € HT par mois (offre Headquarters, adresse de siège social) et 50 € HT par mois (offre Forward, numérisation et réexpédition incluses), avec 50 € HT de frais de dossier réglés une seule fois à l'ouverture. L'adresse est agréée par la préfecture.",
  },
  {
    q: 'Comment contacter Alatere Web ?',
    a: 'Par le formulaire de contact du site ou au 07 61 56 45 56. Nous répondons sous 48 heures.',
  },
];

export const homeFaqLd = faqLd(homeFaq);

export const domoFaqLd = faqLd([
  {
    q: "Combien coûte une domiciliation d'entreprise à Antibes ?",
    a: "L'offre Dropbox (boîte aux lettres) démarre à 25 € HT par mois. L'offre Headquarters est à 30 € HT par mois (adresse de siège social + courrier) et l'offre Forward à 50 € HT par mois (numérisation et réexpédition incluses). Des frais de dossier de 50 € HT s'appliquent une seule fois, à l'ouverture du dossier.",
  },
  {
    q: 'Puis-je domicilier le siège social de ma société chez vous ?',
    a: "Oui. En tant que société de domiciliation agréée par la préfecture (n° 2022/12 du 20/09/2022), nous délivrons une attestation conforme aux exigences du greffe et du RCS d'Antibes.",
  },
  {
    q: 'Quel est le délai de mise en place ?',
    a: 'Une fois le contrat signé et les pièces transmises, votre attestation de domiciliation est émise sous 24 à 48 heures.',
  },
  {
    q: 'Puis-je transférer le siège de mon entreprise existante ?',
    a: 'Oui. Nous vous accompagnons dans les formalités de transfert de siège auprès du greffe et la mise à jour de vos statuts.',
  },
  {
    q: 'Y a-t-il un engagement de durée ?',
    a: 'Le contrat est renouvelable et résiliable avec préavis. Vous pouvez faire évoluer votre formule à tout moment, sans pénalité.',
  },
]);

export const formaFaqLd = faqLd([
  {
    q: 'Alatere forMa est-il certifié Qualiopi ?',
    a: "Oui. L'organisme de formation est Alatere Web SAS (marque Alatere forMa), certifié Qualiopi et enregistré sous le numéro 93.06.07588.06. La certification Qualiopi atteste de la qualité de nos processus et conditionne l'accès aux financements publics et mutualisés.",
  },
  {
    q: 'Mes formations peuvent-elles être financées ?',
    a: "Oui. Selon votre situation, nos formations sont finançables par votre OPCO (plan de développement des compétences) ou, pour les travailleurs non-salariés, par votre FAF (Fonds d'Assurance Formation). Nous vous accompagnons dans le montage du dossier de financement.",
  },
  {
    q: 'Quels domaines de formation proposez-vous ?',
    a: 'Cinq grands domaines : webmarketing (SEO, SEA, e-commerce), intelligence artificielle, langues, communication digitale et immobilier. Le détail des programmes est publié sur notre catalogue dédié.',
  },
  {
    q: 'Les formations sont-elles en présentiel ou à distance ?',
    a: "Les deux. Nous proposons du présentiel à Antibes (9 Bd Albert 1er), de l'intra-entreprise et du distanciel synchrone. Les parcours sont individualisés, en groupes de 1 à 8 personnes.",
  },
  {
    q: 'Quel est le délai pour démarrer une formation ?',
    a: 'Comptez en moyenne 14 jours entre la demande et le démarrage, selon le dossier de financement et les disponibilités. Le devis personnalisé est envoyé sous 48 heures.',
  },
]);

export const ecomFaqLd = faqLd([
  {
    q: 'Que fait Alatere ecoM ?',
    a: "Alatere ecoM conçoit, opère et référence des sites e-commerce. Depuis 2003, nous gérons nos propres boutiques d'art en ligne (repro-tableaux.com, copia-di-arte.com) - un savoir-faire SEO, SEA et opérations que nous mettons au service de nos clients.",
  },
  {
    q: 'Proposez-vous du référencement SEO et de la publicité SEA ?',
    a: 'Oui. Le référencement naturel (SEO), la publicité en ligne (SEA Google, Microsoft, Meta) et l’acquisition sont au cœur de notre métier - éprouvés sur nos propres sites depuis vingt ans.',
  },
  {
    q: "Travaillez-vous pour l'international ?",
    a: 'Oui. Nous opérons des sites multilingues (hreflang, ciblage géographique, fiscalité UE), notamment via copia-di-arte.com pour les marchés européens.',
  },
  {
    q: 'Comment démarrer un projet e-commerce avec vous ?',
    a: 'Contactez-nous via le formulaire ou au 07 61 56 45 56. Nous échangeons sur votre besoin et revenons vers vous sous 48 heures avec une première proposition.',
  },
]);

export const cowoFaqLd = faqLd([
  {
    q: "Où se situe l'espace de coworking ?",
    a: 'Au 9 Boulevard Albert 1er, 06600 Antibes, à deux pas du port Vauban et à environ dix minutes à pied (700 m) de la gare SNCF.',
  },
  {
    q: 'Quelles formules proposez-vous ?',
    a: "Pass à la journée, abonnement mensuel en open-space, bureau privatif à l'année et location de salles de réunion. Les tarifs sont communiqués sur demande, selon votre besoin.",
  },
  {
    q: 'Puis-je réserver une salle de réunion sans être abonné ?',
    a: 'Oui, que vous soyez membre ou non. La disponibilité est toutefois limitée : la plupart de nos salles sont louées à l’année par des entreprises, mieux vaut donc réserver quelques jours à l’avance. Tarif : 180 € TTC la journée, ou 80 € TTC en fin de journée (après 16 h).',
  },
  {
    q: 'Puis-je aussi y domicilier mon entreprise ?',
    a: 'Oui, via notre offre Alatere doMo. Les membres du coworking bénéficient de conditions avantageuses sur la domiciliation.',
  },
]);

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
      a: "Si vous travaillez de chez vous ou en déplacement, que vous démarrez votre activité, ou que vous voulez une adresse professionnelle séparée de votre domicile à moindre coût. C'est aussi la solution pour un transfert de siège vers Antibes.",
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
      a: "If you work from home or on the move, are just starting out, or want a professional address separate from your home at low cost. It's also the solution for transferring a head office to Antibes.",
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
      a: "L'OPCO finance la formation des salariés dans le cadre du plan de développement des compétences de l'employeur. Le FAF finance la formation continue des travailleurs non-salariés - indépendants, professions libérales (FIF PL, AGEFICE…) - selon des plafonds annuels propres à chaque fonds.",
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
  ],
  [
    {
      q: 'Who funds my professional training?',
      a: 'It depends on your status: the OPCO (skills operator) for employees, the FAF (training insurance fund) for the self-employed, and France Travail for jobseekers.',
    },
    {
      q: "What's the difference between OPCO and FAF?",
      a: "The OPCO funds employee training as part of the employer's skills-development plan. The FAF funds the continuing training of the self-employed - sole traders, the liberal professions (FIF PL, AGEFICE, etc.) - within annual ceilings specific to each fund.",
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
