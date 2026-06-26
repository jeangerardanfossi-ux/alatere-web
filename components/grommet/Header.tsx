'use client';

/** En-tête « Grommet » partagé (AppBar sticky + tiroir mobile + FR/EN). */

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLang, LangToggle, localizePath } from './lang';
import { BrandSuffix, type PoleBrand } from './BrandName';

const POLES = new Set<string>(['ecom', 'forma', 'domo', 'cowo']);

const CTA = { fr: 'Prendre rendez-vous', en: 'Book a meeting' };

// [href, libellé, clé active, sous-titre]
const NAV: [string, string, string, string][] = [
  ['/alatere-ecom', 'ecoM', 'ecom', 'e-commerce'],
  ['/alatere-forma', 'forMa', 'forma', 'formations'],
  ['/alatere-domo', 'doMo', 'domo', 'domiciliation'],
  ['/alatere-cowo', 'coWo', 'cowo', 'coworking'],
  ['/#contact', 'Contact', 'contact', ''],
];

const BADGE = '/alatere-web-badge.webp';

/** `active` met en valeur le pôle courant (sur les sous-pages). */
export default function Header({ active }: { active?: string }) {
  const { lang } = useLang();
  const lp = (h: string) => localizePath(h, lang);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawer]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setDrawer(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const cta = (
    <>
      <span>{CTA[lang]}</span> <span className="g-arrow">→</span>
    </>
  );

  // Sur une page pôle, « Prendre rendez-vous » pré-sélectionne le sujet
  // correspondant dans le formulaire (/contact lit ?pole=). Ailleurs → #contact accueil.
  const ctaHref = lp(active && POLES.has(active) ? `/contact?pole=${active}` : '/#contact');

  return (
    <>
      <header className="g-header">
        <Link className="g-brand" href={lp('/')}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BADGE} alt="Alatere Web" width={800} height={800} fetchPriority="high" decoding="async" />
          <b>Alatere Web</b>
        </Link>
        <nav className="g-nav">
          {NAV.map(([href, label, key, sub]) => (
            <Link
              key={href}
              href={lp(href)}
              className={`g-nav__item${key === active ? ' is-active' : ''}`}
            >
              <span className="g-nav__label">
                {POLES.has(key) ? <BrandSuffix pole={key as PoleBrand} /> : label}
              </span>
              {sub ? <span className="g-nav__sub">{sub}</span> : null}
            </Link>
          ))}
        </nav>
        <div className="g-actions">
          <LangToggle />
          <Link href={ctaHref} className="g-btn g-btn--primary g-btn--sm">
            {cta}
          </Link>
        </div>
        <button
          type="button"
          className={`g-burger ${drawer ? 'is-open' : ''}`.trim()}
          aria-label="Menu"
          aria-expanded={drawer}
          onClick={() => setDrawer((d) => !d)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div
        className={`g-drawer ${drawer ? 'is-open' : ''}`.trim()}
        hidden={!drawer}
        onClick={(e) => {
          if (e.target === e.currentTarget) setDrawer(false);
        }}
      >
        <nav className="g-drawer__panel">
          {NAV.map(([href, label, key, sub]) => (
            <Link
              key={href}
              href={lp(href)}
              className={`g-drawer__item${key === active ? ' is-active' : ''}`}
              onClick={() => setDrawer(false)}
            >
              <span className="g-nav__label">
                {POLES.has(key) ? <BrandSuffix pole={key as PoleBrand} /> : label}
              </span>
              {sub ? <span className="g-nav__sub">{sub}</span> : null}
            </Link>
          ))}
          <LangToggle extra="g-drawer__lang" />
          <Link
            href={ctaHref}
            className="g-btn g-btn--primary g-drawer__cta"
            onClick={() => setDrawer(false)}
          >
            {cta}
          </Link>
        </nav>
      </div>
    </>
  );
}
