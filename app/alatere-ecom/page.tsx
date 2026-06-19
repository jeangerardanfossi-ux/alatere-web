import type { Metadata } from 'next';
import EcomPage from '@/components/pages/EcomPage';
import JsonLd from '@/components/JsonLd';
import { organizationLd, ecomFaqLd, breadcrumbLd } from '@/lib/jsonld';
import '../grommet-home.css';
import '../grommet-activity.css';

export const metadata: Metadata = {
  title: { absolute: 'Alatere ecoM — Agence e-commerce & SEO à Antibes' },
  description:
    "20 ans d'e-commerce opéré en propre (repro-tableaux.com, copia-di-arte.com). Notre savoir-faire SEO, SEA et acquisition au service de votre boutique.",
  alternates: { canonical: '/alatere-ecom' },
  openGraph: {
    title: 'Alatere ecoM — Agence e-commerce & SEO à Antibes',
    description:
      "20 ans d'e-commerce opéré en propre. Savoir-faire SEO, SEA et acquisition au service de votre boutique en ligne.",
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
