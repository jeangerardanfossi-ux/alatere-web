import type { Metadata } from 'next';
import FormateursPage from '@/components/pages/FormateursPage';
import JsonLd from '@/components/JsonLd';
import { breadcrumbLd, formateursLd } from '@/lib/jsonld';
import { FORMATEURS } from '@/lib/formateurs';
import '../../grommet-home.css';
import '../../grommet-forma.css';
import '../../grommet-forma-pages.css';

const PATH = '/alatere-forma/formateurs';
const DESC =
  "L'équipe de formateurs d'Alatere forMa : des intervenants praticiens en webmarketing, intelligence artificielle, langues, communication digitale et immobilier.";

export const metadata: Metadata = {
  title: { absolute: 'Alatere forMa — Nos formateurs' },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { title: 'Alatere forMa — Nos formateurs', description: DESC, url: PATH },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Accueil', path: '/' },
            { name: 'Alatere forMa', path: '/alatere-forma' },
            { name: 'Nos formateurs', path: PATH },
          ]),
          ...formateursLd(
            FORMATEURS.map((f) => ({ name: f.name, role: f.role.fr, linkedin: f.linkedin })),
          ),
        ]}
      />
      <FormateursPage />
    </>
  );
}
