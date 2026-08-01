import Background from "../components/ui/Background";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import CTA from "../components/home/CTA";
import Footer from "../components/layout/Footer";
import ScrollIndicator from "../components/ui/ScrollIndicator";

const Home = () => {
  return (
    <Background>
      <Navbar />
      <main className="pt-[90px]">
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
      <ScrollIndicator />
    </Background>
  );
};

export default Home;
