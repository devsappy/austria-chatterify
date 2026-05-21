import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import About from "@/components/About";
import { SITE } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: "Über uns — Handwerker Auftritt · Webdesign aus Deutschland & Österreich",
  description:
    "Aus Neugier entstanden, mit Sorgfalt gewachsen. Wir bauen Websites, Anwendungen und intelligente Systeme — Chatbots und Voice-Agents — für Unternehmen in Österreich und Deutschland.",
  alternates: { canonical: "/ueber-uns" },
  openGraph: {
    title: "Über uns — Handwerker Auftritt",
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

      <About />
    </PageShell>
  );
}
