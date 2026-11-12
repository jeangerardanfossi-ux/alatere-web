import type { Metadata } from 'next';
import EcomPartenairesPage from '@/components/pages/EcomPartenairesPage';
import JsonLd from '@/components/JsonLd';
import {
  organizationLd,
  breadcrumbLd,
  partenairesServiceLd,
  partenairesFaqLd,
  ecomTeamLd,
} from '@/lib/jsonld';
import { pageAlternates } from '@/lib/i18n';
import '../../grommet-home.css';
import '../../grommet-partenaires.css';

const PATH = '/alatere-ecom/partenaires';
const TITLE = 'Sous-traitance e-commerce en marque blanche pour agences | Alatere ecoM';
const DESC =
  "Agences web : confiez-nous Google Ads, SEO, fiches produits, service client et logistique de vos clients e-commerce, sous votre marque. Régie ou forfait.";

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
          partenairesServiceLd('fr'),
          partenairesFaqLd('fr'),
          ...ecomTeamLd('fr'),
        ]}
      />
      <EcomPartenairesPage />
    </>
  );
}
