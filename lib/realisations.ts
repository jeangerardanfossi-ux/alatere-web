/**
 * Contenu de la page « Clients & Réalisations ».
 * Porté du wireframe Claude Design « Clients & Réalisations - Wireframes.dc.html »
 * (turn 3 / option 3a — direction A « éditorial sobre », page complète,
 * trois réalisations par pôle).
 *
 * Les douze `CaseStudy` sont désormais réelles (FR + EN) et `CLIENT_LOGOS` est
 * renseigné : le gabarit d'attente entre crochets a été retiré.
 *
 * Reste une seule chose à faire pour publier : passer `REALISATIONS_READY` à
 * `true`. Cette bascule retire le `noindex` des deux routes, ajoute la page au
 * sitemap et affiche le lien « Clients & Réalisations » dans le pied de page
 * (colonne « Liens utiles »). Tant qu'elle vaut `false`, la page reste en ligne
 * mais invisible des moteurs.
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
  /** Cadrage de la photo, ex. « 50% 22% » pour remonter sur le sujet. */
  objectPosition?: string;
  /** Étude de cas détaillée — le lien « Lire l'étude de cas » n'apparaît que si renseigné. */
  href?: string;
};

export type PoleKey = 'ecom' | 'forma' | 'domo' | 'cowo';

