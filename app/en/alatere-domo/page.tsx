import type { Metadata } from 'next';
import DomoPage from '@/components/pages/DomoPage';
import JsonLd from '@/components/JsonLd';
import { domoLd, breadcrumbLd } from '@/lib/jsonld';
import { pageAlternates } from '@/lib/i18n';
import '../../grommet-home.css';
import '../../grommet-domo.css';
import '../../grommet-todo.css';

const FR = '/alatere-domo';
const TITLE = 'Company business address in Antibes — Alatere doMo';
const DESC =
  'Register your head office in Antibes from €30/month. Préfecture-approved provider: mail handling, scanning, forwarding. Certificate within 48 h.';

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
          domoLd,
          breadcrumbLd([
            { name: 'Home', path: '/en' },
            { name: 'Alatere doMo', path: `/en${FR}` },
          ]),
        ]}
      />
      <DomoPage />
    </>
  );
}
