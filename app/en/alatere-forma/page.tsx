import type { Metadata } from 'next';
import FormaPage from '@/components/pages/FormaPage';
import JsonLd from '@/components/JsonLd';
import { educationalOrganizationLd, breadcrumbLd } from '@/lib/jsonld';
import { pageAlternates } from '@/lib/i18n';
import '../../grommet-home.css';
import '../../grommet-forma.css';
import '../../grommet-forma-pages.css';

const FR = '/alatere-forma';
const TITLE = 'Qualiopi training funded by your OPCO | Alatere forMa';
const DESC =
  'Qualiopi-certified provider in Antibes: AI, web marketing, real estate, languages. OPCO funding: we prepare the application with you. Ask for a quote.';

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
