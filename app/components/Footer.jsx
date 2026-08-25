export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <img className="footer-mark" src="/assets/logo-mark.svg" alt="" width="30" height="31" />
              Fulcrum<span className="dot">.</span>
            </div>
            <p>The CRM for retail businesses and service providers.</p>
            <div className="made">Made in Bangalore, IN</div>
          </div>
          <div className="footer-col">
            <div className="title">Product</div>
            <div className="links">
              <a href="#">Business App</a>
              <a href="#">Customer App</a>
              <a href="#features">Features</a>
              <a href="#waitlist">Join the waitlist</a>
            </div>
          </div>
          <div className="footer-col">
            <div className="title">Company</div>
            <div className="links">
              <a href="#why">About</a>
              <a href="#faq">FAQ</a>
              <a href="#">Contact</a>
              <a href="#">Blog</a>
            </div>
          </div>
          <div className="footer-col">
            <div className="title">Legal</div>
            <div className="links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Data Policy</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copy">&copy;&nbsp;2026 Fulcrum Retail Solutions</div>
          <div className="footer-social">
            <a href="#" aria-label="Fulcrum on X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.2 2.5h3.3l-7.2 8.2 8.5 11.3h-6.7l-5.2-6.9-6 6.9H1.6l7.7-8.8L1.2 2.5h6.9l4.7 6.3 5.4-6.3zm-1.2 17.8h1.8L7.1 4.4H5.2l11.8 15.9z" />
              </svg>
            </a>
            <a href="#" aria-label="Fulcrum on Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="Fulcrum on LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9.5h4V21H3zM10 9.5h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.1c0-1.22-.02-2.8-1.7-2.8-1.7 0-1.96 1.33-1.96 2.7V21h-4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
