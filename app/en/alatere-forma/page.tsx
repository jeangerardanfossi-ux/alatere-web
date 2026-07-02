import type { Metadata } from 'next';
import FormaPage from '@/components/pages/FormaPage';
import JsonLd from '@/components/JsonLd';
import { educationalOrganizationLd, breadcrumbLd } from '@/lib/jsonld';
import { pageAlternates } from '@/lib/i18n';
import '../../grommet-home.css';
import '../../grommet-forma.css';
import '../../grommet-forma-pages.css';

const FR = '/alatere-forma';
const TITLE = 'Alatere forMa - Qualiopi-certified training provider in Antibes';
const DESC =
  'Qualiopi-certified training provider in Antibes: web marketing, AI, languages, communication, real estate. On-site or remote, OPCO/FAF funding.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: pageAlternates(FR, 'en'),
  openGraph: { title: TITLE, description: DESC, url: '/en/alatere-forma', locale: 'en_US' },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          educationalOrganizationLd,
          breadcrumbLd([
            { name: 'Home', path: '/en' },
            { name: 'Alatere forMa', path: '/en/alatere-forma' },
          ]),
        ]}
      />
      <FormaPage />
    </>
  );
}
