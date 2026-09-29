import Link from 'next/link';
import type { Article } from '../../data/articles';

export function ArticleCard({ article }: {article: Article;}) {
  return (
    <Link href={`/blog/${article.slug}`} className="group block">
      <div className="overflow-hidden rounded-2xl bg-mint">
        <img
          src={article.image}
          alt=""
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-[1.03]" />

      </div>
      <div className="mt-4 flex items-center justify-between gap-4 text-sm">
        <span className="font-medium text-leaf">{article.category}</span>
        <span className="text-ink/45">{article.date}</span>
      </div>
      <h3 className="mt-2 text-lg font-medium leading-snug text-ink transition-colors group-hover:text-forest sm:text-xl">
        {article.title}
      </h3>
      <p className="mt-3 text-sm text-ink/50">by {article.author}</p>
    </Link>);

}
