export default function Header({ variant = "v1" }) {
  const isV2 = variant === "v2";
  const base = isV2 ? "/v2" : "/";
  const hash = (id) => `${base}#${id}`;

  // Nav links. v2 orders the on-page anchors to match the section order in the
  // website (Business → How it works → Features → Customers), then the standalone
  // routes, then FAQ. v1 keeps its original order.
  const links = isV2
    ? [
        { href: hash("solution"), label: "Business" },
        { href: hash("how-it-works"), label: "How it works" },
        { href: hash("features"), label: "Features" },
        { href: hash("customers"), label: "Customers" },
        { href: "/pricing", label: "Pricing" },
        { href: "/team", label: "Team" },
        { href: hash("faq"), label: "FAQ" },
      ]
    : [
        { href: hash("solution"), label: "Business" },
        { href: hash("customers"), label: "Customers" },
        { href: hash("features"), label: "Features" },
        { href: hash("how-it-works"), label: "How it works" },
        { href: "/pricing", label: "Pricing" },
        { href: "/team", label: "Team" },
        { href: hash("faq"), label: "FAQ" },
      ];

  return (
    <header className="site-header" id="siteHeader">
      <div className="nav">
        <a href={base} className="brand" aria-label="Fulcrum home">
          <img className="brand-mark" src="/assets/logo-mark.svg" alt="" width="26" height="27" />
          Fulcrum<span className="dot">.</span>
        </a>
        <nav className="nav-links" id="navLinks" aria-label="Primary">
          {links.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href={hash("waitlist")} className="btn btn--primary btn--md nav-menu-cta">
            Join the waitlist{" "}
            <span className="arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </nav>
        <div className="nav-actions">
          <div className="ver-toggle" role="group" aria-label="Page version">
            <a href="/" className={isV2 ? "" : "is-active"} aria-current={isV2 ? undefined : "page"}>
              V1
            </a>
            <a href="/v2" className={isV2 ? "is-active" : ""} aria-current={isV2 ? "page" : undefined}>
              V2
            </a>
          </div>
          <a href={hash("waitlist")} className="btn btn--primary btn--md">
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
