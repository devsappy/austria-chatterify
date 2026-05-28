export type WissenSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type WissenFAQ = { q: string; a: string };

export type WissenHowToStep = { name: string; text: string };

export type WissenArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: "Handwerk" | "Gastronomie" | "SEO" | "Recht";
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  lede: string;
  tldr: string[];
  sections: WissenSection[];
  faqs: WissenFAQ[];
  howTo?: { name: string; totalTime?: string; steps: WissenHowToStep[] };
  relatedSlugs?: string[];
  primaryAudience: string;
};

export const WISSEN_ARTICLES: WissenArticle[] = [
  {
    slug: "was-kostet-website-handwerker",
    title:
      "Was kostet eine Website für Handwerker 2026? Realistische Preise & versteckte Kosten",
    metaTitle:
      "Was kostet eine Website für Handwerker 2026? Preise & Kostenfallen",
    metaDescription:
      "Realistische Preise für eine Handwerker-Website 2026: Einmalige Kosten, laufende Gebühren, versteckte Posten. Plus Vergleich Baukasten vs. Agentur vs. Freelancer.",
    category: "Handwerk",
    tags: [
      "Website für Handwerker",
      "Kosten",
      "Preise 2026",
      "Webdesign Agentur",
      "Baukasten",
    ],
    publishedAt: "2026-05-29",
    updatedAt: "2026-05-29",
    readingMinutes: 9,
    primaryAudience:
      "Inhaber von Handwerksbetrieben (Installateur, Elektriker, Dachdecker, Maler, Tischler) in Deutschland und Österreich",
    lede: "Eine professionelle Website für Handwerker kostet 2026 zwischen 1.800 € und 9.500 € einmalig — je nach Funktionsumfang, Anbieter und Region. Hinzu kommen 12 € bis 80 € pro Monat für Hosting, Domain und Wartung. Wer billiger startet, zahlt am Ende meist drauf: durch verlorene Anfragen, fehlende Online-Terminbuchung und mangelnde lokale Sichtbarkeit.",
    tldr: [
      "Baukasten (Wix, Jimdo): 12–30 €/Monat. Funktioniert, sieht aber selten überzeugend aus und konvertiert schwach.",
      "Freelancer: 1.200–3.500 € einmalig. Qualität schwankt stark; Wartung oft unsicher.",
      "Agentur mit Handwerker-Fokus: 2.800–9.500 € einmalig. Lead-orientiert, mit Buchung, Formular und lokalem SEO.",
      "Laufende Kosten: 12–80 €/Monat (Hosting + Domain + Wartung).",
      "Versteckte Kosten: Texterstellung, Fotos, DSGVO-Anpassung, Logo, Buchungstool — schnell weitere 800–2.500 €.",
    ],
    sections: [
      {
        heading: "Die drei realistischen Preisstufen 2026",
        paragraphs: [
          "Der Preis einer Handwerker-Website hängt nicht primär von der Optik ab, sondern davon, ob sie als reines Schaufenster oder als Lead-Maschine konzipiert ist. Drei Stufen dominieren den Markt:",
        ],
        bullets: [
          "Stufe 1 — Baukasten (selbst gebaut): 12–30 € pro Monat. Wix, Jimdo, Squarespace. Einstieg in 1–2 Wochenenden, aber selten ein professionelles Ergebnis. Häufige Schwächen: schlechte Performance auf 4G, generische Templates, unklare Anfragepfade.",
          "Stufe 2 — Freelancer (einmaliger Auftrag): 1.200–3.500 € einmalig. Individueller als ein Baukasten, aber Qualität und Verlässlichkeit schwanken stark. Nach Launch ist Wartung oft offen.",
          "Stufe 3 — Spezialisierte Agentur: 2.800–9.500 € einmalig plus 30–80 €/Monat Betreuung. Beinhaltet Strategie, Texte, Fotos, lokales SEO, Online-Terminbuchung, Anfrageformular und DSGVO-Setup. Lead-orientiert konzipiert.",
        ],
      },
      {
        heading: "Was treibt den Preis hoch — und was nicht?",
        paragraphs: [
          "Drei Faktoren erklären 80 % der Preisunterschiede: Funktionsumfang, Texte/Fotos und lokales SEO. Optische Komplexität spielt eine kleinere Rolle, als die meisten denken.",
        ],
        bullets: [
          "Online-Terminbuchung integriert (Calendly, SimplyBook, eigenes Tool): +400–1.200 €",
          "Vorqualifizierendes Anfrageformular mit Foto-Upload und Routing: +300–800 €",
          "Lokales SEO inkl. Google Business Profile, 5–10 Leistungsseiten pro Stadt: +600–2.500 €",
          "Texte (vom Profi): +800–2.000 €",
          "Fotograf vor Ort (halber Tag): +400–900 €",
          "DSGVO-konformes Setup (Consent-Banner, Datenschutz, Auftragsverarbeitung): +200–500 €",
          "Mehrsprachigkeit (DE/EN): +600–1.500 €",
        ],
      },
      {
        heading: "Laufende Kosten ehrlich kalkuliert",
        paragraphs: [
          "Nach dem Launch fallen monatliche Kosten an, die viele Anbieter im Erstangebot kleinrechnen. Realistische Werte für 2026:",
        ],
        bullets: [
          "Domain (.de, .at): 10–18 €/Jahr",
          "Hosting bei EU-Anbieter (DSGVO-konform, Frankfurt/Wien): 6–25 €/Monat",
          "Wartung & Updates (Patches, Backup, SSL): 0–60 €/Monat",
          "Buchungstool: 0–30 €/Monat (je nach Volumen)",
          "Google-Business-Pflege: in Eigenregie 0 €, betreut 50–150 €/Monat",
        ],
      },
      {
        heading: "Versteckte Kosten — die typischen Überraschungen",
        bullets: [
          "Logo oder Visual Refresh, falls keine professionellen Vorlagen vorhanden sind: 250–800 €",
          "Bildrechte (Stockfotos), wenn keine eigenen Fotos verfügbar: 80–300 € Einmalkauf",
          "Impressum & Datenschutz vom Anwalt (vor allem in AT/DE bei Buchungsfunktionen): 150–400 €",
          "Erweiterungen 6 Monate nach Launch (zusätzliche Leistungsseiten, Blog): 80–150 €/Stunde",
          "Migration der bestehenden Domain (E-Mail, alte Inhalte): 100–400 €",
        ],
      },
      {
        heading: "Was lohnt sich für welchen Betrieb?",
        paragraphs: [
          "Faustregel: Wer regelmäßig auf Online-Anfragen angewiesen ist, sollte mindestens Stufe 2 wählen. Wer nur 'da sein' möchte (Visitenkarten-Charakter), kann mit Stufe 1 starten — verschenkt aber langfristig Anfragen.",
        ],
        bullets: [
          "Einzelmeister, regional gesättigte Nachfrage: Stufe 1 reicht oft.",
          "Betriebe mit 2–10 Mitarbeitern, wachsende Kapazität: Stufe 2–3 amortisiert sich meist binnen 3–6 Monaten.",
          "Betriebe mit Notdienst, Mehrstandort, Mehrsprachigkeit: Stufe 3 ist Pflicht.",
        ],
      },
    ],
    faqs: [
      {
        q: "Was ist eine realistische Untergrenze für eine seriöse Handwerker-Website?",
        a: "Unterhalb von 1.500 € einmalig wird es schwierig, mehr als einen verbesserten Baukasten zu bekommen. Wer eine echte Lead-orientierte Seite mit Buchung, Formular und lokalem SEO möchte, sollte mindestens 2.500–3.500 € einplanen — sonst werden wichtige Komponenten weggelassen.",
      },
      {
        q: "Sind Wix oder Jimdo wirklich so viel schlechter?",
        a: "Nicht generell, aber für Handwerker meist suboptimal. Baukästen liefern selten gute Core Web Vitals (Ladezeit auf 4G), die Templates wirken austauschbar, und Conversion-Elemente wie Foto-Upload oder strukturiertes Routing sind oft umständlich. Für reine Visitenkarten-Funktion reichen sie — für aktiven Lead-Gewinn nicht.",
      },
      {
        q: "Wie schnell amortisiert sich eine 4.500-€-Website?",
        a: "Bei einem durchschnittlichen Auftragswert von 800 € im Sanitärbereich genügen etwa 6 zusätzliche Aufträge pro Jahr, um die Investition zu refinanzieren. Betriebe mit Online-Terminbuchung berichten häufig von 2–6 zusätzlichen qualifizierten Anfragen pro Woche — Amortisation also typischerweise in 3–6 Monaten.",
      },
      {
        q: "Kostet eine Website in Österreich anders als in Deutschland?",
        a: "Strukturell ähnlich. Die Preisniveaus liegen in beiden Ländern in der gleichen Spanne. Unterschiede gibt es bei Rechnungslegung (UID in AT, §13b UStG bei DE-Kunden) und einzelnen DSGVO-Detailauslegungen, nicht aber bei den eigentlichen Entwicklungskosten.",
      },
      {
        q: "Gibt es Förderungen für eine neue Website?",
        a: "Ja. In Deutschland: Digital-Jetzt-Förderung (bis 50 % Zuschuss), je nach Bundesland Programme wie Digitalbonus Bayern oder NRW.Digital. In Österreich: KMU.Digital, AWS Digitalisierungsförderung. Bedingungen variieren — beim Erstgespräch klären, ob ein Antrag möglich ist.",
      },
      {
        q: "Kann ich Texte und Fotos selbst liefern, um zu sparen?",
        a: "Ja, das spart oft 800–2.500 €. Wichtig sind authentische Vor-Ort-Fotos (eigene Baustellen, Team in Arbeitskleidung, fertige Projekte) und Texte, die konkret bleiben — keine Hochglanz-Floskeln. Wir formatieren und optimieren bestehende Inhalte ohne Aufpreis.",
      },
      {
        q: "Was passiert nach dem Launch?",
        a: "Sie erhalten alle Zugänge (Domain, Hosting, CMS) und können jederzeit selbst Inhalte pflegen oder den Anbieter wechseln. Optional bieten wir Wartungspakete (Updates, Backups, kleine Änderungen) ab 30 €/Monat — kündbar.",
      },
    ],
    relatedSlugs: [
      "online-terminbuchung-handwerker",
      "google-business-handwerker",
      "dsgvo-handwerker-website",
    ],
  },

  {
    slug: "online-terminbuchung-handwerker",
    title:
      "Online-Terminbuchung für Handwerker: 7 Tools im Vergleich (2026)",
    metaTitle:
      "Online-Terminbuchung für Handwerker: 7 Tools im Vergleich 2026",
    metaDescription:
      "Welches Online-Terminbuchungs-Tool passt für Installateure, Elektriker oder Dachdecker? Vergleich von Calendly, SimplyBook, TIDYCAL, Cituro, etermin und mehr — mit Preisen und Praxistipps.",
    category: "Handwerk",
    tags: [
      "Online-Terminbuchung",
      "Handwerker",
      "Tools",
      "Calendly",
      "Cituro",
    ],
    publishedAt: "2026-05-29",
    updatedAt: "2026-05-29",
    readingMinutes: 8,
    primaryAudience:
      "Handwerksbetriebe in DACH, die Online-Buchung einführen wollen",
    lede: "Eine integrierte Online-Terminbuchung erhöht die Conversion-Rate auf Handwerker-Websites typischerweise um 20–45 %. Welches Tool das richtige ist, hängt von drei Faktoren ab: Notdienst ja/nein, Mehrere-Monteure-Logik und gewünschte Tiefe der Integration. Hier die 7 Tools, die im DACH-Raum aktuell relevant sind — mit ehrlichem Vergleich.",
    tldr: [
      "Calendly: einfachste Bedienung, gut für Einzelmeister oder Beratungstermine. Ab 0 €/Monat.",
      "Cituro: deutscher Anbieter, DSGVO-Standard, gute Branchen-Templates. Ab 19,90 €/Monat.",
      "etermin: ebenfalls deutsch, sehr flexibel, mehrere Standorte und Mitarbeiter. Ab 19 €/Monat.",
      "SimplyBook.me: viele Funktionen (SMS, Marketing), englischsprachig dominiert. Ab 9,90 €/Monat.",
      "TIDYCAL: günstige Calendly-Alternative für kleine Betriebe. Einmalzahlung ab 39 $.",
      "Acuity Scheduling (Squarespace): mächtig, aber englischsprachig. Ab 16 $/Monat.",
      "Eigene Integration (z. B. via API in die Website): höchster Aufwand, beste UX. Nur ab Stufe-3-Budget.",
    ],
    sections: [
      {
        heading: "Warum Online-Terminbuchung für Handwerker funktioniert",
        paragraphs: [
          "Der typische Anfragepfad eines Handwerker-Kunden 2026: Google-Suche → Klick auf Website → Anruf oder Formular. Der Anruf scheitert in 30–50 % der Fälle, weil das Telefon besetzt ist oder der Handwerker auf der Baustelle. Ein Online-Slot löst genau diesen Engpass.",
          "Was viele unterschätzen: Selbst Notdienste profitieren. Eine 'Notfall jetzt buchen'-Option mit klarer Aufpreis-Anzeige reduziert verlorene Aufträge erheblich — der Kunde commitet sich sofort, statt zwei weitere Anbieter anzurufen.",
        ],
      },
      {
        heading: "Die 3 Kriterien, an denen die Tool-Wahl scheitert",
        bullets: [
          "Notdienst-Logik: Kann das Tool 'sofort verfügbar' anders behandeln als 'normaler Werktagstermin'? Cituro, etermin und eine Custom-Integration ja — Calendly nur über Workarounds.",
          "Mehrere Monteure mit unterschiedlichen Skills: Wenn nur Meister X die Heizung warten darf, muss das Tool das abbilden. Cituro und etermin glänzen hier; Calendly und TIDYCAL sind zu einfach.",
          "Anfahrtspuffer: Kann das Tool zwischen Terminen automatisch 30 Min Anfahrt einplanen? Acuity, Cituro, etermin: ja. Calendly: nur grob.",
        ],
      },
      {
        heading: "Tool-für-Tool im Vergleich",
        paragraphs: [
          "Die Empfehlung hängt vom Setup ab — hier die ehrliche Einordnung:",
        ],
        bullets: [
          "Calendly (€ — €€): Bester Einstieg, weltweit Standard. Stark für Beratungs- oder Vor-Ort-Termin-Slots ohne Komplexität. Schwach bei Notdienst und Mehrteam-Logik.",
          "Cituro (€€): Deutscher Marktführer für Termin-Buchungen im Handwerk und Dienstleistung. DSGVO-konform, gute Integration in Website per Widget, branchenspezifische Voreinstellungen.",
          "etermin (€€): Ebenfalls deutsch, sehr flexibel, mehrere Standorte/Mitarbeiter sauber lösbar. UI etwas dichter, dafür mehr Möglichkeiten.",
          "SimplyBook.me (€ — €€€): Riesiger Funktionsumfang inkl. Marketing-Tools (SMS-Erinnerung, Loyalitätspunkte). Englisch-dominiert, aber DE-fähig.",
          "TIDYCAL (€ — Einmalzahlung): Solide Calendly-Alternative ohne monatliche Kosten. Reicht für Einzelmeister mit 1–2 Termin-Typen.",
          "Acuity Scheduling (€€): Mächtig, sehr flexibel, von Squarespace übernommen. Englisch-orientiert, in DACH selten erste Wahl.",
          "Custom-Integration in eigene Website: Maximale UX und Conversion, aber 1.500–4.000 € einmalige Investition. Sinnvoll bei hohem Anfragevolumen.",
        ],
      },
      {
        heading: "Was bei der Integration in die Website schiefgeht",
        bullets: [
          "Das Buchungs-Widget öffnet als großer Popup statt sauber eingebettet — wirkt unprofessionell und reduziert Conversion.",
          "Mobile Ansicht: Viele Tools sehen am Desktop gut aus, sind am Smartphone aber unbrauchbar. Vor Live-Schaltung auf echtem iPhone und Android testen.",
          "DSGVO-Banner blockt das Widget: Cookie-Setup so wählen, dass Buchungstools im 'funktional notwendig'-Block stehen, nicht im Marketing-Block.",
          "Keine Bestätigungsmail an den Kunden — Verbindlichkeit fehlt. Jede Buchung muss automatisch eine ICS-Datei mit Adresse, Wegbeschreibung und Kontakt anhängen.",
        ],
      },
      {
        heading: "Konkrete Empfehlung nach Betriebstyp",
        bullets: [
          "Einzelmeister, ein Termin-Typ (z. B. Erstberatung): Calendly oder TIDYCAL.",
          "Betrieb mit 2–5 Mitarbeitern, mehreren Termin-Typen: Cituro.",
          "Mehrere Standorte oder komplexe Skill-Logik: etermin oder Custom-Lösung.",
          "Mit Notdienst und 24/7-Erreichbarkeitsanspruch: Cituro mit Notdienst-Modul oder Custom-Integration.",
        ],
      },
    ],
    faqs: [
      {
        q: "Brauchen Handwerker wirklich Online-Terminbuchung?",
        a: "Ja, sobald regelmäßig mehr Anfragen kommen als ein einzelner Telefonkanal verarbeiten kann. Studien aus dem DACH-Raum zeigen 20–45 % höhere Conversion auf Websites mit eingebetteter Buchung gegenüber reinem Telefon-CTA — vor allem im Abend- und Wochenendverkehr.",
      },
      {
        q: "Was kostet ein gutes Buchungstool monatlich?",
        a: "Solide Lösungen für Handwerksbetriebe starten bei 9–20 € pro Monat (Calendly Standard, Cituro Basis, TIDYCAL Lifetime). Für Mehrteam-Setups mit Skill-Logik realistisch 30–80 €/Monat (Cituro Pro, etermin Premium, SimplyBook Premium).",
      },
      {
        q: "Funktioniert Online-Buchung auch für Notdienste?",
        a: "Ja — wenn das Tool 'sofort verfügbar'-Slots anders behandelt als reguläre Termine und Aufpreise transparent anzeigt. Cituro und etermin lösen das nativ, bei Calendly mit Workarounds. Wichtig: Notdienst-Tarife im Buchungsschritt sichtbar machen, sonst entstehen Konflikte.",
      },
      {
        q: "Kann der Kunde Termine selbst verschieben?",
        a: "Bei den meisten Tools ja — bis X Stunden vor Termin. Sinnvoll: 24 Stunden vor Termin Sperre setzen, sonst entstehen Lücken im Tagesplan. Stornogebühren lassen sich konfigurieren, sind im Handwerk aber unüblich.",
      },
      {
        q: "Wie sehe ich den Termin in meinem Kalender?",
        a: "Alle aufgeführten Tools synchronisieren mit Google Calendar, Outlook und Apple Calendar. Termine erscheinen automatisch in beide Richtungen. Auf der Baustelle reicht ein Smartphone-Blick auf den Kalender.",
      },
      {
        q: "Was passiert mit DSGVO und IP-Adressen?",
        a: "Cituro und etermin haben Serverstandort EU und liefern direkt einen Auftragsverarbeitungsvertrag (AVV) — empfohlene Standardwahl in DACH. Calendly und SimplyBook hosten primär US/EU; bei Nutzung muss ein AVV abgeschlossen und im Datenschutz aufgeführt werden.",
      },
      {
        q: "Lohnt sich eine Eigenentwicklung statt einem fertigen Tool?",
        a: "Nur bei >100 Buchungen/Monat oder hochspezifischer Logik (mehrere Filialen, komplexe Skill-Matrix, Branchen-Custom). Sonst spart das fertige Tool über 12 Monate gerechnet meist 60–80 % der Kosten gegenüber einer Custom-Lösung.",
      },
    ],
    relatedSlugs: [
      "was-kostet-website-handwerker",
      "google-business-handwerker",
    ],
  },

  {
    slug: "google-business-handwerker",
    title:
      "Google Business Profile für Handwerker einrichten: Schritt-für-Schritt-Anleitung",
    metaTitle:
      "Google Business Profile für Handwerker: Anleitung 2026 (Schritt für Schritt)",
    metaDescription:
      "Google Business Profile für Handwerker einrichten — komplette Anleitung mit Kategoriewahl, Service-Bereich, Fotos, Bewertungen und FAQ. Inkl. lokales SEO und häufige Fehler.",
    category: "SEO",
    tags: [
      "Google Business Profile",
      "Lokales SEO",
      "Handwerker",
      "Bewertungen",
      "Google Maps",
    ],
    publishedAt: "2026-05-29",
    updatedAt: "2026-05-29",
    readingMinutes: 11,
    primaryAudience:
      "Handwerksbetriebe in DACH, die in Google Maps und lokalen Suchen sichtbar werden wollen",
    lede: "Über 70 % aller lokalen Handwerker-Anfragen starten in Google Maps oder einer 'in meiner Nähe'-Suche. Wer dort nicht steht, existiert für den Kunden nicht. Ein vollständig eingerichtetes Google Business Profile (GBP) ist die einzige kostenlose Maßnahme, die diesen Effekt direkt erzeugt — und gleichzeitig die wichtigste Quelle für AI-Engines wie ChatGPT und Perplexity, die lokale Empfehlungen aussprechen.",
    tldr: [
      "GBP ist kostenlos und wichtiger als jede SEO-Maßnahme auf der eigenen Website.",
      "Kategorien richtig wählen: eine Haupt- plus 2–4 Nebenkategorien (z. B. 'Installateur' + 'Heizungsbauer' + 'Sanitärinstallation').",
      "Service-Bereich statt Adresse, wenn Sie zum Kunden fahren — kein Schaufenster nötig.",
      "Mindestens 25 echte Bewertungen sind die Schwelle, ab der GBP konsistent in den Top 3 ranken kann.",
      "Wöchentlich ein Foto, monatlich ein Post — Google misst Aktivität als Ranking-Signal.",
      "GBP-FAQ pflegen: AI-Engines ziehen Antworten direkt aus diesem Block.",
    ],
    sections: [
      {
        heading: "Warum GBP der wichtigste Hebel ist",
        paragraphs: [
          "Eine Google-Suche nach 'Installateur in 1070 Wien' zeigt heute vor den klassischen Treffern eine Karte mit drei Local-Pack-Ergebnissen. Wer dort nicht erscheint, bekommt 70 % weniger Sichtbarkeit als die ersten drei Einträge — unabhängig davon, wie gut die eigene Website ist.",
          "GBP ist außerdem die wichtigste Datenquelle für AI-Engines (ChatGPT-Search, Perplexity, Google AI Overviews) bei lokalen Fragen wie 'Welcher Installateur in Wien hat gute Bewertungen?'. Ohne GBP gibt es schlicht keine Antwortgrundlage.",
        ],
      },
      {
        heading: "Die häufigsten Einrichtungsfehler",
        bullets: [
          "Nur eine Kategorie gewählt: Verschenkt 40–60 % der Sichtbarkeit. Immer Hauptkategorie + 2–4 Nebenkategorien angeben (z. B. Installateur + Heizungsbauer + Sanitärinstallation + Notdienst).",
          "Adresse statt Service-Bereich angegeben: Wer keine Laufkundschaft hat, sollte 'Service-Bereich' wählen. Eine Privatadresse als Geschäftsadresse senkt Vertrauen und kann gesperrt werden.",
          "Öffnungszeiten nicht aktuell: Falsche Feiertagszeiten kosten messbar Anrufe. GBP markiert Einträge sogar als 'möglicherweise geschlossen', wenn nicht gepflegt.",
          "Keine Beschreibung: Die 750-Zeichen-Beschreibung ist ein Ranking-Faktor. Konkrete Leistungen, Region, Alleinstellungsmerkmal hineinschreiben.",
          "Profilbild = Logo auf weißem Hintergrund: besser ein Foto vom Team in Arbeitskleidung oder vom Firmenwagen vor Ort.",
        ],
      },
      {
        heading: "Bewertungen — der eigentliche Hebel",
        paragraphs: [
          "Die Quantität, Qualität und Frequenz der Bewertungen ist der stärkste Ranking-Faktor in GBP. Ein Profil mit 60 Bewertungen und Durchschnitt 4,7 schlägt nahezu jedes Konkurrenzprofil mit 12 Bewertungen, selbst wenn dieses 5,0 hat.",
        ],
        bullets: [
          "Ziel-Schwelle: 25+ Bewertungen, danach mindestens 1–2 neue pro Monat.",
          "Fragetechnik: 24 Stunden nach Auftragsabschluss per WhatsApp oder SMS einen direkten Link zur Bewertung schicken. Konversion 30–50 %.",
          "Antworten auf jede Bewertung (auch positive). Antwortrate ist ein Ranking-Signal.",
          "Negative Bewertungen nie ignorieren — professionell, lösungsorientiert antworten. Eine gut beantwortete negative Bewertung wirkt manchmal vertrauensbildender als eine 5-Sterne-Bewertung.",
          "Niemals Bewertungen kaufen oder Familie/Mitarbeiter bewerten lassen — Google erkennt das mit hoher Trefferquote und sperrt Profile.",
        ],
      },
      {
        heading: "Posts, Fotos und Updates — Aktivitätssignale",
        bullets: [
          "Wöchentlich mindestens ein Foto hochladen: fertige Projekte, Team-Schnappschüsse, Vorher/Nachher. Geo-Tagging der Fotos boostet lokale Sichtbarkeit.",
          "Monatlich ein Post (Angebot, Neuigkeit, Hinweis). Posts laufen 7 Tage und verschwinden — gehen aber in den Ranking-Algorithmus ein.",
          "Q&A-Sektion aktiv pflegen: Selbst Fragen einstellen ('Bieten Sie Notdienst an?') und sofort beantworten. Diese Q&A-Antworten werden 2026 zunehmend von AI-Engines zitiert.",
        ],
      },
      {
        heading: "GBP und Ihre Website verbinden",
        paragraphs: [
          "Die größte versteckte Optimierung ist die Konsistenz zwischen GBP und Website. Drei Punkte machen den Unterschied:",
        ],
        bullets: [
          "NAP-Konsistenz: Name, Adresse, Telefon (falls vorhanden) müssen 1:1 identisch sein. Kein 'Str.' vs. 'Straße'.",
          "LocalBusiness-Schema auf der Website mit identischen Daten wie GBP. AI-Engines vertrauen dieser Schema-Verifikation.",
          "GBP-Standort verlinken auf die Stadtseite (z. B. /regionen/wien) — nicht auf die Homepage.",
        ],
      },
    ],
    howTo: {
      name: "Google Business Profile als Handwerker einrichten",
      totalTime: "PT45M",
      steps: [
        {
          name: "Konto anlegen oder beanspruchen",
          text: "Unter google.com/business mit Geschäfts-Gmail anmelden. Falls der Betrieb schon existiert (z. B. von einem Kunden eingetragen): beanspruchen und verifizieren.",
        },
        {
          name: "Verifizierung durchführen",
          text: "Verifizierung erfolgt per Postkarte (5–10 Tage), Video-Call oder Anruf. Postkarte ist Standard — Adresse muss exakt stimmen, sonst wird die Karte zurückgeschickt.",
        },
        {
          name: "Hauptkategorie und Nebenkategorien wählen",
          text: "Eine präzise Hauptkategorie (z. B. 'Installateur') und 2–4 Nebenkategorien (z. B. 'Heizungsbauer', 'Sanitärinstallation', 'Notdienst'). Diese Kategorien bestimmen die Suchanfragen, für die GBP rankt.",
        },
        {
          name: "Service-Bereich definieren",
          text: "Statt 'Standort öffentlich' den Service-Bereich auf 30–50 km Umkreis oder einzelne Städte/PLZ-Bereiche setzen. Private Adresse bleibt geschützt.",
        },
        {
          name: "Beschreibung & Leistungen einpflegen",
          text: "750-Zeichen-Beschreibung schreiben — Leistungen, Region, USP. Anschließend einzelne Leistungen mit Beschreibung und Preisrahmen anlegen (mind. 6–10 Leistungen).",
        },
        {
          name: "Fotos hochladen",
          text: "Mindestens 12 Fotos zum Start: Firmenwagen, Team, fertige Projekte, Logo, Außenansicht. Auflösung >720p, Geo-Tagging aktiv.",
        },
        {
          name: "Erste Bewertungen einholen",
          text: "Bestandskunden der letzten 6 Monate kontaktieren, GBP-Link per WhatsApp oder E-Mail teilen. Ziel: 10 Bewertungen in den ersten 4 Wochen.",
        },
        {
          name: "Wöchentliche Pflege etablieren",
          text: "Fixer Termin im Kalender: 15 Minuten pro Woche für Foto, Antworten auf Bewertungen, Post-Update.",
        },
      ],
    },
    faqs: [
      {
        q: "Kostet ein Google Business Profile etwas?",
        a: "Nein, GBP ist komplett kostenfrei. Bezahlte Add-ons wie Google Ads oder das Bewertungs-Widget sind optional, für die Grundoptimierung aber nicht nötig.",
      },
      {
        q: "Muss ich eine Geschäftsadresse haben?",
        a: "Nein. Wer zu Kunden fährt (typisch im Handwerk), wählt 'Service-Bereich' statt 'Standort'. Die private oder Werkstattadresse bleibt dann unsichtbar, und Sie ranken trotzdem in allen Service-Städten/PLZ.",
      },
      {
        q: "Wie schnell sehe ich Ergebnisse?",
        a: "Erste Sichtbarkeit im Local Pack typischerweise nach 4–8 Wochen, sofern Profil vollständig und 10+ Bewertungen vorhanden sind. Top-3-Platzierungen für Hauptkeywords meist nach 3–6 Monaten konsistenter Pflege.",
      },
      {
        q: "Was ist wichtiger — Website-SEO oder Google Business Profile?",
        a: "Für lokale Anfragen klar GBP. Selbst eine perfekt optimierte Website rankt selten über einem gut gepflegten GBP-Eintrag mit vielen Bewertungen. Idealerweise laufen beide parallel und verstärken sich.",
      },
      {
        q: "Kann ich Bewertungen löschen lassen?",
        a: "Nur in Ausnahmefällen: bei eindeutigem Verstoß gegen Google-Richtlinien (Beleidigung, Spam, gefälschte Bewertungen). Inhaltlich negative, aber faktisch korrekte Bewertungen bleiben — dort hilft nur eine professionelle Antwort.",
      },
      {
        q: "Was bringen Google-Posts wirklich?",
        a: "Posts erhöhen die Aktivitätssignale und sind ein indirekter Rankingfaktor. Direkter Klick-Effekt ist gering (3–8 %), die Wirkung entsteht über das Ranking-Signal und über AI-Engines, die Posts in Antworten aufnehmen.",
      },
      {
        q: "Lohnt sich eine zweite GBP-Eintragung für eine zweite Stadt?",
        a: "Nur, wenn dort eine echte physische Präsenz existiert (Niederlassung, Lager, Büro). Mehrere Einträge ohne echten Standort werden von Google erkannt und führen zur Sperrung beider Profile.",
      },
    ],
    relatedSlugs: [
      "was-kostet-website-handwerker",
      "online-terminbuchung-handwerker",
      "dsgvo-handwerker-website",
    ],
  },

  {
    slug: "dsgvo-handwerker-website",
    title: "DSGVO-Checkliste für Handwerker-Websites 2026",
    metaTitle:
      "DSGVO für Handwerker-Websites 2026: Checkliste & häufige Fehler",
    metaDescription:
      "Komplette DSGVO-Checkliste für Handwerker-Websites in DE und AT: Datenschutz, Impressum, Cookies, Formulare, Hosting, Buchungstools — mit konkreten Beispielen und Risiken.",
    category: "Recht",
    tags: [
      "DSGVO",
      "Datenschutz",
      "Impressum",
      "Cookies",
      "Handwerker Website",
    ],
    publishedAt: "2026-05-29",
    updatedAt: "2026-05-29",
    readingMinutes: 9,
    primaryAudience:
      "Inhaber von Handwerksbetrieben mit eigener Website in Deutschland und Österreich",
    lede: "DSGVO-Verstöße auf Handwerker-Websites führen 2026 wieder vermehrt zu Abmahnungen — meist nicht durch Behörden, sondern durch spezialisierte Anwaltskanzleien. Streitwerte zwischen 1.500 € und 5.000 € sind Standard. Die gute Nachricht: 90 % aller Risiken lassen sich mit einer ehrlichen Checkliste in unter zwei Stunden beheben.",
    tldr: [
      "Impressum: vollständig nach §5 TMG / §63 GewO — kein Punkt fehlen lassen.",
      "Datenschutzerklärung: konkret, lesbar, alle Tools auflisten (auch Buchungs-Widget).",
      "Cookie-Banner: nur ladenrelevante Tools, klare Ablehnen-Option gleichberechtigt zur Annehmen-Option.",
      "Formulare: nur abfragen, was wirklich gebraucht wird (Datensparsamkeit).",
      "Hosting in EU (Frankfurt, Wien) und Auftragsverarbeitungsvertrag (AVV) abschließen.",
      "Google Fonts lokal einbinden — nicht über Google-CDN. Häufigster Abmahngrund 2024/25.",
      "Bei Buchungstool und Newsletter-Anbieter: AVV unterschreiben und im Datenschutz nennen.",
    ],
    sections: [
      {
        heading: "Die fünf häufigsten Abmahngründe 2024/25",
        paragraphs: [
          "Anwaltskanzleien scannen automatisiert nach diesen Schwächen. Wer sie ausschließt, ist 90 % sicher:",
        ],
        bullets: [
          "Google Fonts über CDN eingebunden (IP-Adresse geht ungefragt an Google). Lösung: Fonts lokal hosten oder Next.js next/font verwenden (automatisch lokal).",
          "Cookie-Banner ohne gleichberechtigte 'Ablehnen'-Option. Korrekt: zwei gleich große Buttons auf gleicher Höhe.",
          "Google Maps eingebunden, ohne dass der Nutzer vorher zugestimmt hat. Lösung: 2-Klick-Lösung oder Maptiler/OSM nutzen.",
          "YouTube-Videos eingebunden ohne 'No-Cookie'-Variante. Lösung: youtube-nocookie.com verwenden oder lokale Video-Datei.",
          "Kontaktformular ohne Hinweis auf Datenschutz und Speicherdauer der Daten.",
        ],
      },
      {
        heading: "Impressum — was zwingend rein muss",
        bullets: [
          "Vollständiger Name des Inhabers / Geschäftsführers (kein 'Max M.'). Bei GmbH/UG zusätzlich Handelsregister-Nummer.",
          "Vollständige Anschrift (keine Postfach-Adresse). Bei Service-Betrieben ohne Ladengeschäft: Wohn- oder Werkstattadresse zwingend.",
          "Kontakt: E-Mail-Adresse (kein Formular allein), Telefon (bei kommerzieller Tätigkeit empfohlen — nicht zwingend).",
          "Berufsbezeichnung und Kammerzugehörigkeit (Handwerkskammer, Innung). Wichtig bei reglementierten Berufen.",
          "USt-IdNr. (falls vergeben) oder Hinweis auf §19 UStG (Kleinunternehmer).",
          "Berufshaftpflicht-Versicherung mit Anschrift (bei Handwerksbetrieben dringend empfohlen).",
          "Verantwortlich für Inhalt nach §18 Abs. 2 MStV (sofern redaktionelle Inhalte vorhanden).",
          "Streitschlichtungs-Hinweis (Link zur EU-Streitschlichtungsplattform).",
        ],
      },
      {
        heading: "Datenschutzerklärung — was Sie konkret nennen müssen",
        paragraphs: [
          "Generische Datenschutz-Vorlagen reichen 2026 nicht mehr. Erforderlich ist eine konkrete, nachvollziehbare Erklärung aller Tools.",
        ],
        bullets: [
          "Welche Daten beim Aufruf der Website erhoben werden (IP, User-Agent, Referrer) — und wie lange sie gespeichert werden.",
          "Welche Cookies eingesetzt werden (Name, Anbieter, Zweck, Speicherdauer) — übersichtlich tabellarisch.",
          "Welche Drittanbieter Daten erhalten (Google Analytics, Calendly, Cituro, etc.) — Verlinkung deren Datenschutz.",
          "Rechtsgrundlage je Verarbeitungsvorgang (Art. 6 Abs. 1 lit. a/b/f DSGVO).",
          "Betroffenenrechte (Auskunft, Löschung, Widerspruch) klar erläutern, mit Kontakt zur DSGVO-Auskunft.",
          "Name und Kontakt des Datenschutzbeauftragten (falls erforderlich — Pflicht ab 20 Beschäftigten mit ständiger Datenverarbeitung).",
        ],
      },
      {
        heading: "Cookies & Tracking — 2026 strikter als 2022",
        bullets: [
          "Funktional notwendige Cookies (Session, CSRF): keine Einwilligung nötig, müssen aber in der Datenschutzerklärung erscheinen.",
          "Marketing-Cookies (Analytics, Ads, Facebook Pixel): nur nach aktiver Einwilligung laden. Pre-Check verboten.",
          "Cookie-Banner: 'Annehmen' und 'Ablehnen' gleich prominent, gleiche Schriftgröße, gleiche Hintergrundfarbe.",
          "Consent-Lösung empfohlen: Borlabs Cookie (DE), Cookiebot, klaro (Open Source). Selbstgebaut nur, wenn rechtlich abgesichert.",
        ],
      },
      {
        heading: "Hosting, Backups und Auftragsverarbeitung",
        paragraphs: [
          "EU-Hosting (Frankfurt, Wien) ist faktisch Pflicht. US-Hoster wie Cloudflare (Frontend), Vercel oder Netlify sind nutzbar, brauchen aber zusätzliche Vereinbarungen (Standardvertragsklauseln, Risiko-Folgenabschätzung).",
        ],
        bullets: [
          "AVV mit Hosting-Anbieter unterschrieben und archiviert.",
          "AVV mit Buchungstool-Anbieter (Cituro, etermin, Calendly) unterschrieben.",
          "Backups verschlüsselt, in EU gespeichert, Speicherort dokumentiert.",
          "E-Mail-Postfach beim selben EU-Anbieter wie das Hosting — sonst doppelter AVV nötig.",
        ],
      },
    ],
    faqs: [
      {
        q: "Brauche ich einen externen Datenschutzbeauftragten?",
        a: "Erst ab 20 Mitarbeitern, die ständig mit personenbezogenen Daten arbeiten. Die meisten Handwerksbetriebe liegen darunter. Trotzdem sollte ein interner Verantwortlicher benannt sein, und ein externer DSB ist bei sensiblen Datenverarbeitungen empfehlenswert (Kosten 50–150 €/Monat).",
      },
      {
        q: "Reicht eine Vorlage aus dem Internet für Impressum und Datenschutz?",
        a: "Als Startpunkt ja, aber sie muss anschließend angepasst werden. Generische Vorlagen erwähnen Tools, die Sie nicht nutzen — oder fehlen genau die, die Sie nutzen (z. B. Cituro). Eine 30-Minuten-Anpassung ist Pflicht.",
      },
      {
        q: "Was riskiere ich konkret bei einer Abmahnung?",
        a: "Typischer Aufwand: 1.500–5.000 € (Anwaltsgebühr + Unterlassungserklärung). Bei wiederholtem Verstoß kommen Vertragsstrafen hinzu. Behördliche Bußgelder sind bei kleinen Betrieben selten, theoretisch aber bis 4 % des Jahresumsatzes möglich.",
      },
      {
        q: "Muss ich Google Analytics blocken?",
        a: "Nein, aber nur nach aktiver Einwilligung laden. Alternative: Plausible Analytics oder Matomo (selbst gehostet) — beide datenschutzfreundlich und ohne Einwilligungspflicht nutzbar.",
      },
      {
        q: "Ist eine SSL-Verschlüsselung Pflicht?",
        a: "Ja. Ohne TLS/HTTPS ist eine Website mit Kontaktformular 2026 nicht rechtskonform. Let's Encrypt ist kostenlos und bei allen seriösen Hostern automatisch eingerichtet.",
      },
      {
        q: "Was gilt für Bewertungen, die ich auf der Website einblende?",
        a: "Bewertungen mit Namen dürfen Sie nur mit Einwilligung der bewertenden Person veröffentlichen. Anonymisierte Auszüge (z. B. 'F. M. aus Wien') sind in der Regel zulässig. Sicher ist: Einwilligung kurz schriftlich einholen.",
      },
      {
        q: "Brauche ich ein Cookie-Banner, wenn ich keine Cookies setze?",
        a: "Nein. Wer ausschließlich funktional notwendige Cookies setzt (z. B. Session-ID), braucht kein Banner. Sobald Analytics, Buchungstool mit US-Anbietern oder Werbe-Pixel zum Einsatz kommen, ist ein Banner Pflicht.",
      },
    ],
    relatedSlugs: [
      "was-kostet-website-handwerker",
      "google-business-handwerker",
    ],
  },

  {
    slug: "website-gastronomie-leitfaden",
    title:
      "Website für Gastronomie 2026: Reservierung, QR-Karte und was wirklich konvertiert",
    metaTitle:
      "Website für Gastronomie 2026: Reservierung, QR-Karte & Conversion-Tipps",
    metaDescription:
      "Was eine moderne Gastronomie-Website 2026 leisten muss: Online-Reservierung, digitale Speisekarte, Mobil-Optimierung, lokales SEO und Google Business. Mit Tool-Vergleich und Best Practices.",
    category: "Gastronomie",
    tags: [
      "Gastronomie Website",
      "Online-Reservierung",
      "QR-Speisekarte",
      "Restaurant Marketing",
    ],
    publishedAt: "2026-05-29",
    updatedAt: "2026-05-29",
    readingMinutes: 8,
    primaryAudience:
      "Inhaber von Cafés, Restaurants, Bars und Hotels in DACH",
    lede: "Über 80 % aller Gastro-Erstbesucher checken die Website oder Google-Profil vor dem ersten Besuch. Was sie dort finden, entscheidet über den Tisch — oder den Klick zur Konkurrenz drei Häuser weiter. Eine moderne Gastronomie-Website 2026 hat drei Aufgaben: schnell laden, sofort reservierbar sein und die Speisekarte aktuell halten. Alles andere ist Beiwerk.",
    tldr: [
      "Online-Reservierung (Quandoo, OpenTable, Resmio): Pflicht, nicht Option.",
      "Speisekarte als PDF ist 2026 ein No-Go — Tabelle direkt auf der Website, durchsuchbar und SEO-relevant.",
      "Mobile First: 75–85 % aller Klicks kommen vom Smartphone vor oder beim Lokal.",
      "Google Business Profile = wichtiger als die eigene Website. Fotos, Bewertungen, Öffnungszeiten pflegen.",
      "QR-Code zur Speisekarte am Tisch reduziert Personalaufwand, kein Ersatz für Bedienung.",
      "Kein Telefon-Bottleneck: Reservierung übers Web spart Service-Zeit in Stoßzeiten.",
    ],
    sections: [
      {
        heading: "Drei Tools entscheiden über Conversion",
        bullets: [
          "Reservierungstool: Quandoo, OpenTable, Resmio (DE/AT), Bookatable. Auswahl primär nach Provision: Quandoo/OpenTable pro Reservierung, Resmio Flatrate. Für Lokale mit hohem Reservierungsvolumen ist Resmio meist günstiger.",
          "Digitale Speisekarte: smartmenu, foodnotify oder eigene Lösung. Wichtig: ladbar auf 3G, Allergene und Veganer-Filter, klare Preisanzeige.",
          "Google Business Profile: kostenfrei, aber häufig vernachlässigt. Hier entstehen 40–60 % aller lokalen Erstkontakte.",
        ],
      },
      {
        heading: "Was eine Gastronomie-Startseite zeigen muss",
        paragraphs: [
          "Wer länger als 5 Sekunden braucht, um die wichtigste Frage zu beantworten ('Kann ich hier reservieren?'), verliert die Hälfte der Besucher. Die Reihenfolge auf der Startseite zählt:",
        ],
        bullets: [
          "Above the fold: Name, Küchen-Stil (in 2 Wörtern), Reservierungs-Button, aktuelle Öffnungszeiten.",
          "Direkt darunter: Adresse mit Karte und Anfahrt-Link.",
          "Zwei Klicks zur Speisekarte (nicht PDF, sondern HTML).",
          "Mindestens 4 echte Fotos (Innenraum, Lieblingsgericht, Außenansicht, Team).",
          "Pflicht-Section 'Bewertungen': Google-Sterne und 2–3 Kunden-Zitate.",
        ],
      },
      {
        heading: "Speisekarte: Warum PDF tötet — und was stattdessen funktioniert",
        paragraphs: [
          "PDFs werden auf Smartphones falsch dargestellt, sind nicht durchsuchbar und können von Google nicht indexiert werden. Wer Speisen in der Suche auffindbar machen möchte ('vegan Brunch München'), muss HTML-Karten haben.",
        ],
        bullets: [
          "Kategorien (Vorspeise, Hauptgang, Dessert) als HTML-Sektionen, nicht als PDF-Seiten.",
          "Allergene und Hinweise (vegan, glutenfrei) als Filter-Buttons — direkt zur Auswahl.",
          "Preise sichtbar (Verbergen senkt Conversion um 15–25 %).",
          "Tageskarte separat als 'wechselt täglich' kennzeichnen, sonst entstehen Erwartungs-Konflikte.",
          "Strukturierte Daten (Schema.org Menu) hinterlegen — Google Rich Results zeigt Gerichte direkt in der Suche.",
        ],
      },
      {
        heading: "Mobile First — die echte Pflicht",
        bullets: [
          "Ladezeit unter 2,5 Sekunden auf 4G (Core Web Vitals LCP < 2.5s).",
          "Klick-zu-Anruf-Button mindestens 44x44 px (Apple-Standard für Touch).",
          "Reservierungs-Widget muss im Hochformat funktionieren — die meisten Tools versagen hier.",
          "Speisekarte als Akkordeon, nicht als endlose Liste.",
          "Schriftgröße mindestens 16px — sonst zoomt Safari automatisch und bricht das Layout.",
        ],
      },
      {
        heading: "Lokales SEO für Restaurants",
        bullets: [
          "Stadt + Küchen-Stil im Title-Tag ('Italienisches Restaurant Wien 1070').",
          "Google Business Profile mit 50+ Fotos, wöchentlichem Post, regelmäßigen Antworten auf Bewertungen.",
          "Lokale Backlinks: Stadtmagazine (Falter, tip Berlin, Mucbook), Tourismus-Portale.",
          "Strukturierte Daten Restaurant + LocalBusiness mit Öffnungszeiten und Menüpunkten.",
        ],
      },
    ],
    faqs: [
      {
        q: "Brauchen kleine Cafés wirklich eine Online-Reservierung?",
        a: "Wenn typische Wartezeiten an Wochenenden auftreten: ja. Selbst Cafés mit Walk-in-Charakter profitieren von einer einfachen Reservierung für 4er- oder 6er-Tische. Das senkt Spannung im Service und erhöht den Umsatz pro Stoßzeit.",
      },
      {
        q: "Was kostet ein Reservierungstool monatlich?",
        a: "Resmio: ab 49 €/Monat (Flatrate). OpenTable und Quandoo: 1–2 € pro Reservierung. Für ein Café mit 30 Reservierungen/Monat ist Quandoo günstiger; für ein Restaurant mit 300 Reservierungen/Monat klar Resmio.",
      },
      {
        q: "Verliere ich Provisionen, wenn ich auf Lieferdienste verzichte?",
        a: "Nicht unbedingt. Eine eigene Bestellseite mit Pickup-Option (z. B. via Order Smart, Foodora-Direct oder eigenes Tool) spart 20–30 % Provision gegenüber Lieferando/Uber Eats. Lohnt sich ab 30 Bestellungen pro Woche.",
      },
      {
        q: "Sollte ich Instagram statt einer Website nutzen?",
        a: "Instagram ist Pflicht, ersetzt aber keine Website. Reservierung, Speisekarte und Öffnungszeiten gehören auf eine eigene Seite — Instagram dient dem Branding und der Sichtbarkeit, nicht der Conversion.",
      },
      {
        q: "Wie viele Fotos sollte ich auf der Website haben?",
        a: "Mindestens 6 hochwertige: 2 vom Lokal innen, 2 von typischen Gerichten, 1 Außenansicht, 1 Team-Foto. Stockfotos vermeiden — Gäste erkennen sie und verlieren Vertrauen.",
      },
      {
        q: "Brauche ich eine Mehrsprachigkeit der Website?",
        a: "In Tourismus-Hochburgen (Wien, Salzburg, München, Berlin, Hamburg) Englisch zwingend. Italienisch und Französisch bei entsprechender Klientel. Übersetzung der Speisekarte ist wichtiger als die der Über-uns-Seite.",
      },
      {
        q: "Was bringt ein QR-Code zur Speisekarte am Tisch?",
        a: "Reduziert Personalkosten und Druckkosten, erhöht aber nicht den Umsatz. Sinnvoll vor allem in der Mittagszeit oder bei häufig wechselnden Karten. Wichtig: Im Restaurant sollte trotzdem eine gedruckte Karte verfügbar sein für Gäste, die kein Smartphone nutzen möchten.",
      },
    ],
    relatedSlugs: [
      "was-kostet-website-handwerker",
      "google-business-handwerker",
      "dsgvo-handwerker-website",
    ],
  },
];

export function getWissenArticle(slug: string): WissenArticle | undefined {
  return WISSEN_ARTICLES.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string): WissenArticle[] {
  const article = getWissenArticle(slug);
  if (!article?.relatedSlugs) return [];
  return article.relatedSlugs
    .map((s) => getWissenArticle(s))
    .filter((a): a is WissenArticle => Boolean(a));
}
