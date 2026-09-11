import { ARTICLES } from '@/lib/content-data';
import { WritingArchive } from '@/components/writing/WritingArchive';
import { TwoIntoOneGlyph } from '@/components/ui/SignatureSvg';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const metadata = {
  title: 'Writing · Swapnil Ughade · Long-Form Notes',
  description: 'Long-form notes on AI-first marketing, marketplace economics, and operating principles. Published every second Sunday.',
  alternates: {
    canonical: 'https://swapnilughade.com/writing',
  },
};

export default function WritingPage() {
  return (
    <div>
      <div className="section writing">
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Writing' }]} />
          <div className="section-head">
            <div className="hero-eyebrow">Editorial Archive</div>
            <h1 className="section-title">Writing &amp; <em>Notes</em></h1>
            <p className="section-sub">Long-form notes on portals, platforms, and the AI era of marketing. Every second Sunday.</p>
          </div>

          <WritingArchive articles={ARTICLES} />
        </div>
      </div>

      {/* NEWSLETTER BAND */}
      <section className="newsletter-band" id="the-letter">
        <div className="container">
          <div className="newsletter-eyebrow">Every second Sunday</div>
          <h2 className="newsletter-title">The <em>Letter</em></h2>
          <p className="newsletter-body">Long-form notes on the practice, plus one recommended read. Reply to any issue to reach me directly.</p>
          <form className="newsletter-form" action="/api/newsletter" method="POST">
            <label htmlFor="nl-email">Email</label>
            <input id="nl-email" name="email" type="email" placeholder="you@example.com" required />
            <button type="submit" className="btn gold" style={{ justifyContent: 'center' }}>
              Subscribe to The Letter
            </button>
          </form>
          <div className="newsletter-note">No spam. Clean text format. Unsubscribe in one click.</div>
        </div>
      </section>

      {/* FOOTER TRANSITION SPACER (LIGHT BONE / IVORY WITH TWO-INTO-ONE GLYPH) */}
      <div className="footer-transition-spacer" aria-hidden="true">
        <div className="footer-transition-spacer-inner">
          <span className="spacer-flank-line" />
          <TwoIntoOneGlyph className="w-7 h-7" />
          <span className="spacer-flank-line" />
        </div>
      </div>
    </div>
  );
}
