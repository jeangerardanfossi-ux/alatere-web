import type { Metadata } from 'next';
import EcomPage from '@/components/pages/EcomPage';
import JsonLd from '@/components/JsonLd';
import { organizationLd, ecomFaqLd, breadcrumbLd } from '@/lib/jsonld';
import '../grommet-home.css';
import '../grommet-activity.css';

export const metadata: Metadata = {
  title: { absolute: 'Agence web, e-commerce & SEO à Antibes - Alatere ecoM' },
  description:
    "20 ans d'e-commerce opéré en propre (repro-tableaux.com, copia-di-arte.com). Nous appliquons à votre boutique le SEO, le SEA et l'acquisition que nous pratiquons sur nos sites.",
  alternates: { canonical: '/alatere-ecom' },
  openGraph: {
    title: 'Agence web, e-commerce & SEO à Antibes - Alatere ecoM',
    description:
      "20 ans d'e-commerce opéré en propre. SEO, SEA et acquisition pour votre boutique en ligne, testés d'abord sur nos sites.",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          organizationLd,
          ecomFaqLd,
          breadcrumbLd([
            { name: 'Accueil', path: '/' },
            { name: 'Alatere ecoM', path: '/alatere-ecom' },
          ]),
        ]}
      />
      <EcomPage />
    </>
  );
}
