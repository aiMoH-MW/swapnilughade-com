import Link from 'next/link';
import { SPEAKING_TOPICS } from '@/lib/content-data';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const metadata = {
  title: 'Speaking · Swapnil Ughade · Keynotes & Briefings',
  description: 'Eight curated keynote topics on AI-first marketing, platform consultation, and operating frameworks.',
  alternates: {
    canonical: 'https://swapnilughade.com/speaking',
  },
};

export default function SpeakingPage() {
  return (
    <article className="section">
      <div className="container">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Speaking' }]} />
        <div className="section-head" style={{ marginBottom: '32px' }}>
          <div className="hero-eyebrow">Keynotes &amp; Briefings</div>
          <h1 className="section-title">Speaking <em>engagements</em></h1>
          <p className="section-sub">I deliver strategic keynotes and executive briefings for industry conferences, corporate offsites, and business accelerators.</p>
          <div style={{ marginTop: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn primary">
              Book for an event →
            </Link>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px', marginTop: '48px' }}>
          {SPEAKING_TOPICS.map((topic) => (
            <div key={topic.num} style={{ padding: '28px', background: 'var(--bone-warm)', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.18em', color: 'var(--gold)', fontWeight: 600, marginBottom: '8px' }}>
                  TOPIC {topic.num}
                </div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '22px', color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.15 }}>
                  {topic.title}
                </h3>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--rosewood)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
                  Audience: {topic.audience}
                </div>
                <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.55 }}>
                  {topic.synopsis}
                </p>
              </div>
              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--line-soft)' }}>
                <Link href="/contact" style={{ fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink)', borderBottom: '1px solid var(--ink)', paddingBottom: '2px' }}>
                  Request this topic →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
