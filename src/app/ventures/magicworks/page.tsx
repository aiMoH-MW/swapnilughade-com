import Link from 'next/link';
import { Ornament } from '@/components/ui/Ornament';
import { TwoIntoOneGlyph } from '@/components/ui/SignatureSvg';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const metadata = {
  title: 'MagicWorks · Swapnil Ughade',
  description: 'MagicWorks IT Solutions Pvt Ltd. Founded 2009. AI-first digital marketing agency based in Pune. Five service pillars, three sibling brands.',
};

export default function MagicWorksSubpage() {
  return (
    <div className="venture-subpage">
      {/* HERO SECTION */}
      <header className="hero">
        <div className="container">
          <Breadcrumb
            parent={{ label: 'Ventures', href: '/ventures', icon: '⬡' }}
            current="MagicWorks"
            subtitle="AI Agency · Pune"
          />
          <div className="role-card">
            <div className="rc-role">Founder-Director · Since 2009</div>
            <h1 className="rc-name">Magicworks</h1>
            <p className="rc-legal">MagicWorks IT Solutions Pvt Ltd</p>
            <p className="rc-sector">
              AI-first digital marketing agency, Pune. Five service pillars, three sibling brands. Incorporated September 2012.
            </p>
          </div>
        </div>
      </header>

      {/* NARRATIVE SECTION */}
      <section className="section">
        <div className="section-inner">
          <p className="lead-p">
            Magicworks is the practice I&apos;ve been building for seventeen years. It started as a two-person digital marketing agency in Pune in 2009 and grew into an AI-first shop serving mid-market businesses across five countries.
          </p>

          <p className="p dropcap">
            When I founded Magicworks in 2009, the phrase &ldquo;digital marketing&rdquo; itself was contested in the Indian mid-market. Most conversations began with why, not how. The first several years were spent educating clients as much as executing for them. That was the training that mattered most. It forced me to think in first principles rather than in playbook, which is the habit that carried through every technology shift since.
          </p>

          <Ornament />

          <p className="p">
            By 2012 the company was incorporated as a private limited entity. Through the years that followed, the agency added service lines as our clients&apos; needs shifted: web development in 2020, AI Consultation in 2024, Marketplace &amp; Platform Consultation, and the Brand, Research &amp; Publishing arm most recently. Clients came from the UK, Norway, the UAE, and the US alongside the home market.
          </p>

          <p className="p">
            In June 2026 we launched the new site at magicworksitsolutions.com and made Next.js the default web stack for all new builds. That launch was less a rebrand than a formal marker of what the company had become in practice: an AI-first shop, not a digital marketing agency with an AI service.
          </p>

          <Ornament />

          <p className="p">
            <strong>The two advisory pillars are founder-led by design.</strong> AI Consultation (Pillar 03) and Marketplace &amp; Platform Consultation (Pillar 04) are both engagements I run personally, from the first call to the last review. That constraint is intentional. That work does not senior-associate well. It requires two decades of operator scars to run properly, which is why I am still in every engagement.
          </p>
        </div>
      </section>

      {/* FIVE SERVICE PILLARS SECTION */}
      <section className="section parchment">
        <div className="pillars-head">
          <h2 className="h3">Five service <em>pillars</em></h2>
          <p className="pillars-sub">Ordered by how the practice grew, not by revenue share.</p>
        </div>
        <div className="section-inner-wide">
          <div className="pillars-grid">
            <article className="pillar">
              <div className="pillar-num">Pillar · 01</div>
              <h3 className="pillar-name">Digital Marketing</h3>
              <p className="pillar-desc">
                The founding pillar. Full-service digital marketing for mid-market businesses. SEO, paid, content, analytics, integrated campaigns.
              </p>
              <a
                href="https://magicworksitsolutions.com/services/digital-marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="pillar-link"
              >
                Learn more ↗
              </a>
            </article>

            <article className="pillar">
              <div className="pillar-num">Pillar · 02</div>
              <h3 className="pillar-name">Web Development</h3>
              <p className="pillar-desc">
                Anchored in 2020. Next.js is the default stack for new builds since June 2026. Portals, platforms, and marketing sites.
              </p>
              <a
                href="https://magicworksitsolutions.com/services/web-development"
                target="_blank"
                rel="noopener noreferrer"
                className="pillar-link"
              >
                Learn more ↗
              </a>
            </article>

            <article className="pillar founder-led">
              <div className="pillar-num">Pillar · 03</div>
              <h3 className="pillar-name">AI Consultation</h3>
              <p className="pillar-desc">
                Anchored in 2024. Strategic input on AI adoption for marketing, operations, and product. Founder-led by design.
              </p>
              <span className="pillar-tag">Founder-led</span>
              <a
                href="https://magicworksitsolutions.com/services/ai-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="pillar-link"
              >
                Learn more ↗
              </a>
            </article>

            <article className="pillar founder-led">
              <div className="pillar-num">Pillar · 04</div>
              <h3 className="pillar-name">Marketplace &amp; Platform Consultation</h3>
              <p className="pillar-desc">
                Advisory for founders building portals and platforms. Category economics, discovery design, growth engines. Founder-led by design.
              </p>
              <span className="pillar-tag">Founder-led</span>
              <a
                href="https://magicworksitsolutions.com/services/platform-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="pillar-link"
              >
                Learn more ↗
              </a>
            </article>

            <article className="pillar">
              <div className="pillar-num">Pillar · 05</div>
              <h3 className="pillar-name">Brand, Research &amp; Publishing</h3>
              <p className="pillar-desc">
                The newest pillar. Deep research, brand strategy, and long-form publishing programs for teams that treat brand as compounding infrastructure.
              </p>
              <a
                href="https://magicworksitsolutions.com/services/brand-research-publishing"
                target="_blank"
                rel="noopener noreferrer"
                className="pillar-link"
              >
                Learn more ↗
              </a>
            </article>
          </div>
        </div>
      </section>


      {/* CTA ZONE */}
      <section className="cta-zone">
        <div className="cta-eye">See the work</div>
        <h2 className="cta-title">Visit <em>magicworksitsolutions.com</em></h2>
        <p className="cta-body">
          The Magicworks site is the operational home for the agency: services, case studies, team, and current engagements. For advisory work on the two founder-led pillars, the fastest route is a direct message.
        </p>
        <div className="cta-btns">
          <a href="https://magicworksitsolutions.com" className="btn" target="_blank" rel="noopener noreferrer">
            Visit Magicworks ↗
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

