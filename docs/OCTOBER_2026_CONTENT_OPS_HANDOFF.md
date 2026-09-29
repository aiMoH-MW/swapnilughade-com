# Content-Ops Technical Handoff Document · October 2026 Cadence
**Target Site:** https://swapnilughade.com/  
**Platform:** Next.js 16 (App Router) · TypeScript · Static Site Generation (SSG) with Date-Gated Dynamic Revalidation (`revalidate = 300`)  
**Timezone Baseline:** Asia/Kolkata (IST, UTC+05:30) · Default Go-Live Time: `09:00:00+05:30` (`03:30:00 UTC`)

---

## 1. Executive Summary & Architecture Overview

This document provides a comprehensive technical overview of the automated scheduled publishing system for the **October 2026 Content Cadence** (4 website essays + 2 email newsletters).

### Key Architectural Tenets:
1. **Centralized Data Store:** All website writing content is managed in `src/lib/content-data.ts` under the strongly-typed `ARTICLES: ArticleData[]` array.
2. **Zero-Leakage Date-Gating:** Scheduled articles remain in a draft state and are programmatically hidden from the public Writing Archive, Sitemap, and RSS Feed until `09:00:00 AM IST` on their respective publication date.
3. **Dynamic ISR Revalidation:** Writing pages, pillar pages, sitemap, and RSS feeds export `revalidate = 300`, ensuring automatic freshness on go-live without requiring manual rebuilds.
4. **Structured Data in `<head>`:** High-fidelity JSON-LD schema blocks (`Article`, `Person`, `Organization`) with ISO `+05:30` timestamps are dynamically injected into `<head>` via `<script type="application/ld+json">`.
5. **Bespoke OpenGraph Assets:** Custom 16:9 editorial imagery tailored to the dark luxury palette (`#0E162B`, `#2E1065`, `#E4B551`) reside in `public/images/writing/`.
6. **Dynamic Category Resolution:** Dynamic routes under `/writing/pillar/[pillar]` ensure all editorial category bylines resolve without 404 errors.

---

## 2. October 2026 Master Publishing Schedule

| # | Type | Title | Slug | Scheduled Datetime (IST) | Scheduled Datetime (UTC) | Canonical URL / Target | OG Image Path |
|---|---|---|---|---|---|---|---|
| **01** | Website Essay | The three questions before every ad account audit | `three-questions-before-every-ad-account-audit` | `2026-10-05T09:00:00+05:30` | `2026-10-05T03:30:00Z` | `https://swapnilughade.com/writing/three-questions-before-every-ad-account-audit` | `/images/writing/three-questions-audit.jpg` |
| **02** | Newsletter | The Letter · Issue 10 (*"Three questions before every audit"*) | N/A (Email) | `2026-10-11T09:00:00+05:30` | `2026-10-11T03:30:00Z` | Email Sender (Substack / Mailchimp) | N/A |
| **03** | Website Essay | Five pillars, three siblings: how MagicWorks is structured in 2026 | `five-pillars-three-siblings-how-magicworks-is-structured-in-2026` | `2026-10-12T09:00:00+05:30` | `2026-10-12T03:30:00Z` | `https://swapnilughade.com/writing/five-pillars-three-siblings-how-magicworks-is-structured-in-2026` | `/images/writing/magicworks-structure-2026.jpg` |
| **04** | Website Essay | The unit economics of a discovery portal | `unit-economics-of-a-discovery-portal` | `2026-10-19T09:00:00+05:30` | `2026-10-19T03:30:00Z` | `https://swapnilughade.com/writing/unit-economics-of-a-discovery-portal` | `/images/writing/discovery-portal-unit-economics.jpg` |
| **05** | Newsletter | The Letter · Issue 11 (*"The three numbers a portal is actually made of"*) | N/A (Email) | `2026-10-25T09:00:00+05:30` | `2026-10-25T03:30:00Z` | Email Sender (Substack / Mailchimp) | N/A |
| **06** | Website Essay | The festive-quarter ad account: six adjustments before Diwali | `festive-quarter-ad-account-six-adjustments-before-diwali` | `2026-10-26T09:00:00+05:30` | `2026-10-26T03:30:00Z` | `https://swapnilughade.com/writing/festive-quarter-ad-account-six-adjustments-before-diwali` | `/images/writing/festive-quarter-six-adjustments.jpg` |

