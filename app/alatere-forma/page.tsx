import type { Metadata } from 'next';
import FormaPage from '@/components/pages/FormaPage';
import JsonLd from '@/components/JsonLd';
import { educationalOrganizationLd, coursesLd, formaFaqLd, breadcrumbLd } from '@/lib/jsonld';
import '../grommet-home.css';
import '../grommet-forma.css';
import '../grommet-forma-pages.css';

export const metadata: Metadata = {
  title: { absolute: 'Alatere forMa — Organisme de formation Qualiopi à Antibes' },
  description:
    'Organisme certifié Qualiopi à Antibes : webmarketing, IA, langues, communication, immobilier. Présentiel ou distanciel, financement OPCO/FAF.',
  alternates: { canonical: '/alatere-forma' },
  openGraph: {
    title: 'Alatere forMa — Organisme de formation Qualiopi à Antibes',
    description:
      'Formations professionnelles certifiées Qualiopi à Antibes, en présentiel ou à distance. Financement OPCO/FAF facilité.',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          educationalOrganizationLd,
          ...coursesLd,
          formaFaqLd,
          breadcrumbLd([
            { name: 'Accueil', path: '/' },
            { name: 'Alatere forMa', path: '/alatere-forma' },
          ]),
        ]}
      />
      <FormaPage />
    </>
  );
}
