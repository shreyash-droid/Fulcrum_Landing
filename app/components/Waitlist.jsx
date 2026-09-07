"use client";

import { useState } from "react";

const EMPTY = { name: "", shop: "", address: "", email: "" };

// FormSubmit.co — no account, no API key. The destination email IS the endpoint.
// Submissions are delivered to this inbox after a one-time "Activate" click the
// inbox owner makes on the first email FormSubmit sends. Once you have that
// activation email you can swap this for the aliased endpoint FormSubmit gives
// you (https://formsubmit.co/ajax/<random-string>) to keep the address private.
const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSUBMIT_ENDPOINT ||
  "https://formsubmit.co/ajax/fulcrumretailsolutions@gmail.com";

export default function Waitlist() {
  const [values, setValues] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const update = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setError("");
    setSending(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name,
          shop: values.shop,
          address: values.address,
          email: values.email,
          _subject: `New waitlist signup: ${values.shop || "Unknown shop"}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json().catch(() => ({}));
      // FormSubmit returns { success: "true" } (string) on success.
      if (!res.ok || String(data.success) !== "true") {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
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
              Ready to turn customers
              <br />
              <em>into repeat customers?</em>
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
                  <button type="submit" className="btn btn--dark btn--lg" disabled={sending}>
                    {sending ? "Sending…" : "Join the waitlist"}{" "}
                    <span className="arrow" aria-hidden="true">
                      ↗
                    </span>
                  </button>
                </div>
                {error ? (
                  <p className="wl-error" role="alert">
                    {error}
                  </p>
                ) : null}
                <p className="wl-consent">
                  By joining, you agree to our{" "}
                  <a href="/terms">Terms &amp; Conditions</a> and{" "}
                  <a href="/privacy">Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
