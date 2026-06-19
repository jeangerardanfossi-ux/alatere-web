import type { Metadata } from 'next';
import CowoPage from '@/components/pages/CowoPage';
import JsonLd from '@/components/JsonLd';
import { cowoLd, cowoFaqLd, breadcrumbLd } from '@/lib/jsonld';
import '../grommet-home.css';
import '../grommet-activity.css';

export const metadata: Metadata = {
  title: { absolute: 'Coworking à Antibes près du port Vauban — Alatere coWo' },
  description:
    'Espace de coworking à Antibes : postes nomades, bureaux privatifs, 5 salles de réunion climatisées, fibre. À deux pas du port Vauban.',
  alternates: { canonical: '/alatere-cowo' },
  openGraph: {
    title: 'Coworking à Antibes près du port Vauban — Alatere coWo',
    description:
      "Postes, bureaux privatifs et salles de réunion à Antibes, au sein d'une communauté d'entrepreneurs. À deux pas du port Vauban.",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          cowoLd,
          cowoFaqLd,
          breadcrumbLd([
            { name: 'Accueil', path: '/' },
            { name: 'Alatere coWo', path: '/alatere-cowo' },
          ]),
        ]}
      />
      <CowoPage />
    </>
  );
}
