export default function Problem() {
  return (
    <section className="section section--paper">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">
            <span className="dot"></span> The problem
          </div>
          <h2>
            You know their face. You recall their smiles. You <em>just</em> don&rsquo;t know their names.
          </h2>
          <p className="lead section-intro">
            Regulars walk in, buy, walk out. You&rsquo;ve thought about asking for their number - but it feels awkward, almost impolite. So months pass, and you still can&rsquo;t reach them when business is slow.
          </p>
        </div>
        <div className="grid-3">
          <div className="problem-card reveal">
            <div className="icon-tile">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8" r="3.2" /><path d="M3.5 20a5.5 5.5 0 0 1 11 0" /><path d="M17 8h5" /><path d="M19.5 5.5v5" />
              </svg>
            </div>
            <div className="title">No customer data</div>
            <div className="body">You can&rsquo;t reach anyone you&rsquo;ve served.</div>
          </div>
          <div className="problem-card reveal" style={{ transitionDelay: ".06s" }}>
            <div className="icon-tile">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4.5" width="18" height="16" rx="2" /><path d="M3 9h18" /><path d="M8 3v3" /><path d="M16 3v3" /><path d="M10.4 13.2a1.6 1.6 0 1 1 2.2 1.5c-.6.3-.9.7-.9 1.3" /><path d="M12 18.2h.01" />
              </svg>
            </div>
            <div className="title">No repeat business driver</div>
            <div className="body">Slow days stay slow. No way to pull people back in.</div>
          </div>
          <div className="problem-card reveal" style={{ transitionDelay: ".12s" }}>
            <div className="icon-tile">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" strokeDasharray="2 3.5" opacity=".55" /><path d="M12 6.5a4 4 0 0 1 4 4c0 2.6-4 6-4 6s-4-3.4-4-6a4 4 0 0 1 4-4z" /><circle cx="12" cy="10.5" r="1.3" />
              </svg>
            </div>
            <div className="title">No visibility</div>
            <div className="body">Neighbours 500&nbsp;m away don&rsquo;t know you exist.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
