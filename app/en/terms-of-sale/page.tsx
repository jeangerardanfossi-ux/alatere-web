import type { Metadata } from 'next';
import CGVPage from '@/components/pages/CGVPage';
import { pageAlternates } from '@/lib/i18n';
import '../../grommet-home.css';
import '../../grommet-pages.css';

export const metadata: Metadata = {
  title: { absolute: 'Terms and conditions of sale — Alatere Web' },
  description:
    'Alatere Web SAS terms of sale: services and Qualiopi training actions. Enrolment, pricing, funding, cancellation and right of withdrawal.',
  alternates: pageAlternates('/conditions-generales-de-vente', 'en'),
};

export default function Page() {
  return <CGVPage />;
}
