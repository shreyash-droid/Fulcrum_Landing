/* Design B - the feature list as a pictogram board. Icon + two words per tile,
   then a strip of shop types so an owner can point at themselves. */

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };

const TOOLS = [
  {
    label: "Customer list",
    c: "var(--lime)",
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
    label: "Points & rewards",
    c: "var(--coral)",
    icon: (
      <>
        <path d="M12 3.6l2.6 5.3 5.9.85-4.25 4.15 1 5.85L12 16.95 6.75 19.7l1-5.85L3.5 9.75l5.9-.85z" />
      </>
    ),
  },
  {
    label: "WhatsApp offers",
    c: "var(--sky)",
    icon: (
      <>
        <path d="M3.5 12a8.5 8.5 0 1 1 3.6 6.95L3 20l1.15-3.9A8.4 8.4 0 0 1 3.5 12z" />
        <path d="M8.8 9.2c.3 2.4 3.6 5.7 6 6l1-1.6 2 1-.9 1.6c-2.9.8-7.7-4-6.9-6.9l1.6-.9z" />
      </>
    ),
  },
  {
    label: "Referrals",
    c: "var(--lime)",
    icon: (
      <>
        <circle cx="6" cy="12" r="2.6" />
        <circle cx="18" cy="6" r="2.6" />
        <circle cx="18" cy="18" r="2.6" />
        <path d="M8.3 10.8l7.4-3.6M8.3 13.2l7.4 3.6" />
      </>
    ),
  },
  {
    label: "Simple reports",
    c: "var(--coral)",
    icon: (
      <>
        <path d="M4 19V13M9.3 19V7M14.7 19v-8M20 19V9" />
        <path d="M2.5 21.2h19" />
      </>
    ),
  },
  {
    label: "Found nearby",
    c: "var(--sky)",
    icon: (
      <>
        <path d="M12 21.5s7-6.6 7-11.4a7 7 0 1 0-14 0c0 4.8 7 11.4 7 11.4z" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
  },
  {
    label: "Gift vouchers",
    c: "var(--lime)",
    icon: (
      <>
        <rect x="3" y="9" width="18" height="11.5" rx="2" />
        <path d="M3 13h18M12 9v11.5" />
        <path d="M12 9S10.5 3.5 7.5 5c-2 1 .5 4 4.5 4zM12 9s1.5-5.5 4.5-4c2 1-.5 4-4.5 4z" />
      </>
    ),
  },
  {
    label: "Real support",
    c: "var(--coral)",
    icon: (
      <>
        <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
        <rect x="2.8" y="12.8" width="4.4" height="6.8" rx="1.8" />
        <rect x="16.8" y="12.8" width="4.4" height="6.8" rx="1.8" />
        <path d="M20 19.8a4 4 0 0 1-4 3h-2.5" />
      </>
    ),
  },
];

const SHOPS = [
  {
    label: "Café",
    icon: (
      <>
        <path d="M5 8h11v5.5a5.5 5.5 0 0 1-11 0z" />
        <path d="M16 9h2.5a2 2 0 0 1 0 4H16" />
        <path d="M7.5 3v2M10.5 3v2M13.5 3v2M4 21h13" />
      </>
    ),
  },
  {
    label: "Salon",
    icon: (
      <>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <path d="M8 7.5L20 17M8 16.5L20 7" />
      </>
    ),
  },
  {
    label: "Bakery",
    icon: (
      <>
        <path d="M3.5 14a4.5 4.5 0 0 1 4.5-4.5h8a4.5 4.5 0 0 1 0 9H8A4.5 4.5 0 0 1 3.5 14z" />
        <path d="M9 10v8M13 10v8" />
      </>
    ),
  },
  {
    label: "Boutique",
    icon: (
      <>
        <path d="M9 3l3 2.4L15 3l5 3-2.5 4L16 9.2V21H8V9.2L6.5 10 4 6z" />
      </>
    ),
  },
  {
    label: "Pharmacy",
    icon: (
      <>
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="4.5" />
        <path d="M12 8v8M8 12h8" />
      </>
    ),
  },
  {
    label: "Gym",
    icon: (
      <>
        <path d="M3 9v6M6.5 6.5v11M17.5 6.5v11M21 9v6M6.5 12h11" />
      </>
    ),
  },
  {
    label: "Pet store",
    icon: (
      <>
        <ellipse cx="12" cy="16" rx="4.5" ry="3.8" />
        <ellipse cx="5.6" cy="10.5" rx="2.1" ry="2.6" />
        <ellipse cx="18.4" cy="10.5" rx="2.1" ry="2.6" />
        <ellipse cx="9.4" cy="6.6" rx="2" ry="2.5" />
        <ellipse cx="14.6" cy="6.6" rx="2" ry="2.5" />
      </>
    ),
  },
  {
    label: "Grocer",
    icon: (
      <>
        <path d="M2.5 5h2.6l2.5 10.4h9.9" />
        <path d="M6.6 8h14l-1.6 6.2H8" />
        <circle cx="9.5" cy="19.4" r="1.5" />
        <circle cx="17.5" cy="19.4" r="1.5" />
      </>
    ),
  },
];

export default function VisualToolkit() {
  return (
    <section className="section section--paper v2-toolkit" id="toolkit">
      <div className="container">
        <div className="v2-head reveal">
          <div className="eyebrow">
            <span className="dot"></span> What you get
          </div>
          <h2>
            Eight things.
            <br />
            <em>All in one app.</em>
          </h2>
        </div>

        <ul className="v2-tool-grid">
          {TOOLS.map((t, i) => (
            <li className="v2-tool reveal" key={t.label} style={{ transitionDelay: i * 0.04 + "s", "--c": t.c }}>
              <span className="v2-tool-ico">
                <svg width="30" height="30" viewBox="0 0 24 24" {...S}>
                  {t.icon}
                </svg>
              </span>
              <span className="v2-tool-lbl">{t.label}</span>
            </li>
          ))}
        </ul>

        <div className="v2-shops reveal">
          <span className="v2-shops-lbl">Any counter</span>
          <ul className="v2-shop-row">
            {SHOPS.map((s) => (
              <li key={s.label}>
                <svg width="28" height="28" viewBox="0 0 24 24" {...S}>
                  {s.icon}
                </svg>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
