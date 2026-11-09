import type { Metadata } from 'next';
import FormaPage from '@/components/pages/FormaPage';
import JsonLd from '@/components/JsonLd';
import { educationalOrganizationLd, coursesLd, formaFaqLd, breadcrumbLd } from '@/lib/jsonld';
import { pageAlternates } from '@/lib/i18n';
import '../../grommet-home.css';
import '../../grommet-forma.css';
import '../../grommet-forma-pages.css';

const FR = '/alatere-forma';
const TITLE = 'AI, web marketing & business English training in Antibes | Alatere forMa';
const DESC =
  'Qualiopi-certified training provider in Antibes: AI training, web marketing, business English, real estate. OPCO or FAF funding: we prepare the file with you.';

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
          ...coursesLd('en'),
          formaFaqLd('en'),
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
