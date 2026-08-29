/* Design B - the whole product as one four-beat loop, told in icons.
   Every node is a picture, a number and at most two words. */
export default function VisualLoop() {
  return (
    <section className="section section--forest v2-loop" id="loop">
      <div className="container">
        <div className="v2-head v2-head--dark reveal">
          <div className="eyebrow eyebrow--onDark">
            <span className="dot"></span> The whole idea
          </div>
          <h2>
            One loop.
            <br />
            <em>Four moments.</em>
          </h2>
        </div>

        <ol className="v2-flow reveal" aria-label="How a walk-in becomes a regular">
          <li className="v2-flow-node" style={{ "--c": "var(--lime)" }}>
            <span className="v2-flow-ico">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="13" cy="4" r="2" />
                <path d="M13 6.5v6M13 9l-4.5 2M13 12.5l-3 8.5M13 12.5l3 4 1.5 4.5" />
              </svg>
            </span>
            <span className="v2-flow-step">01</span>
            <span className="v2-flow-word">They walk in</span>
          </li>

          <li className="v2-flow-link" aria-hidden="true">
            <i></i>
          </li>

          <li className="v2-flow-node" style={{ "--c": "var(--sky)" }}>
            <span className="v2-flow-ico">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8V5.5A1.5 1.5 0 0 1 4.5 4H7M17 4h2.5A1.5 1.5 0 0 1 21 5.5V8M21 16v2.5a1.5 1.5 0 0 1-1.5 1.5H17M7 20H4.5A1.5 1.5 0 0 1 3 18.5V16" />
                <rect x="7.5" y="7.5" width="4" height="4" rx=".6" />
                <rect x="12.5" y="12.5" width="4" height="4" rx=".6" />
                <path d="M12.5 7.5h4v2M7.5 16.5h2.5" />
              </svg>
            </span>
            <span className="v2-flow-step">02</span>
            <span className="v2-flow-word">You scan the QR</span>
          </li>

          <li className="v2-flow-link" aria-hidden="true">
            <i></i>
          </li>

          <li className="v2-flow-node" style={{ "--c": "var(--coral)" }}>
            <span className="v2-flow-ico">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7.2l1.55 3.25 3.45.42-2.55 2.4.68 3.53L12 15.1l-3.13 1.7.68-3.53-2.55-2.4 3.45-.42z" />
              </svg>
            </span>
            <span className="v2-flow-step">03</span>
            <span className="v2-flow-word">Points land</span>
          </li>

          <li className="v2-flow-link" aria-hidden="true">
            <i></i>
          </li>

          <li className="v2-flow-node" style={{ "--c": "var(--lime)" }}>
            <span className="v2-flow-ico">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3.5 9.5h3.2L14 5v14l-7.3-4.5H3.5z" />
                <path d="M6.7 9.5v5M17.5 9a4 4 0 0 1 0 6M20 6.5a7.5 7.5 0 0 1 0 11" />
              </svg>
            </span>
            <span className="v2-flow-step">04</span>
            <span className="v2-flow-word">You send an offer</span>
          </li>
        </ol>

        <div className="v2-flow-return reveal" aria-hidden="true">
          <span className="v2-return-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20V5M6 11l6-6 6 6" />
            </svg>
          </span>
          <span className="v2-return-cap">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 1 0 3-6.7" />
              <path d="M3 3v4h4" />
            </svg>
            and they walk in again
          </span>
        </div>
      </div>
    </section>
  );
}
