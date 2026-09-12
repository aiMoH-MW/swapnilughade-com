'use client';

import React, { useState } from 'react';

interface Props {
  source?: string;
  buttonLabel?: string;
}

export function NewsletterForm({ source = 'website', buttonLabel = 'Subscribe to The Letter' }: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div
        className="newsletter-success"
        style={{
          maxWidth: '400px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '20px 24px',
          background: 'rgba(22, 163, 74, 0.12)',
          border: '1px solid rgba(22, 163, 74, 0.45)',
          borderRadius: '2px',
        }}
      >
        <p style={{ fontFamily: 'var(--serif)', fontSize: '20px', color: '#16A34A', margin: 0, fontWeight: 500 }}>
          ✓ Thanks for subscribing!
        </p>
        <p style={{ fontFamily: 'var(--sans)', fontSize: '14px', color: 'rgba(245, 239, 227, 0.85)', marginTop: '8px', marginBottom: 0, lineHeight: 1.5 }}>
          You&apos;ll hear from us soon.
        </p>
      </div>
    );
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <label htmlFor={`nl-email-${source}`}>Email</label>
      <input
        id={`nl-email-${source}`}
        name="email"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === 'loading'}
        required
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn gold"
        style={{ justifyContent: 'center' }}
      >
        {status === 'loading' ? 'Subscribing...' : buttonLabel}
      </button>
      {status === 'error' && (
        <div style={{ color: '#F87171', fontSize: '13px', fontFamily: 'var(--sans)', marginTop: '6px', textAlign: 'center' }}>
          {errorMsg}
        </div>
      )}
    </form>
  );
}
