export default function ProofBand({ v2 = false }) {
  const setup = (
    <div className="proof-item reveal">
      <div className="num">
        <span className="count" data-to="15">15</span>
        <span className="u">&nbsp;min</span>
      </div>
      <div className="lbl">From sign-up to your first scan at the counter.</div>
    </div>
  );

  const repeat = (
    <div className="proof-item reveal" style={{ transitionDelay: ".06s" }}>
      <div className="num">
        <span className="count" data-to="2.3" data-dec="1">2.3</span>
        <span className="u">&times;</span>
      </div>
      <div className="lbl">More repeat visits from customers on your loyalty program.</div>
    </div>
  );

  const hardware = (
    <div className="proof-item reveal" style={{ transitionDelay: ".12s" }}>
      <div className="num">{v2 ? "₹0" : "Zero"}</div>
      <div className="lbl">Hardware to buy. It runs on the phone already in your pocket.</div>
    </div>
  );

  const support = (
    <div className="proof-item reveal" style={{ transitionDelay: ".18s" }}>
      <div className="num">
        24-48<span className="u">&nbsp;hr</span>
      </div>
      <div className="lbl">Typical reply from a real human - on call or WhatsApp. Assured.</div>
    </div>
  );

  const cancel = (
    <div className="proof-item reveal" style={{ transitionDelay: ".18s" }}>
      <div className="num">Anytime</div>
      <div className="lbl">Cancel whenever you like - no lock-in, no penalties.</div>
    </div>
  );

  return (
    <section className="proof-band" aria-label="Why store owners choose Fulcrum">
      <div className="container">
        {v2 ? (
          <>
            {setup}
            {hardware}
            {support}
            {cancel}
          </>
        ) : (
          <>
            {setup}
            {repeat}
            {hardware}
            {support}
          </>
        )}
      </div>
    </section>
  );
}
