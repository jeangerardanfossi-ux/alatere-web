import type { Metadata } from 'next';
import BureauxAntibesPage from '@/components/pages/BureauxAntibesPage';
import JsonLd from '@/components/JsonLd';
import { cowoLd, breadcrumbLd, faqLd } from '@/lib/jsonld';
import { faqBureauxAntibes, BUREAUX_TITLE } from '@/lib/faq-bureaux-antibes';
import '../grommet-home.css';
import '../grommet-activity.css';

const DESCRIPTION =
  'Louer un bureau à Antibes centre sans bail : coworking dès 30 €/jour, 360 €/mois avec accès 24 h/24, bureau privatif, salles de réunion. À 700 m de la gare.';

// Page publiée en français uniquement : canonical FR, pas de hreflang vers /en.
export const metadata: Metadata = {
  title: { absolute: BUREAUX_TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/bureaux-a-louer-antibes' },
  openGraph: {
    title: 'Bureau à louer à Antibes centre, sans bail commercial',
    description:
      "Journée, mois ou bureau privatif dans l'immeuble La Caravelle, 9 bd Albert 1er à Antibes.",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          cowoLd,
          faqLd(faqBureauxAntibes),
          breadcrumbLd([
            { name: 'Accueil', path: '/' },
            { name: 'Alatere coWo', path: '/alatere-cowo' },
            { name: 'Bureaux à louer à Antibes', path: '/bureaux-a-louer-antibes' },
          ]),
        ]}
      />
      <BureauxAntibesPage />
    </>
  );
}
