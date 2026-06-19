'use client';

/**
 * Contexte de langue FR/EN partagé (persisté dans localStorage « aw-lang »).
 * Met aussi à jour <html lang> et le <title> de la page.
 */

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'fr' | 'en';
export type Dict = Record<string, { fr: string; en: string }>;

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'fr',
  setLang: () => {},
});

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
  const [lang, setLang] = useState<Lang>('fr');

  useEffect(() => {
    try {
      if (localStorage.getItem('aw-lang') === 'en') setLang('en');
    } catch {
      /* localStorage indisponible */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    if (titles) document.title = titles[lang];
    try {
      localStorage.setItem('aw-lang', lang);
    } catch {
      /* ignore */
    }
  }, [lang, titles]);

  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

/** Sélecteur FR/EN réutilisable (header + tiroir mobile). */
export function LangToggle({ extra = '' }: { extra?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`g-lang ${extra}`.trim()} role="group" aria-label="Langue / Language">
      {(['fr', 'en'] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          className={lang === l ? 'is-active' : undefined}
          onClick={() => setLang(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
