export default function ForCustomers() {
  return (
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
            <div className="body">Featured stores by pin code.</div>
          </div>
          <div className="cust-step reveal" style={{ transitionDelay: ".06s" }}>
            <div style={{ color: "var(--coral)" }}>
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12,3 14.6,8.6 20.5,9.2 16,13.2 17.4,19 12,15.9 6.6,19 8,13.2 3.5,9.2 9.4,8.6" />
              </svg>
            </div>
            <div className="title">Earn</div>
            <div className="body">Cash credits on every purchase.</div>
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
  );
}
