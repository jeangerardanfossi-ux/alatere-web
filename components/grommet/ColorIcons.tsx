/**
 * Icônes illustrées multicolores (bleu → vert → orange) de la page forMa.
 * SVG inline, sans dépendance. Chaque icône définit ses dégradés avec un id
 * unique (useId) pour éviter les collisions quand plusieurs icônes cohabitent.
 */
'use client';

import { useId } from 'react';

const BLUE = '#1f5fae';
const NAVY = '#0c306c';
const GREEN = '#6fae4a';
const LEAF = '#88b456';
const ORANGE = '#e8913a';
const YELLOW = '#f2b84b';

type P = { className?: string; title?: string };

function Svg({ className, title, children }: P & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill="none"
    >
      {children}
    </svg>
  );
}

/** id de dégradé sûr dans url(#…) : useId() renvoie des caractères (« : », « « ») invalides en CSS. */
function useGid() {
  return 'ci' + useId().replace(/[^a-zA-Z0-9_-]/g, '');
}

function Grad({ id, from, to, mid, x2 = 1, y2 = 1 }: { id: string; from: string; to: string; mid?: string; x2?: number; y2?: number }) {
  return (
    <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={48 * x2} y2={48 * y2}>
      <stop offset="0" stopColor={from} />
      {mid && <stop offset="0.5" stopColor={mid} />}
      <stop offset="1" stopColor={to} />
    </linearGradient>
  );
}

/** Webmarketing : trois barres croissantes. */
export function IcChart(p: P) {
  const id = useGid();
  return (
    <Svg {...p}>
      <defs>
        <Grad id={`${id}a`} from={BLUE} to={NAVY} x2={0} />
        <Grad id={`${id}b`} from={LEAF} to={GREEN} x2={0} />
        <Grad id={`${id}c`} from={YELLOW} to={ORANGE} x2={0} />
      </defs>
      <rect x="7" y="28" width="9" height="13" rx="2" fill={`url(#${id}a)`} />
      <rect x="19.5" y="19" width="9" height="22" rx="2" fill={`url(#${id}b)`} />
      <rect x="32" y="8" width="9" height="33" rx="2" fill={`url(#${id}c)`} />
    </Svg>
  );
}

/** Intelligence artificielle : puce « IA ». */
export function IcAi(p: P) {
  const id = useGid();
  const pins = [15, 21, 27, 33];
  return (
    <Svg {...p}>
      <defs>
        <Grad id={`${id}g`} from={BLUE} mid={GREEN} to={ORANGE} />
      </defs>
      <g stroke={`url(#${id}g)`} strokeWidth="2.6" strokeLinecap="round">
        {pins.map((v) => (
          <g key={v}>
            <line x1={v} y1="4" x2={v} y2="10" />
            <line x1={v} y1="38" x2={v} y2="44" />
            <line x1="4" y1={v} x2="10" y2={v} />
            <line x1="38" y1={v} x2="44" y2={v} />
          </g>
        ))}
      </g>
      <rect x="10" y="10" width="28" height="28" rx="5" fill="#fff" stroke={`url(#${id}g)`} strokeWidth="3" />
      <text x="24" y="29.5" textAnchor="middle" fontFamily="inherit" fontWeight="800" fontSize="14" fill={NAVY}>
        IA
      </text>
    </Svg>
  );
}

/** Langues : deux bulles « A » et « 文 ». */
export function IcLanguages(p: P) {
  const id = useGid();
  return (
    <Svg {...p}>
      <defs>
        <Grad id={`${id}a`} from={BLUE} to={NAVY} />
        <Grad id={`${id}b`} from={LEAF} to={ORANGE} />
      </defs>
      <rect x="3" y="3" width="26" height="26" rx="6" fill={`url(#${id}a)`} />
      <text x="16" y="23" textAnchor="middle" fontFamily="inherit" fontWeight="700" fontSize="17" fill="#fff">
        A
      </text>
      <rect x="18" y="18" width="27" height="27" rx="6" fill={`url(#${id}b)`} stroke="#fff" strokeWidth="2" />
      <text x="31.5" y="38.5" textAnchor="middle" fontWeight="700" fontSize="16" fill="#fff">
        文
      </text>
    </Svg>
  );
}

/** Communication digitale : mégaphone. */
export function IcMegaphone(p: P) {
  const id = useGid();
  return (
    <Svg {...p}>
      <defs>
        <Grad id={`${id}a`} from={BLUE} to={NAVY} />
        <Grad id={`${id}b`} from={YELLOW} to={ORANGE} />
      </defs>
      <path d="M12 30l4 11a3 3 0 0 0 5.6-2.2L19 30z" fill={NAVY} />
      <rect x="5" y="17" width="12" height="14" rx="3" fill={`url(#${id}a)`} />
      <path d="M17 17l15-8v30l-15-8z" fill={`url(#${id}b)`} />
      <rect x="31" y="7" width="4" height="34" rx="2" fill={BLUE} />
      <g stroke={GREEN} strokeWidth="2.6" strokeLinecap="round">
        <line x1="39" y1="16" x2="44" y2="12" />
        <line x1="40" y1="24" x2="46" y2="24" />
        <line x1="39" y1="32" x2="44" y2="36" />
      </g>
    </Svg>
  );
}

