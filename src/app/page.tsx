import Link from 'next/link';
import { TwoIntoOneGlyph } from '@/components/ui/SignatureSvg';

export default function HomePage() {
  return (
    <div>
      {/* HERO (BONE) */}
      <header className="hero">
        <div className="container">
          <h1 className="hero-title">Building AI-first <em>portals</em> and platforms.</h1>
          <p className="hero-lead">Founder-Director of MagicWorks and Ideovate. Investor in Dnyanal Educon. Consultant to Trexova. Author of two books on the AI era of marketing.</p>
          <div className="hero-cta">
            <Link href="/books" className="btn primary">
              Read the books <span className="arrow">→</span>
            </Link>
            <Link href="#the-letter" className="btn ghost">
              Subscribe to the letter
            </Link>
          </div>
        </div>
      </header>

      {/* SEALS BAND (INDIGO) */}
      <section className="seals-band">
        <div className="container">
          <div className="seals-grid">
            <div className="seal">
              <div className="seal-num">18+</div>
              <div className="seal-lbl">Years in<br />practice</div>
            </div>
            <div className="seal">
              <div className="seal-num">4</div>
              <div className="seal-lbl">Companies</div>
            </div>
            <div className="seal">
              <div className="seal-num">₹70cr</div>
              <div className="seal-lbl">Ad spend<br />managed</div>
            </div>
            <div className="seal">
              <div className="seal-num">50+</div>
              <div className="seal-lbl">Client<br />accounts</div>
            </div>
            <div className="seal">
              <div className="seal-num">2</div>
              <div className="seal-lbl">Books<br />published</div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKS (BONE) */}
      <section className="section books">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">The <em>books</em></h2>
            <p className="section-sub">Two books, both published in 2026. Drawn from eighteen years of running MagicWorks.</p>
          </div>

          <div className="books-grid">
            <article className="book-card">
              <div className="book-cover-wrap">
                <img
                  src="/img/books/two-algorithms-one-strategy.jpg"
                  alt="Two Algorithms, One Strategy cover"
                  className="book-cover-img"
                />
              </div>
              <div className="book-info">
                <h3 className="book-title">Two Algorithms, One Strategy</h3>
                <p className="book-sub">SEO Meets AI-Powered Search</p>
                <div className="book-meta">April 2026 · Paperback + Kindle</div>
                <p className="book-blurb">A strategic execution manual for founders, marketers, and digital teams navigating the shift from classic search engines to LLM-driven discovery.</p>
                <Link href="/books/two-algorithms-one-strategy" className="book-link">Read more →</Link>
              </div>
            </article>

            <article className="book-card">
              <div className="book-cover-wrap">
                <img
                  src="/img/books/ai-powered-google-ads-system.jpg"
                  alt="The AI-Powered Google Ads System cover"
                  className="book-cover-img"
                />
              </div>
              <div className="book-info">
                <h3 className="book-title">The AI-Powered Google Ads System</h3>
                <p className="book-sub">Frameworks, Prompts &amp; Strategies from ₹70+ Crore ($8M)</p>
                <div className="book-meta">September 2026 · Paperback + Kindle</div>
                <p className="book-blurb">A working system for running Google Ads at scale in the AI era. Co-written with Mohan Chute.</p>
                <Link href="/books/ai-powered-google-ads-system" className="book-link">Read more →</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* VENTURES (PARCHMENT) */}
      <section className="section ventures">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">The <em>ventures</em></h2>
            <p className="section-sub">Four ventures, three roles. Two I founded, one I invested in, one I consult for.</p>
          </div>

          <div className="ventures-grid">
            <article className="venture">
              <div className="venture-role">Founder-Director · 2009</div>
              <h3 className="venture-name">MagicWorks</h3>
              <p className="venture-sector">AI-first digital marketing agency, Pune</p>
              <p className="venture-desc">Five service pillars, three sibling brands in the MagicWorks Group. Both advisory pillars founder-led.</p>
              <Link href="/ventures/magicworks" className="venture-link">Read the venture note →</Link>
            </article>

            <article className="venture gold">
              <div className="venture-role">Founder-Director · 2018</div>
              <h3 className="venture-name">Ideovate</h3>
              <p className="venture-sector">Edtech, distance and online MBA discovery, simplidistance.com</p>
              <p className="venture-desc">Built to prove the portal thesis. Over 50,000 qualified leads in sixteen months.</p>
              <Link href="/ventures/ideovate-research" className="venture-link">Read the venture note →</Link>
            </article>

            <article className="venture ink">
              <div className="venture-role">Investor · 2023</div>
              <h3 className="venture-name">Dnyanal Educon</h3>
              <p className="venture-sector">Edtech, regular MBA and design institute discovery, collegencourses.com</p>
              <p className="venture-desc">Investor-level involvement in a serious team building for a high-trust discovery category across India.</p>
              <Link href="/ventures/dnyanal-educon" className="venture-link">Read the venture note →</Link>
            </article>

            <article className="venture pearl">
              <div className="venture-role">Consultant · 2021</div>
              <h3 className="venture-name">Trexova</h3>
              <p className="venture-sector">Wellness, trexova.com</p>
              <p className="venture-desc">Digital marketing consulting engagement bringing the AI-first framework from MagicWorks into the wellness sector.</p>
              <Link href="/ventures/trexova" className="venture-link">Read the venture note →</Link>
            </article>
          </div>
        </div>
      </section>

      {/* WRITING (BONE) */}
      <section className="section writing">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Recent <em>writing</em></h2>
            <p className="section-sub">Long-form notes on portals, platforms, and the AI era of marketing. Every second Sunday.</p>
          </div>

          <div className="writing-grid">
            <article className="article-card">
              <div className="article-eyebrow">Operating Thesis</div>
              <h3 className="article-title">
                <Link href="/writing/two-into-one-the-operating-thesis">
                  Two into one: the <em>operating</em> thesis
                </Link>
              </h3>
              <p className="article-blurb">Markets treat as separate things that need to be integrated. The pattern, the four pairs, and why the phrase survives.</p>
              <div className="article-meta"><span>8 Sept 2026</span><span>(3 min read)</span></div>
              <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                <Link href="/writing/two-into-one-the-operating-thesis" className="article-link">
                  Read more →
                </Link>
              </div>
            </article>

            <article className="article-card">
              <div className="article-eyebrow">Portals &amp; Platforms</div>
              <h3 className="article-title">
                <Link href="/writing/the-portal-thesis">
                  The <em>portal</em> thesis
                </Link>
              </h3>
              <p className="article-blurb">A well-built portal in a high-trust category creates disproportionate value. What each of those words means at practice level.</p>
              <div className="article-meta"><span>1 Sept 2026</span><span>(4 min read)</span></div>
              <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                <Link href="/writing/the-portal-thesis" className="article-link">
                  Read more →
                </Link>
              </div>
            </article>

            <article className="article-card">
              <div className="article-eyebrow">Advisory</div>
              <h3 className="article-title">
                <Link href="/writing/why-marketplace-consultation-is-founder-led">
                  Why marketplace consultation is <em>founder-led</em>
                </Link>
              </h3>
              <p className="article-blurb">Advisory work in some categories does not senior-associate. The design case for the founder-led constraint.</p>
              <div className="article-meta"><span>25 Aug 2026</span><span>(4 min read)</span></div>
              <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                <Link href="/writing/why-marketplace-consultation-is-founder-led" className="article-link">
                  Read more →
                </Link>
              </div>
            </article>
          </div>

          <div className="section-cta-wrap">
            <Link href="/writing" className="section-cta">All writing →</Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER BAND (INDIGO) */}
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
          <div className="newsletter-note">No spam. Unsubscribe in one click.</div>
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
