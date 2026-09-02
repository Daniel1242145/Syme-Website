import Link from "next/link";
import { notFound } from "next/navigation";
import QuoteForm from "../../quote-form";

const reviews = [
  ["A++ service! Daniel was great to deal with, very honest and upright with costs. He did an incredible job.", "Robyn Fereti-Noble"],
  ["Amazing job done. Good clear communication, fair price and professional job standard.", "Hayley Walla"],
  ["Highly recommend, great service and communication. Great value and an amazing result.", "Stella Smith"],
  ["Super knowledgeable and efficient. Also, a really great price.", "Aeronwy Cording"],
];

const serviceData = {
  "window-cleaning": {
    eyebrow: "Residential & commercial",
    title: "Window cleaning",
    intro: "Professional window cleaning across Christchurch and surrounding areas — simple pricing, professional equipment and a clear result without the hassle of doing it yourself.",
    price: "Single-storey inside & outside from $125",
    includes: ["Interior and exterior glass", "Professional squeegee and water-fed pole methods", "Single and double-storey options", "Residential and commercial windows"],
    note: "We clean homes of all sizes using traditional professional squeegee methods inside and water-fed pole equipment where suitable outside. Standard pricing is for glass only. Frames, tracks, hard-water deposits, paint and other contamination can be quoted separately.",
    benefits: ["Inside, outside or both", "Upper-level exterior windows where access allows", "Professional equipment for a consistent finish", "Straightforward pricing before the job starts", "One-off and repeat cleaning available", "Add carpet cleaning and get more done in one visit"],
    process: [["1", "Request a quote", "Tell us your home size, location and whether you need inside, outside or both."], ["2", "Choose a time", "We confirm the price and arrange a suitable appointment."], ["3", "We clean", "We arrive with the equipment needed and take care of the agreed window cleaning."], ["4", "Enjoy the result", "Clearer glass and one less job on your list."]],
    salesTitle: "Your windows shouldn't be another weekend job.",
    salesCopy: "Whether you're getting the house ready for guests, selling, moving, or simply tired of looking through dirty glass, we make booking a professional clean easy. Tell us what you need and we'll give you a clear quote before the work begins.",
    ctaTitle: "Ready for cleaner windows?",
    ctaCopy: "Appointments can fill up during busy weeks. Request a free quote now and we'll let you know the next available options.",
    faqs: [["Can you clean second-storey windows?", "Yes. We use professional water-fed pole equipment for suitable upper-level exterior windows."], ["Do you need access to water?", "Yes, we normally require access to an outdoor water supply."], ["What are your common prices?", "Standard single-storey inside-and-out pricing is $125 for 2 bedrooms, $145 for 3 bedrooms and $165 for 4 bedrooms. Double-storey homes start from $199, subject to access and window layout."], ["Do you clean frames and tracks?", "Our standard window pricing is for glass. Frames, tracks and additional detailing can be quoted separately so you know exactly what is included."], ["Can I combine windows with another service?", "Yes. Ask us about combining window and carpet cleaning so you can get more of the house sorted in one booking."]],
  },
  "carpet-cleaning": {
    eyebrow: "Fresh, practical carpet care",
    title: "Carpet cleaning",
    intro: "Professional carpet cleaning for Christchurch homes, rentals and workplaces — with standard spot treatment, practical advice and clear expectations before we begin.",
    price: "Home packages from $139",
    includes: ["Professional hot-water extraction", "Free standard spot treatment", "Deodoriser included in selected packages", "Residential and commercial carpet care"],
    note: "Our process is designed to lift everyday soil and refresh suitable carpets using professional extraction equipment. We inspect the carpet, treat suitable spots and clean the agreed areas thoroughly. Specialist stain treatment, heavy soiling and additional rooms may cost extra, and we will confirm this before starting.",
    benefits: ["Professional hot-water extraction", "Standard spot treatment included", "Clear expectations around stains before we start", "Typical drying time around 2–4 hours", "Light furniture moved where practical or cleaned around", "Upholstery and window cleaning can be added"],
    process: [["1", "Tell us what needs cleaning", "Send your bedroom count, living areas and any stains or problem areas you're concerned about."], ["2", "Get a clear quote", "We'll confirm the package, any extras and the price before booking."], ["3", "Professional clean", "Suitable spots are treated and the carpet is professionally extracted."], ["4", "Let it dry", "Most carpets dry in approximately 2–4 hours depending on airflow, weather and carpet type."]],
    salesTitle: "Give tired carpets a proper refresh.",
    salesCopy: "Everyday traffic, spills, pets and general use build up over time. Professional extraction can remove embedded soil and leave your carpets feeling refreshed without making unrealistic promises about permanent stains or damage.",
    ctaTitle: "Want your carpets cleaned?",
    ctaCopy: "Send us the size of your home and the areas you want cleaned. We'll come back to you with a straightforward quote and available booking options.",
    faqs: [["How long do carpets take to dry?", "Most carpets take approximately 2-4 hours to dry, depending on airflow, weather and carpet type."], ["Can every stain be removed?", "No cleaner can guarantee every stain. We will treat suitable spots and explain any permanent staining or damage we find."], ["Do you move furniture?", "Light items can usually be moved where practical. Large, heavy or fragile furniture is normally cleaned around and should be cleared beforehand if you want the carpet underneath cleaned."], ["Is spot treatment included?", "Standard spot treatment is included. Specialist stains, severe contamination or heavy soiling may require additional treatment, which we will discuss with you first."], ["Can you clean upholstery at the same visit?", "Yes. Send us a photo of the sofa, chair or other fabric furniture and we can quote it alongside your carpet clean."]],
  },
  "commercial-cleaning": {
    eyebrow: "Reliable regular cleaning", title: "Commercial cleaning", intro: "A clear written scope, flexible scheduling and one local point of contact for your workplace.", price: "Free site walkthrough & tailored quote", includes: ["Offices and workspaces", "Bathrooms and staff kitchens", "Floors, bins and high-touch areas", "Periodic carpet and window cleaning"], note: "Every commercial site is different. We walk through your premises, agree the priorities and provide a clear written scope and price.", benefits: [], process: [], salesTitle: "", salesCopy: "", ctaTitle: "", ctaCopy: "", faqs: [["Do you offer after-hours cleaning?", "Yes. We can discuss an access and scheduling plan that works around your team and customers."], ["Are long contracts required?", "Our introductory free-service offer has a 3-month minimum. After that, service continues month-to-month with 30 days' notice."], ["Do you supply consumables?", "Cleaning products and equipment are supplied by Syme Cleaning. Paper towels, toilet paper, soap and other site consumables can be arranged if required."]],
  },
  "upholstery-cleaning": {
    eyebrow: "Sofas, chairs & furnishings", title: "Upholstery cleaning", intro: "Careful professional cleaning to refresh suitable fabric furniture in homes and workplaces.", price: "Send a photo for a fast quote", includes: ["Fabric inspection before cleaning", "Professional extraction where suitable", "Standard spot treatment", "Home and office furniture"], note: "Pricing depends on furniture size, fabric, condition and access. Photos help us quote accurately before booking.", benefits: [], process: [], salesTitle: "", salesCopy: "", ctaTitle: "", ctaCopy: "", faqs: [["Can you clean every fabric?", "Not every fabric is suitable for wet extraction. We inspect the item first and will tell you if another method is safer."], ["How long does upholstery take to dry?", "Drying time varies with fabric, airflow and weather. We will give you a practical estimate on the day."], ["Can you remove pet odours?", "We can treat many common odours, but severe contamination may need specialist treatment and cannot always be fully removed."]],
  },
} as const;

