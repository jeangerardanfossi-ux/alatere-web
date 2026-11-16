import type { Metadata } from 'next';
import SalleReunionAntibesPage from '@/components/pages/SalleReunionAntibesPage';
import JsonLd from '@/components/JsonLd';
import { cowoLd, breadcrumbLd, faqLd } from '@/lib/jsonld';
import { faqSalleReunionAntibes, SALLE_TITLE } from '@/lib/faq-salle-reunion-antibes';
import '../grommet-home.css';
import '../grommet-activity.css';

const DESCRIPTION =
  'Salle de réunion équipée à Antibes centre : 6 places, écran mural, climatisation, Wi-Fi, café compris. 80 € TTC de 16 h à 20 h, 180 € TTC la journée.';

// Page publiée en français uniquement : canonical FR, pas de hreflang vers /en.
export const metadata: Metadata = {
  title: { absolute: SALLE_TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/salle-de-reunion-antibes' },
  openGraph: {
    title: 'Salle de réunion à Antibes pour 6 personnes',
    description:
      "Écran digital mural, 6 écrans de bureau, climatisation, au 9 bd Albert 1er à Antibes. Dès 80 € TTC.",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          cowoLd,
          faqLd(faqSalleReunionAntibes),
          breadcrumbLd([
            { name: 'Accueil', path: '/' },
            { name: 'Alatere coWo', path: '/alatere-cowo' },
            { name: 'Salle de réunion à Antibes', path: '/salle-de-reunion-antibes' },
          ]),
        ]}
      />
      <SalleReunionAntibesPage />
    </>
  );
}
