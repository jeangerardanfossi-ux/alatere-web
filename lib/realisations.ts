/**
 * Contenu de la page « Clients & Réalisations ».
 * Porté du wireframe Claude Design « Clients & Réalisations - Wireframes.dc.html »
 * (turn 3 / option 3a — direction A « éditorial sobre », page complète,
 * trois réalisations par pôle).
 *
 * ⚠️ CONTENUS À COMPLÉTER — les entrées ci-dessous reprennent volontairement les
 * textes entre crochets du wireframe : elles calent la densité réelle de la
 * maquette mais ne sont PAS publiables. Tant que `REALISATIONS_READY` vaut
 * `false`, les deux routes sont en `noindex` et absentes du sitemap.
 *
 * Pour publier :
 *   1. remplacer chaque `CaseStudy` par une vraie étude de cas (FR + EN) ;
 *   2. renseigner `CLIENT_LOGOS` (logos affichés avec l'accord des clients) ;
 *   3. passer `REALISATIONS_READY` à `true` — cette seule bascule retire le
 *      `noindex` des deux routes, ajoute la page au sitemap et affiche le lien
 *      « Clients & Réalisations » dans le pied de page (colonne « Liens utiles »).
 *
 * NB : l'entrée « Réalisations » du MENU PRINCIPAL, elle, est permanente
 * (choix client du 2026-08-26) — voir `NAV` dans components/grommet/Header.tsx.
 */

/** Texte bilingue (FR par défaut, EN sous /en). */
export type Bi = { fr: string; en: string };

/** Chiffre de résultat : valeur (bilingue si elle porte une unité) + libellé bilingue. */
export type Result = { v: string | Bi; l: Bi };

export type CaseStudy = {
  /** Nom du client, tel qu'il autorise son affichage. */
  client: string;
  secteur: Bi;
  /** Année du projet, ou période bilingue pour un accompagnement continu. */
  annee: string | Bi;
  contexte: Bi;
  /** Trois puces « ce que nous avons fait ». */
  bullets: Bi[];
  /** Deux à trois chiffres de résultat. */
  results: Result[];
  /** Verbatim relu et validé par le client (facultatif). */
  quote?: Bi;
  nom?: string;
  fonction?: Bi;
  /** Portrait de l'auteur du verbatim (ex. /photos/xxx.webp). */
  portrait?: string;
  /** Visuel de la réalisation (capture ou photo). */
  image?: string;
  /** Légende propre à la réalisation ; à défaut, celle du pôle est utilisée. */
  imageCaption?: Bi;
  /** `logo` = visuel affiché en entier sur fond blanc, au lieu du cadrage photo. */
  imageMode?: 'photo' | 'logo';
  /** Étude de cas détaillée — le lien « Lire l'étude de cas » n'apparaît que si renseigné. */
  href?: string;
};

export type PoleKey = 'ecom' | 'forma' | 'domo' | 'cowo';

/** Passer à `true` une fois les vraies études de cas saisies (voir en-tête). */
export const REALISATIONS_READY = false;

/* =========================================================
   Gabarit d'attente — copie exacte des crochets du wireframe.
   À supprimer quand les vraies études de cas sont saisies.
   ========================================================= */
const slot = (n: string): CaseStudy => ({
  client: `[Nom du client ${n}]`,
  secteur: { fr: '[Secteur]', en: '[Sector]' },
  annee: '[20XX]',
  contexte: {
    fr: "[Deux lignes de contexte : l'entreprise, son marché, le point de départ du projet. Environ cent quatre-vingts signes pour caler la densité réelle de la maquette.]",
    en: '[Two lines of context: the company, its market, the starting point of the project. Around one hundred and eighty characters, to match the real density of the layout.]',
  },
  bullets: [
    {
      fr: '[Action réalisée — environ soixante signes de description]',
      en: '[Work delivered — about sixty characters of description]',
    },
    {
      fr: '[Deuxième action, même longueur pour équilibrer la carte]',
      en: '[Second item, same length so the card stays balanced]',
    },
    { fr: '[Troisième action, la plus courte des trois]', en: '[Third item, the shortest of the three]' },
  ],
  results: [
    { v: '[00 %]', l: { fr: '[Libellé du résultat]', en: '[Result label]' } },
    { v: '[0 000]', l: { fr: '[Libellé du résultat]', en: '[Result label]' } },
    { v: '[×0]', l: { fr: '[Libellé]', en: '[Label]' } },
  ],
  quote: {
    fr: '[Verbatim client de deux à trois lignes, relu et validé par le client avant publication.]',
    en: '[Two to three lines of client testimonial, reviewed and approved by the client before publication.]',
  },
  nom: '[Prénom Nom]',
  fonction: { fr: '[Fonction, société]', en: '[Role, company]' },
});

