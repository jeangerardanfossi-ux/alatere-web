import type { Metadata } from 'next';
import AccessibilitePage from '@/components/pages/AccessibilitePage';
import { pageAlternates } from '@/lib/i18n';
import '../../grommet-home.css';
import '../../grommet-pages.css';

export const metadata: Metadata = {
  title: { absolute: 'Accessibility & disability - Alatere forMa (Antibes)' },
  description:
    'Alatere forMa makes its training accessible to people with disabilities: dedicated liaison, adapted premises, materials and learning formats.',
  alternates: pageAlternates('/accessibilite-et-handicap', 'en'),
};

export default function Page() {
  return <AccessibilitePage />;
}
