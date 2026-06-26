import type { Metadata } from 'next';
import AProposPage from '@/components/pages/AProposPage';
import JsonLd from '@/components/JsonLd';
import { organizationLd, breadcrumbLd } from '@/lib/jsonld';
import '../grommet-home.css';
import '../grommet-pages.css';

export const metadata: Metadata = {
  title: { absolute: 'À propos — Alatere Web, entreprise familiale à Antibes' },
  description:
    "Alatere Web, entreprise familiale née à Paris en 2002 et installée à Antibes depuis 2008. De repro-tableaux.com à la formation, la domiciliation et le coworking : notre histoire et nos quatre métiers.",
  alternates: { canonical: '/a-propos' },
  openGraph: {
    title: 'À propos — Alatere Web, entreprise familiale à Antibes',
    description:
      "Entreprise familiale née à Paris en 2002, installée à Antibes depuis 2008. Iveta et Jean-Gérard Anfossi, quatre métiers, une même idée : être à vos côtés.",
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
