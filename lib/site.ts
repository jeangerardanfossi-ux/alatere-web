/**
 * Données société Alatere Web - source unique de vérité.
 * Ne rien inventer au-delà de ce fichier (cf. brief « Données société »).
 */
export const company = {
  legalName: 'Alatere Web SAS',
  directors: 'Iveta & Jean-Gérard Anfossi',
  address: '9 Boulevard Albert 1er',
  postalCode: '06600',
  city: 'Antibes',
  country: 'France',
  phone: '+33 7 61 56 45 56',
  phoneDisplay: '07 61 56 45 56',
  email: 'contact@alatere-web.com',
  siret: '443 421 334 00030',
  vat: 'FR 00 443 421 334',
  naf: '7311Z',
  rcs: 'RCS Antibes',
  since: 2002,
  formationNumber: '93.06.07588.06',
  qualiopiSince: 2022,
  qualiopiCert: '[À COMPLÉTER]',
  domiciliationAgrement: '2022/12',
  domiciliationAgrementDate: '20/09/2022',
  domiciliatedCount: '+50 entreprises domiciliées',
  linkedin: 'https://www.linkedin.com/company/alatere-web/',
  facebook: 'https://www.facebook.com/alatereweb',
  // Réseaux Alatere doMo · coWo
  linkedinDomo: 'https://www.linkedin.com/showcase/alatere-domo/',
  facebookDomo: 'https://www.facebook.com/alateredomo/',
  // Fiches Google Business / Maps (une par pôle)
  mapsForma: 'https://maps.app.goo.gl/T8Td6eYKXQbJYJ637', // Alatere Web, formation marketing digital & IA (fiche principale)
  mapsDomo: 'https://maps.app.goo.gl/SCqBr1ZPwbbb7sq7A', // Alatere doMo
  mapsCowo: 'https://maps.app.goo.gl/y9AHJHxXD7y9U5sx8', // Alatere coWo
  mapsEcom: 'https://maps.app.goo.gl/LuUe1QSGMXmXeDCh9', // Repro-tableaux.FR (boutique ecoM)
  ecomSites: [
    'repro-tableaux.com',
    'copia-di-arte.com',
    'reprodart.com',
    'art-prints-on-demand.com',
    'myartprints.cz',
  ],
} as const;

/** Pôles d'activité - clé, libellé de marque, ancre, couleur de thème Grommet. */
export const poles = [
  { key: 'ecom', brand: 'ecoM', anchor: '#ecom', href: '/alatere-ecom', color: 'ecoM' },
  { key: 'forma', brand: 'forMa', anchor: '#forma', href: '/alatere-forma', color: 'forMa' },
  { key: 'domo', brand: 'doMo', anchor: '#domo', href: '/alatere-domo', color: 'doMo' },
  { key: 'cowo', brand: 'coWo', anchor: '#cowo', href: '/alatere-cowo', color: 'coWo' },
] as const;

/** Navigation principale (header). */
export const nav = [
  ...poles.map((p) => ({ label: p.brand, href: p.anchor, color: p.color })),
  { label: 'Contact', href: '#contact', color: 'brand' as const },
];
