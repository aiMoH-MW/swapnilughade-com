import { ARTICLES, isArticlePublished, getPublishedArticles } from '../src/lib/content-data';

function runSchedulingTests() {
  console.log('--- RUNNING DATE-GATING & SCHEDULING UNIT TESTS ---\n');

  let passed = 0;
  let failed = 0;

  function assert(condition: boolean, testName: string) {
    if (condition) {
      console.log(`✓ PASS: ${testName}`);
      passed++;
    } else {
      console.error(`✗ FAIL: ${testName}`);
      failed++;
    }
  }

  const futureSlug = 'three-questions-before-every-ad-account-audit';
  const futureArticle = ARTICLES.find((a) => a.slug === futureSlug)!;

  // Test 1: Before go-live timestamp (2026-09-29T12:00:00+05:30)
  const beforeGoLiveMs = new Date('2026-09-29T12:00:00+05:30').getTime();
  const isPublishedBefore = isArticlePublished(futureArticle, beforeGoLiveMs);
  assert(!isPublishedBefore, `Before go-live: ${futureSlug} is NOT published (isArticlePublished === false)`);

  const publishedBefore = getPublishedArticles(beforeGoLiveMs);
  const inPublishedListBefore = publishedBefore.some((a) => a.slug === futureSlug);
  assert(!inPublishedListBefore, `Before go-live: ${futureSlug} is absent from getPublishedArticles()`);

  // Test 2: Exactly at go-live timestamp (2026-10-05T09:00:00+05:30)
  const atGoLiveMs = new Date('2026-10-05T09:00:00+05:30').getTime();
  const isPublishedAt = isArticlePublished(futureArticle, atGoLiveMs);
  assert(isPublishedAt, `At go-live: ${futureSlug} is published (isArticlePublished === true)`);

  // Test 3: After go-live timestamp (2026-10-05T09:05:00+05:30)
  const afterGoLiveMs = new Date('2026-10-05T09:05:00+05:30').getTime();
  const isPublishedAfter = isArticlePublished(futureArticle, afterGoLiveMs);
  assert(isPublishedAfter, `After go-live: ${futureSlug} is published (isArticlePublished === true)`);

  const publishedAfter = getPublishedArticles(afterGoLiveMs);
  const inPublishedListAfter = publishedAfter.some((a) => a.slug === futureSlug);
  assert(inPublishedListAfter, `After go-live: ${futureSlug} is present in getPublishedArticles()`);

  // Test 4: Verify all 4 scheduled essays have valid future publishDates
  const scheduledSlugs = [
    'three-questions-before-every-ad-account-audit',
    'five-pillars-three-siblings-how-magicworks-is-structured-in-2026',
    'unit-economics-of-a-discovery-portal',
    'festive-quarter-ad-account-six-adjustments-before-diwali',
  ];

  for (const slug of scheduledSlugs) {
    const art = ARTICLES.find((a) => a.slug === slug);
    assert(!!art, `Scheduled article '${slug}' exists in content repository`);
    assert(
      !isArticlePublished(art!, beforeGoLiveMs),
      `Article '${slug}' is hidden before its go-live date`
    );
  }

  console.log(`\nTEST RESULTS: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) {
    process.exit(1);
  }
}

runSchedulingTests();
