import Link from "next/link";

interface BookPlateProps {
  bookNumber: "One" | "Two";
  title: string;
  subtitle: string;
  date: string;
  formats: string;
  blurb: string;
  slug: string;
  color?: "ink" | "rosewood";
}

export function BookPlate({
  bookNumber,
  title,
  subtitle,
  date,
  formats,
  blurb,
  slug,
  color = "ink",
}: BookPlateProps) {
  const isInk = color === "ink";

  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 md:p-8 bg-[var(--bone-warm)] border border-[var(--line)]">
      {/* Book Cover Visual Plate */}
      <div
        className={`md:col-span-5 p-8 flex flex-col justify-between min-h-[340px] ${
          isInk ? "bg-[var(--bg-indigo)] text-[var(--bone)]" : "bg-[var(--rosewood)] text-[var(--bone)]"
        } shadow-lg`}
      >
        <div className="font-mono text-xs tracking-[0.24em] uppercase text-[var(--gold-light)]">
          Book · {bookNumber}
        </div>
        <div className="my-auto">
          <h4 className="font-serif text-2xl lg:text-3xl font-normal leading-tight text-[var(--bone)]">
            {title}
          </h4>
          <p className="font-serif italic text-base text-[var(--gold-light)] mt-2">
            {subtitle}
          </p>
        </div>
        <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[rgba(239,235,227,0.7)] pt-4 border-t border-[rgba(239,235,227,0.2)]">
          Swapnil Ughade · 2026
        </div>
      </div>

      {/* Book Details */}
      <div className="md:col-span-7 flex flex-col justify-between py-2">
        <div>
          <div className="font-mono text-xs tracking-widest uppercase text-[var(--rosewood)] font-medium mb-2">
            {date} · {formats}
          </div>
          <h3 className="font-serif text-3xl font-medium text-[var(--ink)] mb-2">
            {title}
          </h3>
          <p className="font-serif italic text-lg text-[var(--ink-mute)] mb-4">
            {subtitle}
          </p>
          <p className="font-sans text-sm text-[var(--ink-soft)] leading-relaxed mb-6">
            {blurb}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link href={`/books/${slug}`} className="btn btn-primary text-xs">
            Book Overview &amp; Excerpt →
          </Link>
          <a
            href={
              slug === "ai-powered-google-ads-system"
                ? "https://www.amazon.in/dp/B0HJ6C52V6"
                : "https://www.amazon.in/dp/934966979X"
            }
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="btn btn-ghost text-xs"
          >
            Buy on Amazon ↗
          </a>
        </div>
      </div>
    </article>
  );
}
