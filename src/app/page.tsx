// components
import { Navbar, Footer } from "@/components";
import IntroSection from "@/components/IntroSection";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/about-us";
import CounterSection from "@/components/counter-section";

// sections
import Hero from "./hero";
import Posts from "./posts";
import Articles from "./articles";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <IntroSection />
      <HeroSlider />
      <AboutSection />
      <CounterSection />
      <Hero />
      <Posts />
      <Articles />
      <Footer />
    </>
  );
}
