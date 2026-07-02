import type { Metadata } from 'next';
import BlogIndex from '@/components/blog/BlogIndex';
import JsonLd from '@/components/JsonLd';
import { blogLd, breadcrumbLd } from '@/lib/jsonld';
import { pageAlternates } from '@/lib/i18n';
import '../grommet-home.css';
import '../grommet-pages.css';

export const metadata: Metadata = {
  title: { absolute: 'Ressources & guides - Alatere Web (Antibes)' },
  description:
    "Guides pratiques Alatere Web : domiciliation d'entreprise, financement de formation, coworking et e-commerce à Antibes.",
  alternates: pageAlternates('/blog', 'fr'),
  openGraph: {
    title: 'Ressources & guides - Alatere Web',
    description:
      "Guides pratiques sur la domiciliation, la formation, le coworking et l'e-commerce à Antibes.",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          blogLd('fr'),
          breadcrumbLd([
            { name: 'Accueil', path: '/' },
            { name: 'Ressources', path: '/blog' },
          ]),
        ]}
      />
      <BlogIndex />
    </>
  );
}
