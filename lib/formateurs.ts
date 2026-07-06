/**
 * Identité des formateurs d'Alatere forMa, alimentant le JSON-LD `Person`
 * (signal d'entité / E-E-A-T pour l'AI SEO) de la route /alatere-forma/formateurs.
 * Miroir de la liste rendue par le composant FormateursPage (mêmes nom/rôle/LinkedIn) ;
 * garder les deux synchronisés en cas de changement d'équipe.
 */

export type FormateurId = {
  /** Initiales (avatar monogramme + clé de jointure avec les bios). */
  initials: string;
  name: string;
  role: { fr: string; en: string };
  linkedin: string;
};

export const FORMATEURS: FormateurId[] = [
  {
    initials: 'JA',
    name: 'Jean-Gérard Anfossi',
    role: { fr: 'Fondateur & formateur', en: 'Founder & trainer' },
    linkedin: 'https://www.linkedin.com/in/jeangerardanfossi/',
  },
  {
    initials: 'SB',
    name: 'Simona Ballatore',
    role: { fr: 'Formatrice réseaux sociaux & Canva', en: 'Social media & Canva trainer' },
    linkedin: 'https://www.linkedin.com/in/simona-ballatore-4287355b/',
  },
  {
    initials: 'HM',
    name: 'Hélène Michailou',
    role: { fr: 'Juriste & formatrice', en: 'Lawyer & trainer' },
    linkedin: 'https://www.linkedin.com/in/h%C3%A9l%C3%A8ne-michailou-74b1a81/',
  },
  {
    initials: 'BA',
    name: 'Barbara Arcadu',
    role: { fr: 'Consultante SEA & formatrice', en: 'SEA consultant & trainer' },
    linkedin: 'https://www.linkedin.com/in/barbara-arcadu-58601732/',
  },
  {
    initials: 'RS',
    name: 'Richard Solaro',
    role: { fr: 'Consultant webmarketing', en: 'Web marketing consultant' },
    linkedin: 'https://www.linkedin.com/in/richard-solaro-consultant-webmarketing/',
  },
  {
    initials: 'VH',
    name: 'Vincent Huot',
    role: { fr: 'Coach professionnel & formateur', en: 'Professional coach & trainer' },
    linkedin: 'https://www.linkedin.com/in/vincent-huot-coaching/',
  },
];