const slots = (): CaseStudy[] => [slot('01'), slot('02'), slot('03')];

/* =========================================================
   Études de cas réelles.
   ========================================================= */

/**
 * forMa — Laforêt Immobilier Antibes (Cabinet Janser SASU, 9 boulevard Albert 1er).
 * Sources : conventions de formation 2024 du dossier client.
 *   · « Anglais professionnel pour l'immobilier » — 17 avril 2024, 7 h,
 *     financement OPCO EP en subrogation ;
 *   · « Développer une agence immobilière sur Google avec Google Ads », niveau avancé —
 *     22 mai 2024, 7 h, financement l'Opcommerce en subrogation.
 * Effectif affiché : 6 collaborateurs formés (chiffre communiqué par le client,
 * les conventions archivées ne nomment que deux stagiaires).
 * Les deux sessions se sont tenues en présentiel dans l'espace Alatere coWo,
 * à la même adresse que l'agence. Pas de verbatim : aucun témoignage n'a été
 * relu et validé par le client à ce jour.
 */
const laforet: CaseStudy = {
  client: 'Laforêt Immobilier — Antibes',
  secteur: {
    fr: 'Agence immobilière · transaction, location, gestion',
    en: 'Real-estate agency · sales, rentals, property management',
  },
  annee: '2024',
  contexte: {
    fr: "Agence Laforêt du centre-ville d'Antibes, 9 boulevard Albert 1er : une clientèle en partie internationale et une acquisition en ligne à structurer. Deux montées en compétences pour l'équipe, en présentiel, à la même adresse que l'agence.",
    en: 'A Laforêt agency in central Antibes, 9 boulevard Albert 1er: a partly international clientele and online acquisition to structure. Two upskilling programmes for the team, delivered in person at the very same address.',
  },
  bullets: [
    {
      fr: "« Anglais professionnel pour l'immobilier » : visite, mandat, négociation",
      en: '“Professional English for real estate”: viewings, mandates, negotiation',
    },
    {
      fr: "« Google Ads pour l'immobilier », niveau avancé : structure de compte, annonces, ciblage local",
      en: '“Google Ads for real estate”, advanced level: account structure, ads, local targeting',
    },
    {
      fr: "Dossier Qualiopi complet et prise en charge OPCO montée avec l'agence",
      en: 'Full Qualiopi paperwork and OPCO funding arranged with the agency',
    },
  ],
  results: [
    {
      v: { fr: '14 h', en: '14 hrs' },
      l: { fr: 'de formation en présentiel', en: 'of in-person training' },
    },
    { v: '6', l: { fr: 'collaborateurs formés', en: 'team members trained' } },
    { v: 'OPCO', l: { fr: 'financement en subrogation', en: 'funding paid directly' } },
  ],
  image: '/photos/forma-laforet-antibes.webp',
  imageCaption: {
    fr: "Photo — l'agence Laforêt, 9 boulevard Albert 1er à Antibes",
    en: 'Photo — the Laforêt agency, 9 boulevard Albert 1er, Antibes',
  },
};

/**
 * doMo & coWo — Datalinx (agence e-commerce & web, datalinx.fr).
 * Coworkeur depuis 2019, siège social domicilié chez Alatere doMo depuis 2022.
 * Équipe de trois sur place : Gilles, Patricia et Ramzy (prénoms seuls, comme
 * convenu avec le client). Pas de verbatim relu et validé à ce jour.
 */
const DATALINX_COWO_SINCE = 2019;
const DATALINX_DOMO_SINCE = 2022;
const YEARS_SINCE = (y: number) => new Date().getFullYear() - y;

/** Mois écoulés depuis un mois donné (m = 1 pour janvier) — pour les domiciliations récentes. */
const MONTHS_SINCE = (y: number, m: number) => {
  const now = new Date();
  return (now.getFullYear() - y) * 12 + (now.getMonth() + 1 - m);
};

