import Link from 'next/link';
import { Ornament } from '@/components/ui/Ornament';
import { TwoIntoOneGlyph } from '@/components/ui/SignatureSvg';

export const metadata = {
  title: 'Trexova · Swapnil Ughade',
  description: 'Trexova Wellbeing Pvt. Ltd. Digital marketing consultant since 2021. Global wellness retreats, yoga training, and holistic health marketplace.',
};

export default function TrexovaSubpage() {
  return (
    <div className="venture-subpage">
      {/* HERO SECTION */}
      <header className="hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/ventures">Ventures</Link> · Trexova
          </nav>
          <div className="role-card pearl">
            <div className="rc-role">Digital Marketing Consultant · Since 2021</div>
            <h1 className="rc-name">Trexova</h1>
            <p className="rc-legal">Trexova Wellbeing Pvt. Ltd.</p>
            <p className="rc-sector">
              Global marketplace for wellness retreats, yoga teacher training programs, and holistic health practitioners at trexova.com.
            </p>
          </div>
        </div>
      </header>

      {/* NARRATIVE SECTION */}
      <section className="section">
        <div className="section-inner">
          <p className="lead-p">
            Trexova Wellbeing is building the global marketplace for wellness, yoga retreats, Ayurveda centers, and holistic health practitioners at trexova.com.
          </p>

          <p className="p dropcap">
            Wellness and holistic health is an experiential category where consumer trust and practitioner verification are everything. The challenge in marketplace design here is two-sided: curating credible practitioners and wellness retreats globally while building frictionless discovery and international booking funnels for seekers.
          </p>

          <Ornament />

          <p className="p">
            Since 2021, I have served as <strong>Digital Marketing Consultant</strong> to Trexova. This advisory role sits directly within Pillar 04 (Marketplace &amp; Platform Consultation) and Pillar 01 (Digital Marketing) of the MagicWorks practice, applying two decades of funnel engineering and organic discovery architecture to the wellness economy.
          </p>

          <p className="p">
            From search architecture for cross-border retreat discovery to paid acquisition economics and international user onboarding, the engagement is focused on building sustainable, scalable unit economics for marketplace growth.
          </p>
        </div>
      </section>

      {/* CONSULTING THESIS SECTION */}
      <section className="section parchment">
        <div className="section-inner">
          <h2 className="h3">Consulting on <em>marketplace</em> dynamics</h2>
          <p className="p">
            Marketplaces live and die by search intent alignment and liquidity balance. In wellness tourism and retreat discovery, seasonal demand curves and multi-currency trust signals dictate platform survival. Our consulting work focuses on structuring search taxonomy, high-intent landing architecture, and automated nurture sequences.
          </p>
          <p className="p">
            Working with Trexova proves how the core operational frameworks developed at MagicWorks translate across international niche marketplaces and high-consideration consumer verticals.
          </p>
        </div>
      </section>

      {/* CTA ZONE */}
      <section className="cta-zone">
        <div className="cta-eye">Explore the marketplace</div>
        <h2 className="cta-title">Visit <em>trexova.com</em></h2>
        <p className="cta-body">
          Discover verified wellness retreats, yoga teacher training programs, holistic practitioners, and wellness escapes worldwide on trexova.com.
        </p>
        <div className="cta-btns">
          <a
            href="https://trexova.com"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit trexova.com ↗
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

