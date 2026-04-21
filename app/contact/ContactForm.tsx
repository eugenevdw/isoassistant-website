"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "../lib/site";

const initialValues = {
  name: "",
  email: "",
  company: "",
  message: ""
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = values.company
      ? `ISO Assistant enquiry from ${values.company}`
      : `ISO Assistant enquiry from ${values.name}`;

    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Company: ${values.company || "Not provided"}`,
      "",
      "Message:",
      values.message
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm text-slate">
          <span className="font-semibold text-ink">Name</span>
          <input
            required
            type="text"
            value={values.name}
            onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
            className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-ink outline-none transition focus:border-ink/30"
          />
        </label>
        <label className="space-y-2 text-sm text-slate">
          <span className="font-semibold text-ink">Email</span>
          <input
            required
            type="email"
            value={values.email}
            onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
            className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-ink outline-none transition focus:border-ink/30"
          />
        </label>
      </div>

      <label className="block space-y-2 text-sm text-slate">
        <span className="font-semibold text-ink">Company</span>
        <input
          type="text"
          value={values.company}
          onChange={(event) => setValues((current) => ({ ...current, company: event.target.value }))}
          className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-ink outline-none transition focus:border-ink/30"
        />
      </label>

      <label className="block space-y-2 text-sm text-slate">
        <span className="font-semibold text-ink">Message</span>
        <textarea
          required
          rows={6}
          value={values.message}
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
          className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-ink outline-none transition focus:border-ink/30"
          placeholder="Tell us what you want help with, your industry, or which standard you are working toward."
        />
      </label>

      <div className="space-y-3">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
        >
          Send message
        </button>
        <p className="text-sm text-slate">
          Submitting opens your default email app with the message filled in.
        </p>
      </div>
    </form>
  );
}
