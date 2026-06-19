'use client';

import { Grommet } from 'grommet';
import { alatereTheme } from '@/theme/alatere';

/**
 * Enveloppe l'application avec le thème Grommet.
 * Doit être un client component (Grommet utilise le contexte React + styled-components).
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  // Pas de prop `full` : on veut le flux/scroll naturel du document
  // (page vitrine longue), pas un conteneur de hauteur fixe app-like.
  return <Grommet theme={alatereTheme}>{children}</Grommet>;
}
