import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";
import { SITE } from "@/lib/seo-data";

export const metadata: Metadata = {
  title:
    "Kontakt — Erstgespräch buchen · Handwerk · Atelier · Wien & München",
  description:
    "Direkter Kontakt zum Atelier in Wien und München. Erreichen Sie uns per E-Mail, Telefon oder buchen Sie ein 20-minütiges Erstgespräch — unverbindlich und kostenlos.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt — Handwerk · Atelier",
    description:
      "Erreichen Sie uns per E-Mail, Telefon oder buchen Sie ein 20-minütiges Erstgespräch — unverbindlich und kostenlos. Wien · München.",
    url: `${SITE.url}/kontakt`,
  },
};

export default function KontaktPage() {
  return (
    <PageShell>
      <Breadcrumb
        items={[
          { href: "/", label: "Start" },
          { href: "/kontakt", label: "Kontakt" },
        ]}
      />

      <Contact />
    </PageShell>
  );
}
