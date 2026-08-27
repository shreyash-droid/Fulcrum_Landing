export default function Hero() {
  return (
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
              Acquire customers. Retain relationships. Grow repeat business - all from one refreshingly simple platform.
            </p>
            <div className="hero-cta">
              <a href="#waitlist" className="btn btn--primary btn--lg">
                Join the waitlist now{" "}
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
  );
}
