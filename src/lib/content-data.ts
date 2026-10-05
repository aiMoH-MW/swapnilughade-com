export interface ArticleSection {
  id?: string;
  heading?: string;
  headingEm?: string;
  paragraphs: string[];
  marginalia?: { label: string; text: string };
  dataCallout?: { metric: string; description: string };
}

export interface ArticleData {
  slug: string;
  title: string;
  titleEm?: string;
  category: string;
  pillar?: string;
  subPillar?: string;
  publishDate: string; // ISO format: YYYY-MM-DD
  updatedDate?: string; // ISO format: YYYY-MM-DD
  publishedAt: string; // Display format: "5 October 2026"
  readingTime: string;
  lead: string;
  blurb: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogImage?: string;
  keyTakeaways?: string[];
  introParagraphs: string[];
  sections: ArticleSection[];
  closingParagraphs?: string[];
  footerNote?: string;
  content: string[];
  marginalia?: { label: string; text: string };
  dataCallout?: { metric: string; description: string };
  jsonLd?: Record<string, any>;
}

export const ARTICLES: ArticleData[] = [
  {
    slug: "two-into-one-the-operating-thesis",
    title: "Two into one: the operating thesis",
    titleEm: "operating",
    category: "Operating Thesis",
    pillar: "Operating Thesis",
    publishDate: "2026-09-08",
    updatedDate: "2026-09-08",
    publishedAt: "8 September 2026",
    readingTime: "4 min read",
    canonicalUrl: "https://swapnilughade.com/writing/two-into-one-the-operating-thesis",
    ogImage: "/og-image.png",
    metaDescription: "The operating thesis behind seventeen years at Magicworks and Ideovate. Why integrating strategy and execution, traditional and AI-powered search, services and products beats specialising into one side.",
    blurb: "The operating thesis behind seventeen years at Magicworks and Ideovate. Why integrating strategy and execution beats specialising into one side.",
    lead: "The markets I have spent seventeen years serving have a habit of separating things that need to be held together. Human strategy and machine execution. Traditional search and AI-powered search. Execution and advisory. Services and products. Founder, operator, investor, author.",
    keyTakeaways: [
      "The operating thesis is short: **two into one.** Integrate the pairs that markets keep separating.",
      "Four working pairs anchor it: human strategy + machine execution, traditional search + AI-powered search, execution + advisory, services + products.",
      "Founder, operator, investor, author are one practice viewed from four angles, not four separate careers.",
      "Short operating phrases survive real meetings. Sophisticated framings evaporate at the whiteboard."
    ],
    introParagraphs: [
      "The markets I have spent seventeen years serving have a habit of separating things that need to be held together. Human strategy and machine execution. Traditional search and AI-powered search. Execution and advisory. Services and products. Founder, operator, investor, author.",
      "Each pair sits in a different column on most maps of the world. Each pair, in the actual work, is a single decision viewed from two sides.",
      "I call this the operating thesis. Short version: **two into one.**",
      "The phrase is not a slogan. It is the closest I have come to describing how I actually think, and it has survived past the second meeting only because it is short enough to be repeated and specific enough to mean something when it is."
    ],
    sections: [
      {
        id: "I",
        heading: "I · The pattern",
        headingEm: "pattern",
        paragraphs: [
          "Whenever a market separates two things that belong together, it creates a problem and an opportunity in the same motion.",
          "The problem is that customers get partial answers from vendors who occupy only one side. An SEO agency that will not talk about ads. An ads agency that will not talk about content. A strategy consultancy that hands over a deck and disappears. An execution shop that produces beautiful campaigns without asking whether the strategy behind them still holds.",
          "The opportunity is that whoever integrates the two well makes the market look at itself differently. Not by adding a service line to the menu. By treating the two sides as the same decision, made once, with both sides in view from the start.",
          "This is not a call to be everything to everyone. It is the opposite. It is a call to identify the specific integrations that actually create value and to hold them together on purpose, even when the market pressure is to specialise into one side or the other."
        ]
      },
      {
        id: "II",
        heading: "II · The four pairs",
        headingEm: "pairs",
        paragraphs: [
          "**Human strategy and machine execution.** Strategy is a human act. Execution can be accelerated by machines. Companies that treat these as separate roles tend to produce either slow strategy with brilliant execution or fast strategy with poor execution. The integration is to design both together, so that the acceleration is directed by clear judgment rather than deployed as an end in itself.",
          "**Traditional search and AI-powered search.** They are not competing. They are compounding. A team that treats them as one algorithmic strategy captures both. A team that treats them as separate loses ground on both. This is the argument I made at length in [*Two Algorithms, One Strategy*](/books/two-algorithms-one-strategy), and the case that founders keep asking me to run for them at [Magicworks](/ventures/magicworks).",
          "**Execution and advisory.** An agency that does one without the other underserves both. Execution without advisory drifts into tactics. Advisory without execution drifts into theory. Integrated, they compound: the advice is grounded in current practice, and the execution is directed by clear thinking about where it should lead. The two founder-led pillars at Magicworks exist because of this exact logic. I have written about that constraint in more depth in [Why marketplace consultation is founder-led](/writing/why-marketplace-consultation-is-founder-led).",
          "**Services and products.** Services scale linearly with people. Products scale with software. Neither replaces the other. Together they let a founder do work that pays back over time in ways neither does alone. Magicworks is the services practice. MagicWorks Host, MagicFlow AI, and Magic Pipeline are the product siblings that came out of the same operating practice."
        ],
        marginalia: {
          label: "Note",
          text: "This is the argument I made at length in Two Algorithms, One Strategy, and the case that founders keep asking me to run at Magicworks. The book is the long version. This is the compressed one."
        }
      },
      {
        id: "III",
        heading: "III · Why the phrase survives",
        headingEm: "survives",
        paragraphs: [
          "I have watched many operating theses evaporate at the second meeting. They tend to be sophisticated framings that need someone to redraw them on a whiteboard whenever the room asks. That is a losing design. A phrase that has to be re-explained every time it is used is a phrase that does not survive contact with real work.",
          "Short phrases survive because they can be repeated without translation. *Two into one* fits into a sentence, a slide, a Slack message, a passing hallway conversation. It carries its own meaning without help. When it appears in a strategy conversation, the conversation moves faster because everyone in the room already knows what it means and can build on it.",
          "This matters more than it sounds like it does. An operating thesis that cannot be repeated is one that is not being used. And a thesis that is not being used is not an operating thesis at all. It is a slogan hanging on a wall."
        ]
      }
    ],
    closingParagraphs: [
      "Founder, operator, investor, author. These are not four separate careers. They are one practice viewed from four angles.",
      "Magicworks is the services practice. [Ideovate](/ventures/ideovate-research) is the operator work: a portal I built to prove [the portal thesis](/writing/the-portal-thesis) to myself before I taught it to anyone else. [Dnyanal Educon](/ventures/dnyanal-educon) is a serious team I invested in because they were doing adjacent work in a category I understand, on their own strength, with their own conviction. The books are the advisory practice written down.",
      "Every one of those roles sits on the same operating thesis. Every one of them exists because I refused to let the market separate things that need to be held together.",
      "That is the through-line. That is the practice."
    ],
    footerNote: "If a page on this site sounds like it comes from a different logic, read it against this one.",
    content: [
      "The markets I have spent seventeen years serving have a habit of separating things that need to be held together. Human strategy and machine execution. Traditional search and AI-powered search. Execution and advisory. Services and products. Founder, operator, investor, author.",
      "Each pair sits in a different column on most maps of the world. Each pair, in the actual work, is a single decision viewed from two sides. I call this the operating thesis. Short version: two into one.",
      "Whenever a market separates two things that belong together, it creates a problem and an opportunity in the same motion.",
      "Human strategy and machine execution, Traditional search and AI-powered search, Execution and advisory, Services and products. Together they let a founder do work that pays back over time in ways neither does alone."
    ],
    marginalia: {
      label: "Note",
      text: "This is the argument I made at length in Two Algorithms, One Strategy, and the case that founders keep asking me to run at Magicworks. The book is the long version. This is the compressed one."
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Two into one: the operating thesis",
      "description": "The operating thesis behind seventeen years at Magicworks and Ideovate. Why integrating strategy and execution, traditional and AI-powered search, services and products beats specialising into one side.",
      "author": {
        "@type": "Person",
        "name": "Swapnil Ughade",
        "url": "https://swapnilughade.com/about",
        "sameAs": ["https://swapnilughade.com/about"]
      },
      "publisher": {
        "@type": "Person",
        "name": "Swapnil Ughade"
      },
      "datePublished": "2026-09-08T09:00:00+05:30",
      "dateModified": "2026-09-08T09:00:00+05:30",
      "mainEntityOfPage": "https://swapnilughade.com/writing/two-into-one-the-operating-thesis",
      "articleSection": "Operating Thesis",
      "keywords": "operating thesis, founder-operator, AI-powered search, marketplace consultation, portal thesis, Magicworks, Ideovate"
    }
  },
  {
    slug: "the-portal-thesis",
    title: "The portal thesis",
    titleEm: "portal",
    category: "Portals & Platforms",
    pillar: "Portals & Platforms",
    publishDate: "2026-09-01",
    updatedDate: "2026-09-01",
    publishedAt: "1 September 2026",
    readingTime: "5 min read",
    canonicalUrl: "https://swapnilughade.com/writing/the-portal-thesis",
    ogImage: "/og-image.png",
    metaDescription: "A well-built portal in a high-trust category creates disproportionate value. What each of those words means at practice level, drawn from running simplidistance.com at Ideovate and advising founders at Magicworks.",
    blurb: "A well-built portal in a high-trust category creates disproportionate value. What each of those words means at practice level.",
    lead: "Founders ask me a version of the same question often enough that I have written a phrase for the answer. The phrase is: a well-built portal in a high-trust category creates disproportionate value.",
    keyTakeaways: [
      "A **portal** is a site that helps a reader make a specific consequential decision, not a site that publishes content in a category.",
      "**High-trust categories** are those where the decision is low-frequency, high-stakes, and difficult for the reader to verify without help.",
      "Portals in these categories generate **disproportionate value** because the reader keeps coming back and competitors specialise into narrower slivers.",
      "The portal thesis is the operating logic behind [Ideovate](/ventures/ideovate-research) and the case I take into every [Marketplace & Platform Consultation](/ventures/magicworks) engagement."
    ],
    introParagraphs: [
      "Founders ask me a version of the same question often enough that I have written a phrase for the answer. The phrase is: a well-built portal in a high-trust category creates disproportionate value.",
      "Each of those five words is doing work. Portal, not site. Well-built, not launched. High-trust category, not any category. Disproportionate value, not steady revenue. When founders ask what I mean by any of them, the answer tends to run long, because the words carry judgment that has been earned across seventeen years of practice.",
      "This piece is the compressed version of that answer."
    ],
    sections: [
      {
        id: "I",
        heading: "I · What \"portal\" actually means",
        headingEm: "actually means",
        paragraphs: [
          "Most people use the word portal loosely. In this thesis I mean something specific.",
          "A **portal** is a site whose primary job is to help a reader make one particular decision that matters to them. Not to publish content in a category. Not to aggregate listings. Not to serve as a lead-generation surface for a related business. The job is decision support, and every design choice on the site is measured against whether it makes the reader's decision easier and better.",
          "A content site publishes to fill a category calendar. A portal publishes to remove specific obstacles between the reader and the right decision. This distinction reads as pedantic on paper. It is load-bearing in practice. It changes what you write, what you compare, what you photograph, and what you leave out.",
          "The reader can tell the difference within thirty seconds. So can the algorithm."
        ]
      },
      {
        id: "II",
        heading: "II · What \"high-trust category\" means",
        headingEm: "high-trust category",
        paragraphs: [
          "A high-trust category is one where three things are true at once.",
          "**The decision is low-frequency.** The reader makes it once, or a handful of times in a lifetime. A distance MBA. A design education. A cardiac procedure. A commercial lease. A first home purchase in a new city.",
          "**The decision is high-stakes.** Getting it wrong costs the reader real time, real money, and often real trajectory. The consequences persist for years.",
          "**The decision is difficult to verify without help.** The reader cannot easily test the answer for themselves before committing. They have to depend on someone else's judgment layered onto their own.",
          "When those three conditions are present, the reader arrives at the market with intent, imperfect information, and a search for someone to trust. Not for the loudest voice. Not for the cheapest option. For a source that will do the harder work of information density and honest comparison on their behalf.",
          "That is the opportunity, and most sites in these categories fail it. They optimise for the vendor side of the transaction, not the reader side. They rank institutions by advertising spend and call it a ranking. They publish thin content on a category calendar and call it authority. The reader leaves with less clarity than they arrived with.",
          "A portal that does the reader-side work instead becomes the site the reader trusts. Which brings us to the third word."
        ]
      },
      {
        id: "III",
        heading: "III · Why the value is disproportionate",
        headingEm: "disproportionate",
        paragraphs: [
          "Portals in high-trust categories compound in ways that content sites do not.",
          "**The reader keeps coming back.** Because the decision is consequential, the reader spends weeks or months on it. Every return visit deepens their relationship with the site that helps them think.",
          "**Word of mouth is unusually strong.** Because the decision is high-stakes, the reader tells others in their network who face the same decision. Recommendation carries more weight than any paid channel can buy in these categories.",
          "**Competitors specialise into narrower slivers.** Rather than build a portal that does the harder work, most competitors carve off a specific vertical or a specific price segment. That leaves the whole-category portal alone in the middle, which is exactly the position the reader is looking for.",
          "**The site becomes the category.** After a certain point, the portal is not one option among many. It is the default. Readers arrive by name rather than by search. Institutions ask to be listed rather than being solicited. The economics of the site shift because the site has become infrastructure the category depends on.",
          "I have watched this play out first-hand at simplidistance.com, the distance and online MBA discovery portal run by [Ideovate](/ventures/ideovate-research). Over fifty thousand qualified leads in sixteen months. Four times year-on-year growth. Cost per lead thirty to forty percent below the industry benchmark. Those numbers are not accidents of the market. They are the arithmetic that follows when a portal thesis is executed properly in a category that rewards it."
        ],
        marginalia: {
          label: "Thesis",
          text: "High-trust portals do not sell clicks; they sell confidence in irreversible decisions."
        },
        dataCallout: {
          metric: "50,000+",
          description: "Qualified admissions inquiries generated on simplidistance.com in 16 months."
        }
      },
      {
        id: "IV",
        heading: "IV · Why I take this thesis into advisory",
        headingEm: "advisory",
        paragraphs: [
          "I built Ideovate to prove this thesis to myself before I taught it to anyone else. The Marketplace & Platform Consultation pillar at [Magicworks](/ventures/magicworks) exists because founders asked me to run this playbook for them once they saw it working.",
          "Which is also why that pillar is founder-led by design. This work does not senior-associate well. It requires operator judgment about category selection, information architecture, editorial voice, and paid economics that has to sit in one head from the first call to the last review. That is a separate essay, which I have written [here](/writing/why-marketplace-consultation-is-founder-led).",
          "The portal thesis, in short: pick the right category, do the reader-side work, and hold on. Time compounds in your favour."
        ]
      }
    ],
    closingParagraphs: [],
    footerNote: "This thesis has anchored two of my ventures and the advisory practice at Magicworks. If you are building in a high-trust category, it is probably the argument you want to be having with yourself.",
    content: [
      "Founders ask me a version of the same question often enough that I have written a phrase for the answer. The phrase is: a well-built portal in a high-trust category creates disproportionate value.",
      "A portal is a site whose primary job is to help a reader make one particular decision that matters to them. Not to publish content in a category.",
      "A high-trust category is one where the decision is low-frequency, high-stakes, and difficult to verify without help.",
      "Portals in high-trust categories compound in ways that content sites do not. The reader keeps coming back and the site becomes infrastructure the category depends on."
    ],
    marginalia: {
      label: "Thesis",
      text: "High-trust portals do not sell clicks; they sell confidence in irreversible decisions."
    },
    dataCallout: {
      metric: "50,000+",
      description: "Qualified admissions inquiries generated on simplidistance.com in 16 months."
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The portal thesis",
      "description": "A well-built portal in a high-trust category creates disproportionate value. What each of those words means at practice level.",
      "author": {
        "@type": "Person",
        "name": "Swapnil Ughade",
        "url": "https://swapnilughade.com/about",
        "sameAs": ["https://swapnilughade.com/about"]
      },
      "publisher": {
        "@type": "Person",
        "name": "Swapnil Ughade"
      },
      "datePublished": "2026-09-01T09:00:00+05:30",
      "dateModified": "2026-09-01T09:00:00+05:30",
      "mainEntityOfPage": "https://swapnilughade.com/writing/the-portal-thesis",
      "articleSection": "Portals & Platforms",
      "keywords": "portal thesis, high-trust category, discovery portal, marketplace consulting, Ideovate, simplidistance, category leader, operating thesis"
    }
  },
  {
    slug: "why-marketplace-consultation-is-founder-led",
    title: "Why marketplace consultation is founder-led",
    titleEm: "founder-led",
    category: "Advisory",
    pillar: "Advisory",
    publishDate: "2026-08-25",
    updatedDate: "2026-08-25",
    publishedAt: "25 August 2026",
    readingTime: "5 min read",
    canonicalUrl: "https://swapnilughade.com/writing/why-marketplace-consultation-is-founder-led",
    ogImage: "/og-image.png",
    metaDescription: "Advisory work in some categories does not senior-associate. The design case for the founder-led constraint on the two advisory pillars at Magicworks, and why holding that line is a feature rather than a growth ceiling.",
    blurb: "Advisory work in some categories does not senior-associate. The design case for the founder-led constraint on the two advisory pillars at Magicworks.",
    lead: "Every founder who runs an advisory practice eventually faces the same question. How do we scale this? The instinctive answer is to hire smart people, train them, systemise the frameworks, and put a senior name on the door of engagements without the founder in the room.",
    keyTakeaways: [
      "Some advisory work **does not senior-associate.** It requires operator judgment that has to sit in one head from first call to last review.",
      "The two founder-led pillars at [Magicworks](/ventures/magicworks) are **AI Consultation (Pillar 03)** and **Marketplace & Platform Consultation (Pillar 04).**",
      "The constraint limits growth of these two lines. That is the point, not the problem.",
      "Founder-led is what makes the work useful. Remove the constraint and the work becomes a deck rather than a decision."
    ],
    introParagraphs: [
      "Every founder who runs an advisory practice eventually faces the same question. How do we scale this? The instinctive answer is to hire smart people, train them, systemise the frameworks, and put a senior name on the door of engagements without the founder in the room.",
      "For most advisory work, that answer is right.",
      "For some advisory work, it is exactly wrong.",
      "The two advisory pillars at Magicworks, AI Consultation and Marketplace & Platform Consultation, are the second kind. They are founder-led by design, not by resourcing constraint. I still take the first call, run the working sessions, and sign off on every recommendation myself. That decision is deliberate, and it is the thing I want to explain here, because founders keep asking why and clients keep asking whether it will change.",
      "The short answer is no. The longer answer is what follows."
    ],
    sections: [
      {
        id: "I",
        heading: "I · What \"does not senior-associate\" means",
        headingEm: "does not senior-associate",
        paragraphs: [
          "Consulting has a phrase for the work that senior associates do well: leverage. The partner makes the sale, sets the frame, reviews the deliverable, and holds the client relationship. Everything in between is done by capable people who follow a well-designed process. When it works, the model is beautiful: one partner can hold ten engagements at once because the process is doing most of the thinking.",
          "That model breaks in specific categories. It breaks when the work requires judgment that cannot be trained fast enough. Judgment about which category to enter. Judgment about which reader to serve. Judgment about which decision the site is actually helping the reader make. Judgment about when the paid economics are lying to you. Judgment about which piece of AI tooling is genuinely useful today versus which is a demo pretending to be a product.",
          "None of that is proceduralisable. It is pattern recognition earned by doing the work personally over a long time. When you take it out of the partner's head and put it into a senior associate's briefing document, the recommendations start to look right on paper and fail on contact with the actual market.",
          "Which is a polite way of saying: the client pays for the deck and does not get the decision."
        ]
      },
      {
        id: "II",
        heading: "II · The two pillars this applies to",
        headingEm: "applies to",
        paragraphs: [
          "At Magicworks I run five service pillars. Three of them are properly team-led: Digital Marketing (Pillar 01), Web Development (Pillar 02), and Brand, Research & Publishing (Pillar 05). These are engagements where excellent teams can and do produce excellent work at scale, with me in an oversight role and out of the day-to-day.",
          "Two of them are not.",
          "**Pillar 03 · AI Consultation.** This is advisory on how a mid-market business should actually adopt AI across marketing, operations, and product. The category is a year old at most, changing every quarter, full of demos that look like products and products that turn out to be demos. Any recommendation I make today will be re-examined in six months. That review has to be done by someone who has been personally paying attention across the whole horizon, not by someone reading a summary of it.",
          "**Pillar 04 · Marketplace & Platform Consultation.** This is advisory for founders building portals and platforms. The work draws on the [portal thesis](/writing/the-portal-thesis) I proved at [Ideovate](/ventures/ideovate-research) and on the operator scars that came from running simplidistance.com for six years. The engagement covers category economics, information architecture, editorial governance, and paid economics that all have to be judged together. You cannot senior-associate that judgment without losing what makes it worth paying for.",
          "Both pillars are engagements where I sit in the first call, the working sessions, the mid-project reviews, and the final handover. That is not a marketing claim. It is the specification."
        ],
        marginalia: {
          label: "Aside",
          text: "Marketplaces live or die on conversion trust velocity. An unvetted lead pipeline burns sales team bandwidth faster than ad budget."
        }
      },
      {
        id: "III",
        heading: "III · Why the constraint is a feature",
        headingEm: "feature",
        paragraphs: [
          "The obvious cost of founder-led work is that these two pillars cannot grow the way the other three can. There are only so many hours in the week and so many months in the year. Any strategy that requires scaling founder attention hits a ceiling that no amount of process design can move.",
          "I have thought about that trade carefully. The constraint is the point, and here is why.",
          "**It keeps the quality honest.** When my name is on every recommendation, I cannot ship work I would not defend at a whiteboard. That constraint sharpens every deliverable in ways that a review layer over someone else's work never quite does.",
          "**It keeps the pricing honest.** Founder-led work costs more than team-led work, and it should. Clients who want the price of team-led work should hire team-led providers. The mismatch of expectations gets sorted at the sales call rather than at the halfway review.",
          "**It keeps me in the work.** The main reason I still find these two pillars interesting after seventeen years is that they are where the practice actually happens. If I hand them off, I stop learning, and if I stop learning, the practice becomes something I can look up rather than something I can do.",
          "**It keeps the practice small on purpose.** A big consulting shop has its own incentives that eventually override client outcomes. A small founder-led practice does not. That is a real difference, and it is one of the things that makes clients repeat."
        ]
      },
      {
        id: "IV",
        heading: "IV · What this means for a prospective client",
        headingEm: "prospective client",
        paragraphs: [
          "If you are considering an engagement with either of these two pillars, three things follow from the founder-led design.",
          "**Lead time is longer than for team-led work.** I take on a limited number of engagements at a time. The waitlist is real. Plan accordingly.",
          "**Scope is narrower and deeper than a typical advisory brief.** I would rather do the important half of what you want, done properly, than the surface of the whole thing.",
          "**Handover is real.** When the engagement ends, your team has to be able to run the recommendations without me. So the working sessions are as much about capability transfer as they are about the deliverable.",
          "Everything else is negotiable. The founder-led constraint is not."
        ]
      }
    ],
    closingParagraphs: [],
    footerNote: "This is the reason the two advisory pillars at Magicworks look the way they do. It is also the reason I am still in every engagement personally, seventeen years in.",
    content: [
      "Every founder who runs an advisory practice eventually faces the same question: How do we scale this? The instinctive answer is to hire smart people and build leverage.",
      "For some advisory work, that model breaks when the work requires operator judgment that cannot be trained fast enough.",
      "The two founder-led pillars at Magicworks (AI Consultation and Marketplace & Platform Consultation) remain founder-led by design.",
      "The constraint limits growth, but keeps quality and pricing honest, and keeps me in the actual practice."
    ],
    marginalia: {
      label: "Aside",
      text: "Marketplaces live or die on conversion trust velocity. An unvetted lead pipeline burns sales team bandwidth faster than ad budget."
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Why marketplace consultation is founder-led",
      "description": "The design case for the founder-led constraint on the two advisory pillars at Magicworks.",
      "author": {
        "@type": "Person",
        "name": "Swapnil Ughade",
        "url": "https://swapnilughade.com/about",
        "sameAs": ["https://swapnilughade.com/about"]
      },
      "publisher": {
        "@type": "Person",
        "name": "Swapnil Ughade"
      },
      "datePublished": "2026-08-25T09:00:00+05:30",
      "dateModified": "2026-08-25T09:00:00+05:30",
      "mainEntityOfPage": "https://swapnilughade.com/writing/why-marketplace-consultation-is-founder-led",
      "articleSection": "Advisory",
      "keywords": "founder-led consulting, marketplace consultation, AI consultation, advisory practice, boutique consulting, Magicworks, Pillar 03, Pillar 04"
    }
  },
  {
    slug: "three-questions-before-every-ad-account-audit",
    title: "The three questions before every ad account audit",
    titleEm: "ad account audit",
    category: "Consultancy",
    pillar: "Consultancy",
    subPillar: "Digital Marketing",
    publishDate: "2026-10-05",
    updatedDate: "2026-10-05",
    publishedAt: "5 October 2026",
    readingTime: "5 min read",
    canonicalUrl: "https://swapnilughade.com/writing/three-questions-before-every-ad-account-audit",
    ogImage: "/images/writing/three-questions-audit.jpg",
    metaDescription: "The Google Ads audit framework starts with three questions: what is the account trying to do, what is the evidence it is doing that, what would we change first.",
    blurb: "Three questions decide whether an ad account is unclear or underperforming: what is the account trying to do, what is the evidence it is doing that, what would we change first.",
    lead: "My instinct on being handed an account to audit is to open the interface. Pull the last ninety days. Tab through campaign structure, ad groups, keywords, negatives, extensions, bidding strategies. The instinct is understandable and mostly wrong.",
    keyTakeaways: [
      "Three questions decide whether an ad account is **unclear or underperforming** before any audit begins.",
      "**Question 1:** What is the account trying to do? (One sentence, one number, one boundary).",
      "**Question 2:** What is the evidence it is doing that? (Verify the intact measurement architecture).",
      "**Question 3:** What would we change first? (Elicit the operator's unprompted instinct)."
    ],
    introParagraphs: [
      "My instinct on being handed an account to audit is to open the interface. Pull the last ninety days. Tab through campaign structure, ad groups, keywords, negatives, extensions, bidding strategies. The instinct is understandable and mostly wrong. Every hour spent that way, before answering the questions below, is an hour producing findings the account owner cannot use.",
      "An account is not usually underperforming. It is usually unclear. The three questions separate one condition from the other, and the difference matters because they have different remedies. An underperforming account needs execution; an unclear account needs an operating decision. Auditing the second as if it were the first produces a long report and no change.",
      "The frameworks in [*The AI-Powered Google Ads System*](/books/ai-powered-google-ads-system) start here, and the frameworks that come later assume this question has been answered. When it hasn't, every downstream recommendation is a guess with a chart attached."
    ],
    sections: [
      {
        id: "I",
        heading: "Question 1. What is the account trying to do?",
        headingEm: "trying to do",
        paragraphs: [
          "The single objective the account is optimised for. Not the marketing team's quarterly targets, not the CMO's slide, not the board's north-star metric. The account's operating instructions.",
          "The right answer is boring: \"acquire qualified leads under ₹1,200 CAC,\" or \"drive first purchases at 4.2x ROAS,\" or \"book demos with prospects above ₹5 lakh ARR potential.\" One sentence, one number, one boundary. If the answer requires reading between the lines of an internal deck, the account is unclear before the audit begins.",
          "An account without a single operating objective develops a common pathology. Different campaigns optimise for different things: some for conversions, some for clicks, some for a legacy target set in a previous quarter and never updated. Media budget flows toward whichever campaign the automation deems \"successful\" this week, which often is not the campaign that supports the business. On paper the account looks busy. In reality it is drifting.",
          "Ask the question the way a new head of marketing would ask it. If the account owner needs more than one sentence, or hedges, or names three things, note it. That is the audit's first finding."
        ]
      },
      {
        id: "II",
        heading: "Question 2. What is the evidence it is doing that?",
        headingEm: "evidence",
        paragraphs: [
          "The measurement architecture. Which conversions are counted, which windows, which attribution model, which primary metric on the reporting layer. What is imported from the CRM, on what cadence, joined on what identifier.",
          "This is not a place to be diplomatic. Either the evidence chain from click to counted outcome is intact, or it isn't. Common breakdowns worth naming plainly:\n\n• The account's stated target is CAC on qualified leads, but the counted conversion is \"all form submissions,\" including newsletter signups and support tickets.\n• Attribution is set to last-click inside the account, but the reporting deck cites Data-Driven numbers copied from a different environment.\n• View-through conversions are on by default and quietly inflate the numbers no one questions.\n• Offline conversion imports run weekly, but bidding operates on the seven-day click window; the loop closes after the automation has already made its decisions.\n• Conversion tags fire twice on the thank-you page because the redesign in April kept the old tag alongside the new one.",
          "Each of these is invisible at the reporting layer and produces a systematically wrong picture of what the account is doing. An account with a broken measurement chain cannot be audited for performance; it has to be audited for measurement first. The order matters."
        ]
      },
      {
        id: "III",
        heading: "Question 3. What would we change first?",
        headingEm: "change first",
        paragraphs: [
          "The account owner's honest answer, before the audit begins. If the operator cannot name their top-priority change without the audit, the audit has an outsized role to play, and probably the wrong one. It is now expected to surface an unknown, which is a hard thing to ask of any audit and an easy thing to get wrong.",
          "If the operator can name it, the audit's job is different and much better defined. It becomes: validate this instinct, or contest it, in that order. Most of the time the audit ends up validating. The operator is closer to the account than anyone else and has usually already sensed where the leverage is. The value of the audit is confirmation, sequencing, and one or two adjacent findings the operator was not close enough to see.",
          "The other value of asking this question up front is that it flushes out the account's political geography. When the operator names their top-priority change and it is different from the change the CMO wants named, the audit is now walking into a decision the audit was not authorised to make. Better to know that before writing the report than after."
        ]
      },
      {
        id: "IV",
        heading: "What the three questions change",
        headingEm: "questions change",
        paragraphs: [
          "The three questions turn an audit from a list of things wrong into a prioritised set of decisions with an owner. That is the whole difference. A long list of findings without an owner is a document; a shorter list of decisions with an owner is a plan.",
          "For a marketing lead handed a mid-size Google Ads account, the questions land as a standing pre-audit checklist and the front end of the Google Ads audit framework I use across every engagement. Send them to the account manager three working days before the audit call. Ask for one-sentence answers. Read the answers before opening the interface. If any answer is missing or hedged, that is the finding, and the audit either changes shape or is deferred until the underlying decision is made.",
          "Across the ad accounts refined through [MagicWorks IT Solutions Pvt. Ltd.](https://magicworksitsolutions.com), the AI-first digital marketing agency I founded in 2009, the pattern has held. Accounts where all three answers arrive cleanly are audited in a day; the audit becomes a decision brief. Accounts where the answers arrive hedged or missing produce a longer audit, but that audit's first section is now about the operating decisions that need to be made before the media questions can be addressed sensibly."
        ]
      },
      {
        id: "V",
        heading: "What the AI-first tools do here",
        headingEm: "AI-first tools",
        paragraphs: [
          "Automated audits sharpen this rather than replace it. The current generation of tools can produce more findings in an hour than any team can act on in a quarter. That volume is a feature only if the findings can be filtered by relevance to a stated objective. Without the three questions answered, \"relevance\" has no definition, and the tool's output becomes noise dressed in charts.",
          "With the three questions answered, the automation earns its place. It flags the anomalies that touch the stated objective, sequences them by likely impact, and hands the shortlist to a human who can now audit with the confidence that every item on the list connects to something the account is actually trying to do.",
          "The full audit framework, including the four-phase structure that follows once the three questions are answered, is Chapter 3 of [*The AI-Powered Google Ads System*](/books/ai-powered-google-ads-system), co-authored with Mohan Chute and published September 2026."
        ]
      }
    ],
    closingParagraphs: [
      "**Sources and references.**\n\n• Audit framework and its four-phase structure: *The AI-Powered Google Ads System*, Chapters 2 and 3, Swapnil Ughade and Mohan Chute, September 2026.\n• Managed-spend context of ₹70+ Crore ($8M) across 50+ client accounts: [MagicWorks IT Solutions Pvt. Ltd.](https://magicworksitsolutions.com), September 2026.\n• Attribution and conversion-window terminology per Google Ads documentation, current as of September 2026.",
      "**About the author.** Swapnil Ughade is Founder · Operator · Investor · Author. He runs [MagicWorks IT Solutions Pvt. Ltd.](https://magicworksitsolutions.com), the AI-first digital marketing agency he founded in Pune in 2009. He is the author of *Two Algorithms, One Strategy* (April 2026) and, with Mohan Chute, *[The AI-Powered Google Ads System](/books/ai-powered-google-ads-system)* (September 2026). Frameworks refined across ₹70+ Crore ($8M) in managed ad spend. More at [/about](/about)."
    ],
    footerNote: "Three questions decide whether an ad account is unclear or underperforming. Asked in order before any audit begins, half the audit answers itself.",
    content: [
      "My instinct on being handed an account to audit is to open the interface. The instinct is understandable and mostly wrong.",
      "An account is not usually underperforming. It is usually unclear. Three questions decide whether an account is unclear or underperforming.",
      "What is the account trying to do? What is the evidence it is doing that? What would we change first?",
      "The three questions turn an audit from a list of things wrong into a prioritised set of decisions with an owner."
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "https://swapnilughade.com/writing/three-questions-before-every-ad-account-audit#article",
          "headline": "The three questions before every ad account audit",
          "description": "The Google Ads audit framework starts with three questions: what is the account trying to do, what is the evidence it is doing that, what would we change first.",
          "author": { "@id": "https://swapnilughade.com/about#person" },
          "publisher": { "@id": "https://swapnilughade.com/#organization" },
          "datePublished": "2026-10-05T09:00:00+05:30",
          "dateModified": "2026-10-05T09:00:00+05:30",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://swapnilughade.com/writing/three-questions-before-every-ad-account-audit"
          },
          "articleSection": "Consultancy",
          "keywords": "google ads audit framework, how to audit a google ads account, google ads audit checklist, ad account audit, ai-first marketing",
          "image": "https://swapnilughade.com/images/writing/three-questions-audit.jpg",
          "inLanguage": "en-IN"
        },
        {
          "@type": "Person",
          "@id": "https://swapnilughade.com/about#person",
          "name": "Swapnil Ughade",
          "url": "https://swapnilughade.com/about",
          "jobTitle": "Founder, Operator, Investor, Author",
          "worksFor": { "@id": "https://swapnilughade.com/#organization" },
          "sameAs": [
            "https://www.linkedin.com/in/swapnilughade",
            "https://www.amazon.com/author/swapnilughade"
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://swapnilughade.com/#organization",
          "name": "Swapnil Ughade",
          "url": "https://swapnilughade.com/",
          "logo": "https://swapnilughade.com/brand/signature.svg"
        }
      ]
    }
  },
  {
    slug: "five-pillars-three-siblings-how-magicworks-is-structured-in-2026",
    title: "Five pillars, three siblings: how MagicWorks is structured in 2026",
    titleEm: "MagicWorks",
    category: "Operator's Diary",
    pillar: "Operator's Diary",
    publishDate: "2026-10-12",
    updatedDate: "2026-10-12",
    publishedAt: "12 October 2026",
    readingTime: "6 min read",
    canonicalUrl: "https://swapnilughade.com/writing/five-pillars-three-siblings-how-magicworks-is-structured-in-2026",
    ogImage: "/images/writing/magicworks-structure-2026.jpg",
    metaDescription: "MagicWorks IT Solutions Pvt. Ltd. runs as five service pillars with three sibling brands inside the group. A public map of how the agency is organised in 2026.",
    blurb: "MagicWorks IT Solutions Pvt. Ltd. runs as five service pillars with three sibling brands inside the group. A public map of how the agency is organised in 2026.",
    lead: "For most of seventeen years, MagicWorks IT Solutions Pvt. Ltd. ran as one service line. A single pitch: digital marketing for growing Indian businesses, done properly. A single deliverable envelope: strategy, execution, reporting. A single kind of client conversation. It worked, until it did not.",
    keyTakeaways: [
      "Under one service line, **five distinct practices** had grown up quietly inside MagicWorks.",
      "The five service pillars: **Digital Marketing, Web Development, AI Consultation, Marketplace & Platform Consultation, and Brand, Research & Publishing.**",
      "Three product siblings run inside the group: **MagicWorksHost.com, MagicFlow AI, and Magic Pipeline.**",
      "No sibling brand ships to an external customer before the parent agency has staked its own delivery on it."
    ],
    introParagraphs: [
      "For most of seventeen years, MagicWorks IT Solutions Pvt. Ltd. ran as one service line. A single pitch: digital marketing for growing Indian businesses, done properly. A single deliverable envelope: strategy, execution, reporting. A single kind of client conversation. It worked, until it did not.",
      "The moment it stopped working was not dramatic. There was no crisis. There was a slow accumulation of things that were true separately and no longer true together. Half the accounts were paying for media that MagicWorks was also building the destination for. A quarter were paying for what looked more like management consultancy with a Google Ads invoice attached. A tenth were on retainers whose scope had drifted so far from the original brief that the retainer name was the only thing still holding it together.",
      "Under one service line, five different practices had grown up quietly. Each had its own client type, its own delivery cadence, its own skill profile, its own margin structure. The org chart said one thing; the P&L said another. Every operator eventually meets the moment where the two diverge past the point of reconciliation. Ours came in the second half of 2024.",
      "The rest of that year, and most of 2025, went to naming what was already true. What follows is where we ended up."
    ],
    sections: [
      {
        id: "I",
        heading: "The five service pillars",
        headingEm: "service pillars",
        paragraphs: [
          "The pillars are not creative. They describe the work as it exists. Each has its own leadership, its own hiring track, its own client acquisition path, and its own margin target. They share infrastructure, culture, and the founder's attention; they do not share P&Ls.",
          "**Pillar 01 · Digital Marketing.** SEO, GEO, AEO, Google Ads, Meta Ads, attribution architecture, measurement, reporting. The pillar most clients still encounter first. Where the ₹70+ Crore ($8M) of managed ad spend has flowed. The pillar the books sit under: [*The AI-Powered Google Ads System*](/books/ai-powered-google-ads-system) (September 2026, with Mohan Chute) and *Two Algorithms, One Strategy* (April 2026) are both first-person artefacts of this pillar. The [three-question pre-audit](/writing/three-questions-before-every-ad-account-audit) that opened this month's writing sits here.",
          "**Pillar 02 · Web Development.** Next.js sites, e-commerce builds, custom applications, technical SEO implementations. Where the destination for Pillar 01's media traffic is built, sustained, and instrumented. Run as a delivery practice, not a design studio.",
          "**Pillar 03 · AI Consultation.** LLM integrations for client operations, custom chatbots, retrieval-augmented generation, workflow automation, prompt engineering treated as a durable discipline rather than a party trick. The pillar that has grown fastest through 2025 and 2026, and the pillar where the ideas that later became MagicFlow AI and Magic Pipeline first ran as bespoke engagements.",
          "**Pillar 04 · Marketplace and Platform Consultation.** The founder-led pillar. Platform economics, marketplace design, portal unit economics, multi-tenant SaaS architecture, cross-side monetisation. Serves a smaller number of engagements at a higher altitude. Draws on operating experience from Ideovate Research Pvt. Ltd. (which runs the discovery portal simplidistance.com) and from the sibling products described below. This is the pillar where I still take the first meeting personally; it is also the pillar most likely to end in a decision the client had not planned to make.",
          "**Pillar 05 · Brand, Research and Publishing.** Positioning, category work, research briefs, and the publishing programme itself: the books, the newsletter, the long-form pieces on this site. A quieter pillar in headcount, a load-bearing one in reputation. Its job is to make the practice legible to the market.",
          "The pillars are numbered because sequencing matters for a client engagement. A campaign built without measurement is a spend, not an investment. A measurement architecture built without a destination is a report. A destination built without a category is content. Pillars 01 through 05 map, roughly, to the order in which questions get answered for a serious client."
        ]
      },
      {
        id: "II",
        heading: "The three sibling brands",
        headingEm: "sibling brands",
        paragraphs: [
          "Inside the MagicWorks Group, three sibling brands run as products rather than services. They share the parent's infrastructure and, in most cases, its clients; they do not share its billing model. Each has its own site, its own subscription surface, its own product roadmap.",
          "**[MagicWorksHost.com](https://magicworkshost.com/)** is the domain and hosting arm. Founded to serve MagicWorks' own clients, on the principle that a site build without a hosting plan attached is a handoff waiting to break, it now also serves external customers who arrive without a services engagement. It is the oldest sibling and the least glamorous; it is also the one that never has an outage without a phone call.",
          "**[MagicFlow AI](https://www.magicflowai.io/)** is a multi-tenant AI-chatbot SaaS. A client signs up on the site, connects their knowledge base, deploys an AI chatbot on their own site under their own brand, and pays a monthly subscription for it. Launched publicly in May 2026 after a year of running inside MagicWorks first. Represents the productisation of the AI Consultation work that used to be bespoke.",
          "**[Magic Pipeline](https://www.magicpipeline.io/)** is a multi-tenant outreach and CRM SaaS. Multi-channel outreach, unified reply handling, pipeline analytics. Launched internally in April 2026 and now used across MagicWorks' own business development. It will open to public subscription when the internal use has surfaced the last of the workflow decisions that only a live business can teach a product.",
          "The pattern for the siblings is consistent, and worth naming plainly. Each began as a bespoke solve inside Pillar 03. Each was rebuilt as a productised service once the underlying pattern was clear enough to be worth engineering against. Each opened to external customers only after MagicWorks itself had used it long enough to know what it should not do. The rule: no sibling brand ships to an external customer before the parent agency has staked its own delivery on it."
        ]
      },
      {
        id: "III",
        heading: "Why the structure holds",
        headingEm: "structure holds",
        paragraphs: [
          "The structure holds because it is not architecture; it is a description. Each pillar existed before it was named. Naming it made it operable: gave it a leader, a P&L, a hiring track, a way of saying no to work that belongs somewhere else. Naming the siblings made the difference between services and products explicit, which stopped the accidental discounting of one to fund the other.",
          "There is no matrix. There is no dotted-line reporting. There is no attempt to force every engagement through a single delivery methodology; each pillar delivers the way its work delivers. What is shared is smaller and more real: a client-service standard, an editorial voice, a brand system, an audit rhythm, and a founder available to any pillar that needs a decision escalated. That is enough.",
          "The one detail worth flagging for anyone reading this and considering copying the shape: the pillars did not arrive by design. They arrived by acknowledgement. Trying to build them into existence before the underlying practice has grown is the surest way to get an org chart that describes a business no one is actually running."
        ]
      },
      {
        id: "IV",
        heading: "What the structure changes for the reader",
        headingEm: "changes for the reader",
        paragraphs: [
          "For a client scoping an engagement: knowing which pillar you are speaking to changes the shape of the first conversation. A Pillar 01 conversation begins with an objective and a measurement architecture. A Pillar 04 conversation begins with unit economics and a category question. Confusing the two costs both parties a meeting.",
          "For a candidate considering MagicWorks: the pillar you would join has more to do with your day than the company name does. The pillars recruit differently and reward differently, and the honest thing is to say which one is hiring before the interview.",
          "For anyone writing about the agency: the structure is public now, on this page and on [/about](/about), and can be quoted verbatim.",
          "For the operator, which is my own vantage: making the structure public has done what public structures usually do. It has made decisions faster. It has made \"no\" easier. It has made the difference between a good year and a busy one a matter of evidence rather than instinct.",
          "The structure will change again. When it does, this page will be updated and dated. The structure is a snapshot; the practice is what continues."
        ]
      }
    ],
    closingParagraphs: [
      "**Sources and references.**\n\n• Company incorporation: [MagicWorks IT Solutions Pvt. Ltd.](https://magicworksitsolutions.com), incorporated in Pune on 26 September 2012; operating since 2009.\n• Sibling brand launches: [Magic Pipeline](https://www.magicpipeline.io/) internal launch April 2026; [MagicFlow AI](https://www.magicflowai.io/) public launch May 2026; new [MagicWorks IT Solutions](https://magicworksitsolutions.com) site (Next.js) launched June 2026.\n• Managed-spend context: ₹70+ Crore ($8M) across 50+ client accounts, current as of September 2026.\n• Related portfolio positions and dates as documented on [/about](/about), current as of September 2026."
    ],
    footerNote: "The structure is a snapshot; the practice is what continues.",
    content: [
      "For most of seventeen years, MagicWorks IT Solutions Pvt. Ltd. ran as one service line. It worked, until it did not.",
      "Under one service line, five different practices had grown up quietly: Digital Marketing, Web Development, AI Consultation, Marketplace & Platform Consultation, and Brand, Research & Publishing.",
      "Inside the MagicWorks Group, three sibling brands run as products rather than services: MagicWorksHost.com, MagicFlow AI, and Magic Pipeline.",
      "The structure holds because it is not architecture; it is a description of how the agency is organised in 2026."
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "https://swapnilughade.com/writing/five-pillars-three-siblings-how-magicworks-is-structured-in-2026#article",
          "headline": "Five pillars, three siblings: how MagicWorks is structured in 2026",
          "description": "MagicWorks IT Solutions Pvt. Ltd. runs as five service pillars with three sibling brands inside the group. A public map of how the agency is organised in 2026.",
          "author": { "@id": "https://swapnilughade.com/about#person" },
          "publisher": { "@id": "https://swapnilughade.com/#organization" },
          "about": { "@id": "https://magicworksitsolutions.com/#organization" },
          "datePublished": "2026-10-12T09:00:00+05:30",
          "dateModified": "2026-10-12T09:00:00+05:30",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://swapnilughade.com/writing/five-pillars-three-siblings-how-magicworks-is-structured-in-2026"
          },
          "articleSection": "Operator's Diary",
          "keywords": "MagicWorks IT Solutions structure, how MagicWorks is organised, digital marketing agency structure India, MagicWorks pillars, MagicWorks Group",
          "image": "https://swapnilughade.com/images/writing/magicworks-structure-2026.jpg",
          "inLanguage": "en-IN"
        },
        {
          "@type": "Person",
          "@id": "https://swapnilughade.com/about#person",
          "name": "Swapnil Ughade",
          "url": "https://swapnilughade.com/about",
          "jobTitle": "Founder, Operator, Investor, Author",
          "worksFor": { "@id": "https://magicworksitsolutions.com/#organization" },
          "sameAs": [
            "https://www.linkedin.com/in/swapnilughade",
            "https://www.amazon.com/author/swapnilughade"
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://swapnilughade.com/#organization",
          "name": "Swapnil Ughade",
          "url": "https://swapnilughade.com/",
          "logo": "https://swapnilughade.com/brand/signature.svg"
        },
        {
          "@type": "Organization",
          "@id": "https://magicworksitsolutions.com/#organization",
          "name": "MagicWorks",
          "legalName": "MagicWorks IT Solutions Pvt. Ltd.",
          "url": "https://magicworksitsolutions.com/",
          "foundingDate": "2009",
          "founder": { "@id": "https://swapnilughade.com/about#person" },
          "location": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pune",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            }
          },
          "description": "AI-first digital marketing agency. Five service pillars: Digital Marketing, Web Development, AI Consultation, Marketplace and Platform Consultation, and Brand, Research and Publishing. Three sibling brands inside the group: MagicWorksHost.com, MagicFlow AI, and Magic Pipeline.",
          "brand": [
            {
              "@type": "Brand",
              "name": "MagicWorksHost.com",
              "description": "Domain and hosting arm of the MagicWorks Group."
            },
            {
              "@type": "Brand",
              "name": "MagicFlow AI",
              "url": "https://magicflowai.io/",
              "description": "Multi-tenant AI-chatbot SaaS. Publicly available since May 2026."
            },
            {
              "@type": "Brand",
              "name": "Magic Pipeline",
              "url": "https://magicpipeline.io/",
              "description": "Multi-tenant outreach and CRM SaaS. Launched internally April 2026."
            }
          ]
        }
      ]
    }
  },
  {
    slug: "unit-economics-of-a-discovery-portal",
    title: "The unit economics of a discovery portal",
    titleEm: "discovery portal",
    category: "Consultancy",
    pillar: "Consultancy",
    subPillar: "Marketplace and Platform",
    publishDate: "2026-10-19",
    updatedDate: "2026-10-19",
    publishedAt: "19 October 2026",
    readingTime: "6 min read",
    canonicalUrl: "https://swapnilughade.com/writing/unit-economics-of-a-discovery-portal",
    ogImage: "/images/writing/discovery-portal-unit-economics.jpg",
    metaDescription: "Discovery portal unit economics turn on three numbers: cost per qualified lead, session-to-inquiry rate, and close rate at the counterparty. A working framework.",
    blurb: "Portal unit economics turn on three numbers: cost per qualified lead, session-to-inquiry rate, and close rate at the counterparty. Multiply them, and the result is contribution per session.",
    lead: "The portal thesis is a good story until the numbers arrive. It is the story of a two-sided platform that matches users on one side with counterparties on the other. What the spreadsheet says, when someone opens it, is that a discovery portal is one of the most measurable businesses an operator can build.",
    keyTakeaways: [
      "Portal unit economics turn on **three core numbers**: cost per qualified lead, session-to-inquiry rate, and close rate at the counterparty.",
      "**CPQL** constrains the portal to honest acquisition and separates it from lead-buy businesses.",
      "**Session-to-inquiry** is the purest product-market fit metric on the analytics dashboard.",
      "Portals that track counterparties' close rates by cohort shift from **service suppliers to data partners.**"
    ],
    introParagraphs: [
      "The portal thesis is a good story until the numbers arrive. It is the story of a two-sided platform that matches users on one side (students, patients, home buyers, job seekers) with counterparties on the other (universities, hospitals, developers, employers). It is a story that can be told for an hour without touching a spreadsheet, and it usually is. What the spreadsheet says, when someone opens it, is that a discovery portal is one of the most measurable businesses an operator can build, and one of the most punishing when the measurement is skipped.",
      "The math is not complicated. Three numbers describe most of it, and what the three numbers do not describe, the multiplication of them almost always does. What follows is the framework I have used across five years of running [Ideovate Research Pvt. Ltd.](https://simplidistance.com), and across advisory engagements inside [Pillar 04 at MagicWorks](/writing/five-pillars-three-siblings-how-magicworks-is-structured-in-2026), the founder-led pillar for platform and marketplace consultation."
    ],
    sections: [
      {
        id: "I",
        heading: "What a discovery portal actually is",
        headingEm: "discovery portal",
        paragraphs: [
          "Before the numbers, a definition worth being precise about. A discovery portal is not a marketplace. A marketplace clears the transaction on-platform; a portal introduces and steps aside. A portal is also not a lead-generation shop. A lead-gen shop sells leads without owning the qualification model; a portal owns the qualification model, and everything downstream depends on that ownership.",
          "The distinction matters because it decides which numbers the portal is allowed to be measured by. A marketplace answers to gross merchandise value. A lead-gen shop answers to cost per lead. A portal answers to something in between, and reporting the wrong number is the fastest way to confuse investors, partners, and, eventually, yourself."
        ]
      },
      {
        id: "II",
        heading: "The three numbers",
        headingEm: "three numbers",
        paragraphs: [
          "**Number one: cost per qualified lead (CPQL).** Not cost per lead. The word that matters is \"qualified,\" and its definition is negotiated with each counterparty. A university might define qualified as a prospect within a defined age range, with a stated intent to enrol within twelve months, at or above a minimum eligibility bar. A hospital might define it as a self-declared symptom that matches its specialisation. The definition is not the portal's to make; the definition is the portal's to encode.\n\nCPQL is the number that separates portal economics from lead-buy economics. A lead-buy business can improve cost per lead by loosening the definition; a portal cannot, because a loose definition breaks the counterparty relationship, which is the only relationship worth having. CPQL constrains the portal to honest acquisition, which is the whole point.",
          "**Number two: session-to-inquiry rate.** The purest product-market fit signal a portal has. Not bounce rate, not session depth, not time on page: those are proxies for engagement. The number that matters is the fraction of sessions that end in a submitted inquiry aimed at a specific counterparty. Nothing else on the analytics dashboard tells you as directly whether the portal is doing its job.\n\nSession-to-inquiry is where product and content pay for themselves. Better search, better filters, better counterparty pages, better calls to action; every product decision on a portal should be measurable against this number, and most eventually are.",
          "**Number three: close rate at the counterparty.** The number the portal cannot control and must know. Once a qualified inquiry is handed to the counterparty, the portal's leverage ends. What happens next is admissions calling back within the hour or not, the sales team following up in three days or ten, the enrolment process being clear or a maze. The portal's economics are hostage to a workflow it does not run.\n\nThis is the number most portal teams underestimate, and the number the good portals track with a discipline the counterparties themselves often do not. A portal that knows its counterparties' close rates, by cohort, by channel, by season, has a data asset the counterparties will eventually pay for. A portal that does not is a lead broker whose margin is dictated by whoever cares more about tracking."
        ]
      },
      {
        id: "III",
        heading: "Why the multiplication matters",
        headingEm: "multiplication",
        paragraphs: [
          "Multiply the three numbers, weight by revenue per closed customer, and the result is contribution per session. That is the number an operator should be able to state without opening a spreadsheet.",
          "The compounding is unforgiving. A portal with a decent CPQL, a decent session-to-inquiry rate, and weak close-rate visibility looks, on any single number, like a portal doing well. On contribution per session, it is losing money on the highest-value cohort and cannot say which cohort that is. A portal that improves any one number by 30% typically improves contribution per session by more, because the other two often improve as a knock-on effect. The model is non-linear both ways."
        ]
      },
      {
        id: "IV",
        heading: "What the Ideovate operating experience taught",
        headingEm: "Ideovate operating experience",
        paragraphs: [
          "Ideovate Research Pvt. Ltd., which I founded in October 2018 and continue to direct, operates simplidistance.com, a distance and online MBA discovery portal serving prospective learners across Indian universities. What follows is directional rather than exact; specific figures are held back for commercial reasons.",
          "Across five years of operation, three observations have held. First, CPQL varies far more by acquisition channel than by content-side improvement, and the channels that look cheapest by cost-per-click almost never win on qualified cost. Second, session-to-inquiry improves in step-changes, not gradients: a single well-shipped product decision moves the number in a way six months of tuning does not. Third, the counterparties whose close rates the portal knows well pay a materially higher effective rate than the counterparties whose close rates the portal has to guess. None of this is proprietary insight. All of it is easy to say and hard to run."
        ]
      },
      {
        id: "V",
        heading: "What separates a portal from a lead-buy business",
        headingEm: "lead-buy business",
        paragraphs: [
          "The three numbers, taken together, describe the difference between a portal and a lead-buy business, and it is worth naming that difference plainly because it comes up in every early conversation with an investor.",
          "A lead-buy business optimises for cost per lead against a spread. Its margin is the difference between what it pays to acquire and what a counterparty pays to receive. It compounds slowly, it commoditises fast, and its defensibility is a media-buying skill and a supplier list.",
          "A portal owns its qualification model, its product surface, and its counterparty relationships as a system. The three numbers sit inside the system, not outside it. That ownership is what compounds. Over years, it produces a data asset (which cohorts convert, at what price, into which counterparties) that a competitor cannot replicate by outspending on Google Ads. This is the compounding advantage; it is also the reason portals take longer to look good than lead-buy businesses, and longer still to look tired."
        ]
      }
    ],
    closingParagraphs: [
      "The three numbers are the portal. Running them daily, publishing them monthly to the operating team, and defending them quarterly to the counterparties is what a portal actually is under the marketing. Everything else, the design, the content, the growth channels, the partnerships, is a lever on one of the three.\n\nPortal defensibility comes from the three numbers being in the portal's hands, not the ad platform's. That is the whole difference between a portal and a lead-buy business; it is also the whole reason a portal is worth building.\n\nFor teams inside a portal engagement, or considering one, the [pre-audit questions from earlier this month](/writing/three-questions-before-every-ad-account-audit) apply here as they do anywhere else, with the counterparty relationship added as a fourth question the portal answers to.",
      "**Sources and references.**\n\n• Framework refined across five years of operating [Ideovate Research Pvt. Ltd.](https://simplidistance.com), founded 4 October 2018 in Pune.\n• Advisory engagements delivered through Pillar 04, the founder-led Marketplace and Platform Consultation pillar at [MagicWorks IT Solutions Pvt. Ltd.](https://magicworksitsolutions.com).\n• Portal versus lead-generation distinctions draw on standard two-sided platform literature and on direct operator experience across the education, healthcare, and real estate categories.",
      "**About the author.** Swapnil Ughade is Founder · Operator · Investor · Author. He runs [MagicWorks IT Solutions Pvt. Ltd.](https://magicworksitsolutions.com), the AI-first digital marketing agency he founded in Pune in 2009, and directs [Ideovate Research Pvt. Ltd.](https://simplidistance.com), the operator of simplidistance.com. He is the author of *Two Algorithms, One Strategy* (April 2026) and, with Mohan Chute, *[The AI-Powered Google Ads System](/books/ai-powered-google-ads-system)* (September 2026). Frameworks refined across ₹70+ Crore ($8M) in managed ad spend. More at [/about](/about)."
    ],
    footerNote: "Portal defensibility comes from the three numbers being in the portal's hands, not the ad platform's.",
    content: [
      "The portal thesis is a good story until the numbers arrive. It is the story of a two-sided platform that matches users with counterparties.",
      "A discovery portal is not a marketplace and not a lead-generation shop. It owns the qualification model.",
      "Three numbers define it: cost per qualified lead (CPQL), session-to-inquiry rate, and close rate at the counterparty.",
      "Multiply the three numbers to calculate contribution per session."
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "https://swapnilughade.com/writing/unit-economics-of-a-discovery-portal#article",
          "headline": "The unit economics of a discovery portal",
          "description": "Discovery portal unit economics turn on three numbers: cost per qualified lead, session-to-inquiry rate, and close rate at the counterparty. A working framework.",
          "author": { "@id": "https://swapnilughade.com/about#person" },
          "publisher": { "@id": "https://swapnilughade.com/#organization" },
          "datePublished": "2026-10-19T09:00:00+05:30",
          "dateModified": "2026-10-19T09:00:00+05:30",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://swapnilughade.com/writing/unit-economics-of-a-discovery-portal"
          },
          "articleSection": "Consultancy",
          "keywords": "discovery portal unit economics, cost per qualified lead, education portal economics India, two-sided platform economics, session-to-inquiry rate",
          "image": "https://swapnilughade.com/images/writing/discovery-portal-unit-economics.jpg",
          "inLanguage": "en-IN",
          "citation": [
            { "@id": "https://simplidistance.com/#organization" }
          ]
        },
        {
          "@type": "Person",
          "@id": "https://swapnilughade.com/about#person",
          "name": "Swapnil Ughade",
          "url": "https://swapnilughade.com/about",
          "jobTitle": "Founder, Operator, Investor, Author",
          "worksFor": { "@id": "https://magicworksitsolutions.com/#organization" },
          "sameAs": [
            "https://www.linkedin.com/in/swapnilughade",
            "https://www.amazon.com/author/swapnilughade"
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://swapnilughade.com/#organization",
          "name": "Swapnil Ughade",
          "url": "https://swapnilughade.com/",
          "logo": "https://swapnilughade.com/brand/signature.svg"
        },
        {
          "@type": "Organization",
          "@id": "https://simplidistance.com/#organization",
          "name": "simplidistance",
          "legalName": "Ideovate Research Pvt. Ltd.",
          "url": "https://simplidistance.com/",
          "foundingDate": "2018-10-04",
          "founder": { "@id": "https://swapnilughade.com/about#person" },
          "location": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pune",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            }
          },
          "description": "Distance and online MBA discovery portal serving prospective learners across Indian universities."
        }
      ]
    }
  },
  {
    slug: "festive-quarter-ad-account-six-adjustments-before-diwali",
    title: "The festive-quarter ad account: six adjustments before Diwali",
    titleEm: "before Diwali",
    category: "Consultancy",
    pillar: "Consultancy",
    subPillar: "Digital Marketing",
    publishDate: "2026-10-26",
    updatedDate: "2026-10-26",
    publishedAt: "26 October 2026",
    readingTime: "6 min read",
    canonicalUrl: "https://swapnilughade.com/writing/festive-quarter-ad-account-six-adjustments-before-diwali",
    ogImage: "/images/writing/festive-quarter-six-adjustments.jpg",
    metaDescription: "Diwali Google Ads strategy in six adjustments: budget re-baselining, bidding recalibration, audience refresh, creative rotation, tracking check, dayparting.",
    blurb: "Six ordered adjustments prepare a Google Ads account for the Indian festive quarter: budget re-baselining, bidding recalibration, audience refresh, creative rotation, tracking check, dayparting.",
    lead: "For an Indian e-commerce or lead-generation account, the festive quarter (Dhanteras through the New Year weeks) can carry a third of the annual ad budget or pass through as a spike on the reporting dashboard. The difference between the two outcomes is preparation.",
    keyTakeaways: [
      "Complete all **six adjustments** in the working week before Dhanteras (Friday 6 November 2026).",
      "**Adjustment 1 & 2:** Re-baseline total window budget before adjusting bids for 30–80% auction inflation.",
      "**Adjustment 3 & 4:** Refresh stale remarketing audiences and rotate festive-specific creative variants.",
      "**Adjustment 5 & 6:** Stress-test conversion tracking under peak load and calibrate festive dayparting."
    ],
    introParagraphs: [
      "For an Indian e-commerce or lead-generation account, the festive quarter (Dhanteras through the New Year weeks) can carry a third of the annual ad budget or pass through as a spike on the reporting dashboard. The difference between the two outcomes is preparation, and preparation compresses to about a working week of focused adjustments before the buildup begins.",
      "Diwali falls on Sunday 8 November this year. Dhanteras is Friday 6 November. The commercial buildup starts in the last week of October and peaks across those two days and the four days between them. Every day the account runs without the adjustments below is a day of leaked spend at rising cost. What follows is the sequence I run through every festive quarter for accounts inside [Pillar 01 at MagicWorks](/writing/five-pillars-three-siblings-how-magicworks-is-structured-in-2026), and the sequence Chapter 7 of [*The AI-Powered Google Ads System*](/books/ai-powered-google-ads-system) unpacks in full.",
      "The six adjustments are ordered. Skipping the order means each subsequent adjustment optimises for a state the account is not yet in."
    ],
    sections: [
      {
        id: "I",
        heading: "Adjustment 1. Budget re-baselining",
        headingEm: "Budget re-baselining",
        paragraphs: [
          "The instinct is to raise the daily cap and move on. That is not budget re-baselining; that is permission-granting. The re-baseline is a full recalculation of what the account is trying to do with money in the festive window.",
          "Start with actual conversion volume from the last two festive quarters (2024 and 2025 if available), corrected for account changes since. Model the target CPA or ROAS you are willing to accept during peak, remembering that both drift during festive: CPA rises with auction competition, ROAS falls as new-customer share increases. Set a total budget for the window, not just a daily cap. Reserve the capital in the account. Then, and only then, raise the daily caps.",
          "Accounts that skip re-baselining and just raise the cap either underspend (bidding cannot find the volume) or overspend (bidding wins auctions the account does not want)."
        ]
      },
      {
        id: "II",
        heading: "Adjustment 2. Bidding recalibration",
        headingEm: "Bidding recalibration",
        paragraphs: [
          "Most bidding strategies were tuned for a non-festive baseline. In festive weeks, CPMs and CPCs typically rise between 30 and 80 percent depending on category. A target CPA left at the pre-festive number will win fewer auctions each day, and the account will look like it is under-pacing when it is actually being priced out.",
          "Two workable moves. First, raise the target CPA (or lower the target ROAS) proportionally to expected auction inflation, category by category. Second, on the campaigns where volume matters more than efficiency for the peak, switch to Maximise Conversions or Maximise Conversion Value with a bid cap, so the account chases the volume that is available while the cap keeps the worst auctions out.",
          "Either move, made deliberately. Not both on the same campaign, and not none."
        ]
      },
      {
        id: "III",
        heading: "Adjustment 3. Audience refresh",
        headingEm: "Audience refresh",
        paragraphs: [
          "Remarketing lists built in Q1 and Q2 are stale for festive intent. A visitor from July who did not convert is a different signal now than they were then. Refresh the audiences the account is actually spending against.",
          "Rebuild the 30-day cart abandoner list, the 60-day high-intent-search converter list, the newsletter-subscriber-not-yet-purchased list. Add any signal specific to festive: users who viewed the \"gift\" category, users who added multi-item baskets, users who searched a wedding-adjacent keyword. Exclude segments that historically do not convert in festive: newsletter-only signups, support-ticket contacts, employees on the office IP range.",
          "Cold reach for the festive window is a separate exercise; do not fund it from remarketing budget without segregating the reporting."
        ]
      },
      {
        id: "IV",
        heading: "Adjustment 4. Creative rotation",
        headingEm: "Creative rotation",
        paragraphs: [
          "Non-festive creative underperforms in festive auctions for a specific reason: it looks generic against the seasonally-tuned inventory the account is bidding alongside. The bar is not \"make it look festive.\" The bar is \"make it look like this brand chose to show up for the season.\"",
          "Prepare three to five festive variants for every major asset group. Vary the message across at least two intents (gifting and self-purchase). Test culturally specific visuals that stop short of cliche. Rotate the primary variants on Dhanteras morning; have a second-wave set ready for the days between Diwali and the following weekend, because intent shifts and the creative that landed on the 6th will fatigue by the 10th.",
          "Every festive creative variant carries a matched landing page. Skipping the landing-page match is where most festive campaigns lose their gains."
        ]
      },
      {
        id: "V",
        heading: "Adjustment 5. Tracking check",
        headingEm: "Tracking check",
        paragraphs: [
          "Festive traffic exposes every latent tracking bug the account has been quietly living with. Conversion tags that fire correctly at 1,000 sessions a day misfire at 10,000. Tag Manager environments diverge between staging and production because the last deploy was in July. Offline conversion imports that run weekly cannot inform bidding during a window where a week is the whole peak.",
          "Before the window opens, verify: the conversion tag fires exactly once per counted outcome under peak load; the Tag Manager production container matches the reviewed configuration; offline imports run daily (or hourly if the CRM allows) for the peak weeks; cross-device conversion linkage is intact; enhanced conversions are configured correctly if the account relies on them.",
          "Fix now. The account cannot be re-instrumented during peak; it can only be over-adjusted based on wrong numbers."
        ]
      },
      {
        id: "VI",
        heading: "Adjustment 6. Dayparting",
        headingEm: "Dayparting",
        paragraphs: [
          "Festive purchase behaviour clusters differently. Late-evening spikes (post family time), mid-morning secondary peaks (research from the office), the pre-Diwali weekend surge, and the day-after Diwali drop-off are all category-specific. What is universal is that the flat 24-hour schedule the account has been running for the rest of the year does not reflect festive intent.",
          "Pull the last two festive quarters' hourly conversion data. Weight upward the hours that historically convert; do not weight downward the hours that do not, because absence of past conversions in a bad hour may reflect low past spend rather than low intent. Set explicit schedules for Dhanteras, Diwali, and the two days after, because those days behave unlike any other days of the year.",
          "Dayparting comes last because the other five adjustments change the data dayparting is calibrated against."
        ]
      },
      {
        id: "VII",
        heading: "Why the order matters",
        headingEm: "order matters",
        paragraphs: [
          "Budget re-baselining first, because bidding recalibration without a budget frame either overshoots or undershoots. Bidding second, because audience refresh without recalibrated bids optimises against the wrong signal. Audience third, because creative rotation without a refreshed audience shows the right ad to the wrong person. Creative fourth, because tracking must be verified against real festive-shape creative flow to be trustworthy. Tracking fifth, because dayparting off broken tracking is worse than no dayparting. Dayparting last, because the data all five other adjustments produce is what the schedule is set against.",
          "Reversing any two adjacent items in this list makes the sequence less reliable. Reversing three or more produces the reactive festive account most operators end up with by the second week of November."
        ]
      }
    ],
    closingParagraphs: [
      "The six adjustments are the pre-flight checklist, not the season strategy. The season strategy is what the account does with the compounding effect of the six, and that lives in Chapter 7 of [*The AI-Powered Google Ads System*](/books/ai-powered-google-ads-system) and in the follow-through work of the season itself. What the six above give you is a defensible baseline, arrived at in a working week, that can be run as a standing October ritual on every account the operator manages.\n\nThe [three-question pre-audit](/writing/three-questions-before-every-ad-account-audit) from earlier this month is the diagnostic version of this list. The six above are the operational version. Together, they turn festive from a spike on the dashboard into a decision the account made.",
      "**Sources and references.**\n\n• Six-adjustment sequence and the broader seasonal framework: *The AI-Powered Google Ads System*, Chapter 7, Swapnil Ughade and Mohan Chute, September 2026.\n• Festive-quarter auction inflation estimates (30 to 80 percent CPC and CPM lift, category-dependent) drawn from account-level observations across [MagicWorks IT Solutions Pvt. Ltd.](https://magicworksitsolutions.com) managed spend, festive quarters 2023 through 2025.\n• Diwali 2026 dates: Dhanteras Friday 6 November; Diwali Sunday 8 November; Bhai Dooj Tuesday 10 November, per the Drik Panchang for Pune coordinates.",
      "**About the author.** Swapnil Ughade is Founder · Operator · Investor · Author. He runs [MagicWorks IT Solutions Pvt. Ltd.](https://magicworksitsolutions.com), the AI-first digital marketing agency he founded in Pune in 2009. He is the author of *Two Algorithms, One Strategy* (April 2026) and, with Mohan Chute, *[The AI-Powered Google Ads System](/books/ai-powered-google-ads-system)* (September 2026). Frameworks refined across ₹70+ Crore ($8M) in managed ad spend. More at [/about](/about)."
    ],
    footerNote: "Together, they turn festive from a spike on the dashboard into a decision the account made.",
    content: [
      "For an Indian e-commerce or lead-generation account, the festive quarter can carry a third of the annual ad budget.",
      "Preparation compresses to six ordered adjustments in the week before Dhanteras: budget re-baselining, bidding recalibration, audience refresh, creative rotation, tracking check, and dayparting.",
      "Budget re-baselining first, bidding second, audience third, creative fourth, tracking fifth, dayparting last.",
      "Together, they turn festive from a spike on the dashboard into a decision the account made."
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "https://swapnilughade.com/writing/festive-quarter-ad-account-six-adjustments-before-diwali#article",
          "headline": "The festive-quarter ad account: six adjustments before Diwali",
          "description": "Diwali Google Ads strategy in six adjustments: budget re-baselining, bidding recalibration, audience refresh, creative rotation, tracking check, dayparting.",
          "author": { "@id": "https://swapnilughade.com/about#person" },
          "publisher": { "@id": "https://swapnilughade.com/#organization" },
          "datePublished": "2026-10-26T09:00:00+05:30",
          "dateModified": "2026-10-26T09:00:00+05:30",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://swapnilughade.com/writing/festive-quarter-ad-account-six-adjustments-before-diwali"
          },
          "articleSection": "Consultancy",
          "keywords": "diwali google ads strategy, festive quarter ad budget India, diwali digital marketing checklist, dhanteras google ads, festive quarter preparation",
          "image": "https://swapnilughade.com/images/writing/festive-quarter-six-adjustments.jpg",
          "inLanguage": "en-IN",
          "temporalCoverage": "2026-10-26/2026-11-15"
        },
        {
          "@type": "Person",
          "@id": "https://swapnilughade.com/about#person",
          "name": "Swapnil Ughade",
          "url": "https://swapnilughade.com/about",
          "jobTitle": "Founder, Operator, Investor, Author",
          "worksFor": { "@id": "https://magicworksitsolutions.com/#organization" },
          "sameAs": [
            "https://www.linkedin.com/in/swapnilughade",
            "https://www.amazon.com/author/swapnilughade"
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://swapnilughade.com/#organization",
          "name": "Swapnil Ughade",
          "url": "https://swapnilughade.com/",
          "logo": "https://swapnilughade.com/brand/signature.svg"
        }
      ]
    }
  }
];

