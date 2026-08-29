import DesignSwitch from "../DesignSwitch";

/* Design C opens on a dark hero, so the nav starts light-on-forest and the
   scroll state (.is-scrolled) hands it back to the standard cream bar. */
export default function StoryHeader() {
  return (
    <header className="site-header v3-header" id="siteHeader">
      <div className="nav">
        <a href="#" className="brand" aria-label="Fulcrum home">
          <img className="brand-mark" src="/assets/logo-mark.svg" alt="" width="26" height="27" />
          Fulcrum<span className="dot">.</span>
        </a>
        <nav className="nav-links" id="navLinks" aria-label="Primary">
          <a href="#story">The story</a>
          <a href="#day">Your day</a>
          <a href="#apps">The apps</a>
          <a href="#change">What changes</a>
          <a href="#faq">FAQ</a>
          <a href="#waitlist" className="btn btn--primary btn--md nav-menu-cta">
            Join the waitlist{" "}
            <span className="arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </nav>
        <div className="nav-actions">
          <DesignSwitch tone="dark" />
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
