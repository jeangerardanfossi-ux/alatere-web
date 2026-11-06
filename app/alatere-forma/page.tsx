import type { Metadata } from 'next';
import FormaPage from '@/components/pages/FormaPage';
import JsonLd from '@/components/JsonLd';
import { educationalOrganizationLd, coursesLd, formaFaqLd, breadcrumbLd } from '@/lib/jsonld';
import '../grommet-home.css';
import '../grommet-forma.css';
import '../grommet-forma-pages.css';

export const metadata: Metadata = {
  title: { absolute: 'Formations Qualiopi financées par votre OPCO | Alatere forMa' },
  description:
    'Organisme Qualiopi à Antibes : IA, webmarketing, immobilier, langues. Prise en charge OPCO : nous montons le dossier avec vous. Demandez un devis.',
  alternates: { canonical: '/alatere-forma' },
  openGraph: {
    title: 'Formations Qualiopi à Antibes, financées par votre OPCO - Alatere forMa',
    description:
      'Organisme Qualiopi à Antibes : IA, webmarketing, immobilier, langues. Prise en charge OPCO : nous montons le dossier avec vous. Demandez un devis.',
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
