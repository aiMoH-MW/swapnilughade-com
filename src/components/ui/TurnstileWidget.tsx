'use client';

import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement | string,
        params: {
          sitekey: string;
          theme?: 'light' | 'dark' | 'auto';
          callback?: (token: string) => void;
          'error-callback'?: (error: any) => void;
          'expired-callback'?: () => void;
          size?: 'normal' | 'compact' | 'flexible' | 'invisible';
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onError?: (error: string) => void;
  theme?: 'light' | 'dark' | 'auto';
  size?: 'normal' | 'compact' | 'flexible' | 'invisible';
  className?: string;
}

export function TurnstileWidget({
  onVerify,
  onError,
  theme = 'auto',
  size = 'flexible',
  className = '',
}: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';

  useEffect(() => {
    // If no site key is provided (e.g. dev environment before keys set), bypass gracefully
    if (!siteKey || siteKey.includes('placeholder')) {
      onVerify('dev-mock-turnstile-token');
      return;
    }

    let isMounted = true;

    function initTurnstile() {
      if (!window.turnstile || !containerRef.current || widgetIdRef.current) return;
      try {
        const id = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme,
          size,
          callback: (token: string) => {
            if (isMounted) onVerify(token);
          },
          'error-callback': (err: any) => {
            if (isMounted && onError) onError(typeof err === 'string' ? err : 'Turnstile error');
          },
          'expired-callback': () => {
            if (isMounted) onVerify('');
          },
        });
        widgetIdRef.current = id;
        setIsLoaded(true);
      } catch (err) {
        console.warn('[Turnstile] Render warning:', err);
      }
    }

    if (window.turnstile) {
      initTurnstile();
    } else {
      const existingScript = document.getElementById('cloudflare-turnstile-script');
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'cloudflare-turnstile-script';
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
        script.async = true;
        script.defer = true;
        script.onload = () => {
          if (isMounted) initTurnstile();
        };
        document.head.appendChild(script);
      } else {
        existingScript.addEventListener('load', initTurnstile);
      }
    }

    return () => {
      isMounted = false;
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        } catch {
          // ignore cleanup errors
        }
      }
    };
  }, [siteKey, theme, size, onVerify, onError]);

  if (!siteKey || siteKey.includes('placeholder')) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`turnstile-container ${className}`}
      style={{ minHeight: size === 'invisible' ? '0' : '65px', margin: '8px 0' }}
    />
  );
}
