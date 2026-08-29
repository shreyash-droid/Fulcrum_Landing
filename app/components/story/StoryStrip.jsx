import { Person, Counter, Bubble, Phone, Qr, Spark } from "./Figures";

/* Design C - the centrepiece. Six panels, six pictures, six captions of four
   words or fewer. Read left to right and the product explains itself without
   a single paragraph. */

/* The caption underneath is the accessible name for each panel, so the drawing
   itself stays out of the accessibility tree rather than repeating it. */
function Panel({ n, cap, bg, children }) {
  return (
    <li className="v3-panel reveal" style={{ transitionDelay: (n - 1) * 0.07 + "s" }}>
      <div className="v3-stage" style={{ "--bg": bg }}>
        <span className="v3-panel-num">{n}</span>
        <svg viewBox="0 0 280 220" aria-hidden="true">
          <rect x="0" y="0" width="280" height="220" fill="var(--bg)" />
          {children}
          <rect x="0" y="196" width="280" height="24" fill="rgba(27,58,46,.12)" />
        </svg>
      </div>
      <p className="v3-cap">{cap}</p>
    </li>
  );
}

export default function StoryStrip() {
  return (
    <section className="section section--paper v3-strip" id="story">
      <div className="container">
        <div className="v3-head reveal">
          <div className="eyebrow">
            <span className="dot"></span> Six pictures
          </div>
          <h2>
            How a stranger <em>becomes a regular.</em>
          </h2>
        </div>

        <ol className="v3-panels">
          {/* 1 - she walks in */}
          <Panel n={1} cap="She walks in." bg="var(--sage)">
            <rect x="228" y="56" width="46" height="140" rx="4" fill="rgba(27,58,46,.16)" />
            <rect x="236" y="66" width="30" height="120" rx="3" fill="var(--sky)" opacity=".45" />
            <g opacity=".35" stroke="var(--forest)" strokeWidth="3" strokeLinecap="round">
              <path d="M214 120h-14M218 136h-20M214 152h-12" />
            </g>
            <Person x={182} y={196} flip accent="var(--coral)" />
            <Person x={64} y={196} />
            <Counter x={14} y={140} w={124} />
          </Panel>

          {/* 2 - who was that */}
          <Panel n={2} cap="Who was that?" bg="var(--cream)">
            <Person x={244} y={196} s={0.88} tone="rgba(27,58,46,.2)" />
            <Person x={78} y={196} />
            <Counter x={26} y={140} w={128} />
            <circle cx="118" cy="112" r="6" fill="var(--sage)" />
            <circle cx="132" cy="98" r="9" fill="var(--sage)" />
            <Bubble x={122} y={22} w={126} h={68} tone="var(--sage)" tail="none" />
            <text
              x="185"
              y="72"
              textAnchor="middle"
              fill="var(--forest)"
              style={{ font: "700 46px var(--font-display)" }}
            >
              ?
            </text>
          </Panel>

          {/* 3 - one scan */}
          <Panel n={3} cap="One scan." bg="var(--sage)">
            <rect x="8" y="150" width="264" height="46" rx="4" fill="var(--forest)" />
            <rect x="2" y="142" width="276" height="12" rx="6" fill="var(--lime)" />

            <path d="M126 96l50-14v76l-50-14z" fill="var(--lime)" opacity=".3" />

            <rect x="168" y="70" width="94" height="94" rx="12" fill="var(--cream)" />
            <Qr x={190} y={92} s={1.06} />

            <g transform="rotate(-9 92 110)">
              <Phone x={50} y={44} w={84} h={140} screen="var(--forest-hover)">
                <g fill="none" stroke="var(--lime)" strokeWidth="4" strokeLinecap="round">
                  <path d="M20 48V36a4 4 0 0 1 4-4h12" />
                  <path d="M48 32h12a4 4 0 0 1 4 4v12" />
                  <path d="M64 92v12a4 4 0 0 1-4 4H48" />
                  <path d="M36 108H24a4 4 0 0 1-4-4V92" />
                </g>
                <rect className="v3-scan" x="20" y="46" width="44" height="4" rx="2" fill="var(--lime)" />
              </Phone>
            </g>

            <Spark x={148} y={54} s={1.1} className="v3-spark" />
          </Panel>

          {/* 4 - points land */}
          <Panel n={4} cap="+50 points." bg="var(--cream)">
            <circle cx="180" cy="106" r="78" fill="var(--sage)" />
            <Person x={72} y={196} s={1.05} accent="var(--coral)" />

            <Phone x={140} y={40} w={92} h={152}>
              <rect x="16" y="20" width="46" height="7" rx="3.5" fill="var(--divider)" />
              <rect x="16" y="40" width="60" height="44" rx="12" fill="var(--lime)" />
              <text x="46" y="70" textAnchor="middle" fill="var(--on-accent)" style={{ font: "700 24px var(--font-body)" }}>
                +50
              </text>
              <rect x="16" y="96" width="60" height="8" rx="4" fill="var(--divider)" />
              <rect x="16" y="112" width="40" height="8" rx="4" fill="var(--divider)" />
              <rect x="16" y="128" width="52" height="8" rx="4" fill="var(--divider)" />
            </Phone>

            <Spark x={126} y={40} s={1.2} className="v3-spark" />
            <Spark x={246} y={72} s={0.85} className="v3-spark v3-spark--b" />
            <Spark x={238} y={158} s={0.7} className="v3-spark v3-spark--c" />
          </Panel>

          {/* 5 - quiet day, tap send */}
          <Panel n={5} cap="Quiet day. Tap send." bg="var(--sage)">
            <circle cx="232" cy="58" r="30" fill="var(--cream)" />
            <path d="M232 38v20l13 8" fill="none" stroke="var(--coral)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="232" cy="58" r="3.5" fill="var(--forest)" />

            <Person x={72} y={196} />
            <Counter x={18} y={142} w={132} />

            <Bubble x={112} y={26} w={116} h={62} tone="var(--forest)" tail="left">
              <g transform="translate(24 16)" fill="var(--lime)">
                <path d="M2 12h8l20-11v30L10 20H2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z" />
                <path d="M9 20v9a3 3 0 0 0 6 0v-6z" />
              </g>
              <path d="M74 31h20M88 24l7 7-7 7" fill="none" stroke="var(--lime)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </Bubble>
          </Panel>

          {/* 6 - she's back */}
          <Panel n={6} cap={"She’s back."} bg="var(--cream)">
            <circle className="v3-burst" cx="150" cy="112" r="76" fill="var(--lime)" opacity=".45" />
            <Person x={186} y={196} flip accent="var(--coral)" />
            <Person x={70} y={196} />
            <Counter x={12} y={140} w={124} />
            <Spark x={222} y={54} s={1.15} className="v3-spark" />
            <Spark x={110} y={44} s={0.8} className="v3-spark v3-spark--b" />
            <Spark x={256} y={116} s={0.65} className="v3-spark v3-spark--c" />
          </Panel>
        </ol>
      </div>
    </section>
  );
}
