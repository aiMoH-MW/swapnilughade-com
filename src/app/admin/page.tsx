'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

interface NewsletterSubscriber {
  id: string;
  email: string;
  source: string;
  createdAt: string;
  status: 'active' | 'unsubscribed';
  isSpam?: boolean;
  spamReason?: string | null;
}

interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  purpose: string;
  message: string;
  createdAt: string;
  status: 'new' | 'read' | 'replied';
  isSpam?: boolean;
  spamReason?: string | null;
}

interface SpeakingInquiry {
  id: string;
  eventName: string;
  eventDate?: string;
  locationOrVirtual: string;
  expectedAttendees?: number;
  topicInterest?: string;
  contactName: string;
  contactEmail: string;
  additionalNotes?: string;
  createdAt: string;
  status: string;
  isSpam?: boolean;
  spamReason?: string | null;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'newsletter' | 'contacts' | 'speaking'>('newsletter');
  const [spamView, setSpamView] = useState<'clean' | 'spam' | 'all'>('clean');
  const [newsletter, setNewsletter] = useState<NewsletterSubscriber[]>([]);
  const [contacts, setContacts] = useState<ContactInquiry[]>([]);
  const [speaking, setSpeaking] = useState<SpeakingInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');
  const [selectedContact, setSelectedContact] = useState<ContactInquiry | null>(null);
  const [selectedSpeaking, setSelectedSpeaking] = useState<SpeakingInquiry | null>(null);

