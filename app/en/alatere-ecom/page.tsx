import type { Metadata } from 'next';
import EcomPage from '@/components/pages/EcomPage';
import JsonLd from '@/components/JsonLd';
import { organizationLd, breadcrumbLd } from '@/lib/jsonld';
import { pageAlternates } from '@/lib/i18n';
import '../../grommet-home.css';
import '../../grommet-activity.css';

const FR = '/alatere-ecom';
const TITLE = 'Alatere ecoM - E-commerce & SEO agency in Antibes';
const DESC =
  '20 years of in-house e-commerce (repro-tableaux.com, copia-di-arte.com). Our SEO, SEA and acquisition know-how at the service of your online store.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: pageAlternates(FR, 'en'),
  openGraph: { title: TITLE, description: DESC, url: `/en${FR}`, locale: 'en_US' },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          organizationLd,
          breadcrumbLd([
            { name: 'Home', path: '/en' },
            { name: 'Alatere ecoM', path: `/en${FR}` },
          ]),
        ]}
      />
      <EcomPage />
    </>
  );
}
