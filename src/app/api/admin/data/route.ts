import { NextRequest, NextResponse } from 'next/server';
import {
  getNewsletterSubscribers,
  deleteNewsletterSubscriber,
  getContactInquiries,
  updateContactStatus,
  deleteContactInquiry,
} from '@/lib/store';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type') || 'all';

    if (type === 'newsletter') {
      const newsletter = await getNewsletterSubscribers();
      return NextResponse.json({ newsletter });
    }

    if (type === 'contacts') {
      const contacts = await getContactInquiries();
      return NextResponse.json({ contacts });
    }

    const [newsletter, contacts] = await Promise.all([
      getNewsletterSubscribers(),
      getContactInquiries(),
    ]);

    return NextResponse.json({ newsletter, contacts });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to fetch admin data' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { type, id, status } = await req.json();

    if (type === 'contact' && id && status) {
      const success = await updateContactStatus(id, status);
      return NextResponse.json({ success });
    }

    return NextResponse.json({ error: 'Invalid update payload' }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Update failed' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type');
    const id = searchParams.get('id');

    if (!type || !id) {
      return NextResponse.json({ error: 'Type and ID are required' }, { status: 400 });
    }

    if (type === 'newsletter') {
      const success = await deleteNewsletterSubscriber(id);
      return NextResponse.json({ success });
    }

    if (type === 'contact') {
      const success = await deleteContactInquiry(id);
      return NextResponse.json({ success });
    }

    return NextResponse.json({ error: 'Invalid deletion type' }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Deletion failed' }, { status: 500 });
  }
}
