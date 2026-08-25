export default function Features() {
  return (
    <section className="section section--paper" id="features">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow">
            <span className="dot"></span> Features
          </div>
          <h2 style={{ maxWidth: "24ch", marginBottom: "40px" }}>
            Everything you need. <em>And nothing you don&rsquo;t.</em>
          </h2>
        </div>

        <div className="feature-tabs reveal" role="tablist" aria-label="Feature categories" id="featureTabs"></div>

        <div className="feature-panel reveal" id="featurePanel" role="tabpanel">
          {/* hydrated by Interactions.jsx */}
        </div>
      </div>
    </section>
  );
}
