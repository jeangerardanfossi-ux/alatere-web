'use client';

/**
 * Anti-spam du formulaire de contact — trois couches complémentaires :
 *  1. Honeypot : un champ caché que seuls les robots remplissent.
 *  2. Piège temporel : horodatage du montage, pour rejeter les envois instantanés.
 *  3. reCAPTCHA v3 (Google) : jeton invisible vérifié côté serveur (si configuré).
 *
 * Tout est désactivé proprement si `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` n'est pas
 * défini : le formulaire continue de fonctionner (honeypot + piège temporel
 * restent actifs), et reCAPTCHA s'active dès que la clé est renseignée.
 */

import { useCallback, useEffect, useRef } from 'react';

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (key: string, opts: { action: string }) => Promise<string>;
    };
  }
}

export function useAntispam() {
  const mountedAt = useRef<number>(typeof window !== 'undefined' ? Date.now() : 0);

  useEffect(() => {
    if (!SITE_KEY || document.getElementById('recaptcha-v3')) return;
    const s = document.createElement('script');
    s.id = 'recaptcha-v3';
    s.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    s.async = true;
    document.head.appendChild(s);
  }, []);

  /** Jeton reCAPTCHA pour l'action donnée ('' si reCAPTCHA non configuré/indisponible). */
  const getToken = useCallback(async (action: string): Promise<string> => {
    if (!SITE_KEY || !window.grecaptcha) return '';
    try {
      await new Promise<void>((resolve) => window.grecaptcha!.ready(() => resolve()));
      return await window.grecaptcha!.execute(SITE_KEY, { action });
    } catch {
      return '';
    }
  }, []);

  /** Millisecondes écoulées depuis l'affichage du formulaire. */
  const elapsedMs = useCallback(() => Date.now() - mountedAt.current, []);

  return { getToken, elapsedMs };
}

/** Champ « pot de miel » invisible : rempli uniquement par les robots. */
export function Honeypot() {
  return (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}
    >
      <label>
        Ne pas remplir ce champ
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

/** Mention légale reCAPTCHA (affichée seulement si reCAPTCHA est configuré). */
export function RecaptchaNotice({ lang }: { lang: 'fr' | 'en' }) {
  if (!SITE_KEY) return null;
  const en = lang === 'en';
  return (
    <p className="g-recaptcha-notice">
      {en ? 'Protected by reCAPTCHA — Google ' : 'Protégé par reCAPTCHA — '}
      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
        {en ? 'Privacy' : 'Confidentialité'}
      </a>
      {' & '}
      <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
        {en ? 'Terms' : 'Conditions'}
      </a>
      {en ? ' apply.' : ' Google s’appliquent.'}
    </p>
  );
}
