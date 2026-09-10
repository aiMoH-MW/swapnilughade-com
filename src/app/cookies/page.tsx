import Link from 'next/link';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const metadata = {
  title: 'Cookie Policy · Swapnil Ughade',
  description: 'This Cookie Policy explains how swapnilughade.com uses cookies and similar technologies on swapnilughade.com.',
  openGraph: {
    title: 'Cookie Policy · Swapnil Ughade',
    description: 'This Cookie Policy explains how swapnilughade.com uses cookies and similar technologies on swapnilughade.com.',
    url: 'https://swapnilughade.com/cookies',
  },
};

export default function CookiesPage() {
  const cookieInventory = [
    {
      name: 'mw_cookie_consent',
      provider: 'swapnilughade.com',
      category: 'Strictly Necessary',
      purpose: 'Stores your cookie consent preferences (analytics and marketing opt-in/out) so we do not re-ask on every visit.',
      duration: '1 year (localStorage)',
    },
    {
      name: '_ga',
      provider: 'Google LLC',
      category: 'Analytics',
      purpose: 'Distinguishes unique users by assigning a randomly generated client identifier; used to calculate visitor, session, and campaign statistics.',
      duration: '2 years',
    },
    {
      name: '_ga_*',
      provider: 'Google LLC',
      category: 'Analytics',
      purpose: 'Used by Google Analytics 4 to persist session state and store campaign attribution data.',
      duration: '2 years',
    },
    {
      name: '_gid',
      provider: 'Google LLC',
      category: 'Analytics',
      purpose: 'Distinguishes unique users; used to count and store the number of page views.',
      duration: '24 hours',
    },
    {
      name: '_gcl_au',
      provider: 'Google LLC',
      category: 'Marketing',
      purpose: 'Used by Google Ads via Google Tag Manager to store and measure conversions and track advertising campaign effectiveness.',
      duration: '90 days',
    },
  ];

  return (
    <div className="section" style={{ paddingBottom: '96px' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        {/* BREADCRUMB & HEADER */}
        <div style={{ marginBottom: '40px' }}>
          <Breadcrumb
            parent={{ label: 'Legal & Governance' }}
            current="Cookie Policy"
            className="a-breadcrumb"
          />
          <h1 className="section-title" style={{ marginTop: '16px', marginBottom: '12px' }}>
            Cookie <em>Policy</em>
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
            Last updated: 9 Sept 2026 · swapnilughade.com
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
              1. About this policy
            </h2>
            <p style={{ margin: 0 }}>
              This Cookie Policy explains how swapnilughade.com uses cookies and similar technologies on{' '}
              <strong>swapnilughade.com</strong> (the “Website”). It should be read together with our{' '}
              <Link
                href="/privacy"
                style={{
                  color: 'var(--saffron)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                Privacy Policy
              </Link>
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
              2. What are cookies
            </h2>
            <p style={{ margin: 0 }}>
              Cookies are small text files placed on your device when you visit a website. They help the
              website function, remember your preferences, and understand how it is used. We also use
              similar technologies such as pixels, tags, and local storage, which we refer to
              collectively as “cookies”.
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
              3. The types of cookies we use
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                marginBottom: '28px',
              }}
            >
              <div
                style={{
                  padding: '16px 20px',
                  background: 'var(--bone-warm)',
                  border: '1px solid var(--line-soft)',
                  borderLeft: '4px solid var(--amethyst)',
                }}
              >
                <strong style={{ color: 'var(--amethyst)' }}>Strictly necessary cookies:</strong>{' '}
                Required for the Website to function, such as for security, network management, and
                basic navigation. These are always active and cannot be switched off through our
                consent tool.
              </div>

              <div
                style={{
                  padding: '16px 20px',
                  background: 'var(--bone-warm)',
                  border: '1px solid var(--line-soft)',
                  borderLeft: '4px solid var(--gold)',
                }}
              >
                <strong style={{ color: 'var(--amethyst)' }}>Performance and analytics cookies:</strong>{' '}
                Help us understand how visitors use the Website, so we can improve it, for example
                through analytics tools such as Google Analytics. These run only with your consent.
              </div>

              <div
                style={{
                  padding: '16px 20px',
                  background: 'var(--bone-warm)',
                  border: '1px solid var(--line-soft)',
                  borderLeft: '4px solid var(--sky)',
                }}
              >
                <strong style={{ color: 'var(--amethyst)' }}>Functional cookies:</strong>{' '}
                Remember your preferences and choices to give you a better experience. These run only
                with your consent.
              </div>

              <div
                style={{
                  padding: '16px 20px',
                  background: 'var(--bone-warm)',
                  border: '1px solid var(--line-soft)',
                  borderLeft: '4px solid var(--saffron)',
                }}
              >
                <strong style={{ color: 'var(--amethyst)' }}>Marketing and advertising cookies:</strong>{' '}
                Used to measure and improve the relevance of our marketing, and may be set by us or
                by advertising partners. These run only with your consent.
              </div>
            </div>

            {/* TABLE OF COOKIES */}
            <div
              style={{
                overflowX: 'auto',
                border: '1px solid var(--line)',
                background: 'var(--ivory)',
                marginBottom: '16px',
              }}
            >
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  textAlign: 'left',
                  fontSize: '13.5px',
                  lineHeight: 1.5,
                  minWidth: '640px',
                }}
              >
                <thead>
                  <tr
                    style={{
                      background: 'var(--bone-warm)',
                      borderBottom: '1px solid var(--line)',
                    }}
                  >
                    <th
                      style={{
                        padding: '12px 16px',
                        fontFamily: 'var(--mono)',
                        fontSize: '11.5px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--amethyst)',
                        fontWeight: 600,
                      }}
                    >
                      Cookie
                    </th>
                    <th
                      style={{
                        padding: '12px 16px',
                        fontFamily: 'var(--mono)',
                        fontSize: '11.5px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--amethyst)',
                        fontWeight: 600,
                      }}
                    >
                      Provider
                    </th>
                    <th
                      style={{
                        padding: '12px 16px',
                        fontFamily: 'var(--mono)',
                        fontSize: '11.5px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--amethyst)',
                        fontWeight: 600,
                      }}
                    >
                      Category
                    </th>
                    <th
                      style={{
                        padding: '12px 16px',
                        fontFamily: 'var(--mono)',
                        fontSize: '11.5px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--amethyst)',
                        fontWeight: 600,
                      }}
                    >
                      Purpose
                    </th>
                    <th
                      style={{
                        padding: '12px 16px',
                        fontFamily: 'var(--mono)',
                        fontSize: '11.5px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--amethyst)',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cookieInventory.map((row, index) => (
                    <tr
                      key={row.name}
                      style={{
                        borderBottom:
                          index !== cookieInventory.length - 1
                            ? '1px solid var(--line-soft)'
                            : 'none',
                        background: index % 2 === 1 ? 'rgba(0, 0, 0, 0.015)' : 'transparent',
                      }}
                    >
                      <td
                        style={{
                          padding: '14px 16px',
                          verticalAlign: 'top',
                        }}
                      >
                        <code
                          style={{
                            fontFamily: 'var(--mono)',
                            fontSize: '12px',
                            background: 'rgba(75, 31, 140, 0.08)',
                            color: 'var(--amethyst)',
                            padding: '2px 6px',
                            borderRadius: '3px',
                            display: 'inline-block',
                          }}
                        >
                          {row.name}
                        </code>
                      </td>
                      <td
                        style={{
                          padding: '14px 16px',
                          verticalAlign: 'top',
                          color: 'var(--ink-soft)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {row.provider}
                      </td>
                      <td
                        style={{
                          padding: '14px 16px',
                          verticalAlign: 'top',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--mono)',
                            fontSize: '11px',
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                            color:
                              row.category === 'Strictly Necessary'
                                ? 'var(--amethyst)'
                                : row.category === 'Analytics'
                                ? 'var(--gold)'
                                : 'var(--saffron)',
                            fontWeight: 600,
                          }}
                        >
                          {row.category}
                        </span>
                      </td>
                      <td
                        style={{
                          padding: '14px 16px',
                          verticalAlign: 'top',
                          color: 'var(--ink-soft)',
                          fontSize: '13px',
                        }}
                      >
                        {row.purpose}
                      </td>
                      <td
                        style={{
                          padding: '14px 16px',
                          verticalAlign: 'top',
                          fontFamily: 'var(--mono)',
                          fontSize: '12px',
                          color: 'var(--ash)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {row.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p
              style={{
                fontSize: '14px',
                color: 'var(--ash)',
                fontStyle: 'italic',
                margin: 0,
              }}
            >
              All analytics and marketing cookies are set only when you grant consent. The{' '}
              <code
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '12px',
                  background: 'rgba(75, 31, 140, 0.08)',
                  color: 'var(--amethyst)',
                  padding: '2px 6px',
                  borderRadius: '3px',
                }}
              >
                mw_cookie_consent
              </code>{' '}
              preference is stored in your browser’s localStorage (not as a cookie) and is always
              active.
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
              4. Your consent and choices
            </h2>
            <p style={{ marginBottom: '12px' }}>
              When you first visit the Website, we will ask for your consent to non-essential cookies
              through a consent banner, consistent with the consent principles of the Digital Personal
              Data Protection Act, 2023. You can accept, reject, or customise your choices, and you can
              change your preferences at any time through the Cookie Settings link in our footer.
            </p>
            <p style={{ margin: 0 }}>
              Strictly necessary cookies do not require consent because the Website cannot function
              properly without them.
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
              5. Managing cookies in your browser
            </h2>
            <p style={{ margin: 0 }}>
              You can also control cookies through your browser settings, including blocking or
              deleting them. Please note that disabling certain cookies may affect how the Website
              works. Guidance is usually available in your browser’s help section.
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
              6. Third-party cookies
            </h2>
            <p style={{ margin: 0 }}>
              Some cookies are set by third parties, such as analytics and advertising providers, which
              process data in accordance with their own privacy and cookie policies. We encourage you
              to review those policies.
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
              7. Changes to this policy
            </h2>
            <p style={{ margin: 0 }}>
              We may update this Cookie Policy from time to time. The updated version will be posted
              on this page with a revised “Last updated” date.
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
              8. Contact
            </h2>
            <p style={{ marginBottom: '16px' }}>
              If you have questions about our use of cookies, please contact us:
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
                swapnilughade.com
              </div>
              <div style={{ color: 'var(--ink-soft)', fontSize: '14.5px', lineHeight: 1.6 }}>
                201, Vasant Bahawa, Survey No. 20, Near La Valle Casa, Bavdhan, Pune, Maharashtra,
                India
              </div>
              <div style={{ marginTop: '4px', fontSize: '14.5px' }}>
                <span style={{ color: 'var(--ash)' }}>Email: </span>
                <a
                  href="mailto:swapnil@swapnilughade.com"
                  style={{
                    color: 'var(--saffron)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                    fontWeight: 500,
                  }}
                >
                  swapnil@swapnilughade.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
