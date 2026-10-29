import type { Metadata } from 'next';
import CowoPage from '@/components/pages/CowoPage';
import JsonLd from '@/components/JsonLd';
import { cowoLd, cowoFaqLd, breadcrumbLd } from '@/lib/jsonld';
import { pageAlternates } from '@/lib/i18n';
import '../grommet-home.css';
import '../grommet-activity.css';

export const metadata: Metadata = {
  title: { absolute: 'Coworking Antibes dès 30 €/jour, salles de réunion - Alatere coWo' },
  description:
    "Coworking en centre-ville d'Antibes, près du port Vauban : pass journée 30 € TTC, abonnement mensuel, salles de réunion climatisées, fibre. Réservation en ligne.",
  alternates: pageAlternates('/alatere-cowo', 'fr'),
  openGraph: {
    title: 'Coworking à Antibes près du port Vauban - Alatere coWo',
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
