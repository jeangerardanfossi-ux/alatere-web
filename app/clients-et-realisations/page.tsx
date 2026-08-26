import type { Metadata } from 'next';
import ClientsRealisationsPage from '@/components/pages/ClientsRealisationsPage';
import JsonLd from '@/components/JsonLd';
import { organizationLd, breadcrumbLd } from '@/lib/jsonld';
import { pageAlternates } from '@/lib/i18n';
import { REALISATIONS_READY } from '@/lib/realisations';
import '../grommet-home.css';
import '../grommet-clients.css';

const PATH = '/clients-et-realisations';
const TITLE = 'Clients & Réalisations - Alatere Web, Antibes';
const DESC =
  "E-commerce, formation, domiciliation, coworking : nos réalisations pôle par pôle, pour des entreprises de la Côte d'Azur accompagnées depuis 2002.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: pageAlternates(PATH, 'fr'),
  openGraph: { title: TITLE, description: DESC, url: PATH },
  // Tant que les études de cas sont des gabarits, la page reste hors index.
  ...(REALISATIONS_READY ? {} : { robots: { index: false } }),
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          organizationLd,
          breadcrumbLd([
            { name: 'Accueil', path: '/' },
            { name: 'Clients & Réalisations', path: PATH },
          ]),
        ]}
      />
      <ClientsRealisationsPage />
    </>
  );
}
