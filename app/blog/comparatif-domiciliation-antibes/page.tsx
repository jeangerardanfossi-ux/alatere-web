import type { Metadata } from 'next';
import ArticleLayout from '@/components/blog/ArticleLayout';
import Body from '@/components/blog/articles/ComparatifDomiciliationAntibes';
import JsonLd from '@/components/JsonLd';
import {
  blogPostingLd,
  breadcrumbLd,
  comparatifDomiciliationFaqLd,
  comparatifDomiciliationItemListLd,
} from '@/lib/jsonld';
import { postBySlug, localizePost } from '@/lib/blog';
import '../../grommet-home.css';
import '../../grommet-pages.css';

const post = postBySlug('comparatif-domiciliation-antibes')!;
const p = localizePost(post, 'fr');

// Article publié en français uniquement : canonical FR, pas de hreflang vers /en.
// metadataBase, og:locale et og:site_name sont hérités de app/layout.tsx.
export const metadata: Metadata = {
  title: { absolute: p.metaTitle },
  description: p.excerpt,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: {
    type: 'article',
    url: `/blog/${post.slug}`,
    title: p.metaTitle,
    description: p.excerpt,
    publishedTime: post.date,
    modifiedTime: post.updated,
    authors: ['https://www.linkedin.com/in/jeangerardanfossi/'],
    section: p.category,
    tags: ['domiciliation', 'Antibes', 'Sophia Antipolis', 'siège social', 'centre d’affaires'],
  },
  twitter: { card: 'summary_large_image' },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          blogPostingLd(p, 'fr'),
          comparatifDomiciliationFaqLd,
          comparatifDomiciliationItemListLd,
          breadcrumbLd([
            { name: 'Accueil', path: '/' },
            { name: 'Ressources', path: '/blog' },
            { name: p.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <ArticleLayout post={post}>
        <Body />
      </ArticleLayout>
    </>
  );
}
