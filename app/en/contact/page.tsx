import type { Metadata } from 'next';
import ContactPage from '@/components/pages/ContactPage';
import JsonLd from '@/components/JsonLd';
import { localBusinessLd, breadcrumbLd } from '@/lib/jsonld';
import { pageAlternates } from '@/lib/i18n';
import '../../grommet-home.css';
import '../../grommet-pages.css';

const FR = '/contact';
const TITLE = 'Contact - Alatere Web, 9 Bd Albert 1er Antibes';
const DESC =
  'Contact Alatere Web in Antibes: e-commerce, training, business address, coworking. Reply within 48 h. 9 Bd Albert 1er, 06600 Antibes.';

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
          localBusinessLd,
          breadcrumbLd([
            { name: 'Home', path: '/en' },
            { name: 'Contact', path: `/en${FR}` },
          ]),
        ]}
      />
      <ContactPage />
    </>
  );
}
