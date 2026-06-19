import type { ThemeType } from 'grommet';

/**
 * Charte Alatere Web — extraite du logo officiel.
 * Modifier les couleurs / la typo ici se répercute sur tout le site.
 *
 * A11y : `accent-1` (or), l'or clair et `accent-2` (vert feuille) ont un
 * contraste insuffisant pour du texte sur fond clair — réservés aux
 * accents / filets / icônes. Texte courant en `ink`, `brand` ou `forest`.
 */
export const palette = {
  brand: '#0C306C', // bleu Alatere
  forest: '#305424', // vert forêt (neutral-1)
  leaf: '#88B456', // vert feuille (accent-2)
  teal: '#186C60', // sarcelle (accent-3)
  gold: '#C0934A', // or / laiton (accent-1)
  goldLight: '#E4C078', // or clair (survols, détails)
  cream: '#F7F3EA', // fond clair
  ink: '#13232E', // texte principal
  inkWeak: '#274050', // texte secondaire
  white: '#FFFFFF',
} as const;

/** Accent par pôle, comme sur la maquette (le mot de marque est coloré). */
export const poleColors = {
  ecom: palette.brand, // bleu
  forma: palette.gold, // or
  domo: palette.forest, // vert
  cowo: palette.gold, // or / pêche
} as const;

// Variables CSS injectées par next/font (voir app/layout.tsx).
const bodyFont = 'var(--font-mulish), system-ui, sans-serif';
const headingFont = 'var(--font-poppins), system-ui, sans-serif';

export const alatereTheme: ThemeType = {
  global: {
    colors: {
      brand: palette.brand,
      'accent-1': palette.gold,
      'accent-2': palette.leaf,
      'accent-3': palette.teal,
      'neutral-1': palette.forest,
      'neutral-2': palette.teal,
      focus: palette.brand,
      background: palette.cream,
      'background-front': palette.white,
      'background-back': palette.cream,
      text: { light: palette.ink, dark: '#F7F3EA' },
      'text-strong': { light: palette.ink, dark: '#FFFFFF' },
      'text-weak': { light: palette.inkWeak, dark: '#C9D6DE' },
      'text-xweak': { light: '#5A7080', dark: '#9FB2BC' },
      border: { light: 'rgba(19,35,46,0.12)', dark: 'rgba(255,255,255,0.18)' },
      placeholder: '#7E909B',
      // Couleurs par pôle (titres / bandeaux des cartes d'activité).
      ink: palette.ink,
      cream: palette.cream,
      gold: palette.gold,
      'gold-light': palette.goldLight,
      forest: palette.forest,
      leaf: palette.leaf,
      teal: palette.teal,
      ecoM: poleColors.ecom,
      forMa: poleColors.forma,
      doMo: poleColors.domo,
      coWo: poleColors.cowo,
    },
    font: {
      family: bodyFont,
      size: '18px',
      height: '1.6',
    },
    focus: {
      border: { color: 'brand' },
    },
    // Espacements généreux, langage Grommet.
    edgeSize: {
      xxsmall: '4px',
      xsmall: '8px',
      small: '16px',
      medium: '24px',
      large: '48px',
      xlarge: '72px',
    },
    breakpoints: {
      small: { value: 768 },
      medium: { value: 1280 },
      large: {},
    },
  },
  heading: {
    font: { family: headingFont },
    weight: 700,
    color: 'ink',
    level: {
      1: {
        font: { family: headingFont },
        medium: { size: '46px', height: '1.1' },
        large: { size: '58px', height: '1.05' },
      },
      2: {
        font: { family: headingFont },
        medium: { size: '34px', height: '1.15' },
      },
      3: {
        font: { family: headingFont },
        medium: { size: '24px', height: '1.2' },
      },
      4: {
        font: { family: headingFont },
        medium: { size: '20px', height: '1.25' },
      },
    },
  },
  paragraph: {
    medium: { size: '18px', height: '1.65', maxWidth: '60ch' },
    large: { size: '21px', height: '1.6', maxWidth: '40ch' },
  },
  text: {
    medium: { size: '18px', height: '1.6' },
  },
  anchor: {
    color: 'brand',
    fontWeight: 600,
    textDecoration: 'none',
    hover: { textDecoration: 'underline' },
  },
  button: {
    border: { radius: '999px' },
    padding: { vertical: '12px', horizontal: '28px' },
    default: {
      color: 'brand',
      font: { weight: 600 },
    },
    primary: {
      background: { color: 'brand' },
      color: 'white',
      font: { weight: 700 },
    },
    secondary: {
      border: { color: 'brand', width: '2px' },
      color: 'brand',
      font: { weight: 700 },
    },
    hover: {
      primary: { background: { color: '#0A2858' } },
      secondary: { background: { color: 'rgba(12,48,108,0.06)' } },
    },
  },
  card: {
    container: {
      round: 'medium',
      elevation: 'small',
      background: 'background-front',
    },
  },
  formField: {
    border: {
      color: 'border',
      side: 'all',
      size: 'xsmall',
    },
    round: 'small',
    label: {
      size: 'small',
      weight: 600,
      color: 'text-weak',
      margin: { horizontal: '0', vertical: 'xsmall' },
    },
    error: { color: '#C0392B' },
  },
};