---

## 3. Implementation Code & Logic Specification

### A. Date-Gating Filter Logic (`src/lib/content-data.ts`)

```typescript
// Checks if article release timestamp has arrived (09:00 IST / 03:30 UTC)
export function isArticlePublished(article: ArticleData, nowMs: number = Date.now()): boolean {
  if (!article.publishDate) return true;
  const scheduledTimestamp = new Date(`${article.publishDate}T09:00:00+05:30`).getTime();
  return nowMs >= scheduledTimestamp;
}

// Returns only live articles (for public archive, sitemaps, RSS, related blocks)
export function getPublishedArticles(nowMs: number = Date.now()): ArticleData[] {
  return ARTICLES.filter((art) => isArticlePublished(art, nowMs));
}
```

### B. Route Protection (`src/app/writing/[slug]/page.tsx`)

- **ISR Revalidation:** `export const revalidate = 300; export const dynamicParams = true;`
- **Build-Time Prerendering:** `generateStaticParams()` returns only `getPublishedArticles().map(art => ({ slug: art.slug }))`. Future drafts are not prerendered into static HTML bundles.
- **Unconditional Guard:** `generateMetadata` returns `{ title: 'Article Not Found · Swapnil Ughade' }` and `ArticlePage` calls `notFound()` (HTTP 404) across all environments (production, staging, preview) whenever `!isArticlePublished(article)`.
- **Related Articles:** Filtered strictly via `getPublishedArticles()` to prevent unpublished titles from appearing in recommendations.

### C. Dynamic Sitemap & RSS Integration

- **Sitemap (`src/app/sitemap.ts`):** Includes `revalidate = 300` and automatically maps `getPublishedArticles()`. Future URLs only appear once live.
- **RSS Feed (`src/app/rss.xml/route.ts`):** Includes `revalidate = 300` and dynamically outputs XML items only for currently live articles with correctly escaped XML entities and RFC-822 timestamps.

### D. Category / Pillar Routing (`src/app/writing/pillar/[pillar]/page.tsx`)

Includes `revalidate = 300` and supports direct navigation for:
- `/writing/pillar/consultancy`
- `/writing/pillar/operators-diary`
- `/writing/pillar/operating-thesis`
- `/writing/pillar/portals-and-platforms`
- `/writing/pillar/advisory`

---

## 4. Newsletter Ops Protocol (Issues 10 & 11)

> **Manual Action Required Before Sending:**
> Newsletters are delivered by email and are **NOT** indexed as website pages. Both issues contain an editorial placeholder that **must be replaced** with an active book/article recommendation before scheduling in your ESP (Substack/Beehiiv/Mailchimp):

### Issue 10 (Send: Sunday, 11 October 2026 @ 09:00 AM IST)
* **Subject:** `Three questions before every audit · Issue 10`
* **Preheader:** `The audit question clients find hardest to answer plainly, and why.`
* **Editorial Placeholder to Replace:** Line 842:
  `[RECOMMENDED READ · placeholder to be replaced at send time. Working suggestion: Andy Grove's High Output Management, specifically the chapter on management leverage...]`
