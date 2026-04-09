import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Theme from "../components/Theme";
import StepByStep from "../components/StepByStep";  
import Games from "../components/Games";
import Seminar from "../components/Seminar";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Sponsor from "../components/Sponsor";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Theme />
      <StepByStep />
      <Games />
      <Seminar />
      <FAQ />
      <Sponsor />
      <Footer />
    </main>
  );
}