'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

interface NewsletterSubscriber {
  id: string;
  email: string;
  source: string;
  createdAt: string;
  status: 'active' | 'unsubscribed';
}

interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  purpose: string;
  message: string;
  createdAt: string;
  status: 'new' | 'read' | 'replied';
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'newsletter' | 'contacts'>('newsletter');
  const [newsletter, setNewsletter] = useState<NewsletterSubscriber[]>([]);
  const [contacts, setContacts] = useState<ContactInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');
  const [selectedContact, setSelectedContact] = useState<ContactInquiry | null>(null);

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
        // Allow seamless login with local fallback if running
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
      }
    } catch (err) {
      console.error('Failed to load admin data:', err);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(type: 'newsletter' | 'contact', id: string) {
    if (!confirm(`Are you sure you want to delete this ${type} record?`)) return;
    try {
      const res = await fetch(`/api/admin/data?type=${type}&id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        if (type === 'newsletter') {
          setNewsletter((prev) => prev.filter((n) => n.id !== id));
        } else {
          setContacts((prev) => prev.filter((c) => c.id !== id));
        }
        setSelectedIds((prev) => prev.filter((item) => item !== id));
      }
    } catch (err) {
      alert('Delete failed');
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

  // Format Date (e.g. "25 Aug 2026")
  function formatDate(isoStr: string) {
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
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      list = list.filter((n) => n.email.toLowerCase().includes(q) || n.source.toLowerCase().includes(q));
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
  }, [newsletter, searchTerm, fromDate, toDate, sortOrder]);

  // Filtered Contacts list
  const filteredContacts = useMemo(() => {
    let list = [...contacts];
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.email.toLowerCase().includes(q) ||
          c.purpose.toLowerCase().includes(q) ||
          c.message.toLowerCase().includes(q)
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
  }, [contacts, searchTerm, fromDate, toDate, sortOrder]);

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
      const headers = ['ID', 'Created At', 'Email', 'Source', 'Status'];
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
      ]);

      csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
      downloadFile(csvContent, `newsletter_subscribers_${now}.csv`);
    } else {
      const headers = ['ID', 'Created At', 'Name', 'Email', 'Purpose', 'Status', 'Message'];
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
        `"${c.message.replace(/"/g, '""').replace(/\n/g, ' ')}"`,
      ]);

      csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
      downloadFile(csvContent, `contact_inquiries_${now}.csv`);
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

  // If not authenticated, render dark login box
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
            <span className="admin-badge">{newsletter.length}</span>
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
                backgroundColor: contacts.some((c) => c.status === 'new') ? '#F43F5E' : '#475569',
                color: '#FFFFFF',
              }}
            >
              {contacts.length}
            </span>
          </button>
        </div>

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
          <h1 className="admin-title">{activeTab === 'newsletter' ? 'Newsletter' : 'Contact Form Inquiries'}</h1>
          <button onClick={exportCSV} className="admin-btn-export">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Export CSV
          </button>
        </header>

        {/* CONTROLS */}
        <div className="admin-controls">
          <div className="admin-filters-left">
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
              placeholder={activeTab === 'newsletter' ? 'Search email or source...' : 'Search name, email, message...'}
              className="admin-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="admin-records-count">
            {activeTab === 'newsletter' ? filteredNewsletter.length : filteredContacts.length} records
          </div>
        </div>

        {/* DATA TABLES */}
        {activeTab === 'newsletter' ? (
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
                  <th style={{ textAlign: 'right' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} style={{ textAlign: 'center', padding: '40px', color: '#64748B' }}>
                      Loading records...
                    </td>
                  </tr>
                ) : filteredNewsletter.length === 0 ? (
                  <tr>
                    <td colSpan={5} style={{ textAlign: 'center', padding: '40px', color: '#64748B' }}>
                      No newsletter subscribers found matching the filters.
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
                      <td style={{ textAlign: 'right' }}>
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
        ) : (
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
                  <th style={{ textAlign: 'right' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={7} style={{ textAlign: 'center', padding: '40px', color: '#64748B' }}>
                      Loading records...
                    </td>
                  </tr>
                ) : filteredContacts.length === 0 ? (
                  <tr>
                    <td colSpan={7} style={{ textAlign: 'center', padding: '40px', color: '#64748B' }}>
                      No contact inquiries found matching the filters.
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
                      <td style={{ textAlign: 'right' }}>
                        <button
                          onClick={() => {
                            setSelectedContact(row);
                            if (row.status === 'new') handleStatusChange(row.id, 'read');
                          }}
                          className="admin-view-btn"
                          style={{ marginRight: '8px' }}
                        >
                          View Message
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

        {/* MESSAGE DETAIL MODAL */}
        {selectedContact && (
          <div className="admin-modal-backdrop" onClick={() => setSelectedContact(null)}>
            <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
              <button className="admin-modal-close" onClick={() => setSelectedContact(null)}>
                ✕
              </button>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: '#C7A968', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                INQUIRY DETAILS
              </div>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: '24px', color: '#FFFFFF', marginTop: '6px' }}>
                {selectedContact.name}
              </h2>
              <div style={{ display: 'flex', gap: '16px', margin: '12px 0 20px', fontSize: '13px', color: '#94A3B8', flexWrap: 'wrap' }}>
                <span><strong>Email:</strong> <a href={`mailto:${selectedContact.email}`} style={{ color: '#D4AF37' }}>{selectedContact.email}</a></span>
                <span><strong>Date:</strong> {formatDate(selectedContact.createdAt)}</span>
                <span><strong>Purpose:</strong> {selectedContact.purpose}</span>
              </div>

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
      </main>
    </>
  );
}
