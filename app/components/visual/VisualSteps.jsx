/* Design B - three illustrated scenes carry the whole "how it works".
   Each caption is a verb and a handful of words; the picture does the rest. */
export default function VisualSteps() {
  return (
    <section className="section section--paper v2-steps" id="steps">
      <div className="container">
        <div className="v2-head reveal">
          <div className="eyebrow">
            <span className="dot"></span> How it works
          </div>
          <h2>
            Three things.
            <br />
            <em>That&rsquo;s all.</em>
          </h2>
        </div>

        <div className="v2-step-grid">
          {/* 01 - sign up */}
          <article className="v2-step-card reveal">
            <div className="v2-scene">
              <svg viewBox="0 0 320 210" aria-hidden="true">
                <rect x="0" y="0" width="320" height="210" rx="18" fill="var(--sage)" />
                <circle cx="248" cy="62" r="52" fill="var(--cream)" opacity=".75" />

                {/* phone */}
                <rect x="36" y="22" width="104" height="166" rx="18" fill="var(--forest)" />
                <rect x="43" y="29" width="90" height="152" rx="13" fill="var(--cream)" />
                <rect x="55" y="44" width="42" height="7" rx="3.5" fill="var(--forest)" opacity=".8" />
                <rect x="55" y="62" width="66" height="12" rx="6" fill="var(--divider)" />
                <rect x="55" y="84" width="66" height="12" rx="6" fill="var(--divider)" />
                <rect x="55" y="106" width="66" height="12" rx="6" fill="var(--divider)" />
                <rect x="55" y="134" width="66" height="24" rx="12" fill="var(--lime)" />
                <path d="M79 146l5 5 9-10" fill="none" stroke="var(--on-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                {/* tick badge */}
                <circle className="v2-pop" cx="160" cy="52" r="26" fill="var(--lime)" />
                <path d="M149 52l7.5 7.5L172 44" fill="none" stroke="var(--on-accent)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />

                {/* clock */}
                <circle cx="243" cy="120" r="40" fill="var(--cream)" stroke="var(--forest)" strokeWidth="3" />
                <path d="M243 96v24l16 10" fill="none" stroke="var(--coral)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="243" cy="120" r="4" fill="var(--forest)" />
                <rect x="205" y="168" width="76" height="26" rx="13" fill="var(--forest)" />
                <text x="243" y="186" textAnchor="middle" fill="var(--cream)" style={{ font: "700 14px var(--font-body)" }}>
                  15 min
                </text>
              </svg>
            </div>
            <div className="v2-step-meta">
              <span className="v2-step-num">01</span>
              <h3>Sign up</h3>
              <p>A few details. No hardware.</p>
            </div>
          </article>

          {/* 02 - scan */}
          <article className="v2-step-card reveal" style={{ transitionDelay: ".08s" }}>
            <div className="v2-scene">
              <svg viewBox="0 0 320 210" aria-hidden="true">
                <rect x="0" y="0" width="320" height="210" rx="18" fill="var(--sage)" />

                {/* counter QR card */}
                <rect x="176" y="42" width="118" height="126" rx="14" fill="var(--cream)" stroke="var(--forest)" strokeWidth="3" />
                <g fill="var(--forest)" transform="translate(196 62) scale(1.15)">
                  <path d="M0 0h16v16H0zM4 4v8h8V4z" />
                  <path d="M32 0h16v16H32zM36 4v8h8V4z" />
                  <path d="M0 32h16v16H0zM4 36v8h8v-8z" />
                  <rect x="22" y="0" width="5" height="5" /><rect x="22" y="10" width="5" height="5" />
                  <rect x="22" y="22" width="5" height="5" /><rect x="33" y="22" width="5" height="5" />
                  <rect x="43" y="22" width="5" height="5" /><rect x="22" y="33" width="5" height="5" />
                  <rect x="33" y="33" width="5" height="5" /><rect x="43" y="43" width="5" height="5" />
                  <rect x="33" y="43" width="5" height="5" />
                </g>

                {/* phone scanning */}
                <rect x="26" y="30" width="112" height="152" rx="18" fill="var(--forest)" />
                <rect x="34" y="38" width="96" height="136" rx="13" fill="var(--forest-hover)" />
                <g fill="none" stroke="var(--lime)" strokeWidth="3.5" strokeLinecap="round">
                  <path d="M52 68v-8a4 4 0 0 1 4-4h8" />
                  <path d="M112 56h-8" opacity="0" />
                  <path d="M100 56h8a4 4 0 0 1 4 4v8" />
                  <path d="M112 144v8a4 4 0 0 1-4 4h-8" />
                  <path d="M64 156h-8a4 4 0 0 1-4-4v-8" />
                </g>
                <rect className="v2-scanline" x="52" y="70" width="60" height="3.5" rx="1.75" fill="var(--lime)" />

                {/* points pill */}
                <g className="v2-float">
                  <rect x="118" y="8" width="86" height="34" rx="17" fill="var(--coral)" />
                  <text x="161" y="31" textAnchor="middle" fill="var(--cream)" style={{ font: "700 16px var(--font-body)" }}>
                    +50 pts
                  </text>
                </g>
              </svg>
            </div>
            <div className="v2-step-meta">
              <span className="v2-step-num">02</span>
              <h3>Scan</h3>
              <p>One scan at the counter.</p>
            </div>
          </article>

          {/* 03 - send */}
          <article className="v2-step-card reveal" style={{ transitionDelay: ".16s" }}>
            <div className="v2-scene">
              <svg viewBox="0 0 320 210" aria-hidden="true">
                <rect x="0" y="0" width="320" height="210" rx="18" fill="var(--sage)" />

                {/* megaphone */}
                <g transform="translate(20 60)">
                  <path d="M6 30h20l52-30v78L26 50H6a6 6 0 0 1-6-6V36a6 6 0 0 1 6-6z" fill="var(--forest)" />
                  <path d="M22 50v22a8 8 0 0 0 16 0V58z" fill="var(--forest)" />
                  <circle cx="86" cy="39" r="10" fill="var(--coral)" />
                </g>

                {/* message bubbles in flight */}
                <g className="v2-msg v2-msg--1">
                  <rect x="118" y="34" width="60" height="34" rx="12" fill="var(--lime)" />
                  <path d="M126 68l-4 10 12-10z" fill="var(--lime)" />
                  <rect x="128" y="45" width="34" height="5" rx="2.5" fill="var(--on-accent)" opacity=".6" />
                  <rect x="128" y="55" width="22" height="5" rx="2.5" fill="var(--on-accent)" opacity=".6" />
                </g>
                <g className="v2-msg v2-msg--2">
                  <rect x="140" y="92" width="60" height="34" rx="12" fill="var(--cream)" />
                  <path d="M148 126l-4 10 12-10z" fill="var(--cream)" />
                  <rect x="150" y="103" width="34" height="5" rx="2.5" fill="var(--ink-muted)" />
                  <rect x="150" y="113" width="22" height="5" rx="2.5" fill="var(--ink-muted)" />
                </g>
                <g className="v2-msg v2-msg--3">
                  <rect x="118" y="150" width="60" height="34" rx="12" fill="var(--sky)" />
                  <path d="M126 184l-4 10 12-10z" fill="var(--sky)" />
                  <rect x="128" y="161" width="34" height="5" rx="2.5" fill="var(--cream)" />
                  <rect x="128" y="171" width="22" height="5" rx="2.5" fill="var(--cream)" />
                </g>

                {/* the people who get it */}
                <g fill="var(--forest)">
                  <g transform="translate(238 26)">
                    <circle cx="18" cy="12" r="11" /><path d="M18 27c-11 0-17 7-17 17v6h34v-6c0-10-6-17-17-17z" />
                  </g>
                  <g transform="translate(238 88)">
                    <circle cx="18" cy="12" r="11" /><path d="M18 27c-11 0-17 7-17 17v6h34v-6c0-10-6-17-17-17z" />
                  </g>
                  <g transform="translate(238 150)">
                    <circle cx="18" cy="12" r="11" /><path d="M18 27c-11 0-17 7-17 17v6h34v-6c0-10-6-17-17-17z" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="v2-step-meta">
              <span className="v2-step-num">03</span>
              <h3>Send</h3>
              <p>Pick a group. Tap send.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
