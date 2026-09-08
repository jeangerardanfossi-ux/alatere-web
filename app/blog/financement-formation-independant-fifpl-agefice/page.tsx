import type { Metadata } from 'next';
import ArticleLayout from '@/components/blog/ArticleLayout';
import Body from '@/components/blog/articles/FinancementFormationIndependant';
import JsonLd from '@/components/JsonLd';
import { blogPostingLd, breadcrumbLd } from '@/lib/jsonld';
import { postBySlug, localizePost } from '@/lib/blog';
import '../../grommet-home.css';
import '../../grommet-pages.css';

const post = postBySlug('financement-formation-independant-fifpl-agefice')!;
const p = localizePost(post, 'fr');

// Article publié en français uniquement : canonical FR, pas de hreflang vers /en.
export const metadata: Metadata = {
  title: { absolute: p.metaTitle },
  description: p.excerpt,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: { title: p.metaTitle, description: p.excerpt, type: 'article' },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          blogPostingLd(p, 'fr'),
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
