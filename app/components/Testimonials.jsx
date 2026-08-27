/* Placeholder quotes - replace with real, consented customer testimonials before launch. */
export default function Testimonials() {
  return (
    <section className="section section--paper" id="stories">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">
            <span className="dot"></span> From the counter
          </div>
          <h2>
            Business owners, <em>in their own words.</em>
          </h2>
          <p className="lead section-intro">Real relationships, more repeat visits, no spreadsheet in sight - anywhere.</p>
        </div>
        <div className="tmony-grid">
          <figure className="tmony reveal">
            <div className="mark" aria-hidden="true">&ldquo;</div>
            <blockquote>
              I finally know who my regulars are. One Tuesday offer to 40&nbsp;quiet customers and <b>half of them walked back in that week.</b>
            </blockquote>
            <figcaption className="who">
              <span className="avatar" style={{ background: "var(--lime)" }}>RM</span>
              <span>
                <span className="name">Rekha Menon</span>
                <span className="role">Bloom &amp; Bean Café, Bengaluru</span>
              </span>
            </figcaption>
          </figure>
          <figure className="tmony reveal" style={{ transitionDelay: ".06s" }}>
            <div className="mark" aria-hidden="true">&ldquo;</div>
            <blockquote>
              Setup took one chai break. No hardware, no training day - <b>we were scanning customers the same afternoon.</b>
            </blockquote>
            <figcaption className="who">
              <span className="avatar" style={{ background: "var(--coral)" }}>AS</span>
              <span>
                <span className="name">Arun Shetty</span>
                <span className="role">Shetty Provisions, Mangaluru</span>
              </span>
            </figcaption>
          </figure>
          <figure className="tmony reveal" style={{ transitionDelay: ".12s" }}>
            <div className="mark" aria-hidden="true">&ldquo;</div>
            <blockquote>
              The points keep people coming back for the voucher. <b>My repeat business is up and I&rsquo;m not guessing anymore</b> - I can see it.
            </blockquote>
            <figcaption className="who">
              <span className="avatar" style={{ background: "var(--sky)" }}>FK</span>
              <span>
                <span className="name">Fatima Khan</span>
                <span className="role">Khan Salon &amp; Studio, Pune</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
