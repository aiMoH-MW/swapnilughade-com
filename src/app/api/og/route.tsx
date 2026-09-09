import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Swapnil Ughade';
  const subtitle = searchParams.get('subtitle') || 'Founder, Operator, Investor, Author';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#2E1065',
          padding: '60px 80px',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: '#E4B551', fontSize: 18, letterSpacing: '0.24em', textTransform: 'uppercase' }}>
            SWAPNIL UGHADE
          </div>
          <div style={{ color: '#EDE3CE', fontSize: 16 }}>PUNE · 2026</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '900px' }}>
          <div
            style={{
              fontSize: 56,
              color: '#F5EFE3',
              lineHeight: 1.1,
              fontWeight: 500,
              marginBottom: 16,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 24, color: '#E4B551', fontStyle: 'italic' }}>
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid #3E1B7A',
            paddingTop: 24,
            color: 'rgba(245, 239, 227, 0.75)',
            fontSize: 16,
          }}
        >
          <div>swapnilughade.com</div>
          <div>Two Algorithms, One Strategy · MagicWorks · Ideovate</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
