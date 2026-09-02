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
    intro: "Professional window cleaning across Christchurch and surrounding areas. Simple pricing, professional equipment and an easy booking process.",
    price: "Single-storey inside & outside from $125",
    includes: ["Interior and exterior glass", "Professional squeegee and water-fed pole methods", "Single and double-storey options", "Residential and commercial windows"],
    note: "We clean homes of all sizes using professional squeegee methods inside and water-fed pole equipment where suitable outside. Standard pricing is for glass only. Frames, tracks, hard-water deposits, paint and other contamination can be quoted separately.",
    quoteTitle: "Ready for clean windows?",
    quoteCopy: "Tell us a little about your home and we'll get back to you with a clear price and available booking options.",
    faqs: [["Can you clean second-storey windows?", "Yes. We use professional water-fed pole equipment for suitable upper-level exterior windows."], ["Do you need access to water?", "Yes, we normally require access to an outdoor water supply."], ["What are your common prices?", "Standard single-storey inside-and-out pricing is $125 for 2 bedrooms, $145 for 3 bedrooms and $165 for 4 bedrooms. Double-storey homes start from $199, subject to access and window layout."], ["Do you clean frames and tracks?", "Our standard window pricing is for glass. Frames, tracks and additional detailing can be quoted separately."], ["Can I combine windows with carpet cleaning?", "Yes. Ask us about combining window and carpet cleaning so you can get more of the house sorted in one booking."]],
  },
  "carpet-cleaning": {
    eyebrow: "Fresh, practical carpet care",
    title: "Carpet cleaning",
    intro: "Professional carpet cleaning for Christchurch homes, rentals and workplaces, with standard spot treatment and clear expectations before we begin.",
    price: "Home packages from $139",
    includes: ["Professional hot-water extraction", "Free standard spot treatment", "Deodoriser included in selected packages", "Residential and commercial carpet care"],
    note: "We inspect the carpet, treat suitable spots and professionally clean the agreed areas. Specialist stain treatment, heavy soiling and additional rooms may cost extra, and we'll confirm this before starting. Most carpets take approximately 2–4 hours to dry.",
    quoteTitle: "Ready for clean carpets?",
    quoteCopy: "Tell us how many rooms and living areas you need cleaned and we'll get back to you with a clear price and available booking options.",
    faqs: [["How long do carpets take to dry?", "Most carpets take approximately 2-4 hours to dry, depending on airflow, weather and carpet type."], ["Can every stain be removed?", "No cleaner can guarantee every stain. We will treat suitable spots and explain any permanent staining or damage we find."], ["Do you move furniture?", "Light items can usually be moved where practical. Large, heavy or fragile furniture is normally cleaned around."], ["Is spot treatment included?", "Standard spot treatment is included. Specialist stains, severe contamination or heavy soiling may require additional treatment, which we will discuss with you first."], ["Can you clean upholstery at the same visit?", "Yes. Send us a photo of the sofa, chair or other fabric furniture and we can quote it alongside your carpet clean."]],
  },
  "commercial-cleaning": {
    eyebrow: "Reliable regular cleaning",
    title: "Commercial cleaning",
    intro: "A clear written scope, flexible scheduling and one local point of contact for your workplace.",
    price: "Free site walkthrough & tailored quote",
    includes: ["Offices and workspaces", "Bathrooms and staff kitchens", "Floors, bins and high-touch areas", "Periodic carpet and window cleaning"],
    note: "Every commercial site is different. We walk through your premises, agree the priorities and provide a clear written scope and price.",
    quoteTitle: "Ready for a clear price?",
    quoteCopy: "Send the basics and Daniel will reply with the next step.",
    faqs: [["Do you offer after-hours cleaning?", "Yes. We can discuss an access and scheduling plan that works around your team and customers."], ["Are long contracts required?", "Our introductory free-service offer has a 3-month minimum. After that, service continues month-to-month with 30 days' notice."], ["Do you supply consumables?", "Cleaning products and equipment are supplied by Syme Cleaning. Paper towels, toilet paper, soap and other site consumables can be arranged if required."]],
  },
  "upholstery-cleaning": {
    eyebrow: "Sofas, chairs & furnishings",
    title: "Upholstery cleaning",
    intro: "Careful professional cleaning to refresh suitable fabric furniture in homes and workplaces.",
    price: "Send a photo for a fast quote",
    includes: ["Fabric inspection before cleaning", "Professional extraction where suitable", "Standard spot treatment", "Home and office furniture"],
    note: "Pricing depends on furniture size, fabric, condition and access. Photos help us quote accurately before booking.",
    quoteTitle: "Ready for a clear price?",
    quoteCopy: "Send the basics and Daniel will reply with the next step.",
    faqs: [["Can you clean every fabric?", "Not every fabric is suitable for wet extraction. We inspect the item first and will tell you if another method is safer."], ["How long does upholstery take to dry?", "Drying time varies with fabric, airflow and weather. We will give you a practical estimate on the day."], ["Can you remove pet odours?", "We can treat many common odours, but severe contamination may need specialist treatment and cannot always be fully removed."]],
  },
} as const;

type ServiceSlug = keyof typeof serviceData;

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceData[slug as ServiceSlug];
  if (!service) notFound();

  return (
    <main>
      <header className="site-header">
        <Link href="/" className="brand"><span>SYME</span> CLEANING</Link>
        <nav className="desktop-nav"><Link href="/#services">Services</Link><Link href="/#reviews">Reviews</Link><Link href="/#faq">FAQ</Link></nav>
        <a className="header-phone" href="tel:0224221696">022 422 1696</a>
      </header>

      <section className="service-hero">
        <Link className="back-link" href="/#services">← All services</Link>
        <span className="kicker">{service.eyebrow}</span>
        <h1>{service.title}</h1>
        <p>{service.intro}</p>
        <div className="service-price">{service.price}</div>
        <a className="button button-primary" href="#service-quote">Get a free quote →</a>
      </section>

      <section className="review-marquee" aria-label="Customer reviews">
        <div className="review-track">
          {[...reviews, ...reviews].map(([quote, name], index) => (
            <article className="review-chip" key={`${name}-${index}`}><span className="stars" aria-hidden="true">★★★★★</span><p>“{quote}”</p><strong>{name}</strong></article>
          ))}
        </div>
      </section>

      <section className="service-detail">
        <div><span className="kicker">What's included</span><h2>Simple, professional service.</h2><p className="service-note">{service.note}</p><a className="button button-primary" href="#service-quote">Get a free quote →</a></div>
        <ul className="inclusion-list">{service.includes.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
      </section>

      <section className="service-faq">
        <span className="kicker">Common questions</span><h2>{service.title} FAQs</h2>
        <div className="faq-list">{service.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="quote-section service-quote" id="service-quote">
        <div className="quote-intro"><span className="kicker kicker-light">Quick quote</span><h2>{service.quoteTitle}</h2><p>{service.quoteCopy}</p><ul className="trust-list"><li><span>✓</span> 5-star Google reviews</li><li><span>✓</span> Fully insured</li><li><span>✓</span> Local, owner-led service</li></ul></div>
        <QuoteForm />
      </section>

      <footer><div><Link href="/" className="brand"><span>SYME</span> CLEANING</Link><p>Residential and commercial cleaning specialists.</p></div><div className="footer-contact"><a href="tel:0224221696">022 422 1696</a><a href="mailto:daniel@symecleaning.co.nz">daniel@symecleaning.co.nz</a><span>Christchurch · Kaiapoi · Rangiora · Lincoln · Rolleston</span></div></footer>
      <a className="mobile-cta" href="#service-quote">Get a free quote</a>
    </main>
  );
}
