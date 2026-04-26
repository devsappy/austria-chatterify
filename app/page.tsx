import TickerBar from "@/components/TickerBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import SEOFooter from "@/components/SEOFooter";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <TickerBar />
      <Nav />
      <Hero />
      <Industries />
      <Services />
      <Process />
      <Testimonial />
      <FAQ />
      <Contact />
      <SEOFooter />
      <Footer />
    </main>
  );
}
