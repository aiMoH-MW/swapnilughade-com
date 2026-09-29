import { NextResponse } from 'next/server';
import { getPublishedArticles } from '@/lib/content-data';

export const revalidate = 300;

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

export async function GET() {
  const publishedArticles = getPublishedArticles();

  const itemsXml = publishedArticles
    .map((art) => {
      const pubDateGmt = new Date(`${art.publishDate}T09:00:00+05:30`).toUTCString();
      return `    <item>
      <title>${escapeXml(art.title)}</title>
      <link>https://swapnilughade.com/writing/${art.slug}</link>
      <guid>https://swapnilughade.com/writing/${art.slug}</guid>
      <pubDate>${pubDateGmt}</pubDate>
      <description>${escapeXml(art.metaDescription || art.blurb || art.lead)}</description>
    </item>`;
    })
    .join('\n\n');

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Swapnil Ughade · Writing &amp; The Letter</title>
    <link>https://swapnilughade.com/writing</link>
    <description>Long-form notes on AI-first marketing, portals, and the founder operating thesis by Swapnil Ughade.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://swapnilughade.com/rss.xml" rel="self" type="application/rss+xml"/>
    
${itemsXml}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
}