const datalinxSecteur: Bi = {
  fr: 'Agence e-commerce & web',
  en: 'E-commerce & web agency',
};

const datalinxDomo: CaseStudy = {
  client: 'Datalinx',
  secteur: datalinxSecteur,
  annee: { fr: `Depuis ${DATALINX_DOMO_SINCE}`, en: `Since ${DATALINX_DOMO_SINCE}` },
  contexte: {
    fr: `Déjà installée dans l'espace coworking depuis ${DATALINX_COWO_SINCE}, l'agence y transfère son siège social en ${DATALINX_DOMO_SINCE} : une adresse en centre-ville d'Antibes, du courrier reçu, trié et numérisé, et une équipe qui reste sur ses clients.`,
    en: `Already working from the coworking space since ${DATALINX_COWO_SINCE}, the agency moved its registered office here in ${DATALINX_DOMO_SINCE}: a central Antibes address, mail received, sorted and scanned, and a team free to stay on its clients.`,
  },
  bullets: [
    {
      fr: "Adresse de siège social agréée préfecture, en centre-ville d'Antibes",
      en: 'Prefecture-approved registered-office address in central Antibes',
    },
    {
      fr: 'Courrier reçu, trié et numérisé ; réexpédition à la demande',
      en: 'Mail received, sorted and scanned; forwarded on request',
    },
    {
      fr: 'Transfert de siège accompagné, formalités et Kbis',
      en: 'Registered-office transfer handled, paperwork and company registration',
    },
  ],
  results: [
    {
      v: {
        fr: `${YEARS_SINCE(DATALINX_DOMO_SINCE)} ans`,
        en: `${YEARS_SINCE(DATALINX_DOMO_SINCE)} years`,
      },
      l: { fr: 'de domiciliation continue', en: 'of continuous registered office' },
    },
    {
      v: { fr: 'Agréée', en: 'Approved' },
      l: { fr: 'préfecture des Alpes-Maritimes', en: 'by the Alpes-Maritimes prefecture' },
    },
    {
      v: String(DATALINX_COWO_SINCE),
      l: { fr: 'coworkeur chez coWo depuis', en: 'a coWo member since' },
    },
  ],
  image: '/logos/datalinx.png',
  imageMode: 'logo',
  imageCaption: { fr: 'Logo Datalinx', en: 'Datalinx logo' },
};

const datalinxCowo: CaseStudy = {
  client: 'Datalinx',
  secteur: datalinxSecteur,
  annee: { fr: `Depuis ${DATALINX_COWO_SINCE}`, en: `Since ${DATALINX_COWO_SINCE}` },
  contexte: {
    fr: `Gilles installe son agence e-commerce chez Alatere coWo en ${DATALINX_COWO_SINCE}, rejoint depuis par Patricia et Ramzy. L'équipe n'a pas bougé : trois postes à demeure, la salle de réunion pour les rendez-vous clients, et le siège social à la même adresse.`,
    en: `Gilles moved his e-commerce agency into Alatere coWo in ${DATALINX_COWO_SINCE}, later joined by Patricia and Ramzy. The team never left: three permanent desks, the meeting room for client appointments, and the registered office at the same address.`,
  },
  bullets: [
    {
      fr: 'Trois postes de travail à demeure, dans un espace partagé',
      en: 'Three permanent desks in a shared workspace',
    },
    {
      fr: 'Salle de réunion pour les rendez-vous et présentations clients',
      en: 'Meeting room for client appointments and presentations',
    },
    {
      fr: `Siège social domicilié à la même adresse depuis ${DATALINX_DOMO_SINCE}`,
      en: `Registered office at the same address since ${DATALINX_DOMO_SINCE}`,
    },
  ],
  results: [
    {
      v: {
        fr: `${YEARS_SINCE(DATALINX_COWO_SINCE)} ans`,
        en: `${YEARS_SINCE(DATALINX_COWO_SINCE)} years`,
      },
      l: { fr: "de présence dans l'espace", en: 'in the space' },
    },
    { v: '3', l: { fr: 'collaborateurs sur place', en: 'team members on site' } },
    {
      v: String(DATALINX_DOMO_SINCE),
      l: { fr: 'siège social domicilié ici', en: 'registered office here since' },
    },
  ],
  image: '/photos/cowo-datalinx.webp',
  imageCaption: {
    fr: "Photo — l'équipe Datalinx à son poste, espace Alatere coWo",
    en: 'Photo — the Datalinx team at work, Alatere coWo space',
  },
};

