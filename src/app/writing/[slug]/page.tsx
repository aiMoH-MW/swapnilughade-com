import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ARTICLES } from '@/lib/content-data';
import { FlourishSvg, TwoIntoOneGlyph } from '@/components/ui/SignatureSvg';
import { Ornament } from '@/components/ui/Ornament';
import { InlineMarkdown } from '@/components/writing/InlineMarkdown';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { NewsletterForm } from '@/components/forms/NewsletterForm';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((art) => ({ slug: art.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: 'Article Not Found · Swapnil Ughade' };

  return {
    title: `${article.title} · Swapnil Ughade`,
    description: article.metaDescription || article.lead.slice(0, 155),
    alternates: {
      canonical: `https://swapnilughade.com/writing/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} · Swapnil Ughade`,
      description: article.metaDescription || article.lead.slice(0, 155),
      type: 'article',
      url: `https://swapnilughade.com/writing/${article.slug}`,
      publishedTime: article.publishedAt,
      authors: ['Swapnil Ughade'],
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${article.title} · Swapnil Ughade`,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} · Swapnil Ughade`,
      description: article.metaDescription || article.lead.slice(0, 155),
      images: ['/og-image.png'],
    },
  };
}

function renderTitleWithEm(title: string, emWord?: string) {
  if (!emWord) return title;
  const regex = new RegExp(`(${emWord})`, 'gi');
  const parts = title.split(regex);
  return (
    <>
      {parts.map((p, i) =>
        p.toLowerCase() === emWord.toLowerCase() ? <em key={i}>{p}</em> : p
      )}
    </>
  );
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Related articles (the other 2 articles from ARTICLES)
  const relatedArticles = ARTICLES.filter((a) => a.slug !== article.slug);

  const cleanReadingTime = article.readingTime.replace(/[()[\]]/g, '').trim();

  const articleJsonLd = article.jsonLd || {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription || article.lead,
    datePublished: article.publishedAt,
    author: {
      "@type": "Person",
      name: "Swapnil Ughade",
      url: "https://swapnilughade.com/about",
      sameAs: ["https://swapnilughade.com/about"]
    },
    publisher: {
      "@type": "Person",
      name: "Swapnil Ughade"
    },
    mainEntityOfPage: `https://swapnilughade.com/writing/${article.slug}`,
    articleSection: article.category,
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* ARTICLE HEADER & BODY ZONE */}
      <section className="article-zone">
        <header className="article-head">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Writing', href: '/writing' },
              { label: article.title },
            ]}
            className="a-breadcrumb"
          />
          <h1 className="a-title">
            {renderTitleWithEm(article.title, article.titleEm)}
          </h1>
          <div className="a-meta">
            <span>{article.publishedAt}</span>
            <span>({cleanReadingTime})</span>
          </div>
        </header>

        <div className="article-body">
          {/* Key Takeaways */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="key-takeaways-block">
              <div className="takeaways-label">Key Takeaways</div>
              <ul className="takeaways-list">
                {article.keyTakeaways.map((item, idx) => (
                  <li key={idx}>
                    <InlineMarkdown text={item} />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Intro Paragraphs */}
          {article.introParagraphs && article.introParagraphs.map((p, idx) => (
            <p key={idx} className={`p ${idx === 0 ? 'dropcap' : ''}`}>
              <InlineMarkdown text={p} />
            </p>
          ))}

          {/* Structured Sections */}
          {article.sections && article.sections.map((section, sIdx) => (
            <div key={sIdx} className="article-section-block">
              <Ornament />

              {section.heading && (
                <h2 className="h3">
                  {renderTitleWithEm(section.heading, section.headingEm)}
                </h2>
              )}

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="p">
                  <InlineMarkdown text={p} />
                </p>
              ))}

              {section.marginalia && (
                <aside className="marginalia">
                  <div className="m-label">{section.marginalia.label}</div>
                  <div className="m-body">{section.marginalia.text}</div>
                </aside>
              )}

              {section.dataCallout && (
                <div style={{ margin: '32px 0', padding: '24px', background: 'var(--bone)', border: '1px solid var(--line)', display: 'flex', alignItems: 'baseline', gap: '16px' }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '32px', fontWeight: 600, color: 'var(--rosewood)' }}>
                    {section.dataCallout.metric}
                  </span>
                  <span style={{ fontSize: '14px', color: 'var(--ink)' }}>
                    {section.dataCallout.description}
                  </span>
                </div>
              )}
            </div>
          ))}

          {/* Flourish Divider */}
          <div className="flourish">
            <FlourishSvg />
          </div>

          {/* Closing Paragraphs */}
          {article.closingParagraphs && article.closingParagraphs.map((p, cIdx) => (
            <p key={cIdx} className="p" style={cIdx === 0 ? { marginTop: '32px' } : undefined}>
              <InlineMarkdown text={p} />
            </p>
          ))}

          {/* Footer Reflection Note */}
          {article.footerNote && (
            <p className="article-footer-note">
              <em><InlineMarkdown text={article.footerNote} /></em>
            </p>
          )}
        </div>
      </section>

      {/* NEWSLETTER BAND */}
      <section className="newsletter-band" id="the-letter">
        <div className="container">
          <div className="newsletter-eyebrow">Every second Sunday</div>
          <h2 className="newsletter-title">The <em>Letter</em></h2>
          <p className="newsletter-body">Long-form notes on the practice, plus one recommended read. Reply to any issue to reach me directly.</p>
          <NewsletterForm source="article_page_newsletter_band" />
          <div className="newsletter-note">No spam. Clean text format. Unsubscribe in one click.</div>
        </div>
      </section>

      {/* RELATED WRITING ZONE */}
      <section className="related-zone">
        <div className="related-head">
          <h2 className="related-title">Related <em>writing</em></h2>
        </div>
        <div className="related-grid">
          {relatedArticles.map((rel) => (
            <Link key={rel.slug} href={`/writing/${rel.slug}`} className="related-card">
              <div className="related-eyebrow">{rel.category}</div>
              <div className="related-t">
                {renderTitleWithEm(rel.title, rel.titleEm)}
              </div>
              <div className="related-b">{rel.blurb}</div>
              <span className="related-l">Read →</span>
            </Link>
          ))}
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
