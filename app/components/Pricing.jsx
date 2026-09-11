export default function Pricing() {
  return (
    <section className="section section--paper" id="pricing">
      <div className="container">
        <div className="pricing-head reveal">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <span className="dot"></span> Pricing
          </div>
          <h2>
            One toolkit. <em>Your billing rhythm.</em>
          </h2>
          <p className="lead">
            Every plan includes the full Fulcrum toolkit &mdash; the longer you commit, the less you pay. Right now, the inaugural offer takes up to a third off.
          </p>
          <div className="offer-ribbon" role="note">
            <span className="offer-ribbon__spark" aria-hidden="true">&#10022;</span>
            <span className="offer-ribbon__text">
              <strong>Inaugural offer</strong> &middot; 11%&ndash;33% off &middot; limited period
            </span>
          </div>
        </div>

        <div className="plans plans--two">
          {/* Half-yearly - Value offer */}
          <div className="plan reveal">
            <span className="p-offer">Value offer &middot; 11% off</span>
            <div className="p-name">Half-yearly</div>
            <div className="p-orig">
              <span className="p-strike">&#8377;4,500</span>
            </div>
            <div className="p-price">
              <span className="amt">&#8377;4,000</span>
              <span className="per">/ 6 months</span>
            </div>
            <div className="p-gst">+ 18% GST</div>
            <div className="p-day">&asymp; &#8377;22 a day</div>
            <div className="p-note">One-time option only &middot; renews on the yearly plan thereafter, at the applicable billing rate.</div>
            <div className="p-spacer"></div>
            <a href="/#waitlist" className="btn btn--ghost btn--lg">
              Choose Half-yearly{" "}
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          {/* Yearly - Mega offer, featured / discount hero */}
          <div className="plan plan--featured reveal" style={{ transitionDelay: ".06s" }}>
            <span className="p-offer p-offer--mega">Mega offer &middot; 33% off</span>
            <div className="p-name">Yearly</div>
            <div className="p-orig">
              <span className="p-strike">&#8377;9,000</span>
            </div>
            <div className="p-price">
              <span className="amt">&#8377;6,000</span>
              <span className="per">/ year</span>
            </div>
            <div className="p-gst">+ 18% GST</div>
            <div className="p-day">&asymp; &#8377;16 a day</div>
            <div className="p-note">A full year of the toolkit at the inaugural rate &mdash; lock it in before the offer disappears.</div>
            <div className="p-spacer"></div>
            <a href="/#waitlist" className="btn btn--primary btn--lg">
              Claim 33% off now{" "}
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>

        <div className="plan-includes reveal">
          <div className="lbl">Plan includes</div>
          <ul>
            <li>
              <span className="check">&#10003;</span> QR check-in
            </li>
            <li>
              <span className="check">&#10003;</span> Unlimited customer profiles
            </li>
            <li>
              <span className="check">&#10003;</span> WhatsApp &amp; SMS campaigns
            </li>
            <li>
              <span className="check">&#10003;</span> Track ROI
            </li>
            <li>
              <span className="check">&#10003;</span> Cash credit &amp; points at checkout
            </li>
            <li>
              <span className="check">&#10003;</span> Repeat-sale analytics
            </li>
            <li>
              <span className="check">&#10003;</span> Loyalty offers
            </li>
            <li>
              <span className="check">&#10003;</span> Referrals
            </li>
            <li>
              <span className="check">&#10003;</span> Cancel anytime, as per T&amp;C
            </li>
          </ul>

          <div className="support-banner">
            <span className="support-banner__icon" aria-hidden="true">&#10003;</span>
            <div className="support-banner__text">
              <strong>Real human support in under 24&ndash;48 hours</strong>
              <span>No bots. No chats &mdash; real people, every time.</span>
            </div>
          </div>
        </div>

        <p className="pricing-foot reveal">All prices exclude 18% GST &middot; No setup fee &middot; Cancel anytime, as per T&amp;C</p>
      </div>
    </section>
  );
}