/**
 * doMo — AZ Chef Signature (azchef-signature.eatbu.com), chef privé et traiteur
 * événementiel d'Alexandre Zohar. Siège social domicilié au 9 boulevard Albert 1er
 * depuis décembre 2025 (date communiquée par le client). L'entreprise intervient
 * de Londres à Monaco : l'adresse est le seul point fixe de l'activité.
 * Pas de verbatim : aucun témoignage relu et validé à ce jour.
 */
const AZCHEF_SINCE_Y = 2025;
const AZCHEF_SINCE_M = 12;

const azChef: CaseStudy = {
  client: 'AZ Chef Signature',
  secteur: {
    fr: 'Chef privé & traiteur · événements privés et professionnels',
    en: 'Private chef & caterer · private and corporate events',
  },
  annee: { fr: 'Depuis décembre 2025', en: 'Since December 2025' },
  contexte: {
    fr: "Chef privé et traiteur événementiel, Alexandre Zohar travaille sur les lieux de ses clients, de Londres à Monaco. Son entreprise n'a pas de local : le siège social est domicilié chez nous depuis décembre 2025, en centre-ville d'Antibes.",
    en: 'A private chef and event caterer, Alexandre Zohar works at his clients’ own venues, from London to Monaco. His business has no premises: the registered office has been with us since December 2025, in central Antibes.',
  },
  bullets: [
    {
      fr: "Adresse de siège social agréée préfecture, en centre-ville d'Antibes",
      en: 'Prefecture-approved registered-office address in central Antibes',
    },
    {
      fr: 'Courrier reçu, trié et numérisé ; réexpédition à la demande',
      en: 'Mail received, sorted and scanned; forwarded on request',
    },
    {
      fr: "Un point fixe pour une activité qui se déplace de site en site",
      en: 'A fixed address for a business that moves from venue to venue',
    },
  ],
  results: [
    {
      v: {
        fr: `${MONTHS_SINCE(AZCHEF_SINCE_Y, AZCHEF_SINCE_M)} mois`,
        en: `${MONTHS_SINCE(AZCHEF_SINCE_Y, AZCHEF_SINCE_M)} months`,
      },
      l: { fr: 'de domiciliation continue', en: 'of continuous registered office' },
    },
    {
      v: { fr: 'Agréée', en: 'Approved' },
      l: { fr: 'préfecture des Alpes-Maritimes', en: 'by the Alpes-Maritimes prefecture' },
    },
    {
      v: 'Antibes',
      l: { fr: 'siège social en centre-ville', en: 'registered office in the town centre' },
    },
  ],
  image: '/logos/az-chef.png',
  imageMode: 'logo',
  imageCaption: { fr: 'Logo AZ Chef Signature', en: 'AZ Chef Signature logo' },
};

/**
 * doMo — TerraBella Inspiration (terrabella-inspiration.fr), bougies artisanales
 * coulées à la main sur la Côte d'Azur, parfums créés à Grasse. Siège social
 * domicilié au 9 boulevard Albert 1er depuis juin 2025 (date communiquée par le
 * client) — l'adresse figure d'ailleurs sur leur boutique en ligne.
 * Pas de verbatim relu et validé à ce jour.
 */
const TERRABELLA_SINCE_Y = 2025;
const TERRABELLA_SINCE_M = 6;

