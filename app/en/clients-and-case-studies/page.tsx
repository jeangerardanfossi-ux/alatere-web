import type { Metadata } from 'next';
import ClientsRealisationsPage from '@/components/pages/ClientsRealisationsPage';
import JsonLd from '@/components/JsonLd';
import { organizationLd, breadcrumbLd } from '@/lib/jsonld';
import { pageAlternates, enPath } from '@/lib/i18n';
import { REALISATIONS_READY } from '@/lib/realisations';
import '../../grommet-home.css';
import '../../grommet-clients.css';

const FR = '/clients-et-realisations';
const TITLE = 'Clients & Case Studies - Alatere Web, Antibes';
const DESC =
  'E-commerce, training, business address, coworking: our work division by division, for French Riviera companies supported since 2002.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: pageAlternates(FR, 'en'),
  openGraph: { title: TITLE, description: DESC, url: enPath(FR), locale: 'en_US' },
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
            { name: 'Home', path: '/en' },
            { name: 'Clients & Case Studies', path: enPath(FR) },
          ]),
        ]}
      />
      <ClientsRealisationsPage />
    </>
  );
}
