-- ==============================================================================
-- Supabase Schema for Swapnil Ughade Website (swapnilughade.com)
-- ==============================================================================

-- 1. Contacts & Inquiries
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    purpose TEXT NOT NULL DEFAULT 'general',
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
    ip_address TEXT,
    user_agent TEXT
);

-- 2. Newsletter Subscribers ("The Letter")
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    email TEXT UNIQUE NOT NULL,
    source TEXT NOT NULL DEFAULT 'website',
    status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'pending_confirmation')),
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

-- ==============================================================================
-- Row Level Security (RLS)
-- ==============================================================================

ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.speaking_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Allow public to insert inquiries & subscriptions
CREATE POLICY "Allow public insert to contacts"
    ON public.contacts FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Allow public insert to newsletter_subscribers"
    ON public.newsletter_subscribers FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Allow public insert to speaking_inquiries"
    ON public.speaking_inquiries FOR INSERT
    WITH CHECK (true);

-- Allow service_role and authenticated users full access for admin dashboards
CREATE POLICY "Service role full access to contacts"
    ON public.contacts FOR ALL
    USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');

CREATE POLICY "Service role full access to newsletter_subscribers"
    ON public.newsletter_subscribers FOR ALL
    USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');

CREATE POLICY "Service role full access to speaking_inquiries"
    ON public.speaking_inquiries FOR ALL
    USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');

CREATE POLICY "Service role full access to audit_logs"
    ON public.audit_logs FOR ALL
    USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');

-- ==============================================================================
-- Performance Indexes
-- ==============================================================================

CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON public.contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON public.contacts(status);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON public.newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_status ON public.newsletter_subscribers(status);
CREATE INDEX IF NOT EXISTS idx_speaking_created_at ON public.speaking_inquiries(created_at DESC);