const terraBella: CaseStudy = {
  client: 'TerraBella Inspiration',
  secteur: {
    fr: 'Artisanat · bougies parfumées coulées à la main',
    en: 'Craft manufacturing · hand-poured scented candles',
  },
  annee: { fr: 'Depuis juin 2025', en: 'Since June 2025' },
  contexte: {
    fr: "Bougies parfumées coulées à la main sur la Côte d'Azur, avec des parfums créés à Grasse, vendues aux hôtels, spas et architectes d'intérieur. La marque a domicilié son siège chez nous en juin 2025 et affiche l'adresse sur sa boutique en ligne.",
    en: 'Scented candles hand-poured on the French Riviera, with fragrances created in Grasse, sold to hotels, spas and interior designers. The brand moved its registered office here in June 2025 and shows the address on its online store.',
  },
  bullets: [
    {
      fr: "Adresse de siège social agréée préfecture, en centre-ville d'Antibes",
      en: 'Prefecture-approved registered-office address in central Antibes',
    },
    {
      fr: 'Courrier reçu, trié et numérisé ; réexpédition à la demande',
      en: 'Mail received, sorted and scanned; forwarded on request',
    },
    {
      fr: 'Adresse professionnelle affichée sur la boutique et les documents commerciaux',
      en: 'A business address shown on the store and on commercial paperwork',
    },
  ],
  results: [
    {
      v: {
        fr: `${MONTHS_SINCE(TERRABELLA_SINCE_Y, TERRABELLA_SINCE_M)} mois`,
        en: `${MONTHS_SINCE(TERRABELLA_SINCE_Y, TERRABELLA_SINCE_M)} months`,
      },
      l: { fr: 'de domiciliation continue', en: 'of continuous registered office' },
    },
    {
      v: { fr: 'Agréée', en: 'Approved' },
      l: { fr: 'préfecture des Alpes-Maritimes', en: 'by the Alpes-Maritimes prefecture' },
    },
    {
      v: String(TERRABELLA_SINCE_Y),
      l: { fr: 'siège social domicilié depuis juin', en: 'registered office here since June' },
    },
  ],
  image: '/logos/terrabella.png',
  imageMode: 'logo',
  imageCaption: { fr: 'Logo TerraBella Inspiration', en: 'TerraBella Inspiration logo' },
};

/**
 * ecoM — repro-tableaux.com, notre propre boutique.
 * Lancée en 2003 par la SARL MesRecherches (devenue Alatere Web), en partenariat
 * avec l'atelier hambourgeois KunstKopie.de : eux fabriquent les toiles et
 * tiennent le catalogue d'art, nous exploitons le site, le référençons et
 * assurons le service client.
 * Le modèle a ensuite donné copia-di-arte.com (2007), reprodart.com,
 * art-prints-on-demand.com et myartprints.cz (2011) — cf. `AProposPage`.
 * Ce n'est pas une étude de cas client : la carte le dit explicitement.
 */
const REPRO_SINCE = 2003;

const reproTableaux: CaseStudy = {
  client: 'Repro-Tableaux.com',
  secteur: {
    fr: "Boutique en propre · reproductions d'art sur toile",
    en: 'Our own store · art reproductions on canvas',
  },
  annee: { fr: `Depuis ${REPRO_SINCE}`, en: `Since ${REPRO_SINCE}` },
  contexte: {
    fr: `Notre propre boutique, lancée en ${REPRO_SINCE} avec l'atelier hambourgeois KunstKopie.de : ils fabriquent les toiles et tiennent le catalogue d'art, nous exploitons et référençons le site pour le marché francophone, service client compris.`,
    en: `Our own store, launched in ${REPRO_SINCE} with the Hamburg workshop KunstKopie.de: they make the canvases and maintain the art catalogue, we run and rank the site for the French-speaking market, customer service included.`,
  },
  bullets: [
    {
      fr: 'Service client complet, exploitation quotidienne et référencement du site',
      en: 'Full customer service, day-to-day operations and search ranking of the store',
    },
    {
      fr: 'SEO et SEA tenus en propre sur un marché européen concurrentiel',
      en: 'SEO and SEA run in-house on a competitive European market',
    },
    {
      fr: "Modèle décliné ensuite sur quatre autres boutiques d'Europe",
      en: 'Model then rolled out to four more European stores',
    },
  ],
  results: [
    {
      v: { fr: `${YEARS_SINCE(REPRO_SINCE)} ans`, en: `${YEARS_SINCE(REPRO_SINCE)} years` },
      l: { fr: "d'exploitation continue", en: 'of continuous operation' },
    },
    { v: '5', l: { fr: 'boutiques nées du modèle', en: 'stores grown from the model' } },
    {
      v: String(REPRO_SINCE),
      l: { fr: 'partenaire de KunstKopie.de depuis', en: 'partnered with KunstKopie.de since' },
    },
  ],
  // Capture faite le 2026-08-28 sur la version en ligne (la précédente,
  // /photos/ecom-repro.webp, date de l'ancienne charte du site).
  image: '/photos/ecom-repro-tableaux.webp',
  imageCaption: {
    fr: "Capture — la page d'accueil de repro-tableaux.com",
    en: 'Screenshot — the repro-tableaux.com home page',
  },
};

