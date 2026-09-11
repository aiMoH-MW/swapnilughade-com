import Link from 'next/link';
import { FlourishSvg, PractitionerSeal } from '@/components/ui/SignatureSvg';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const metadata = {
  title: 'About · Swapnil Ughade · Founder-author, MagicWorks',
  description: 'Eighteen years building MagicWorks in Pune. Founder of Ideovate. Author of two books on the AI era of marketing.',
  alternates: {
    canonical: 'https://swapnilughade.com/about',
  },
};

export default function AboutPage() {
  return (
    <div>
      <header className="masthead">
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
          <h1 className="masthead-wordmark">Swapnil <em>Ughade</em></h1>
        </div>
      </header>

      <article className="container" style={{ maxWidth: '780px', padding: '48px 24px 44px' }}>
        <p className="lead">
          I&apos;m Swapnil Ughade. I run <Link href="/ventures/magicworks">MagicWorks</Link>, the AI-first digital marketing agency I founded in Pune in 2009, and <Link href="/ventures/ideovate-research">Ideovate</Link>, the company behind simplidistance.com. I&apos;ve written two books on how classical marketing meets the AI-powered era of search.
        </p>

        <p className="p dropcap">
          Some backstory. I was born in Amravati in 1984 and moved to Pune for education, which is where I still live and work. MagicWorks was founded in 2009, in a single-room office, at a time when most Indian mid-market businesses were still deciding whether digital marketing was a serious channel or a novelty. The decision to build a marketing agency in that market meant spending as much time educating clients as executing for them. That constraint felt like a limitation at the time. It turned out to be the training that mattered most. It forced me to think in first principles rather than in playbook, which is a habit that has held through every technology shift since.
        </p>

        <div className="ornament">
          <span className="line"></span>
          <span className="diamond"></span>
          <span className="dot"></span>
          <span className="star"></span>
          <span className="dot"></span>
          <span className="diamond"></span>
          <span className="line"></span>
        </div>

        <p className="p">
          By 2012, MagicWorks was incorporated as a private limited company. Through the years that followed, the agency grew as digital marketing became a serious channel for Indian mid-market businesses, and clients came from the UK, Norway, the UAE, and the US alongside the home market. Today MagicWorks runs as five service pillars: Digital Marketing, Web Development, AI Consultation, Marketplace &amp; Platform Consultation, and Brand, Research &amp; Publishing. Three sibling brands sit inside the MagicWorks Group: <a href="https://magicworkshost.com/" target="_blank" rel="noopener noreferrer">MagicWorks Host</a>, <a href="https://www.magicflowai.io/" target="_blank" rel="noopener noreferrer">MagicFlow AI</a>, and <a href="https://www.magicpipeline.io/" target="_blank" rel="noopener noreferrer">Magic Pipeline</a>. In June 2026, the new site at <a href="https://magicworksitsolutions.com" target="_blank" rel="noopener noreferrer">magicworksitsolutions.com</a> went live and Next.js became the default stack for all new web builds.
        </p>

        <p className="p">
          What did not change through any of that growth was the founder-led model on the two advisory pillars: AI Consultation (Pillar 03) and Marketplace &amp; Platform Consultation (Pillar 04). Both are founder-led by design. That work does not senior-associate well. It requires two decades of operator scars to run properly, which is why I am still in every engagement personally, from the first call to the last review.
        </p>

        <aside className="marginalia">
          <div className="m-label">Aside</div>
          <div className="m-body">
            The distance-MBA portal named as a case study on the MagicWorks homepage is simplidistance.com, run by Ideovate, one of my ventures. <span className="callout">Fifty thousand plus qualified leads in sixteen months</span>, growing four times year over year.
          </div>
        </aside>

        <div className="ornament">
          <span className="line"></span>
          <span className="diamond"></span>
          <span className="dot"></span>
          <span className="star"></span>
          <span className="dot"></span>
          <span className="diamond"></span>
          <span className="line"></span>
        </div>

        <p className="p">
          There is a through-line across everything I build. I call it the operating thesis, and it is short: two into one. Human strategy into machine acceleration. Traditional search into AI-powered search. Execution into advisory. Services into products.
        </p>

        <p className="p">
          Both of my ventures in the education discovery space stand on their own. simplidistance.com is a distance and online MBA discovery portal. collegencourses.com is a regular MBA and design institute discovery portal. Founder to operator to investor to author: these are not four separate careers. They are one practice viewed from four angles.
        </p>

        <div className="ornament">
          <span className="line"></span>
          <span className="diamond"></span>
          <span className="dot"></span>
          <span className="star"></span>
          <span className="dot"></span>
          <span className="diamond"></span>
          <span className="line"></span>
        </div>

        <p className="p">
          The two books published in 2026 are the natural output of that practice. Two Algorithms, One Strategy is about SEO meeting AI-powered search, drawn from the SEO practice at MagicWorks, illustrated by Vinay Khamkar with a foreword by Mohan Chute. The AI-Powered Google Ads System is drawn from <span className="callout">over ₹70 crore in managed ad spend</span> and co-written with Mohan Chute.
        </p>

        <p className="p">
          This site is where the writing continues after the books, and where the ventures, speaking, and current work sit together in one place. I still live in Pune. I still take the founder call myself when the engagement is right. If you are building a portal or a platform, or if you run a mid-market business that has to make the AI-search transition intact, that call is probably worth having.
        </p>

        <div className="flourish">
          <FlourishSvg />
        </div>
      </article>

      <section className="timeline-zone">
        <div className="container">
          <div className="timeline-head">
            <h2 className="timeline-title">The <em>Ledger</em></h2>
            <p className="timeline-sub">Twelve milestones, eighteen years.</p>
          </div>
          <div className="timeline">
            <div className="tl-row">
              <div className="tl-year">2009</div>
              <div className="tl-title">Founded MagicWorks</div>
              <div className="tl-sub">Founded in Pune. Single-room office.</div>
            </div>
            <div className="tl-row">
              <div className="tl-year">26 Sep 2012</div>
              <div className="tl-title">Incorporated MagicWorks IT Solutions Pvt. Ltd.</div>
              <div className="tl-sub">Legal entity registered.</div>
            </div>
            <div className="tl-row">
              <div className="tl-year">Q3 2016</div>
              <div className="tl-title">Google Partner Award</div>
              <div className="tl-sub">For AdWords Game on Race.</div>
            </div>
            <div className="tl-row">
              <div className="tl-year">2017</div>
              <div className="tl-title">Cyber Security Suraksha Award</div>
              <div className="tl-sub">For contribution to e-commerce and corporate web security.</div>
            </div>
            <div className="tl-row">
              <div className="tl-year">4 Oct 2018</div>
              <div className="tl-title">Founded Ideovate Research Pvt. Ltd.</div>
              <div className="tl-sub">Operator of simplidistance.com, the distance and online MBA discovery portal.</div>
            </div>
            <div className="tl-row">
              <div className="tl-year">7 Apr 2021</div>
              <div className="tl-title">Engaged with Trexova Wellbeing Pvt. Ltd.</div>
              <div className="tl-sub">Engaged as digital marketing consultant in the wellness sector.</div>
            </div>
            <div className="tl-row">
              <div className="tl-year">29 Apr 2023</div>
              <div className="tl-title">Investor in Dnyanal Educon Pvt. Ltd.</div>
              <div className="tl-sub">Operator of collegencourses.com (regular MBA and design institute discovery).</div>
            </div>
            <div className="tl-row">
              <div className="tl-year">Apr 2026</div>
              <div className="tl-title">Published <em>Two Algorithms, One Strategy</em></div>
              <div className="tl-sub">SEO Meets AI-Powered Search. Foreword by Mohan Chute.</div>
            </div>
            <div className="tl-row">
              <div className="tl-year">Apr 2026</div>
              <div className="tl-title">Launched Magic Pipeline (<a href="https://www.magicpipeline.io/" target="_blank" rel="noopener noreferrer">magicpipeline.io</a>)</div>
              <div className="tl-sub">The multi-tenant outreach and CRM SaaS built by MagicWorks. Internal use only at launch.</div>
            </div>
            <div className="tl-row">
              <div className="tl-year">May 2026</div>
              <div className="tl-title">Launched MagicFlow AI (<a href="https://www.magicflowai.io/" target="_blank" rel="noopener noreferrer">magicflowai.io</a>)</div>
              <div className="tl-sub">Public launch of the multi-tenant AI-chatbot SaaS built by MagicWorks.</div>
            </div>
            <div className="tl-row">
              <div className="tl-year">Jun 2026</div>
              <div className="tl-title">Launched the new MagicWorks IT Solutions site</div>
              <div className="tl-sub">Site at <a href="https://magicworksitsolutions.com" target="_blank" rel="noopener noreferrer">magicworksitsolutions.com</a> goes live on Next.js.</div>
            </div>
            <div className="tl-row">
              <div className="tl-year">Sep 2026</div>
              <div className="tl-title">Published <em>The AI-Powered Google Ads System</em></div>
              <div className="tl-sub">Co-authored with Mohan Chute.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="seals-band">
        <div className="container">
          <div className="seals-eyebrow">THE COUNTERS</div>
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

      {/* Practitioner's Seal (Element 03 Colophon) */}
      <div className="footer-transition-band" aria-hidden="true">
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="footer-seal-wrap">
            <PractitionerSeal className="w-[112px] h-[112px]" isDark={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
