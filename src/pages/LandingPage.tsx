import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/sections/Hero";
import Intro from "@/src/components/sections/Intro";
import VisionMission from "@/src/components/sections/VisionMission";
import Process from "@/src/components/sections/Process";
import Solution from "@/src/components/sections/Solution";
import Leadership from "@/src/components/sections/Leadership";
import Contact from "@/src/components/sections/Contact";
import Footer from "@/src/components/sections/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary scroll-smooth">
      <Navbar />
      <Hero />
      <div id="intro"><Intro /></div>
      <div id="vision"><VisionMission /></div>
      <div id="process"><Process /></div>
      <div id="solution"><Solution /></div>
      <div id="leadership"><Leadership /></div>
      <Contact />
      <Footer />
    </main>
  );
}