/**
 * forMa — ASNOV (asnov.fr), assistante virtuelle sur la Côte d'Azur.
 * Deux parcours en 2026 : « Maîtriser Claude — de l'organisation à l'autonomie »
 * (10 modules, 4 demi-journées, 14 h 30 nettes — chiffres repris du support de
 * présentation BNI du 27/05/2026) et un parcours webmarketing / Google Ads,
 * dont la durée n'est pas documentée : aucun chiffre affiché pour celui-là.
 * La stagiaire n'est pas nommée sur la page.
 */
const asnov: CaseStudy = {
  client: 'ASNOV.FR',
  secteur: {
    fr: 'Assistante virtuelle · gestion administrative et digitale',
    en: 'Virtual assistant · admin and digital support',
  },
  annee: '2026',
  contexte: {
    fr: "Assistante virtuelle installée sur la Côte d'Azur : elle prend en charge l'administratif, le commercial et le digital de ses clients. Deux parcours pour outiller son activité — l'IA au quotidien, puis l'acquisition en ligne.",
    en: 'A virtual assistant based on the French Riviera, handling her clients’ admin, sales and digital work. Two programmes to equip her business — AI for daily work, then online acquisition.',
  },
  bullets: [
    {
      fr: "« Maîtriser Claude » : de l'organisation à l'autonomie, en quatre demi-journées",
      en: '“Mastering Claude”: from organisation to autonomy, over four half-days',
    },
    {
      fr: 'Webmarketing et Google Ads : acquisition et pilotage des campagnes',
      en: 'Digital marketing and Google Ads: acquisition and campaign management',
    },
    {
      fr: 'Formation individuelle, sur ses propres outils et ses propres dossiers',
      en: 'One-to-one training, on her own tools and her own files',
    },
  ],
  results: [
    { v: '2', l: { fr: 'parcours de formation', en: 'training programmes' } },
    {
      v: { fr: '14 h 30', en: '14.5 hrs' },
      l: { fr: 'sur le parcours IA', en: 'on the AI programme' },
    },
    {
      v: '10',
      l: { fr: 'modules, du paramétrage aux connecteurs', en: 'modules, from setup to connectors' },
    },
  ],
  image: '/photos/forma-asnov.webp',
  imageCaption: {
    fr: 'Photo — séance de formation, sur le poste de travail de la stagiaire',
    en: 'Photo — training session, at the trainee’s own workstation',
  },
};

/**
 * coWo — CPY, Christel Pocachard Yachting (christelpocachardyachting.com).
 * Venue pour deux mois, restée de fin 2022 à début 2025 (période communiquée
 * par le client), équipe montée à six collaborateurs.
 */
const cpyYachting: CaseStudy = {
  client: 'Christel Pocachard Yachting',
  secteur: {
    fr: 'Yachting · gestion, location et vente',
    en: 'Yachting · management, charter and sales',
  },
  annee: { fr: 'Fin 2022 - début 2025', en: 'Late 2022 - early 2025' },
  contexte: {
    fr: "Une société de yachting arrive pour deux mois, le temps d'un projet. Elle est restée de fin 2022 à début 2025, et son équipe est montée à six collaborateurs sur place : l'espace a suivi la croissance, sans bail commercial ni déménagement.",
    en: 'A yachting company arrived for two months, just for one project. It stayed from late 2022 to early 2025, and its team grew to six people on site: the space followed the growth, with no commercial lease and no move.',
  },
  bullets: [
    {
      fr: 'Arrivée pour deux mois, installée finalement plus de deux ans',
      en: 'Arrived for two months, ended up staying more than two years',
    },
    {
      fr: "Postes ajoutés au fil de la croissance, jusqu'à six collaborateurs",
      en: 'Desks added as the team grew, up to six people',
    },
    {
      fr: 'Ni bail commercial, ni engagement de longue durée',
      en: 'No commercial lease, no long-term commitment',
    },
  ],
  results: [
    { v: '6', l: { fr: 'collaborateurs sur place', en: 'team members on site' } },
    {
      v: { fr: '2 mois', en: '2 months' },
      l: { fr: 'de séjour prévu au départ', en: 'originally planned' },
    },
    {
      v: { fr: '> 2 ans', en: '> 2 years' },
      l: { fr: 'de présence réelle', en: 'actually stayed' },
    },
  ],
  // Photo reprise du site du client : le Sanlorenzo 78 « Triple L » de leur
  // flotte de location, recadré au format des cartes.
  image: '/photos/cowo-pocachard-yachting.webp',
  imageCaption: {
    fr: 'Photo — un yacht de la flotte Christel Pocachard Yachting',
    en: 'Photo — a yacht from the Christel Pocachard Yachting fleet',
  },
};

