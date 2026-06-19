import type { Metadata } from 'next';
import OrganismeFormationPage from '@/components/pages/OrganismeFormationPage';
import '../grommet-home.css';
import '../grommet-pages.css';

export const metadata: Metadata = {
  title: 'Organisme de formation certifié Qualiopi',
  description:
    "Alatere Web, organisme de formation professionnelle certifié Qualiopi (n° 93.06.07588.06) à Antibes. Engagements qualité et certificat Qualiopi téléchargeable.",
  alternates: { canonical: '/organisme-de-formation' },
};

export default function Page() {
  return <OrganismeFormationPage />;
}
