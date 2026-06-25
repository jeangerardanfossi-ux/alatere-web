import type { Metadata } from 'next';
import ConfidentialitePage from '@/components/pages/ConfidentialitePage';
import { pageAlternates } from '@/lib/i18n';
import '../../grommet-home.css';
import '../../grommet-pages.css';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'Privacy policy and data processing — Alatere Web SAS.',
  alternates: pageAlternates('/confidentialite', 'en'),
  robots: { index: false },
};

export default function Page() {
  return <ConfidentialitePage />;
}
