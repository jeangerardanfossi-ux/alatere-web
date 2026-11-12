/**
 * Données partagées de la page « Partenaires agences » (Alatere ecoM) :
 * lues à la fois par le composant client (affichage) et par lib/jsonld.ts (balisage).
 */

/** Date de dernière mise à jour du contenu (affichée sur la page + dateModified). */
export const PARTENAIRES_UPDATED = '2026-11-11';

/** Équipe ecoM - rôles identiques à ceux affichés sur la page. */
export const ECOM_TEAM = [
  {
    name: 'Jean-Gérard Anfossi',
    role: { fr: 'Dirigeant, acquisition et formation', en: 'Managing director, acquisition and training' },
    linkedin: 'https://www.linkedin.com/in/jeangerardanfossi/',
  },
  {
    name: 'Iveta Siskova Anfossi',
    role: {
      fr: 'Associée, opérations e-commerce et relation client',
      en: 'Partner, e-commerce operations and customer care',
    },
    linkedin: 'https://www.linkedin.com/in/iveta-siskova-office-manager/',
  },
  {
    name: 'Simona Ballatore',
    role: {
      fr: 'Marketing digital et relation client e-commerce multilingue',
      en: 'Digital marketing and multilingual e-commerce customer care',
    },
    linkedin: 'https://www.linkedin.com/in/simona-ballatore/',
  },
];
