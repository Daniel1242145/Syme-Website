"use client";

import { useEffect, useState } from "react";
import { useForm } from "@formspree/react";
import { X } from "lucide-react";

const CLOSED_UNTIL_KEY = "symeDiscountPopupClosedUntil";
const SUBMITTED_KEY = "symeDiscountPopupSubmitted";
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

export function DiscountPopup() {
  const [visible, setVisible] = useState(false);
  const [state, handleSubmit] = useForm("xkoaedzz");

  useEffect(() => {
    try {
      if (window.localStorage.getItem(SUBMITTED_KEY) === "true") {
        return;
      }

      const closedUntil = Number(window.localStorage.getItem(CLOSED_UNTIL_KEY));

      if (closedUntil && closedUntil > Date.now()) {
        return;
      }

      if (closedUntil && closedUntil <= Date.now()) {
        window.localStorage.removeItem(CLOSED_UNTIL_KEY);
      }
    } catch {
      // If storage is unavailable, the popup can still appear for the current visit.
    }

    const delayMs = 5000 + Math.floor(Math.random() * 3001);
    const timer = window.setTimeout(() => setVisible(true), delayMs);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!state.succeeded) {
      return;
    }

    try {
      window.localStorage.setItem(SUBMITTED_KEY, "true");
      window.localStorage.removeItem(CLOSED_UNTIL_KEY);
    } catch {
      // The success state still shows even if storage cannot be written.
    }
  }, [state.succeeded]);

  function closePopup() {
    if (!state.succeeded) {
      try {
        window.localStorage.setItem(CLOSED_UNTIL_KEY, String(Date.now() + SEVEN_DAYS_MS));
      } catch {
        // Closing should still work even if storage cannot be written.
      }
    }

    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/55 px-5 py-6 backdrop-blur-sm sm:items-center">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="discount-popup-title"
        className="relative w-full max-w-md rounded-lg border border-white/10 bg-graphite p-6 shadow-glow"
      >
        <button
          type="button"
          onClick={closePopup}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-royal hover:bg-royal/10"
          aria-label="Close specials popup"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <p className="pr-12 text-sm font-semibold uppercase tracking-[0.18em] text-royal">
          Specials
        </p>
        <h2 id="discount-popup-title" className="mt-3 pr-12 text-2xl font-semibold text-white">
          Want cleaning deals and specials?
        </h2>
        <p className="mt-4 text-sm leading-6 text-white/68">
          Enter your phone number and we’ll send occasional discounts and offers.
        </p>

        {state.succeeded ? (
          <p className="mt-6 rounded-lg border border-royal/40 bg-royal/10 p-4 text-sm font-semibold leading-6 text-white">
            Thanks — we’ll text you when we have specials available.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6">
            <input type="hidden" name="formType" value="Discount popup" />
            <label className="grid gap-2 text-sm font-semibold text-white">
              Phone number
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="min-h-12 rounded-lg border border-white/10 bg-ink px-4 text-white outline-none transition placeholder:text-white/30 focus:border-royal"
                placeholder="Your phone number"
              />
            </label>
            <button
              type="submit"
              disabled={state.submitting}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-royal px-6 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink disabled:cursor-not-allowed disabled:opacity-65"
            >
              {state.submitting ? "Sending..." : "Get specials"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
