export const SITE = {
  name: "Handwerk · Atelier",
  brand: "Handwerk Atelier",
  url: "https://handwerk-atelier.eu",
  email: "hallo@handwerk-atelier.eu",
  phoneAT: "+43 1 234 5678",
  phoneDE: "+49 89 123 456",
  locale: "de-AT",
  headline:
    "Webdesign & Webentwicklung für lokale Betriebe in Österreich und Deutschland",
  tagline:
    "Websites für Handwerker, Gastronomen und Dienstleister — individuell, schnell, DSGVO-konform, in der EU gehostet.",
  addressAT: {
    street: "Neubaugasse 12",
    postalCode: "1070",
    city: "Wien",
    region: "Wien",
    country: "AT",
    lat: 48.2001,
    lon: 16.3503,
  },
  addressDE: {
    street: "Maximilianstraße 28",
    postalCode: "80539",
    city: "München",
    region: "Bayern",
    country: "DE",
    lat: 48.1393,
    lon: 11.5802,
  },
} as const;

export type Country = "AT" | "DE";

export type City = {
  slug: string;
  name: string;
  country: Country;
  region: string; // Bundesland
  postalPrefix: string;
  lat: number;
  lon: number;
  keywords: string[];
};

export const CITIES: City[] = [
  // ——— Österreich ———
  { slug: "wien", name: "Wien", country: "AT", region: "Wien", postalPrefix: "10", lat: 48.2082, lon: 16.3738,
    keywords: ["Wien", "1010 Wien", "Bezirk Wien", "Wiener Umland"] },
  { slug: "graz", name: "Graz", country: "AT", region: "Steiermark", postalPrefix: "80", lat: 47.0707, lon: 15.4395,
    keywords: ["Graz", "Graz-Umgebung", "Steiermark"] },
  { slug: "linz", name: "Linz", country: "AT", region: "Oberösterreich", postalPrefix: "40", lat: 48.3069, lon: 14.2858,
    keywords: ["Linz", "Linz-Land", "Oberösterreich"] },
  { slug: "salzburg", name: "Salzburg", country: "AT", region: "Salzburg", postalPrefix: "50", lat: 47.8095, lon: 13.0550,
    keywords: ["Salzburg", "Salzburg-Umgebung", "Flachgau"] },
  { slug: "innsbruck", name: "Innsbruck", country: "AT", region: "Tirol", postalPrefix: "60", lat: 47.2692, lon: 11.4041,
    keywords: ["Innsbruck", "Innsbruck-Land", "Tirol"] },
  { slug: "klagenfurt", name: "Klagenfurt", country: "AT", region: "Kärnten", postalPrefix: "90", lat: 46.6247, lon: 14.3053,
    keywords: ["Klagenfurt", "Klagenfurt am Wörthersee", "Kärnten"] },
  { slug: "villach", name: "Villach", country: "AT", region: "Kärnten", postalPrefix: "95", lat: 46.6103, lon: 13.8558,
    keywords: ["Villach", "Kärnten"] },
  { slug: "wels", name: "Wels", country: "AT", region: "Oberösterreich", postalPrefix: "46", lat: 48.1575, lon: 14.0289,
    keywords: ["Wels", "Oberösterreich"] },
  { slug: "st-poelten", name: "St. Pölten", country: "AT", region: "Niederösterreich", postalPrefix: "31", lat: 48.2047, lon: 15.6256,
    keywords: ["St. Pölten", "Niederösterreich"] },
  { slug: "dornbirn", name: "Dornbirn", country: "AT", region: "Vorarlberg", postalPrefix: "68", lat: 47.4125, lon: 9.7414,
    keywords: ["Dornbirn", "Vorarlberg", "Bodensee"] },
  { slug: "bregenz", name: "Bregenz", country: "AT", region: "Vorarlberg", postalPrefix: "69", lat: 47.5031, lon: 9.7471,
    keywords: ["Bregenz", "Vorarlberg", "Bodensee"] },
  { slug: "eisenstadt", name: "Eisenstadt", country: "AT", region: "Burgenland", postalPrefix: "70", lat: 47.8456, lon: 16.5236,
    keywords: ["Eisenstadt", "Burgenland"] },
  { slug: "leoben", name: "Leoben", country: "AT", region: "Steiermark", postalPrefix: "87", lat: 47.3803, lon: 15.0934,
    keywords: ["Leoben", "Obersteiermark"] },
  { slug: "krems", name: "Krems", country: "AT", region: "Niederösterreich", postalPrefix: "35", lat: 48.4097, lon: 15.6000,
    keywords: ["Krems an der Donau", "Wachau"] },
  { slug: "wiener-neustadt", name: "Wiener Neustadt", country: "AT", region: "Niederösterreich", postalPrefix: "27", lat: 47.8142, lon: 16.2428,
    keywords: ["Wiener Neustadt", "Niederösterreich"] },
  { slug: "steyr", name: "Steyr", country: "AT", region: "Oberösterreich", postalPrefix: "44", lat: 48.0416, lon: 14.4196,
    keywords: ["Steyr", "Oberösterreich"] },
  { slug: "feldkirch", name: "Feldkirch", country: "AT", region: "Vorarlberg", postalPrefix: "68", lat: 47.2378, lon: 9.6000,
    keywords: ["Feldkirch", "Vorarlberg"] },
  { slug: "kufstein", name: "Kufstein", country: "AT", region: "Tirol", postalPrefix: "63", lat: 47.5833, lon: 12.1667,
    keywords: ["Kufstein", "Tirol"] },
  { slug: "baden", name: "Baden bei Wien", country: "AT", region: "Niederösterreich", postalPrefix: "25", lat: 48.0078, lon: 16.2317,
    keywords: ["Baden bei Wien", "Niederösterreich"] },
  { slug: "moedling", name: "Mödling", country: "AT", region: "Niederösterreich", postalPrefix: "23", lat: 48.0864, lon: 16.2892,
    keywords: ["Mödling", "Niederösterreich"] },

  // ——— Deutschland ———
  { slug: "muenchen", name: "München", country: "DE", region: "Bayern", postalPrefix: "80", lat: 48.1351, lon: 11.5820,
    keywords: ["München", "Muenchen", "Oberbayern"] },
  { slug: "berlin", name: "Berlin", country: "DE", region: "Berlin", postalPrefix: "10", lat: 52.5200, lon: 13.4050,
    keywords: ["Berlin", "Berlin-Mitte", "Berlin-Brandenburg"] },
  { slug: "hamburg", name: "Hamburg", country: "DE", region: "Hamburg", postalPrefix: "20", lat: 53.5511, lon: 9.9937,
    keywords: ["Hamburg", "Hansestadt Hamburg"] },
  { slug: "frankfurt", name: "Frankfurt am Main", country: "DE", region: "Hessen", postalPrefix: "60", lat: 50.1109, lon: 8.6821,
    keywords: ["Frankfurt am Main", "Rhein-Main"] },
  { slug: "koeln", name: "Köln", country: "DE", region: "Nordrhein-Westfalen", postalPrefix: "50", lat: 50.9375, lon: 6.9603,
    keywords: ["Köln", "Koeln", "Rheinland"] },
  { slug: "stuttgart", name: "Stuttgart", country: "DE", region: "Baden-Württemberg", postalPrefix: "70", lat: 48.7758, lon: 9.1829,
    keywords: ["Stuttgart", "Baden-Württemberg"] },
  { slug: "duesseldorf", name: "Düsseldorf", country: "DE", region: "Nordrhein-Westfalen", postalPrefix: "40", lat: 51.2277, lon: 6.7735,
    keywords: ["Düsseldorf", "Duesseldorf", "Rheinland"] },
  { slug: "leipzig", name: "Leipzig", country: "DE", region: "Sachsen", postalPrefix: "04", lat: 51.3397, lon: 12.3731,
    keywords: ["Leipzig", "Sachsen"] },
  { slug: "dresden", name: "Dresden", country: "DE", region: "Sachsen", postalPrefix: "01", lat: 51.0504, lon: 13.7373,
    keywords: ["Dresden", "Sachsen"] },
  { slug: "nuernberg", name: "Nürnberg", country: "DE", region: "Bayern", postalPrefix: "90", lat: 49.4521, lon: 11.0767,
    keywords: ["Nürnberg", "Nuernberg", "Mittelfranken"] },
  { slug: "hannover", name: "Hannover", country: "DE", region: "Niedersachsen", postalPrefix: "30", lat: 52.3759, lon: 9.7320,
    keywords: ["Hannover", "Niedersachsen"] },
  { slug: "bremen", name: "Bremen", country: "DE", region: "Bremen", postalPrefix: "28", lat: 53.0793, lon: 8.8017,
    keywords: ["Bremen", "Hansestadt Bremen"] },
  { slug: "augsburg", name: "Augsburg", country: "DE", region: "Bayern", postalPrefix: "86", lat: 48.3705, lon: 10.8978,
    keywords: ["Augsburg", "Schwaben"] },
  { slug: "regensburg", name: "Regensburg", country: "DE", region: "Bayern", postalPrefix: "93", lat: 49.0134, lon: 12.1016,
    keywords: ["Regensburg", "Oberpfalz"] },
  { slug: "wuerzburg", name: "Würzburg", country: "DE", region: "Bayern", postalPrefix: "97", lat: 49.7913, lon: 9.9534,
    keywords: ["Würzburg", "Wuerzburg", "Unterfranken"] },
  { slug: "ingolstadt", name: "Ingolstadt", country: "DE", region: "Bayern", postalPrefix: "85", lat: 48.7665, lon: 11.4258,
    keywords: ["Ingolstadt", "Oberbayern"] },
  { slug: "rosenheim", name: "Rosenheim", country: "DE", region: "Bayern", postalPrefix: "83", lat: 47.8562, lon: 12.1282,
    keywords: ["Rosenheim", "Oberbayern", "Chiemgau"] },
  { slug: "passau", name: "Passau", country: "DE", region: "Bayern", postalPrefix: "94", lat: 48.5667, lon: 13.4319,
    keywords: ["Passau", "Niederbayern"] },
  { slug: "freiburg", name: "Freiburg", country: "DE", region: "Baden-Württemberg", postalPrefix: "79", lat: 47.9990, lon: 7.8421,
    keywords: ["Freiburg im Breisgau", "Breisgau", "Schwarzwald"] },
  { slug: "karlsruhe", name: "Karlsruhe", country: "DE", region: "Baden-Württemberg", postalPrefix: "76", lat: 49.0069, lon: 8.4037,
    keywords: ["Karlsruhe", "Baden"] },
];

