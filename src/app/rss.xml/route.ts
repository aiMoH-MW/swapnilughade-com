import { NextResponse } from 'next/server';

export async function GET() {
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Swapnil Ughade · Writing &amp; The Letter</title>
    <link>https://swapnilughade.com/writing</link>
    <description>Long-form notes on AI-first marketing, portals, and the founder operating thesis by Swapnil Ughade.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://swapnilughade.com/rss.xml" rel="self" type="application/rss+xml"/>
    
    <item>
      <title>Two into one: the operating thesis</title>
      <link>https://swapnilughade.com/writing/two-into-one-the-operating-thesis</link>
      <guid>https://swapnilughade.com/writing/two-into-one-the-operating-thesis</guid>
      <pubDate>Sun, 08 Sep 2026 00:00:00 GMT</pubDate>
      <description>Markets treat as separate things that need to be integrated. The pattern, the four pairs, and why the phrase survives.</description>
    </item>

    <item>
      <title>The portal thesis</title>
      <link>https://swapnilughade.com/writing/the-portal-thesis</link>
      <guid>https://swapnilughade.com/writing/the-portal-thesis</guid>
      <pubDate>Tue, 01 Sep 2026 00:00:00 GMT</pubDate>
      <description>A well-built portal in a high-trust category creates disproportionate value. What each of those words means at practice level.</description>
    </item>

    <item>
      <title>Why marketplace consultation is founder-led</title>
      <link>https://swapnilughade.com/writing/why-marketplace-consultation-is-founder-led</link>
      <guid>https://swapnilughade.com/writing/why-marketplace-consultation-is-founder-led</guid>
      <pubDate>Tue, 25 Aug 2026 00:00:00 GMT</pubDate>
      <description>Advisory work in some categories does not senior-associate. The design case for the founder-led constraint.</description>
    </item>
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
