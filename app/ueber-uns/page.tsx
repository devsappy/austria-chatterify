import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import About from "@/components/About";
import { SITE } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: "Über uns — Handwerk · Atelier · Webdesign aus Österreich & Deutschland",
  description:
    "Aus Neugier entstanden, mit Sorgfalt gewachsen. Wir bauen Websites, Anwendungen und intelligente Systeme — Chatbots und Voice-Agents — für Unternehmen in Österreich und Deutschland.",
  alternates: { canonical: "/ueber-uns" },
  openGraph: {
    title: "Über uns — Handwerk · Atelier",
    description:
      "Aus Neugier entstanden, mit Sorgfalt gewachsen. Webdesign, Anwendungen und KI-Systeme aus Wien und München.",
    url: `${SITE.url}/ueber-uns`,
  },
};

export default function UeberUnsPage() {
  return (
    <PageShell>
      <Breadcrumb
        items={[
          { href: "/", label: "Start" },
          { href: "/ueber-uns", label: "Über uns" },
        ]}
      />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid grid-cols-12 gap-0 border-b hair py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
          <div className="col-span-6">§ ÜU — Über uns</div>
          <div className="col-span-6 text-right">Wien · München</div>
        </div>
      </div>

      <About />
    </PageShell>
  );
}
