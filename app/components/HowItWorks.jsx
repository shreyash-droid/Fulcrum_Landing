export default function HowItWorks() {
  return (
    <section className="section section--paper" id="how-it-works">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow">
            <span className="dot"></span> How it works
          </div>
          <h2 style={{ maxWidth: "16ch", marginBottom: "72px" }}>
            From setup to first sale — <em>in a week.</em>
          </h2>
        </div>

        <div className="steps">
          <div className="step reveal">
            <div className="step-title">
              <span className="step-num step-num--01">01</span>
              <span>Sign up in 15 minutes</span>
            </div>
            <div className="step-body">
              <p>Add your store details and connect your account. No hardware to buy, no training day.</p>
              <div className="step-demo">
                <div className="demo-label">Business setup</div>
                <div className="demo-bar"></div>
                <div className="demo-bar short"></div>
                <div className="demo-row"><span>Setup complete</span><span>100%</span></div>
                <div className="demo-progress"><i></i></div>
              </div>
            </div>
          </div>

          <div className="step reveal">
            <div className="step-title">
              <span className="step-num step-num--02">02</span>
              <span>Scan customer QR at checkout</span>
            </div>
            <div className="step-body">
              <p>One scan at the counter logs the visit and adds points automatically.</p>
              <div className="step-demo step-demo--center">
                <div className="qr-tile" aria-hidden="true">
                  <span style={{ background: "var(--lime)" }}></span><span></span><span style={{ background: "var(--lime)" }}></span><span style={{ background: "var(--lime)" }}></span>
                  <span></span><span style={{ background: "var(--lime)" }}></span><span style={{ background: "var(--lime)" }}></span><span></span>
                  <span style={{ background: "var(--lime)" }}></span><span style={{ background: "var(--lime)" }}></span><span></span><span style={{ background: "var(--lime)" }}></span>
                  <span></span><span style={{ background: "var(--lime)" }}></span><span style={{ background: "var(--lime)" }}></span><span></span>
                </div>
                <div className="pts-added"><span className="check">✓</span> +50 pts added</div>
                <div className="pts-to">to Sarah M.</div>
              </div>
            </div>
          </div>

          <div className="step reveal">
            <div className="step-title">
              <span className="step-num step-num--03">03</span>
              <span>Send targeted offers</span>
            </div>
            <div className="step-body">
              <p>Pick a segment, write your message, and send — over WhatsApp or SMS.</p>
              <div className="step-demo">
                <div className="demo-label">New offer</div>
                <div className="demo-send-to">Send to</div>
                <div className="demo-send-count">47 VIP customers</div>
                <div className="demo-chip">Tuesday special</div>
                <div className="demo-send">Send <span aria-hidden="true">↗</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
