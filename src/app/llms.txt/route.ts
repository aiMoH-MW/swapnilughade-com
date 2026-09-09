import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# Swapnil Ughade

> Founder-Director of MagicWorks IT Solutions Pvt. Ltd. (Pune, founded 2009) and Ideovate Research Pvt. Ltd. (2018). Investor in Dnyanal Educon Pvt. Ltd. (2023). Consultant to Trexova Wellbeing Pvt. Ltd. (2021). Author of Two Algorithms, One Strategy (2026) and The AI-Powered Google Ads System (2026).

## Core Pages
- [About](https://swapnilughade.com/about): full biography and 18-year founder story
- [Ventures](https://swapnilughade.com/ventures): four ventures with role clarity
- [Books](https://swapnilughade.com/books): published books
- [Writing](https://swapnilughade.com/writing): long-form notes
- [Speaking](https://swapnilughade.com/speaking): keynote topics
- [Now](https://swapnilughade.com/now): current focus

## Published Books
- [Two Algorithms, One Strategy: SEO Meets AI-Powered Search](https://swapnilughade.com/books/two-algorithms-one-strategy): strategic execution manual for navigating classic search meeting AI discovery.
- [The AI-Powered Google Ads System](https://swapnilughade.com/books/ai-powered-google-ads-system): frameworks, prompts, and strategies drawn from ₹70+ Crore ($8M) in managed ad spend.

## Ventures
- [MagicWorks](https://swapnilughade.com/ventures/magicworks): AI-first digital marketing agency, Pune. Five service pillars, three sibling brands.
- [Ideovate](https://swapnilughade.com/ventures/ideovate-research): Edtech discovery portal (simplidistance.com). 50,000+ leads in 16 months.
- [Dnyanal Educon](https://swapnilughade.com/ventures/dnyanal-educon): Higher education discovery (collegencourses.com).
- [Trexova](https://swapnilughade.com/ventures/trexova): Digital marketing consulting in the wellness sector.
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
