import Header from "../components/Header";
import Pricing from "../components/Pricing";
import Waitlist from "../components/Waitlist";
import Footer from "../components/Footer";

export const metadata = {
  title: "Pricing - Fulcrum",
  description:
    "One toolkit, your billing rhythm. Every Fulcrum plan includes the full toolkit - the longer you commit, the less you pay. The yearly plan works out to about ₹10 a day.",
};

export default function PricingPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Pricing />
        <Waitlist />
      </main>

      <Footer />
    </>
  );
}