* **Internal Link Included:** Links to **Essay 01 (row #01)** (`/writing/three-questions-before-every-ad-account-audit`).

### Issue 11 (Send: Sunday, 25 October 2026 @ 09:00 AM IST)
* **Subject:** `The three numbers a portal is actually made of · Issue 11`
* **Preheader:** `What surprised me writing this week's piece on discovery portals.`
* **Editorial Placeholder to Replace:** Line 881:
  `[RECOMMENDED READ · placeholder to be replaced at send time. Working suggestion: Ben Thompson's "Aggregation Theory" essay from Stratechery...]`
* **Internal Link Included:** Links to **Essay 03 (row #04)** (`/writing/unit-economics-of-a-discovery-portal`).

---

## 5. Automated CI/CD & Deploy Hook Setup

The GitHub Actions workflow at `.github/workflows/scheduled-publish.yml` runs **every Monday** at `03:30 UTC` (`09:00 IST`):

```yaml
name: Scheduled Content Publish
on:
  schedule:
    - cron: '30 3 * * 1'
  workflow_dispatch:

jobs:
  rebuild-and-deploy:
    runs-on: ubuntu-latest
    env:
      DEPLOY_HOOK_URL: ${{ secrets.DEPLOY_HOOK_URL }}
    steps:
      - name: Trigger Webhook Revalidation / Deploy
        run: |
          if [ -z "$DEPLOY_HOOK_URL" ]; then
            echo "DEPLOY_HOOK_URL secret is not set. Skipping deploy hook trigger."
            exit 0
          fi
          echo "Triggering deploy hook..."
          curl -sS -X POST "$DEPLOY_HOOK_URL"
```

*To connect:* Add your hosting provider's deploy hook URL as a repository secret named `DEPLOY_HOOK_URL`.

---

## 6. Asset Security & OpenGraph Leak Prevention

> **OG Image Leak Audit Note:**
> Static files in Next.js `public/` are served without authentication. If descriptive filenames like `three-questions-audit.jpg` are placed in `public/images/writing/`, anyone enumerating that directory or guessing the filename could discover upcoming topics before go-live.
> 
> **Recommended Fixes:**
> 1. *Option A (Default/Simple):* Retain standard names if enumeration is not a major threat (Next.js does not expose directory indexing by default).
> 2. *Option B (Strict Privacy):* Commit OG images in the repo only on or shortly before go-live day.
> 3. *Option C (Hash-based / Obscure filenames):* Rename image assets to content-hash names (e.g. `/images/writing/og-9d7a2f8c.jpg`) and reference them in `content-data.ts`.

---

## 7. Post-Publish Verification Checklist (Run at 09:05 AM IST on Go-Live Date)

```bash
# 1. Verify HTTP 200 Status
curl -I https://swapnilughade.com/writing/<slug>

# 2. Check Canonical Tag
curl -s https://swapnilughade.com/writing/<slug> | grep -i 'rel="canonical"'

# 3. Check JSON-LD Structured Data in Page Head
curl -s https://swapnilughade.com/writing/<slug> | grep -i 'application/ld+json'

# 4. Verify Presence in Live Sitemap
curl -s https://swapnilughade.com/sitemap.xml | grep -i '<slug>'

# 5. Verify Presence in Live RSS Feed
curl -s https://swapnilughade.com/rss.xml | grep -i '<slug>'
```

---

## 8. File Modification Manifest

| File Path | Status | Description |
|---|---|---|
| `src/lib/content-data.ts` | Modified | Added 4 October essays, ISO `+05:30` timestamps, Article/Person/Organization schema graphs (removed HowTo), and `getPublishedArticles()` / `isArticlePublished()` gating logic. |
| `src/app/writing/page.tsx` | Modified | Added `revalidate = 300` and filtered archive view to only render published posts. |
| `src/app/writing/[slug]/page.tsx` | Modified | Added `revalidate = 300`, `dynamicParams = true`, build-time static pruning, unconditional 404 guard across all environments, custom OG image handling, and JSON-LD structured data injection. |
| `src/app/sitemap.ts` | Modified | Added `revalidate = 300`, made sitemap dynamic so scheduled URLs only appear once live, and added pillar routes. |
| `src/app/rss.xml/route.ts` | Modified | Added `revalidate = 300`, made RSS feed dynamic so only live posts are broadcast. |
| `src/app/writing/pillar/[pillar]/page.tsx` | Created | Dynamic category archive route with `revalidate = 300` for pillar bylines. |
| `.github/workflows/scheduled-publish.yml` | Created/Modified | Configured for Mondays only (`30 3 * * 1`) with job-level env and graceful shell check. |
| `scripts/test-scheduling.ts` | Created | Unit test suite verifying date-gating behavior before, at, and after go-live. |
| `public/images/writing/*` | Created | Bespoke OG images for all 4 essays. |
| `docs/OCTOBER_2026_CONTENT_OPS_HANDOFF.md` | Created | Full self-contained LLM-ready technical handoff specification. |
