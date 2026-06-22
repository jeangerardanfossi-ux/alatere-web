import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';

// Provider Grommet + registry styled-components retirés le 2026-06-22 : aucune
// page rendue n'utilise de composant Grommet (tout le design passe par les CSS
// `grommet-*.css`). Ils ne servaient qu'à des composants legacy non rendus et
// alourdissaient le bundle JS / le travail main-thread → pénalité LCP simulé.

// Police unique du site (design « Grommet », cf. handoff Claude Design).
// Poppins/Mulish retirées le 2026-06-22 : plus utilisées que par des composants
// legacy non rendus → leur préchargement pénalisait inutilement le LCP.
const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alatere-web.com'),
  title: {
    default: 'Alatere Web — Agence, formation, domiciliation & coworking à Antibes',
    template: '%s · Alatere Web',
  },
  description:
    'Entreprise familiale à Antibes depuis 2002 : e-commerce, formation Qualiopi, domiciliation d’entreprise et coworking. Quatre métiers, un seul interlocuteur.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Alatere Web',
    title: 'Alatere Web — E-commerce, formation, domiciliation & coworking à Antibes',
    description:
      "Quatre activités complémentaires, un seul interlocuteur, au cœur d'Antibes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={workSans.variable}>
      <body>{children}</body>
    </html>
  );
}
