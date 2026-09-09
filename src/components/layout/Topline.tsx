import Link from 'next/link';

export function Topline() {
  return (
    <div className="topline">
      <div className="topline-left">Founder · Operator · Investor · Author</div>
      <div className="topline-right">
        <span>Pune, India</span>
        <span className="topline-sep">·</span>
        <Link href="/#the-letter">The Letter →</Link>
      </div>
    </div>
  );
}