export type Industry = {
  slug: string;
  name: string;
  plural: string;
  synonyms: string[];
  keywords: string[];
  features: string[];
  painPoints: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "installateur",
    name: "Installateur",
    plural: "Installateure",
    synonyms: ["Sanitär", "Heizungsbauer", "Gas-Wasser", "Klempner"],
    keywords: [
      "Webdesign Installateur", "Website Sanitär", "Homepage Heizungsbau",
      "Webseite Klempner", "Notdienst-Website", "Webseite Gas-Wasser-Heizung",
    ],
    features: ["24/7-Notdienst-Hotline", "Leistungsgebiete nach PLZ", "Kostenvoranschlag online", "Foto-Anfrage am Bau"],
    painPoints: ["Anrufe am Wochenende verloren", "Kein Online-Formular", "Google-Profil nicht gepflegt"],
  },
  {
    slug: "elektriker",
    name: "Elektriker",
    plural: "Elektriker",
    synonyms: ["Elektroinstallateur", "Elektrotechnik", "Photovoltaik", "PV-Installateur", "E-Check"],
    keywords: [
      "Webdesign Elektriker", "Website Elektrotechnik", "Homepage Photovoltaik",
      "PV-Installateur Website", "E-Check Website", "Elektroinstallation online",
    ],
    features: ["E-Check & PV-Seiten", "Förderungen erklärt", "Online-Terminbuchung", "Referenzprojekte"],
    painPoints: ["PV-Angebote nicht vergleichbar", "Förderinfos fehlen", "Keine Terminbuchung"],
  },
  {
    slug: "dachdecker",
    name: "Dachdecker",
    plural: "Dachdecker",
    synonyms: ["Spengler", "Dachbauer", "Flaschner"],
    keywords: ["Webdesign Dachdecker", "Website Spengler", "Homepage Dachbau"],
    features: ["Projekt-Galerie Vorher/Nachher", "Einzugsgebiet auf Karte", "Foto-Anfrage Upload"],
    painPoints: ["Fotos liegen auf Handy herum", "Keine Gebiets-Kommunikation"],
  },
  {
    slug: "maler",
    name: "Maler",
    plural: "Maler",
    synonyms: ["Anstreicher", "Lackierer", "Malermeister"],
    keywords: ["Webdesign Maler", "Website Lackierer", "Homepage Anstreicher"],
    features: ["Farbwelten-Galerie", "Stundensätze transparent", "Terminanfrage"],
    painPoints: ["Fotos wirken unprofessionell", "Keine Preis-Transparenz"],
  },
  {
    slug: "tischler",
    name: "Tischler",
    plural: "Tischler",
    synonyms: ["Schreiner", "Möbeltischler", "Bautischler"],
    keywords: ["Webdesign Tischler", "Website Schreiner", "Homepage Möbelbau"],
    features: ["Werkstatt-Galerie", "Individualanfragen", "3D-Render-Integration"],
    painPoints: ["Unikat-Arbeit schwer zu präsentieren", "Anfragen ohne Brief"],
  },
  {
    slug: "gaertner",
    name: "Gärtner",
    plural: "Gärtner",
    synonyms: ["Landschaftsbauer", "GaLaBau", "Gartenpflege"],
    keywords: ["Webdesign Gärtner", "Website Landschaftsbau", "Homepage GaLaBau"],
    features: ["Projekt-Karten", "Saisonkalender", "Pflegeverträge online"],
    painPoints: ["Saisonalität nicht sichtbar", "Keine Foto-Dokumentation"],
  },
  {
    slug: "friseur",
    name: "Friseur",
    plural: "Friseure",
    synonyms: ["Coiffeur", "Barber", "Barbershop", "Hairstylist"],
    keywords: ["Webdesign Friseur", "Website Barber", "Homepage Coiffeur"],
    features: ["Online-Terminbuchung", "Team-Profile", "Mobile Preisliste"],
    painPoints: ["Termine nur per Telefon", "Preise als PDF"],
  },
  {
    slug: "kosmetik",
    name: "Kosmetikstudio",
    plural: "Kosmetikstudios",
    synonyms: ["Nagelstudio", "Beauty-Studio", "Kosmetikerin", "Wimpern-Studio"],
    keywords: ["Webdesign Kosmetikstudio", "Website Nagelstudio", "Homepage Kosmetikerin"],
    features: ["Treatment-Katalog", "Online-Buchung", "Gutschein-Shop"],
    painPoints: ["Kein Gutschein-Verkauf online", "Instagram-only"],
  },
  {
    slug: "cafe",
    name: "Café",
    plural: "Cafés",
    synonyms: ["Kaffeehaus", "Bäckerei", "Konditorei", "Patisserie", "Konditoreicafé"],
    keywords: ["Webdesign Café", "Website Bäckerei", "Homepage Kaffeehaus", "Konditorei online"],
    features: ["Digitale Speisekarte", "Live-Öffnungszeiten", "Reservierung", "Online-Bestellung"],
    painPoints: ["Öffnungszeiten veraltet", "Kein Menü auf Mobil"],
  },
  {
    slug: "restaurant",
    name: "Restaurant",
    plural: "Restaurants",
    synonyms: ["Gasthaus", "Beisl", "Wirtshaus", "Pizzeria", "Trattoria", "Osteria", "Bistro"],
    keywords: ["Webdesign Restaurant", "Website Gasthaus", "Homepage Pizzeria", "Trattoria online"],
    features: ["Tischreservierung", "Mehrsprachig (DE/EN/IT)", "QR-Speisekarte", "Events online"],
    painPoints: ["Reservierung nur telefonisch", "Keine Mehrsprachigkeit"],
  },
  {
    slug: "hotel",
    name: "Hotel",
    plural: "Hotels",
    synonyms: ["Pension", "Gasthof", "Boutique-Hotel", "Frühstückspension", "Ferienwohnung"],
    keywords: ["Webdesign Hotel", "Website Pension", "Homepage Gasthof", "Ferienwohnung online"],
    features: ["Buchungssystem (Booking.com, HotelFriend)", "Zimmer-Galerie", "Mehrsprachig"],
    painPoints: ["Direkte Buchungen fehlen", "Hohe OTA-Provisionen"],
  },
  {
    slug: "werkstatt",
    name: "KFZ-Werkstatt",
    plural: "Werkstätten",
    synonyms: ["Auto-Werkstatt", "Karosserie", "Autohaus", "Reifenservice"],
    keywords: ["Webdesign Werkstatt", "Website KFZ", "Homepage Autohaus", "Reifenservice online"],
    features: ["Service-Terminbuchung", "Leistungskatalog", "Fahrzeug-Galerie"],
    painPoints: ["Termine per Anruf", "Leistungen unklar"],
  },
];

