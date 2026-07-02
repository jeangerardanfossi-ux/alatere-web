import type { Metadata } from 'next';
import CGVPage from '@/components/pages/CGVPage';
import '../grommet-home.css';
import '../grommet-pages.css';

export const metadata: Metadata = {
  title: { absolute: 'Conditions générales de vente - Alatere Web' },
  description:
    "CGV d'Alatere Web SAS : prestations et actions de formation Qualiopi. Inscription, prix, financement, annulation, droit de rétractation.",
  alternates: { canonical: '/conditions-generales-de-vente' },
};

export default function Page() {
  return <CGVPage />;
}
