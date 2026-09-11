import Link from 'next/link';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const metadata = {
  title: 'Privacy Policy · Swapnil Ughade',
  description: 'Privacy Policy for swapnilughade.com — data governance, collection practices, third-party services, and user rights.',
  openGraph: {
    title: 'Privacy Policy · Swapnil Ughade',
    description: 'Privacy Policy for swapnilughade.com — data governance, collection practices, third-party services, and user rights.',
    url: 'https://swapnilughade.com/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="section" style={{ paddingBottom: '96px' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        {/* BREADCRUMB & HEADER */}
        <div style={{ marginBottom: '40px' }}>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Privacy Policy' },
            ]}
          />
          <h1 className="section-title" style={{ marginTop: '16px', marginBottom: '12px' }}>
            Privacy <em>Policy</em>
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

        {/* POLICY CONTENT */}
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
              1. Who we are
            </h2>
            <p style={{ marginBottom: '12px' }}>
              This website (<strong>swapnilughade.com</strong>) is a personal site owned and operated by Swapnil Ughade as an individual (sole proprietor), based in Pune, Maharashtra, India.
            </p>
            <p style={{ margin: 0 }}>
              For all data privacy queries, contact{' '}
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
              .
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
              2. Scope of this policy
            </h2>
            <p style={{ marginBottom: '12px' }}>
              This Privacy Policy explains what personal information is collected when you visit swapnilughade.com, how it is used, who it is shared with, and what rights you have over it. It applies to all pages on the site.
            </p>
            <p style={{ margin: 0 }}>
              This policy is written to comply with the <strong>Digital Personal Data Protection Act, 2023 (India)</strong>, the <strong>General Data Protection Regulation (EU GDPR)</strong>, and the <strong>California Consumer Privacy Act (CCPA)</strong>. Where these laws differ, the stricter standard applies to your data.
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
              3. Information we collect
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
              3.1 Information you provide directly
            </h3>
            <p style={{ marginBottom: '12px' }}>
              When you use the site, you may voluntarily give us information in these situations:
            </p>
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
              <li>
                <strong>Newsletter signup (The Letter):</strong> When you subscribe, we collect your email address.
              </li>
              <li>
                <strong>Contact form:</strong> When you send a message through the{' '}
                <Link
                  href="/contact"
                  style={{
                    color: 'var(--saffron)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                  }}
                >
                  Contact page
                </Link>
                , we collect your name, email address, and the content of your message.
              </li>
            </ul>
            <p style={{ marginBottom: '20px' }}>
              We do not collect any other personal information unless you choose to provide it.
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
              3.2 Information collected automatically
            </h3>
            <p style={{ marginBottom: '12px' }}>
              When you visit the site, our analytics tool collects standard information about your visit, including:
            </p>
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
              <li>Your general geographic location (city or region level, not precise coordinates)</li>
              <li>Your device type, browser, and operating system</li>
              <li>Pages you visit and how long you spend on them</li>
              <li>How you arrived at the site (referring website or search query)</li>
              <li>An anonymised identifier used to recognise return visits</li>
            </ul>
            <p style={{ marginBottom: '20px' }}>
              This information is collected through Google Analytics 4 and does not personally identify you as an individual.
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
              3.3 Cookies
            </h3>
            <p style={{ margin: 0 }}>
              The site uses a limited set of cookies for functionality and analytics. A separate{' '}
              <Link
                href="/cookies"
                style={{
                  color: 'var(--saffron)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                Cookies Policy
              </Link>{' '}
              on this site explains exactly which cookies are set and how you can control them. A consent banner appears on your first visit, allowing you to accept, reject, or customise cookie use.
            </p>
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
              4. How we use your information
            </h2>
            <ul
              style={{
                listStyleType: 'disc',
                paddingLeft: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                marginBottom: '16px',
              }}
            >
              <li>
                <strong>Newsletter email address:</strong> To send you <em>The Letter</em>, roughly every second Sunday. We do not use your subscriber email for any other purpose.
              </li>
              <li>
                <strong>Contact form submissions:</strong> To respond to your message. We retain messages for as long as reasonably needed to complete the exchange and for a reasonable period of follow-up.
              </li>
              <li>
                <strong>Analytics data:</strong> To understand how the site is used, improve the writing and structure, and see which pieces are being read.
              </li>
            </ul>
            <div
              style={{
                padding: '16px 20px',
                background: 'var(--bone-warm)',
                border: '1px solid var(--line-soft)',
                borderLeft: '4px solid var(--gold)',
              }}
            >
              <strong style={{ color: 'var(--amethyst)' }}>Our Commitment:</strong> We do not sell your personal information. We do not use it for automated decision-making. We do not use it for behavioural advertising or retargeting.
            </div>
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
              5. Third-party services we use
            </h2>
            <p style={{ marginBottom: '14px' }}>
              The following third-party services help operate the site. Each has its own privacy practices, and interacting with the site involves some information being processed by these providers:
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '12px',
                marginBottom: '16px',
              }}
            >
              <div style={{ padding: '14px 16px', background: 'var(--bone-warm)', border: '1px solid var(--line-soft)' }}>
                <strong style={{ color: 'var(--amethyst)' }}>Vercel</strong>
                <div style={{ fontSize: '13.5px', color: 'var(--ash)', marginTop: '2px' }}>Hosting &amp; cloud infrastructure</div>
              </div>
              <div style={{ padding: '14px 16px', background: 'var(--bone-warm)', border: '1px solid var(--line-soft)' }}>
                <strong style={{ color: 'var(--amethyst)' }}>Google Analytics 4</strong>
                <div style={{ fontSize: '13.5px', color: 'var(--ash)', marginTop: '2px' }}>Privacy-friendly site analytics</div>
              </div>
              <div style={{ padding: '14px 16px', background: 'var(--bone-warm)', border: '1px solid var(--line-soft)' }}>
                <strong style={{ color: 'var(--amethyst)' }}>Google Fonts</strong>
                <div style={{ fontSize: '13.5px', color: 'var(--ash)', marginTop: '2px' }}>Typography &amp; font delivery</div>
              </div>
              <div style={{ padding: '14px 16px', background: 'var(--bone-warm)', border: '1px solid var(--line-soft)' }}>
                <strong style={{ color: 'var(--amethyst)' }}>Amazon Web Services (AWS)</strong>
                <div style={{ fontSize: '13.5px', color: 'var(--ash)', marginTop: '2px' }}>Email delivery for The Letter</div>
              </div>
            </div>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--ash)' }}>
              We choose providers with standard data-protection practices and, where applicable, established compliance with GDPR, DPDP, and equivalent regulations. Links to each provider&apos;s privacy policy are available on request.
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
              6. Where your data is stored
            </h2>
            <p style={{ margin: 0 }}>
              Our third-party service providers operate globally, and some may process your information outside of India (primarily in the United States and European Union). Where such transfers happen, we rely on the providers&apos; standard data-protection safeguards, including Standard Contractual Clauses where applicable under GDPR.
            </p>
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
              7. Data retention
            </h2>
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
              <li>
                <strong>Newsletter subscribers:</strong> Your email address is retained until you unsubscribe. You can unsubscribe at any time through the link in every newsletter issue.
              </li>
              <li>
                <strong>Contact form messages:</strong> Retained for up to two years after the last exchange, then deleted.
              </li>
              <li>
                <strong>Analytics data:</strong> Retained per Google Analytics 4&apos;s default retention settings (typically 14 months).
              </li>
            </ul>
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
              8. Your rights
            </h2>
            <p style={{ marginBottom: '16px' }}>
              Depending on where you live, you have the following rights over your personal information:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
              <div
                style={{
                  padding: '16px 20px',
                  background: 'var(--bone-warm)',
                  border: '1px solid var(--line-soft)',
                  borderLeft: '4px solid var(--amethyst)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '17px',
                    fontWeight: 600,
                    color: 'var(--amethyst)',
                    marginBottom: '8px',
                  }}
                >
                  If you are in India (under the DPDP Act, 2023)
                </h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '4px', margin: 0, fontSize: '14.5px' }}>
                  <li>Right to be informed about how your data is being used</li>
                  <li>Right to access, correct, or erase your data</li>
                  <li>Right to grievance redressal for any privacy concerns</li>
                  <li>Right to nominate another individual to exercise these rights on your behalf</li>
                </ul>
              </div>

              <div
                style={{
                  padding: '16px 20px',
                  background: 'var(--bone-warm)',
                  border: '1px solid var(--line-soft)',
                  borderLeft: '4px solid var(--gold)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '17px',
                    fontWeight: 600,
                    color: 'var(--amethyst)',
                    marginBottom: '8px',
                  }}
                >
                  If you are in the European Union / European Economic Area (under GDPR)
                </h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '4px', margin: 0, fontSize: '14.5px' }}>
                  <li>Right of access to your personal data</li>
                  <li>Right to rectification of inaccurate data</li>
                  <li>Right to erasure (&ldquo;right to be forgotten&rdquo;)</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                  <li>Right to lodge a complaint with your local supervisory authority</li>
                </ul>
              </div>

              <div
                style={{
                  padding: '16px 20px',
                  background: 'var(--bone-warm)',
                  border: '1px solid var(--line-soft)',
                  borderLeft: '4px solid var(--saffron)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '17px',
                    fontWeight: 600,
                    color: 'var(--amethyst)',
                    marginBottom: '8px',
                  }}
                >
                  If you are in California (under CCPA)
                </h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '4px', margin: 0, fontSize: '14.5px' }}>
                  <li>Right to know what personal information is collected about you</li>
                  <li>Right to delete personal information we hold about you</li>
                  <li>Right to opt out of the sale of personal information (<em>we do not sell your information</em>)</li>
                  <li>Right to non-discrimination for exercising your privacy rights</li>
                </ul>
              </div>
            </div>

            <p style={{ margin: 0 }}>
              To exercise any of these rights, email{' '}
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
              with your request and the country you are contacting us from. We aim to respond within 30 days.
            </p>
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
              9. Children&apos;s privacy
            </h2>
            <p style={{ margin: 0 }}>
              This site is not directed at anyone under the age of 18. We do not knowingly collect personal information from minors. If you believe a minor has provided personal information through the site, please contact us at{' '}
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
              and we will promptly delete it.
            </p>
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
              10. Security
            </h2>
            <p style={{ margin: 0 }}>
              We use reasonable technical and organisational measures to protect the information collected through the site. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security. In the event of a data breach affecting your personal information, we will notify you and the relevant authorities in accordance with applicable law.
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
              11. Changes to this policy
            </h2>
            <p style={{ margin: 0 }}>
              This Privacy Policy may be updated from time to time. When we make material changes, we will update the &ldquo;Last updated&rdquo; date at the top of this page and, where appropriate, notify newsletter subscribers by email. Your continued use of the site after changes take effect constitutes acceptance of the updated policy.
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
              12. Contact
            </h2>
            <p style={{ marginBottom: '16px' }}>
              For privacy questions, requests, or complaints, please contact:
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
            <p style={{ marginTop: '12px', fontSize: '14px', color: 'var(--ash)' }}>
              We will do our best to respond within 30 days.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
