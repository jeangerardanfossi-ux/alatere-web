import type { Metadata } from 'next';
import DomoPage from '@/components/pages/DomoPage';
import JsonLd from '@/components/JsonLd';
import { domoLd, domoFaqLd, breadcrumbLd } from '@/lib/jsonld';
import '../grommet-home.css';
import '../grommet-domo.css';
import '../grommet-todo.css';

export const metadata: Metadata = {
  title: { absolute: "Domiciliation d'entreprise à Antibes — Alatere doMo" },
  description:
    "Domiciliez votre siège social à Antibes dès 30 €/mois. Société agréée préfecture : réception du courrier, scan, réexpédition. Attestation sous 48 h.",
  alternates: { canonical: '/alatere-domo' },
  openGraph: {
    title: "Domiciliation d'entreprise à Antibes — Alatere doMo",
    description:
      "Adresse de siège social à Antibes dès 30 €/mois, société agréée préfecture. Courrier, scan, réexpédition. Attestation sous 48 h.",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          domoLd,
          domoFaqLd,
          breadcrumbLd([
            { name: 'Accueil', path: '/' },
            { name: 'Alatere doMo', path: '/alatere-domo' },
          ]),
        ]}
      />
      <DomoPage />
    </>
  );
}
