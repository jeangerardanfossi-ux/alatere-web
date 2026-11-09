import type { Metadata } from 'next';
import FormaPage from '@/components/pages/FormaPage';
import JsonLd from '@/components/JsonLd';
import { educationalOrganizationLd, coursesLd, formaFaqLd, breadcrumbLd } from '@/lib/jsonld';
import '../grommet-home.css';
import '../grommet-forma.css';
import '../grommet-forma-pages.css';

export const metadata: Metadata = {
  title: {
    absolute: 'Formation IA, webmarketing & anglais professionnel à Antibes | Alatere forMa',
  },
  description:
    'Organisme de formation Qualiopi à Antibes : formation IA, webmarketing, anglais professionnel, immobilier. Financement OPCO ou FAF : nous montons le dossier avec vous.',
  alternates: { canonical: '/alatere-forma' },
  openGraph: {
    title: 'Formation IA, webmarketing & anglais professionnel à Antibes - Alatere forMa',
    description:
      'Organisme de formation Qualiopi à Antibes : formation IA, webmarketing, anglais professionnel, immobilier. Financement OPCO ou FAF, dossier monté avec vous.',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          educationalOrganizationLd,
          ...coursesLd('fr'),
          formaFaqLd('fr'),
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
