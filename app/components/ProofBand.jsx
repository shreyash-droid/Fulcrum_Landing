export default function ProofBand() {
  return (
    <section className="proof-band" aria-label="Why store owners choose Fulcrum">
      <div className="container">
        <div className="proof-item reveal">
          <div className="num">
            <span className="count" data-to="15">15</span>
            <span className="u">&nbsp;min</span>
          </div>
          <div className="lbl">From sign-up to your first scan at the counter.</div>
        </div>
        <div className="proof-item reveal" style={{ transitionDelay: ".06s" }}>
          <div className="num">
            <span className="count" data-to="2.3" data-dec="1">2.3</span>
            <span className="u">&times;</span>
          </div>
          <div className="lbl">More repeat visits from customers on your loyalty program.</div>
        </div>
        <div className="proof-item reveal" style={{ transitionDelay: ".12s" }}>
          <div className="num">Zero</div>
          <div className="lbl">Hardware to buy. It runs on the phone already in your pocket.</div>
        </div>
        <div className="proof-item reveal" style={{ transitionDelay: ".18s" }}>
          <div className="num">
            24&ndash;48<span className="u">&nbsp;hr</span>
          </div>
          <div className="lbl">Typical reply from a real human — on call or WhatsApp. Assured.</div>
        </div>
      </div>
    </section>
  );
}
