import type { Metadata } from 'next';
import FormaDomainPage from '@/components/pages/FormaDomainPage';
import JsonLd from '@/components/JsonLd';
import { courseLd, faqLd, breadcrumbLd, programsLd, CONTENT_UPDATED } from '@/lib/jsonld';
import { FORMA_DOMAIN_BY_SLUG, FORMA_FAQ } from '@/lib/forma-domains';
import { pageAlternates, enPath } from '@/lib/i18n';
import '../../../grommet-home.css';
import '../../../grommet-forma.css';
import '../../../grommet-forma-pages.css';

const D = FORMA_DOMAIN_BY_SLUG['intelligence-artificielle'];
const FR = '/alatere-forma/intelligence-artificielle';
const DESC_EN =
  'AI training in Antibes: ChatGPT, Claude and Copilot prompting, AI strategy for directors, no-code automation. Qualiopi, OPCO or FAF funding. Quote in 48 h.';

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
            name: D.h1?.en ?? D.name.en,
            description: DESC_EN,
            path: enPath(FR),
            teaches: D.skills.map((s) => s.en),
            dateModified: D.updated ?? CONTENT_UPDATED,
          }),
          programsLd(D, 'en'),
          faqLd(FORMA_FAQ[D.slug].map((f) => ({ q: f.q.en, a: f.a.en }))),
          breadcrumbLd([
            { name: 'Home', path: '/en' },
            { name: 'Alatere forMa', path: '/en/alatere-forma' },
            { name: D.h1?.en ?? D.name.en, path: enPath(FR) },
          ]),
        ]}
      />
      <FormaDomainPage domain={D} />
    </>
  );
}
