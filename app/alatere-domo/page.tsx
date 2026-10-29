import type { Metadata } from 'next';
import DomoPage from '@/components/pages/DomoPage';
import JsonLd from '@/components/JsonLd';
import { domoLd, domoFaqLd, breadcrumbLd } from '@/lib/jsonld';
import { pageAlternates } from '@/lib/i18n';
import '../grommet-home.css';
import '../grommet-domo.css';
import '../grommet-todo.css';

export const metadata: Metadata = {
  title: { absolute: 'Domiciliation entreprise Antibes dès 30 € HT/mois, agréée - Alatere doMo' },
  description:
    "Siège social en centre-ville d'Antibes dès 30 € HT/mois. Société agréée préfecture : courrier, scan, réexpédition. Attestation sous 48 h. Proche Sophia Antipolis.",
  alternates: pageAlternates('/alatere-domo', 'fr'),
  openGraph: {
    title: "Domiciliation d'entreprise à Antibes dès 30 € HT/mois - Alatere doMo",
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
