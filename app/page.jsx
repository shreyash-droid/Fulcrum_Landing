import Header from "./components/Header";
import Hero from "./components/Hero";
import ProofBand from "./components/ProofBand";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import WhyFulcrum from "./components/WhyFulcrum";
import Testimonials from "./components/Testimonials";
import ForCustomers from "./components/ForCustomers";
import Faq from "./components/Faq";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <ProofBand />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <WhyFulcrum />
        <Testimonials />
        <ForCustomers />
        <Faq />
        <Waitlist />
      </main>

      <Footer />
    </>
  );
}
