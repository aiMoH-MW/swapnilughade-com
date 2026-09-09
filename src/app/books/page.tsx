import Link from 'next/link';
import { FlourishSvg, TwoIntoOneGlyph } from '@/components/ui/SignatureSvg';

export const metadata = {
  title: 'Books · Swapnil Ughade · Published Works',
  description: 'Two books, both published in 2026: Two Algorithms, One Strategy and The AI-Powered Google Ads System.',
};

export default function BooksPage() {
  return (
    <div>
      {/* HERO */}
      <header className="hero">
        <div className="container">
          <div className="hero-eyebrow">Two books · Published 2026</div>
          <h1 className="hero-title">The <em>books</em></h1>
          <p className="hero-lead">
            Two books, both published in 2026, drawn from eighteen years of running MagicWorks. Different subjects. One argument: senior clarity applied to a technology shift as it happens.
          </p>
        </div>
      </header>

      {/* BOOKS SECTION */}
      <section className="books-section">
        <div className="container">
          <div className="books-grid">
            {/* BOOK 1 */}
            <article className="book-card">
              <div className="book-plate-wrap">
                <img
                  src="/img/books/two-algorithms-one-strategy.jpg"
                  alt="Two Algorithms, One Strategy cover"
                  className="book-plate-img"
                />
              </div>
              <div className="book-info">
                <h2 className="bi-title">Two Algorithms, <em>One</em> Strategy</h2>
                <p className="bi-sub">SEO Meets AI-Powered Search</p>
                <div className="bi-meta">April 2026 · Paperback + Kindle · ISBN 934966979X</div>
                <p className="bi-blurb">
                  A strategic execution manual for founders, marketers, and digital teams navigating the shift from classic search engines to LLM-driven discovery. Drawn from the SEO practice at MagicWorks. Foreword by Mohan Chute. Illustrations by Vinay Khamkar.
                </p>
                <div className="bi-cta">
                  <Link href="/books/two-algorithms-one-strategy" className="btn primary">
                    Read more →
                  </Link>
                  <a
                    href="https://www.amazon.com/dp/934966979X"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn ghost"
                  >
                    Buy on Amazon ↗
                  </a>
                </div>
              </div>
            </article>

            {/* BOOK 2 */}
            <article className="book-card">
              <div className="book-plate-wrap">
                <img
                  src="/img/books/ai-powered-google-ads-system.jpg"
                  alt="The AI-Powered Google Ads System cover"
                  className="book-plate-img"
                />
              </div>
              <div className="book-info">
                <h2 className="bi-title">The AI-Powered <em>Google Ads</em> System</h2>
                <p className="bi-sub">Frameworks, Prompts &amp; Strategies from ₹70+ Crore ($8M)</p>
                <div className="bi-meta">September 2026 · Paperback + Kindle</div>
                <p className="bi-blurb">
                  A working system for running Google Ads at scale in the AI era, drawn from over ₹70 crore in managed ad spend. Co-written with Mohan Chute. Not a book of tips; a book of frameworks and prompts a team can put on the desk on Monday.
                </p>
                <div className="bi-cta">
                  <Link href="/books/ai-powered-google-ads-system" className="btn primary">
                    Read more →
                  </Link>
                  <a
                    href="https://www.amazon.in/dp/B0HJ6C52V6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn ghost"
                  >
                    Buy on Amazon ↗
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* BYLINE SECTION */}
      <section className="byline-zone">
        <div className="container">
          <div className="byline">
            <div className="byline-photo">
              <TwoIntoOneGlyph className="w-10 h-10" />
            </div>
            <div>
              <div className="byline-name">Swapnil Ughade</div>
              <div className="byline-bio">
                Founder-Director of MagicWorks and Ideovate. Based in Pune. Writing on portals, platforms, and the AI era of marketing.
              </div>
              <Link href="/about" className="byline-link">
                About Swapnil →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FLOURISH */}
      <div className="flourish" style={{ padding: '16px 0 48px', background: 'var(--bone)', margin: 0 }}>
        <FlourishSvg />
      </div>
    </div>
  );
}
