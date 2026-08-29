/* Design B - the two apps as an annotated product tour. Numbered pins sit on
   the screenshot and repeat in a legend, so the callouts stay readable at any
   width instead of floating labels that collide on mobile.

   Pin coordinates are eyeballed against the current screenshots - nudge the
   top/left percentages if the app UI moves. */

const BUSINESS = [
  { top: "17%", left: "72%", text: "Today at a glance" },
  { top: "44%", left: "24%", text: "Who walked in" },
  { top: "76%", left: "70%", text: "Send an offer" },
];

const CUSTOMER = [
  { top: "20%", left: "26%", text: "Shops near them" },
  { top: "50%", left: "74%", text: "Points balance" },
  { top: "79%", left: "30%", text: "Redeem a voucher" },
];

function Tour({ id, title, sub, shot, alt, pins, cta }) {
  return (
    <figure className="v2-tour-item reveal">
      <div className="v2-tour-phone">
        <img src={shot} alt={alt} />
        {pins.map((p, i) => (
          <span className="v2-pin" key={p.text} style={{ top: p.top, left: p.left, "--d": i * 0.12 + "s" }} aria-hidden="true">
            {i + 1}
          </span>
        ))}
      </div>
      <figcaption>
        <h3>{title}</h3>
        <p className="v2-tour-sub">{sub}</p>
        <ol className="v2-legend">
          {pins.map((p, i) => (
            <li key={p.text}>
              <span className="n">{i + 1}</span>
              {p.text}
            </li>
          ))}
        </ol>
        <a href="#waitlist" className="btn btn--primary btn--md">
          {cta}{" "}
          <span className="arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </figcaption>
    </figure>
  );
}

export default function VisualApps() {
  return (
    <section className="section section--paper v2-tour" id="apps">
      <div className="container">
        <div className="v2-head reveal">
          <div className="eyebrow">
            <span className="dot"></span> Two apps
          </div>
          <h2>
            One for you.
            <br />
            <em>One for them.</em>
          </h2>
        </div>

        <div className="v2-tour-grid">
          <Tour
            title="Your app"
            sub="Runs the counter."
            shot="/assets/fulcrum-business.png"
            alt="The Fulcrum business app dashboard"
            pins={BUSINESS}
            cta="Get the business app"
          />
          <Tour
            title="Their app"
            sub="Brings them back."
            shot="/assets/fulcrum-customer.png"
            alt="The Fulcrum customer app showing nearby shops and points"
            pins={CUSTOMER}
            cta="Get the customer app"
          />
        </div>
      </div>
    </section>
  );
}
