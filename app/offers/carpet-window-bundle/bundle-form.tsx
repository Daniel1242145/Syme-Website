"use client";

import { FormEvent, useState } from "react";

const formEndpoint = "https://formspree.io/f/maqzkrjg";

export default function BundleForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bundle-form bundle-success" role="status">
        <span className="bundle-success-icon">✓</span>
        <h2>Thanks — we have your details.</h2>
        <p>Daniel will check your address and contact you with the bundle price and available times.</p>
        <button className="bundle-secondary-button" onClick={() => setStatus("idle")}>Send another enquiry</button>
      </div>
    );
  }

  return (
    <form className="bundle-form" action={formEndpoint} method="POST" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New 20% carpet + window bundle enquiry" />
      <input type="hidden" name="service" value="Carpet and window cleaning bundle" />
      <input type="hidden" name="offer" value="Save 20% limited-time bundle" />
      <input type="hidden" name="source" value="Website bundle landing page" />
      <input className="form-honeypot" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="bundle-form-heading">
        <span>Quick quote</span>
        <h2>Claim the 20% offer</h2>
        <p>Send the basics and we’ll confirm your bundle price.</p>
      </div>

      <label>
        Full name
        <input name="name" autoComplete="name" placeholder="Your full name" required />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="021 123 4567" required />
      </label>
      <label>
        Address
        <input name="address" autoComplete="street-address" placeholder="Street address and suburb" required />
      </label>

      <button className="bundle-submit" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : <>Get my bundle price <span aria-hidden="true">→</span></>}
      </button>
      {status === "error" && (
        <p className="bundle-form-error" role="alert">
          That did not send. Please try again, or call Daniel on <a href="tel:0224221696">022 422 1696</a>.
        </p>
      )}
      <small>No pressure and no spam. Just a helpful reply about your cleaning job.</small>
    </form>
  );
}
