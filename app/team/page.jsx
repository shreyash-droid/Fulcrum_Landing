import "../styles/team.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Waitlist from "../components/Waitlist";
import TeamAvatar from "../components/team/TeamAvatar";

export const metadata = {
  title: "Team & Advisors - Fulcrum",
  description:
    "The founding team and advisors behind Fulcrum - decades of experience across fintech, banking, product and operations, guiding how we build the CRM for local business.",
};

/* Founding team - replace the placeholder names, roles and bios below with the
   real founder / co-founder details. Photos: drop founder.jpg / cofounder.jpg
   into public/team/ and they appear automatically. */
const FOUNDERS = [
  {
    src: "/team/founder.jpg",
    name: "Founder Name",
    initials: "F",
    role: "Founder & CEO",
    tone: "lime",
    bio: "Add a short founder bio here - the origin of Fulcrum, the problem you set out to solve for local retail, and what you have built before.",
  },
  {
    src: "/team/cofounder.jpg",
    name: "Co-founder Name",
    initials: "CF",
    role: "Co-founder & CTO",
    tone: "coral",
    bio: "Add a short co-founder bio here - the product and engineering craft behind Fulcrum and the experience your customers are trusting.",
  },
];

/* Advisors - photos are read from /team/<file>. Drop arvind.jpg, ganesh.jpg,
   ramakrishnan.jpg and vivek.jpg into public/team/ to replace the monograms. */
const ADVISORS = [
  {
    src: "/team/arvind.jpg",
    name: "Arvind",
    initials: "A",
    role: "Founding Team, Fi Money · ex-Google Pay",
    tone: "lime",
    bio: "Two decades across consumer finance at Standard Chartered, Citibank, PayPal and Google Pay - where he ran Finance & Analytics for one of Google's fastest-growing products globally. He now sits on the founding team at Fi Money, one of India's first digital banks.",
    guides: "Guides Fulcrum on product, growth and operations.",
    chips: ["Fi Money", "Google Pay", "PayPal", "Citibank", "Standard Chartered"],
  },
  {
    src: "/team/ganesh.jpg",
    name: "Ganesh Jayadevan",
    initials: "GJ",
    role: "CTO, Sahamati Foundation · ex-Cisco, IBM, AT&T",
    tone: "sky",
    bio: "35 years of global leadership across Fortune 500 tech giants and high-growth startups, scaling business revenues from $5M to $35M. Holder of multiple granted US patents in VoIP and telecom architecture, and today CTO of Sahamati, the self-regulatory body for 1,400+ entities in India's Account Aggregator ecosystem.",
    guides: "Guides product-market fit, roadmap and high-volume scaling.",
    chips: ["Sahamati", "Cisco", "IBM", "AT&T", "Mahindra Comviva"],
  },
  {
    src: "/team/ramakrishnan.jpg",
    name: "Ramakrishnan Venkateswaran",
    initials: "RV",
    role: "Strategy Advisor · BFSI veteran & angel investor",
    tone: "coral",
    bio: "A 41-year career spanning lending, risk management, financial control and fund-raising across banking and financial services. Industry-agnostic from decades across NBFCs, SME and corporate finance - and a founder of two companies, angel investor and independent director in his own right.",
    guides: "Guides pricing models, unit economics and go-to-market strategy.",
    chips: ["BFSI", "Risk", "NBFC", "Fund-raising", "Board advisory"],
  },
  {
    src: "/team/vivek.jpg",
    name: "Vivek Vittal Murthy",
    initials: "VV",
    role: "Program Management Leader · Uber India, ex-KPMG",
    tone: "forest",
    bio: "Close to two decades leading cross-functional teams and operational excellence. At Uber he runs a global capability center automating operations across business lines; previously he advised large clients on operating models, finance transformation and sourcing strategy at KPMG. MBA, Asian Institute of Management.",
    guides: "Guides operations, product and customer delivery at scale.",
    chips: ["Uber", "KPMG", "Operations", "Transformation"],
  },
];

export default function TeamPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main">
        {/* ---------- Hero ---------- */}
        <section className="section section--gradient team-hero">
          <div className="container">
            <div className="reveal">
              <div className="eyebrow eyebrow--onDark">
                <span className="dot"></span> The team
              </div>
              <h1>
                The people <em>behind Fulcrum.</em>
              </h1>
              <p className="lead team-hero-lead">
                A founding team that has lived the local-retail problem, backed by advisors who have
                built and scaled some of the most trusted names in fintech, banking and technology.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Founding team ---------- */}
        <section className="section section--paper team-founders" id="founding-team">
          <div className="container">
            <div className="section-head reveal">
              <div className="eyebrow">
                <span className="dot"></span> Founding team
              </div>
              <h2>
                Built by the people who <em>answer for it.</em>
              </h2>
              <p className="lead section-intro">
                The two people accountable for every decision Fulcrum makes - product, promise and
                the relationships you put in our hands.
              </p>
            </div>

            <div className="founder-grid">
              {FOUNDERS.map((p) => (
                <article className="founder-card reveal" key={p.name}>
                  <TeamAvatar src={p.src} name={p.name} initials={p.initials} tone={p.tone} />
                  <div className="founder-body">
                    <h3 className="person-name">{p.name}</h3>
                    <div className={`person-role role--${p.tone}`}>{p.role}</div>
                    <p className="person-bio">{p.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Advisors ---------- */}
        <section className="section section--forest team-advisors" id="advisors">
          <div className="container">
            <div className="section-head reveal">
              <div className="eyebrow eyebrow--onDark">
                <span className="dot"></span> Advisors
              </div>
              <h2>
                Guided by <em>decades of hard-won judgement.</em>
              </h2>
              <p className="lead section-intro">
                Operators and builders from Google Pay, Uber, Cisco, KPMG and India's leading
                financial institutions - the same instincts now shaping how Fulcrum grows.
              </p>
            </div>

            <div className="advisor-grid">
              {ADVISORS.map((a) => (
                <article className="advisor-card reveal" key={a.name}>
                  <div className="advisor-head">
                    <TeamAvatar src={a.src} name={a.name} initials={a.initials} tone={a.tone} />
                    <div className="advisor-id">
                      <h3 className="person-name">{a.name}</h3>
                      <div className={`person-role role--${a.tone}`}>{a.role}</div>
                    </div>
                  </div>
                  <p className="person-bio">{a.bio}</p>
                  <p className="advisor-guides">{a.guides}</p>
                  <div className="chip-row" aria-label="Background">
                    {a.chips.map((c) => (
                      <span className="chip" key={c}>
                        {c}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Waitlist />
      </main>

      <Footer />
    </>
  );
}
