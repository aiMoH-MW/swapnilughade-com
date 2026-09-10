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
  publishedAt: string;
  readingTime: string;
  lead: string;
  blurb: string;
  metaDescription?: string;
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
    publishedAt: "8 September 2026",
    readingTime: "4 min read",
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
      "datePublished": "2026-09-08",
      "dateModified": "2026-09-08",
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
    publishedAt: "1 September 2026",
    readingTime: "5 min read",
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
      "datePublished": "2026-09-01",
      "dateModified": "2026-09-01",
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
    publishedAt: "25 August 2026",
    readingTime: "5 min read",
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
      "datePublished": "2026-08-25",
      "dateModified": "2026-08-25",
      "mainEntityOfPage": "https://swapnilughade.com/writing/why-marketplace-consultation-is-founder-led",
      "articleSection": "Advisory",
      "keywords": "founder-led consulting, marketplace consultation, AI consultation, advisory practice, boutique consulting, Magicworks, Pillar 03, Pillar 04"
    }
  }
];

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
