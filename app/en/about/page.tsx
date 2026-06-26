import type { Metadata } from 'next';
import AProposPage from '@/components/pages/AProposPage';
import JsonLd from '@/components/JsonLd';
import { organizationLd, breadcrumbLd } from '@/lib/jsonld';
import { pageAlternates, enPath } from '@/lib/i18n';
import '../../grommet-home.css';
import '../../grommet-pages.css';

const FR = '/a-propos';
const TITLE = 'About — Alatere Web, a family business in Antibes';
const DESC =
  'Alatere Web, a family business born in Paris in 2002 and settled in Antibes since 2008. From repro-tableaux.com to training, business address and coworking: our story and our four trades.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: pageAlternates(FR, 'en'),
  openGraph: { title: TITLE, description: DESC, url: enPath(FR), locale: 'en_US' },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          organizationLd,
          breadcrumbLd([
            { name: 'Home', path: '/en' },
            { name: 'About', path: enPath(FR) },
          ]),
        ]}
      />
      <AProposPage />
    </>
  );
}
