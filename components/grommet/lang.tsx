'use client';

/**
 * Contexte de langue FR/EN — désormais piloté par l'URL.
 * FR au niveau racine (sans préfixe), EN sous /en/… : la route détermine la langue.
 * `ForcedLangProvider` (posé par app/en/layout.tsx) fixe la langue côté serveur,
 * de sorte que les pages /en sont rendues en anglais et indexables.
 */

import { createContext, useContext, useEffect, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { EN_SLUG, FR_FROM_EN } from '@/lib/i18n';

export type Lang = 'fr' | 'en';
export type Dict = Record<string, { fr: string; en: string }>;

/** Langue imposée par le segment de route (défaut FR à la racine). */
const ForcedLangCtx = createContext<Lang>('fr');

/** Posé par app/en/layout.tsx pour forcer l'anglais sur tout le sous-arbre /en. */
export function ForcedLangProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  return <ForcedLangCtx.Provider value={lang}>{children}</ForcedLangCtx.Provider>;
}

const LangCtx = createContext<{ lang: Lang }>({ lang: 'fr' });

export function useLang() {
  return useContext(LangCtx);
}

/** Construit un traducteur lié au dictionnaire et à la langue courante. */
export function useT(dict: Dict) {
  const { lang } = useLang();
  return (k: string) => dict[k]?.[lang] ?? k;
}

export function LangProvider({
  titles,
  children,
}: {
  titles?: { fr: string; en: string };
  children: ReactNode;
}) {
  // La langue vient de la route (contexte forcé) — FR par défaut, EN sous /en.
  const lang = useContext(ForcedLangCtx);

  useEffect(() => {
    document.documentElement.lang = lang;
    if (titles) document.title = titles[lang];
  }, [lang, titles]);

  return <LangCtx.Provider value={{ lang }}>{children}</LangCtx.Provider>;
}

/**
 * Préfixe un chemin interne selon la langue courante :
 * FR → inchangé ; EN → /en + chemin (avec gestion de « / » et des ancres « /#x »).
 */
export function localizePath(href: string, lang: Lang): string {
  if (lang !== 'en' || !href.startsWith('/')) return href;
  if (href === '/') return '/en';
  if (href.startsWith('/en/') || href === '/en') return href;
  // Sépare le chemin de l'éventuelle query/ancre, traduit le slug, recolle.
  const m = href.match(/^([^?#]*)([?#].*)?$/);
  const path = m?.[1] || href;
  const suffix = m?.[2] || '';
  if (path === '/') return `/en${suffix}`; // ex. '/#contact' → '/en#contact'
  return `/en${EN_SLUG[path] ?? path}${suffix}`;
}

/** Bascule FR/EN : navigue vers l'URL équivalente dans l'autre langue. */
export function LangToggle({ extra = '' }: { extra?: string }) {
  const { lang } = useLang();
  const pathname = usePathname() || '/';

  // Chemin FR de référence, dérivé de l'URL courante (FR ou EN localisée).
  const frHref =
    pathname === '/en'
      ? '/'
      : pathname.startsWith('/en/')
        ? FR_FROM_EN[pathname.slice(3)] ?? pathname.slice(3)
        : pathname;
  const enHref = localizePath(frHref, 'en');

  const items: { l: Lang; href: string }[] = [
    { l: 'fr', href: frHref },
    { l: 'en', href: enHref },
  ];

  return (
    <div className={`g-lang ${extra}`.trim()} role="group" aria-label="Langue / Language">
      {items.map(({ l, href }) => (
        <Link
          key={l}
          href={href}
          className={lang === l ? 'is-active' : undefined}
          aria-current={lang === l ? 'true' : undefined}
          hrefLang={l}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
