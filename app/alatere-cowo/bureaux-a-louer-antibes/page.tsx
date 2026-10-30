import type { Metadata } from 'next';
import BureauxAntibesPage from '@/components/pages/BureauxAntibesPage';
import JsonLd from '@/components/JsonLd';
import { bureauxLd, faqLd, breadcrumbLd } from '@/lib/jsonld';
import { BUREAUX_FAQ, BUREAUX_PATH } from '@/lib/bureaux-content';
import { pageAlternates } from '@/lib/i18n';
import '../../grommet-home.css';
import '../../grommet-activity.css';

const TITLE = 'Bureaux à louer à Antibes dès 30 €/jour, sans bail - Alatere coWo';
const DESC =
  "Bureau à louer en centre-ville d'Antibes, près du port Vauban : à la journée 30 € TTC ou au mois 360 € TTC, charges, fibre et café compris. Sans bail ni dépôt de garantie.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: pageAlternates(BUREAUX_PATH, 'fr'),
  openGraph: { title: TITLE, description: DESC, url: BUREAUX_PATH },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          bureauxLd('fr', BUREAUX_PATH),
          faqLd(BUREAUX_FAQ.map((f) => ({ q: f.q.fr, a: f.a.fr }))),
          breadcrumbLd([
            { name: 'Accueil', path: '/' },
            { name: 'Alatere coWo', path: '/alatere-cowo' },
            { name: 'Bureaux à louer à Antibes', path: BUREAUX_PATH },
          ]),
        ]}
      />
      <BureauxAntibesPage />
    </>
  );
}
