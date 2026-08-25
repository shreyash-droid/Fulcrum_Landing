"use client";

import { useState } from "react";

const EMPTY = { name: "", shop: "", address: "", email: "" };

export default function Waitlist() {
  const [values, setValues] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to a real endpoint / CRM before launch.
    setSubmitted(true);
  };

  return (
    <section className="final-cta" id="waitlist">
      <div className="container">
        <div className="cta-block cta-block--split reveal">
          <svg className="sparkle" style={{ top: "36px", left: "48px", color: "var(--on-accent)" }} width="46" height="46" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 1.5c.6 4.8 3.7 7.9 8.5 8.5-4.8.6-7.9 3.7-8.5 8.5-.6-4.8-3.7-7.9-8.5-8.5C8.3 9.4 11.4 6.3 12 1.5z" />
          </svg>
          <svg className="sparkle" style={{ bottom: "40px", right: "40px", color: "var(--on-accent-soft)" }} width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 1.5c.6 4.8 3.7 7.9 8.5 8.5-4.8.6-7.9 3.7-8.5 8.5-.6-4.8-3.7-7.9-8.5-8.5C8.3 9.4 11.4 6.3 12 1.5z" />
          </svg>

          {/* Left: heading + reassurance */}
          <div className="cta-copy">
            <h2>
              Ready to turn customers <em>into repeat customers?</em>
            </h2>
            <p className="waitlist-lead">
              We&rsquo;re onboarding stores in batches. Join the waitlist and we&rsquo;ll reach out when your spot opens up.
            </p>
            <div className="cta-reassure">
              <span>Zero setup fee</span>
              <span className="sep" aria-hidden="true"></span>
              <span>No forced hardware</span>
              <span className="sep" aria-hidden="true"></span>
              <span>Live in 15&nbsp;minutes</span>
              <span className="sep" aria-hidden="true"></span>
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Right: form */}
          <div className="cta-form-wrap">
            {submitted ? (
              <div className="waitlist-success" role="status">
                <span className="tick" aria-hidden="true">✓</span>
                <h3>You&rsquo;re on the list, {values.name.split(" ")[0] || "friend"}!</h3>
                <p>Thanks for joining. We&rsquo;ll be in touch soon about getting {values.shop || "your store"} set up.</p>
              </div>
            ) : (
              <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
                <div className="wl-field">
                  <label htmlFor="wl-name">Your name</label>
                  <input id="wl-name" name="name" type="text" autoComplete="name" placeholder="Mabel D'Souza" required value={values.name} onChange={update("name")} />
                </div>
                <div className="wl-field">
                  <label htmlFor="wl-shop">Shop name</label>
                  <input id="wl-shop" name="shop" type="text" autoComplete="organization" placeholder="Brew & Bloom Coffee" required value={values.shop} onChange={update("shop")} />
                </div>
                <div className="wl-field wl-field--full">
                  <label htmlFor="wl-address">Shop address</label>
                  <input id="wl-address" name="address" type="text" autoComplete="street-address" placeholder="12 MG Road, Bengaluru 560001" required value={values.address} onChange={update("address")} />
                </div>
                <div className="wl-field wl-field--full">
                  <label htmlFor="wl-email">Email</label>
                  <input id="wl-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required value={values.email} onChange={update("email")} />
                </div>
                <div className="wl-actions">
                  <button type="submit" className="btn btn--dark btn--lg">
                    Join the waitlist{" "}
                    <span className="arrow" aria-hidden="true">
                      ↗
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
