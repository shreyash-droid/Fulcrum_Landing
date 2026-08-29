import "../styles/visual.css";

import VisualHeader from "../components/visual/VisualHeader";
import VisualHero from "../components/visual/VisualHero";
import VisualLoop from "../components/visual/VisualLoop";
import VisualCompare from "../components/visual/VisualCompare";
import VisualSteps from "../components/visual/VisualSteps";
import VisualStats from "../components/visual/VisualStats";
import VisualToolkit from "../components/visual/VisualToolkit";
import VisualApps from "../components/visual/VisualApps";
import Faq from "../components/Faq";
import Waitlist from "../components/Waitlist";
import Footer from "../components/Footer";

export const metadata = {
  title: "Fulcrum - Design B (Visual)",
  description: "Infographic-first direction: the story told in diagrams, pictograms and numbers.",
};

export default function VisualDesign() {
  return (
    <div className="v2-root">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <VisualHeader />

      <main id="main">
        <VisualHero />
        <VisualLoop />
        <VisualCompare />
        <VisualSteps />
        <VisualStats />
        <VisualToolkit />
        <VisualApps />
        <Faq />
        <Waitlist />
      </main>

      <Footer />
    </div>
  );
}