// Helper: Check if article is published as of right now (09:00 IST on publishDate)
export function isArticlePublished(article: ArticleData, nowMs: number = Date.now()): boolean {
  if (!article.publishDate) return true;
  // Parse scheduled time at 09:00:00 IST (+05:30)
  const scheduledTimestamp = new Date(`${article.publishDate}T09:00:00+05:30`).getTime();
  return nowMs >= scheduledTimestamp;
}

// Get only currently published articles (for public archive, sitemaps, RSS, etc.)
export function getPublishedArticles(nowMs: number = Date.now()): ArticleData[] {
  return ARTICLES.filter((art) => isArticlePublished(art, nowMs));
}

export function getArticleBySlug(slug: string): ArticleData | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export const TIMELINE_ROWS = [
  {
    year: "2009",
    planet: "Saturn · 8",
    title: "Founded MagicWorks",
    desc: "Founded MagicWorks in Pune. Single-room office.",
  },
  {
    year: "26 Sep 2012",
    planet: "Venus · 6",
    title: "Incorporated MagicWorks IT Solutions Pvt. Ltd.",
    desc: "Incorporated as MagicWorks IT Solutions Pvt. Ltd.",
  },
  {
    year: "Q3 2016",
    planet: "Jupiter · 3",
    title: "Google Partner Award",
    desc: "Google Partner Award, for AdWords Game on Race.",
  },
  {
    year: "2017",
    planet: "Sun · 1",
    title: "Cyber Security Suraksha Award",
    desc: "Cyber Security Suraksha Award, for contribution to e-commerce and corporate web security.",
  },
  {
    year: "4 Oct 2018",
    planet: "Saturn · 8",
    title: "Founded Ideovate Research Pvt. Ltd.",
    desc: "Operator of simplidistance.com, the distance and online MBA discovery portal.",
  },
  {
    year: "7 Apr 2021",
    planet: "Jupiter · 3",
    title: "Consultant to Trexova Wellbeing Pvt. Ltd.",
    desc: "Engaged as digital marketing consultant to Trexova Wellbeing Pvt. Ltd.",
  },
  {
    year: "29 Apr 2023",
    planet: "Venus · 6",
    title: "Investor in Dnyanal Educon Pvt. Ltd.",
    desc: "Operator of collegencourses.com (regular MBA and design institute discovery).",
  },
  {
    year: "Apr 2026",
    planet: "Mercury · 5",
    title: "Published Two Algorithms, One Strategy",
    desc: "Published Two Algorithms, One Strategy: SEO Meets AI-Powered Search. Foreword by Mohan Chute.",
  },
  {
    year: "Apr 2026",
    planet: "Mars · 9",
    title: "Launched Magic Pipeline",
    desc: "Launched Magic Pipeline (MagicPipeline.io), the multi-tenant outreach and CRM SaaS built by MagicWorks. Internal use only at launch.",
  },
  {
    year: "May 2026",
    planet: "Jupiter · 3",
    title: "Launched MagicFlow AI",
    desc: "Launched MagicFlow AI (magicflowai.io) to the public. Multi-tenant AI-chatbot SaaS built by MagicWorks.",
  },
  {
    year: "Jun 2026",
    planet: "Venus · 6",
    title: "Launched New MagicWorks Site",
    desc: "Launched the new MagicWorks IT Solutions site on Next.js.",
  },
  {
    year: "Sep 2026",
    planet: "Saturn · 8",
    title: "Published The AI-Powered Google Ads System",
    desc: "Published The AI-Powered Google Ads System, co-authored with Mohan Chute.",
  },
];

