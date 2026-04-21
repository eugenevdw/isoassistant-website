"use client";

import { FormEvent, useState } from "react";

const initialValues = {
  name: "",
  email: "",
  company: "",
  message: "",
  website: ""
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });

      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        setStatus("error");
        setFeedback(result.error ?? "We could not send your message right now.");
        return;
      }

      setStatus("success");
      setFeedback(result.message ?? "Thanks. Your message has been sent.");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setFeedback("We could not send your message right now.");
    }
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
            disabled={status === "submitting"}
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
            disabled={status === "submitting"}
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
          disabled={status === "submitting"}
          className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-ink outline-none transition focus:border-ink/30"
        />
      </label>

      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={values.website}
        onChange={(event) => setValues((current) => ({ ...current, website: event.target.value }))}
        className="hidden"
        aria-hidden="true"
      />

      <label className="block space-y-2 text-sm text-slate">
        <span className="font-semibold text-ink">Message</span>
        <textarea
          required
          rows={6}
          value={values.message}
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
          disabled={status === "submitting"}
          className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-ink outline-none transition focus:border-ink/30"
          placeholder="Tell us what you want help with, your industry, or which standard you are working toward."
        />
      </label>

      <div className="space-y-3">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
        {feedback ? (
          <p
            className={`text-sm ${status === "success" ? "text-emerald-700" : "text-rose-700"}`}
            aria-live="polite"
          >
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  );
}
