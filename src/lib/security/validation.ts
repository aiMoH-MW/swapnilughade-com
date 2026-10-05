import { z } from 'zod';
import { supabaseAdmin } from '@/db/supabase';

// ==============================================================================
// 1. Cloudflare Turnstile Verification
// ==============================================================================

export async function verifyTurnstileToken(
  token?: string,
  remoteIp?: string
): Promise<{ success: boolean; error?: string }> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  // If secret key is not configured (e.g., local dev before keys are set), allow with a warning
  if (!secretKey || secretKey.includes('placeholder')) {
    console.warn('[Turnstile] Warning: TURNSTILE_SECRET_KEY is not configured. Permitting request in dev mode.');
    return { success: true };
  }

  if (!token) {
    return { success: false, error: 'CAPTCHA token is missing.' };
  }

  try {
    const formData = new URLSearchParams();
    formData.append('secret', secretKey);
    formData.append('response', token);
    if (remoteIp) {
      formData.append('remoteip', remoteIp);
    }

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const result = await response.json();
    if (result.success) {
      return { success: true };
    }

    const errorCodes = result['error-codes'] ? result['error-codes'].join(', ') : 'Verification failed';
    return { success: false, error: `CAPTCHA verification failed: ${errorCodes}` };
  } catch (err: any) {
    console.error('[Turnstile] Verification error:', err);
    return { success: false, error: 'Turnstile verification service unreachable.' };
  }
}

// ==============================================================================
// 2. Email Normalization & Disposable Email Blocking
// ==============================================================================

const DISPOSABLE_EMAIL_DOMAINS = new Set([
  'mailinator.com',
  'guerrillamail.com',
  '10minutemail.com',
  'tempmail.com',
  'temp-mail.org',
  'throwawaymail.com',
  'yopmail.com',
  'sharklasers.com',
  'trashmail.com',
  'getairmail.com',
  'dispostable.com',
  'fakeinbox.com',
  'mytemp.email',
  'mohmal.com',
  'burnermail.io',
  'trashmail.net',
  'nada.ltd',
  'dropmail.me',
  'crazymailing.com',
]);

/**
 * Normalizes email by trimming, lowercasing, stripping Google/Gmail dots, and removing +tag extensions.
 */
export function normalizeEmail(rawEmail: string): string {
  if (!rawEmail) return '';
  const trimmed = rawEmail.trim().toLowerCase();
  const parts = trimmed.split('@');
  if (parts.length !== 2) return trimmed;

  let [localPart, domain] = parts;

  // Normalize gmail / googlemail domains
  if (domain === 'googlemail.com' || domain === 'gmail.com') {
    domain = 'gmail.com';
    // Remove all dots from the local username part
    localPart = localPart.replace(/\./g, '');
    // Remove +aliases
    localPart = localPart.split('+')[0];
  } else if (domain === 'outlook.com' || domain === 'hotmail.com' || domain === 'icloud.com' || domain === 'proton.me') {
    localPart = localPart.split('+')[0];
  }

  return `${localPart}@${domain}`;
}

export function isDisposableEmail(email: string): boolean {
  if (!email || !email.includes('@')) return false;
  const domain = email.split('@')[1].toLowerCase().trim();
  return DISPOSABLE_EMAIL_DOMAINS.has(domain);
}

/**
 * Checks for excessive dot-padding in raw Gmail address (e.g. p.o.b.ev.uvo.n.ot43@gmail.com)
 */
export function hasExcessiveDots(email: string): boolean {
  if (!email || !email.includes('@')) return false;
  const [localPart, domain] = email.toLowerCase().split('@');
  if (domain === 'gmail.com' || domain === 'googlemail.com') {
    const dotCount = (localPart.match(/\./g) || []).length;
    // 3 or more dots in a single Gmail handle is almost exclusively bot-generated
    if (dotCount >= 3) return true;
  }
  return false;
}

// ==============================================================================
// 3. Gibberish & Bot Heuristics
// ==============================================================================

/**
 * Detects bot-generated random strings (e.g. "qzKkoYXXSmyjRvGIPfynn")
 */
export function isGibberishName(name: string): { isSpam: boolean; reason?: string } {
  if (!name) return { isSpam: false };
  const trimmed = name.trim();

  // 1. Single-word excessively long string without spaces (e.g. >18 letters)
  if (/^[a-zA-Z]{18,}$/.test(trimmed)) {
    return { isSpam: true, reason: 'Name is a continuous unspaced random string (>18 chars)' };
  }

  // 2. High consonant cluster (5 or more consecutive consonants)
  if (/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]{5,}/.test(trimmed)) {
    // Exceptions for common surnames/names can be added if needed, but 5+ consecutive consonants is a classic bot fingerprint
    return { isSpam: true, reason: 'Name contains abnormal consonant clusters' };
  }

  // 3. Mixed-case random entropy (e.g., qzKkoYXXSmyj...)
  if (trimmed.length >= 10 && !trimmed.includes(' ')) {
    let caseSwitches = 0;
    for (let i = 1; i < trimmed.length; i++) {
      const prevIsUpper = trimmed[i - 1] >= 'A' && trimmed[i - 1] <= 'Z';
      const currIsUpper = trimmed[i] >= 'A' && trimmed[i] <= 'Z';
      if (prevIsUpper !== currIsUpper) caseSwitches++;
    }
    if (caseSwitches >= 5) {
      return { isSpam: true, reason: 'Name exhibits random alternating casing pattern' };
    }
  }

  // 4. URL or spam keywords in name field
  if (/https?:\/\/|www\.|\.com|\.ru|\.xyz|seo|crypto|viagra/i.test(trimmed)) {
    return { isSpam: true, reason: 'Name contains promotional link or spam keyword' };
  }

  return { isSpam: false };
}

