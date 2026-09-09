import Link from 'next/link';

export const metadata = {
  title: 'Now · Swapnil Ughade',
  description: 'Current focus, projects in flight, and reading list. Updated monthly from Pune, India.',
};

export default function NowPage() {
  const currentMonth = 'September 2026';

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: '780px' }}>
        <div className="section-head" style={{ borderBottom: '1px solid var(--line)', paddingBottom: '32px', marginBottom: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 className="section-title" style={{ marginBottom: 0 }}>
              What I&apos;m Doing <em>Now</em>
            </h1>
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.18em', textTransform: 'uppercase', paddingBottom: '4px' }}>
            Updated: {currentMonth} · Pune
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <section style={{ padding: '28px', background: 'var(--bone-warm)', border: '1px solid var(--line)', borderLeft: '4px solid var(--gold)' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '24px', color: 'var(--ink)', marginBottom: '16px' }}>
              1. What I&apos;m Working On
            </h2>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px', color: 'var(--ink-soft)' }}>
              <li>
                <strong>MagicWorks Advisory (Pillars 03 &amp; 04):</strong> Actively advising enterprise platforms on LLM search readiness and marketplace unit economics.
              </li>
              <li>
                <strong>Book Launch Rollout:</strong> Distributing <em>Two Algorithms, One Strategy</em> to international marketing leaders and hosting private briefings.
              </li>
              <li>
                <strong>Ideovate / simplidistance.com:</strong> Expanding program taxonomy for 2026/2027 distance MBA admissions cycles.
              </li>
            </ul>
          </section>

          <section style={{ padding: '28px', background: 'var(--bone-warm)', border: '1px solid var(--line)', borderLeft: '4px solid var(--rosewood)' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '24px', color: 'var(--ink)', marginBottom: '16px' }}>
              2. What I&apos;m Reading
            </h2>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px', color: 'var(--ink-soft)' }}>
              <li>
                <em>The Structure of Scientific Revolutions</em> by Thomas S. Kuhn (re-reading through the lens of generative AI paradigms).
              </li>
              <li>
                Technical documentation on agentic search pipelines and Retrieval-Augmented Generation evaluation frameworks.
              </li>
              <li>
                Research papers on high-trust consumer decision velocity in digital health and higher education.
              </li>
            </ul>
          </section>

          <section style={{ padding: '28px', background: 'var(--bone-warm)', border: '1px solid var(--line)', borderLeft: '4px solid var(--ink)' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '24px', color: 'var(--ink)', marginBottom: '16px' }}>
              3. What I&apos;m Building
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
              Incubating internal tools at MagicWorks Group: refining <a href="https://www.magicflowai.io/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--rosewood)', borderBottom: '1px solid var(--rosewood)' }}><strong>MagicFlow AI</strong></a> for autonomous campaign negative-keyword gating and testing new Next.js programmatic routing modules for high-trust education portals.
            </p>
          </section>
        </div>

        <div style={{ marginTop: '48px', paddingTop: '28px', borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <Link href="/writing" style={{ fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink)', borderBottom: '1px solid var(--gold)', paddingBottom: '3px' }}>
            Explore recent writings →
          </Link>
        </div>
      </div>
    </div>
  );
}
