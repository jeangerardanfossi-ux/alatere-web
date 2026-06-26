import type { Metadata } from 'next';
import PlanDuSitePage from '@/components/pages/PlanDuSitePage';
import { pageAlternates } from '@/lib/i18n';
import '../../grommet-home.css';
import '../../grommet-pages.css';

export const metadata: Metadata = {
  title: 'Sitemap',
  description:
    'Alatere Web sitemap: all pages (e-commerce, training, business address, coworking, blog, legal) grouped by theme.',
  alternates: pageAlternates('/plan-du-site', 'en'),
};

export default function Page() {
  return <PlanDuSitePage />;
}
