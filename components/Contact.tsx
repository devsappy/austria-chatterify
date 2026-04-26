export default function Contact() {
  return (
    <section id="kontakt" className="relative border-b hair bg-ink-900 text-paper">
      <div className="noise absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid grid-cols-12 gap-0 border-b border-white/10 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400 sm:text-[11px]">
          <div className="col-span-6">§ 08 — Kontakt</div>
          <div className="col-span-6 text-right">Antwort in &lt; 24 Std.</div>
        </div>

        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-12 border-b border-white/10 py-12 sm:py-16 md:col-span-5 md:border-b-0 md:border-r md:py-24 md:pr-12">
            <h2 className="display-tight font-display text-4xl leading-[0.98] tracking-tightest sm:text-5xl md:text-6xl lg:text-7xl">
              Lassen Sie uns
              <br />
              <span className="italic font-normal text-accent-300">zwanzig Minuten</span>
              <br />
              sprechen.
            </h2>
            <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-ink-300 sm:mt-10">
              Erzählen Sie uns von Ihrem Betrieb. Wir schicken im Anschluss ein
              individuelles Angebot — unverbindlich und kostenlos.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-0 border-t border-white/10 sm:mt-14">
              {[
                ["E-Mail", "hallo@handwerk-atelier.eu", "mailto:hallo@handwerk-atelier.eu"],
                ["Telefon · AT", "+43 1 234 5678", "tel:+4312345678"],
                ["Telefon · DE", "+49 89 123 456", "tel:+4989123456"],
                ["Atelier", "Neubaugasse 12 · 1070 Wien", null],
              ].map(([k, v, href]) => (
                <div
                  key={k}
                  className="flex flex-col gap-1 border-b border-white/10 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                    {k}
                  </dt>
                  <dd className="text-sm text-paper sm:text-right">
                    {href ? (
                      <a href={href} className="break-all hover:text-accent-300 sm:break-normal">
                        {v}
                      </a>
                    ) : (
                      v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <form className="col-span-12 py-12 sm:py-16 md:col-span-7 md:py-24 md:pl-12">
            <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">
              Anfrage — Formular 01
            </div>
            <div className="grid grid-cols-1 gap-0 border-t border-white/10 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Max Mustermann" />
              <Field label="Betrieb" name="company" placeholder="Installateur Muster" bordered />
              <Field label="E-Mail" name="email" type="email" placeholder="max@muster.at" topBorder />
              <Field label="Telefon" name="phone" placeholder="+43 660 …" bordered topBorder />
              <SelectField />
              <TextareaField />
            </div>

            <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <label className="flex items-start gap-3 text-xs text-ink-400">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 rounded-none border-white/20 bg-transparent accent-accent"
                />
                <span>
                  Ich habe die{" "}
                  <a href="#" className="underline decoration-ink-400 hover:text-paper">
                    Datenschutzerklärung
                  </a>{" "}
                  gelesen und stimme zu.
                </span>
              </label>
              <button
                type="submit"
                className="group inline-flex h-12 w-full items-center justify-between gap-6 border border-accent bg-accent px-6 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition hover:bg-accent-600 sm:w-auto"
              >
                Anfrage senden <span className="text-paper/80 group-hover:text-paper">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  bordered,
  topBorder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  bordered?: boolean;
  topBorder?: boolean;
}) {
  return (
    <div
      className={[
        "flex flex-col p-5",
        bordered ? "sm:border-l border-white/10" : "",
        topBorder ? "border-t border-white/10" : "",
        "border-b border-white/10 last:border-b-0",
      ].join(" ")}
    >
      <label
        htmlFor={name}
        className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full border-none bg-transparent p-0 text-[15px] text-paper placeholder:text-ink-500 outline-none"
      />
    </div>
  );
}

function SelectField() {
  return (
    <div className="flex flex-col border-t border-white/10 p-5 sm:col-span-2">
      <label className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
        Branche
      </label>
      <select
        name="industry"
        defaultValue=""
        className="w-full border-none bg-transparent p-0 text-[15px] text-paper outline-none"
      >
        <option value="" disabled className="bg-ink-900">Bitte wählen —</option>
        <option className="bg-ink-900">Installateur</option>
        <option className="bg-ink-900">Elektriker</option>
        <option className="bg-ink-900">Dachdecker / Maler</option>
        <option className="bg-ink-900">Café / Bäckerei</option>
        <option className="bg-ink-900">Restaurant</option>
        <option className="bg-ink-900">Friseur / Studio</option>
        <option className="bg-ink-900">Anderes</option>
      </select>
    </div>
  );
}

function TextareaField() {
  return (
    <div className="flex flex-col border-t border-white/10 p-5 sm:col-span-2">
      <label
        htmlFor="message"
        className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400"
      >
        Worum geht es?
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        placeholder="Kurz beschreiben …"
        className="w-full resize-none border-none bg-transparent p-0 text-[15px] text-paper placeholder:text-ink-500 outline-none"
      />
    </div>
  );
}
