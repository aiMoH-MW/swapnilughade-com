import Link from 'next/link';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const metadata = {
  title: 'Ventures · Swapnil Ughade · Operating Portfolio',
  description: 'Four ventures, three roles. Two I founded, one I invested in, one I consult for. Each note explains the role, the sector, the story, and what to visit if you want to see the work.',
  alternates: {
    canonical: 'https://swapnilughade.com/ventures',
  },
};

export default function VenturesPage() {
  return (
    <div>
      {/* HERO */}
      <header className="hero">
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Ventures' }]} />
          <div className="hero-eyebrow">Four ventures · Three roles</div>
          <h1 className="hero-title">The <em>ventures</em></h1>
          <p className="hero-lead">
            Two I founded, one I invested in, one I consult for. Each note explains the role, the sector, the story, and what to visit if you want to see the work.
          </p>
        </div>
      </header>

      {/* INTRO SECTION */}
      <section className="intro">
        <div className="container">
          <div className="ventures-intro-layout">
            <div className="ventures-intro-media">
              <img
                src="/img/ventures-thesis-art.png"
                alt="Four angles operating thesis: two into one"
                className="ventures-intro-img"
                width={677}
                height={1019}
              />
            </div>
            <div className="ventures-intro-content">
              <p className="intro-p">
                Founder, operator, investor, consultant. These are not four separate careers; they are one practice viewed from four angles. The through-line across all four is the same operating thesis: two into one. Human strategy into machine acceleration. Traditional search into AI-powered search. Execution into advisory. Services into products.
              </p>
              <p className="intro-p">
                Both ventures I founded stand on their own. My investor position and consulting engagement are independent commitments to companies I believe in. Every venture below is a separate business with its own team, its own market, and its own site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VENTURES IN DETAIL (PARCHMENT ZONE) */}
      <section className="ventures-zone" style={{ paddingBottom: '48px' }}>
        <div className="container">
          <div className="ventures-head">
            <h2 className="ventures-title">Four <em>ventures</em>, in detail</h2>
            <p className="ventures-sub">Ordered by role, not by size or age.</p>
          </div>

          <div className="ventures-grid">
            {/* 1. MAGICWORKS */}
            <article className="venture">
              <div className="v-role">Founder-Director · Since 2009</div>
              <h3 className="v-name">MagicWorks</h3>
              <p className="v-sector">AI-first digital marketing agency · Pune</p>
              <p className="v-desc">
                Five service pillars, three sibling brands in the MagicWorks Group. Both advisory pillars, AI Consultation and Marketplace &amp; Platform Consultation, are founder-led by design.
              </p>
              <div className="v-metrics">
                <div className="v-metric">
                  <div className="v-metric-n">18 yrs</div>
                  <div className="v-metric-l">In practice</div>
                </div>
                <div className="v-metric">
                  <div className="v-metric-n">5</div>
                  <div className="v-metric-l">Countries served</div>
                </div>
                <div className="v-metric">
                  <div className="v-metric-n">3</div>
                  <div className="v-metric-l">Sibling brands</div>
                </div>
              </div>
              <div className="v-cta">
                <Link href="/ventures/magicworks" className="v-link">Read the venture note →</Link>
                <a href="https://magicworksitsolutions.com" target="_blank" rel="noopener noreferrer" className="v-external">Visit site ↗</a>
              </div>
            </article>

            {/* 2. IDEOVATE */}
            <article className="venture gold">
              <div className="v-role">Founder-Director · Since 2018</div>
              <h3 className="v-name">Ideovate</h3>
              <p className="v-sector">Edtech · Distance and online MBA discovery · simplidistance.com</p>
              <p className="v-desc">
                Built to prove the portal thesis in a high-trust category. simplidistance.com sits at the intersection of intent, information, and a fifteen-year professional decision.
              </p>
              <div className="v-metrics">
                <div className="v-metric">
                  <div className="v-metric-n">50k+</div>
                  <div className="v-metric-l">Qualified leads</div>
                </div>
                <div className="v-metric">
                  <div className="v-metric-n">4x</div>
                  <div className="v-metric-l">YoY growth</div>
                </div>
                <div className="v-metric">
                  <div className="v-metric-n">30-40%</div>
                  <div className="v-metric-l">Below benchmark CPL</div>
                </div>
              </div>
              <div className="v-cta">
                <Link href="/ventures/ideovate-research" className="v-link">Read the venture note →</Link>
                <a href="https://simplidistance.com" target="_blank" rel="noopener noreferrer" className="v-external">Visit site ↗</a>
              </div>
            </article>

            {/* 3. DNYANAL EDUCON */}
            <article className="venture ink">
              <div className="v-role">Investor · Since 2023</div>
              <h3 className="v-name">Dnyanal Educon</h3>
              <p className="v-sector">Edtech · Regular MBA and design institute discovery · collegencourses.com</p>
              <p className="v-desc">
                Investor-level involvement in a serious team building for a high-trust discovery category across India. Independent business with its own operating team; my role is capital and periodic strategic input, not day-to-day operations.
              </p>
              <div className="v-cta">
                <Link href="/ventures/dnyanal-educon" className="v-link">Read the venture note →</Link>
                <a href="https://collegencourses.com" target="_blank" rel="noopener noreferrer" className="v-external">Visit site ↗</a>
              </div>
            </article>

            {/* 4. TREXOVA */}
            <article className="venture pearl">
              <div className="v-role">Consultant · Since 2021</div>
              <h3 className="v-name">Trexova</h3>
              <p className="v-sector">Wellness · trexova.com</p>
              <p className="v-desc">
                Digital marketing consulting engagement bringing the AI-first framework from MagicWorks into the wellness sector. Strategic input on positioning, digital growth, and category-appropriate marketing systems.
              </p>
              <div className="v-cta">
                <Link href="/ventures/trexova" className="v-link">Read the venture note →</Link>
                <a href="https://trexova.com" target="_blank" rel="noopener noreferrer" className="v-external">Visit site ↗</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SIBLINGS GROUP SECTION */}
      <section className="section warm" style={{ borderTop: '1px solid var(--line-soft)', paddingTop: '40px', paddingBottom: '56px' }}>
        <div className="siblings-head" style={{ textAlign: 'center', marginBottom: '28px' }}>
          <h2 className="h3">The MagicWorks <em>Group</em></h2>
          <p className="pillars-sub" style={{ color: 'var(--ink-mute)' }}>
            Three sibling brands operating inside the group.
          </p>
        </div>
        <div className="section-inner-wide">
          <div className="siblings-grid">
            <article className="sibling">
              <div className="sibling-eye">Sibling · Hosting</div>
              <h3 className="sibling-name">
                <a
                  href="https://magicworkshost.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  MagicWorks Host
                </a>
              </h3>
              <p className="sibling-desc">
                Managed hosting infrastructure serving MagicWorks client sites and independent customers on magicworkshost.com.
              </p>
              <a
                href="https://magicworkshost.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="pillar-link"
              >
                Visit magicworkshost.com ↗
              </a>
            </article>

            <article className="sibling">
              <div className="sibling-eye">Sibling · AI</div>
              <h3 className="sibling-name">
                <a
                  href="https://www.magicflowai.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  MagicFlow AI
                </a>
              </h3>
              <p className="sibling-desc">
                Multi-tenant AI workflow and chatbot automation SaaS product built out of the agency&apos;s own operational needs (magicflowai.io).
              </p>
              <a
                href="https://www.magicflowai.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="pillar-link"
              >
                Visit magicflowai.io ↗
              </a>
            </article>

            <article className="sibling">
              <div className="sibling-eye">Sibling · Data</div>
              <h3 className="sibling-name">
                <a
                  href="https://www.magicpipeline.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  Magic Pipeline
                </a>
              </h3>
              <p className="sibling-desc">
                Data pipeline and multi-tenant outreach CRM integration tooling for marketing and product teams (magicpipeline.io).
              </p>
              <a
                href="https://www.magicpipeline.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="pillar-link"
              >
                Visit magicpipeline.io ↗
              </a>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
