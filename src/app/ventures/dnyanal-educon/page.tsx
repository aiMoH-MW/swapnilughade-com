import Link from 'next/link';
import { Ornament } from '@/components/ui/Ornament';
import { TwoIntoOneGlyph } from '@/components/ui/SignatureSvg';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const metadata = {
  title: 'Dnyanal Educon · Swapnil Ughade',
  description: 'Dnyanal Educon Pvt Ltd. Investor since 2023. The company behind collegencourses.com, the discovery platform for regular MBA and design institutes.',
  alternates: {
    canonical: 'https://swapnilughade.com/ventures/dnyanal-educon',
  },
};

export default function DnyanalSubpage() {
  return (
    <div className="venture-subpage">
      {/* HERO SECTION */}
      <header className="hero">
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Ventures', href: '/ventures' },
              { label: 'Dnyanal Educon' },
            ]}
          />
          <div className="role-card rosewood">
            <div className="rc-role">Investor · Since 2023</div>
            <h1 className="rc-name">Dnyanal Educon</h1>
            <p className="rc-legal">Dnyanal Educon Pvt Ltd</p>
            <p className="rc-sector">
              Higher education discovery platform operating collegencourses.com, focused on regular on-campus MBA and design institute admissions.
            </p>
          </div>
        </div>
      </header>

      {/* NARRATIVE SECTION */}
      <section className="section">
        <div className="section-inner">
          <p className="lead-p">
            Dnyanal Educon exists to bring clarity to one of the highest-stakes decisions a student or family ever makes: selecting an on-campus, full-time MBA or design institute.
          </p>

          <p className="p dropcap">
            Unlike distance or online learning, an on-campus degree requires massive capital outlay, campus relocation, and competitive entrance exam preparation. What prospective students find in their search is a clutter of indiscriminate aggregators, opaque fee calculators, and sponsored rankings. collegencourses.com was engineered to be the trusted, transparent compass.
          </p>

          <Ornament />

          <p className="p">
            My involvement with Dnyanal Educon is at the <strong>investor level</strong>. Having spent two decades building digital discovery engines and portal economics at MagicWorks and Ideovate, backing an exceptional founding team solving traditional higher education discovery was a natural conviction.
          </p>

          <p className="p">
            The platform combines structured course comparisons, entrance exam cutoffs, verified placement track records, and transparent fee schedules—empowering students across India to make informed choices with complete confidence.
          </p>
        </div>
      </section>

      {/* THESIS SECTION */}
      <section className="section parchment">
        <div className="section-inner">
          <h2 className="h3">The <em>discovery</em> thesis in regular admissions</h2>
          <p className="p">
            In an increasingly crowded market of aggregator directories, high-intent students value editorial integrity above all else. Aggregators often prioritize paid listings over real student outcomes. Dnyanal Educon&apos;s approach with collegencourses.com focuses on clean information design, transparent admission pathways, and genuine placement intelligence.
          </p>
          <p className="p">
            Backing high-trust education portals reinforces my core philosophy: categories defined by life-changing decisions reward patience, verified data, and rigorous user experience.
          </p>
        </div>
      </section>

      {/* CTA ZONE */}
      <section className="cta-zone">
        <div className="cta-eye">See the platform</div>
        <h2 className="cta-title">Visit <em>collegencourses.com</em></h2>
        <p className="cta-body">
          collegencourses.com is the live discovery portal operated by Dnyanal Educon Pvt Ltd for full-time MBA programs, design colleges, entrance exam guides, and verified admission insights.
        </p>
        <div className="cta-btns">
          <a
            href="https://collegencourses.com"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit collegencourses.com ↗
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

