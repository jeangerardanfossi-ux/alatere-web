import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleLayout from '@/components/blog/ArticleLayout';
import Body from '@/components/blog/articles/LouerBureauAntibesBail';
import JsonLd from '@/components/JsonLd';
import { blogPostingLd, breadcrumbLd, faqLd } from '@/lib/jsonld';
import { postBySlug, localizePost, isPublished } from '@/lib/blog';
import { BAIL_FAQ } from '@/lib/bureaux-content';
import '../../grommet-home.css';
import '../../grommet-pages.css';

const post = postBySlug('louer-bureau-antibes-bail')!;
const p = localizePost(post, 'fr');

// Article publié en français uniquement : canonical FR, pas de hreflang vers /en.
export const metadata: Metadata = {
  title: { absolute: p.metaTitle },
  description: p.excerpt,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: { title: p.metaTitle, description: p.excerpt, type: 'article' },
};

export default function Page() {
  if (!isPublished(post)) notFound();

  return (
    <>
      <JsonLd
        data={[
          blogPostingLd(p, 'fr'),
          faqLd(BAIL_FAQ),
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
