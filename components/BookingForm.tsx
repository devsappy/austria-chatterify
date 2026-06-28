"use client";

import { useState } from "react";

type FieldErrors = Record<string, string>;

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

export default function BookingForm() {
  const [values, setValues] = useState(INITIAL);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  function update<K extends keyof typeof INITIAL>(key: K, val: string) {
    setValues((v) => ({ ...v, [key]: val }));
    if (fieldErrors[key]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError(null);

    const localErrors: FieldErrors = {};
    if (!values.name.trim()) localErrors.name = "Bitte Namen eingeben.";
    if (!values.email.trim()) localErrors.email = "Bitte E-Mail eingeben.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      localErrors.email = "E-Mail ungültig.";
    if (values.message.length > 4000) localErrors.message = "Nachricht zu lang.";

    setFieldErrors(localErrors);
    if (Object.keys(localErrors).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source: "handwerker-auftritt.de" }),
      });
      const data = (await res.json()) as { redirectUrl?: string; error?: string };

      if (!res.ok || !data.redirectUrl) {
        setServerError(data.error || "Etwas ist schiefgelaufen. Bitte erneut versuchen.");
        setSubmitting(false);
        return;
      }
      window.location.href = data.redirectUrl;
    } catch (err) {
      console.error(err);
      setServerError("Netzwerkfehler. Bitte erneut versuchen.");
      setSubmitting(false);
    }
  }

  const labelCls =
    "font-mono text-[10px] uppercase tracking-[0.18em] text-paper/60";
  const inputCls =
    "w-full bg-transparent border-white/20 text-paper placeholder:text-paper/40 px-4 py-3 text-sm focus:border-accent-300 focus:outline-none transition";
  const errorCls = "mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-red-400";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="flex w-full flex-col gap-5 border border-white/20 bg-ink-900/40 p-6 sm:p-8"
      aria-label="Terminanfrage"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="bk-name" className={labelCls}>
          Name *
        </label>
        <input
          id="bk-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={120}
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          className={inputCls}
          placeholder="Max Mustermann"
          aria-invalid={!!fieldErrors.name}
        />
        {fieldErrors.name && <p className={errorCls}>{fieldErrors.name}</p>}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="bk-email" className={labelCls}>
            E-Mail *
          </label>
          <input
            id="bk-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={160}
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputCls}
            placeholder="max@beispiel.de"
            aria-invalid={!!fieldErrors.email}
          />
          {fieldErrors.email && <p className={errorCls}>{fieldErrors.email}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="bk-phone" className={labelCls}>
            Telefon
          </label>
          <input
            id="bk-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={60}
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputCls}
            placeholder="+49 … / +43 …"
          />
          {fieldErrors.phone && <p className={errorCls}>{fieldErrors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="bk-date" className={labelCls}>
            Wunschdatum
          </label>
          <input
            id="bk-date"
            name="preferredDate"
            type="date"
            value={values.preferredDate}
            onChange={(e) => update("preferredDate", e.target.value)}
            className={`${inputCls} [color-scheme:dark]`}
          />
          {fieldErrors.preferredDate && (
            <p className={errorCls}>{fieldErrors.preferredDate}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="bk-time" className={labelCls}>
            Wunschuhrzeit
          </label>
          <input
            id="bk-time"
            name="preferredTime"
            type="time"
            value={values.preferredTime}
            onChange={(e) => update("preferredTime", e.target.value)}
            className={`${inputCls} [color-scheme:dark]`}
          />
          {fieldErrors.preferredTime && (
            <p className={errorCls}>{fieldErrors.preferredTime}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="bk-message" className={labelCls}>
          Nachricht
        </label>
        <textarea
          id="bk-message"
          name="message"
          rows={4}
          maxLength={4000}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className={`${inputCls} resize-none`}
          placeholder="Projekt, Branche, Fragen…"
        />
        {fieldErrors.message && <p className={errorCls}>{fieldErrors.message}</p>}
      </div>

      {serverError && (
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-red-400">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex h-16 items-center justify-between border border-white/20 bg-paper px-6 text-ink-900 transition hover:bg-accent-300 disabled:cursor-not-allowed disabled:opacity-60 sm:h-20"
      >
        <span className="text-sm font-medium tracking-tight sm:text-base">
          {submitting ? "Wird gesendet…" : "Anfrage senden & Termin buchen"}
        </span>
        <span className="font-mono text-sm text-ink-900/60 transition group-hover:translate-x-1">
          ↗
        </span>
      </button>

      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/50">
        Anschließend leiten wir Sie zu Calendly weiter, um den Slot zu bestätigen.
      </p>
    </form>
  );
}