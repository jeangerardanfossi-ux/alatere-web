import type { ReactNode } from 'react';
import { ForcedLangProvider } from '@/components/grommet/lang';

/**
 * Sous-arbre anglais : force la langue « en » pour toutes les pages /en,
 * de sorte que le contenu est rendu en anglais côté serveur (indexable).
 * Les URLs FR restent à la racine, sans préfixe.
 */
export default function EnLayout({ children }: { children: ReactNode }) {
  return <ForcedLangProvider lang="en">{children}</ForcedLangProvider>;
}
