import { Metadata } from 'next';
import './admin.css';

export const metadata: Metadata = {
  title: 'Admin Dashboard · MagicWorks',
  description: 'Internal administration portal for managing newsletter subscribers and contact inquiries.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="admin-wrapper">{children}</div>;
}
