export default function WhyFulcrum() {
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
  );
}
