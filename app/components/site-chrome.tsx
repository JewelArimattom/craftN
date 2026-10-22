import Link from "next/link";

export function BrandMark({ light = false }: { light?: boolean }) {
  return <span className={`brand-mark${light ? " brand-mark-light" : ""}`} aria-hidden="true"><i/><i/><i/><i/></span>;
}

export function SiteHeader() {
  return <header className="site-header" id="top">
    <Link href="/" className="wordmark"><BrandMark/><span>craft<span className="wordmark-n">N</span></span></Link>
    <nav aria-label="Main navigation"><Link href="/work">Work</Link><Link href="/services">Services</Link><Link href="/about">About</Link></nav>
    <Link className="header-cta" href="/contact">Let’s talk <span className="arrow">↗</span></Link>
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-main">
      <div className="footer-about"><Link href="/" className="wordmark footer-brand"><BrandMark light/><span>craft<span className="wordmark-n">N</span></span></Link><p>Thoughtful software.<br/>Practical AI. Built around people.</p><span className="footer-status"><i/> INDEPENDENT SOFTWARE & AI STUDIO</span></div>
      <div className="footer-column"><span className="footer-label">EXPLORE</span><Link href="/work">Selected work</Link><Link href="/services">Services</Link><Link href="/about">About CraftN</Link></div>
      <div className="footer-column"><span className="footer-label">WHAT WE DO</span><Link href="/services#software">Software development</Link><Link href="/services#ai">AI solutions</Link><Link href="/services#design">Product design</Link></div>
      <div className="footer-contact"><span className="footer-label">HAVE A GOOD IDEA?</span><h3>Let’s build<br/>something useful.</h3><Link className="footer-cta" href="/contact">Start a conversation <span className="arrow">↗</span></Link></div>
    </div>
    <div className="footer-bottom"><span>© 2026 CRAFTN STUDIO</span><span>INDEPENDENT SOFTWARE & AI STUDIO</span><Link href="/contact">CONTACT <span>↗</span></Link><Link className="back-top" href="#top">BACK TO TOP ↑</Link></div>
  </footer>;
}
