import TickerBar from "@/components/TickerBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <TickerBar />
      <Nav />
      {children}
      <Footer />
    </main>
  );
}
