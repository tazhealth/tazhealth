import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleCard } from '@/components/blog/ArticleCard';
import { articles } from '@/data/articles';

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const { slug } = await props.params;
  const article = articles.find((a) => a.slug === slug);
  return article ? { title: `${article.title} · TAZhealth`, description: article.excerpt } : {};
}

export default async function ArticlePage(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  const more = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <article className="bg-white pb-16 pt-28 sm:pt-32 lg:pt-40">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <p className="flex items-center gap-3 text-sm">
            <span className="font-medium text-leaf">{article.category}</span>
            <span className="text-ink/45">{article.date}</span>
          </p>
          <h1 className="mt-3 text-balance text-3xl font-medium leading-[1.15] tracking-[-0.025em] text-ink sm:text-[42px]">
            {article.title}
          </h1>
          <p className="mt-4 text-sm text-ink/50">by {article.author}</p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl px-5 sm:px-8">
          <img src={article.image} alt="" className="aspect-[16/9] w-full rounded-2xl object-cover" />
        </div>

        <div className="mx-auto mt-10 max-w-2xl space-y-5 px-5 text-[16px] leading-[1.8] text-ink/75 sm:px-8 sm:text-[17px]">
          <p className="text-lg leading-relaxed text-ink sm:text-xl">{article.excerpt}</p>
          {article.body.map((p, i) =>
          p.startsWith('## ') ?
          <h2 key={i} className="!mt-12 text-xl font-medium tracking-[-0.015em] text-ink sm:text-2xl">
                {p.slice(3)}
              </h2> :

          <p key={i}>{p}</p>
          )}
        </div>
      </article>

      {more.length > 0 &&
      <section className="border-t border-ink/10 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2 className="text-2xl font-medium text-ink">Keep reading</h2>
            <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:gap-8">
              {more.map((a) => <ArticleCard key={a.slug} article={a} />)}
            </div>
          </div>
        </section>
      }
    </>);

}
