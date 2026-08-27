export default function Faq() {
  return (
    <section className="section section--paper" id="faq">
      <div className="container faq-grid">
        <div className="reveal">
          <div className="eyebrow eyebrow--onDark" style={{ color: "var(--ink-muted)" }}>
            <span className="dot" style={{ background: "var(--lime)" }}></span> Frequently asked questions
          </div>
          <h2>
            Good questions. <em>Clear answers.</em>
          </h2>
          <p className="lead" style={{ marginTop: "16px" }}>
            Still curious? We&rsquo;d love to hear from you.
          </p>
        </div>

        <div className="reveal" id="faqList">
          <div className="faq-item is-open">
            <button className="faq-q" aria-expanded="true">
              <span>What is Fulcrum Retail?</span>
              <span className="plus" aria-hidden="true">+</span>
            </button>
            <div className="faq-a">
              <p>A hyper-local CRM that helps small businesses capture, reward and engage customers, existing and new. We aim to empower micro-retail businesses with an integrated customer relationship management tool.</p>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-q" aria-expanded="false">
              <span>Do my customers need to download an app?</span>
              <span className="plus" aria-hidden="true">+</span>
            </button>
            <div className="faq-a">
              <p>Yes. To unlock business discovery, offer notifications, automatic points on spends, and redemption for vouchers and coupons, customers download the Fulcrum Customer App.</p>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-q" aria-expanded="false">
              <span>How long does it take to get started?</span>
              <span className="plus" aria-hidden="true">+</span>
            </button>
            <div className="faq-a">
              <p>About 15&nbsp;minutes. Register with a few business details and you&rsquo;re online. Customers in your pin code see you instantly on their app. Once they visit and transact, they become your customers - pamper them with offers and you&rsquo;ve got them hooked for life.</p>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-q" aria-expanded="false">
              <span>Is Fulcrum suitable for my type of business?</span>
              <span className="plus" aria-hidden="true">+</span>
            </button>
            <div className="faq-a">
              <p>If you run a business that serves customers - existing and new - Fulcrum fits like a glove. Cafés, salons, boutiques, pet-supply stores, bakeries and more can reap the full power of Fulcrum Retail.</p>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-q" aria-expanded="false">
              <span>How is my customer data protected?</span>
              <span className="plus" aria-hidden="true">+</span>
            </button>
            <div className="faq-a">
              <p>Data is encrypted end-to-end and stored on ISO 27001 and SOC 2 Type II standard servers. Customer details are respected and never shared under any circumstances, except where required by law.</p>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-q" aria-expanded="false">
              <span>What is the mission at Fulcrum Retail Solutions?</span>
              <span className="plus" aria-hidden="true">+</span>
            </button>
            <div className="faq-a">
              <p>Many micro-business owners struggle to stay connected with their customers. Our mission is to build an easy-to-manage, integrated contact-management system for them. With Fulcrum as an ally, we&rsquo;re confident business owners will gain visibility, ensure predictability, and earn an advantage over their competitors.</p>
            </div>
          </div>
          <a href="#" className="faq-more">
            View all FAQs →
          </a>
        </div>
      </div>
    </section>
  );
}
