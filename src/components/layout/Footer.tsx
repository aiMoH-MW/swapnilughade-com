import Link from 'next/link';
import { SignatureSvg } from '@/components/ui/SignatureSvg';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cols">
          <div className="footer-col">
            <p className="footer-col-title">Read</p>
            <ul>
              <li><Link href="/books">Books</Link></li>
              <li><Link href="/writing">Writing</Link></li>
              <li><Link href="/#the-letter">Newsletter</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Meet</p>
            <ul>
              <li><Link href="/speaking">Speaking</Link></li>
              <li><Link href="/now">Now</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Explore</p>
            <ul>
              <li><Link href="/ventures">Ventures</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Elsewhere</p>
            <ul>
              <li><a href="https://www.linkedin.com/in/swapnilughade" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://www.amazon.in/s?k=swapnil+ughade&i=digital-text&crid=3QC7D12GDGL79&sprefix=%2Cdigital-text%2C221&ref=nb_sb_ss_recent_1_0_recent" target="_blank" rel="noopener noreferrer">Amazon author</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Legal</p>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
              <li><Link href="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-signature">
            <SignatureSvg />
          </div>
          <div className="footer-meta">
            © 2026 <a href="https://swapnilughade.com" target="_blank" rel="noopener noreferrer">Swapnil Ughade</a>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
