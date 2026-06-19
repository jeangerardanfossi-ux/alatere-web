import type { Metadata } from 'next';
import { Poppins, Mulish, Work_Sans } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
import Providers from './providers';
import './globals.css';

// Titres — Poppins (géométrique, friendly).
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
});

// Corps — Mulish.
const mulish = Mulish({
  variable: '--font-mulish',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

// Design « Grommet » de la home — Work Sans (cf. handoff Claude Design).
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
    <html lang="fr" className={`${poppins.variable} ${mulish.variable} ${workSans.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
