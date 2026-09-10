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
            Every plan includes the full Fulcrum toolkit &mdash; the longer you commit, the less you pay. The yearly plan works out to about &#8377;10 a day.
          </p>
        </div>

        <div className="plans">
          {/* Quarterly */}
          <div className="plan reveal">
            <div className="p-name">Quarterly</div>
            <div className="p-price">
              <span className="amt">&#8377;1,500</span>
              <span className="per">/ 3 months</span>
            </div>
            <div className="p-gst">+ 18% GST</div>
            <div className="p-day">&asymp; &#8377;16 a day</div>
            <div className="p-spacer"></div>
            <a href="/#waitlist" className="btn btn--ghost btn--lg">
              Choose Quarterly{" "}
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          {/* Half-yearly */}
          <div className="plan reveal" style={{ transitionDelay: ".06s" }}>
            <div className="p-name">Half-yearly</div>
            <div className="p-price">
              <span className="amt">&#8377;2,400</span>
              <span className="per">/ 6 months</span>
            </div>
            <div className="p-gst">+ 18% GST</div>
            <div className="p-day">&asymp; &#8377;13 a day</div>
            <span className="p-save">Save &#8377;1,200 a year &middot; 20%</span>
            <div className="p-spacer"></div>
            <a href="/#waitlist" className="btn btn--dark btn--lg">
              Choose Half-yearly{" "}
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          {/* Yearly - featured / best value */}
          <div className="plan plan--featured reveal" style={{ transitionDelay: ".12s" }}>
            <span className="badge">Best value &middot; &#8377;10 a day</span>
            <div className="p-name">Yearly</div>
            <div className="p-price">
              <span className="amt">&#8377;3,650</span>
              <span className="per">/ year</span>
            </div>
            <div className="p-gst">+ 18% GST</div>
            <div className="p-day">&asymp; &#8377;10 a day</div>
            <span className="p-save">Save &#8377;2,350 a year &middot; 39%</span>
            <div className="p-spacer"></div>
            <a href="/#waitlist" className="btn btn--primary btn--lg">
              Choose Yearly{" "}
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>

        <div className="plan-includes reveal">
          <div className="lbl">Every plan includes</div>
          <ul>
            <li>
              <span className="check">&#10003;</span> Unlimited customer profiles
            </li>
            <li>
              <span className="check">&#10003;</span> QR check-in and points at checkout
            </li>
            <li>
              <span className="check">&#10003;</span> Loyalty, offers and referrals
            </li>
            <li>
              <span className="check">&#10003;</span> WhatsApp and SMS campaigns
            </li>
            <li>
              <span className="check">&#10003;</span> ROI and repeat-rate analytics
            </li>
            <li>
              <span className="check">&#10003;</span> Real human support, 7 days
            </li>
          </ul>
        </div>
        <p className="pricing-foot reveal">All prices exclude 18% GST &middot; No setup fee &middot; Cancel anytime</p>
      </div>
    </section>
  );
}
