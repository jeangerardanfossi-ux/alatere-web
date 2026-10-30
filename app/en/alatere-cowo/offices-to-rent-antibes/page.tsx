import type { Metadata } from 'next';
import BureauxAntibesPage from '@/components/pages/BureauxAntibesPage';
import JsonLd from '@/components/JsonLd';
import { bureauxLd, faqLd, breadcrumbLd } from '@/lib/jsonld';
import { BUREAUX_FAQ, BUREAUX_PATH } from '@/lib/bureaux-content';
import { pageAlternates, enPath } from '@/lib/i18n';
import '../../../grommet-home.css';
import '../../../grommet-activity.css';

const TITLE = 'Offices to rent in Antibes from €30/day, no lease - Alatere coWo';
const DESC =
  'Office to rent in central Antibes, near Port Vauban: €30 incl. VAT per day or €360 per month, utilities, fibre and coffee included. No lease, no deposit.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: pageAlternates(BUREAUX_PATH, 'en'),
  openGraph: { title: TITLE, description: DESC, url: enPath(BUREAUX_PATH), locale: 'en_US' },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          bureauxLd('en', enPath(BUREAUX_PATH)),
          faqLd(BUREAUX_FAQ.map((f) => ({ q: f.q.en, a: f.a.en }))),
          breadcrumbLd([
            { name: 'Home', path: '/en' },
            { name: 'Alatere coWo', path: '/en/alatere-cowo' },
            { name: 'Offices to rent in Antibes', path: enPath(BUREAUX_PATH) },
          ]),
        ]}
      />
      <BureauxAntibesPage />
    </>
  );
}
