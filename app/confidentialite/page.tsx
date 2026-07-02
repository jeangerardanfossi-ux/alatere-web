import type { Metadata } from 'next';
import ConfidentialitePage from '@/components/pages/ConfidentialitePage';
import '../grommet-home.css';
import '../grommet-pages.css';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et traitement des données - Alatere Web SAS.',
  alternates: { canonical: '/confidentialite' },
  robots: { index: false },
};

export default function Page() {
  return <ConfidentialitePage />;
}
