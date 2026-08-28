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
  image: '/photos/domo.webp',
  imageCaption: {
    fr: 'Photo — les boîtes aux lettres des sociétés domiciliées, à Antibes',
    en: 'Photo — the mailboxes of the companies registered here, in Antibes',
  },
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
 * ecoM — repro-tableaux.com, notre propre boutique.
 * Lancée en 2003 par la SARL MesRecherches (devenue Alatere Web), en partenariat
 * avec l'atelier hambourgeois KunstKopie.de : eux fabriquent les toiles et
 * tiennent le catalogue d'art, nous concevons, référençons et exploitons le site.
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
    fr: `Notre propre boutique, lancée en ${REPRO_SINCE} avec l'atelier hambourgeois KunstKopie.de : ils fabriquent les toiles et tiennent le catalogue d'art, nous concevons, référençons et exploitons le site pour le marché francophone.`,
    en: `Our own store, launched in ${REPRO_SINCE} with the Hamburg workshop KunstKopie.de: they make the canvases and maintain the art catalogue, we design, rank and run the site for the French-speaking market.`,
  },
  bullets: [
    {
      fr: 'Conception, exploitation quotidienne et référencement du site marchand',
      en: 'Design, day-to-day operations and search ranking of the store',
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

/** Études de cas par pôle — trois par pôle dans la maquette retenue. */
export const CASES: Record<PoleKey, CaseStudy[]> = {
  ecom: [reproTableaux, slot('02'), slot('03')],
  forma: [laforet, slot('02'), slot('03')],
  domo: [datalinxDomo, slot('02'), slot('03')],
  cowo: [datalinxCowo, slot('02'), slot('03')],
};

/**
 * Mur de logos — « affichés avec l'accord de nos clients ».
 * Tant que la liste est vide, la maquette affiche des emplacements vides.
 */
export type ClientLogo = { name: string; src: string; href?: string };
export const CLIENT_LOGOS: ClientLogo[] = [
  // `href` absent = logo non cliquable : on ne lie que les URL vérifiées.
  { name: 'Laforêt Immobilier Antibes', src: '/logos/laforet.png' },
  { name: 'Datalinx', src: '/logos/datalinx.png', href: 'https://www.datalinx.fr/' },
  { name: 'MAV Développement Immobilier', src: '/logos/mav.png' },
  { name: '2i Architecture', src: '/logos/2i-architecture.png' },
  { name: 'K Management - Property & Wealth', src: '/logos/pwkm.png' },
  { name: 'AXEO Services Antibes - Cagnes-sur-Mer', src: '/logos/axeo-services.png' },
  { name: 'Kiwanis Antibes Juan-les-Pins', src: '/logos/kiwanis-antibes.png' },
  { name: 'Logic Santé', src: '/logos/logic-sante.png' },
  // Boutique du groupe, pas un client : affichée au titre du savoir-faire ecoM.
  { name: 'Repro-Tableaux.com', src: '/logos/repro-tableaux.png', href: 'https://www.repro-tableaux.com' },
];

/** Nombre minimal d'emplacements affichés : les logos manquants restent en pointillés. */
export const LOGO_SLOTS = 18;
