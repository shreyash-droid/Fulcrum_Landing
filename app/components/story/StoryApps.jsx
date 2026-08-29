/* Design C - the two apps as a facing pair with a dotted loop between them.
   The arc is the message: what you send comes back through the door. */

function StoreBadges({ what }) {
  return (
    <div className="store-badges">
      <a href="#" className="store-badge" aria-label={"Download the " + what + " app on the App Store"}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M16.4 12.9c0-2 1.6-2.9 1.7-3-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7s-1.6-.7-2.6-.7c-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.4 2 2.5 2 1 0 1.3-.6 2.5-.6s1.5.6 2.5.6 1.7-1 2.4-2c.7-1.1 1-2.1 1-2.2-.1 0-2.3-.9-2.3-3.4z" />
          <path d="M14.6 6.7c.5-.7.9-1.6.8-2.6-.8 0-1.8.5-2.4 1.2-.5.6-1 1.5-.8 2.5.9 0 1.8-.5 2.4-1.1z" />
        </svg>
        <span className="txt">
          <span className="small">Download on the</span>
          <span className="big">App Store</span>
        </span>
      </a>
      <a href="#" className="store-badge" aria-label={"Get the " + what + " app on Google Play"}>
        <svg width="20" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3.6 2.3c-.3.3-.5.7-.5 1.3v16.8c0 .6.2 1 .5 1.3l10-10.7-10-8.7z" fill="#7FA9C8" />
          <path d="M17.2 15.4l-3.6-3.4 3.7-3.4 3.1 1.8c1.1.6 1.1 1.6 0 2.3l-3.2 1.7z" fill="#C4E538" />
          <path d="M13.6 12l3.6 3.4-9.9 5.4c-.4.2-.8.2-1.2.1l7.5-8.9z" fill="#E85D3C" />
          <path d="M13.6 12L6.1 3.1c.4-.1.8-.1 1.2.1l9.9 5.4-3.6 3.4z" fill="#FBF8F1" />
        </svg>
        <span className="txt">
          <span className="small">Get it on</span>
          <span className="big">Google Play</span>
        </span>
      </a>
    </div>
  );
}

export default function StoryApps() {
  return (
    <section className="section section--paper v3-apps" id="apps">
      <div className="container">
        <div className="v3-head reveal">
          <div className="eyebrow">
            <span className="dot"></span> Two apps
          </div>
          <h2>
            Yours and theirs. <em>Same loop.</em>
          </h2>
        </div>

        <div className="v3-pair reveal">
          <figure className="v3-app v3-app--left">
            <div className="v3-app-phone">
              <img src="/assets/fulcrum-business.png" alt="The Fulcrum business app dashboard" />
            </div>
            <figcaption>
              <span className="v3-app-tag">Yours</span>
              <h3>Run the counter</h3>
              <p>Names, visits, offers.</p>
              <StoreBadges what="business" />
            </figcaption>
          </figure>

          <div className="v3-arc" aria-hidden="true">
            <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid meet">
              <path
                id="v3-arc-path"
                d="M22 34C132 34 178 96 178 130s-46 96-156 96"
                fill="none"
                stroke="var(--lime)"
                strokeWidth="3"
                strokeDasharray="1 12"
                strokeLinecap="round"
              />
              <circle r="6" fill="var(--coral)">
                <animateMotion dur="4.2s" repeatCount="indefinite" path="M22 34C132 34 178 96 178 130s-46 96-156 96" />
                <animate attributeName="opacity" dur="4.2s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.12;0.88;1" />
              </circle>
              <circle r="6" fill="var(--lime)">
                <animateMotion
                  dur="4.2s"
                  begin="2.1s"
                  repeatCount="indefinite"
                  path="M22 226C132 226 178 164 178 130s-46-96-156-96"
                />
                <animate attributeName="opacity" dur="4.2s" begin="2.1s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.12;0.88;1" />
              </circle>
              <g transform="translate(78 112)">
                <circle cx="22" cy="18" r="26" fill="var(--forest)" />
                <path
                  d="M12 18a10 10 0 1 1 3.4 7.5"
                  fill="none"
                  stroke="var(--lime)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path d="M12 12v6h6" fill="none" stroke="var(--lime)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>

          <figure className="v3-app v3-app--right">
            <div className="v3-app-phone">
              <img src="/assets/fulcrum-customer.png" alt="The Fulcrum customer app showing points and nearby shops" />
            </div>
            <figcaption>
              <span className="v3-app-tag v3-app-tag--alt">Theirs</span>
              <h3>Keep them coming</h3>
              <p>Points, vouchers, nearby shops.</p>
              <StoreBadges what="customer" />
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
