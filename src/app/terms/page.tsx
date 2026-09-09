import Link from 'next/link';

export const metadata = {
  title: 'Terms of Use · Swapnil Ughade',
  description: 'Terms of Use for swapnilughade.com',
};

export default function TermsPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: '780px' }}>
        <div className="section-head" style={{ borderBottom: '1px solid var(--line)', paddingBottom: '32px', marginBottom: '48px' }}>
          <div className="hero-eyebrow" style={{ marginBottom: '16px' }}>Legal &amp; Governance</div>
          <h1 className="section-title" style={{ marginBottom: 0 }}>
            Terms of <em>Use</em>
          </h1>
        </div>

        <div style={{ padding: '36px', background: 'var(--bone-warm)', border: '1px solid var(--line)', borderLeft: '4px solid var(--gold)' }}>
          <p style={{ fontSize: '15px', color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: 0 }}>
            These terms of use are currently being updated. The complete terms and conditions framework will be published here shortly. For immediate inquiries, please reach out via the <Link href="/contact" style={{ color: 'var(--rosewood)', textDecoration: 'underline' }}>contact page</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
