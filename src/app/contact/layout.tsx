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
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
