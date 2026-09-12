'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignatureSvg } from '@/components/ui/SignatureSvg';

// Expiration: Monday, September 14, 2026, 11:11:00 AM IST (UTC+5:30)
const BETA_EXPIRY_TIMESTAMP = new Date('2026-09-14T11:11:00+05:30').getTime();

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showBeta, setShowBeta] = useState(false);

  useEffect(() => {
    setShowBeta(Date.now() < BETA_EXPIRY_TIMESTAMP);
  }, []);

  // Close mobile drawer on route change or escape key
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Now', href: '/now' },
    { label: 'Ventures', href: '/ventures' },
    { label: 'Books', href: '/books' },
    { label: 'Writing', href: '/writing' },
    { label: 'Speaking', href: '/speaking' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className="nav" role="navigation" aria-label="Main Navigation">
        <div className="container nav-inner">
          <Link href="/" className="brand" aria-label="Swapnil Ughade · Founder, Operator, Investor, Author">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="brand-logo" aria-hidden="true">
                <SignatureSvg />
              </span>
              {showBeta && (
                <span className="brand-beta-badge" aria-label="Beta">
                  Beta
                </span>
              )}
            </div>
            <span className="brand-tagline">Founder · Operator · Investor · Author</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-menu">
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive ? 'active' : ''}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="nav-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                CLOSE
              </span>
            ) : (
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
                MENU
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 998,
            backgroundColor: 'rgba(7, 11, 20, 0.65)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <div
            className="mobile-nav-drawer"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              width: '85%',
              maxWidth: '340px',
              height: '100%',
              backgroundColor: 'var(--bg-indigo-deep)',
              color: 'var(--bone)',
              padding: '24px 28px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '-8px 0 32px rgba(0, 0, 0, 0.5)',
              overflowY: 'auto',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '18px', color: 'var(--bone)' }}>
                  Swapnil Ughade
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  style={{ background: 'none', border: 'none', color: 'var(--gold-light)', fontSize: '18px', cursor: 'pointer', padding: '6px' }}
                  aria-label="Close navigation"
                >
                  ✕
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', marginTop: '24px', gap: '4px' }}>
                {links.map((link) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        padding: '12px 14px',
                        fontSize: '16px',
                        fontFamily: 'var(--sans)',
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? 'var(--gold-light)' : 'rgba(245, 239, 227, 0.85)',
                        backgroundColor: isActive ? 'rgba(200, 155, 60, 0.15)' : 'transparent',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'all 150ms ease',
                      }}
                    >
                      <span>{link.label}</span>
                      {isActive && <span style={{ color: 'var(--gold-light)', fontSize: '12px' }}>●</span>}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
