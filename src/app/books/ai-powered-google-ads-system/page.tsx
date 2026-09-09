import Link from 'next/link';
import { SignatureSvg, FlourishSvg } from '@/components/ui/SignatureSvg';

export const metadata = {
  title: 'The AI-Powered Google Ads System · Swapnil Ughade',
  description: 'Frameworks, prompts, and weekly protocols from ₹70+ crore ($8M) in managed ad spend. A field-tested Google Ads system for 2026, by Swapnil Ughade.',
};

export default function BookTwoPage() {
  return (
    <div className="book-detail-view">
      {/* HERO SECTION */}
      <header className="hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/books">Books</Link> · Book Two
          </nav>
          <img
            src="/img/books/ai-powered-google-ads-system.jpg"
            alt="The AI-Powered Google Ads System — book cover"
            className="book-cover-hero"
          />
          <div className="title-block">
            <h1 className="h1-title">The <em>AI-Powered</em> Google Ads System</h1>
            <p className="h1-sub">Frameworks, Prompts &amp; Strategies from ₹70+ Crore ($8M) in Managed Ad Spend</p>
            <p className="by-line">by <Link href="/about">Swapnil Ughade</Link></p>
            <p className="meta-line">Published August 2026 · First Edition · MagicWorks IT Solutions</p>
          </div>
        </div>
      </header>

      {/* LEAD INTRO */}
      <section className="section">
        <div className="section-inner">
          <p className="lead-p">
            A field-tested Google Ads playbook drawn from managing ₹50–70 crore in cumulative ad spend across 50+ clients. The AI-Powered Google Ads System is not another certification course rehashing 2018 tactics. It is the frameworks, AI prompts, and weekly protocols MagicWorks runs on real accounts every Monday — twenty chapters built for one-chapter-a-week implementation, not passive reading.
          </p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section warm">
        <div className="section-inner">
          <h2 className="h3">Who this is <em>for</em></h2>
          <ul className="readers-list">
            <li>Marketers whose campaigns are wasting spend and need a diagnostic, not a pep talk</li>
            <li>Teams whose CPA has crept too high to scale profitably</li>
            <li>Advertisers new to Google Ads who want the 2026 playbook instead of the 2018 one</li>
            <li>E-commerce and multi-channel teams that need attribution across channels</li>
            <li>Anyone ready to put AI to work inside their campaign operations, not just around them</li>
          </ul>
        </div>
      </section>

      {/* WHAT MAKES IT DIFFERENT */}
      <section className="section parchment">
        <div className="section-inner">
          <h2 className="h3">What makes it <em>different</em></h2>
          <ul className="readers-list">
            <li>Modern approaches first — Smart Bidding, Performance Max, AI Max, and AI-augmented workflows, because that&apos;s what works in 2026, not 2015</li>
            <li>Real implementation — every framework applied across 50+ client accounts managing ₹2+ crore ($240,000) in monthly ad spend</li>
            <li>AI augmentation — how to use ChatGPT, Claude, and emerging AI agents to move faster without losing strategic control</li>
            <li>Systematic protocols — weekly routines, monthly reviews, and automation scripts that compound over time</li>
            <li>Future-proofing — how to adapt to AI Overviews, ads in AI Mode, voice search, and cookieless tracking</li>
          </ul>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="section">
        <div className="section-inner">
          <h2 className="h3">What&apos;s <em>inside</em></h2>
          <p className="toc-meta">Front matter — Reader&apos;s Quick Start Guide · Preface</p>

          <div className="toc-part">
            <div className="toc-part-head">
              <span className="toc-part-label">Part One · Foundation</span>
              <span className="toc-part-range">Chapters 01–03</span>
            </div>
            <p className="toc-part-desc">Why traditional training fails, and the modern campaign stack and account architecture that replace it.</p>
            <ul className="toc-compact">
              <li><span className="n">01</span>Why Traditional Google Ads Training Is Failing You</li>
              <li><span className="n">02</span>The Modern Google Ads Stack</li>
              <li><span className="n">03</span>Account Architecture That Scales</li>
            </ul>
          </div>

          <div className="toc-part">
            <div className="toc-part-head">
              <span className="toc-part-label">Part Two · Strategy</span>
              <span className="toc-part-range">Chapters 04–05</span>
            </div>
            <p className="toc-part-desc">AI-first keyword strategy and offer architecture that converts.</p>
            <ul className="toc-compact">
              <li><span className="n">04</span>The AI-First Keyword Strategy</li>
              <li><span className="n">05</span>Offer Architecture &amp; Landing Page Alignment</li>
            </ul>
          </div>

          <div className="toc-part">
            <div className="toc-part-head">
              <span className="toc-part-label">Part Three · Campaign Execution</span>
              <span className="toc-part-range">Chapters 06–09</span>
            </div>
            <p className="toc-part-desc">Deep dives into Search, Performance Max, Shopping, Display, Video, and Demand Gen campaigns.</p>
            <ul className="toc-compact">
              <li><span className="n">06</span>Search Campaigns Mastery</li>
              <li><span className="n">07</span>Performance Max Decoded</li>
              <li><span className="n">08</span>Shopping &amp; E-Commerce Campaigns</li>
              <li><span className="n">09</span>Display, Video &amp; Demand Gen Campaigns</li>
            </ul>
          </div>

          <div className="toc-part">
            <div className="toc-part-head">
              <span className="toc-part-label">Part Four · The AI Advantage</span>
              <span className="toc-part-range">Chapters 10–12</span>
            </div>
            <p className="toc-part-desc">The AI-augmented workflows, creative generation, and automation scripts that give an unfair advantage.</p>
            <ul className="toc-compact">
              <li><span className="n">10</span>AI-Augmented Campaign Analysis</li>
              <li><span className="n">11</span>AI-Powered Creative &amp; Testing</li>
              <li><span className="n">12</span>Advanced Automation &amp; Scripts</li>
            </ul>
          </div>

          <div className="toc-part">
            <div className="toc-part-head">
              <span className="toc-part-label">Part Five · Optimization &amp; Scale</span>
              <span className="toc-part-range">Chapters 13–15</span>
            </div>
            <p className="toc-part-desc">The Monday Optimization Protocol, troubleshooting frameworks, and attribution measurement.</p>
            <ul className="toc-compact">
              <li><span className="n">13</span>The Weekly Optimization Protocol</li>
              <li><span className="n">14</span>Troubleshooting Common Problems</li>
              <li><span className="n">15</span>Attribution &amp; Measurement in 2026</li>
            </ul>
          </div>

          <div className="toc-part">
            <div className="toc-part-head">
              <span className="toc-part-label">Part Six · Advanced Strategies</span>
              <span className="toc-part-range">Chapters 16–18</span>
            </div>
            <p className="toc-part-desc">Multi-channel integration, budget optimization, and future-proofing for AI search.</p>
            <ul className="toc-compact">
              <li><span className="n">16</span>Multi-Channel Integration</li>
              <li><span className="n">17</span>Budget Optimization Across Campaigns</li>
              <li><span className="n">18</span>The Future of Google Ads</li>
            </ul>
          </div>

          <div className="toc-part">
            <div className="toc-part-head">
              <span className="toc-part-label">Bonus</span>
              <span className="toc-part-range">Chapters 19–20</span>
            </div>
            <p className="toc-part-desc">The two most significant AI developments reshaping Google Ads management right now.</p>
            <ul className="toc-compact">
              <li><span className="n">19</span>AI Agents for Google Ads — Cowork Preview</li>
              <li><span className="n">20</span>Agentic Google Ads: Claude With Live Account Access</li>
            </ul>
          </div>

          <p className="toc-close">Closing — Acknowledgments · Appendix A: Templates &amp; Checklists</p>
        </div>
      </section>

      {/* NOTE FROM AUTHOR */}
      <section className="section warm">
        <div className="section-inner">
          <h2 className="h3">A note from the <em>author</em></h2>
          <div className="foreword-quote">
            Most advertisers are still running 2018 playbooks. The gap between what is taught and what works is exactly where your advantage lives.
          </div>
          <div className="foreword-att">— Swapnil Ughade, from the Preface</div>
        </div>
      </section>

      {/* ON THE EXAMPLES */}
      <section className="section">
        <div className="section-inner">
          <h2 className="h3">On the <em>examples</em></h2>
          <p className="p">
            Every framework in this book is illustrated with real client transformations run through MagicWorks — a construction equipment account, a multi-location rebuild, a search campaign overhaul — anonymized, but drawn from live accounts managing real budgets, not hypotheticals.
          </p>
        </div>
      </section>

      {/* SAMPLE EXCERPT */}
      <section className="section parchment">
        <div className="section-inner">
          <h2 className="h3">Sample <em>excerpt</em></h2>
          <div className="content-block">
            <div className="lbl">Excerpt · From the Preface</div>
            <p className="p">
              I opened by talking about failure: the 3D animation business, the ₹25 lakh lost, the closed doors. Let me close by saying that failure was the best thing that happened to me. Had that business succeeded moderately, I would probably still be running it, making a decent living and never discovering the work that actually excites me. The failure forced the pivot. The financial pressure forced the speed of learning.
            </p>
            <p className="p">
              If you are reading this because your campaigns are not working, or because you are frustrated with outdated training, or because you feel you are falling behind, that frustration is useful. Most advertisers are still running 2018 playbooks. The gap between what is taught and what works is exactly where your advantage lives.
            </p>
          </div>
        </div>
      </section>

      {/* BUY ZONE */}
      <section className="buy-zone">
        <div className="buy-eye">First edition</div>
        <h2 className="buy-title">Get the <em>book</em></h2>
        <p className="buy-body">Published August 2026 by MagicWorks IT Solutions. Get in touch for early access and licensing.</p>
        <div className="buy-cta">
          <Link href="/contact" className="btn">
            Get in touch
          </Link>
        </div>
        <div className="buy-note">Published August 2026 · First Edition</div>
      </section>

      {/* SIGNATURE ZONE */}
      <section className="sig-zone">
        <div className="sig-pre">With thanks for reading,</div>
        <div className="sig-mark">
          <SignatureSvg />
        </div>
        <div className="sig-meta">Swapnil Ughade · Pune, India</div>
      </section>

      <div className="flourish">
        <FlourishSvg />
      </div>
    </div>
  );
}

