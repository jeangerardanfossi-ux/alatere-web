import type { Metadata } from 'next';
import ContactPage from '@/components/pages/ContactPage';
import JsonLd from '@/components/JsonLd';
import { localBusinessLd, breadcrumbLd } from '@/lib/jsonld';
import '../grommet-home.css';
import '../grommet-pages.css';

export const metadata: Metadata = {
  title: { absolute: 'Contact — Alatere Web, 9 Bd Albert 1er Antibes' },
  description:
    'Contactez Alatere Web à Antibes : e-commerce, formation, domiciliation, coworking. Réponse sous 48 h. 9 Bd Albert 1er, 06600 Antibes.',
  alternates: { canonical: '/contact' },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessLd,
          breadcrumbLd([
            { name: 'Accueil', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        ]}
      />
      <ContactPage />
    </>
  );
}
