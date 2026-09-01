import type { Metadata } from "next";
import Link from "next/link";
import EndOfTenancyForm from "./end-of-tenancy-form";

export const metadata: Metadata = {
  title: "End of Tenancy Cleaning Christchurch | Syme Cleaning",
  description: "End of tenancy cleaning in Christchurch with a bond-back cleaning guarantee on included cleaning work. Carpet, window and oven cleaning available as add-ons.",
};

const reviews = [
  ["A++ service! Daniel was great to deal with, very honest and upright with costs. He did an incredible job.", "Robyn Fereti-Noble"],
  ["Amazing job done. Good clear communication, fair price and professional job standard.", "Hayley Walla"],
  ["Highly recommend, great service and communication. Great value and an amazing result.", "Stella Smith"],
  ["Super knowledgeable and efficient. Also, a really great price.", "Aeronwy Cording"],
];

const checklist = [
  "Kitchen benches, splashbacks and sink",
  "Cupboards and drawers inside and outside",
  "Bathroom, shower, bath, vanity and toilet",
  "Bedrooms, living and dining areas",
  "Built-in wardrobes and accessible shelving",
  "Skirting boards and accessible ledges",
  "Doors, handles and light switches",
  "Accessible surfaces and general dusting",
  "Cobweb removal",
  "Vacuuming throughout",
  "Hard-floor vacuuming and mopping",
  "General final presentation of included areas",
];

const prices = [
  ["1 bedroom / 1 bathroom", "from $295"],
  ["2 bedroom / 1 bathroom", "from $395"],
  ["3 bedroom / 1 bathroom", "from $489"],
  ["3 bedroom / 2 bathroom", "from $589"],
  ["4 bedroom / 2 bathroom", "from $689"],
];

const addons = [
  ["Carpet cleaning", "from $165"],
  ["Window cleaning", "from $145"],
  ["Oven clean", "from $105"],
  ["Oven + rangehood", "from $145"],
  ["Garage cleaning", "quoted separately"],
];

export default function EndOfTenancyCleaningPage() {
  return (
    <main>
      <header className="site-header">
        <Link href="/" className="brand"><span>SYME</span> CLEANING</Link>
        <nav className="desktop-nav"><Link href="/#services">Services</Link><Link href="/#reviews">Reviews</Link><Link href="/#faq">FAQ</Link></nav>
        <a className="header-phone" href="tel:0224221696">022 422 1696</a>
      </header>

      <section className="service-hero">
        <Link className="back-link" href="/#services">← All services</Link>
        <span className="kicker">Moving out? Leave the cleaning to us.</span>
        <h1>End of tenancy cleaning</h1>
        <p>A thorough move-out clean for Christchurch tenants, with carpets, windows and oven cleaning available through the same local company.</p>
        <div className="service-price">Bond-back cleaning guarantee on included cleaning work</div>
        <a className="button button-primary" href="#end-of-tenancy-quote">Get a free quote →</a>
      </section>

      <section className="review-marquee" aria-label="Customer reviews">
        <div className="review-track">
          {[...reviews, ...reviews].map(([quote, name], index) => (
            <article className="review-chip" key={`${name}-${index}`}><span className="stars" aria-hidden="true">★★★★★</span><p>“{quote}”</p><strong>{name}</strong></article>
          ))}
        </div>
      </section>

      <section className="service-detail">
        <div>
          <span className="kicker">One less thing to worry about</span>
          <h2>We handle the clean. You handle the move.</h2>
          <p className="service-note">Every property is different, so we keep the first step simple. Tell us the property size, condition and what extras you need. We will confirm a clear quote before the clean.</p>
        </div>
        <ul className="inclusion-list">
          <li><span>✓</span> Full-property end of tenancy cleaning</li>
          <li><span>✓</span> Carpet cleaning available</li>
          <li><span>✓</span> Interior & exterior window cleaning available</li>
          <li><span>✓</span> Oven and rangehood cleaning available</li>
          <li><span>✓</span> Fully insured local service</li>
        </ul>
      </section>

      <section className="service-faq">
        <span className="kicker">Everything is still available</span>
        <h2>Need the full details?</h2>
        <p className="service-note">We have kept this page easy to scan. Open the sections below only if you want the full checklist or starting prices.</p>
        <div className="faq-list">
          <details><summary>View the full cleaning checklist <span>+</span></summary><div style={{ paddingTop: "1rem" }}><ul className="inclusion-list">{checklist.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul></div></details>
          <details><summary>View starting prices — GST included <span>+</span></summary><div style={{ paddingTop: "1rem" }}><ul className="inclusion-list">{prices.map(([property, price]) => <li key={property}><span>✓</span><strong>{property}</strong>&nbsp; — {price}</li>)}</ul><p className="service-note">Starting prices assume a standard vacant property in reasonable condition. Heavy soiling, mould, rubbish removal, extensive wall washing or unusual buildup may cost extra.</p></div></details>
          <details><summary>View carpet, window & oven add-ons <span>+</span></summary><div style={{ paddingTop: "1rem" }}><ul className="inclusion-list">{addons.map(([service, price]) => <li key={service}><span>+</span><strong>{service}</strong>&nbsp; — {price}</li>)}</ul></div></details>
          <details><summary>How does the bond-back cleaning guarantee work? <span>+</span></summary><p>If your property manager identifies a reasonable cleaning issue in an area included in your Syme Cleaning scope, contact us promptly and we will return to re-clean that area free of charge. The guarantee applies to our included cleaning work only and cannot guarantee the return of a bond for damage, rent, rubbish, maintenance or other tenancy matters.</p></details>
          <details><summary>Do I need to book carpets and windows too? <span>+</span></summary><p>No. The base end of tenancy clean can be booked on its own. Carpet cleaning, window cleaning, oven/rangehood cleaning and garage cleaning can be added where required.</p></details>
        </div>
      </section>

      <section className="quote-section service-quote" id="end-of-tenancy-quote">
        <div className="quote-intro"><span className="kicker kicker-light">Free quote</span><h2>Tell us about the property.</h2><p>Send the basics below. We will use the property size, condition and add-ons to give you the next step.</p><ul className="trust-list"><li><span>✓</span> Bond-back cleaning guarantee on included work</li><li><span>✓</span> 5-star Google reviews</li><li><span>✓</span> Fully insured</li><li><span>✓</span> Local, owner-led service</li></ul></div>
        <EndOfTenancyForm />
      </section>

      <footer><div><Link href="/" className="brand"><span>SYME</span> CLEANING</Link><p>Residential and commercial cleaning specialists.</p></div><div className="footer-contact"><a href="tel:0224221696">022 422 1696</a><a href="mailto:daniel@symecleaning.co.nz">daniel@symecleaning.co.nz</a><span>Christchurch · Kaiapoi · Rangiora · Lincoln · Rolleston</span></div></footer>
      <a className="mobile-cta" href="#end-of-tenancy-quote">Get a free quote</a>
    </main>
  );
}
