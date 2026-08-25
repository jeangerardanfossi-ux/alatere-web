import type { Metadata } from 'next';
import EcomPartenairesPage from '@/components/pages/EcomPartenairesPage';
import JsonLd from '@/components/JsonLd';
import { organizationLd, breadcrumbLd } from '@/lib/jsonld';
import { pageAlternates } from '@/lib/i18n';
import '../../grommet-home.css';
import '../../grommet-partenaires.css';

const PATH = '/alatere-ecom/partenaires';
const TITLE = 'Alatere ecoM - Partenaire e-commerce en marque blanche pour agences';
const DESC =
  "Agences : confiez-nous l'acquisition, le contenu, la relation client et la logistique de vos projets e-commerce, en marque blanche et en cinq langues. 23 ans de boutiques opérées en propre.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: pageAlternates(PATH, 'fr'),
  openGraph: { title: TITLE, description: DESC, url: PATH },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          organizationLd,
          breadcrumbLd([
            { name: 'Accueil', path: '/' },
            { name: 'Alatere ecoM', path: '/alatere-ecom' },
            { name: 'Partenaires', path: PATH },
          ]),
        ]}
      />
      <EcomPartenairesPage />
    </>
  );
}