// ==============================================================================
// 4. Time Check (Speed Detection)
// ==============================================================================

export function isValidTimeDelta(renderedAtStr?: string | number, minSeconds: number = 3): {
  isValid: boolean;
  elapsedSeconds: number;
} {
  if (!renderedAtStr) {
    // If no render timestamp was provided, treat as suspiciously fast
    return { isValid: false, elapsedSeconds: 0 };
  }

  const renderedTime = typeof renderedAtStr === 'string' ? parseInt(renderedAtStr, 10) : renderedAtStr;
  if (isNaN(renderedTime)) {
    return { isValid: false, elapsedSeconds: 0 };
  }

  const now = Date.now();
  const elapsedMs = now - renderedTime;
  const elapsedSeconds = elapsedMs / 1000;

  // Less than minSeconds or from the future (> 10s into future due to clock skew)
  if (elapsedSeconds < minSeconds || elapsedSeconds < 0) {
    return { isValid: false, elapsedSeconds };
  }

  return { isValid: true, elapsedSeconds };
}

// ==============================================================================
// 5. Rate Limiting (Max 3 submissions per IP per hour per form)
// ==============================================================================

// In-memory fallback for local environments
const localRateLimitMap = new Map<string, number[]>();

export async function checkRateLimit(
  ip: string,
  formType: string,
  maxPerHour: number = 3
): Promise<{ allowed: boolean; remaining: number }> {
  const safeIp = ip || '127.0.0.1';
  const now = Date.now();
  const oneHourAgo = new Date(now - 60 * 60 * 1000).toISOString();

  // 1. Try Supabase rate_limits table
  try {
    const { data, error } = await supabaseAdmin
      .from('rate_limits')
      .select('id')
      .eq('ip_address', safeIp)
      .eq('form_type', formType)
      .gte('created_at', oneHourAgo);

    if (!error && Array.isArray(data)) {
      const count = data.length;
      if (count >= maxPerHour) {
        return { allowed: false, remaining: 0 };
      }

      // Record this attempt
      await supabaseAdmin.from('rate_limits').insert({
        ip_address: safeIp,
        form_type: formType,
      });

      return { allowed: true, remaining: maxPerHour - (count + 1) };
    }
  } catch (err) {
    console.warn('[RateLimit] Supabase rate limit lookup skipped, using in-memory store:', err);
  }

  // 2. In-memory fallback
  const key = `${safeIp}:${formType}`;
  const history = localRateLimitMap.get(key) || [];
  const recentHistory = history.filter((timestamp) => timestamp > now - 60 * 60 * 1000);

  if (recentHistory.length >= maxPerHour) {
    return { allowed: false, remaining: 0 };
  }

  recentHistory.push(now);
  localRateLimitMap.set(key, recentHistory);

  return { allowed: true, remaining: maxPerHour - recentHistory.length };
}

export function extractClientIp(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return headers.get('x-real-ip') || '127.0.0.1';
}

// ==============================================================================
// 6. Zod Validation Schemas
// ==============================================================================

export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address').max(150, 'Email is too long'),
  source: z.string().max(100).optional().default('website'),
  website_url_hp: z.string().max(200).optional(), // Honeypot
  token: z.string().optional(), // Turnstile CAPTCHA token
  _rendered_at: z.union([z.string(), z.number()]).optional(), // Form mount timestamp
});

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name cannot exceed 100 characters'),
  email: z.string().email('Invalid email address').max(150, 'Email is too long'),
  purpose: z.string().max(50).optional().default('general'),
  message: z.string().min(5, 'Message must be at least 5 characters').max(3000, 'Message cannot exceed 3000 characters'),
  website_url_hp: z.string().max(200).optional(), // Honeypot
  token: z.string().optional(), // Turnstile CAPTCHA token
  _rendered_at: z.union([z.string(), z.number()]).optional(),
});

export const speakingSchema = z.object({
  contactName: z.string().min(2, 'Contact name must be at least 2 characters').max(100, 'Name cannot exceed 100 characters'),
  contactEmail: z.string().email('Invalid email address').max(150, 'Email is too long'),
  eventName: z.string().max(200).optional().default('Speaking Engagement'),
  eventDate: z.string().max(50).optional(),
  locationOrVirtual: z.string().max(150).optional().default('TBD'),
  expectedAttendees: z.number().int().positive().max(1000000).optional(),
  topicInterest: z.string().max(200).optional().default('Keynotes & Briefings'),
  additionalNotes: z.string().max(3000).optional(),
  website_url_hp: z.string().max(200).optional(), // Honeypot
  token: z.string().optional(), // Turnstile CAPTCHA token
  _rendered_at: z.union([z.string(), z.number()]).optional(),
});
