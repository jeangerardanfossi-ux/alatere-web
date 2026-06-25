import type { Metadata } from 'next';
import MentionsPage from '@/components/pages/MentionsPage';
import { pageAlternates } from '@/lib/i18n';
import '../../grommet-home.css';
import '../../grommet-pages.css';

export const metadata: Metadata = {
  title: 'Legal notice',
  description: 'Legal notice for the Alatere Web SAS website.',
  alternates: pageAlternates('/mentions-legales', 'en'),
  robots: { index: false },
};

export default function Page() {
  return <MentionsPage />;
}
