import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";
import { SITE } from "@/lib/seo-data";

export const metadata: Metadata = {
  title:
    "Kontakt — Erstgespräch buchen · Handwerker Auftritt · München & Wien",
  description:
    "Direkter Kontakt zu Handwerker Auftritt in München und Wien. Erreichen Sie uns per E-Mail, Telefon oder buchen Sie ein 20-minütiges Erstgespräch — unverbindlich und kostenlos.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt — Handwerker Auftritt",
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
