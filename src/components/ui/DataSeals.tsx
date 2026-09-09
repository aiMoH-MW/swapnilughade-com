export function DataSeals() {
  const seals = [
    {
      num: "18+",
      suffix: "Years",
      planet: "Saturn · 8",
      label: "Founder & Operator",
      sub: "MagicWorks IT Solutions (Est. 2009, Pune)",
    },
    {
      num: "05",
      suffix: "Pillars",
      planet: "Jupiter · 3",
      label: "Service Architecture",
      sub: "Marketing, Dev, AI, Marketplace & Publishing",
    },
    {
      num: "02",
      suffix: "Books",
      planet: "Venus · 6",
      label: "Published Works",
      sub: "Two Algorithms, One Strategy & AI Google Ads",
    },
    {
      num: "$8M+",
      suffix: "Spend",
      planet: "Saturn · 8",
      label: "Ad Spend Managed",
      sub: "₹70+ Crore across India, UK, UAE & US",
    },
  ];

  return (
    <section aria-label="Data Seals and Metrics" className="py-12 border-y border-[var(--line)] bg-[var(--bone-warm)]">
      <div className="site-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {seals.map((s, idx) => (
            <div
              key={idx}
              className="p-6 bg-[var(--bone)] border border-[var(--line)] border-l-4 border-l-[var(--gold)] flex flex-col justify-between"
            >
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--gold)] mb-3">
                {s.planet}
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-serif text-4xl lg:text-5xl font-semibold text-[var(--amethyst)]">
                  {s.num}
                </span>
                <span className="font-mono text-sm uppercase text-[var(--saffron)] font-medium">
                  {s.suffix}
                </span>
              </div>
              <div>
                <h4 className="font-serif font-medium text-lg text-[var(--ink)] mb-1">
                  {s.label}
                </h4>
                <p className="font-sans text-xs text-[var(--ink-mute)] leading-relaxed">
                  {s.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
