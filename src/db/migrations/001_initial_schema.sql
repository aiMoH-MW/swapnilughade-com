-- 1. Contacts & Inquiries
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    purpose TEXT NOT NULL CHECK (purpose IN ('speaking', 'consulting', 'media', 'general')),
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'unread' CHECK (status IN ('unread', 'in_review', 'replied', 'archived')),
    ip_address TEXT,
    user_agent TEXT
);

-- 2. Newsletter Subscribers ("The Letter")
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    email TEXT UNIQUE NOT NULL,
    source TEXT NOT NULL DEFAULT 'website_footer',
    status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('pending_confirmation', 'active', 'unsubscribed')),
    confirmation_token TEXT,
    confirmed_at TIMESTAMPTZ,
    unsubscribed_at TIMESTAMPTZ
);

-- 3. Speaking Inquiries
CREATE TABLE IF NOT EXISTS public.speaking_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    event_name TEXT NOT NULL,
    event_date DATE,
    location_or_virtual TEXT NOT NULL,
    expected_attendees INTEGER,
    topic_interest TEXT,
    contact_name TEXT NOT NULL,
    contact_email TEXT NOT NULL,
    additional_notes TEXT,
    status TEXT NOT NULL DEFAULT 'pending'
);

-- 4. Audit Logs
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    action TEXT NOT NULL,
    entity_type TEXT NOT NULL,
    entity_id TEXT,
    metadata JSONB
);

-- Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.speaking_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
