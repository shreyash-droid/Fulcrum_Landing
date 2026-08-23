export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* ============================== HEADER ============================== */}
      <header className="site-header" id="siteHeader">
        <div className="nav">
          <a href="#" className="brand" aria-label="Fulcrum home">
            Fulcrum<span className="dot">.</span>
          </a>
          <nav className="nav-links" id="navLinks" aria-label="Primary">
            <a href="#solution">Business</a>
            <a href="#customers">Customers</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#" className="nav-menu-login">
              Log in
            </a>
            <a href="#pricing" className="btn btn--primary btn--md nav-menu-cta">
              Get started{" "}
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </nav>
          <div className="nav-actions">
            <div className="theme-switch" role="group" aria-label="Colour theme">
              <button type="button" className="theme-dot" data-theme-set="warm" title="Warm theme" aria-label="Warm theme" aria-pressed="true"></button>
              <button type="button" className="theme-dot" data-theme-set="blue" title="Blue theme" aria-label="Blue theme" aria-pressed="false"></button>
            </div>
            <a href="#" className="login">
              Log in
            </a>
            <a href="#" className="btn btn--primary btn--md">
              Get started{" "}
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

      <main id="main">
        {/* ============================== HERO ============================== */}
        <section className="hero">
          <div className="container">
            <div className="hero-grid hero-enter">
              <div className="hero-intro">
                <div className="tagline">
                  <span className="dot"></span> The local business growth engine
                </div>
                <h1>
                  The CRM built for retail businesses <em>and service providers.</em>
                </h1>
                <p className="lead">
                  Acquire customers. Retain relationships. Grow repeat business — all from one refreshingly simple platform.
                </p>
                <div className="hero-cta">
                  <a href="#pricing" className="btn btn--primary btn--lg">
                    Get started{" "}
                    <span className="arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                  <a href="#how-it-works" className="btn btn--ghost">
                    See how it works <span aria-hidden="true">↓</span>
                  </a>
                </div>
                <div className="cta-reassure">
                  <span>Zero setup fee</span>
                  <span className="sep" aria-hidden="true"></span>
                  <span>No forced hardware</span>
                  <span className="sep" aria-hidden="true"></span>
                  <span>Live in 15&nbsp;minutes</span>
                  <span className="sep" aria-hidden="true"></span>
                  <span>Cancel anytime</span>
                </div>
              </div>

              {/* phone composition */}
              <div className="hero-visual-wrap">
                <div className="hero-visual">
                  <div className="blob"></div>
                  <div className="dot-grid" aria-hidden="true">
                    <span></span><span></span><span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span><span></span><span></span>
                  </div>

                  {/* Business owner app */}
                  <div className="phone phone--left" role="img" aria-label="Fulcrum Business app dashboard: customer visits, page views, sales growth, active offers, and an activity heatmap">
                    <div className="phone-screen">
                      <img className="phone-shot" src="/assets/fulcrum-business.png" alt="" />
                      <div className="p-greet">
                        Good morning, Mabel <span style={{ fontFamily: "var(--font-body)" }}>👋</span>
                      </div>
                      <div className="p-sub">Here&rsquo;s your business today</div>
                      <div className="p-stat">
                        <div className="p-stat-label">Total customers</div>
                        <div className="p-stat-num">1,284</div>
                        <div className="p-stat-delta">↑ 12% this month</div>
                      </div>
                      <div className="p-section-label">Recent visitors</div>
                      <div className="stack-8">
                        <div className="p-visitor"><span className="swatch" style={{ background: "var(--lime)" }}></span><span className="name">Priya Nair</span><span className="when">visited today</span></div>
                        <div className="p-visitor"><span className="swatch" style={{ background: "var(--coral)" }}></span><span className="name">Arjun Rao</span><span className="when">visited today</span></div>
                        <div className="p-visitor"><span className="swatch" style={{ background: "var(--sky)" }}></span><span className="name">Meera Shah</span><span className="when">yesterday</span></div>
                      </div>
                    </div>
                  </div>

                  {/* Customer app */}
                  <div className="phone phone--right" role="img" aria-label="Fulcrum Retail customer app: welcome, points balance, category browsing, and nearby stores">
                    <div className="phone-screen">
                      <img className="phone-shot" src="/assets/fulcrum-customer.png" alt="" />
                      <div className="p-greet">Discover nearby</div>
                      <div className="p-hero-img"><span>Local n coffee</span></div>
                      <div className="p-shop-name">Brew &amp; Bloom Coffee</div>
                      <div className="p-shop-meta">0.3&nbsp;km away &middot; Coffee and Bakery</div>
                      <div className="stack-8" style={{ marginTop: "14px", gap: "8px" }}>
                        <div className="p-offer"><span className="label">Buy 5 coffees, get 1 free</span><span className="cta">JOIN</span></div>
                        <div className="p-offer"><span className="label">+15% off your first order</span><span className="cta">CLAIM</span></div>
                      </div>
                      <div className="p-rewards">
                        <div className="label">Your rewards</div>
                        <div className="num">240 points</div>
                        <div className="hint">You&rsquo;re 60 points from a reward</div>
                      </div>
                    </div>
                  </div>

                  {/* floating cards */}
                  <div className="float-card float-card--white">
                    <div className="fc-label">Repeat customer rate</div>
                    <div className="fc-num">+28.4%</div>
                    <div className="fc-delta">↑ Since last month</div>
                  </div>
                  <div className="qr-badge" aria-hidden="true">
                    <svg width="46" height="46" viewBox="0 0 46 46" fill="var(--forest)">
                      <path d="M4 4h14v14H4zM8 8v6h6V8z" />
                      <path d="M28 4h14v14H28zM32 8v6h6V8z" />
                      <path d="M4 28h14v14H4zM8 32v6h6v-6z" />
                      <rect x="22" y="4" width="4" height="4" /><rect x="22" y="12" width="4" height="4" /><rect x="22" y="22" width="4" height="4" /><rect x="30" y="22" width="4" height="4" /><rect x="38" y="22" width="4" height="4" /><rect x="22" y="30" width="4" height="4" /><rect x="30" y="30" width="4" height="4" /><rect x="38" y="38" width="4" height="4" /><rect x="30" y="38" width="4" height="4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="connector reveal">
              <span className="word">Business app</span>
              <span className="line"></span>
              <span className="word word--bold">Fulcrum</span>
              <span className="line"></span>
              <span className="word">Customer app</span>
            </div>
          </div>
        </section>

        {/* ============================== TRUST / RESULTS BAND ============================== */}
        <section className="proof-band" aria-label="Why store owners choose Fulcrum">
          <div className="container">
            <div className="proof-item reveal">
              <div className="num">
                <span className="count" data-to="15">15</span>
                <span className="u">&nbsp;min</span>
              </div>
              <div className="lbl">From sign-up to your first scan at the counter.</div>
            </div>
            <div className="proof-item reveal" style={{ transitionDelay: ".06s" }}>
              <div className="num">
                <span className="count" data-to="2.3" data-dec="1">2.3</span>
                <span className="u">&times;</span>
              </div>
              <div className="lbl">More repeat visits from customers on your loyalty program.</div>
            </div>
            <div className="proof-item reveal" style={{ transitionDelay: ".12s" }}>
              <div className="num">Zero</div>
              <div className="lbl">Hardware to buy. It runs on the phone already in your pocket.</div>
            </div>
            <div className="proof-item reveal" style={{ transitionDelay: ".18s" }}>
              <div className="num">
                &lt;24<span className="u">&nbsp;hr</span>
              </div>
              <div className="lbl">Typical reply from a real human — on call or WhatsApp. Assured.</div>
            </div>
          </div>
        </section>

        {/* ============================== PROBLEM ============================== */}
        <section className="section section--paper">
          <div className="container">
            <div className="section-head reveal">
              <div className="eyebrow">
                <span className="dot"></span> The problem
              </div>
              <h2>
                You know their face. You recall their smiles. You <em>just</em> don&rsquo;t know their names.
              </h2>
              <p className="lead section-intro">
                Regulars walk in, buy, walk out. You&rsquo;ve thought about asking for their number &mdash; but it feels awkward, almost impolite. So months pass, and you still can&rsquo;t reach them when business is slow.
              </p>
            </div>
            <div className="grid-3">
              <div className="problem-card reveal">
                <div className="icon-tile">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="8" r="3.2" /><path d="M3.5 20a5.5 5.5 0 0 1 11 0" /><path d="M17 8h5" /><path d="M19.5 5.5v5" />
                  </svg>
                </div>
                <div className="title">No customer data</div>
                <div className="body">You can&rsquo;t reach anyone you&rsquo;ve served.</div>
              </div>
              <div className="problem-card reveal" style={{ transitionDelay: ".06s" }}>
                <div className="icon-tile">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4.5" width="18" height="16" rx="2" /><path d="M3 9h18" /><path d="M8 3v3" /><path d="M16 3v3" /><path d="M10.4 13.2a1.6 1.6 0 1 1 2.2 1.5c-.6.3-.9.7-.9 1.3" /><path d="M12 18.2h.01" />
                  </svg>
                </div>
                <div className="title">No repeat business driver</div>
                <div className="body">Slow days stay slow. No way to pull people back in.</div>
              </div>
              <div className="problem-card reveal" style={{ transitionDelay: ".12s" }}>
                <div className="icon-tile">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" strokeDasharray="2 3.5" opacity=".55" /><path d="M12 6.5a4 4 0 0 1 4 4c0 2.6-4 6-4 6s-4-3.4-4-6a4 4 0 0 1 4-4z" /><circle cx="12" cy="10.5" r="1.3" />
                  </svg>
                </div>
                <div className="title">No visibility</div>
                <div className="body">Neighbours 500&nbsp;m away don&rsquo;t know you exist.</div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== SOLUTION ============================== */}
        <section className="section section--forest" id="solution">
          <div className="container">
            <div className="reveal">
              <div className="eyebrow eyebrow--onDark">
                <span className="dot"></span> The solution
              </div>
              <h2>
                Meet Fulcrum. <em>The bridge you&rsquo;ve been missing</em> &mdash; built for you.
              </h2>
              <p className="lead solution-intro">
                A hyper-local CRM that puts real customer relationships at the core of your business.
              </p>
            </div>

            <div className="bridge reveal">
              <div className="bridge-end">
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l1.5-5h15L21 9" /><path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" /><path d="M3 9h18" /><path d="M9 20v-6h6v6" />
                </svg>
                <span>Your store</span>
              </div>
              <div className="bridge-track">
                <svg viewBox="0 0 600 180" preserveAspectRatio="none" width="100%" height="180" className="path" aria-hidden="true">
                  <path d="M10 150 Q 300 -10 590 150" fill="none" stroke="var(--lime)" strokeWidth="2" strokeDasharray="1 12" strokeLinecap="round" opacity=".85" />
                  <circle className="mover" r="5" fill="var(--lime)">
                    <animateMotion dur="3.8s" repeatCount="indefinite" path="M10 150 Q 300 -10 590 150" />
                    <animate attributeName="opacity" dur="3.8s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.14;0.86;1" />
                  </circle>
                  <circle className="mover" r="5" fill="var(--coral)">
                    <animateMotion dur="3.8s" begin="1.9s" repeatCount="indefinite" path="M10 150 Q 300 -10 590 150" />
                    <animate attributeName="opacity" dur="3.8s" begin="1.9s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.14;0.86;1" />
                  </circle>
                </svg>
                {/* Vertical connector — shown only on stacked (mobile) layout */}
                <svg viewBox="0 0 24 210" width="24" height="210" className="bridge-vert" aria-hidden="true">
                  <path d="M12 84 L12 176" fill="none" stroke="var(--lime)" strokeWidth="2" strokeDasharray="1 12" strokeLinecap="round" opacity=".85" />
                  <circle className="mover" r="5" fill="var(--lime)">
                    <animateMotion dur="3.8s" repeatCount="indefinite" path="M12 84 L12 176" />
                    <animate attributeName="opacity" dur="3.8s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.14;0.86;1" />
                  </circle>
                  <circle className="mover" r="5" fill="var(--coral)">
                    <animateMotion dur="3.8s" begin="1.9s" repeatCount="indefinite" path="M12 84 L12 176" />
                    <animate attributeName="opacity" dur="3.8s" begin="1.9s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.14;0.86;1" />
                  </circle>
                </svg>
                <div className="bridge-hub">F</div>
                <div className="bridge-caption">OTP · QR · Points · Offers</div>
              </div>
              <div className="bridge-end">
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="10" cy="4.5" r="2" /><path d="M10 7v6" /><path d="M10 9l-4 2" /><path d="M10 13l-2.5 7" /><path d="M10 13l2.5 7" /><rect x="14" y="6" width="6.5" height="11" rx="1.2" /><path d="M16.5 14.5h1.5" />
                </svg>
                <span>Your customer</span>
              </div>
            </div>

            <div className="pillars">
              <div className="pillar reveal">
                <div className="head">
                  <span className="num" style={{ background: "var(--lime)" }}>01</span>
                  <span className="name">Acquire</span>
                </div>
                <p>Scan the Customer App QR code to capture customer details at checkout.</p>
              </div>
              <div className="pillar reveal" style={{ transitionDelay: ".06s" }}>
                <div className="head">
                  <span className="num" style={{ background: "var(--sky)" }}>02</span>
                  <span className="name">Retain</span>
                </div>
                <p>Reward every visit with points redeemable for gift vouchers, coupons and deals.</p>
              </div>
              <div className="pillar reveal" style={{ transitionDelay: ".12s" }}>
                <div className="head">
                  <span className="num" style={{ background: "var(--coral)" }}>03</span>
                  <span className="name">Market</span>
                </div>
                <p>Send targeted offers to VIPs, quiet regulars, or first-timers separately.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== HOW IT WORKS ============================== */}
        <section className="section section--paper" id="how-it-works">
          <div className="container">
            <div className="reveal">
              <div className="eyebrow">
                <span className="dot"></span> How it works
              </div>
              <h2 style={{ maxWidth: "16ch", marginBottom: "72px" }}>
                From setup to first sale — <em>in a week.</em>
              </h2>
            </div>

            <div className="steps">
              <div className="step reveal">
                <div className="step-title">
                  <span className="step-num step-num--01">01</span>
                  <span>Sign up in 15 minutes</span>
                </div>
                <div className="step-body">
                  <p>Add your store details and connect your account. No hardware to buy, no training day.</p>
                  <div className="step-demo">
                    <div className="demo-label">Business setup</div>
                    <div className="demo-bar"></div>
                    <div className="demo-bar short"></div>
                    <div className="demo-row"><span>Setup complete</span><span>100%</span></div>
                    <div className="demo-progress"><i></i></div>
                  </div>
                </div>
              </div>

              <div className="step reveal">
                <div className="step-title">
                  <span className="step-num step-num--02">02</span>
                  <span>Scan customer QR at checkout</span>
                </div>
                <div className="step-body">
                  <p>One scan at the counter logs the visit and adds points automatically.</p>
                  <div className="step-demo step-demo--center">
                    <div className="qr-tile" aria-hidden="true">
                      <span style={{ background: "var(--lime)" }}></span><span></span><span style={{ background: "var(--lime)" }}></span><span style={{ background: "var(--lime)" }}></span>
                      <span></span><span style={{ background: "var(--lime)" }}></span><span style={{ background: "var(--lime)" }}></span><span></span>
                      <span style={{ background: "var(--lime)" }}></span><span style={{ background: "var(--lime)" }}></span><span></span><span style={{ background: "var(--lime)" }}></span>
                      <span></span><span style={{ background: "var(--lime)" }}></span><span style={{ background: "var(--lime)" }}></span><span></span>
                    </div>
                    <div className="pts-added"><span className="check">✓</span> +50 pts added</div>
                    <div className="pts-to">to Sarah M.</div>
                  </div>
                </div>
              </div>

              <div className="step reveal">
                <div className="step-title">
                  <span className="step-num step-num--03">03</span>
                  <span>Send targeted offers</span>
                </div>
                <div className="step-body">
                  <p>Pick a segment, write your message, and send — over WhatsApp or SMS.</p>
                  <div className="step-demo">
                    <div className="demo-label">New offer</div>
                    <div className="demo-send-to">Send to</div>
                    <div className="demo-send-count">47 VIP customers</div>
                    <div className="demo-chip">Tuesday special</div>
                    <div className="demo-send">Send <span aria-hidden="true">↗</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== FEATURES ============================== */}
        <section className="section section--paper" id="features">
          <div className="container">
            <div className="reveal">
              <div className="eyebrow">
                <span className="dot"></span> Features
              </div>
              <h2 style={{ maxWidth: "16ch", marginBottom: "40px" }}>
                Everything you need. <em>And nothing you don&rsquo;t.</em>
              </h2>
            </div>

            <div className="feature-tabs reveal" role="tablist" aria-label="Feature categories" id="featureTabs"></div>

            <div className="feature-panel reveal" id="featurePanel" role="tabpanel">
              {/* hydrated by Interactions.jsx */}
            </div>
          </div>
        </section>

        {/* ============================== WHY FULCRUM ============================== */}
        <section className="section section--gradient" id="why">
          <div className="container">
            <div className="reveal">
              <div className="eyebrow eyebrow--onDark">
                <span className="dot"></span> Why Fulcrum
              </div>
              <h2>
                Built by folks who&rsquo;ve run <em>four real businesses.</em> Not just people who built software.
              </h2>
            </div>
            <div className="grid-4">
              <div className="reason reveal">
                <div className="tile">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6.5 5h11" /><path d="M6.5 9h11" /><path d="M9 5c5 0 5 4 0 4H6.5l8.5 10" />
                  </svg>
                </div>
                <div className="r-title">Priced for real retail businesses</div>
                <div className="r-body">Invite-only, and built for customer-obsessed, service-oriented stores. Plans start where it doesn&rsquo;t pinch.</div>
              </div>
              <div className="reason reveal" style={{ transitionDelay: ".05s" }}>
                <div className="tile">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 3 4 14h6l-1 7 9-11h-6z" />
                  </svg>
                </div>
                <div className="r-title">ROI you can see</div>
                <div className="r-body">Every campaign shows revenue vs. spend. Not vanity metrics.</div>
              </div>
              <div className="reason reveal" style={{ transitionDelay: ".1s" }}>
                <div className="tile">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3 5 6v5c0 4.5 3 7.6 7 9 4-1.4 7-4.5 7-9V6z" /><path d="M9 11.8l2 2 4-4" />
                  </svg>
                </div>
                <div className="r-title">Secured for your peace of mind</div>
                <div className="r-body">GDPR-compliant, hosted on ISO 27001 and SOC 2 Type II cloud servers, 256-bit SSL encrypted end-to-end.</div>
              </div>
              <div className="reason reveal" style={{ transitionDelay: ".15s" }}>
                <div className="tile">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 13v-1a8 8 0 0 1 16 0v1" /><rect x="3" y="13" width="4.2" height="6.5" rx="1.6" /><rect x="16.8" y="13" width="4.2" height="6.5" rx="1.6" /><path d="M20 19.5a4 4 0 0 1-4 3h-2.5" />
                  </svg>
                </div>
                <div className="r-title">Responsive, timely support</div>
                <div className="r-body">Call, WhatsApp or email us — a real human replies quickly. Assured.</div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== TESTIMONIALS ============================== */}
        {/* Placeholder quotes — replace with real, consented customer testimonials before launch. */}
        <section className="section section--paper" id="stories">
          <div className="container">
            <div className="section-head reveal">
              <div className="eyebrow">
                <span className="dot"></span> From the counter
              </div>
              <h2>
                Business owners, <em>in their own words.</em>
              </h2>
              <p className="lead section-intro">Real relationships, more repeat visits, no spreadsheet in sight — anywhere.</p>
            </div>
            <div className="tmony-grid">
              <figure className="tmony reveal">
                <div className="mark" aria-hidden="true">&ldquo;</div>
                <blockquote>
                  I finally know who my regulars are. One Tuesday offer to 40&nbsp;quiet customers and <b>half of them walked back in that week.</b>
                </blockquote>
                <figcaption className="who">
                  <span className="avatar" style={{ background: "var(--lime)" }}>RM</span>
                  <span>
                    <span className="name">Rekha Menon</span>
                    <span className="role">Bloom &amp; Bean Café, Bengaluru</span>
                  </span>
                </figcaption>
              </figure>
              <figure className="tmony reveal" style={{ transitionDelay: ".06s" }}>
                <div className="mark" aria-hidden="true">&ldquo;</div>
                <blockquote>
                  Setup took one chai break. No hardware, no training day &mdash; <b>we were scanning customers the same afternoon.</b>
                </blockquote>
                <figcaption className="who">
                  <span className="avatar" style={{ background: "var(--coral)" }}>AS</span>
                  <span>
                    <span className="name">Arun Shetty</span>
                    <span className="role">Shetty Provisions, Mangaluru</span>
                  </span>
                </figcaption>
              </figure>
              <figure className="tmony reveal" style={{ transitionDelay: ".12s" }}>
                <div className="mark" aria-hidden="true">&ldquo;</div>
                <blockquote>
                  The points keep people coming back for the voucher. <b>My repeat business is up and I&rsquo;m not guessing anymore</b> &mdash; I can see it.
                </blockquote>
                <figcaption className="who">
                  <span className="avatar" style={{ background: "var(--sky)" }}>FK</span>
                  <span>
                    <span className="name">Fatima Khan</span>
                    <span className="role">Khan Salon &amp; Studio, Pune</span>
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ============================== FOR CUSTOMERS ============================== */}
        <section className="section section--paper customers" id="customers">
          <div className="pin-field" aria-hidden="true" id="pinField"></div>
          <div className="container">
            <div className="reveal">
              <div className="eyebrow">
                <span className="dot"></span> For your customers
              </div>
              <h2 style={{ maxWidth: "16ch", marginBottom: "20px" }}>
                Shopping local <em>just got rewarding.</em>
              </h2>
              <p className="lead" style={{ marginBottom: "72px", maxWidth: "42ch" }}>
                Your customers download the Fulcrum app once, then earn points at every Fulcrum partner store in their pin code.
              </p>
            </div>

            <div className="cust-steps">
              <div className="cust-step reveal">
                <div style={{ color: "var(--lime)" }}>
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" /><polygon points="15.5,8.5 10.8,10.8 8.5,15.5 13.2,13.2" />
                  </svg>
                </div>
                <div className="title">Discover</div>
                <div className="body">Local stores by pin code.</div>
              </div>
              <div className="cust-step reveal" style={{ transitionDelay: ".06s" }}>
                <div style={{ color: "var(--coral)" }}>
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12,3 14.6,8.6 20.5,9.2 16,13.2 17.4,19 12,15.9 6.6,19 8,13.2 3.5,9.2 9.4,8.6" />
                  </svg>
                </div>
                <div className="title">Earn</div>
                <div className="body">Points on every purchase.</div>
              </div>
              <div className="cust-step reveal" style={{ transitionDelay: ".12s" }}>
                <div style={{ color: "var(--forest)" }}>
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3.5" y="9" width="17" height="11.5" rx="1.5" /><path d="M3 9h18" /><path d="M12 9v11.5" /><path d="M12 9S10.5 3.5 7.5 5c-2 1 .5 4 4.5 4z" /><path d="M12 9s1.5-5.5 4.5-4c2 1-.5 4-4.5 4z" />
                  </svg>
                </div>
                <div className="title">Redeem</div>
                <div className="body">For gift vouchers, coupons and deals.</div>
              </div>
            </div>

            <div className="shop-strip reveal">
              <span className="label">Built for every kind of store</span>
              <span className="icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 8h11v5a5.5 5.5 0 0 1-11 0z" /><path d="M16 9h2.5a2 2 0 0 1 0 4H16" /><path d="M7 3v2M10 3v2M13 3v2" /><path d="M4 21h13" />
                </svg>
              </span>
              <span className="icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 5v14a1 1 0 0 0 1 1h13V4H6a1 1 0 0 0-1 1z" /><path d="M9 4v16" />
                </svg>
              </span>
              <span className="icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21v-7" /><path d="M12 14c-4 0-6-2-6-6 4 0 6 2 6 6z" /><path d="M12 12c0-3.5 2-5.5 6-5.5 0 3.5-2 5.5-6 5.5z" />
                </svg>
              </span>
              <span className="icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="6" r="2.5" /><circle cx="6" cy="18" r="2.5" /><path d="M8 7.5 20 17M8 16.5 20 7" />
                </svg>
              </span>
            </div>

            <div className="reveal">
              <h3 className="app-showcase-title">Two apps, one platform</h3>
              <p className="lead app-showcase-sub">The business app runs your store; the customer app keeps them coming back.</p>
            </div>

            <div className="app-showcase reveal" id="appShowcase">
              <div className="app-toggle" role="tablist" aria-label="Preview the Fulcrum apps">
                <button className="app-tab" role="tab" id="tab-business" aria-controls="panel-business" data-app="business" aria-selected="true">
                  Business app
                </button>
                <button className="app-tab" role="tab" id="tab-customer" aria-controls="panel-customer" data-app="customer" aria-selected="false">
                  Customer app
                </button>
              </div>

              {/* BUSINESS APP — primary */}
              <div className="app-panel" data-app="business" id="panel-business" role="tabpanel" aria-labelledby="tab-business">
                <div className="reward-phone" role="img" aria-label="Fulcrum business app dashboard: revenue this month and recent visitors">
                  <div className="screen">
                    <img className="phone-shot" src="/assets/fulcrum-business.png" alt="" />
                    <div className="p-greet">
                      Good morning, Mabel <span style={{ fontFamily: "var(--font-body)" }}>👋</span>
                    </div>
                    <div className="p-sub">Here&rsquo;s your business today</div>
                    <div className="p-stat">
                      <div className="p-stat-label">Revenue this month</div>
                      <div className="p-stat-num">₹1.2L</div>
                      <div className="p-stat-delta">↑ 22% vs last month</div>
                    </div>
                    <div className="p-section-label">Recent visitors</div>
                    <div className="stack-8">
                      <div className="p-visitor"><span className="swatch" style={{ background: "var(--lime)" }}></span><span className="name">Priya Nair</span><span className="when">visited today</span></div>
                      <div className="p-visitor"><span className="swatch" style={{ background: "var(--coral)" }}></span><span className="name">Arjun Rao</span><span className="when">visited today</span></div>
                      <div className="p-visitor"><span className="swatch" style={{ background: "var(--sky)" }}></span><span className="name">Meera Shah</span><span className="when">yesterday</span></div>
                    </div>
                  </div>
                </div>
                <div className="cust-cta">
                  <h3>Your storefront, in one app.</h3>
                  <p>Know who walked in, reward every visit, and send the weekly offer that brings quiet regulars back — right from your phone, in minutes a day.</p>
                  <div style={{ marginBottom: "24px" }}>
                    <a href="#" className="btn btn--primary btn--lg">
                      Download the business app{" "}
                      <span className="arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </div>
                  <div className="store-badges">
                    <a href="#" className="store-badge" aria-label="Download the business app on the App Store">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M16.4 12.9c0-2 1.6-2.9 1.7-3-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7s-1.6-.7-2.6-.7c-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.4 2 2.5 2 1 0 1.3-.6 2.5-.6s1.5.6 2.5.6 1.7-1 2.4-2c.7-1.1 1-2.1 1-2.2-.1 0-2.3-.9-2.3-3.4z" />
                        <path d="M14.6 6.7c.5-.7.9-1.6.8-2.6-.8 0-1.8.5-2.4 1.2-.5.6-1 1.5-.8 2.5.9 0 1.8-.5 2.4-1.1z" />
                      </svg>
                      <span className="txt"><span className="small">Download on the</span><span className="big">App Store</span></span>
                    </a>
                    <a href="#" className="store-badge" aria-label="Get the business app on Google Play">
                      <svg width="20" height="22" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3.6 2.3c-.3.3-.5.7-.5 1.3v16.8c0 .6.2 1 .5 1.3l10-10.7-10-8.7z" fill="#7FA9C8" />
                        <path d="M17.2 15.4l-3.6-3.4 3.7-3.4 3.1 1.8c1.1.6 1.1 1.6 0 2.3l-3.2 1.7z" fill="#C4E538" />
                        <path d="M13.6 12l3.6 3.4-9.9 5.4c-.4.2-.8.2-1.2.1l7.5-8.9z" fill="#E85D3C" />
                        <path d="M13.6 12L6.1 3.1c.4-.1.8-.1 1.2.1l9.9 5.4-3.6 3.4z" fill="#FBF8F1" />
                      </svg>
                      <span className="txt"><span className="small">Get it on</span><span className="big">Google Play</span></span>
                    </a>
                  </div>
                </div>
              </div>

              {/* CUSTOMER APP */}
              <div className="app-panel" data-app="customer" id="panel-customer" role="tabpanel" aria-labelledby="tab-customer" hidden>
                <div className="reward-phone" role="img" aria-label="Fulcrum customer rewards screen with 240 points">
                  <div className="screen">
                    <img className="phone-shot" src="/assets/fulcrum-customer.png" alt="" />
                    <div className="title">Your rewards</div>
                    <div className="sub">Priya · pin 560001</div>
                    <div className="reward-balance">
                      <div className="label">Points balance</div>
                      <div className="num">240</div>
                      <div className="track"><i></i></div>
                      <div className="hint">60 points from a ₹100 voucher</div>
                    </div>
                    <div className="reward-list-label">Redeem for</div>
                    <div className="stack-8" style={{ gap: "8px" }}>
                      <div className="reward-item"><span className="label">₹100 gift voucher</span><span className="pts">300 pts</span></div>
                      <div className="reward-item"><span className="label">₹250 gift voucher</span><span className="pts">700 pts</span></div>
                    </div>
                  </div>
                </div>
                <div className="cust-cta">
                  <h3>Give your regulars a reason to come back.</h3>
                  <p>One app, every neighbourhood store. Points that turn into real vouchers, coupons and deals.</p>
                  <div style={{ marginBottom: "24px" }}>
                    <a href="#" className="btn btn--primary btn--lg">
                      Download the customer app{" "}
                      <span className="arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </div>
                  <div className="store-badges">
                    <a href="#" className="store-badge" aria-label="Download the customer app on the App Store">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M16.4 12.9c0-2 1.6-2.9 1.7-3-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7s-1.6-.7-2.6-.7c-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.4 2 2.5 2 1 0 1.3-.6 2.5-.6s1.5.6 2.5.6 1.7-1 2.4-2c.7-1.1 1-2.1 1-2.2-.1 0-2.3-.9-2.3-3.4z" />
                        <path d="M14.6 6.7c.5-.7.9-1.6.8-2.6-.8 0-1.8.5-2.4 1.2-.5.6-1 1.5-.8 2.5.9 0 1.8-.5 2.4-1.1z" />
                      </svg>
                      <span className="txt"><span className="small">Download on the</span><span className="big">App Store</span></span>
                    </a>
                    <a href="#" className="store-badge" aria-label="Get the customer app on Google Play">
                      <svg width="20" height="22" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3.6 2.3c-.3.3-.5.7-.5 1.3v16.8c0 .6.2 1 .5 1.3l10-10.7-10-8.7z" fill="#7FA9C8" />
                        <path d="M17.2 15.4l-3.6-3.4 3.7-3.4 3.1 1.8c1.1.6 1.1 1.6 0 2.3l-3.2 1.7z" fill="#C4E538" />
                        <path d="M13.6 12l3.6 3.4-9.9 5.4c-.4.2-.8.2-1.2.1l7.5-8.9z" fill="#E85D3C" />
                        <path d="M13.6 12L6.1 3.1c.4-.1.8-.1 1.2.1l9.9 5.4-3.6 3.4z" fill="#FBF8F1" />
                      </svg>
                      <span className="txt"><span className="small">Get it on</span><span className="big">Google Play</span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== PRICING ============================== */}
        <section className="section section--paper" id="pricing">
          <div className="container">
            <div className="pricing-head reveal">
              <div className="eyebrow" style={{ justifyContent: "center" }}>
                <span className="dot"></span> Pricing
              </div>
              <h2>
                One toolkit. <em>Your billing rhythm.</em>
              </h2>
              <p className="lead">
                Every plan includes the full Fulcrum toolkit &mdash; the longer you commit, the less you pay. The yearly plan works out to about &#8377;10 a day.
              </p>
            </div>

            <div className="plans">
              {/* Quarterly */}
              <div className="plan reveal">
                <div className="p-name">Quarterly</div>
                <div className="p-price"><span className="amt">&#8377;1,500</span><span className="per">/ 3 months</span></div>
                <div className="p-gst">+ 18% GST</div>
                <div className="p-day">&asymp; &#8377;16 a day</div>
                <div className="p-spacer"></div>
                <a href="#" className="btn btn--ghost btn--lg">
                  Choose Quarterly{" "}
                  <span className="arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>

              {/* Half-yearly */}
              <div className="plan reveal" style={{ transitionDelay: ".06s" }}>
                <div className="p-name">Half-yearly</div>
                <div className="p-price"><span className="amt">&#8377;2,400</span><span className="per">/ 6 months</span></div>
                <div className="p-gst">+ 18% GST</div>
                <div className="p-day">&asymp; &#8377;13 a day</div>
                <span className="p-save">Save &#8377;1,200 a year &middot; 20%</span>
                <div className="p-spacer"></div>
                <a href="#" className="btn btn--dark btn--lg">
                  Choose Half-yearly{" "}
                  <span className="arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>

              {/* Yearly — featured / best value */}
              <div className="plan plan--featured reveal" style={{ transitionDelay: ".12s" }}>
                <span className="badge">Best value &middot; &#8377;10 a day</span>
                <div className="p-name">Yearly</div>
                <div className="p-price"><span className="amt">&#8377;3,650</span><span className="per">/ year</span></div>
                <div className="p-gst">+ 18% GST</div>
                <div className="p-day">&asymp; &#8377;10 a day</div>
                <span className="p-save">Save &#8377;2,350 a year &middot; 39%</span>
                <div className="p-spacer"></div>
                <a href="#" className="btn btn--primary btn--lg">
                  Choose Yearly{" "}
                  <span className="arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            <div className="plan-includes reveal">
              <div className="lbl">Every plan includes</div>
              <ul>
                <li><span className="check">&#10003;</span> Unlimited customer profiles</li>
                <li><span className="check">&#10003;</span> QR check-in and points at checkout</li>
                <li><span className="check">&#10003;</span> Loyalty, offers and referrals</li>
                <li><span className="check">&#10003;</span> WhatsApp and SMS campaigns</li>
                <li><span className="check">&#10003;</span> ROI and repeat-rate analytics</li>
                <li><span className="check">&#10003;</span> Real human support, 7 days</li>
              </ul>
            </div>
            <p className="pricing-foot reveal">All prices exclude 18% GST &middot; Zero setup fee &middot; Cancel anytime</p>
          </div>
        </section>

        {/* ============================== FAQ ============================== */}
        <section className="section section--paper" id="faq">
          <div className="container faq-grid">
            <div className="reveal">
              <div className="eyebrow eyebrow--onDark" style={{ color: "var(--ink-muted)" }}>
                <span className="dot" style={{ background: "var(--lime)" }}></span> Frequently asked questions
              </div>
              <h2>
                Good questions. <em>Clear answers.</em>
              </h2>
              <p className="lead" style={{ marginTop: "16px" }}>
                Still curious? We&rsquo;d love to hear from you.
              </p>
            </div>

            <div className="reveal" id="faqList">
              <div className="faq-item is-open">
                <button className="faq-q" aria-expanded="true">
                  <span>What is Fulcrum Retail?</span>
                  <span className="plus" aria-hidden="true">+</span>
                </button>
                <div className="faq-a">
                  <p>A hyper-local CRM that helps small businesses capture, reward and engage customers, existing and new. We aim to empower micro-retail businesses with an integrated customer relationship management tool.</p>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-q" aria-expanded="false">
                  <span>Do my customers need to download an app?</span>
                  <span className="plus" aria-hidden="true">+</span>
                </button>
                <div className="faq-a">
                  <p>Yes. To unlock business discovery, offer notifications, automatic points on spends, and redemption for vouchers and coupons, customers download the Fulcrum Customer App.</p>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-q" aria-expanded="false">
                  <span>How long does it take to get started?</span>
                  <span className="plus" aria-hidden="true">+</span>
                </button>
                <div className="faq-a">
                  <p>About 15&nbsp;minutes. Register with a few business details and you&rsquo;re online. Customers in your pin code see you instantly on their app. Once they visit and transact, they become your customers — pamper them with offers and you&rsquo;ve got them hooked for life.</p>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-q" aria-expanded="false">
                  <span>Is Fulcrum suitable for my type of business?</span>
                  <span className="plus" aria-hidden="true">+</span>
                </button>
                <div className="faq-a">
                  <p>If you run a business that serves customers — existing and new — Fulcrum fits like a glove. Cafés, salons, boutiques, pet-supply stores, bakeries and more can reap the full power of Fulcrum Retail.</p>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-q" aria-expanded="false">
                  <span>How is my customer data protected?</span>
                  <span className="plus" aria-hidden="true">+</span>
                </button>
                <div className="faq-a">
                  <p>Data is encrypted end-to-end and stored on ISO 27001 and SOC 2 Type II standard servers. Customer details are respected and never shared under any circumstances, except where required by law.</p>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-q" aria-expanded="false">
                  <span>How much does Fulcrum cost?</span>
                  <span className="plus" aria-hidden="true">+</span>
                </button>
                <div className="faq-a">
                  <p>Every plan includes the full toolkit — you only choose the length of your subscription. Standard rates are &#8377;1,500 for 3 months, &#8377;3,000 for 6 months, and &#8377;6,000 for a year. As an inaugural, limited-period offer, it&rsquo;s &#8377;3,650 for a year. GST extra. Renewal at applicable rates.</p>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-q" aria-expanded="false">
                  <span>What is the mission at Fulcrum Retail Solutions?</span>
                  <span className="plus" aria-hidden="true">+</span>
                </button>
                <div className="faq-a">
                  <p>Many micro-business owners struggle to stay connected with their customers. Our mission is to build an easy-to-manage, integrated contact-management system for them. With Fulcrum as an ally, we&rsquo;re confident business owners will gain visibility, ensure predictability, and earn an advantage over their competitors.</p>
                </div>
              </div>
              <a href="#" className="faq-more">
                View all FAQs →
              </a>
            </div>
          </div>
        </section>

        {/* ============================== FINAL CTA ============================== */}
        <section className="final-cta">
          <div className="container">
            <div className="cta-block reveal">
              <svg className="sparkle" style={{ top: "36px", left: "48px", color: "var(--on-accent)" }} width="46" height="46" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 1.5c.6 4.8 3.7 7.9 8.5 8.5-4.8.6-7.9 3.7-8.5 8.5-.6-4.8-3.7-7.9-8.5-8.5C8.3 9.4 11.4 6.3 12 1.5z" />
              </svg>
              <svg className="sparkle" style={{ top: "78px", left: "104px", color: "var(--on-accent-soft)" }} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 1.5c.6 4.8 3.7 7.9 8.5 8.5-4.8.6-7.9 3.7-8.5 8.5-.6-4.8-3.7-7.9-8.5-8.5C8.3 9.4 11.4 6.3 12 1.5z" />
              </svg>
              <svg className="sparkle" style={{ bottom: "40px", right: "56px", color: "var(--on-accent)" }} width="34" height="34" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 1.5c.6 4.8 3.7 7.9 8.5 8.5-4.8.6-7.9 3.7-8.5 8.5-.6-4.8-3.7-7.9-8.5-8.5C8.3 9.4 11.4 6.3 12 1.5z" />
              </svg>
              <svg className="sparkle" style={{ bottom: "86px", right: "120px", color: "var(--on-accent-soft)" }} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 1.5c.6 4.8 3.7 7.9 8.5 8.5-4.8.6-7.9 3.7-8.5 8.5-.6-4.8-3.7-7.9-8.5-8.5C8.3 9.4 11.4 6.3 12 1.5z" />
              </svg>
              <h2>
                Ready to turn customers <em>into repeat customers?</em>
              </h2>
              <a href="#pricing" className="btn btn--dark btn--lg">
                Get started{" "}
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <div className="cta-reassure">
                <span>Zero setup fee</span>
                <span className="sep" aria-hidden="true"></span>
                <span>No forced hardware</span>
                <span className="sep" aria-hidden="true"></span>
                <span>Live in 15&nbsp;minutes</span>
                <span className="sep" aria-hidden="true"></span>
                <span>Cancel anytime</span>
              </div>
              <div className="cta-download">
                <div className="label">Download the business app</div>
                <div className="badges">
                  <a href="#" className="store-badge" aria-label="Download on the App Store">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M16.4 12.9c0-2 1.6-2.9 1.7-3-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7s-1.6-.7-2.6-.7c-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.4 2 2.5 2 1 0 1.3-.6 2.5-.6s1.5.6 2.5.6 1.7-1 2.4-2c.7-1.1 1-2.1 1-2.2-.1 0-2.3-.9-2.3-3.4z" />
                      <path d="M14.6 6.7c.5-.7.9-1.6.8-2.6-.8 0-1.8.5-2.4 1.2-.5.6-1 1.5-.8 2.5.9 0 1.8-.5 2.4-1.1z" />
                    </svg>
                    <span className="txt"><span className="small">Download on the</span><span className="big">App Store</span></span>
                  </a>
                  <a href="#" className="store-badge" aria-label="Get it on Google Play">
                    <svg width="20" height="22" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M3.6 2.3c-.3.3-.5.7-.5 1.3v16.8c0 .6.2 1 .5 1.3l10-10.7-10-8.7z" fill="#7FA9C8" />
                      <path d="M17.2 15.4l-3.6-3.4 3.7-3.4 3.1 1.8c1.1.6 1.1 1.6 0 2.3l-3.2 1.7z" fill="#C4E538" />
                      <path d="M13.6 12l3.6 3.4-9.9 5.4c-.4.2-.8.2-1.2.1l7.5-8.9z" fill="#E85D3C" />
                      <path d="M13.6 12L6.1 3.1c.4-.1.8-.1 1.2.1l9.9 5.4-3.6 3.4z" fill="#FBF8F1" />
                    </svg>
                    <span className="txt"><span className="small">Get it on</span><span className="big">Google Play</span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============================== FOOTER ============================== */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo">
                Fulcrum<span className="dot">.</span>
              </div>
              <p>The CRM for retail businesses and service providers.</p>
              <div className="made">Made in Bangalore, IN</div>
            </div>
            <div className="footer-col">
              <div className="title">Product</div>
              <div className="links">
                <a href="#">Business App</a>
                <a href="#">Customer App</a>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
              </div>
            </div>
            <div className="footer-col">
              <div className="title">Company</div>
              <div className="links">
                <a href="#why">About</a>
                <a href="#faq">FAQ</a>
                <a href="#">Contact</a>
                <a href="#">Blog</a>
              </div>
            </div>
            <div className="footer-col">
              <div className="title">Legal</div>
              <div className="links">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Data Policy</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copy">&copy;&nbsp;2026 Fulcrum Retail Solutions</div>
            <div className="footer-social">
              <a href="#" aria-label="Fulcrum on X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.2 2.5h3.3l-7.2 8.2 8.5 11.3h-6.7l-5.2-6.9-6 6.9H1.6l7.7-8.8L1.2 2.5h6.9l4.7 6.3 5.4-6.3zm-1.2 17.8h1.8L7.1 4.4H5.2l11.8 15.9z" />
                </svg>
              </a>
              <a href="#" aria-label="Fulcrum on Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="Fulcrum on LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9.5h4V21H3zM10 9.5h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.1c0-1.22-.02-2.8-1.7-2.8-1.7 0-1.96 1.33-1.96 2.7V21h-4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
