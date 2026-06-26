import type { Metadata } from 'next';
import FormaDomainPage from '@/components/pages/FormaDomainPage';
import JsonLd from '@/components/JsonLd';
import { courseLd, faqLd, breadcrumbLd, CONTENT_UPDATED } from '@/lib/jsonld';
import { FORMA_DOMAIN_BY_SLUG, FORMA_FAQ } from '@/lib/forma-domains';
import '../../grommet-home.css';
import '../../grommet-forma.css';
import '../../grommet-forma-pages.css';

const D = FORMA_DOMAIN_BY_SLUG['langues'];
const PATH = '/alatere-forma/langues';

export const metadata: Metadata = {
  title: { absolute: D.metaTitle.fr },
  description: D.metaDescription,
  alternates: { canonical: PATH },
  openGraph: { title: D.metaTitle.fr, description: D.metaDescription, url: PATH },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          courseLd({
            name: D.name.fr,
            description: D.metaDescription,
            path: PATH,
            teaches: D.skills.map((s) => s.fr),
            dateModified: CONTENT_UPDATED,
          }),
          faqLd(FORMA_FAQ[D.slug].map((f) => ({ q: f.q.fr, a: f.a.fr }))),
          breadcrumbLd([
            { name: 'Accueil', path: '/' },
            { name: 'Alatere forMa', path: '/alatere-forma' },
            { name: D.name.fr, path: PATH },
          ]),
        ]}
      />
      <FormaDomainPage domain={D} />
    </>
  );
}
