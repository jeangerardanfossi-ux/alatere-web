'use client';

/**
 * Anti-spam du formulaire de contact - trois couches complémentaires :
 *  1. Honeypot : un champ caché que seuls les robots remplissent.
 *  2. Piège temporel : horodatage du montage, pour rejeter les envois instantanés.
 *  3. reCAPTCHA v3 (Google) : jeton invisible vérifié côté serveur (si configuré).
 *
 * Tout est désactivé proprement si `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` n'est pas
 * défini : le formulaire continue de fonctionner (honeypot + piège temporel
 * restent actifs), et reCAPTCHA s'active dès que la clé est renseignée.
 *
 * RGPD : le script Google n'est PAS chargé au montage de la page. Il n'est
 * injecté qu'à la première interaction du visiteur avec le formulaire (`prime()`,
 * branché sur le focus d'un champ) ou, à défaut, à l'envoi. Un visiteur qui ne
 * touche pas au formulaire ne déclenche donc aucun traceur tiers ni cookie Google.
 */

import { useCallback, useRef } from 'react';

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (key: string, opts: { action: string }) => Promise<string>;
    };
  }
}

/** Injecte le script reCAPTCHA une seule fois (idempotent). No-op sans clé. */
function ensureRecaptchaScript() {
  if (!SITE_KEY || typeof document === 'undefined' || document.getElementById('recaptcha-v3')) return;
  const s = document.createElement('script');
  s.id = 'recaptcha-v3';
  s.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
  s.async = true;
  document.head.appendChild(s);
}

/** Attend que `window.grecaptcha` soit disponible (script chargé), avec timeout. */
function waitForGrecaptcha(timeoutMs = 5000): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.grecaptcha) return resolve(true);
    const start = Date.now();
    const id = setInterval(() => {
      if (window.grecaptcha) {
        clearInterval(id);
        resolve(true);
      } else if (Date.now() - start > timeoutMs) {
        clearInterval(id);
        resolve(false);
      }
    }, 100);
  });
}

export function useAntispam() {
  const mountedAt = useRef<number>(typeof window !== 'undefined' ? Date.now() : 0);

  /**
   * Charge reCAPTCHA à la demande (1re interaction avec le formulaire).
   * À brancher sur `onFocus`/`onPointerDown` d'un champ - idempotent.
   */
  const prime = useCallback(() => ensureRecaptchaScript(), []);

  /** Jeton reCAPTCHA pour l'action donnée ('' si reCAPTCHA non configuré/indisponible). */
  const getToken = useCallback(async (action: string): Promise<string> => {
    if (!SITE_KEY) return '';
    // Filet de sécurité : si `prime()` n'a pas été déclenché, on charge ici.
    ensureRecaptchaScript();
    try {
      const ready = await waitForGrecaptcha();
      if (!ready || !window.grecaptcha) return '';
      await new Promise<void>((resolve) => window.grecaptcha!.ready(() => resolve()));
      return await window.grecaptcha!.execute(SITE_KEY, { action });
    } catch {
      return '';
    }
  }, []);

  /** Millisecondes écoulées depuis l'affichage du formulaire. */
  const elapsedMs = useCallback(() => Date.now() - mountedAt.current, []);

  return { prime, getToken, elapsedMs };
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
      {en ? 'Protected by reCAPTCHA - Google ' : 'Protégé par reCAPTCHA - '}
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
