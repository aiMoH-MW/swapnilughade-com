import fs from 'fs';
import path from 'path';
import { supabaseAdmin } from '@/db/supabase';

export interface NewsletterSubscriber {
  id: string;
  email: string;
  source: string;
  createdAt: string;
  status: 'active' | 'unsubscribed';
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  purpose: string;
  message: string;
  createdAt: string;
  status: 'new' | 'read' | 'replied';
}

interface DatabaseSchema {
  newsletter: NewsletterSubscriber[];
  contacts: ContactInquiry[];
}

const DB_FILE = path.join(process.cwd(), 'src', 'data', 'submissions.json');

const isSupabaseConfigured = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  return !!url && !!key && !url.includes('placeholder') && !key.includes('placeholder');
};

function ensureDbFile(): DatabaseSchema {
  try {
    if (!fs.existsSync(DB_FILE)) {
      const initial: DatabaseSchema = { newsletter: [], contacts: [] };
      const dir = path.dirname(DB_FILE);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(DB_FILE, JSON.stringify(initial, null, 2), 'utf8');
      return initial;
    }
    const content = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(content);
  } catch (err) {
    console.error('Error reading submissions DB file:', err);
    return { newsletter: [], contacts: [] };
  }
}

function writeDbFile(data: DatabaseSchema): boolean {
  try {
    const dir = path.dirname(DB_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error writing submissions DB file:', err);
    return false;
  }
}

// ============ NEWSLETTER ============

export async function getNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
  if (isSupabaseConfigured()) {
    try {
      const { data, error } = await supabaseAdmin
        .from('newsletter_subscribers')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        return data.map((d) => ({
          id: d.id?.toString() || d.email,
          email: d.email,
          source: d.source || 'website',
          createdAt: d.created_at || d.createdAt || new Date().toISOString(),
          status: d.status || 'active',
        }));
      }
    } catch (err) {
      console.warn('Supabase fetch failed, falling back to local file:', err);
    }
  }

  const db = ensureDbFile();
  return db.newsletter || [];
}

export async function addNewsletterSubscriber(email: string, source: string = 'website'): Promise<NewsletterSubscriber> {
  const db = ensureDbFile();
  const normalizedEmail = email.toLowerCase().trim();

  const newEntry: NewsletterSubscriber = {
    id: `nl-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    email: normalizedEmail,
    source,
    createdAt: new Date().toISOString(),
    status: 'active',
  };

  // 1. Local storage
  const existing = db.newsletter.find((n) => n.email.toLowerCase() === normalizedEmail);
  if (!existing) {
    db.newsletter.unshift(newEntry);
    writeDbFile(db);
  }

  // 2. Supabase Cloud DB
  if (isSupabaseConfigured()) {
    try {
      await supabaseAdmin.from('newsletter_subscribers').upsert(
        {
          email: normalizedEmail,
          source,
          status: 'active',
          created_at: newEntry.createdAt,
        },
        { onConflict: 'email' }
      );
    } catch (err) {
      console.warn('Supabase insert warning:', err);
    }
  }

  return existing || newEntry;
}

export async function deleteNewsletterSubscriber(id: string): Promise<boolean> {
  let success = false;

  if (isSupabaseConfigured()) {
    try {
      await supabaseAdmin
        .from('newsletter_subscribers')
        .delete()
        .or(`id.eq.${id},email.eq.${id}`);
      success = true;
    } catch (err) {
      console.warn('Supabase delete warning:', err);
    }
  }

  const db = ensureDbFile();
  const filtered = db.newsletter.filter((n) => n.id !== id && n.email !== id);
  if (filtered.length !== db.newsletter.length) {
    db.newsletter = filtered;
    writeDbFile(db);
    success = true;
  }

  return success;
}

// ============ CONTACTS ============

export async function getContactInquiries(): Promise<ContactInquiry[]> {
  if (isSupabaseConfigured()) {
    try {
      const { data, error } = await supabaseAdmin
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        return data.map((d) => ({
          id: d.id?.toString(),
          name: d.name,
          email: d.email,
          purpose: d.purpose || 'General Inquiry',
          message: d.message,
          createdAt: d.created_at || d.createdAt || new Date().toISOString(),
          status: d.status || 'new',
        }));
      }
    } catch (err) {
      console.warn('Supabase contact fetch warning:', err);
    }
  }

  const db = ensureDbFile();
  return db.contacts || [];
}

export async function addContactInquiry(data: {
  name: string;
  email: string;
  purpose?: string;
  message: string;
}): Promise<ContactInquiry> {
  const db = ensureDbFile();
  const newEntry: ContactInquiry = {
    id: `cnt-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    name: data.name.trim(),
    email: data.email.toLowerCase().trim(),
    purpose: data.purpose || 'General Inquiry',
    message: data.message.trim(),
    createdAt: new Date().toISOString(),
    status: 'new',
  };

  // 1. Local backup
  db.contacts.unshift(newEntry);
  writeDbFile(db);

  // 2. Supabase Cloud DB
  if (isSupabaseConfigured()) {
    try {
      await supabaseAdmin.from('contacts').insert({
        name: newEntry.name,
        email: newEntry.email,
        purpose: newEntry.purpose,
        message: newEntry.message,
        status: newEntry.status,
        created_at: newEntry.createdAt,
      });
    } catch (err) {
      console.warn('Supabase contact insert warning:', err);
    }
  }

  return newEntry;
}

export async function updateContactStatus(id: string, status: 'new' | 'read' | 'replied'): Promise<boolean> {
  let success = false;

  if (isSupabaseConfigured()) {
    try {
      await supabaseAdmin.from('contacts').update({ status }).eq('id', id);
      success = true;
    } catch (err) {
      console.warn('Supabase update status warning:', err);
    }
  }

  const db = ensureDbFile();
  const item = db.contacts.find((c) => c.id === id);
  if (item) {
    item.status = status;
    writeDbFile(db);
    success = true;
  }

  return success;
}

export async function deleteContactInquiry(id: string): Promise<boolean> {
  let success = false;

  if (isSupabaseConfigured()) {
    try {
      await supabaseAdmin.from('contacts').delete().eq('id', id);
      success = true;
    } catch (err) {
      console.warn('Supabase contact delete warning:', err);
    }
  }

  const db = ensureDbFile();
  const filtered = db.contacts.filter((c) => c.id !== id);
  if (filtered.length !== db.contacts.length) {
    db.contacts = filtered;
    writeDbFile(db);
    success = true;
  }

  return success;
}
