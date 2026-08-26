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
 *   3. renseigner les chiffres de `STATS` (retirer la tuile si non sourçable) ;
 *   4. passer `REALISATIONS_READY` à `true` — cette seule bascule retire le
 *      `noindex` des deux routes, ajoute la page au sitemap et affiche le lien
 *      « Clients & Réalisations » dans le pied de page (colonne « Liens utiles »).
 *
 * NB : l'entrée « Réalisations » du MENU PRINCIPAL, elle, est permanente
 * (choix client du 2026-08-26) — voir `NAV` dans components/grommet/Header.tsx.
 */

import { company } from '@/lib/site';

/** Texte bilingue (FR par défaut, EN sous /en). */
export type Bi = { fr: string; en: string };

/** Chiffre de résultat : valeur brute + libellé bilingue. */
export type Result = { v: string; l: Bi };

export type CaseStudy = {
  /** Nom du client, tel qu'il autorise son affichage. */
  client: string;
  secteur: Bi;
  annee: string;
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

/** Études de cas par pôle — trois par pôle dans la maquette retenue. */
export const CASES: Record<PoleKey, CaseStudy[]> = {
  ecom: slots(),
  forma: slots(),
  domo: slots(),
  cowo: slots(),
};

/**
 * Mur de logos — « affichés avec l'accord de nos clients ».
 * Tant que la liste est vide, la maquette affiche des emplacements vides.
 */
export type ClientLogo = { name: string; src: string; href?: string };
export const CLIENT_LOGOS: ClientLogo[] = [];

/** Nombre d'emplacements affichés quand aucun logo n'est encore fourni. */
export const LOGO_SLOTS = 18;

/**
 * Bandeau de chiffres du hero. `value: null` = chiffre non sourçable :
 * la tuile affiche « [00] » en attente, et doit être retirée si le chiffre
 * ne peut pas être justifié (règle de la maquette).
 */
export type Stat = { value: string | null; label: Bi; hint: Bi };

const YEARS = new Date().getFullYear() - company.since;

export const STATS: Stat[] = [
  {
    value: String(YEARS),
    label: { fr: "Années d'activité", en: 'Years in business' },
    hint: { fr: `depuis ${company.since}`, en: `since ${company.since}` },
  },
  {
    value: null,
    label: { fr: 'Entreprises accompagnées', en: 'Companies supported' },
    hint: { fr: 'tous pôles confondus', en: 'across all four divisions' },
  },
  {
    value: null,
    label: { fr: 'Stagiaires formés', en: 'Trainees taught' },
    hint: { fr: 'depuis la certification', en: 'since certification' },
  },
  {
    value: null,
    label: { fr: 'Taux de satisfaction', en: 'Satisfaction rate' },
    hint: { fr: 'source à préciser', en: 'source to be confirmed' },
  },
];
