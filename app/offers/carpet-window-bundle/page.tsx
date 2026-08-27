import type { Metadata } from "next";
import Link from "next/link";
import BundleForm from "./bundle-form";

export const metadata: Metadata = {
  title: "Save 20% on Carpet & Window Cleaning Bundles",
  description: "Limited-time carpet and window cleaning bundle offer across Christchurch. Book both services together and save 20%.",
  alternates: { canonical: "/offers/carpet-window-bundle" },
  openGraph: {
    title: "Save 20% on Carpet + Window Cleaning | Syme Cleaning",
    description: "Two professional cleaning services. One easy booking. Save 20% for a limited time.",
    url: "/offers/carpet-window-bundle",
  },
};

const serviceAreas = "Christchurch · Kaiapoi · Rangiora · Rolleston · Lincoln";

export default function CarpetWindowBundlePage() {
  return (
    <main className="bundle-page">
      <header className="bundle-header">
        <Link href="/" className="brand" aria-label="Syme Cleaning home"><span>SYME</span> CLEANING</Link>
        <a href="tel:0224221696">022 422 1696</a>
      </header>

      <section className="bundle-hero" id="claim-offer">
        <div className="bundle-hero-copy">
          <div className="bundle-offer-tag">Limited-time local offer</div>
          <h1>Clean carpets.<br />Clear windows.<br /><span>Save 20%.</span></h1>
          <p className="bundle-lead">Book your carpet and window cleaning together and save 20% on a selected bundle.</p>
          <div className="bundle-proof">
            <span className="stars" aria-label="Five-star Google reviews">★★★★★</span>
            <strong>5-star Google reviews</strong>
            <i />
            <strong>Fully insured</strong>
          </div>
          <p className="bundle-areas">{serviceAreas}</p>
        </div>
        <BundleForm />
      </section>

      <section className="bundle-includes">
        <div className="bundle-section-heading">
          <span>One visit. Two services.</span>
          <h2>What your bundle can include</h2>
          <p>We’ll confirm the exact scope and final price for your home before anything is booked.</p>
        </div>
        <div className="bundle-service-grid">
          <article>
            <span className="bundle-card-number">01</span>
            <h3>Carpet cleaning</h3>
            <ul>
              <li>Professional cleaning of selected carpeted areas</li>
              <li>Standard spot treatment</li>
              <li>Deodoriser included</li>
            </ul>
          </article>
          <article>
            <span className="bundle-card-number">02</span>
            <h3>Window cleaning</h3>
            <ul>
              <li>Interior window glass cleaned</li>
              <li>Exterior window glass cleaned</li>
              <li>Professional residential service</li>
            </ul>
          </article>
        </div>
        <p className="bundle-exclusion"><strong>Please note:</strong> Hard-water staining, oxidation, paint, plaster and other building residue removal are not included in the standard bundle.</p>
      </section>

      <section className="bundle-steps">
        <div className="bundle-section-heading">
          <span>Easy from here</span>
          <h2>Get your price in three quick steps</h2>
        </div>
        <ol>
          <li><strong>1</strong><div><h3>Send your details</h3><p>Enter your name, phone number and property address.</p></div></li>
          <li><strong>2</strong><div><h3>We confirm the bundle</h3><p>Daniel will check the property details and confirm the scope and price.</p></div></li>
          <li><strong>3</strong><div><h3>Choose a time</h3><p>Pick a suitable booking time and we’ll take care of both services.</p></div></li>
        </ol>
      </section>

      <section className="bundle-final-cta">
        <span className="stars" aria-hidden="true">★★★★★</span>
        <h2>Ready to save 20%?</h2>
        <p>Limited appointments are available across Christchurch and surrounding areas.</p>
        <a href="#claim-offer">Claim the bundle offer <span aria-hidden="true">→</span></a>
      </section>

      <footer className="bundle-footer">
        <Link href="/" className="brand"><span>SYME</span> CLEANING</Link>
        <p>Selected bundles only. Offer availability and eligibility are confirmed when quoted.</p>
      </footer>
    </main>
  );
}
