import type { Metadata } from 'next';
import CowoPage from '@/components/pages/CowoPage';
import JsonLd from '@/components/JsonLd';
import { cowoLd, breadcrumbLd } from '@/lib/jsonld';
import { pageAlternates } from '@/lib/i18n';
import '../../grommet-home.css';
import '../../grommet-activity.css';

const FR = '/alatere-cowo';
const TITLE = 'Coworking in Antibes near Port Vauban — Alatere coWo';
const DESC =
  'Coworking space in Antibes: hot desks, private offices, 5 air-conditioned meeting rooms, fibre internet. Steps from Port Vauban.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: pageAlternates(FR, 'en'),
  openGraph: { title: TITLE, description: DESC, url: `/en${FR}`, locale: 'en_US' },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          cowoLd,
          breadcrumbLd([
            { name: 'Home', path: '/en' },
            { name: 'Alatere coWo', path: `/en${FR}` },
          ]),
        ]}
      />
      <CowoPage />
    </>
  );
}