export const SPEAKING_TOPICS = [
  {
    num: "01",
    title: "The Portal Thesis: Building High-Trust Category Marketplaces",
    audience: "Venture Capitalists, Platform Founders, Product Leaders",
    synopsis: "The economics of high-consideration discovery portals. Why neutral curation out-converts traditional ad-spend in high-trust verticals.",
  },
  {
    num: "02",
    title: "AI Consultation in Practice: Avoiding Enterprise Vaporware",
    audience: "CTOs, Digital Transformation Leaders, CIOs",
    synopsis: "Deploying generative AI tools that actually impact bottom-line EBITDA rather than generating unread slide decks.",
  },
  {
    num: "03",
    title: "Why Advisory in Platform Markets Must Be Founder-Led",
    audience: "Executive Leadership, Advisory Boards, Accelerators",
    synopsis: "The organizational case against delegating high-stakes platform strategy to junior account managers.",
  },
  {
    num: "04",
    title: "Two Into One: Human Strategy Meets Machine Acceleration",
    audience: "Enterprise Leadership, Tech Summits, Agency Owners",
    synopsis: "Transforming services into products and integrating creative intuition with automated AI pipelines.",
  },
  {
    num: "05",
    title: "Two Algorithms, One Strategy: Navigating Classic SEO and Generative AI",
    audience: "CMOs, Founders, Head of Growth, Marketing Directors",
    synopsis: "How search is fracturing between PageRank and LLM synthesis (Perplexity, ChatGPT, Google AI Overviews), and the unified strategy to win both.",
  },
  {
    num: "06",
    title: "GEO & AEO: Engineering Brand Citations for LLM Answer Engines",
    audience: "SEO Specialists, Content Strategists, Brand Architects",
    synopsis: "Moving beyond keyword density to entity graphs, quotable declarative prose, and llms.txt standard optimization.",
  },
  {
    num: "07",
    title: "Scaling Google Ads at $8M+ Velocity with AI Frameworks",
    audience: "Performance Marketers, Enterprise Growth Teams",
    synopsis: "Frameworks, negative-intent gating, and prompt architectures derived from ₹70+ Crore in ad management across five countries.",
  },
  {
    num: "08",
    title: "From Agency to Ecosystem: The 18-Year Founder Journey",
    audience: "Startup Founders, Incubators, Business Schools",
    synopsis: "Lessons from single-room bootstrapping in Pune to multi-brand holding group and international book publishing.",
  },
];
