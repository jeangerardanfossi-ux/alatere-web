import type { Metadata } from 'next';
import ArticleLayout from '@/components/blog/ArticleLayout';
import Body from '@/components/blog/articles/CoworkingAntibesGuide';
import JsonLd from '@/components/JsonLd';
import { blogPostingLd, breadcrumbLd, cowoGuideFaqLd } from '@/lib/jsonld';
import { postBySlug } from '@/lib/blog';
import '../../grommet-home.css';
import '../../grommet-pages.css';

const post = postBySlug('coworking-antibes-guide')!;

export const metadata: Metadata = {
  title: { absolute: post.metaTitle },
  description: post.excerpt,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: { title: post.metaTitle, description: post.excerpt, type: 'article' },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          blogPostingLd(post),
          cowoGuideFaqLd,
          breadcrumbLd([
            { name: 'Accueil', path: '/' },
            { name: 'Ressources', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <ArticleLayout post={post}>
        <Body />
      </ArticleLayout>
    </>
  );
}
