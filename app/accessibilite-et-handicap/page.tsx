import type { Metadata } from 'next';
import AccessibilitePage from '@/components/pages/AccessibilitePage';
import '../grommet-home.css';
import '../grommet-pages.css';

export const metadata: Metadata = {
  title: { absolute: 'Accessibilité et handicap — Alatere forMa (Antibes)' },
  description:
    'Alatere forMa rend ses formations accessibles aux personnes en situation de handicap : référent dédié, adaptation des locaux, des supports et des modalités.',
  alternates: { canonical: '/accessibilite-et-handicap' },
};

export default function Page() {
  return <AccessibilitePage />;
}
