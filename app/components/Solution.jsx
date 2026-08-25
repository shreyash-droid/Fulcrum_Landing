export default function Solution() {
  return (
    <section className="section section--forest" id="solution">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow eyebrow--onDark">
            <span className="dot"></span> The solution
          </div>
          <h2>
            Meet Fulcrum. <em>The bridge you&rsquo;ve been missing</em> &mdash; Now built for you.
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
              <path d="M10 110 Q 300 -50 590 110" fill="none" stroke="var(--lime)" strokeWidth="2" strokeDasharray="1 12" strokeLinecap="round" opacity=".85" />
              <circle className="mover" r="5" fill="var(--lime)">
                <animateMotion dur="3.8s" repeatCount="indefinite" path="M10 110 Q 300 -50 590 110" />
                <animate attributeName="opacity" dur="3.8s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.14;0.86;1" />
              </circle>
              <circle className="mover" r="5" fill="var(--coral)">
                <animateMotion dur="3.8s" begin="1.9s" repeatCount="indefinite" path="M10 110 Q 300 -50 590 110" />
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
            <div className="bridge-hub"><img src="/assets/logo-mark.svg" alt="Fulcrum" width="38" height="39" /></div>
            <div className="bridge-caption">OTP · QR · Points · Offers</div>
          </div>
          <div className="bridge-end">
            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="10" cy="4.5" r="2" /><path d="M10 7v6" /><path d="M10 9l-4 2" /><path d="M10 13l-2.5 7" /><path d="M10 13l2.5 7" /><rect x="14" y="6" width="6.5" height="11" rx="1.2" /><path d="M16.5 14.5h1.5" />
            </svg>
            <span>Your customer</span>
          </div>
        </div>

        {/* ARM philosophy — the growth flywheel at the heart of Fulcrum */}
        <div className="arm reveal">
          <div className="arm-head">
            <span className="arm-kicker">The Fulcrum philosophy</span>
            <h3>
              <span className="arm-mono">A</span>cquire.{" "}
              <span className="arm-mono">R</span>etain.{" "}
              <span className="arm-mono">M</span>arket.
            </h3>
            <p>Three moves, one loop. Every customer you win feeds the next — a flywheel that compounds with every visit.</p>
          </div>

          <div className="arm-flow" role="list">
            <div className="arm-node" role="listitem" style={{ "--armC": "var(--lime)" }}>
              <div className="arm-badge">
                <span className="arm-letter">A</span>
                <span className="arm-step">01</span>
              </div>
              <div className="arm-word">Acquire</div>
              <p>Scan the Customer App QR code to capture customer details at checkout.</p>
            </div>

            <div className="arm-link" aria-hidden="true">
              <svg viewBox="0 0 48 24" width="48" height="24" fill="none">
                <path d="M2 12h40" stroke="var(--lime)" strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" opacity=".7" />
                <path d="M36 5l8 7-8 7" stroke="var(--lime)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="arm-node" role="listitem" style={{ "--armC": "var(--sky)" }}>
              <div className="arm-badge">
                <span className="arm-letter">R</span>
                <span className="arm-step">02</span>
              </div>
              <div className="arm-word">Retain</div>
              <p>Reward every visit with points redeemable for gift vouchers, coupons and deals.</p>
            </div>

            <div className="arm-link" aria-hidden="true">
              <svg viewBox="0 0 48 24" width="48" height="24" fill="none">
                <path d="M2 12h40" stroke="var(--coral)" strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" opacity=".7" />
                <path d="M36 5l8 7-8 7" stroke="var(--coral)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="arm-node" role="listitem" style={{ "--armC": "var(--coral)" }}>
              <div className="arm-badge">
                <span className="arm-letter">M</span>
                <span className="arm-step">03</span>
              </div>
              <div className="arm-word">Market</div>
              <p>Send targeted offers to VIPs, quiet regulars, or first-timers separately.</p>
            </div>
          </div>

          <div className="arm-loop" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 1 0 3-6.7" /><path d="M3 3v4h4" />
            </svg>
            <span>and the loop begins again — every visit compounds the last</span>
          </div>
        </div>
      </div>
    </section>
  );
}
