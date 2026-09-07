import "../styles/legal.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms & Conditions - Fulcrum",
  description:
    "General terms and conditions of use for the Fulcrum Business Owner App and the Fulcrum Neighbourhood app.",
};

export default function TermsPage() {
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
              Terms &amp; Conditions <em>of use</em>
            </h1>
            <div className="legal-meta">
              <span>
                <span className="legal-meta-key">Applies to:</span> Fulcrum Business Owner App &amp;
                Fulcrum Neighbourhood app
              </span>
            </div>
            <p className="lead">
              Before using the Fulcrum mobile apps, please read these terms and conditions carefully.
              By using the Fulcrum Business Owner App or the Fulcrum Neighbourhood app on any device
              &mdash; a computer, phone, tablet, or console &mdash; you agree that you have read,
              understood, and accepted these terms and conditions, as well as any other relevant laws.
              If you do not agree with these terms, do not use the app or any features of it.
            </p>
            <div className="legal-switch" role="group" aria-label="Legal documents">
              <a href="/terms" aria-current="page">
                Terms &amp; Conditions
              </a>
              <a href="/privacy">Privacy Policy</a>
            </div>
          </div>
        </section>

        <section className="legal-body">
          <div className="container">
            <div className="legal-section">
              <h2>About Fulcrum</h2>
              <p>
                The app is owned by Fulcrum Retail Solutions, a partnership firm located at #&nbsp;26,
                3rd Cross, Nanjappa Layout, Kalkere, Bangalore &ndash; 560&nbsp;043.
              </p>
            </div>

            <div className="legal-section">
              <h2>Who can use the app</h2>
              <p>
                This app is meant for people who live in areas where Fulcrum Network partners have been
                added to provide products and services. To use the app, you need to register or log in as
                a Fulcrum Business Owner or a Neighbourhood customer, or create an account. Some app
                features require an internet connection.
              </p>
            </div>

            <div className="legal-section">
              <h2>Your account</h2>
              <ul className="legal-list">
                <li>Do not provide false information about yourself.</li>
                <li>
                  You agree not to create more than one account, set up an account on someone else&rsquo;s
                  behalf, or transfer your account.
                </li>
                <li>You must not use or try to use someone else&rsquo;s account, username, or password.</li>
                <li>
                  If you change or stop using your phone number, you must update your account immediately
                  so that messages go to the right person.
                </li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Acceptable use</h2>
              <p>
                You must not use the app in any way that is illegal, against these terms, or in a harmful
                or fraudulent manner, such as hacking, inserting viruses, or sending harmful data into the
                app or system. You must not use the app in any way that could damage, slow down, or
                interfere with Fulcrum Retail&rsquo;s systems or security, or affect other users.
              </p>
            </div>

            <div className="legal-section">
              <h2>Costs and communications</h2>
              <p>
                The app is free to use, but you are responsible for any internet service charges. By using
                the app, you agree that we may send you messages via email or text on your phone.
              </p>
            </div>

            <div className="legal-section">
              <h2>Fulcrum Rewards Program</h2>
              <p>
                The terms and conditions for the Fulcrum Rewards Program also follow the Loyalty Program
                Terms and Conditions.
              </p>
            </div>

            <div className="legal-section">
              <h2>Intellectual property</h2>
              <p>
                All intellectual property in the app belongs to Fulcrum Retail. Fulcrum keeps all rights
                related to the intellectual property and content in the app.
              </p>
            </div>

            <div className="legal-section">
              <h2>Your information and privacy</h2>
              <p>
                Personal and other information you provide to Fulcrum through the app will be used only as
                stated in our <a href="/privacy">Privacy Policy</a>. Please read the Privacy Policy
                carefully before continuing. By downloading the app, you agree to the use of your
                information as described in the Privacy Policy, which is part of these Terms and Conditions
                of Use. You are responsible for the accuracy of the information you enter or share in the
                app.
              </p>
            </div>

            <div className="legal-section">
              <h2>Use at your own risk</h2>
              <p>
                You agree to use the app at your own risk and take full responsibility for your use of the
                app and any damage to your device, loss of data, or other harm that may occur from
                downloading, accessing, or using the app.
              </p>
            </div>

            <div className="legal-section">
              <h2>Changes to the app and service</h2>
              <ul className="legal-list">
                <li>
                  Fulcrum may change the format or content of the app at any time, including removing
                  features or functions.
                </li>
                <li>
                  Fulcrum may stop the app or certain parts of it for support, maintenance, updates, or
                  other reasons.
                </li>
                <li>Updates to the app may be released through the App Store or Google Play.</li>
                <li>
                  Depending on the update, you might not be able to use all or part of the app until you
                  download the latest version and accept any new terms.
                </li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Transfer of business</h2>
              <p>
                Fulcrum may transfer its rights and responsibilities under these terms to another company
                if it sells or transfers its business. This will not affect your rights or Fulcrum&rsquo;s
                obligations.
              </p>
            </div>

            <div className="legal-section">
              <h2>Termination and restriction</h2>
              <p>
                Fulcrum has the right to end your account and access to the app or any features, delete
                your profile, or limit your use of the app at any time, for any reason, without notice or
                liability. Fulcrum also has the right to stop access to the app or its features. You will
                not be allowed to create a new account to bypass any termination, deletion, or restriction.
              </p>
            </div>

            <div className="legal-section">
              <h2>Changes to these terms</h2>
              <p>
                Fulcrum may change these terms and conditions at any time without notice. The new terms
                will take effect once posted in the app. If the terms change, you will be asked to accept
                the revised terms the next time you use the app. Any use after that will be based on the
                new terms.
              </p>
            </div>

            <div className="legal-section">
              <h2>Governing law</h2>
              <p>These terms and conditions are governed by the laws of India.</p>
            </div>

            <div className="legal-section">
              <h2>Contact us</h2>
              <p>
                If you have any questions or complaints about the app, please email us.
              </p>
              <div className="legal-note">
                <div className="label">Support</div>
                <p>
                  <a href="mailto:support@fulcrumretail.in">support@fulcrumretail.in</a>
                </p>
              </div>
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