/** Seule bascule restante avant publication (voir en-tête). */
export const REALISATIONS_READY = false;

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
 * à la même adresse que l'agence — ce que le verbatim du gérant confirme
 * (« locaux au centre d'Antibes… proche de nos lieux de travail »).
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
  // Verbatim du gérant, repris mot pour mot (orthographe d'origine conservée).
  quote: {
    fr: "Excellent formation Immobilier en Anglais. Lancement avec succès et bien sur découverte intensive du vocabulaire. Locaux au centre d'Antibes, cela permettant d'être proche de nos lieux de travail. Bonne pédagogie de l'équipe de formation.",
    en: 'Excellent English-for-real-estate training. A successful start and, of course, an intensive dive into the vocabulary. The rooms are in central Antibes, which keeps us close to where we work. The training team teaches well.',
  },
  nom: 'Julien Janser',
  fonction: { fr: 'Gérant', en: 'Managing director' },
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
 * Depuis que les cartes Copia-di-Arte et Art-Prints-on-Demand ont laissé la
 * place à des clients (Rocher Mistral, VinAzur), c'est cette carte qui porte
 * le réseau complet : les cinq boutiques sont nommées, pays par pays.
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
    fr: `Notre propre boutique, lancée en ${REPRO_SINCE} avec l'atelier hambourgeois KunstKopie.de : ils fabriquent les toiles et tiennent le catalogue d'art, nous exploitons et référençons le site, service client compris. Le modèle a essaimé sur cinq pays, et les cinq boutiques sont tenues par la même équipe, depuis Antibes.`,
    en: `Our own store, launched in ${REPRO_SINCE} with the Hamburg workshop KunstKopie.de: they make the canvases and maintain the art catalogue, we run and rank the store, customer service included. The model spread to five countries, and all five stores are run by the same team, from Antibes.`,
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
      fr: 'Cinq boutiques du réseau exploitées : repro-tableaux.com (FR), copia-di-arte.com (IT), reprodart.com (ES), art-prints-on-demand.com (US) et myartprints.cz (CZ)',
      en: 'Five stores in the network run by us: repro-tableaux.com (FR), copia-di-arte.com (IT), reprodart.com (ES), art-prints-on-demand.com (US) and myartprints.cz (CZ)',
    },
  ],
  results: [
    {
      v: { fr: `${YEARS_SINCE(REPRO_SINCE)} ans`, en: `${YEARS_SINCE(REPRO_SINCE)} years` },
      l: { fr: "d'exploitation continue", en: 'of continuous operation' },
    },
    {
      v: '5',
      l: { fr: 'boutiques exploitées : FR, IT, ES, US, CZ', en: 'stores run by us: FR, IT, ES, US, CZ' },
    },
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
 * ecoM — Rocher Mistral (rochermistral.com), parc d'attractions à La Barben (13).
 * « Le parc qui célèbre la Provence », ouvert le 1er juillet 2021 dans le château
 * millénaire de La Barben, à 20 min d'Aix-en-Provence, à l'initiative de Vianney
 * Audemard d'Alançon. Spectacles vivants, sur le modèle d'un Puy du Fou provençal.
 * Sources du portrait : le site du parc (meta description, og:image) et la fiche
 * Wikipédia FR pour la date d'ouverture et le fondateur.
 * Mission Alatere Web : le marketing en ligne du lancement, en Google Ads, avec
 * un double objectif — les ventes de billets en ligne et la venue au parc.
 * Aucun chiffre de campagne (budget, ROAS, conversions) n'est archivé côté
 * agence : les « résultats » affichés restent des faits, pas des mesures.
 * Visuel : l'image de partage du site du parc (le château vu du ciel), reprise
 * en /photos/ecom-rocher-mistral.webp — ratio 2:1, cadrage centré par défaut.
 */
const rocherMistral: CaseStudy = {
  client: 'Rocher Mistral',
  secteur: {
    fr: "Parc d'attractions · spectacles vivants, château de La Barben",
    en: 'Theme park · live shows, Château de La Barben',
  },
  annee: '2021',
  contexte: {
    fr: "« Le parc qui célèbre la Provence », ouvert en juillet 2021 dans le château millénaire de La Barben, à 20 minutes d'Aix-en-Provence. Un parc qui ouvre part de zéro en acquisition : ni notoriété en ligne, ni historique de compte, et une première saison à remplir.",
    en: '“The park that celebrates Provence”, opened in July 2021 in the thousand-year-old château of La Barben, 20 minutes from Aix-en-Provence. A park that opens starts from nothing in acquisition: no online awareness, no account history, and a first season to fill.',
  },
  bullets: [
    {
      fr: 'Marketing en ligne du lancement du parc, mené en Google Ads',
      en: 'Online marketing for the park launch, run on Google Ads',
    },
    {
      fr: 'Campagnes orientées ventes de billets sur la billetterie en ligne',
      en: 'Campaigns driving ticket sales on the online box office',
    },
    {
      fr: 'Campagnes orientées venue au parc, sur sa zone de chalandise',
      en: 'Campaigns driving actual visits, across the park’s catchment area',
    },
  ],
  results: [
    {
      v: 'Google Ads',
      l: { fr: "levier d'acquisition du lancement", en: 'the acquisition channel at launch' },
    },
    {
      v: '2021',
      l: { fr: "première saison du parc", en: 'the park’s first season' },
    },
    {
      v: { fr: 'Double objectif', en: 'Two goals' },
      l: { fr: 'ventes en ligne et venue sur place', en: 'online sales and on-site visits' },
    },
  ],
  image: '/photos/ecom-rocher-mistral.webp',
  imageCaption: {
    fr: 'Photo — le château de La Barben, écrin du parc Rocher Mistral',
    en: 'Photo — Château de La Barben, home of the Rocher Mistral park',
  },
};

/**
 * ecoM — VinAzur (vinazur.fr), négoce en ligne de vins de Provence.
 * Vraie étude de cas client, contrairement aux deux cartes précédentes.
 * Société fondée en 2012 par Damien Dubus à Saint-Laurent-du-Var : des vins de
 * petits producteurs provençaux, le rosé en tête, vendus en direct au prix du
 * domaine. Source du portrait de l'entreprise : « VinAzur - bringing the wines
 * of Provence to the USA », shuttersandsunflowers.com.
 * Mission Alatere Web : promotion en ligne de la boutique, rédaction et refonte
 * des fiches produits, SEO du site et référencement du catalogue sur les places
 * de marché (CDiscount).
 * La société a été revendue en 2016 et n'existe plus : ni la carte ni le mur de
 * logos ne portent de lien sortant, vinazur.fr ne répondant plus.
 * Aucun chiffre de trafic ou de ventes n'est archivé côté agence : les trois
 * « résultats » affichés sont des faits vérifiables, pas des mesures inventées.
 * Visuel de la carte : la photo d'ambiance (`/photos/ecom-vinazur.webp`).
 * Le logotype (`/logos/vinazur.png`) sert, lui, au mur de logos `CLIENT_LOGOS`.
 */
const vinazur: CaseStudy = {
  client: 'Vinazur - vins de Provence',
  secteur: {
    fr: 'Vins de Provence · boutique en ligne et places de marché',
    en: 'Provence wines · online store and marketplaces',
  },
  annee: { fr: "Jusqu'en 2016", en: 'Until 2016' },
  contexte: {
    fr: "Négoce de vins de Provence installé à Saint-Laurent-du-Var, né en 2012 : des petits producteurs peu connus, du rosé pour l'essentiel, vendus en direct au prix du domaine. Le catalogue était bon, sa visibilité restait à construire - sur la boutique comme en dehors. La société a été revendue en 2016.",
    en: 'A Provence wine merchant based in Saint-Laurent-du-Var, started in 2012: little-known small growers, mostly rosé, sold direct at cellar-door prices. The catalogue was good; its visibility was not - neither on the store nor beyond it. The company was sold in 2016.',
  },
  bullets: [
    {
      fr: 'Promotion en ligne de la boutique : acquisition, contenus et campagnes',
      en: 'Online promotion of the store: acquisition, content and campaigns',
    },
    {
      fr: 'Rédaction et refonte des fiches produits, domaine par domaine',
      en: 'Product pages rewritten and redesigned, estate by estate',
    },
    {
      fr: 'SEO du site et référencement du catalogue sur les places de marché, dont CDiscount',
      en: 'Site SEO and catalogue listed on marketplaces, CDiscount included',
    },
  ],
  results: [
    {
      v: { fr: 'Fiches produits', en: 'Product pages' },
      l: { fr: 'réécrites et optimisées pour le référencement', en: 'rewritten and optimised for search' },
    },
    {
      // « Marketplace » en un seul mot déborde de sa colonne (137 px pour 102 px
      // disponibles, et rien où couper) : la forme en deux mots passe à la ligne.
      v: { fr: 'Places de marché', en: 'Online marketplaces' },
      l: { fr: 'catalogue référencé hors du site', en: 'catalogue listed beyond the store' },
    },
    {
      v: '2016',
      l: { fr: 'société revendue, mission close', en: 'company sold, engagement closed' },
    },
  ],
  // Photo carrée (554 x 554) dans un slot bien plus large que haut (327 x 130) :
  // le cadrage est calé en bas de l'image, sur le logotype et sa baseline.
  image: '/photos/ecom-vinazur.webp',
  objectPosition: '50% 100%',
  imageCaption: {
    fr: 'Photo — VinAzur, « De la Vigne au Verre… »',
    en: 'Photo — VinAzur, “De la Vigne au Verre…”',
  },
};

/**
 * forMa — ASNOV (asnov.fr), assistante virtuelle sur la Côte d'Azur.
 * Deux parcours en 2026 : « Maîtriser Claude — de l'organisation à l'autonomie »
 * (10 modules, 4 demi-journées, 14 h 30 nettes — chiffres repris du support de
 * présentation BNI du 27/05/2026) et un parcours webmarketing / Google Ads,
 * dont la durée n'est pas documentée : aucun chiffre affiché pour celui-là.
 * La stagiaire est nommée sur la page depuis qu'elle a transmis son verbatim.
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
  // Verbatim transmis par la stagiaire, repris mot pour mot.
  quote: {
    fr: "Formation sur Claude AI, un vrai plaisir ! À l'écoute et pédagogue, Jean-Gérard a su adapter ses explications à mon métier d'assistante virtuelle. Je repars avec des outils concrets et directement utilisables au quotidien.",
    en: 'Training on Claude AI, a real pleasure! Attentive and a good teacher, Jean-Gérard tailored his explanations to my work as a virtual assistant. I come away with concrete tools I can use straight away, day to day.',
  },
  nom: 'Delfine Jama',
  fonction: { fr: 'Assistante virtuelle, ASNOV', en: 'Virtual assistant, ASNOV' },
  image: '/photos/forma-asnov.webp',
  imageCaption: {
    fr: 'Photo — séance de formation, sur le poste de travail de la stagiaire',
    en: 'Photo — training session, at the trainee’s own workstation',
  },
};

/**
 * forMa — AXEO Services Antibes - Cagnes-sur-Mer, franchise de services à domicile
 * et aux entreprises (groupe La Poste). Accompagnement en formation depuis trois ans
 * (durée communiquée par le client), sur trois terrains : webmarketing, réseaux
 * sociaux et langues.
 *
 * Chiffres et verbatim repris du support de témoignage BNI du 25/03/2026,
 * préparé avec le client : 11 600 € HT de formation sur 2025-2026, financés à
 * 100 % par l'OPCO AKTO, zéro reste à charge. Les tuiles portent bien la
 * mention « 2025-2026 » : le montant ne couvre que deux des trois années.
 */
const axeo: CaseStudy = {
  client: 'AXEO Services Antibes - Cagnes-sur-Mer',
  secteur: {
    fr: 'Services à domicile et aux entreprises',
    en: 'Home and business services',
  },
  annee: { fr: 'Depuis trois ans', en: 'For three years' },
  contexte: {
    fr: "Agence de services à domicile et aux entreprises, installée à Antibes puis à Cagnes-sur-Mer : ménage, entretien des locaux, espaces verts, petits travaux. Nous formons son équipe depuis trois ans, sur trois terrains qui se complètent.",
    en: 'A home and business services agency, first in Antibes then in Cagnes-sur-Mer: cleaning, premises upkeep, green spaces, small works. We have been training its team for three years, across three complementary fields.',
  },
  bullets: [
    {
      fr: 'Webmarketing : acquisition en ligne et visibilité locale',
      en: 'Digital marketing: online acquisition and local visibility',
    },
    {
      fr: 'Réseaux sociaux : animation des pages et publication au quotidien',
      en: 'Social media: running the pages and posting day to day',
    },
    {
      fr: "Langues : montée en compétences face à une clientèle internationale",
      en: 'Languages: upskilling for an international clientele',
    },
  ],
  results: [
    {
      v: { fr: '11 600 €', en: '€11,600' },
      l: {
        fr: 'de formation financée en 2025-2026',
        en: 'of training funded across 2025-2026',
      },
    },
    {
      v: '0 €',
      l: { fr: "de reste à charge pour l'agence", en: 'left for the agency to pay' },
    },
    {
      v: '100 %',
      l: { fr: "pris en charge par l'OPCO AKTO", en: 'covered by the AKTO OPCO' },
    },
  ],
  quote: {
    fr: "On pensait que c'était compliqué… en réalité, on a juste suivi le rythme.",
    en: 'We thought it would be complicated… in the end, we just followed the pace.',
  },
  nom: 'Alexandre Bry',
  fonction: {
    fr: 'Président de Neatworks (AXEO Services)',
    en: 'President of Neatworks (AXEO Services)',
  },
  // Photo de l'agence de Cagnes-sur-Mer, reprise du dossier client
  // (05-FORMATIONS-ALATERE/.../2025_dossiers-clients/axeo-services/),
  // recadrée au format des cartes. Remplace le logo qui servait de visuel.
  image: '/photos/forma-axeo-services.webp',
  imageCaption: {
    fr: "Photo — l'agence AXEO Services de Cagnes-sur-Mer",
    en: 'Photo — the AXEO Services agency in Cagnes-sur-Mer',
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
  ecom: [reproTableaux, rocherMistral, vinazur],
  forma: [laforet, asnov, axeo],
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
  {
    name: 'Rocher Mistral',
    src: '/logos/rocher-mistral.png',
    href: 'https://www.rochermistral.com',
  },
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
  // Client ecoM. Pas de `href` : la société a été revendue en 2016 et vinazur.fr
  // ne répond plus — on ne lie que des URL vérifiées.
  { name: 'Vinazur - vins de Provence', src: '/logos/vinazur.png' },
];

/** Nombre minimal d'emplacements affichés : les logos manquants restent en pointillés. */
export const LOGO_SLOTS = 18;
