import type { Metadata } from 'next';
import { ArticleCard } from '@/components/blog/ArticleCard';
import { articles } from '@/data/articles';

export const metadata: Metadata = {
  title: 'Blogs & Articles · TAZhealth',
  description: 'Health tips, stories from our outreaches and updates on TAZ AI.'
};

export default function Blog() {
  return (
    <section className="bg-white pb-16 pt-28 sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-sm text-ink/50">Blog</p>
        <h1 className="mt-4 text-[34px] font-medium leading-[1.05] tracking-[-0.03em] text-ink sm:mt-6 sm:text-6xl">
          Blogs & Articles
        </h1>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/60 sm:text-lg">
          Health tips, stories from our outreaches and updates on how we follow up with every patient.
        </p>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {articles.map((a) => <ArticleCard key={a.slug} article={a} />)}
        </div>
      </div>
    </section>);

}