/**
 * coWo — Scape Design (scapedesign.com), l'agence de paysagisme de James Basson.
 * Équipe installée dans une salle privative depuis six mois (durée communiquée
 * par le client, accompagnement en cours). Visuel : capture de leur page
 * « Projects », faite le 2026-08-30.
 */
const scapeDesign: CaseStudy = {
  client: 'Scape Design',
  secteur: {
    fr: 'Paysagisme · jardins et espaces publics',
    en: 'Landscape design · gardens and public spaces',
  },
  annee: { fr: 'Depuis six mois', en: 'For six months' },
  contexte: {
    fr: "L'agence de paysagisme de James Basson, installée dans le sud de la France et primée sur les grands concours internationaux, conçoit des jardins méditerranéens du petit terrain au parc public. Son équipe travaille depuis six mois dans une salle privative de l'espace.",
    en: 'James Basson’s landscape practice, based in the South of France and awarded at the major international shows, designs Mediterranean gardens from small plots to public parks. His team has been working from a private room in the space for six months.',
  },
  bullets: [
    {
      fr: 'Salle privative pour toute l’équipe, fermée et dédiée',
      en: 'A private room for the whole team, closed and dedicated',
    },
    {
      fr: 'Installation immédiate, sans travaux ni bail commercial',
      en: 'Moved in straight away, no fit-out and no commercial lease',
    },
    {
      fr: 'Salle de réunion et services de l’espace en complément',
      en: 'Meeting room and the space’s services on top',
    },
  ],
  results: [
    { v: { fr: '6 mois', en: '6 months' }, l: { fr: 'de présence à ce jour', en: 'on site so far' } },
    { v: '1', l: { fr: 'salle privative dédiée', en: 'dedicated private room' } },
    {
      v: { fr: '0', en: '0' },
      l: { fr: 'bail commercial, zéro travaux', en: 'commercial leases, zero fit-out' },
    },
  ],
  image: '/photos/cowo-scape-design.webp',
  imageCaption: {
    fr: 'Capture — la page « Projects » de scapedesign.com',
    en: 'Screenshot — the “Projects” page of scapedesign.com',
  },
};

/** Études de cas par pôle — trois par pôle dans la maquette retenue. */
export const CASES: Record<PoleKey, CaseStudy[]> = {
  ecom: [reproTableaux, slot('02'), slot('03')],
  forma: [laforet, asnov, slot('03')],
  domo: [datalinxDomo, terraBella, azChef],
  cowo: [datalinxCowo, cpyYachting, scapeDesign],
};

/**
 * Mur de logos — « affichés avec l'accord de nos clients ».
 * Tant que la liste est vide, la maquette affiche des emplacements vides.
 */
