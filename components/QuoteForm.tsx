"use client";

import { useForm } from "@formspree/react";
import { services } from "@/lib/site-data";

export function QuoteForm() {
  const [state, handleSubmit] = useForm("maqzkrjg");

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-white/10 bg-graphite p-6 shadow-glow sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-white">
          Name
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            className="min-h-12 rounded-lg border border-white/10 bg-ink px-4 text-white outline-none transition placeholder:text-white/30 focus:border-royal"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white">
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className="min-h-12 rounded-lg border border-white/10 bg-ink px-4 text-white outline-none transition placeholder:text-white/30 focus:border-royal"
            placeholder="Best phone number"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-h-12 rounded-lg border border-white/10 bg-ink px-4 text-white outline-none transition placeholder:text-white/30 focus:border-royal"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white">
          Service needed
          <select
            name="service"
            required
            className="min-h-12 rounded-lg border border-white/10 bg-ink px-4 text-white outline-none transition focus:border-royal"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white sm:col-span-2">
          Preferred date
          <input
            name="preferredDate"
            type="date"
            className="min-h-12 rounded-lg border border-white/10 bg-ink px-4 text-white outline-none transition focus:border-royal"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white sm:col-span-2">
          Message
          <textarea
            name="message"
            rows={6}
            required
            className="rounded-lg border border-white/10 bg-ink px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-royal"
            placeholder="Tell us about the property, rooms, timing or cleaning goals."
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-royal px-6 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink disabled:cursor-not-allowed disabled:opacity-65 sm:w-auto"
      >
        {state.submitting ? "Sending..." : "Send Free Quote Request"}
      </button>
      {state.succeeded ? (
        <p className="mt-5 rounded-lg border border-royal/40 bg-royal/10 p-4 text-sm font-semibold leading-6 text-white">
          Thanks — we’ve received your quote request and will be in touch shortly.
        </p>
      ) : null}
    </form>
  );
}
