import Link from 'next/link';
import { Ornament } from '@/components/ui/Ornament';
import { TwoIntoOneGlyph } from '@/components/ui/SignatureSvg';

export const metadata = {
  title: 'Ideovate · Swapnil Ughade',
  description: 'Ideovate Research Pvt Ltd. Founded 2018. The company behind simplidistance.com, the distance and online MBA discovery portal.',
};

export default function IdeovateSubpage() {
  return (
    <div className="venture-subpage">
      {/* HERO SECTION */}
      <header className="hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/ventures">Ventures</Link> · Ideovate
          </nav>
          <div className="role-card gold">
            <div className="rc-role">Founder-Director · Since 2018</div>
            <h1 className="rc-name">Ideovate</h1>
            <p className="rc-legal">Ideovate Research Pvt Ltd</p>
            <p className="rc-sector">
              Edtech company running simplidistance.com, the distance and online MBA discovery portal for Indian professionals. Founded 4 October 2018.
            </p>
          </div>
        </div>
      </header>

      {/* NARRATIVE SECTION */}
      <section className="section">
        <div className="section-inner">
          <p className="lead-p">
            Ideovate exists to make one specific decision easier for one specific reader: an Indian professional in the middle of their career choosing where to pursue a distance or online MBA.
          </p>

          <p className="p dropcap">
            The category is a high-trust, high-consideration purchase. A distance MBA is a decision made once, thought about for months, and lived with for two years. What sits between the reader and the right decision is a landscape of institution sites, aggregator listings, misleading rankings, and paid noise. simplidistance.com was built to be the site the reader trusts.
          </p>

          <Ornament />

          <p className="p">
            The design principle is boring on purpose: <strong>information density with editorial judgment</strong>. Each institution page is structured so that a reader can compare programs without having to translate marketing language. Fees are stated in rupees. Recognition status is stated in full. Faculty credentials sit where they belong, not where they promote best.
          </p>

          <p className="p">
            The growth engine is compound content plus disciplined SEO plus paid discovery calibrated to the reader&apos;s actual intent. The team is small. The systems are opinionated. The reader base has grown four times year on year for two consecutive years.
          </p>
        </div>
      </section>

      {/* PROOF ZONE */}
      <section className="proof-zone">
        <div className="proof-head">
          <div className="proof-eye">The numbers</div>
          <h2 className="proof-title">Sixteen months, <em>measured</em>.</h2>
          <p className="proof-sub">Metrics from the last full growth window at simplidistance.com.</p>
        </div>
        <div className="container">
          <div className="proof-grid">
            <div className="big-seal">
              <div className="big-seal-n">50k+</div>
              <div className="big-seal-l">Qualified leads<br />in sixteen months</div>
            </div>
            <div className="big-seal">
              <div className="big-seal-n">4×</div>
              <div className="big-seal-l">Year on year<br />growth</div>
            </div>
            <div className="big-seal">
              <div className="big-seal-n">30–40%</div>
              <div className="big-seal-l">Below industry<br />cost per lead</div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTAL THESIS SECTION */}
      <section className="section parchment">
        <div className="section-inner">
          <h2 className="h3">Why Ideovate <em>proves</em> the portal thesis</h2>
          <p className="p">
            Marketplace &amp; Platform Consultation, Pillar 04 at MagicWorks, exists because I have run a portal at scale and know how it is built. Ideovate is that portal. The framework I take into advisory engagements is not theoretical. It is what runs simplidistance.com every day.
          </p>
          <p className="p">
            A well-built portal in a high-trust category creates disproportionate value. Ideovate is the working example of that sentence. Everything from information architecture to paid economics to editorial governance is a decision that came out of running the site, not out of reading about running one.
          </p>
        </div>
      </section>

      {/* CTA ZONE */}
      <section className="cta-zone">
        <div className="cta-eye">See the site</div>
        <h2 className="cta-title">Visit <em>simplidistance.com</em></h2>
        <p className="cta-body">
          The portal is the operational home for Ideovate: institution database, program comparisons, admissions guidance, and the editorial that keeps the site trusted by its readers.
        </p>
        <div className="cta-btns">
          <a href="https://simplidistance.com" className="btn" target="_blank" rel="noopener noreferrer">
            Visit simplidistance.com ↗
          </a>
          <Link href="/contact" className="btn ghost">
            Direct message
          </Link>
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
