import "../styles/story.css";

import StoryHeader from "../components/story/StoryHeader";
import StoryHero from "../components/story/StoryHero";
import StoryStrip from "../components/story/StoryStrip";
import StoryDay from "../components/story/StoryDay";
import StoryApps from "../components/story/StoryApps";
import StoryGains from "../components/story/StoryGains";
import StoryFaq from "../components/story/StoryFaq";
import Waitlist from "../components/Waitlist";
import Footer from "../components/Footer";

export const metadata = {
  title: "Fulcrum - Design C (Story)",
  description: "Comic-strip direction: a shopkeeper's day told in six panels, almost entirely in pictures.",
};

export default function StoryDesign() {
  return (
    <div className="v3-root">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <StoryHeader />

      <main id="main">
        <StoryHero />
        <StoryStrip />
        <StoryDay />
        <StoryApps />
        <StoryGains />
        <StoryFaq />
        <Waitlist />
      </main>

      <Footer />
    </div>
  );
}
