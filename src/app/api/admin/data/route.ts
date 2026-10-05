import { NextRequest, NextResponse } from 'next/server';
import {
  getNewsletterSubscribers,
  deleteNewsletterSubscriber,
  updateNewsletterSpamStatus,
  getContactInquiries,
  updateContactStatus,
  updateContactSpamStatus,
  deleteContactInquiry,
  getSpeakingInquiries,
  updateSpeakingStatus,
  updateSpeakingSpamStatus,
  deleteSpeakingInquiry,
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

    if (type === 'speaking') {
      const speaking = await getSpeakingInquiries();
      return NextResponse.json({ speaking });
    }

    const [newsletter, contacts, speaking] = await Promise.all([
      getNewsletterSubscribers(),
      getContactInquiries(),
      getSpeakingInquiries(),
    ]);

    return NextResponse.json({ newsletter, contacts, speaking });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to fetch admin data' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, id, status, isSpam, spamReason, action } = body;

    if (!type || !id) {
      return NextResponse.json({ error: 'Type and ID are required' }, { status: 400 });
    }

    // Toggle / update spam flag
    if (action === 'toggle_spam' || typeof isSpam === 'boolean') {
      const targetSpamState = typeof isSpam === 'boolean' ? isSpam : true;
      if (type === 'contact') {
        const success = await updateContactSpamStatus(id, targetSpamState, spamReason || 'Manually marked by admin');
        return NextResponse.json({ success });
      }
      if (type === 'newsletter') {
        const success = await updateNewsletterSpamStatus(id, targetSpamState, spamReason || 'Manually marked by admin');
        return NextResponse.json({ success });
      }
      if (type === 'speaking') {
        const success = await updateSpeakingSpamStatus(id, targetSpamState, spamReason || 'Manually marked by admin');
        return NextResponse.json({ success });
      }
    }

    // Update status
    if (type === 'contact' && status) {
      const success = await updateContactStatus(id, status);
      return NextResponse.json({ success });
    }

    if (type === 'speaking' && status) {
      const success = await updateSpeakingStatus(id, status);
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
    const idsParam = searchParams.get('ids');

    if (!type || (!id && !idsParam)) {
      return NextResponse.json({ error: 'Type and ID(s) are required' }, { status: 400 });
    }

    const idsToDelete = idsParam ? idsParam.split(',').filter(Boolean) : [id!];

    if (type === 'newsletter') {
      for (const targetId of idsToDelete) {
        await deleteNewsletterSubscriber(targetId);
      }
      return NextResponse.json({ success: true, count: idsToDelete.length });
    }

    if (type === 'contact') {
      for (const targetId of idsToDelete) {
        await deleteContactInquiry(targetId);
      }
      return NextResponse.json({ success: true, count: idsToDelete.length });
    }

    if (type === 'speaking') {
      for (const targetId of idsToDelete) {
        await deleteSpeakingInquiry(targetId);
      }
      return NextResponse.json({ success: true, count: idsToDelete.length });
    }

    return NextResponse.json({ error: 'Invalid deletion type' }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Deletion failed' }, { status: 500 });
  }
}
