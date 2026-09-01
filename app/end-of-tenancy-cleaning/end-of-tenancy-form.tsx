"use client";

import { FormEvent, useState } from "react";

const formEndpoint = "https://formspree.io/f/maqzkrjg";

export default function EndOfTenancyForm() {
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
      <div className="quote-form form-success" role="status">
        <span className="success-icon">✓</span>
        <h3>Thanks — your end of tenancy quote request has been sent.</h3>
        <p>Daniel will review the property details and get back to you with the next step.</p>
        <button className="button button-primary" onClick={() => setStatus("idle")}>Send another enquiry</button>
      </div>
    );
  }

  return (
    <form className="quote-form" action={formEndpoint} method="POST" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New end of tenancy cleaning enquiry - Syme Cleaning" />
      <input type="hidden" name="service" value="End of tenancy cleaning" />
      <input className="form-honeypot" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="form-row">
        <label>Name<input name="name" autoComplete="name" placeholder="Your name" required /></label>
        <label>Phone<input name="phone" type="tel" autoComplete="tel" placeholder="021 123 4567" required /></label>
      </div>

      <label>Property address<input name="address" autoComplete="street-address" placeholder="Property address" required /></label>

      <div className="form-row">
        <label>Bedrooms<select name="bedrooms" defaultValue="" required><option value="" disabled>Select</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option></select></label>
        <label>Bathrooms<select name="bathrooms" defaultValue="" required><option value="" disabled>Select</option><option>1</option><option>2</option><option>3+</option></select></label>
      </div>

      <label>Move-out / cleaning date<input name="cleaning_date" type="date" /></label>

      <label>Add-ons you may want<select name="addons" defaultValue=""><option value="">No add-ons / not sure yet</option><option>Carpet cleaning</option><option>Window cleaning</option><option>Oven + rangehood</option><option>Carpets + windows</option><option>Carpets + windows + oven/rangehood</option><option>Garage clean quote</option></select></label>

      <label>Anything we should know?<textarea name="details" rows={4} placeholder="Property condition, access, areas needing extra attention, preferred date…" /></label>

      <button className="button button-dark" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending your request…" : <>Get my free quote <span aria-hidden="true">→</span></>}</button>
      {status === "error" && <p className="form-error" role="alert">That did not send. Please try again, or call Daniel on <a href="tel:0224221696">022 422 1696</a>.</p>}
      <small>No spam. Just a helpful reply about your move-out clean.</small>
    </form>
  );
}
