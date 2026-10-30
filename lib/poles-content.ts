/**
 * Contenu des pages de pôle (SEO). Rien au-delà des « Données société » du brief.
 */
export type Block = { heading: string; body: string; bullets?: string[] };

export type PoleContent = {
  slug: string;
  brand: string; // "ecoM"
  colorVar: string; // variable CSS de la charte
  status: string; // libellé de statut (badge héros)
  tagline: string; // sous-titre
  intro: string;
  blocks: Block[];
  metaTitle: string;
  metaDescription: string;
};

export const polesContent: Record<string, PoleContent> = {
  ecom: {
    slug: 'alatere-ecom',
    brand: 'ecoM',
    colorVar: '--brand',
    status: 'E-commerce',
    tagline: 'Sites marchands opérés en propre · depuis 2003',
    intro:
      "Depuis vingt ans, nous concevons, exploitons et référençons nos propres boutiques d'art en ligne. Le SEO, le SEA et la gestion que nous proposons à nos clients sont ceux qui font tourner nos sites chaque jour.",
    blocks: [
      {
        heading: 'Nos boutiques',
        body: 'Un réseau de sites marchands exploités en propre, en France et en Europe.',
        bullets: [
          'repro-tableaux.com - France',
          'copia-di-arte.com - Union européenne · 4 langues',
          'reprodart.com',
          'art-prints-on-demand.com',
          'myartprints.cz',
        ],
      },
      {
        heading: 'Référencement SEO & SEA',
        body: "Référencement naturel et payant, structure technique, contenu et suivi des résultats, appliqués d'abord à nos propres catalogues.",
      },
      {
        heading: 'Opérations e-commerce',
        body: 'Gestion de catalogue, production à la demande, logistique et relation client multilingue.',
      },
    ],
    metaTitle: 'Alatere ecoM - Savoir-faire e-commerce & SEO à Antibes',
    metaDescription:
      "Nous exploitons nos propres boutiques d'art en ligne depuis vingt ans (repro-tableaux.com, copia-di-arte.com…). SEO, SEA et gestion e-commerce pour votre boutique.",
  },
  forma: {
    slug: 'alatere-forma',
    brand: 'forMa',
    colorVar: '--gold',
    status: 'Certifié Qualiopi',
    tagline: 'Organisme de formation professionnelle',
    intro:
      "Organisme de formation enregistré sous le n° 93.06.07588.06, certifié Qualiopi depuis 2022. Cinq domaines de formation, finançables par votre OPCO.",
    blocks: [
      {
        heading: 'Cinq domaines de formation',
        body: 'Pour les dirigeants, leurs équipes et les indépendants.',
        bullets: [
          'Webmarketing',
          'Intelligence artificielle',
          'Langues',
          'Communication digitale',
          'Immobilier',
        ],
      },
      {
        heading: 'Financement OPCO',
        body: "Nos formations peuvent être prises en charge par votre OPCO. Nous vous aidons à monter le dossier.",
      },
      {
        heading: 'Certification Qualiopi',
        body: "Certification Qualiopi obtenue en 2022. Les programmes détaillés sont sur notre catalogue en ligne.",
      },
    ],
    metaTitle: 'Alatere forMa - Organisme de formation Qualiopi à Antibes',
    metaDescription:
      "Organisme de formation professionnelle certifié Qualiopi (n° 93.06.07588.06). Webmarketing, IA, langues, communication digitale, immobilier. Financement OPCO.",
  },
  domo: {
    slug: 'alatere-domo',
    brand: 'doMo',
    colorVar: '--forest',
    status: 'Agréé préfecture',
    tagline: "Domiciliation d'entreprise à Antibes",
    intro:
      "Votre siège social au 9 Boulevard Albert 1er. Agrément préfectoral n° 2022/12 du 20/09/2022, plus de 50 entreprises déjà domiciliées. L'adresse vaut pour une immatriculation comme pour un transfert de siège.",
    blocks: [
      {
        heading: 'Services inclus',
        body: 'Nous traitons votre courrier professionnel.',
        bullets: [
          'Réception du courrier',
          'Scan et notification',
          'Réexpédition',
          'Adresse pour SIRET et transfert de siège',
        ],
      },
      {
        heading: 'Nos formules',
        body: 'Offre Headquarters à 30 € · formule Pro à 50 € / mois · frais de dossier 79 €.',
      },
      {
        heading: 'Agrément préfectoral',
        body: 'Agrément préfectoral n° 2022/12 du 20/09/2022. Plus de 50 entreprises sont domiciliées chez nous.',
      },
    ],
    metaTitle: "Alatere doMo - Domiciliation d'entreprise à Antibes (agréée)",
    metaDescription:
      "Domiciliation d'entreprise au 9 Boulevard Albert 1er à Antibes. Agrément préfectoral 2022/12, +50 entreprises domiciliées. Formules dès 30 €. Réception, scan, réexpédition.",
  },
  cowo: {
    slug: 'alatere-cowo',
    brand: 'coWo',
    colorVar: '--teal',
    status: 'Communauté',
    tagline: 'Espace de coworking à Antibes',
    intro:
      "Postes nomades, bureaux fermés et salles de réunion à deux pas du port Vauban. Café, fibre et un événement business par mois, au 9 boulevard Albert 1er à Antibes.",
    blocks: [
      {
        heading: "L'espace",
        body: 'Un espace de travail climatisé.',
        bullets: [
          '5 salles de réunion',
          '16 postes de travail',
          'Internet haut-débit (fibre)',
          'Salles climatisées',
        ],
      },
      {
        heading: 'La communauté',
        body: 'Un événement business par mois et un café partagé : vous travaillez à côté d’autres indépendants et vous élargissez votre réseau.',
      },
      {
        heading: 'Emplacement',
        body: 'Au 9 boulevard Albert 1er à Antibes, à deux pas du port Vauban et du centre-ville.',
      },
    ],
    metaTitle: 'Alatere coWo - Espace de coworking à Antibes (port Vauban)',
    metaDescription:
      'Coworking à Antibes : 16 postes, 5 salles de réunion, fibre, salles climatisées, événements business mensuels. À deux pas du port Vauban, 9 boulevard Albert 1er.',
  },
};
