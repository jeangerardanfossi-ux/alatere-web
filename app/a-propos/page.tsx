import type { Metadata } from 'next';
import AProposPage from '@/components/pages/AProposPage';
import JsonLd from '@/components/JsonLd';
import { organizationLd, breadcrumbLd } from '@/lib/jsonld';
import '../grommet-home.css';
import '../grommet-pages.css';

export const metadata: Metadata = {
  title: { absolute: 'À propos — Alatere Web, entreprise familiale à Antibes' },
  description:
    'Alatere Web, entreprise familiale fondée en 2002 à Antibes par Iveta et Jean-Gérard Anfossi. Notre histoire, nos valeurs, nos quatre métiers.',
  alternates: { canonical: '/a-propos' },
  openGraph: {
    title: 'À propos — Alatere Web, entreprise familiale à Antibes',
    description:
      'Entreprise familiale fondée en 2002 à Antibes par Iveta et Jean-Gérard Anfossi. Notre histoire, nos valeurs, nos quatre métiers.',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          organizationLd,
          breadcrumbLd([
            { name: 'Accueil', path: '/' },
            { name: 'À propos', path: '/a-propos' },
          ]),
        ]}
      />
      <AProposPage />
    </>
  );
}
