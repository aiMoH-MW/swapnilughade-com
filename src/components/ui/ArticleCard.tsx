import Link from "next/link";

interface ArticleCardProps {
  title: string;
  category: string;
  blurb: string;
  date: string;
  readingTime: string;
  slug: string;
}

export function ArticleCard({ title, category, blurb, date, readingTime, slug }: ArticleCardProps) {
  const formattedReadingTime = readingTime.startsWith('(') ? readingTime : `(${readingTime.replace(/[()[\]]/g, '').trim()})`;

  return (
    <article className="p-8 bg-[var(--bone)] border border-[var(--line)] flex flex-col justify-between transition-transform hover:-translate-y-1 group">
      <div>
        <div className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-3">
          {category}
        </div>
        <h3 className="font-serif text-2xl font-medium text-[var(--ink)] group-hover:text-[var(--rosewood)] transition-colors mb-3 leading-snug">
          <Link href={`/writing/${slug}`}>{title}</Link>
        </h3>
        <p className="font-sans text-sm text-[var(--ink-soft)] leading-relaxed mb-6">
          {blurb}
        </p>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-[var(--line-soft)] font-mono text-xs text-[var(--ink-mute)]">
        <span>{date}</span>
        <span>{formattedReadingTime}</span>
      </div>
    </article>
  );
}
