import "../styles/legal.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy - Fulcrum",
  description:
    "How Fulcrum Retail Solutions collects, uses, shares, and protects your data under the DPDP Act 2023.",
};

export default function PrivacyPage() {
  return (
    <div className="legal-page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main">
        <section className="legal-hero">
          <div className="container">
            <div className="legal-eyebrow">
              <span className="dot" aria-hidden="true"></span> Legal
            </div>
            <h1>
              Privacy <em>Policy</em>
            </h1>
            <div className="legal-meta">
              <span>
                <span className="legal-meta-key">Effective date:</span> 2nd October 2026
              </span>
              <span>
                <span className="legal-meta-key">Applies to:</span> Fulcrum Retail app
              </span>
            </div>
            <p className="lead">
              This policy explains what we collect, why we collect it, how it is shared and protected, and
              the rights you have over your data under the DPDP Act 2023.
            </p>
            <div className="legal-switch" role="group" aria-label="Legal documents">
              <a href="/terms">Terms &amp; Conditions</a>
              <a href="/privacy" aria-current="page">
                Privacy Policy
              </a>
            </div>
          </div>
        </section>

        <section className="legal-body">
          <div className="container">
            <div className="legal-section">
              <h2>
                <span className="step" aria-hidden="true">1.</span> Who we are (Data Fiduciary)
              </h2>
              <p>
                Fulcrum Retail Solutions, a partnership with address at 26, 3rd Cross, Nanjappa Layout,
                Kalkere, Bangalore &ndash; 560&nbsp;043.
              </p>
              <div className="legal-note">
                <div className="label">Contact</div>
                <p>
                  General: <a href="mailto:support@fulcrumretail.in">support@fulcrumretail.in</a>
                  <br />
                  Grievance Officer: Ravi Kumar &mdash;{" "}
                  <a href="mailto:grievance@fulcrumretail.in">grievance@fulcrumretail.in</a>
                  <br />
                  Response within 48&nbsp;hrs as per the DPDP Act 2023.
                </p>
              </div>
            </div>

            <div className="legal-section">
              <h2>
                <span className="step" aria-hidden="true">2.</span> What we collect
              </h2>
              <ul className="legal-list">
                <li>
                  <b>You give us:</b> Name, mobile number, PIN code, and birth date (optional).
                </li>
                <li>
                  <b>Auto-collected:</b> Device info, IP, login logs, app usage, purchase history (what,
                  when, and where you bought from our Partner Stores), and points earned or redeemed.
                </li>
              </ul>
              <p>
                We do <b>not</b> collect sensitive data, geo-location, payment info, or contacts.
              </p>
            </div>

            <div className="legal-section">
              <h2>
                <span className="step" aria-hidden="true">3.</span> Why we collect (Purpose)
              </h2>
              <p>We use your data only to:</p>
              <ul className="legal-list">
                <li>Create your account and verify you.</li>
                <li>Track Fulcrum Points.</li>
                <li>Send you partner offers via in-app notifications only.</li>
                <li>Improve our service.</li>
                <li>Comply with law.</li>
              </ul>
              <p>Processing is based on your explicit consent.</p>
            </div>

            <div className="legal-section">
              <h2>
                <span className="step" aria-hidden="true">4.</span> Sharing
              </h2>
              <p>
                We do <b>not</b> sell your data. We do <b>not</b> share your mobile number, DOB, or PIN
                with Partner Stores. Partner Stores only see anonymized purchase trends (e.g., &ldquo;10
                redemptions in Horamavu&rdquo;). Direct offers are sent by us, not by them.
              </p>
            </div>

            <div className="legal-section" id="your-rights">
              <h2>
                <span className="step" aria-hidden="true">5.</span> Your rights (DPDP Act)
              </h2>
              <p>You can, at any time:</p>
              <ul className="legal-list">
                <li>Access your data.</li>
                <li>Correct it.</li>
                <li>Delete your account &amp; data.</li>
                <li>Withdraw consent (App &gt; Settings &gt; Delete Account).</li>
                <li>Nominate someone.</li>
                <li>
                  Raise a grievance to our Grievance Officer, and then to the Data Protection Board of
                  India.
                </li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>
                <span className="step" aria-hidden="true">6.</span> Retention
              </h2>
              <p>
                We keep your data until you delete your account, or for 3&nbsp;years from your last
                interaction, whichever is earlier. After that, it is anonymized.
              </p>
            </div>

            <div className="legal-section">
              <h2>
                <span className="step" aria-hidden="true">7.</span> Security &amp; cookies
              </h2>
              <p>
                Data is encrypted at rest and in transit. We use essential cookies only for login. You can
                clear them from your browser or app settings.
              </p>
            </div>

            <div className="legal-section">
              <h2>
                <span className="step" aria-hidden="true">8.</span> Children
              </h2>
              <p>The app is for people aged 18 and over only.</p>
            </div>

            <div className="legal-section">
              <h2>
                <span className="step" aria-hidden="true">9.</span> Changes
              </h2>
              <p>We will notify you in-app for material changes.</p>
            </div>

            <a className="legal-back" href="/">
              <span aria-hidden="true">&larr;</span> Back to home
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
