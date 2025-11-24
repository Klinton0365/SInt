// components
import { Navbar, Footer } from "@/components";
import HeroSlider from "@/components/HeroSlider";

// sections
import Hero from "./hero";
import Posts from "./posts";
import Articles from "./articles";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Hero />
      <Posts />
      <Articles />
      <Footer />
    </>
  );
}