export type ClientLogo = { name: string; src: string; href?: string };
export const CLIENT_LOGOS: ClientLogo[] = [
  // Chaque logo pointe vers le site officiel du client, ouvert dans un nouvel onglet
  // (voir le rendu du mur dans `ClientsRealisationsPage`). `href` absent = logo non
  // cliquable : on ne lie que les URL vérifiées.
  {
    name: 'Laforêt Immobilier Antibes',
    src: '/logos/laforet.png',
    href: 'https://www.laforet.com/agence-immobiliere/antibes',
  },
  { name: 'Datalinx', src: '/logos/datalinx.png', href: 'https://www.datalinx.fr/' },
  {
    name: 'MAV Développement Immobilier',
    src: '/logos/mav.png',
    href: 'https://mav-developpement-immobilier.fr/fr/',
  },
  // URL reprise du logotype lui-même, qui porte la mention « www.2iarchitecture.com ».
  {
    name: '2i Architecture',
    src: '/logos/2i-architecture.png',
    href: 'https://2iarchitecture.com/',
  },
  // Seul logo non lié du mur : aucun site officiel vérifiable à ce jour pour
  // « K management - Property & Wealth ». À lier dès que l'URL est confirmée.
  { name: 'K Management - Property & Wealth', src: '/logos/pwkm.png' },
  {
    name: 'AXEO Services Antibes - Cagnes-sur-Mer',
    src: '/logos/axeo-services.png',
    href: 'https://www.axeoservices.fr/agency/400-axeo-services-antibes',
  },
  {
    name: 'Kiwanis Antibes Juan-les-Pins',
    src: '/logos/kiwanis-antibes.png',
    href: 'https://www.kiwanis.fr/club/antibes-juan-les-pins/',
  },
  { name: 'Logic Santé', src: '/logos/logic-sante.png', href: 'https://www.logicsante.com/' },
  // bestofbrain.fr redirige vers le domaine .eu : on pointe directement la cible.
  { name: 'Best of Brain', src: '/logos/best-of-brain.png', href: 'https://bestofbrain.eu/' },
  {
    name: 'Julien de Savignac',
    src: '/logos/julien-de-savignac.png',
    href: 'https://www.julien-de-savignac.com/fr/',
  },
  { name: 'ASNOV - Assistante virtuelle', src: '/logos/asnov.png', href: 'https://www.asnov.fr' },
  // Logo vectoriel officiel repris du site du client (vernassa.fr/images/logo.svg),
  // signe + logotype. Recoloré en noir : le SVG publié est blanc, destiné à un
  // fond sombre, et disparaîtrait sur le fond clair du mur.
  { name: 'Vernassa Électricité', src: '/logos/vernassa.svg', href: 'https://www.vernassa.fr' },
  // Logo repris de la page publique du client ; l'habillage carré gris ajouté par
  // Facebook autour du disque a été remplacé par du blanc, le logo n'est pas retouché.
  // Agence MMA de Nicolas Bohême : sa vitrine est la page d'agence du réseau MMA.
  {
    name: 'Bohême Assurances - MMA Antibes',
    src: '/logos/boheme-assurances.png',
    href: 'https://agence.mma.fr/antibes/',
  },
  // Marque officielle reprise de lunetierducap.com/favicon.svg : leur site ne
  // publie pas de logotype, seulement ce monogramme.
  {
    name: 'Lunetier du Cap',
    src: '/logos/lunetier-du-cap.png',
    href: 'https://lunetierducap.com/',
  },
  // Logotype officiel repris de logeazur.fr, recoloré en sombre : la version
  // publiée est blanche, faite pour leur en-tête, et disparaîtrait sur le mur.
  { name: 'Logéazur', src: '/logos/logeazur.png', href: 'https://www.logeazur.fr/' },
  { name: 'AS Elec by Tony', src: '/logos/as-elec.png', href: 'https://www.aselec06.fr/' },
  {
    name: 'Christel Pocachard Yachting',
    src: '/logos/cpy-yachting.svg',
    href: 'https://www.christelpocachardyachting.com/',
  },
  // Logotype officiel repris de scapedesign.com, recoloré en sombre : la version
  // publiée est blanche, prévue pour leur en-tête photo.
  { name: 'Scape Design', src: '/logos/scape-design.png', href: 'https://www.scapedesign.com/en/' },
  {
    name: 'Pergola Riviera',
    src: '/logos/pergola-riviera.png',
    href: 'https://www.pergolariviera.com/',
  },
  {
    name: 'Nice Fenêtres',
    src: '/logos/nice-fenetres.svg',
    href: 'https://www.nicefenetres-avis.com/',
  },
  {
    name: 'La Dimension Créative',
    src: '/logos/la-dimension-creative.png',
    href: 'https://www.la-dimension-creative.com/',
  },
  // Logotype officiel repris de la boutique du client, détouré du fond blanc.
  {
    name: 'TerraBella Inspiration',
    src: '/logos/terrabella.png',
    href: 'https://www.terrabella-inspiration.fr/',
  },
  // Logo repris du site du client, publié en clair sur fond noir : détouré et
  // recoloré en sombre pour le fond clair du mur, l'or de la lettre Z est conservé.
  {
    name: 'AZ Chef Signature',
    src: '/logos/az-chef.png',
    href: 'https://azchef-signature.eatbu.com/',
  },
  // Boutique du groupe, pas un client : affichée au titre du savoir-faire ecoM.
  { name: 'Repro-Tableaux.com', src: '/logos/repro-tableaux.png', href: 'https://www.repro-tableaux.com' },
];

/** Nombre minimal d'emplacements affichés : les logos manquants restent en pointillés. */
export const LOGO_SLOTS = 18;
