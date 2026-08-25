export default function Header() {
  return (
    <header className="site-header" id="siteHeader">
      <div className="nav">
        <a href="#" className="brand" aria-label="Fulcrum home">
          <img className="brand-mark" src="/assets/logo-mark.svg" alt="" width="26" height="27" />
          Fulcrum<span className="dot">.</span>
        </a>
        <nav className="nav-links" id="navLinks" aria-label="Primary">
          <a href="#solution">Business</a>
          <a href="#customers">Customers</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#faq">FAQ</a>
          <a href="#waitlist" className="btn btn--primary btn--md nav-menu-cta">
            Join the waitlist{" "}
            <span className="arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </nav>
        <div className="nav-actions">
          <a href="#waitlist" className="btn btn--primary btn--md">
            Join the waitlist{" "}
            <span className="arrow" aria-hidden="true">
              ↗
            </span>
          </a>
          <button className="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false" aria-controls="navLinks">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
