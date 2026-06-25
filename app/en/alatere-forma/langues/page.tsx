import type { Metadata } from 'next';
import FormaDomainPage from '@/components/pages/FormaDomainPage';
import JsonLd from '@/components/JsonLd';
import { courseLd, faqLd, breadcrumbLd, CONTENT_UPDATED } from '@/lib/jsonld';
import { FORMA_DOMAIN_BY_SLUG, FORMA_FAQ } from '@/lib/forma-domains';
import { pageAlternates } from '@/lib/i18n';
import '../../../grommet-home.css';
import '../../../grommet-forma.css';
import '../../../grommet-forma-pages.css';

const D = FORMA_DOMAIN_BY_SLUG['langues'];
const FR = '/alatere-forma/langues';
const DESC_EN =
  'Language courses in Antibes: professional English, Italian and Spanish, one-to-one or in small groups. Qualiopi-certified, CPF.';

export const metadata: Metadata = {
  title: { absolute: D.metaTitle.en },
  description: DESC_EN,
  alternates: pageAlternates(FR, 'en'),
  openGraph: { title: D.metaTitle.en, description: DESC_EN, url: `/en${FR}`, locale: 'en_US' },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          courseLd({
            name: D.name.en,
            description: DESC_EN,
            path: `/en${FR}`,
            teaches: D.skills.map((s) => s.en),
            dateModified: CONTENT_UPDATED,
          }),
          faqLd(FORMA_FAQ[D.slug].map((f) => ({ q: f.q.en, a: f.a.en }))),
          breadcrumbLd([
            { name: 'Home', path: '/en' },
            { name: 'Alatere forMa', path: '/en/alatere-forma' },
            { name: D.name.en, path: `/en${FR}` },
          ]),
        ]}
      />
      <FormaDomainPage domain={D} />
    </>
  );
}
