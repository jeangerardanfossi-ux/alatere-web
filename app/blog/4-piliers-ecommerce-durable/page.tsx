import type { Metadata } from 'next';
import ArticleLayout from '@/components/blog/ArticleLayout';
import Body from '@/components/blog/articles/QuatrePiliersEcommerce';
import JsonLd from '@/components/JsonLd';
import { blogPostingLd, breadcrumbLd, piliersEcomFaqLd } from '@/lib/jsonld';
import { postBySlug, localizePost } from '@/lib/blog';
import { pageAlternates } from '@/lib/i18n';
import '../../grommet-home.css';
import '../../grommet-pages.css';

const post = postBySlug('4-piliers-ecommerce-durable')!;
const p = localizePost(post, 'fr');

export const metadata: Metadata = {
  title: { absolute: p.metaTitle },
  description: p.excerpt,
  alternates: pageAlternates(`/blog/${post.slug}`, 'fr'),
  openGraph: { title: p.metaTitle, description: p.excerpt, type: 'article' },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          blogPostingLd(p, 'fr'),
          piliersEcomFaqLd('fr'),
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
