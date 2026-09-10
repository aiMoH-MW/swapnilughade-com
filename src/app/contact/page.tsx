'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', purpose: 'speaking', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMsg('Thank you. Your message has been dispatched to Swapnil Ughade.');
        setForm({ name: '', email: '', purpose: 'speaking', message: '' });
      } else {
        setStatus('error');
        setMsg(data.error || 'Failed to submit inquiry.');
      }
    } catch {
      setStatus('error');
      setMsg('An error occurred while transmitting your message.');
    }
  }

  return (
    <article className="section">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="section-head">
          <div className="hero-eyebrow">Direct Correspondence</div>
          <h1 className="section-title">Contact &amp; <em>Inquiries</em></h1>
          <p className="section-sub">For speaking engagements, platform advisory consultation, book rights, or press inquiries.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '40px', marginTop: '32px' }}>
          <div style={{ padding: '32px', background: 'var(--bone-warm)', border: '1px solid var(--line)' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: '8px', fontWeight: 500 }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  style={{ width: '100%', padding: '12px 14px', background: 'var(--bone)', border: '1px solid var(--line)', color: 'var(--ink)', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: '8px', fontWeight: 500 }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  style={{ width: '100%', padding: '12px 14px', background: 'var(--bone)', border: '1px solid var(--line)', color: 'var(--ink)', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: '8px', fontWeight: 500 }}>
                  Purpose of Inquiry *
                </label>
                <select
                  value={form.purpose}
                  onChange={(e) => setForm({ ...form, purpose: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', background: 'var(--bone)', border: '1px solid var(--line)', color: 'var(--ink)', fontSize: '14px' }}
                >
                  <option value="speaking">Keynote / Speaking Engagement</option>
                  <option value="consulting">Platform Advisory Consultation</option>
                  <option value="media">Press / Book Interview</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: '8px', fontWeight: 500 }}>
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Provide context on your event, platform, or project..."
                  style={{ width: '100%', padding: '12px 14px', background: 'var(--bone)', border: '1px solid var(--line)', color: 'var(--ink)', fontSize: '14px' }}
                />
              </div>

              <button type="submit" disabled={status === 'loading'} className="btn primary" style={{ justifyContent: 'center', width: '100%' }}>
                {status === 'loading' ? 'Transmitting...' : 'Send Correspondence →'}
              </button>

              {status === 'success' && <p style={{ color: 'var(--rosewood)', fontSize: '14px', fontWeight: 500 }}>{msg}</p>}
              {status === 'error' && <p style={{ color: 'red', fontSize: '14px' }}>{msg}</p>}
            </form>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ padding: '24px', background: 'var(--bone-warm)', border: '1px solid var(--line)' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '8px' }}>
                Office Location
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '20px', color: 'var(--ink)', fontWeight: 500 }}>
                MagicWorks IT Solutions Pvt Ltd
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--ink-mute)', marginTop: '6px', lineHeight: '1.5' }}>
                Office 201, Vasant Bahawa, Bavdhan, Pune, Maharashtra 411021, India.
              </p>
            </div>

            <div style={{ padding: '24px', background: 'var(--bone-warm)', border: '1px solid var(--line)' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '8px' }}>
                Direct Channels
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', marginTop: '12px' }}>
                <li><a href="https://www.linkedin.com/in/swapnilughade" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink-soft)' }}>LinkedIn ↗</a></li>
                <li><a href="https://www.amazon.in/s?k=swapnil+ughade&i=digital-text&crid=3QC7D12GDGL79&sprefix=%2Cdigital-text%2C221&ref=nb_sb_ss_recent_1_0_recent" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink-soft)' }}>Amazon Author ↗</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
