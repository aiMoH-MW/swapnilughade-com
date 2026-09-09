import React from 'react';

export function Ornament({ className = '' }: { className?: string }) {
  return (
    <div className={`ornament ${className}`.trim()} aria-hidden="true">
      <span className="line"></span>
      <span className="diamond"></span>
      <span className="dot"></span>
      <span className="star"></span>
      <span className="dot"></span>
      <span className="diamond"></span>
      <span className="line"></span>
    </div>
  );
}
