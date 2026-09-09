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
        setErrorMsg(data.error || 'Subscription failed. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Connection error. Please try again later.');
    }
  }

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '16px', background: 'rgba(200, 155, 60, 0.15)', border: '1px solid var(--gold-light)', color: 'var(--ivory)' }}>
        <p style={{ fontFamily: 'var(--serif)', fontSize: '18px', color: 'var(--gold-light)', margin: 0 }}>
          ✓ Thank you for subscribing.
        </p>
        <p style={{ fontSize: '13px', color: 'rgba(245, 239, 227, 0.8)', marginTop: '4px' }}>
          Your address has been recorded. Look out for the next issue on Sunday.
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
        <div style={{ color: '#F43F5E', fontSize: '12px', fontFamily: 'var(--mono)', marginTop: '4px', textAlign: 'left' }}>
          {errorMsg}
        </div>
      )}
    </form>
  );
}
