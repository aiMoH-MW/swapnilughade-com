import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag, revalidatePath } from 'next/cache';

export async function POST(req: NextRequest) {
  try {
    const secret = req.nextUrl.searchParams.get('secret');
    const expectedSecret = process.env.SANITY_REVALIDATE_SECRET;

    if (expectedSecret && secret !== expectedSecret) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    const body = await req.json();
    const type = body?._type;

    if (type) {
      // Revalidate Next.js cache tags
      revalidateTag(type, 'max');
    }

    // Revalidate paths based on content type
    if (type === 'article') {
      revalidatePath('/writing');
      if (body?.slug?.current) {
        revalidatePath(`/writing/${body.slug.current}`);
      }
    } else if (type === 'nowStatus') {
      revalidatePath('/now');
    } else if (type === 'book') {
      revalidatePath('/books');
    } else if (type === 'venture') {
      revalidatePath('/ventures');
    }

    revalidatePath('/');

    return NextResponse.json({ revalidated: true, now: Date.now(), type });
  } catch (err: any) {
    return NextResponse.json({ message: 'Error revalidating', error: err.message }, { status: 500 });
  }
}
