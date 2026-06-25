import type { Metadata } from 'next';
import FormaDomainPage from '@/components/pages/FormaDomainPage';
import JsonLd from '@/components/JsonLd';
import { courseLd, faqLd, breadcrumbLd, CONTENT_UPDATED } from '@/lib/jsonld';
import { FORMA_DOMAIN_BY_SLUG, FORMA_FAQ } from '@/lib/forma-domains';
import { pageAlternates, enPath } from '@/lib/i18n';
import '../../../grommet-home.css';
import '../../../grommet-forma.css';
import '../../../grommet-forma-pages.css';

const D = FORMA_DOMAIN_BY_SLUG['immobilier'];
const FR = '/alatere-forma/immobilier';
const DESC_EN =
  'Professional real-estate courses in Antibes: ALUR-law continuing education, ethics and real-estate digital marketing. Qualiopi-certified.';

export const metadata: Metadata = {
  title: { absolute: D.metaTitle.en },
  description: DESC_EN,
  alternates: pageAlternates(FR, 'en'),
  openGraph: { title: D.metaTitle.en, description: DESC_EN, url: enPath(FR), locale: 'en_US' },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          courseLd({
            name: D.name.en,
            description: DESC_EN,
            path: enPath(FR),
            teaches: D.skills.map((s) => s.en),
            dateModified: CONTENT_UPDATED,
          }),
          faqLd(FORMA_FAQ[D.slug].map((f) => ({ q: f.q.en, a: f.a.en }))),
          breadcrumbLd([
            { name: 'Home', path: '/en' },
            { name: 'Alatere forMa', path: '/en/alatere-forma' },
            { name: D.name.en, path: enPath(FR) },
          ]),
        ]}
      />
      <FormaDomainPage domain={D} />
    </>
  );
}
