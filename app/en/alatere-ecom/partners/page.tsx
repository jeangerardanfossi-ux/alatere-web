import type { Metadata } from 'next';
import EcomPartenairesPage from '@/components/pages/EcomPartenairesPage';
import JsonLd from '@/components/JsonLd';
import { organizationLd, breadcrumbLd } from '@/lib/jsonld';
import { pageAlternates, enPath } from '@/lib/i18n';
import '../../../grommet-home.css';
import '../../../grommet-partenaires.css';

const FR = '/alatere-ecom/partenaires';
const TITLE = 'Alatere ecoM - White-label e-commerce partner for agencies';
const DESC =
  'Agencies: hand over the acquisition, content, customer care and logistics of your e-commerce projects, white-label and in five languages. 23 years of running our own stores.';

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
            { name: 'Alatere ecoM', path: '/en/alatere-ecom' },
            { name: 'Partners', path: enPath(FR) },
          ]),
        ]}
      />
      <EcomPartenairesPage />
    </>
  );
}