type ServiceSlug = keyof typeof serviceData;

export function generateStaticParams() { return Object.keys(serviceData).map((slug) => ({ slug })); }

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceData[slug as ServiceSlug];
  if (!service) notFound();
  const isSalesPage = slug === "window-cleaning" || slug === "carpet-cleaning";

  return (
    <main>
      <header className="site-header"><Link href="/" className="brand"><span>SYME</span> CLEANING</Link><nav className="desktop-nav"><Link href="/#services">Services</Link><Link href="/#reviews">Reviews</Link><Link href="/#faq">FAQ</Link></nav><a className="header-phone" href="tel:0224221696">022 422 1696</a></header>

      <section className="service-hero"><Link className="back-link" href="/#services">← All services</Link><span className="kicker">{service.eyebrow}</span><h1>{service.title}</h1><p>{service.intro}</p><div className="service-price">{service.price}</div><a className="button button-primary" href="#service-quote">Get a free quote →</a></section>

      <section className="review-marquee" aria-label="Customer reviews"><div className="review-track">{[...reviews, ...reviews].map(([quote, name], index) => (<article className="review-chip" key={`${name}-${index}`}><span className="stars" aria-hidden="true">★★★★★</span><p>“{quote}”</p><strong>{name}</strong></article>))}</div></section>

      <section className="service-detail"><div><span className="kicker">What to expect</span><h2>Clear service. No guesswork.</h2><p className="service-note">{service.note}</p></div><ul className="inclusion-list">{service.includes.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul></section>

      {isSalesPage && <>
        <section className="service-detail"><div><span className="kicker">Why book Syme Cleaning?</span><h2>{service.salesTitle}</h2><p className="service-note">{service.salesCopy}</p><a className="button button-primary" href="#service-quote">Check availability →</a></div><ul className="inclusion-list">{service.benefits.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul></section>

        <section className="service-faq"><span className="kicker">Simple from start to finish</span><h2>How it works</h2><div className="faq-list">{service.process.map(([number, title, copy]) => <div key={number} style={{padding:"20px 0", borderBottom:"1px solid rgba(255,255,255,.12)"}}><strong>{number}. {title}</strong><p>{copy}</p></div>)}</div></section>

        <section className="service-detail"><div><span className="kicker">Get it sorted</span><h2>{service.ctaTitle}</h2><p className="service-note">{service.ctaCopy}</p></div><div><a className="button button-primary" href="#service-quote">Get my free quote →</a><p className="service-note" style={{marginTop:"14px"}}>★★★★★ 5-star Google reviews · Fully insured · Local Christchurch service</p></div></section>
      </>}

      <section className="service-faq"><span className="kicker">Common questions</span><h2>{service.title} FAQs</h2><div className="faq-list">{service.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

      <section className="quote-section service-quote" id="service-quote"><div className="quote-intro"><span className="kicker kicker-light">Quick quote</span><h2>Ready for a clear price?</h2><p>Send the basics and Daniel will reply with the next step.</p><ul className="trust-list"><li><span>✓</span> 5-star Google reviews</li><li><span>✓</span> Fully insured</li><li><span>✓</span> Local, owner-led service</li></ul></div><QuoteForm /></section>

      <footer><div><Link href="/" className="brand"><span>SYME</span> CLEANING</Link><p>Residential and commercial cleaning specialists.</p></div><div className="footer-contact"><a href="tel:0224221696">022 422 1696</a><a href="mailto:daniel@symecleaning.co.nz">daniel@symecleaning.co.nz</a><span>Christchurch · Kaiapoi · Rangiora · Lincoln · Rolleston</span></div></footer><a className="mobile-cta" href="#service-quote">Get a free quote</a>
    </main>
  );
}
