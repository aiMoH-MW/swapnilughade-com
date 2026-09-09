import React from 'react';
import Image from 'next/image';

export function VenturesEditorialArt({ className = "w-full max-w-[360px] mx-auto", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`ventures-pure-art ${className}`} style={style} aria-label="Two Into One Editorial Artwork">
      <div className="art-pure-graphic">
        <Image
          src="/img/ventures-editorial-art.jpg"
          alt="Two Into One Operating Thesis Fine-line Art Illustration"
          width={600}
          height={600}
          className="w-full h-auto object-contain mix-blend-multiply select-none"
          priority
        />
      </div>
      <div className="art-pure-caption">
        <span className="art-pure-tag">The Operating Thesis</span>
        <span className="art-pure-sub">Two into one · Four angles</span>
      </div>
    </div>
  );
}
