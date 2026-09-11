import Link from 'next/link';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const metadata = {
  title: 'Terms of Use · Swapnil Ughade',
  description: 'Terms of Use for swapnilughade.com — terms governing site usage, intellectual property, fair use, disclaimers, and liability.',
  openGraph: {
    title: 'Terms of Use · Swapnil Ughade',
    description: 'Terms of Use for swapnilughade.com — terms governing site usage, intellectual property, fair use, disclaimers, and liability.',
    url: 'https://swapnilughade.com/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="section" style={{ paddingBottom: '96px' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        {/* BREADCRUMB & HEADER */}
        <div style={{ marginBottom: '40px' }}>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Terms of Use' },
            ]}
          />
          <h1 className="section-title" style={{ marginTop: '16px', marginBottom: '12px' }}>
            Terms of <em>Use</em>
          </h1>
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '12px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--ash)',
            }}
          >
            Effective date: 9 Sept 2026 · Last updated: 9 Sept 2026 · swapnilughade.com
          </div>
        </div>

        {/* TERMS CONTENT */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
            color: 'var(--ink)',
            lineHeight: 1.75,
            fontSize: '15px',
          }}
        >
          {/* SECTION 1 */}
          <section>
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '22px',
                fontWeight: 600,
                color: 'var(--amethyst)',
                marginBottom: '12px',
                paddingBottom: '6px',
                borderBottom: '1px solid var(--line-soft)',
              }}
            >
              1. Introduction
            </h2>
            <p style={{ margin: 0 }}>
              Welcome to <strong>swapnilughade.com</strong>. These Terms of Use (&ldquo;Terms&rdquo;) govern your use of this website. By accessing or using the site, you agree to be bound by these Terms. If you do not agree, please do not use the site.
            </p>
          </section>

          {/* SECTION 2 */}
          <section>
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '22px',
                fontWeight: 600,
                color: 'var(--amethyst)',
                marginBottom: '12px',
                paddingBottom: '6px',
                borderBottom: '1px solid var(--line-soft)',
              }}
            >
              2. About the site owner
            </h2>
            <p style={{ margin: 0 }}>
              This website is a personal site owned and operated by Swapnil Ughade as an individual (sole proprietor), based in Pune, Maharashtra, India. Where these Terms refer to &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our,&rdquo; they refer to the site owner.
            </p>
          </section>

          {/* SECTION 3 */}
          <section>
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '22px',
                fontWeight: 600,
                color: 'var(--amethyst)',
                marginBottom: '12px',
                paddingBottom: '6px',
                borderBottom: '1px solid var(--line-soft)',
              }}
            >
              3. Use of the site
            </h2>

            <h3
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '18px',
                fontWeight: 600,
                color: 'var(--amethyst)',
                marginTop: '16px',
                marginBottom: '8px',
              }}
            >
              3.1 What you may do
            </h3>
            <p style={{ marginBottom: '12px' }}>You are welcome to:</p>
            <ul
              style={{
                listStyleType: 'disc',
                paddingLeft: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                marginBottom: '20px',
              }}
            >
              <li>Read, view, and enjoy the content on this site for personal use.</li>
              <li>Share links to any page on the site freely and without restriction.</li>
              <li>
                Subscribe to <em>The Letter</em>, our newsletter, and forward newsletter issues to friends, colleagues, or anyone you think would find them useful.
              </li>
              <li>
                Quote short excerpts from articles for editorial, educational, or personal-commentary purposes with proper attribution and a link back to the source (see Section 4.2 on fair use).
              </li>
            </ul>

            <h3
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '18px',
                fontWeight: 600,
                color: 'var(--amethyst)',
                marginTop: '16px',
                marginBottom: '8px',
              }}
            >
              3.2 What you may not do
            </h3>
            <p style={{ marginBottom: '12px' }}>You may not:</p>
            <ul
              style={{
                listStyleType: 'disc',
                paddingLeft: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                margin: 0,
              }}
            >
              <li>Republish, reproduce, or redistribute site content in whole or in significant part as if it were your own.</li>
              <li>Use the content for commercial purposes without prior written permission.</li>
              <li>Use the site in any way that violates applicable law.</li>
              <li>Attempt to access parts of the site that are not intended for public use.</li>
              <li>Introduce viruses, malware, or other harmful code to the site.</li>
              <li>Scrape, crawl, or systematically extract content from the site without prior written permission.</li>
            </ul>
          </section>

          {/* SECTION 4 */}
          <section>
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '22px',
                fontWeight: 600,
                color: 'var(--amethyst)',
                marginBottom: '12px',
                paddingBottom: '6px',
                borderBottom: '1px solid var(--line-soft)',
              }}
            >
              4. Intellectual property
            </h2>

            <h3
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '18px',
                fontWeight: 600,
                color: 'var(--amethyst)',
                marginTop: '16px',
                marginBottom: '8px',
              }}
            >
              4.1 Ownership
            </h3>
            <p style={{ marginBottom: '16px' }}>
              All content on this site, including articles, essays, page copy, design elements, layout, code, the signature mark, and any brand identity elements, is the intellectual property of Swapnil Ughade unless otherwise stated.
            </p>

            <h3
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '18px',
                fontWeight: 600,
                color: 'var(--amethyst)',
                marginTop: '16px',
                marginBottom: '8px',
              }}
            >
              4.2 Fair use
            </h3>
            <p style={{ marginBottom: '12px' }}>
              Short excerpts from articles (up to a few paragraphs) may be quoted for editorial, educational, review, or personal-commentary purposes, provided you:
            </p>
            <ul
              style={{
                listStyleType: 'disc',
                paddingLeft: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                marginBottom: '12px',
              }}
            >
              <li>Give clear attribution to Swapnil Ughade</li>
              <li>Include a link back to the original page on this site</li>
              <li>Do not reproduce the entire article</li>
              <li>Do not use the excerpt in a way that misrepresents the meaning or intent of the original</li>
            </ul>
            <p style={{ marginBottom: '16px' }}>
              If you are unsure whether your intended use qualifies as fair use, please contact us before publishing.
            </p>

            <h3
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '18px',
                fontWeight: 600,
                color: 'var(--amethyst)',
                marginTop: '16px',
                marginBottom: '8px',
              }}
            >
              4.3 The Letter (newsletter)
            </h3>
            <p style={{ marginBottom: '16px' }}>
              You are welcome to forward issues of <em>The Letter</em> to individuals through personal channels (email, direct message, printed copy). Republishing entire newsletter issues on a public website, blog, or platform requires prior written permission.
            </p>

            <h3
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '18px',
                fontWeight: 600,
                color: 'var(--amethyst)',
                marginTop: '16px',
                marginBottom: '8px',
              }}
            >
              4.4 Third-party content
            </h3>
            <p style={{ margin: 0 }}>
              Where content, images, or quotations from third parties appear on the site, those items remain the property of their respective owners. Their use here is either under license, under fair use, or with permission.
            </p>
          </section>

          {/* SECTION 5 */}
          <section>
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '22px',
                fontWeight: 600,
                color: 'var(--amethyst)',
                marginBottom: '12px',
                paddingBottom: '6px',
                borderBottom: '1px solid var(--line-soft)',
              }}
            >
              5. Testimonials and public commentary
            </h2>
            <p style={{ margin: 0 }}>
              If you publicly comment on Swapnil Ughade&apos;s work (on social media, in reviews, on podcasts, or in other public forums), we may quote or reference your commentary on this site or in related marketing materials, with attribution back to you. If you would prefer that your public commentary not be quoted, please let us know at{' '}
              <a
                href="mailto:privacy@swapnilughade.com"
                style={{
                  color: 'var(--saffron)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                  fontWeight: 500,
                }}
              >
                privacy@swapnilughade.com
              </a>{' '}
              and we will respect that request.
            </p>
          </section>

          {/* SECTION 6 */}
          <section>
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '22px',
                fontWeight: 600,
                color: 'var(--amethyst)',
                marginBottom: '12px',
                paddingBottom: '6px',
                borderBottom: '1px solid var(--line-soft)',
              }}
            >
              6. Contact submissions and business inquiries
            </h2>
            <p style={{ marginBottom: '12px' }}>
              The{' '}
              <Link
                href="/contact"
                style={{
                  color: 'var(--saffron)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                Contact page
              </Link>{' '}
              and other communication channels on this site are provided for general inquiries. Please note the following:
            </p>
            <ul
              style={{
                listStyleType: 'disc',
                paddingLeft: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                margin: 0,
              }}
            >
              <li>Sending a message through the site does not create a client, advisory, consulting, or professional relationship of any kind.</li>
              <li>No professional engagement begins until a formal engagement letter or contract has been signed by both parties.</li>
              <li>
                Any information you share through the Contact page should not be considered confidential in the legal sense until a formal engagement is in place. If your inquiry involves sensitive information, please request a formal meeting under a signed non-disclosure agreement first.
              </li>
            </ul>
          </section>

          {/* SECTION 7 */}
          <section>
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '22px',
                fontWeight: 600,
                color: 'var(--amethyst)',
                marginBottom: '12px',
                paddingBottom: '6px',
                borderBottom: '1px solid var(--line-soft)',
              }}
            >
              7. Third-party links
            </h2>
            <p style={{ margin: 0 }}>
              The site may link to external websites, services, tools, or products, including the ventures, publishers, and services mentioned in various pages. These links are provided for convenience and reference. We are not responsible for the content, privacy practices, or accuracy of any external site. Following an external link is at your own risk.
            </p>
          </section>

          {/* SECTION 8 */}
          <section>
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '22px',
                fontWeight: 600,
                color: 'var(--amethyst)',
                marginBottom: '12px',
                paddingBottom: '6px',
                borderBottom: '1px solid var(--line-soft)',
              }}
            >
              8. Disclaimers
            </h2>
            <p style={{ marginBottom: '12px' }}>
              The content on this site is provided for informational and editorial purposes only.
            </p>
            <ul
              style={{
                listStyleType: 'disc',
                paddingLeft: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                margin: 0,
              }}
            >
              <li>The site and its content are provided &ldquo;as is,&rdquo; without warranties of any kind, express or implied.</li>
              <li>We do not warrant that the site will always be available, error-free, uninterrupted, or free from viruses or other harmful components.</li>
              <li>The views expressed in articles and other content are personal opinions and observations based on the author&apos;s experience. They are not a substitute for professional advice specific to your situation.</li>
              <li>Any frameworks, recommendations, or observations discussed on the site should be adapted to your own context. We do not guarantee any specific business, marketing, or financial outcome from applying anything you read here.</li>
              <li>Nothing on this site constitutes legal, financial, tax, medical, or other regulated professional advice. Consult a qualified professional for advice specific to your circumstances.</li>
            </ul>
          </section>

          {/* SECTION 9 */}
          <section>
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '22px',
                fontWeight: 600,
                color: 'var(--amethyst)',
                marginBottom: '12px',
                paddingBottom: '6px',
                borderBottom: '1px solid var(--line-soft)',
              }}
            >
              9. Limitation of liability
            </h2>
            <div
              style={{
                padding: '18px 20px',
                background: 'var(--bone-warm)',
                border: '1px solid var(--line-soft)',
                borderLeft: '4px solid var(--amethyst)',
                marginBottom: '12px',
              }}
            >
              <p style={{ margin: 0, marginBottom: '8px' }}>
                To the fullest extent permitted by applicable law, Swapnil Ughade shall not be liable for any indirect, incidental, special, exemplary, or punitive damages arising out of or related to your use of this site or its content, even if advised of the possibility of such damages.
              </p>
              <p style={{ margin: 0 }}>
                To the fullest extent permitted by law, the total liability of Swapnil Ughade to you for any and all claims arising from or related to these Terms or your use of the site shall not exceed one hundred Indian rupees (INR 100).
              </p>
            </div>
          </section>

          {/* SECTION 10 */}
          <section>
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '22px',
                fontWeight: 600,
                color: 'var(--amethyst)',
                marginBottom: '12px',
                paddingBottom: '6px',
                borderBottom: '1px solid var(--line-soft)',
              }}
            >
              10. Indemnification
            </h2>
            <p style={{ margin: 0 }}>
              You agree to indemnify and hold Swapnil Ughade harmless from any claim, liability, cost, or expense (including reasonable legal fees) arising from or related to your use of the site, your violation of these Terms, or your infringement of any third-party rights.
            </p>
          </section>

          {/* SECTION 11 */}
          <section>
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '22px',
                fontWeight: 600,
                color: 'var(--amethyst)',
                marginBottom: '12px',
                paddingBottom: '6px',
                borderBottom: '1px solid var(--line-soft)',
              }}
            >
              11. Governing law and jurisdiction
            </h2>
            <p style={{ margin: 0 }}>
              These Terms are governed by and construed in accordance with the laws of India. Any dispute arising from or relating to these Terms or your use of the site shall be subject to the exclusive jurisdiction of the courts located in Pune, Maharashtra, India.
            </p>
          </section>

          {/* SECTION 12 */}
          <section>
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '22px',
                fontWeight: 600,
                color: 'var(--amethyst)',
                marginBottom: '12px',
                paddingBottom: '6px',
                borderBottom: '1px solid var(--line-soft)',
              }}
            >
              12. Changes to these Terms
            </h2>
            <p style={{ margin: 0 }}>
              These Terms may be updated from time to time. When we make material changes, we will update the &ldquo;Last updated&rdquo; date at the top of this page. Your continued use of the site after changes take effect constitutes acceptance of the updated Terms. If you do not agree with the updated Terms, please stop using the site.
            </p>
          </section>

          {/* SECTION 13 */}
          <section>
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '22px',
                fontWeight: 600,
                color: 'var(--amethyst)',
                marginBottom: '12px',
                paddingBottom: '6px',
                borderBottom: '1px solid var(--line-soft)',
              }}
            >
              13. Severability
            </h2>
            <p style={{ margin: 0 }}>
              If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          {/* SECTION 14 */}
          <section>
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '22px',
                fontWeight: 600,
                color: 'var(--amethyst)',
                marginBottom: '12px',
                paddingBottom: '6px',
                borderBottom: '1px solid var(--line-soft)',
              }}
            >
              14. Contact
            </h2>
            <p style={{ marginBottom: '16px' }}>
              For questions about these Terms of Use, please contact:
            </p>
            <div
              style={{
                padding: '24px',
                background: 'var(--bone-warm)',
                border: '1px solid var(--line)',
                borderLeft: '4px solid var(--gold)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--amethyst)',
                }}
              >
                Swapnil Ughade
              </div>
              <div style={{ color: 'var(--ink-soft)', fontSize: '14.5px', lineHeight: 1.6 }}>
                Pune, Maharashtra, India
              </div>
              <div style={{ marginTop: '4px', fontSize: '14.5px' }}>
                <span style={{ color: 'var(--ash)' }}>Email: </span>
                <a
                  href="mailto:privacy@swapnilughade.com"
                  style={{
                    color: 'var(--saffron)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                    fontWeight: 500,
                  }}
                >
                  privacy@swapnilughade.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
