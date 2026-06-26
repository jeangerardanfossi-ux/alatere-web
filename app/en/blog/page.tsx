import type { Metadata } from 'next';
import BlogIndex from '@/components/blog/BlogIndex';
import JsonLd from '@/components/JsonLd';
import { blogLd, breadcrumbLd } from '@/lib/jsonld';
import { pageAlternates, enPath } from '@/lib/i18n';
import '../../grommet-home.css';
import '../../grommet-pages.css';

const FR = '/blog';
const TITLE = 'Resources & guides — Alatere Web (Antibes)';
const DESC =
  'Alatere Web practical guides: company address registration, training funding, coworking and e-commerce in Antibes.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: pageAlternates(FR, 'en'),
  openGraph: {
    title: 'Resources & guides — Alatere Web',
    description: DESC,
    url: enPath(FR),
    locale: 'en_US',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          blogLd('en'),
          breadcrumbLd([
            { name: 'Home', path: '/en' },
            { name: 'Resources', path: enPath(FR) },
          ]),
        ]}
      />
      <BlogIndex />
    </>
  );
}
