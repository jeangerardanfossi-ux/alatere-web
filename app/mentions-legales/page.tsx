import type { Metadata } from 'next';
import MentionsPage from '@/components/pages/MentionsPage';
import '../grommet-home.css';
import '../grommet-pages.css';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Alatere Web SAS.',
  alternates: { canonical: '/mentions-legales' },
  robots: { index: false },
};

export default function Page() {
  return <MentionsPage />;
}
