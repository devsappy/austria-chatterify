import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <Industries />
      <Services />
      <Process />
      <Testimonial />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
