import type { Metadata } from 'next';
import FormateursPage from '@/components/pages/FormateursPage';
import JsonLd from '@/components/JsonLd';
import { breadcrumbLd, formateursLd } from '@/lib/jsonld';
import { FORMATEURS } from '@/lib/formateurs';
import { pageAlternates, enPath } from '@/lib/i18n';
import '../../../grommet-home.css';
import '../../../grommet-forma.css';
import '../../../grommet-forma-pages.css';

const FR = '/alatere-forma/formateurs';
const TITLE = 'Alatere forMa — Our trainers';
const DESC =
  "Alatere forMa's trainers: practitioner instructors in web marketing, artificial intelligence, languages, digital communication and real estate.";

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
          breadcrumbLd([
            { name: 'Home', path: '/en' },
            { name: 'Alatere forMa', path: '/en/alatere-forma' },
            { name: 'Our trainers', path: enPath(FR) },
          ]),
          ...formateursLd(
            FORMATEURS.map((f) => ({ name: f.name, role: f.role.en, linkedin: f.linkedin })),
          ),
        ]}
      />
      <FormateursPage />
    </>
  );
}