/** Immobilier : maison. */
export function IcHouse(p: P) {
  const id = useGid();
  return (
    <Svg {...p}>
      <defs>
        <Grad id={`${id}g`} from={BLUE} mid={GREEN} to={ORANGE} y2={0} />
      </defs>
      <path d="M5 23L24 6l19 17" stroke={`url(#${id}g)`} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 21v19a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V21" stroke={`url(#${id}g)`} strokeWidth="4" strokeLinejoin="round" />
      <rect x="19" y="27" width="4.5" height="4.5" fill={BLUE} />
      <rect x="24.5" y="27" width="4.5" height="4.5" fill={GREEN} />
      <rect x="19" y="32.5" width="4.5" height="4.5" fill={GREEN} />
      <rect x="24.5" y="32.5" width="4.5" height="4.5" fill={BLUE} />
    </Svg>
  );
}

/** Catalogue : livre ouvert. */
export function IcBook(p: P) {
  const id = useGid();
  return (
    <Svg {...p}>
      <defs>
        <Grad id={`${id}a`} from={BLUE} to={GREEN} x2={1} y2={0} />
        <Grad id={`${id}b`} from={YELLOW} to={ORANGE} x2={1} y2={0} />
      </defs>
      <path d="M3 9c7-1 14 0 21 4v29c-7-4-14-5-21-4z" fill={`url(#${id}a)`} />
      <path d="M45 9c-7-1-14 0-21 4v29c7-4 14-5 21-4z" fill={`url(#${id}b)`} />
      <path d="M24 13v29" stroke="#fff" strokeWidth="1.6" />
      <path d="M8 16c4-.3 8 .4 12 2M8 22c4-.3 8 .4 12 2M28 18c4-1.6 8-2.3 12-2M28 24c4-1.6 8-2.3 12-2" stroke="#fff" strokeOpacity=".55" strokeWidth="1.4" strokeLinecap="round" />
    </Svg>
  );
}

/** Équipe / modalités pédagogiques : deux personnes. */
export function IcPeople(p: P) {
  const id = useGid();
  return (
    <Svg {...p}>
      <defs>
        <Grad id={`${id}a`} from={BLUE} to={GREEN} x2={1} y2={0} />
        <Grad id={`${id}b`} from={GREEN} to={ORANGE} x2={1} y2={0} />
      </defs>
      <circle cx="16" cy="13" r="6.5" fill={BLUE} />
      <circle cx="32" cy="13" r="6.5" fill={ORANGE} />
      <path d="M4 38c0-8 5.4-14 12-14s12 6 12 14" stroke={`url(#${id}a)`} strokeWidth="5" strokeLinecap="round" />
      <path d="M20 38c0-8 5.4-14 12-14s12 6 12 14" stroke={`url(#${id}b)`} strokeWidth="5" strokeLinecap="round" />
    </Svg>
  );
}

/** Délais : horloge. */
export function IcClock(p: P) {
  const id = useGid();
  return (
    <Svg {...p}>
      <defs>
        <Grad id={`${id}g`} from={BLUE} mid={GREEN} to={ORANGE} />
      </defs>
      <circle cx="24" cy="24" r="18" stroke={`url(#${id}g)`} strokeWidth="4.5" />
      <path d="M24 13v11l7 5" stroke={NAVY} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

/** Financement : portefeuille. */
export function IcWallet(p: P) {
  const id = useGid();
  return (
    <Svg {...p}>
      <defs>
        <Grad id={`${id}a`} from={BLUE} to={GREEN} x2={1} y2={0} />
        <Grad id={`${id}b`} from={YELLOW} to={ORANGE} />
      </defs>
      <path d="M8 13l22-6a3 3 0 0 1 3.7 2.1L35 13z" fill={GREEN} />
      <rect x="5" y="13" width="36" height="28" rx="5" fill={`url(#${id}a)`} />
      <rect x="27" y="21" width="17" height="12" rx="4" fill={`url(#${id}b)`} />
      <circle cx="33" cy="27" r="2.4" fill="#fff" />
    </Svg>
  );
}

export const COLOR_ICONS = {
  chart: IcChart,
  ai: IcAi,
  languages: IcLanguages,
  megaphone: IcMegaphone,
  house: IcHouse,
  book: IcBook,
  people: IcPeople,
  clock: IcClock,
  wallet: IcWallet,
} as const;
