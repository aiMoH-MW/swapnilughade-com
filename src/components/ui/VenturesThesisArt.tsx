import React from 'react';
import { SignatureSvg } from '@/components/ui/SignatureSvg';

export function VenturesThesisArt({ className = "w-full max-w-[420px] mx-auto", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`modern-thesis-art ${className}`} style={style} aria-label="Two Into One Operating Thesis Visual">
      <div className="thesis-card">
        {/* Top Eyebrow */}
        <div className="tc-header">
          <div className="tc-tag">THE OPERATING THESIS</div>
          <div className="tc-ratio">2 → 1</div>
        </div>

        {/* Minimalist "Two into One" Geometric Visual */}
        <div className="tc-visual-wrap">
          <svg viewBox="0 0 360 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <defs>
              <linearGradient id="goldCircle" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E4B551" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#C89B3C" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="indigoCircle" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4B1F8C" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#E8823D" stopOpacity="0.15" />
              </linearGradient>
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C89B3C" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#C89B3C" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Connecting Hairline Axis */}
            <line x1="30" y1="110" x2="330" y2="110" stroke="#D9D0BE" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="180" y1="20" x2="180" y2="200" stroke="#D9D0BE" strokeWidth="1" strokeDasharray="3 3" />

            {/* Circle 1: Human Strategy (Left) */}
            <circle cx="130" cy="110" r="75" fill="url(#goldCircle)" stroke="#C89B3C" strokeWidth="1.5" />

            {/* Circle 2: Machine Acceleration (Right) */}
            <circle cx="230" cy="110" r="75" fill="url(#indigoCircle)" stroke="#4B1F8C" strokeWidth="1.5" />

            {/* Center Overlap Glow */}
            <ellipse cx="180" cy="110" rx="35" ry="55" fill="url(#centerGlow)" />

            {/* Intersection Core Point */}
            <circle cx="180" cy="110" r="4" fill="#E8823D" />
            <circle cx="180" cy="110" r="8" stroke="#C89B3C" strokeWidth="1" />

            {/* Labels on Circles */}
            <text x="95" y="106" textAnchor="middle" fill="#4B1F8C" fontSize="10.5" fontFamily="var(--serif)" fontWeight="500">Human</text>
            <text x="95" y="120" textAnchor="middle" fill="#C89B3C" fontSize="9" fontFamily="var(--mono)" letterSpacing="0.12em">STRATEGY</text>

            <text x="265" y="106" textAnchor="middle" fill="#4B1F8C" fontSize="10.5" fontFamily="var(--serif)" fontWeight="500">Machine</text>
            <text x="265" y="120" textAnchor="middle" fill="#4B1F8C" fontSize="9" fontFamily="var(--mono)" letterSpacing="0.12em" opacity="0.8">ACCELERATION</text>

            {/* Center "2 into 1" Label */}
            <text x="180" y="85" textAnchor="middle" fill="#E8823D" fontSize="14" fontFamily="var(--serif)" fontStyle="italic" fontWeight="600">Two into One</text>

            {/* Cardinal Venture Anchor Dots */}
            {/* Top: MagicWorks */}
            <circle cx="180" cy="20" r="3" fill="#C89B3C" />
            <text x="180" y="14" textAnchor="middle" fill="#C89B3C" fontSize="8" fontFamily="var(--mono)" letterSpacing="0.16em">MAGICWORKS</text>

            {/* Right: Ideovate */}
            <circle cx="330" cy="110" r="3" fill="#4B1F8C" />
            <text x="330" y="125" textAnchor="middle" fill="#4B1F8C" fontSize="8" fontFamily="var(--mono)" letterSpacing="0.14em">IDEOVATE</text>

            {/* Bottom: Dnyanal Educon */}
            <circle cx="180" cy="200" r="3" fill="#E8823D" />
            <text x="180" y="214" textAnchor="middle" fill="#E8823D" fontSize="8" fontFamily="var(--mono)" letterSpacing="0.14em">DNYANAL</text>

            {/* Left: Trexova */}
            <circle cx="30" cy="110" r="3" fill="#7C6E68" />
            <text x="30" y="125" textAnchor="middle" fill="#7C6E68" fontSize="8" fontFamily="var(--mono)" letterSpacing="0.14em">TREXOVA</text>
          </svg>
        </div>

        {/* 4 Minimal Venture Tags */}
        <div className="tc-ventures-row">
          <div className="tc-v-item">
            <span className="tc-v-dot gold" />
            <span className="tc-v-name">MagicWorks</span>
            <span className="tc-v-role">Founder</span>
          </div>
          <div className="tc-v-item">
            <span className="tc-v-dot gold" />
            <span className="tc-v-name">Ideovate</span>
            <span className="tc-v-role">Founder</span>
          </div>
          <div className="tc-v-item">
            <span className="tc-v-dot rose" />
            <span className="tc-v-name">Dnyanal</span>
            <span className="tc-v-role">Investor</span>
          </div>
          <div className="tc-v-item">
            <span className="tc-v-dot mute" />
            <span className="tc-v-name">Trexova</span>
            <span className="tc-v-role">Consultant</span>
          </div>
        </div>

        {/* Footer Signature Bar */}
        <div className="tc-footer">
          <div className="tc-sig">
            <SignatureSvg />
          </div>
          <div className="tc-caption">4 Ventures · 3 Roles · 1 Practice</div>
        </div>
      </div>
    </div>
  );
}
