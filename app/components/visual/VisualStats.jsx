/* Design B - the proof band, reduced to four icons and four numbers.
   Counters animate via the shared .count handler in Interactions.jsx. */
export default function VisualStats() {
  return (
    <section className="section section--gradient v2-stats" aria-label="Fulcrum in numbers">
      <div className="container">
        <div className="v2-stat-grid">
          <div className="v2-stat reveal">
            <span className="v2-stat-ico">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 6.8V12l3.4 2.1" />
              </svg>
            </span>
            <span className="v2-stat-num">
              <span className="count" data-to="15">
                15
              </span>
              <i>min</i>
            </span>
            <span className="v2-stat-lbl">to go live</span>
          </div>

          <div className="v2-stat reveal" style={{ transitionDelay: ".06s" }}>
            <span className="v2-stat-ico">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 3-6.7" />
                <path d="M3 3.5V8h4.5" />
                <path d="M12 8.5v4l2.8 1.7" />
              </svg>
            </span>
            <span className="v2-stat-num">
              <span className="count" data-to="2.3" data-dec="1">
                2.3
              </span>
              <i>&times;</i>
            </span>
            <span className="v2-stat-lbl">repeat visits</span>
          </div>

          <div className="v2-stat reveal" style={{ transitionDelay: ".12s" }}>
            <span className="v2-stat-ico">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" />
                <path d="M2.5 10h19" />
                <path d="M6 14.5h4" />
                <path d="M4 3.5l16 17" stroke="var(--coral)" strokeWidth="2.2" />
              </svg>
            </span>
            <span className="v2-stat-num">
              <i className="v2-cur">&#8377;</i>
              <span className="count" data-to="0">
                0
              </span>
            </span>
            <span className="v2-stat-lbl">hardware to buy</span>
          </div>

          <div className="v2-stat reveal" style={{ transitionDelay: ".18s" }}>
            <span className="v2-stat-ico">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
                <rect x="3" y="13" width="4.2" height="6.5" rx="1.6" />
                <rect x="16.8" y="13" width="4.2" height="6.5" rx="1.6" />
                <path d="M20 19.5a4 4 0 0 1-4 3h-2.5" />
              </svg>
            </span>
            <span className="v2-stat-num">
              <span className="count" data-to="24">
                24
              </span>
              <i>hr</i>
            </span>
            <span className="v2-stat-lbl">a human replies</span>
          </div>
        </div>
      </div>
    </section>
  );
}