export const SERVICES = [
  {
    slug: "webdesign",
    name: "Webdesign",
    alt: ["Webseitengestaltung", "Webdesigner", "Website-Design"],
  },
  {
    slug: "webentwicklung",
    name: "Webentwicklung",
    alt: ["Web Development", "Website programmieren", "Programmierung"],
  },
  {
    slug: "homepage-erstellen-lassen",
    name: "Homepage erstellen lassen",
    alt: ["Homepage erstellen", "Website erstellen lassen", "Webseite erstellen"],
  },
  {
    slug: "lokales-seo",
    name: "Lokales SEO",
    alt: ["Google Business", "regionales SEO", "Local SEO"],
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    alt: ["SEA", "Suchmaschinenwerbung"],
  },
  {
    slug: "website-relaunch",
    name: "Website-Relaunch",
    alt: ["Relaunch", "Website-Migration", "Neugestaltung"],
  },
];

export const COUNTRY_LABEL: Record<Country, string> = {
  AT: "Österreich",
  DE: "Deutschland",
};

export function byCountry(country: Country) {
  return CITIES.filter((c) => c.country === country);
}

export function cityBySlug(slug: string) {
  return CITIES.find((c) => c.slug === slug);
}

export function industryBySlug(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}

// All long-tail combo pages: industry × city.
export function allCombos() {
  return INDUSTRIES.flatMap((ind) =>
    CITIES.map((city) => ({ branche: ind.slug, stadt: city.slug }))
  );
}
