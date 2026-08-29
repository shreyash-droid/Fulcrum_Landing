/* Design B - the pictogram that needs no reading: out of ten customers,
   how many walk back in? Figures are drawn, not described. */

function People({ filled, tone }) {
  return (
    <div className="v2-people" role="img" aria-label={filled + " out of 10 customers come back"}>
      {Array.from({ length: 10 }, (_, i) => (
        <svg
          key={i}
          className={"v2-person" + (i < filled ? " is-on" : "")}
          style={{ "--d": i * 0.06 + "s", "--c": tone }}
          viewBox="0 0 24 30"
          width="26"
          height="33"
          aria-hidden="true"
        >
          <circle cx="12" cy="6.5" r="5.5" />
          <path d="M12 14c-6 0-9.5 4-9.5 9.5V29h19v-5.5C21.5 18 18 14 12 14z" />
        </svg>
      ))}
    </div>
  );
}

function Note({ ok, children }) {
  return (
    <li className={"v2-note" + (ok ? " is-ok" : "")}>
      <span className="v2-note-ico" aria-hidden="true">
        {ok ? (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 12.5l5 5 10-11" />
          </svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        )}
      </span>
      {children}
    </li>
  );
}

export default function VisualCompare() {
  return (
    <section className="section section--paper v2-compare" id="compare">
      <div className="container">
        <div className="v2-head reveal">
          <div className="eyebrow">
            <span className="dot"></span> The difference
          </div>
          <h2>
            Ten customers today.
            <br />
            <em>How many return?</em>
          </h2>
        </div>

        <div className="v2-compare-grid">
          <article className="v2-panel v2-panel--before reveal">
            <div className="v2-panel-top">
              <span className="v2-panel-ico">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l1.5-5h15L21 9" />
                  <path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9M3 9h18" />
                  <path d="M10.5 13.4a1.6 1.6 0 1 1 2.2 1.5c-.6.3-.9.7-.9 1.3M11.8 19h.01" />
                </svg>
              </span>
              <span className="v2-panel-name">Your counter today</span>
            </div>

            <People filled={2} tone="var(--ink-muted)" />

            <div className="v2-score">
              <b>2</b>
              <span>in 10</span>
            </div>
            <div className="v2-meter">
              <i style={{ "--w": "20%", background: "var(--ink-muted)" }}></i>
            </div>

            <ul className="v2-notes">
              <Note>No names</Note>
              <Note>No numbers</Note>
              <Note>Slow days stay slow</Note>
            </ul>
          </article>

          <div className="v2-vs" aria-hidden="true">
            <span>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>

          <article className="v2-panel v2-panel--after reveal" style={{ transitionDelay: ".08s" }}>
            <div className="v2-panel-top">
              <span className="v2-panel-ico">
                <img src="/assets/logo-mark.svg" alt="" width="28" height="29" />
              </span>
              <span className="v2-panel-name">Your counter on Fulcrum</span>
            </div>

            <People filled={5} tone="var(--lime)" />

            <div className="v2-score">
              <b>5</b>
              <span>in 10</span>
            </div>
            <div className="v2-meter">
              <i style={{ "--w": "50%", background: "var(--lime)" }}></i>
            </div>

            <ul className="v2-notes">
              <Note ok>Every name saved</Note>
              <Note ok>One tap to reach them</Note>
              <Note ok>Quiet days fill up</Note>
            </ul>
          </article>
        </div>

        <p className="v2-footnote">
          Illustrative, based on the 2.3&times; repeat-visit lift seen on loyalty programs.
        </p>
      </div>
    </section>
  );
}
