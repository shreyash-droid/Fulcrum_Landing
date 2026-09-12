const ICONS = {
  price: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 5h11" /><path d="M6.5 9h11" /><path d="M9 5c5 0 5 4 0 4H6.5l8.5 10" />
    </svg>
  ),
  roi: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 3 4 14h6l-1 7 9-11h-6z" />
    </svg>
  ),
  shield: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 5 6v5c0 4.5 3 7.6 7 9 4-1.4 7-4.5 7-9V6z" /><path d="M9 11.8l2 2 4-4" />
    </svg>
  ),
  support: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" /><rect x="3" y="13" width="4.2" height="6.5" rx="1.6" /><rect x="16.8" y="13" width="4.2" height="6.5" rx="1.6" /><path d="M20 19.5a4 4 0 0 1-4 3h-2.5" />
    </svg>
  ),
};

// Same four stakeholder reasons as v1 - all copy preserved. The security card
// keeps every certification in the body text (no separate tags).
const REASONS = [
  {
    num: "01",
    icon: ICONS.price,
    title: "Priced for real retail businesses",
    body: "Invite-only, and built for customer-obsessed, service-oriented stores. Plans start where it doesn’t pinch.",
  },
  {
    num: "02",
    icon: ICONS.roi,
    title: "ROI you can see",
    body: "Every campaign shows revenue vs. spend. Not vanity metrics.",
  },
  {
    num: "03",
    icon: ICONS.shield,
    title: "Secured for your peace of mind",
    body: "GDPR-compliant and encrypted end-to-end, hosted on ISO 27001 and SOC 2 Type II certified cloud servers with 256-bit SSL.",
  },
  {
    num: "04",
    icon: ICONS.support,
    title: "Responsive, timely support",
    body: "Call, WhatsApp or email us - a real human replies quickly. Assured.",
  },
];

export default function WhyFulcrum({ v2 = false }) {
  if (v2) {
    return (
      <section className="section section--gradient" id="why">
        <div className="container">
          <div className="reveal why2-intro">
            <div className="eyebrow eyebrow--onDark">
              <span className="dot"></span> Why Fulcrum
            </div>
            <h2>
              Built by folks who&rsquo;ve run
              <br />
              <em>four real businesses.</em>
            </h2>
            <p className="why2-lead">
              We&rsquo;ve stood behind our own counters - so every promise here is one we&rsquo;ve had to keep ourselves: fair pricing, honest numbers, serious security, and real people on the other end.
            </p>
          </div>

          <div className="why2-grid">
            {REASONS.map((r, i) => (
              <article
                key={r.num}
                className="why2-card reveal"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="why2-head">
                  <span className="why2-tile">{r.icon}</span>
                  <span className="why2-num">{r.num}</span>
                </div>
                <h3 className="why2-title">{r.title}</h3>
                <p className="why2-body">{r.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
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
            <div className="tile">{ICONS.price}</div>
            <div className="r-title">Priced for real retail businesses</div>
            <div className="r-body">Invite-only, and built for customer-obsessed, service-oriented stores. Plans start where it doesn&rsquo;t pinch.</div>
          </div>
          <div className="reason reveal" style={{ transitionDelay: ".05s" }}>
            <div className="tile">{ICONS.roi}</div>
            <div className="r-title">ROI you can see</div>
            <div className="r-body">Every campaign shows revenue vs. spend. Not vanity metrics.</div>
          </div>
          <div className="reason reveal" style={{ transitionDelay: ".1s" }}>
            <div className="tile">{ICONS.shield}</div>
            <div className="r-title">Secured for your peace of mind</div>
            <div className="r-body">GDPR-compliant, hosted on ISO 27001 and SOC 2 Type II cloud servers, 256-bit SSL encrypted end-to-end.</div>
          </div>
          <div className="reason reveal" style={{ transitionDelay: ".15s" }}>
            <div className="tile">{ICONS.support}</div>
            <div className="r-title">Responsive, timely support</div>
            <div className="r-body">Call, WhatsApp or email us - a real human replies quickly. Assured.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
