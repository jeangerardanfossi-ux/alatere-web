'use client';

/**
 * Remplaçant « drop-in » de next/link qui préfixe automatiquement les chemins
 * internes selon la langue courante (FR → inchangé, EN → /en…). Les URL externes,
 * ancres et UrlObject passent tels quels. Permet d'internationaliser la navigation
 * sans toucher chaque href dans les composants.
 */

import NextLink from 'next/link';
import type { ComponentProps } from 'react';
import { useLang, localizePath } from './lang';

type Props = ComponentProps<typeof NextLink>;

export default function Link({ href, ...rest }: Props) {
  const { lang } = useLang();
  const h = typeof href === 'string' ? localizePath(href, lang) : href;
  return <NextLink href={h} {...rest} />;
}
