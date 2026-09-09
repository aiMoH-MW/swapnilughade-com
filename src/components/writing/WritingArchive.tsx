'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArticleData } from '@/lib/content-data';

interface WritingArchiveProps {
  articles: ArticleData[];
}

const ITEMS_PER_PAGE = 9;

export function WritingArchive({ articles }: WritingArchiveProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'reading-asc' | 'reading-desc'>('newest');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(articles.map((a) => a.category)));
    return ['All', ...cats];
  }, [articles]);

  // Helper to parse dates like "8 September 2026"
  const parseDate = (dateStr: string): number => {
    const parsed = Date.parse(dateStr);
    return isNaN(parsed) ? 0 : parsed;
  };

  // Helper to parse reading time minutes (e.g., "3 min read" -> 3)
  const parseReadingMinutes = (readingTimeStr: string): number => {
    const match = readingTimeStr.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  // Filter and Sort articles
  const filteredArticles = useMemo(() => {
    return articles
      .filter((art) => {
        // Category filter
        if (selectedCategory !== 'All' && art.category !== selectedCategory) {
          return false;
        }

        // Search query filter
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase().trim();
          const fullTitle = `${art.title} ${art.titleEm || ''}`.toLowerCase();
          const matchesTitle = fullTitle.includes(q);
          const matchesBlurb = art.blurb.toLowerCase().includes(q);
          const matchesCategory = art.category.toLowerCase().includes(q);
          const matchesLead = art.lead.toLowerCase().includes(q);
          return matchesTitle || matchesBlurb || matchesCategory || matchesLead;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'newest') {
          return parseDate(b.publishedAt) - parseDate(a.publishedAt);
        }
        if (sortBy === 'oldest') {
          return parseDate(a.publishedAt) - parseDate(b.publishedAt);
        }
        if (sortBy === 'reading-asc') {
          return parseReadingMinutes(a.readingTime) - parseReadingMinutes(b.readingTime);
        }
        if (sortBy === 'reading-desc') {
          return parseReadingMinutes(b.readingTime) - parseReadingMinutes(a.readingTime);
        }
        return 0;
      });
  }, [articles, selectedCategory, searchQuery, sortBy]);

  // Total pages calculation
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);

  // Paginated articles slice
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value: any) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSortBy('newest');
    setCurrentPage(1);
  };

  return (
    <div className="writing-archive-root">
      {/* SEARCH & FILTER CONTROLS */}
      <div className="writing-controls-bar">
        {/* Search Bar */}
        <div className="writing-search-box">
          <svg
            className="writing-search-icon"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <circle cx="8.5" cy="8.5" r="5.5" />
            <line x1="12.5" y1="12.5" x2="17" y2="17" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search writings..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="writing-search-input"
            aria-label="Search writings"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => handleSearchChange('')}
              className="writing-search-clear"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Right: Category Filter & Sort Utilities */}
        <div className="writing-bar-actions">
          {/* Category Dropdown Filter */}
          <div className="writing-sort-box">
            <label htmlFor="writing-category-select" className="writing-sort-label">Category:</label>
            <select
              id="writing-category-select"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="writing-sort-select"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Selector */}
          <div className="writing-sort-box">
            <label htmlFor="writing-sort-select" className="writing-sort-label">Sort:</label>
            <select
              id="writing-sort-select"
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="writing-sort-select"
            >
              <option value="newest">Latest Published</option>
              <option value="oldest">Oldest First</option>
              <option value="reading-asc">Shortest Read</option>
              <option value="reading-desc">Longest Read</option>
            </select>
          </div>
        </div>
      </div>

      {/* ARTICLES GRID */}
      {paginatedArticles.length > 0 ? (
        <>
          <div className="writing-grid">
            {paginatedArticles.map((art) => {
              const cleanReadingTime = art.readingTime.replace(/[()[\]]/g, '').trim();
              const formattedReadingTime = `(${cleanReadingTime})`;

              return (
                <article key={art.slug} className="article-card">
                  <div className="article-eyebrow">{art.category}</div>
                  <h3 className="article-title">
                    <Link href={`/writing/${art.slug}`}>
                      {art.title} {art.titleEm && <em>{art.titleEm}</em>}
                    </Link>
                  </h3>
                  <p className="article-blurb">{art.blurb}</p>
                  
                  <div className="article-meta">
                    <span>{art.publishedAt}</span>
                    <span>{formattedReadingTime}</span>
                  </div>

                  <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                    <Link href={`/writing/${art.slug}`} className="article-link">
                      Read more →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* PAGINATION CONTROLS (when more than 1 page) */}
          {totalPages > 1 && (
            <div className="writing-pagination">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="pagination-nav-btn"
                aria-label="Previous page"
              >
                ← Prev
              </button>

              <div className="pagination-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => setCurrentPage(pageNum)}
                    className={`pagination-num-btn ${currentPage === pageNum ? 'active' : ''}`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="pagination-nav-btn"
                aria-label="Next page"
              >
                Next →
              </button>
            </div>
          )}
        </>
      ) : (
        /* Empty State */
        <div className="writing-empty-state">
          <div className="empty-title">No writings found</div>
          <p className="empty-text">
            No notes match your current filters. Try changing category or search terms.
          </p>
          <button type="button" onClick={clearFilters} className="empty-btn">
            View all writings →
          </button>
        </div>
      )}
    </div>
  );
}
