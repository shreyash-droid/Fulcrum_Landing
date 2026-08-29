/* Design C - keeps the accordion (collapsed by default = less text on screen)
   but every answer is one short sentence instead of a paragraph. Reuses the
   #faqList / .faq-item markup so the shared handler in Interactions.jsx
   drives it without any extra script. */

const QA = [
  ["Do my customers need the app?", "Yes - it's where they see points, offers and shops near them."],
  ["How long does setup take?", "About 15 minutes, on the phone you already have."],
  ["Do I have to buy any hardware?", "No. No scanner, no terminal, nothing."],
  ["Will it suit my kind of shop?", "If people come back to you, it fits. Cafés, salons, bakeries, boutiques, pet stores."],
  ["Is my customer data safe?", "Encrypted end to end, stored on ISO 27001 servers, never shared."],
  ["What does it cost?", "Invite-only for now. Join the waitlist and we'll talk numbers with you."],
];

export default function StoryFaq() {
  return (
    <section className="section section--paper v3-faq" id="faq">
      <div className="container faq-grid">
        <div className="reveal">
          <div className="eyebrow">
            <span className="dot"></span> Before you ask
          </div>
          <h2>
            Six questions. <em>Six short answers.</em>
          </h2>
          <p className="lead" style={{ marginTop: "16px" }}>
            Anything else - just call us.
          </p>
        </div>

        <div className="reveal" id="faqList">
          {QA.map(([q, a], i) => (
            <div className={"faq-item" + (i === 0 ? " is-open" : "")} key={q}>
              <button className="faq-q" aria-expanded={i === 0 ? "true" : "false"}>
                <span>{q}</span>
                <span className="plus" aria-hidden="true">
                  +
                </span>
              </button>
              <div className="faq-a">
                <p>{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