  // Simple authentication state
  const [isAuth, setIsAuth] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    try {
      const res = await fetch('/api/admin/auth');
      const data = await res.json();
      if (data.authenticated) {
        setIsAuth(true);
        fetchData();
      } else {
        const storedAuth = typeof window !== 'undefined' ? localStorage.getItem('swapnil_admin_auth') : null;
        if (storedAuth === 'true') {
          setIsAuth(true);
          fetchData();
        } else {
          setLoading(false);
        }
      }
    } catch {
      setLoading(false);
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setAuthError('');
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput }),
      });
      if (res.ok) {
        setIsAuth(true);
        if (typeof window !== 'undefined') localStorage.setItem('swapnil_admin_auth', 'true');
        fetchData();
      } else {
        setAuthError('Invalid password. Please try again.');
      }
    } catch {
      setAuthError('Connection error.');
    }
  }

  function handleLogout() {
    setIsAuth(false);
    if (typeof window !== 'undefined') localStorage.removeItem('swapnil_admin_auth');
    fetch('/api/admin/auth', { method: 'DELETE' });
  }

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/data');
      if (res.ok) {
        const data = await res.json();
        setNewsletter(data.newsletter || []);
        setContacts(data.contacts || []);
        setSpeaking(data.speaking || []);
      }
    } catch (err) {
      console.error('Failed to load admin data:', err);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(type: 'newsletter' | 'contact' | 'speaking', id: string) {
    if (!confirm(`Are you sure you want to delete this ${type} record?`)) return;
    try {
      const res = await fetch(`/api/admin/data?type=${type}&id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        if (type === 'newsletter') {
          setNewsletter((prev) => prev.filter((n) => n.id !== id));
        } else if (type === 'contact') {
          setContacts((prev) => prev.filter((c) => c.id !== id));
        } else if (type === 'speaking') {
          setSpeaking((prev) => prev.filter((s) => s.id !== id));
        }
        setSelectedIds((prev) => prev.filter((item) => item !== id));
      }
    } catch (err) {
      alert('Delete failed');
    }
  }

  async function handleBulkDelete() {
    if (selectedIds.length === 0) return;
    const count = selectedIds.length;
    if (!confirm(`Are you sure you want to permanently delete all ${count} selected records?`)) return;

    try {
      const type = activeTab === 'newsletter' ? 'newsletter' : activeTab === 'contacts' ? 'contact' : 'speaking';
      const res = await fetch(`/api/admin/data?type=${type}&ids=${selectedIds.join(',')}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        if (activeTab === 'newsletter') {
          setNewsletter((prev) => prev.filter((n) => !selectedIds.includes(n.id)));
        } else if (activeTab === 'contacts') {
          setContacts((prev) => prev.filter((c) => !selectedIds.includes(c.id)));
        } else if (activeTab === 'speaking') {
          setSpeaking((prev) => prev.filter((s) => !selectedIds.includes(s.id)));
        }
        setSelectedIds([]);
      }
    } catch (err) {
      alert('Bulk delete failed.');
    }
  }

  async function handleToggleSpam(type: 'newsletter' | 'contact' | 'speaking', id: string, currentSpamState: boolean) {
    const nextSpam = !currentSpamState;
    try {
      const res = await fetch('/api/admin/data', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type,
          id,
          isSpam: nextSpam,
          spamReason: nextSpam ? 'Marked as spam manually by admin' : null,
          action: 'toggle_spam',
        }),
      });
      if (res.ok) {
        if (type === 'newsletter') {
          setNewsletter((prev) =>
            prev.map((n) => (n.id === id ? { ...n, isSpam: nextSpam, spamReason: nextSpam ? 'Manual admin flag' : null } : n))
          );
        } else if (type === 'contact') {
          setContacts((prev) =>
            prev.map((c) => (c.id === id ? { ...c, isSpam: nextSpam, spamReason: nextSpam ? 'Manual admin flag' : null } : c))
          );
          if (selectedContact && selectedContact.id === id) {
            setSelectedContact({ ...selectedContact, isSpam: nextSpam, spamReason: nextSpam ? 'Manual admin flag' : null });
          }
        } else if (type === 'speaking') {
          setSpeaking((prev) =>
            prev.map((s) => (s.id === id ? { ...s, isSpam: nextSpam, spamReason: nextSpam ? 'Manual admin flag' : null } : s))
          );
          if (selectedSpeaking && selectedSpeaking.id === id) {
            setSelectedSpeaking({ ...selectedSpeaking, isSpam: nextSpam, spamReason: nextSpam ? 'Manual admin flag' : null });
          }
        }
      }
    } catch (err) {
      console.error('Toggle spam failed:', err);
    }
  }

  async function handleStatusChange(id: string, status: 'new' | 'read' | 'replied') {
    try {
      const res = await fetch('/api/admin/data', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', id, status }),
      });
      if (res.ok) {
        setContacts((prev) =>
          prev.map((c) => (c.id === id ? { ...c, status } : c))
        );
        if (selectedContact && selectedContact.id === id) {
          setSelectedContact({ ...selectedContact, status });
        }
      }
    } catch (err) {
      console.error('Status update failed:', err);
    }
  }

  async function handleSpeakingStatusChange(id: string, status: string) {
    try {
      const res = await fetch('/api/admin/data', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'speaking', id, status }),
      });
      if (res.ok) {
        setSpeaking((prev) =>
          prev.map((s) => (s.id === id ? { ...s, status } : s))
        );
        if (selectedSpeaking && selectedSpeaking.id === id) {
          setSelectedSpeaking({ ...selectedSpeaking, status });
        }
      }
    } catch (err) {
      console.error('Speaking status update failed:', err);
    }
  }

  // Format Date (e.g. "25 Aug 2026")
  function formatDate(isoStr?: string) {
    if (!isoStr) return '—';
    try {
      const d = new Date(isoStr);
      if (isNaN(d.getTime())) return isoStr;
      const day = d.getDate();
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const month = months[d.getMonth()];
      const year = d.getFullYear();
      return `${day} ${month} ${year}`;
    } catch {
      return isoStr;
    }
  }

  // Filtered Newsletter list
  const filteredNewsletter = useMemo(() => {
    let list = [...newsletter];
    if (spamView === 'clean') {
      list = list.filter((n) => !n.isSpam);
    } else if (spamView === 'spam') {
      list = list.filter((n) => !!n.isSpam);
    }

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      list = list.filter((n) => n.email.toLowerCase().includes(q) || n.source.toLowerCase().includes(q) || (n.spamReason && n.spamReason.toLowerCase().includes(q)));
    }
    if (fromDate) {
      const f = new Date(fromDate).getTime();
      list = list.filter((n) => new Date(n.createdAt).getTime() >= f);
    }
    if (toDate) {
      const t = new Date(toDate).getTime() + 86400000;
      list = list.filter((n) => new Date(n.createdAt).getTime() <= t);
    }
    list.sort((a, b) => {
      const timeA = new Date(a.createdAt).getTime();
      const timeB = new Date(b.createdAt).getTime();
      return sortOrder === 'desc' ? timeB - timeA : timeA - timeB;
    });
    return list;
  }, [newsletter, spamView, searchTerm, fromDate, toDate, sortOrder]);

  // Filtered Contacts list
  const filteredContacts = useMemo(() => {
    let list = [...contacts];
    if (spamView === 'clean') {
      list = list.filter((c) => !c.isSpam);
    } else if (spamView === 'spam') {
      list = list.filter((c) => !!c.isSpam);
    }

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.email.toLowerCase().includes(q) ||
          c.purpose.toLowerCase().includes(q) ||
          c.message.toLowerCase().includes(q) ||
          (c.spamReason && c.spamReason.toLowerCase().includes(q))
      );
    }
    if (fromDate) {
      const f = new Date(fromDate).getTime();
      list = list.filter((c) => new Date(c.createdAt).getTime() >= f);
    }
    if (toDate) {
      const t = new Date(toDate).getTime() + 86400000;
      list = list.filter((c) => new Date(c.createdAt).getTime() <= t);
    }
    list.sort((a, b) => {
      const timeA = new Date(a.createdAt).getTime();
      const timeB = new Date(b.createdAt).getTime();
      return sortOrder === 'desc' ? timeB - timeA : timeA - timeB;
    });
    return list;
  }, [contacts, spamView, searchTerm, fromDate, toDate, sortOrder]);

  // Filtered Speaking list
  const filteredSpeaking = useMemo(() => {
    let list = [...speaking];
    if (spamView === 'clean') {
      list = list.filter((s) => !s.isSpam);
    } else if (spamView === 'spam') {
      list = list.filter((s) => !!s.isSpam);
    }

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      list = list.filter(
        (s) =>
          (s.contactName && s.contactName.toLowerCase().includes(q)) ||
          (s.contactEmail && s.contactEmail.toLowerCase().includes(q)) ||
          (s.eventName && s.eventName.toLowerCase().includes(q)) ||
          (s.topicInterest && s.topicInterest.toLowerCase().includes(q)) ||
          (s.locationOrVirtual && s.locationOrVirtual.toLowerCase().includes(q)) ||
          (s.additionalNotes && s.additionalNotes.toLowerCase().includes(q)) ||
          (s.spamReason && s.spamReason.toLowerCase().includes(q))
      );
    }
    if (fromDate) {
      const f = new Date(fromDate).getTime();
      list = list.filter((s) => new Date(s.createdAt).getTime() >= f);
    }
    if (toDate) {
      const t = new Date(toDate).getTime() + 86400000;
      list = list.filter((s) => new Date(s.createdAt).getTime() <= t);
    }
    list.sort((a, b) => {
      const timeA = new Date(a.createdAt).getTime();
      const timeB = new Date(b.createdAt).getTime();
      return sortOrder === 'desc' ? timeB - timeA : timeA - timeB;
    });
    return list;
  }, [speaking, spamView, searchTerm, fromDate, toDate, sortOrder]);

  // Clean lead counts for sidebar badges (Excludes Spam)
  const cleanNewsletterCount = useMemo(() => newsletter.filter((n) => !n.isSpam).length, [newsletter]);
  const cleanContactsNewCount = useMemo(() => contacts.filter((c) => !c.isSpam && c.status === 'new').length, [contacts]);
  const cleanSpeakingPendingCount = useMemo(() => speaking.filter((s) => !s.isSpam && s.status === 'pending').length, [speaking]);

  // Total spam count across all forms
  const totalSpamCount = useMemo(() => {
    const nlSpam = newsletter.filter((n) => n.isSpam).length;
    const cntSpam = contacts.filter((c) => c.isSpam).length;
    const spkSpam = speaking.filter((s) => s.isSpam).length;
    return nlSpam + cntSpam + spkSpam;
  }, [newsletter, contacts, speaking]);

  // Toggle selection
  function toggleSelectAll(listIds: string[]) {
    if (selectedIds.length === listIds.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(listIds);
    }
  }

  function toggleSelectRow(id: string) {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  }

  // CSV Export
  function exportCSV() {
    let csvContent = '';
    const now = new Date().toISOString().split('T')[0];

    if (activeTab === 'newsletter') {
      const headers = ['ID', 'Created At', 'Email', 'Source', 'Status', 'Is Spam', 'Spam Reason'];
      const dataToExport =
        selectedIds.length > 0
          ? filteredNewsletter.filter((n) => selectedIds.includes(n.id))
          : filteredNewsletter;

      const rows = dataToExport.map((n) => [
        `"${n.id}"`,
        `"${formatDate(n.createdAt)}"`,
        `"${n.email}"`,
        `"${n.source}"`,
        `"${n.status}"`,
        `"${n.isSpam ? 'YES' : 'NO'}"`,
        `"${(n.spamReason || '').replace(/"/g, '""')}"`,
      ]);

      csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
      downloadFile(csvContent, `newsletter_subscribers_${now}.csv`);
    } else if (activeTab === 'contacts') {
      const headers = ['ID', 'Created At', 'Name', 'Email', 'Purpose', 'Status', 'Is Spam', 'Spam Reason', 'Message'];
      const dataToExport =
        selectedIds.length > 0
          ? filteredContacts.filter((c) => selectedIds.includes(c.id))
          : filteredContacts;

      const rows = dataToExport.map((c) => [
        `"${c.id}"`,
        `"${formatDate(c.createdAt)}"`,
        `"${c.name.replace(/"/g, '""')}"`,
        `"${c.email}"`,
        `"${c.purpose}"`,
        `"${c.status}"`,
        `"${c.isSpam ? 'YES' : 'NO'}"`,
        `"${(c.spamReason || '').replace(/"/g, '""')}"`,
        `"${c.message.replace(/"/g, '""').replace(/\n/g, ' ')}"`,
      ]);

      csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
      downloadFile(csvContent, `contact_inquiries_${now}.csv`);
    } else if (activeTab === 'speaking') {
      const headers = [
        'ID',
        'Created At',
        'Contact Name',
        'Contact Email',
        'Event Name',
        'Event Date',
        'Location / Format',
        'Expected Attendees',
        'Topic Interest',
        'Status',
        'Is Spam',
        'Spam Reason',
        'Notes',
      ];
      const dataToExport =
        selectedIds.length > 0
          ? filteredSpeaking.filter((s) => selectedIds.includes(s.id))
          : filteredSpeaking;

      const rows = dataToExport.map((s) => [
        `"${s.id}"`,
        `"${formatDate(s.createdAt)}"`,
        `"${(s.contactName || '').replace(/"/g, '""')}"`,
        `"${s.contactEmail || ''}"`,
        `"${(s.eventName || '').replace(/"/g, '""')}"`,
        `"${s.eventDate || 'TBD'}"`,
        `"${(s.locationOrVirtual || '').replace(/"/g, '""')}"`,
        `"${s.expectedAttendees || ''}"`,
        `"${(s.topicInterest || '').replace(/"/g, '""')}"`,
        `"${s.status || 'pending'}"`,
        `"${s.isSpam ? 'YES' : 'NO'}"`,
        `"${(s.spamReason || '').replace(/"/g, '""')}"`,
        `"${(s.additionalNotes || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
      ]);

      csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
      downloadFile(csvContent, `speaking_inquiries_${now}.csv`);
    }
  }

  function downloadFile(content: string, filename: string) {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // If not authenticated, render login box
  if (!isAuth) {
    return (
      <div className="admin-login-wrap" style={{ width: '100vw' }}>
        <div className="admin-login-card">
          <div className="admin-brand-lbl">ADMIN PORTAL</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: '28px', color: '#FFFFFF', marginTop: '6px' }}>
            MagicWorks
          </h2>
          <p style={{ fontSize: '13px', color: '#8E9BB5', marginTop: '8px' }}>
            Enter admin password to access subscribers and inquiries.
          </p>
          <form onSubmit={handleLogin} style={{ marginTop: '20px' }}>
            <input
              type="password"
              className="admin-login-input"
              placeholder="Enter password (e.g. swapnil2026)"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              required
            />
            {authError && <p style={{ color: '#F43F5E', fontSize: '12px', marginBottom: '12px' }}>{authError}</p>}
            <button type="submit" className="admin-login-btn">
              Authenticate →
            </button>
          </form>
          <div style={{ marginTop: '24px', fontSize: '11px', color: '#475569' }}>
            <Link href="/" style={{ color: '#94A3B8', textDecoration: 'none' }}>← Back to Public Website</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <div className="admin-brand-lbl">ADMIN</div>
          <div className="admin-brand-name">MagicWorks</div>
        </div>

        <div className="admin-nav-section">
          <div className="admin-nav-title">DATA</div>

          <button
            onClick={() => {
              setActiveTab('newsletter');
              setSelectedIds([]);
            }}
            className={`admin-nav-item ${activeTab === 'newsletter' ? 'active' : ''}`}
          >
            <span className="admin-nav-left">
              <svg className="admin-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Newsletter
            </span>
            <span className="admin-badge">{cleanNewsletterCount}</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('contacts');
              setSelectedIds([]);
            }}
            className={`admin-nav-item ${activeTab === 'contacts' ? 'active' : ''}`}
          >
            <span className="admin-nav-left">
              <svg className="admin-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Contact Form
            </span>
            <span
              className="admin-badge"
              style={{
                backgroundColor: cleanContactsNewCount > 0 ? '#F43F5E' : '#475569',
                color: '#FFFFFF',
              }}
            >
              {contacts.filter((c) => !c.isSpam).length}
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTab('speaking');
              setSelectedIds([]);
            }}
            className={`admin-nav-item ${activeTab === 'speaking' ? 'active' : ''}`}
          >
            <span className="admin-nav-left">
              <svg className="admin-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" x2="12" y1="19" y2="22" />
                <line x1="8" x2="16" y1="22" y2="22" />
              </svg>
              Speaking Inquiries
            </span>
            <span
              className="admin-badge"
              style={{
                backgroundColor: cleanSpeakingPendingCount > 0 ? '#E5A83B' : '#475569',
                color: cleanSpeakingPendingCount > 0 ? '#070B14' : '#FFFFFF',
              }}
            >
              {speaking.filter((s) => !s.isSpam).length}
            </span>
          </button>
        </div>

        {totalSpamCount > 0 && (
          <div style={{ padding: '0 24px 16px' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: '#EF4444', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>🛡️</span>
              <span>{totalSpamCount} Flagged Spam</span>
            </div>
          </div>
        )}

        <div className="admin-sidebar-footer">
          <Link href="/" target="_blank" style={{ fontSize: '11px', color: '#94A3B8', textDecoration: 'none' }}>
            Live Site ↗
          </Link>
          <button onClick={handleLogout} className="admin-logout-btn">
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="admin-main">
        <header className="admin-header">
          <div>
            <h1 className="admin-title">
              {activeTab === 'newsletter' && 'Newsletter'}
              {activeTab === 'contacts' && 'Contact Form Inquiries'}
              {activeTab === 'speaking' && 'Speaking & Keynote Inquiries'}
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {selectedIds.length > 0 && (
              <button onClick={handleBulkDelete} className="admin-btn-bulk-delete">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
                Delete Selected ({selectedIds.length})
              </button>
            )}

            <button onClick={exportCSV} className="admin-btn-export">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Export CSV
            </button>
          </div>
        </header>

        {/* CONTROLS & SPAM FILTER PILLS */}
        <div className="admin-controls">
          <div className="admin-filters-left">
            {/* SPAM VIEW TOGGLE */}
            <div style={{ display: 'flex', gap: '6px', marginRight: '6px' }}>
              <button
                onClick={() => {
                  setSpamView('clean');
                  setSelectedIds([]);
                }}
                className={`admin-filter-pill ${spamView === 'clean' ? 'active' : ''}`}
              >
                Clean Leads
              </button>
              <button
                onClick={() => {
                  setSpamView('spam');
                  setSelectedIds([]);
                }}
                className={`admin-filter-pill spam ${spamView === 'spam' ? 'active' : ''}`}
              >
                Spam (Flagged)
              </button>
              <button
                onClick={() => {
                  setSpamView('all');
                  setSelectedIds([]);
                }}
                className={`admin-filter-pill ${spamView === 'all' ? 'active' : ''}`}
              >
                All Records
              </button>
            </div>

            <div className="admin-date-group">
              <span>FROM</span>
              <input
                type="date"
                className="admin-date-input"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>

            <div className="admin-date-group">
              <span>TO</span>
              <input
                type="date"
                className="admin-date-input"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>

            <select
              className="admin-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'desc' | 'asc')}
            >
              <option value="desc">↓ Newest first</option>
              <option value="asc">↑ Oldest first</option>
            </select>

            <input
              type="text"
              placeholder={
                activeTab === 'newsletter'
                  ? 'Search email, source, reason...'
                  : activeTab === 'contacts'
                  ? 'Search name, email, message, reason...'
                  : 'Search organizer, event, topic, email...'
              }
              className="admin-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="admin-records-count">
            {activeTab === 'newsletter' && `${filteredNewsletter.length} records`}
            {activeTab === 'contacts' && `${filteredContacts.length} records`}
            {activeTab === 'speaking' && `${filteredSpeaking.length} records`}
          </div>
        </div>

        {/* DATA TABLES */}
        {activeTab === 'newsletter' && (
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th style={{ width: '40px' }}>
                    <input
                      type="checkbox"
                      className="admin-checkbox"
                      checked={
                        filteredNewsletter.length > 0 && selectedIds.length === filteredNewsletter.length
                      }
                      onChange={() => toggleSelectAll(filteredNewsletter.map((n) => n.id))}
                    />
                  </th>
                  <th>CREATED AT</th>
                  <th>EMAIL</th>
                  <th>SOURCE</th>
                  <th>SPAM STATUS</th>
                  <th style={{ textAlign: 'right' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} style={{ textAlign: 'center', padding: '40px', color: '#64748B' }}>
                      Loading records...
                    </td>
                  </tr>
                ) : filteredNewsletter.length === 0 ? (
                  <tr>
                    <td colSpan={6} style={{ textAlign: 'center', padding: '40px', color: '#64748B' }}>
                      No newsletter subscribers found in this view.
                    </td>
                  </tr>
                ) : (
                  filteredNewsletter.map((row) => (
                    <tr key={row.id}>
                      <td>
                        <input
                          type="checkbox"
                          className="admin-checkbox"
                          checked={selectedIds.includes(row.id)}
                          onChange={() => toggleSelectRow(row.id)}
                        />
                      </td>
                      <td style={{ color: '#E2E8F0', fontFamily: 'var(--mono, monospace)', fontSize: '13px' }}>
                        {formatDate(row.createdAt)}
                      </td>
                      <td>
                        <span className="admin-email-text">{row.email}</span>
                      </td>
                      <td>
                        <span className="admin-source-badge">{row.source || 'footer'}</span>
                      </td>
                      <td>
                        {row.isSpam ? (
                          <div>
                            <span className="admin-status-badge admin-status-spam">SPAM</span>
                            {row.spamReason && <div className="admin-spam-tag" title={row.spamReason}>{row.spamReason}</div>}
                          </div>
                        ) : (
                          <span className="admin-status-badge admin-status-replied">CLEAN</span>
                        )}
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <button
                          onClick={() => handleToggleSpam('newsletter', row.id, !!row.isSpam)}
                          className="admin-view-btn"
                          style={{
                            marginRight: '8px',
                            color: row.isSpam ? '#34D399' : '#F87171',
                            borderColor: row.isSpam ? 'rgba(52, 211, 153, 0.3)' : 'rgba(248, 113, 113, 0.3)',
                          }}
                          title={row.isSpam ? 'Mark as Not Spam' : 'Mark as Spam'}
                        >
                          {row.isSpam ? '✓ Not Spam' : '🚨 Flag Spam'}
                        </button>
                        <button
                          onClick={() => handleDelete('newsletter', row.id)}
                          className="admin-action-btn"
                          title="Delete subscriber"
                        >
                          ✕
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th style={{ width: '40px' }}>
                    <input
                      type="checkbox"
                      className="admin-checkbox"
                      checked={filteredContacts.length > 0 && selectedIds.length === filteredContacts.length}
                      onChange={() => toggleSelectAll(filteredContacts.map((c) => c.id))}
                    />
                  </th>
                  <th>CREATED AT</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>PURPOSE</th>
                  <th>STATUS</th>
                  <th>SPAM</th>
                  <th style={{ textAlign: 'right' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={8} style={{ textAlign: 'center', padding: '40px', color: '#64748B' }}>
                      Loading records...
                    </td>
                  </tr>
                ) : filteredContacts.length === 0 ? (
                  <tr>
                    <td colSpan={8} style={{ textAlign: 'center', padding: '40px', color: '#64748B' }}>
                      No contact inquiries found in this view.
                    </td>
                  </tr>
                ) : (
                  filteredContacts.map((row) => (
                    <tr key={row.id}>
                      <td>
                        <input
                          type="checkbox"
                          className="admin-checkbox"
                          checked={selectedIds.includes(row.id)}
                          onChange={() => toggleSelectRow(row.id)}
                        />
                      </td>
                      <td style={{ color: '#E2E8F0', fontFamily: 'var(--mono, monospace)', fontSize: '13px' }}>
                        {formatDate(row.createdAt)}
                      </td>
                      <td style={{ fontWeight: 600, color: '#FFFFFF' }}>{row.name}</td>
                      <td>
                        <span className="admin-email-text">{row.email}</span>
                      </td>
                      <td style={{ color: '#94A3B8', fontSize: '13px' }}>{row.purpose}</td>
                      <td>
                        <span className={`admin-status-badge admin-status-${row.status}`}>{row.status}</span>
                      </td>
                      <td>
                        {row.isSpam ? (
                          <div>
                            <span className="admin-status-badge admin-status-spam">SPAM</span>
                            {row.spamReason && <div className="admin-spam-tag" title={row.spamReason}>{row.spamReason}</div>}
                          </div>
                        ) : (
                          <span className="admin-status-badge admin-status-replied">CLEAN</span>
                        )}
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <button
                          onClick={() => {
                            setSelectedContact(row);
                            if (row.status === 'new') handleStatusChange(row.id, 'read');
                          }}
                          className="admin-view-btn"
                          style={{ marginRight: '6px' }}
                        >
                          View Message
                        </button>
                        <button
                          onClick={() => handleToggleSpam('contact', row.id, !!row.isSpam)}
                          className="admin-action-btn"
                          style={{
                            color: row.isSpam ? '#34D399' : '#F87171',
                            marginRight: '6px',
                          }}
                          title={row.isSpam ? 'Mark as Clean' : 'Mark as Spam'}
                        >
                          {row.isSpam ? '🛡️' : '🚨'}
                        </button>
                        <button
                          onClick={() => handleDelete('contact', row.id)}
                          className="admin-action-btn"
                          title="Delete inquiry"
                        >
                          ✕
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'speaking' && (
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th style={{ width: '40px' }}>
                    <input
                      type="checkbox"
                      className="admin-checkbox"
                      checked={filteredSpeaking.length > 0 && selectedIds.length === filteredSpeaking.length}
                      onChange={() => toggleSelectAll(filteredSpeaking.map((s) => s.id))}
                    />
                  </th>
                  <th>CREATED AT</th>
                  <th>CONTACT</th>
                  <th>EVENT</th>
                  <th>LOCATION / DATE</th>
                  <th>TOPIC INTEREST</th>
                  <th>STATUS</th>
                  <th>SPAM</th>
                  <th style={{ textAlign: 'right' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={9} style={{ textAlign: 'center', padding: '40px', color: '#64748B' }}>
                      Loading records...
                    </td>
                  </tr>
                ) : filteredSpeaking.length === 0 ? (
                  <tr>
                    <td colSpan={9} style={{ textAlign: 'center', padding: '40px', color: '#64748B' }}>
                      No speaking inquiries found in this view.
                    </td>
                  </tr>
                ) : (
                  filteredSpeaking.map((row) => (
                    <tr key={row.id}>
                      <td>
                        <input
                          type="checkbox"
                          className="admin-checkbox"
                          checked={selectedIds.includes(row.id)}
                          onChange={() => toggleSelectRow(row.id)}
                        />
                      </td>
                      <td style={{ color: '#E2E8F0', fontFamily: 'var(--mono, monospace)', fontSize: '13px' }}>
                        {formatDate(row.createdAt)}
                      </td>
                      <td>
                        <div style={{ fontWeight: 600, color: '#FFFFFF' }}>{row.contactName}</div>
                        <div className="admin-email-text" style={{ fontSize: '12px', marginTop: '2px' }}>
                          {row.contactEmail}
                        </div>
                      </td>
                      <td>
                        <div style={{ color: '#FFFFFF', fontWeight: 500 }}>{row.eventName}</div>
                        {row.eventDate && (
                          <div style={{ fontSize: '11px', color: '#C89B3C', fontFamily: 'var(--mono)', marginTop: '2px' }}>
                            📅 {formatDate(row.eventDate)}
                          </div>
                        )}
                      </td>
                      <td>
                        <span className="admin-chip">{row.locationOrVirtual || 'TBD'}</span>
                        {row.expectedAttendees ? (
                          <span className="admin-chip" style={{ marginLeft: '6px' }}>
                            👥 {row.expectedAttendees}
                          </span>
                        ) : null}
                      </td>
                      <td style={{ color: '#94A3B8', fontSize: '13px', maxWidth: '180px' }}>
                        {row.topicInterest || 'Keynotes & Briefings'}
                      </td>
                      <td>
                        <span className={`admin-status-badge admin-status-${row.status || 'pending'}`}>
                          {row.status || 'pending'}
                        </span>
                      </td>
                      <td>
                        {row.isSpam ? (
                          <div>
                            <span className="admin-status-badge admin-status-spam">SPAM</span>
                            {row.spamReason && <div className="admin-spam-tag" title={row.spamReason}>{row.spamReason}</div>}
                          </div>
                        ) : (
                          <span className="admin-status-badge admin-status-replied">CLEAN</span>
                        )}
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <button
                          onClick={() => {
                            setSelectedSpeaking(row);
                            if (row.status === 'pending') handleSpeakingStatusChange(row.id, 'read');
                          }}
                          className="admin-view-btn"
                          style={{ marginRight: '6px' }}
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => handleToggleSpam('speaking', row.id, !!row.isSpam)}
                          className="admin-action-btn"
                          style={{
                            color: row.isSpam ? '#34D399' : '#F87171',
                            marginRight: '6px',
                          }}
                          title={row.isSpam ? 'Mark as Clean' : 'Mark as Spam'}
                        >
                          {row.isSpam ? '🛡️' : '🚨'}
                        </button>
                        <button
                          onClick={() => handleDelete('speaking', row.id)}
                          className="admin-action-btn"
                          title="Delete speaking inquiry"
                        >
                          ✕
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* CONTACT MESSAGE DETAIL MODAL */}
        {selectedContact && (
          <div className="admin-modal-backdrop" onClick={() => setSelectedContact(null)}>
            <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
              <button className="admin-modal-close" onClick={() => setSelectedContact(null)}>
                ✕
              </button>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: '#C7A968', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  INQUIRY DETAILS
                </div>
                {selectedContact.isSpam ? (
                  <span className="admin-status-badge admin-status-spam">FLAGGED SPAM</span>
                ) : (
                  <span className="admin-status-badge admin-status-replied">CLEAN LEAD</span>
                )}
              </div>

              <h2 style={{ fontFamily: 'var(--serif)', fontSize: '24px', color: '#FFFFFF', marginTop: '6px' }}>
                {selectedContact.name}
              </h2>
              <div style={{ display: 'flex', gap: '16px', margin: '12px 0 16px', fontSize: '13px', color: '#94A3B8', flexWrap: 'wrap' }}>
                <span><strong>Email:</strong> <a href={`mailto:${selectedContact.email}`} style={{ color: '#D4AF37' }}>{selectedContact.email}</a></span>
                <span><strong>Date:</strong> {formatDate(selectedContact.createdAt)}</span>
                <span><strong>Purpose:</strong> {selectedContact.purpose}</span>
              </div>

              {selectedContact.spamReason && (
                <div style={{ padding: '8px 12px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '4px', color: '#F87171', fontSize: '12px', marginBottom: '14px' }}>
                  🛡️ <strong>Spam Trigger:</strong> {selectedContact.spamReason}
                </div>
              )}

              <div style={{ padding: '16px', backgroundColor: '#070B14', border: '1px solid var(--admin-border)', borderRadius: '6px', fontSize: '14px', lineHeight: 1.6, color: '#E2E8F0', maxHeight: '200px', overflowY: 'auto' }}>
                {selectedContact.message}
              </div>

              <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '12px', color: '#64748B' }}>Status:</span>
                  <select
                    className="admin-select"
                    value={selectedContact.status}
                    onChange={(e) => handleStatusChange(selectedContact.id, e.target.value as any)}
                  >
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="replied">Replied</option>
                  </select>

                  <button
                    onClick={() => handleToggleSpam('contact', selectedContact.id, !!selectedContact.isSpam)}
                    className="admin-filter-pill"
                    style={{ marginLeft: '6px', color: selectedContact.isSpam ? '#34D399' : '#F87171' }}
                  >
                    {selectedContact.isSpam ? '✓ Mark as Clean' : '🚨 Flag Spam'}
                  </button>
                </div>

                <a
                  href={`mailto:${selectedContact.email}?subject=Re: Inquiry from ${encodeURIComponent(selectedContact.name)}`}
                  className="admin-btn-export"
                  style={{ backgroundColor: 'var(--admin-gold)', color: '#070B14', borderColor: 'var(--admin-gold)', fontWeight: 600 }}
                >
                  Reply via Email ↗
                </a>
              </div>
            </div>
          </div>
        )}

        {/* SPEAKING INQUIRY DETAIL MODAL */}
        {selectedSpeaking && (
          <div className="admin-modal-backdrop" onClick={() => setSelectedSpeaking(null)}>
            <div className="admin-modal" style={{ maxWidth: '660px' }} onClick={(e) => e.stopPropagation()}>
              <button className="admin-modal-close" onClick={() => setSelectedSpeaking(null)}>
                ✕
              </button>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: '#C7A968', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  SPEAKING ENGAGEMENT INQUIRY
                </div>
                {selectedSpeaking.isSpam ? (
                  <span className="admin-status-badge admin-status-spam">FLAGGED SPAM</span>
                ) : (
                  <span className="admin-status-badge admin-status-replied">CLEAN LEAD</span>
                )}
              </div>

              <h2 style={{ fontFamily: 'var(--serif)', fontSize: '24px', color: '#FFFFFF', marginTop: '6px' }}>
                {selectedSpeaking.eventName}
              </h2>
              <div style={{ fontSize: '13px', color: '#94A3B8', marginTop: '4px', marginBottom: '16px' }}>
                Organizer: <strong style={{ color: '#FFFFFF' }}>{selectedSpeaking.contactName}</strong> · Submitted on {formatDate(selectedSpeaking.createdAt)}
              </div>

              {selectedSpeaking.spamReason && (
                <div style={{ padding: '8px 12px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '4px', color: '#F87171', fontSize: '12px', marginBottom: '14px' }}>
                  🛡️ <strong>Spam Trigger:</strong> {selectedSpeaking.spamReason}
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '20px', background: '#070B14', padding: '16px', borderRadius: '6px', border: '1px solid var(--admin-border)' }}>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', textTransform: 'uppercase', color: '#64748B', letterSpacing: '0.1em' }}>Organizer Email</div>
                  <a href={`mailto:${selectedSpeaking.contactEmail}`} style={{ color: '#D4AF37', fontSize: '13px', textDecoration: 'none', wordBreak: 'break-all' }}>
                    {selectedSpeaking.contactEmail}
                  </a>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', textTransform: 'uppercase', color: '#64748B', letterSpacing: '0.1em' }}>Target Event Date</div>
                  <div style={{ color: '#E2E8F0', fontSize: '13px' }}>
                    {selectedSpeaking.eventDate ? formatDate(selectedSpeaking.eventDate) : 'Flexible / TBD'}
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', textTransform: 'uppercase', color: '#64748B', letterSpacing: '0.1em' }}>Location / Format</div>
                  <div style={{ color: '#E2E8F0', fontSize: '13px' }}>
                    {selectedSpeaking.locationOrVirtual || 'TBD'}
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', textTransform: 'uppercase', color: '#64748B', letterSpacing: '0.1em' }}>Expected Audience</div>
                  <div style={{ color: '#E2E8F0', fontSize: '13px' }}>
                    {selectedSpeaking.expectedAttendees ? `${selectedSpeaking.expectedAttendees} attendees` : 'Not specified'}
                  </div>
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', textTransform: 'uppercase', color: '#64748B', letterSpacing: '0.1em' }}>Topic Interest</div>
                  <div style={{ color: '#E4B551', fontSize: '13.5px', fontWeight: 500 }}>
                    {selectedSpeaking.topicInterest || 'Keynotes & Briefings'}
                  </div>
                </div>
              </div>

              {selectedSpeaking.additionalNotes ? (
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', textTransform: 'uppercase', color: '#8E9BB5', marginBottom: '8px', letterSpacing: '0.08em' }}>
                    Additional Notes &amp; Context
                  </div>
                  <div style={{ padding: '16px', backgroundColor: '#070B14', border: '1px solid var(--admin-border)', borderRadius: '6px', fontSize: '14px', lineHeight: 1.6, color: '#E2E8F0', maxHeight: '180px', overflowY: 'auto', whiteSpace: 'pre-wrap' }}>
                    {selectedSpeaking.additionalNotes}
                  </div>
                </div>
              ) : null}

              <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '12px', color: '#64748B' }}>Status:</span>
                  <select
                    className="admin-select"
                    value={selectedSpeaking.status || 'pending'}
                    onChange={(e) => handleSpeakingStatusChange(selectedSpeaking.id, e.target.value)}
                  >
                    <option value="pending">Pending</option>
                    <option value="read">Read</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="declined">Declined</option>
                    <option value="completed">Completed</option>
                  </select>

                  <button
                    onClick={() => handleToggleSpam('speaking', selectedSpeaking.id, !!selectedSpeaking.isSpam)}
                    className="admin-filter-pill"
                    style={{ marginLeft: '6px', color: selectedSpeaking.isSpam ? '#34D399' : '#F87171' }}
                  >
                    {selectedSpeaking.isSpam ? '✓ Mark as Clean' : '🚨 Flag Spam'}
                  </button>
                </div>

                <a
                  href={`mailto:${selectedSpeaking.contactEmail}?subject=Re: Speaking Inquiry for ${encodeURIComponent(selectedSpeaking.eventName)} - Swapnil Ughade`}
                  className="admin-btn-export"
                  style={{ backgroundColor: 'var(--admin-gold)', color: '#070B14', borderColor: 'var(--admin-gold)', fontWeight: 600 }}
                >
                  Reply to Organizer ↗
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
