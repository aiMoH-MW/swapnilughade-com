import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact · Swapnil Ughade · Direct Inquiries',
  description:
    'For speaking engagements, platform advisory consultation, book rights, or press inquiries with Swapnil Ughade.',
  alternates: {
    canonical: 'https://swapnilughade.com/contact',
  },
  openGraph: {
    title: 'Contact · Swapnil Ughade · Direct Inquiries',
    description:
      'For speaking engagements, platform advisory consultation, book rights, or press inquiries with Swapnil Ughade.',
    url: 'https://swapnilughade.com/contact',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact · Swapnil Ughade',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact · Swapnil Ughade · Direct Inquiries',
    description:
      'For speaking engagements, platform advisory consultation, book rights, or press inquiries with Swapnil Ughade.',
    images: ['/og-image.png'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
