'use client';

/**
 * E-mail anti-spam. L'adresse n'apparaît JAMAIS en clair dans le HTML servi
 * (ni au View Source, ni au rendu statique) :
 *  - rendu serveur / sans JS → forme obfusquée lisible « contact (at) domaine (dot) com » ;
 *  - après hydratation → lien `mailto:` cliquable normal.
 * Le premier rendu client est identique au rendu serveur → pas de mismatch d'hydratation.
 */

import { useEffect, useState, type ReactNode } from 'react';

export function Email({
  user,
  domain = 'alatere-web.com',
  subject,
  className,
  children,
}: {
  user: string;
  domain?: string;
  subject?: string;
  className?: string;
  children?: ReactNode;
}) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  if (!ready) {
    return (
      <span className={className}>
        {user}
        <span> (at) </span>
        {domain.replace(/\./g, ' (dot) ')}
      </span>
    );
  }

  const addr = `${user}@${domain}`;
  const href = `mailto:${addr}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
  return (
    <a className={className} href={href}>
      {children ?? addr}
    </a>
  );
}
