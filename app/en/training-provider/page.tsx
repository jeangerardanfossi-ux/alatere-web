import type { Metadata } from 'next';
import OrganismeFormationPage from '@/components/pages/OrganismeFormationPage';
import { pageAlternates } from '@/lib/i18n';
import '../../grommet-home.css';
import '../../grommet-pages.css';

export const metadata: Metadata = {
  title: 'Qualiopi-certified training provider',
  description:
    'Alatere Web, a Qualiopi-certified professional training provider (no. 93.06.07588.06) in Antibes. Quality commitments and downloadable Qualiopi certificate.',
  alternates: pageAlternates('/organisme-de-formation', 'en'),
};

export default function Page() {
  return <OrganismeFormationPage />;
}
