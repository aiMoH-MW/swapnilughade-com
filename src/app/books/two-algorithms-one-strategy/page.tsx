import Link from 'next/link';
import { SignatureSvg, FlourishSvg } from '@/components/ui/SignatureSvg';

export const metadata = {
  title: 'Two Algorithms, One Strategy · Swapnil Ughade',
  description: 'How SEO and AI-powered search work together. A strategic execution manual for founders, marketers, and digital teams. By Swapnil Ughade.',
};

export default function BookOnePage() {
  return (
    <div className="book-detail-view">
      {/* HERO SECTION */}
      <header className="hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/books">Books</Link> · Book One
          </nav>
          <img
            src="/img/books/two-algorithms-one-strategy.jpg"
            alt="Two Algorithms, One Strategy — book cover"
            className="book-cover-hero"
          />
          <div className="title-block">
            <h1 className="h1-title">Two Algorithms, <em>One</em> Strategy</h1>
            <p className="h1-sub">SEO Meets AI-Powered Search</p>
            <p className="by-line">by <Link href="/about">Swapnil Ughade</Link></p>
            <p className="meta-line">Published April 2026 · Paperback + Kindle · ISBN 934966979X</p>
          </div>
        </div>
      </header>

      {/* LEAD INTRO */}
      <section className="section">
        <div className="section-inner">
          <p className="lead-p">
            A strategic execution manual for founders, marketers, and digital teams navigating the shift from classic search engines to LLM-driven discovery. Two Algorithms, One Strategy is not a theoretical book about the future of search. It is a working framework for the present, drawn from the SEO practice at Magicworks and structured for teams that have to make decisions on Monday.
          </p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section warm">
        <div className="section-inner">
          <h2 className="h3">Who this is <em>for</em></h2>
          <ul className="readers-list">
            <li>Founders whose growth depends on being discovered through search</li>
            <li>Marketing leaders at mid-market companies making the AI transition</li>
            <li>SEO practitioners deciding where classical expertise still holds and where it needs to evolve</li>
            <li>Teams building portals and platforms where discovery is the growth engine</li>
          </ul>
        </div>
      </section>

      {/* WHAT YOU'LL ACHIEVE */}
      <section className="section parchment">
        <div className="section-inner">
          <h2 className="h3">What you&apos;ll <em>achieve</em></h2>
          <ul className="readers-list">
            <li>Cut through Google&apos;s complexity and focus on the 10–15 factors that actually drive rankings</li>
            <li>Future-proof your content for AI-powered search engines that reward credibility and citations over keyword density</li>
            <li>Build a sustainable competitive advantage that compounds over time</li>
            <li>Deliver measurable results within 30–90 days, not 6–12 months</li>
            <li>Create systems your team can execute consistently, without constant supervision</li>
          </ul>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="section">
        <div className="section-inner">
          <h2 className="h3">What&apos;s <em>inside</em></h2>
          <p className="toc-meta">Front matter — Preface · Acknowledgements</p>
          <ul className="toc-list">
            <li className="toc-item">
              <span className="toc-num">01</span>
              <div>
                <div className="toc-title">The 10 Primary Ranking <em>Factors</em></div>
                <div className="toc-desc">The highest-leverage signals to audit first — each with a priority rating and an expected impact timeline.</div>
              </div>
            </li>
            <li className="toc-item">
              <span className="toc-num">02</span>
              <div>
                <div className="toc-title">Domain-Level <em>Signals</em></div>
                <div className="toc-desc">The foundational trust and geo-targeting signals that shape how everything else you build gets treated.</div>
              </div>
            </li>
            <li className="toc-item">
              <span className="toc-num">03</span>
              <div>
                <div className="toc-title">Technical SEO <em>Fundamentals</em></div>
                <div className="toc-desc">Crawlability, indexation, Core Web Vitals — the technical floor every page has to clear before anything else matters.</div>
              </div>
            </li>
            <li className="toc-item">
              <span className="toc-num">04</span>
              <div>
                <div className="toc-title">Backlink Strategy &amp; Authority <em>Building</em></div>
                <div className="toc-desc">Earning links that move rankings, disavowing the ones that don&apos;t, and telling the two apart.</div>
              </div>
            </li>
            <li className="toc-item">
              <span className="toc-num">05</span>
              <div>
                <div className="toc-title">The 15 LLM Ranking Factors <em>(GEO)</em></div>
                <div className="toc-desc">How ChatGPT, Perplexity, Claude, and Google AI Overviews decide which sources are worth citing.</div>
              </div>
            </li>
            <li className="toc-item">
              <span className="toc-num">06</span>
              <div>
                <div className="toc-title">Content Strategy for Dual <em>Search</em></div>
                <div className="toc-desc">Writing once, for the blue links and the AI answer box, without compromising either.</div>
              </div>
            </li>
            <li className="toc-item">
              <span className="toc-num">07</span>
              <div>
                <div className="toc-title">User Experience &amp; Behavior <em>Signals</em></div>
                <div className="toc-desc">The engagement signals that separate content that ranks from content that actually converts.</div>
              </div>
            </li>
            <li className="toc-item">
              <span className="toc-num">08</span>
              <div>
                <div className="toc-title">The 30-Day Technical Sprint &amp; 90-Day <em>Roadmap</em></div>
                <div className="toc-desc">A week-by-week execution plan, from first audit to compounding, sustainable growth.</div>
              </div>
            </li>
          </ul>
          <p className="toc-close">Closing — Conclusion · About the Author · References</p>
        </div>
      </section>

      {/* FOREWORD */}
      <section className="section warm">
        <div className="section-inner">
          <h2 className="h3">Foreword by <em>Mohan Chute</em></h2>
          <div className="foreword-quote">
            A working framework for a moment when most people are still writing think pieces about the future of search.
          </div>
          <div className="foreword-att">— Mohan Chute, foreword</div>
        </div>
      </section>

      {/* ON THE ILLUSTRATIONS */}
      <section className="section">
        <div className="section-inner">
          <h2 className="h3">On the <em>illustrations</em></h2>
          <p className="p">
            The book carries hand-drawn illustrations by Vinay Khamkar. They sit alongside the framework diagrams as visual arguments in the text. Not decoration; part of the argument.
          </p>
        </div>
      </section>

      {/* BOOK EXCERPT */}
      <section className="section parchment">
        <div className="section-inner">
          <h2 className="h3">Book <em>excerpt</em></h2>
          <div className="content-block">
            <div className="lbl">Excerpt · From the Preface</div>
            <p className="p">
              Digital marketing has entered its most transformative era. For two decades, SEO professionals mastered one algorithm—Google&apos;s. We learned to optimize for crawlers, build backlinks, improve page speed, and craft content that satisfied both users and ranking systems. The rules were complex but ultimately knowable.
            </p>
            <p className="p">
              Then, in November 2022, everything shifted. ChatGPT&apos;s launch marked the beginning of a new search paradigm. Within months, Perplexity, Claude, Google&apos;s AI Overviews, and dozens of other large language models began answering questions directly—not with blue links, but with synthesized responses drawn from multiple sources. Traditional search didn&apos;t disappear, but it now shares the stage with generative AI search, and the two operate on fundamentally different principles.
            </p>
            <p className="p">
              Today&apos;s digital marketers face a dual challenge: optimize for Google&apos;s 200+ ranking signals while simultaneously ensuring visibility in AI-powered answer engines that prioritize citations, credibility, and consensus over keyword density and backlink counts. This book exists to solve that challenge.
            </p>
          </div>
        </div>
      </section>

      {/* BUY ZONE */}
      <section className="buy-zone">
        <div className="buy-eye">Available now</div>
        <h2 className="buy-title">Buy the <em>book</em></h2>
        <p className="buy-body">Published April 2026. Paperback and Kindle editions available on Amazon India and Amazon US.</p>
        <div className="buy-cta">
          <a href="https://www.amazon.in/dp/934966979X" className="btn" target="_blank" rel="noopener noreferrer">
            Paperback on Amazon
          </a>
          <a href="https://www.amazon.in/dp/B0GLQK1N44" className="btn ghost" target="_blank" rel="noopener noreferrer">
            Kindle on Amazon
          </a>
        </div>
        <div className="buy-note">Published April 2026 · ISBN 934966979X</div>
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
