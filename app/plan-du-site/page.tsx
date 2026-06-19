import type { Metadata } from 'next';
import PlanDuSitePage from '@/components/pages/PlanDuSitePage';
import '../grommet-home.css';
import '../grommet-pages.css';

export const metadata: Metadata = {
  title: 'Plan du site',
  description:
    "Plan du site Alatere Web : toutes les pages (e-commerce, formations, domiciliation, coworking, blog, mentions légales) regroupées par thème.",
  alternates: { canonical: '/plan-du-site' },
};

export default function Page() {
  return <PlanDuSitePage />;
}
