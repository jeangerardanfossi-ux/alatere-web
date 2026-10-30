import type { Metadata } from 'next';
import HomeGrommet from '@/components/home/HomeGrommet';
import JsonLd from '@/components/JsonLd';
import { organizationLd, localBusinessLd, websiteLd } from '@/lib/jsonld';
import { pageAlternates } from '@/lib/i18n';
import '../grommet-home.css';

const TITLE = 'Alatere Web - Agency, training, business address & coworking in Antibes';
const DESC =
  'Family business founded in 2002, at 9 Boulevard Albert 1er in Antibes: e-commerce, Qualiopi training, company domiciliation and coworking.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: pageAlternates('/', 'en'),
  openGraph: { type: 'website', locale: 'en_US', siteName: 'Alatere Web', title: TITLE, description: DESC, url: '/en' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={[websiteLd, organizationLd, localBusinessLd]} />
      <HomeGrommet />
    </>
  );
}
