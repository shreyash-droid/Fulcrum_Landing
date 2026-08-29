/* Design C - one Tuesday on a rail. Clock times do the heavy lifting: numbers
   read the same in any language, so each stop only needs two or three words. */

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };

const STOPS = [
  {
    time: "9:00",
    label: "You open up",
    c: "var(--sky)",
    icon: (
      <>
        <path d="M3 9l1.5-5h15L21 9" />
        <path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9M3 9h18M9 20v-6h6v6" />
      </>
    ),
  },
  {
    time: "11:20",
    label: "First scan",
    c: "var(--lime)",
    icon: (
      <>
        <path d="M3 8V5.5A1.5 1.5 0 0 1 4.5 4H7M17 4h2.5A1.5 1.5 0 0 1 21 5.5V8M21 16v2.5a1.5 1.5 0 0 1-1.5 1.5H17M7 20H4.5A1.5 1.5 0 0 1 3 18.5V16" />
        <rect x="7.5" y="7.5" width="4" height="4" rx=".6" />
        <rect x="12.5" y="12.5" width="4" height="4" rx=".6" />
        <path d="M12.5 7.5h4v2M7.5 16.5h2.5" />
      </>
    ),
  },
  {
    time: "16:00",
    label: "Quiet. You tap send",
    c: "var(--coral)",
    icon: (
      <>
        <path d="M3.5 9.5h3.2L14 5v14l-7.3-4.5H3.5z" />
        <path d="M6.7 9.5v5M17.5 9a4 4 0 0 1 0 6" />
      </>
    ),
  },
  {
    time: "18:40",
    label: "Four walk back in",
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
];

export default function StoryDay() {
  return (
    <section className="section section--forest v3-day" id="day">
      <div className="container">
        <div className="v3-head v3-head--dark reveal">
          <div className="eyebrow eyebrow--onDark">
            <span className="dot"></span> One Tuesday
          </div>
          <h2>
            Four moments. <em>That&rsquo;s the whole day.</em>
          </h2>
        </div>

        <ol className="v3-rail reveal">
          {STOPS.map((s, i) => (
            <li className="v3-stop" key={s.time} style={{ "--c": s.c, "--d": i * 0.18 + "s" }}>
              <span className="v3-stop-time">{s.time}</span>
              <span className="v3-stop-dot" aria-hidden="true"></span>
              <span className="v3-stop-ico">
                <svg width="28" height="28" viewBox="0 0 24 24" {...S}>
                  {s.icon}
                </svg>
              </span>
              <span className="v3-stop-lbl">{s.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
