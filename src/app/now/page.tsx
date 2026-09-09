import Link from 'next/link';

export const metadata = {
  title: 'Now · Swapnil Ughade',
  description: 'Current focus, projects in flight, and reading list. Updated monthly from Pune, India.',
};

export default function NowPage() {
  const currentMonth = 'September 2026';

  return (
    <div className="section now-page">
      <div className="container">
        <div className="section-head">
          <div className="hero-eyebrow">Monthly Cadence</div>
          <h1 className="section-title">
            What I&apos;m Doing <em>Now</em>
          </h1>
          <p className="section-sub">
            Current focus, active advisory engagements, reading list, and incubation projects. Updated monthly from Pune.
          </p>
        </div>

        <div className="now-grid">
          {/* CARD 1: WORKING ON */}
          <article className="now-card">
            <div>
              <div className="now-card-eyebrow">01 · Focus &amp; Practice</div>
              <h2 className="now-card-title">
                What I&apos;m <em>Working On</em>
              </h2>
              <ul className="now-card-list">
                <li>
                  <strong>MagicWorks Advisory (Pillars 03 &amp; 04):</strong> Actively advising enterprise platforms on LLM search readiness and marketplace unit economics.
                </li>
                <li>
                  <strong>Book Launch Rollout:</strong> Distributing <em>Two Algorithms, One Strategy</em> to international marketing leaders and hosting private briefings.
                </li>
                <li>
                  <strong>Ideovate / simplidistance.com:</strong> Expanding program taxonomy for 2026/2027 distance MBA admissions cycles.
                </li>
              </ul>
            </div>
            <div className="now-card-footer">
              <span>Updated {currentMonth}</span>
              <span>Pune, India</span>
            </div>
          </article>

          {/* CARD 2: READING */}
          <article className="now-card">
            <div>
              <div className="now-card-eyebrow">02 · Inputs &amp; Research</div>
              <h2 className="now-card-title">
                What I&apos;m <em>Reading</em>
              </h2>
              <ul className="now-card-list">
                <li>
                  <em>The Structure of Scientific Revolutions</em> by Thomas S. Kuhn (re-reading through the lens of generative AI paradigms).
                </li>
                <li>
                  Technical documentation on agentic search pipelines and Retrieval-Augmented Generation evaluation frameworks.
                </li>
                <li>
                  Research papers on high-trust consumer decision velocity in digital health and higher education.
                </li>
              </ul>
            </div>
            <div className="now-card-footer">
              <span>Reading List</span>
              <span>3 Topics In Flight</span>
            </div>
          </article>

          {/* CARD 3: BUILDING */}
          <article className="now-card">
            <div>
              <div className="now-card-eyebrow">03 · Labs &amp; Ventures</div>
              <h2 className="now-card-title">
                What I&apos;m <em>Building</em>
              </h2>
              <p className="now-card-text">
                Incubating internal tools at MagicWorks Group: refining <a href="https://www.magicflowai.io/" target="_blank" rel="noopener noreferrer" className="now-link"><strong>MagicFlow AI</strong></a> for autonomous campaign negative-keyword gating and testing new Next.js programmatic routing modules for high-trust education portals.
              </p>
            </div>
            <div className="now-card-footer">
              <span>MagicWorks Labs</span>
              <span>Internal Tools</span>
            </div>
          </article>
        </div>

        {/* BOTTOM NAV / LINK */}
        <div className="now-bottom-action">
          <Link href="/writing" className="now-archive-link">
            Explore recent writings →
          </Link>
        </div>
      </div>
    </div>
  );
}
