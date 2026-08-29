import { Person, Counter, Phone, Qr, Spark } from "./Figures";

/* Design C hero - the counter moment, drawn as an oversized opening panel in
   the same flat vocabulary the strip below uses. Three lines of copy total. */
export default function StoryHero() {
  return (
    <section className="v3-hero">
      <div className="container">
        <div className="v3-hero-grid">
          <div className="v3-hero-copy hero-enter">
            <div className="tagline">
              <span className="dot"></span> A day at your counter
            </div>
            <h1>
              Meet your <em>regulars.</em>
            </h1>
            <p className="lead">Fulcrum remembers every customer, so you don&rsquo;t have to.</p>

            <div className="v3-hero-cta">
              <a href="#waitlist" className="btn btn--primary btn--lg">
                Join the waitlist{" "}
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <a href="#story" className="btn btn--ghost v3-ghost">
                See the story <span aria-hidden="true">↓</span>
              </a>
            </div>

            <ul className="v3-reassure">
              <li>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 12.5l5 5 10-11" />
                </svg>
                15 minutes to start
              </li>
              <li>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 12.5l5 5 10-11" />
                </svg>
                Nothing to buy
              </li>
              <li>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 12.5l5 5 10-11" />
                </svg>
                Works on your phone
              </li>
            </ul>
          </div>

          <div className="v3-hero-art hero-enter">
            <svg
              viewBox="0 0 520 400"
              role="img"
              aria-label="Illustration: a shopkeeper behind the counter scans a customer's phone and points are added"
            >
              <rect x="0" y="0" width="520" height="400" rx="34" fill="var(--sage)" />

              {/* back wall: window + shelf of jars */}
              <rect x="316" y="52" width="152" height="116" rx="9" fill="var(--sky)" opacity=".45" />
              <path d="M392 52v116M316 110h152" stroke="var(--forest)" strokeWidth="3" opacity=".25" />

              <rect x="52" y="118" width="196" height="10" rx="5" fill="rgba(27,58,46,.22)" />
              <rect x="66" y="74" width="34" height="44" rx="8" fill="var(--coral)" opacity=".8" />
              <rect x="112" y="62" width="30" height="56" rx="8" fill="var(--forest)" opacity=".7" />
              <rect x="154" y="82" width="38" height="36" rx="8" fill="var(--lime)" />
              <rect x="204" y="70" width="28" height="48" rx="8" fill="var(--forest)" opacity=".45" />

              {/* the two people */}
              <Person x={148} y={356} s={1.3} />
              <Person x={392} y={356} s={1.3} flip accent="var(--coral)" />

              {/* counter */}
              <Counter x={38} y={252} w={444} h={108} />

              {/* QR card standing on the counter */}
              <rect x="298" y="176" width="86" height="86" rx="11" fill="var(--cream)" />
              <Qr x={317} y={195} s={0.98} />

              {/* the shopkeeper's phone, mid-scan */}
              <g className="v3-hero-phone">
                <Phone x={196} y={128} w={82} h={140} screen="var(--forest-hover)">
                  <g fill="none" stroke="var(--lime)" strokeWidth="4" strokeLinecap="round">
                    <path d="M20 50V38a4 4 0 0 1 4-4h12" />
                    <path d="M46 34h12a4 4 0 0 1 4 4v12" />
                    <path d="M62 94v12a4 4 0 0 1-4 4H46" />
                    <path d="M36 110H24a4 4 0 0 1-4-4V94" />
                  </g>
                  <rect className="v3-scan" x="20" y="48" width="42" height="4" rx="2" fill="var(--lime)" />
                </Phone>
              </g>

              {/* points chip flying out */}
              <g className="v3-hero-chip">
                <rect x="252" y="70" width="106" height="42" rx="21" fill="var(--lime)" />
                <text x="305" y="98" textAnchor="middle" fill="var(--on-accent)" style={{ font: "700 20px var(--font-body)" }}>
                  +50 pts
                </text>
              </g>

              <Spark x={268} y={140} s={1.2} className="v3-spark" />
              <Spark x={438} y={102} s={0.9} className="v3-spark v3-spark--b" />
              <Spark x={96} y={186} s={0.75} className="v3-spark v3-spark--c" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
