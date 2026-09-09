import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E162B",
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://swapnilughade.com"),
  title: {
    default: "Swapnil Ughade · Founder, Operator, Investor, Author",
    template: "%s · Swapnil Ughade",
  },
  description:
    "Founder-Director of MagicWorks and Ideovate. Author of Two Algorithms, One Strategy and The AI-Powered Google Ads System. Pune, India.",
  openGraph: {
    title: "Swapnil Ughade · Founder, Operator, Investor, Author",
    description:
      "Founder-Director of MagicWorks and Ideovate. Author of Two Algorithms, One Strategy and The AI-Powered Google Ads System. Pune, India.",
    url: "https://swapnilughade.com",
    siteName: "Swapnil Ughade",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@swapnilughade",
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
  alternates: {
    canonical: "https://swapnilughade.com",
    types: {
      "application/rss+xml": "https://swapnilughade.com/rss.xml",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Swapnil Ughade",
    givenName: "Swapnil",
    familyName: "Ughade",
    jobTitle: "Founder-Director",
    url: "https://swapnilughade.com",
    image: "https://swapnilughade.com/img/swapnil.jpg",
    sameAs: [
      "https://www.linkedin.com/in/swapnilughade",
      "https://twitter.com/swapnilughade",
      "https://www.amazon.in/s?k=swapnil+ughade&i=digital-text&crid=3QC7D12GDGL79&sprefix=%2Cdigital-text%2C221&ref=nb_sb_ss_recent_1_0_recent",
    ],
    worksFor: {
      "@type": "Organization",
      name: "MagicWorks IT Solutions Pvt Ltd",
      url: "https://magicworksitsolutions.com",
    },
    founder: [
      {
        "@type": "Organization",
        name: "MagicWorks IT Solutions Pvt Ltd",
        url: "https://magicworksitsolutions.com",
      },
      {
        "@type": "Organization",
        name: "Ideovate Research Pvt Ltd",
        url: "https://simplidistance.com",
      },
    ],
    author: [
      {
        "@type": "Book",
        name: "Two Algorithms, One Strategy: SEO Meets AI-Powered Search",
        isbn: "934966979X",
      },
      {
        "@type": "Book",
        name: "The AI-Powered Google Ads System",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office 201, Vasant Bahawa, Bavdhan",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411021",
      addressCountry: "IN",
    },
    knowsAbout: [
      "AI-first digital marketing",
      "Marketplace and platform consultation",
      "SEO and generative search",
      "Google Ads at scale",
    ],
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${cormorant.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bone)] text-[var(--ink)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
