/* Design B hero - the message carries in the picture first, the words second.
   Copy is capped at a short headline, one line of support, and 3-word chips. */
export default function VisualHero() {
  return (
    <section className="v2-hero">
      <div className="container">
        <div className="v2-hero-grid">
          <div className="v2-hero-copy hero-enter">
            <div className="tagline">
              <span className="dot"></span> For local shops
            </div>
            <h1>
              Turn walk-ins into <em>regulars.</em>
            </h1>
            <p className="lead">One QR code at your counter. That&rsquo;s the whole setup.</p>

            <div className="v2-hero-cta">
              <a href="#waitlist" className="btn btn--primary btn--lg">
                Join the waitlist{" "}
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <a href="#loop" className="btn btn--ghost">
                See it work <span aria-hidden="true">↓</span>
              </a>
            </div>

            <ul className="v2-chips">
              <li className="v2-chip">
                <span className="v2-chip-ico" style={{ background: "var(--lime)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3.2 2" />
                  </svg>
                </span>
                <span className="v2-chip-txt">
                  <b>15 min</b>
                  <span>to set up</span>
                </span>
              </li>
              <li className="v2-chip">
                <span className="v2-chip-ico" style={{ background: "var(--coral)", color: "var(--cream)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" />
                    <path d="M2.5 10h19M6 14.5h4" />
                    <path d="M4 3.5l16 17" />
                  </svg>
                </span>
                <span className="v2-chip-txt">
                  <b>₹0</b>
                  <span>hardware</span>
                </span>
              </li>
              <li className="v2-chip">
                <span className="v2-chip-ico" style={{ background: "var(--sky)", color: "var(--cream)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19V13M10 19V8M16 19v-9" />
                    <path d="M3 21h18" />
                  </svg>
                </span>
                <span className="v2-chip-txt">
                  <b>2.3&times;</b>
                  <span>repeat visits</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="v2-hero-art hero-enter">
            <svg
              viewBox="0 0 460 440"
              className="v2-shop"
              role="img"
              aria-label="Illustration: a customer walks into a neighbourhood shop and points land on their phone"
            >
              {/* backdrop - cream, since the hero section itself is now sage
                  and the illustration needs to read as a distinct card */}
              <circle cx="240" cy="205" r="185" fill="var(--cream)" />
              <circle cx="240" cy="205" r="185" fill="none" stroke="var(--divider)" strokeWidth="1.5" strokeDasharray="2 10" />

              {/* ground */}
              <path d="M40 382h380" stroke="var(--forest)" strokeWidth="2.5" strokeLinecap="round" opacity=".85" />

              {/* signboard */}
              <rect x="150" y="98" width="160" height="40" rx="12" fill="var(--forest)" />
              <circle cx="196" cy="118" r="9" fill="var(--lime)" />
              <circle cx="222" cy="118" r="4" fill="var(--coral)" />
              <rect x="238" y="113" width="42" height="9" rx="4.5" fill="var(--cream)" opacity=".55" />

              {/* wall */}
              <rect x="100" y="180" width="260" height="202" rx="4" fill="var(--cream)" stroke="var(--forest)" strokeWidth="2.5" />

              {/* awning */}
              <path d="M86 146h288v30H86z" fill="var(--forest)" />
              <g>
                <rect x="86" y="146" width="41" height="30" fill="var(--lime)" />
                <rect x="168" y="146" width="41" height="30" fill="var(--lime)" />
                <rect x="250" y="146" width="41" height="30" fill="var(--lime)" />
                <rect x="332" y="146" width="42" height="30" fill="var(--lime)" />
              </g>
              <path
                d="M86 176q10.25 14 20.5 0 10.25 14 20.5 0 10.25 14 20.5 0 10.25 14 20.5 0 10.25 14 20.5 0 10.25 14 20.5 0 10.25 14 20.5 0 10.25 14 20.5 0 10.25 14 20.5 0 10.25 14 20.5 0 10.25 14 20.5 0 10.25 14 20.5 0 10.25 14 20.5 0 10.25 14 20.5 0"
                fill="var(--forest)"
              />
              <rect x="86" y="143" width="288" height="6" rx="3" fill="var(--forest)" />

              {/* window */}
              <rect x="120" y="212" width="106" height="92" rx="7" fill="var(--sky)" opacity=".38" />
              <rect x="120" y="212" width="106" height="92" rx="7" fill="none" stroke="var(--forest)" strokeWidth="2.5" />
              <path d="M173 212v92M120 258h106" stroke="var(--forest)" strokeWidth="2" opacity=".55" />

              {/* door */}
              <rect x="256" y="228" width="82" height="154" rx="5" fill="var(--sage)" stroke="var(--forest)" strokeWidth="2.5" />
              <rect x="270" y="244" width="54" height="46" rx="4" fill="var(--cream)" opacity=".7" />
              <circle cx="268" cy="312" r="4" fill="var(--forest)" />

              {/* planter */}
              <path d="M116 350h44l-5 32h-34z" fill="var(--coral)" />
              <path d="M138 350c0-16-8-22-18-24 2 12 8 20 18 24zM138 350c0-14 7-21 17-23-2 11-7 19-17 23z" fill="var(--forest)" opacity=".8" />

              {/* customer walking in */}
              <g className="v2-shop-figure">
                <circle cx="297" cy="286" r="15" fill="var(--forest)" />
                <path d="M297 303c-15 0-24 11-24 25v54h48v-54c0-14-9-25-24-25z" fill="var(--forest)" />
                <path d="M283 335l-16 16" stroke="var(--forest)" strokeWidth="8" strokeLinecap="round" />
                <circle cx="290" cy="282" r="4" fill="var(--lime)" />
              </g>

              {/* phone with QR + points */}
              <g className="v2-shop-phone">
                <rect x="336" y="196" width="96" height="164" rx="18" fill="var(--forest)" />
                <rect x="343" y="203" width="82" height="150" rx="13" fill="var(--cream)" />
                <g fill="var(--forest)" transform="translate(357 216) scale(0.72)">
                  <path d="M0 0h20v20H0zM5 5v10h10V5z" />
                  <path d="M40 0h20v20H40zM45 5v10h10V5z" />
                  <path d="M0 40h20v20H0zM5 45v10h10V45z" />
                  <rect x="28" y="0" width="6" height="6" /><rect x="28" y="12" width="6" height="6" />
                  <rect x="28" y="28" width="6" height="6" /><rect x="42" y="28" width="6" height="6" />
                  <rect x="54" y="28" width="6" height="6" /><rect x="28" y="42" width="6" height="6" />
                  <rect x="42" y="42" width="6" height="6" /><rect x="54" y="54" width="6" height="6" />
                  <rect x="42" y="54" width="6" height="6" />
                </g>
                <rect x="354" y="278" width="60" height="26" rx="13" fill="var(--lime)" />
                <text
                  x="384"
                  y="296"
                  textAnchor="middle"
                  fill="var(--on-accent)"
                  style={{ font: "700 15px var(--font-body)" }}
                >
                  +50
                </text>
                <rect x="354" y="316" width="60" height="7" rx="3.5" fill="var(--divider)" />
                <rect x="354" y="330" width="40" height="7" rx="3.5" fill="var(--divider)" />
              </g>

              {/* Points floating from counter to phone. Each spark is wrapped in a
                  <g> so CSS can own the transform - putting it on the <path> would
                  clobber the transform attribute that places the shape. */}
              <g fill="var(--coral)" aria-hidden="true">
                <g className="v2-spark v2-spark--1">
                  <path transform="translate(232 250) scale(0.9)" d="M12 1.5c.6 4.8 3.7 7.9 8.5 8.5-4.8.6-7.9 3.7-8.5 8.5-.6-4.8-3.7-7.9-8.5-8.5C8.3 9.4 11.4 6.3 12 1.5z" />
                </g>
                <g className="v2-spark v2-spark--2">
                  <path transform="translate(300 200) scale(0.7)" d="M12 1.5c.6 4.8 3.7 7.9 8.5 8.5-4.8.6-7.9 3.7-8.5 8.5-.6-4.8-3.7-7.9-8.5-8.5C8.3 9.4 11.4 6.3 12 1.5z" />
                </g>
                <g className="v2-spark v2-spark--3">
                  <path transform="translate(190 170) scale(0.55)" d="M12 1.5c.6 4.8 3.7 7.9 8.5 8.5-4.8.6-7.9 3.7-8.5 8.5-.6-4.8-3.7-7.9-8.5-8.5C8.3 9.4 11.4 6.3 12 1.5z" />
                </g>
              </g>
            </svg>
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
