import Header from "../components/Header";
import Hero from "../components/Hero";
import ProofBand from "../components/ProofBand";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import WhyFulcrum from "../components/WhyFulcrum";
import ForCustomers from "../components/ForCustomers";
import Faq from "../components/Faq";
import Waitlist from "../components/Waitlist";
import Footer from "../components/Footer";

export default function HomeV2() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header variant="v2" />

      <main id="main">
        <Hero v2 />
        <ProofBand v2 />
        <Problem v2 />
        <Solution v2 />
        <HowItWorks />
        <Features />
        <WhyFulcrum v2 />
        <ForCustomers v2 />
        <Faq v2 />
        <Waitlist />
      </main>

      <Footer v2 />
    </>
  );
}
