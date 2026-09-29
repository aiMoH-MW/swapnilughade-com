import { notFound } from 'next/navigation';
import { getPublishedArticles } from '@/lib/content-data';
import { WritingArchive } from '@/components/writing/WritingArchive';
import { TwoIntoOneGlyph } from '@/components/ui/SignatureSvg';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { NewsletterForm } from '@/components/forms/NewsletterForm';

export const revalidate = 300;

interface Props {
  params: Promise<{ pillar: string }>;
}

const PILLAR_MAP: Record<string, { label: string; desc: string }> = {
  'consultancy': {
    label: 'Consultancy',
    desc: 'Frameworks, diagnostic audits, and strategic playbooks across digital marketing, marketplace consulting, and platform scaling.',
  },
  'operators-diary': {
    label: "Operator's Diary",
    desc: 'First-person dispatches from seventeen years of building and scaling agencies, SaaS products, and portals.',
  },
  'operating-thesis': {
    label: 'Operating Thesis',
    desc: 'Principles and mental models for integrating strategy and execution in the AI era.',
  },
  'portals-and-platforms': {
    label: 'Portals & Platforms',
    desc: 'Architecting high-trust discovery portals and navigating two-sided platform unit economics.',
  },
  'advisory': {
    label: 'Advisory',
    desc: 'Founder-led advisory engagements, category selection, and executive consultation.',
  },
};

export async function generateStaticParams() {
  return Object.keys(PILLAR_MAP).map((pillar) => ({ pillar }));
}

export async function generateMetadata({ params }: Props) {
  const { pillar } = await params;
  const info = PILLAR_MAP[pillar];

  if (!info) {
    return { title: 'Pillar Not Found · Swapnil Ughade' };
  }

  return {
    title: `${info.label} · Writing Archive · Swapnil Ughade`,
    description: info.desc,
    alternates: {
      canonical: `https://swapnilughade.com/writing/pillar/${pillar}`,
    },
    openGraph: {
      title: `${info.label} · Writing Archive · Swapnil Ughade`,
      description: info.desc,
      url: `https://swapnilughade.com/writing/pillar/${pillar}`,
      type: 'website',
    },
  };
}

export default async function PillarArchivePage({ params }: Props) {
  const { pillar } = await params;
  const info = PILLAR_MAP[pillar];

  if (!info) {
    notFound();
  }

  // Normalize category comparison
  const publishedArticles = getPublishedArticles();
  const pillarArticles = publishedArticles.filter((art) => {
    const artCat = (art.pillar || art.category).toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return artCat.includes(pillar) || pillar.includes(artCat) || (art.category.toLowerCase() === info.label.toLowerCase());
  });

  return (
    <div>
      <div className="section writing">
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Writing', href: '/writing' },
              { label: info.label },
            ]}
          />
          <div className="section-head">
            <div className="hero-eyebrow">Pillar Archive · {info.label}</div>
            <h1 className="section-title">
              Writing &amp; Notes on <em>{info.label}</em>
            </h1>
            <p className="section-sub">{info.desc}</p>
          </div>

          <WritingArchive articles={pillarArticles} />
        </div>
      </div>

      {/* NEWSLETTER BAND */}
      <section className="newsletter-band" id="the-letter">
        <div className="container">
          <div className="newsletter-eyebrow">Every second Sunday</div>
          <h2 className="newsletter-title">The <em>Letter</em></h2>
          <p className="newsletter-body">
            Long-form notes on the practice, plus one recommended read. Reply to any issue to reach me directly.
          </p>
          <NewsletterForm source="pillar_page_newsletter_band" />
          <div className="newsletter-note">No spam. Clean text format. Unsubscribe in one click.</div>
        </div>
      </section>

      {/* FOOTER TRANSITION SPACER */}
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
