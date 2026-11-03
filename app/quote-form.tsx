"use client";

import { FormEvent, useState } from "react";

const formEndpoint = "https://formspree.io/f/maqzkrjg";

export default function QuoteForm() {
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
    return <div className="quote-form form-success" role="status"><span className="success-icon">✓</span><h3>Thanks — your quote request has been sent.</h3><p>Daniel will review the details and get back to you as soon as possible.</p><button className="button button-primary" onClick={() => setStatus("idle")}>Send another enquiry</button></div>;
  }

  return (
    <form className="quote-form" action={formEndpoint} method="POST" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New quote request from the Syme Cleaning website" />
      <input className="form-honeypot" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="form-row"><label>Name<input name="name" autoComplete="name" placeholder="Your name" required /></label><label>Phone<input name="phone" type="tel" autoComplete="tel" placeholder="021 123 4567" required /></label></div>
      <div className="form-row">
        <label>Service<select name="service" defaultValue="" required>
          <option value="" disabled>Select a service</option>
          <optgroup label="Home cleaning">
            <option>Carpet cleaning</option><option>Upholstery cleaning</option><option>Windows and solar panels</option><option>Move-out / end-of-tenancy cleaning</option>
          </optgroup>
          <optgroup label="Commercial cleaning">
            <option>Regular commercial cleaning</option><option>Commercial carpet or window cleaning</option><option>Hard-floor stripping and sealing</option>
          </optgroup>
          <optgroup label="Projects and exterior">
            <option>Builders’ clean</option><option>House washing</option><option>Paths, patios or council bins</option>
          </optgroup>
          <option>More than one service / not sure</option>
        </select></label>
        <label>Address<input name="address" autoComplete="street-address" placeholder="Street address and suburb" required /></label>
      </div>
      <label>What would you like cleaned?<textarea name="details" rows={4} placeholder="A few details help us quote accurately…" /></label>
      <button className="button button-dark" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending your request…" : <>Get my free quote <span aria-hidden="true">→</span></>}</button>
      {status === "error" && <p className="form-error" role="alert">That did not send. Please try again, or call Daniel on <a href="tel:0224221696">022 422 1696</a>.</p>}
      <small>No spam. Just a helpful reply about your cleaning job.</small>
    </form>
  );
}
