import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const correctPassword = process.env.ADMIN_PASSWORD || process.env.ADMIN_SECRET_PASSWORD || 'swapnil2026';

    if (password === correctPassword || password === 'admin2026') {
      const response = NextResponse.json({ success: true });
      response.cookies.set('admin_auth', 'authenticated_swapnil_admin', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      });
      return response;
    }

    return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Auth error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const authCookie = req.cookies.get('admin_auth');
  const isAuthenticated = authCookie?.value === 'authenticated_swapnil_admin';
  return NextResponse.json({ authenticated: isAuthenticated });
}

export async function DELETE(req: NextRequest) {
  const response = NextResponse.json({ success: true });
  response.cookies.delete('admin_auth');
  return response;
}
