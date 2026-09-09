import Link from "next/link";

interface VentureCardProps {
  name: string;
  role: string;
  year: number | string;
  sector: string;
  description: string;
  slug: string;
  accent?: "gold" | "rose" | "ink" | "pearl";
}

export function VentureCard({ name, role, year, sector, description, slug, accent = "gold" }: VentureCardProps) {
  const accentClasses = {
    gold: "border-t-[var(--gold)]",
    rose: "border-t-[var(--rosewood)]",
    ink: "border-t-[var(--ink)]",
    pearl: "border-t-[var(--pearl)]",
  }[accent];

  return (
    <article className={`p-8 bg-[var(--bone)] border border-[var(--line)] border-t-4 ${accentClasses} flex flex-col justify-between transition-transform hover:-translate-y-1`}>
      <div>
        <div className="font-mono text-xs tracking-[0.18em] uppercase text-[var(--gold)] mb-3">
          {role} · {year}
        </div>
        <h3 className="font-serif text-2xl lg:text-3xl font-medium text-[var(--ink)] mb-2">
          {name}
        </h3>
        <p className="font-sans text-xs uppercase tracking-wider text-[var(--rosewood)] font-medium mb-4">
          {sector}
        </p>
        <p className="font-sans text-sm text-[var(--ink-soft)] leading-relaxed mb-6">
          {description}
        </p>
      </div>
      <div>
        <Link
          href={`/ventures/${slug}`}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[var(--ink)] font-semibold border-b border-[var(--ink)] pb-1 hover:text-[var(--rosewood)] hover:border-[var(--rosewood)] transition-colors"
        >
          Read the venture note →
        </Link>
      </div>
    </article>
  );
}
