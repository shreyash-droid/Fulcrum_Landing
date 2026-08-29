/* Design C - what actually changes, as three before/after cards. The values
   are short enough to scan in a second; the label underneath is the only
   sentence-shaped thing on the card. */

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };

const GAINS = [
  {
    label: "Customers you can name",
    before: "0",
    after: "All",
    icon: (
      <>
        <circle cx="9" cy="8" r="3.4" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
        <circle cx="17.5" cy="9" r="2.6" />
        <path d="M17.5 14.2a5 5 0 0 1 4 5.8" />
      </>
    ),
  },
  {
    label: "Visits from the same face",
    before: "1×",
    after: "2.3×",
    icon: (
      <>
        <path d="M3 12a9 9 0 1 0 3-6.7" />
        <path d="M3 3.5V8h4.5" />
        <path d="M12 8.5v4l2.8 1.7" />
      </>
    ),
  },
  {
    label: "Getting a message to them",
    before: "Never",
    after: "1 tap",
    icon: (
      <>
        <path d="M3.5 12a8.5 8.5 0 1 1 3.6 6.95L3 20l1.15-3.9A8.4 8.4 0 0 1 3.5 12z" />
        <path d="M8.8 9.2c.3 2.4 3.6 5.7 6 6l1-1.6 2 1-.9 1.6c-2.9.8-7.7-4-6.9-6.9l1.6-.9z" />
      </>
    ),
  },
];

const TRUST = [
  {
    label: "Encrypted end to end",
    icon: (
      <>
        <path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z" />
        <path d="M9 11.8l2 2 4-4" />
      </>
    ),
  },
  {
    label: "ISO 27001 servers",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="6" rx="2" />
        <rect x="3" y="14" width="18" height="6" rx="2" />
        <path d="M7 7h.01M7 17h.01" />
      </>
    ),
  },
  {
    label: "A human replies",
    icon: (
      <>
        <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
        <rect x="2.8" y="12.8" width="4.4" height="6.8" rx="1.8" />
        <rect x="16.8" y="12.8" width="4.4" height="6.8" rx="1.8" />
        <path d="M20 19.8a4 4 0 0 1-4 3h-2.5" />
      </>
    ),
  },
  {
    label: "Made in India",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.6 2.7 2.6 15.3 0 18-2.6-2.7-2.6-15.3 0-18z" />
      </>
    ),
  },
];

export default function StoryGains() {
  return (
    <section className="section section--paper v3-gains" id="change">
      <div className="container">
        <div className="v3-head reveal">
          <div className="eyebrow">
            <span className="dot"></span> What changes
          </div>
          <h2>
            Same shop. <em>Different Tuesday.</em>
          </h2>
        </div>

        <ul className="v3-gain-grid">
          {GAINS.map((g, i) => (
            <li className="v3-gain reveal" key={g.label} style={{ transitionDelay: i * 0.08 + "s" }}>
              <span className="v3-gain-ico">
                <svg width="28" height="28" viewBox="0 0 24 24" {...S}>
                  {g.icon}
                </svg>
              </span>
              <div className="v3-gain-vals">
                <span className="v3-gain-before">{g.before}</span>
                <span className="v3-gain-arrow" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h15M13 6l6 6-6 6" />
                  </svg>
                </span>
                <span className="v3-gain-after">{g.after}</span>
              </div>
              <p className="v3-gain-lbl">{g.label}</p>
            </li>
          ))}
        </ul>

        <ul className="v3-trust reveal">
          {TRUST.map((t) => (
            <li key={t.label}>
              <svg width="24" height="24" viewBox="0 0 24 24" {...S}>
                {t.icon}
              </svg>
              <span>{t.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
