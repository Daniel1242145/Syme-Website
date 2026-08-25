import Link from "next/link";
import QuoteForm from "./quote-form";

const reviews = [
  ["A++ service! Daniel was great to deal with, very honest and upright with costs. He did an incredible job.", "Robyn Fereti-Noble"],
  ["Amazing job done. Good clear communication, fair price and professional job standard.", "Hayley Walla"],
  ["Highly recommend, great service and communication. Great value and an amazing result.", "Stella Smith"],
  ["Super knowledgeable and efficient. Also, a really great price.", "Aeronwy Cording"],
];

const residentialServices = [
  ["01", "Window cleaning", "Interior, exterior and water-fed pole cleaning for homes and businesses.", "/services/window-cleaning"],
  ["02", "Carpet cleaning", "Professional carpet cleaning, deodorising and standard spot treatment.", "/services/carpet-cleaning"],
  ["03", "Upholstery cleaning", "Careful cleaning for sofas, chairs and other fabric furnishings.", "/services/upholstery-cleaning"],
];

const faqs = [
  ["Which areas do you service?", "We service Christchurch, Kaiapoi, Rangiora, Lincoln and Rolleston. Send us your address and we will confirm availability."],
  ["Are you fully insured?", "Yes. Syme Cleaning is fully insured and professionally equipped for residential and commercial work."],
  ["How do I get an exact price?", "Complete the short quote form with your service, location and a few job details. We will reply with either a price or the next question needed to quote accurately."],
  ["Do I need to be home?", "Not always. If we have safe access and the required water or power, many services can be completed while you are out."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Syme Cleaning home"><span>SYME</span> CLEANING</Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">For homes</a><a href="#business">For businesses</a><a href="#reviews">Reviews</a><a href="#faq">FAQ</a>
        </nav>
        <a className="header-phone" href="tel:0224221696">022 422 1696</a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> Residential cleaning across Christchurch</div>
          <h1>Windows. Carpets.<br /><span>Done properly.</span></h1>
          <p>Professional window, carpet and upholstery cleaning for your home—with clear communication, honest pricing and results you can see.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#quote">Get a free quote <span aria-hidden="true">→</span></a>
            <a className="button button-quiet" href="#business">Need business cleaning?</a>
          </div>
          <div className="hero-proof">
            <span className="stars" aria-label="Five stars">★★★★★</span><span>5-star Google reviews</span><span className="proof-divider" /><span>Fully insured</span>
          </div>
        </div>
        <div className="before-after" aria-label="Window cleaning before and after">
          <figure><img src="/images/window-before.jpg" alt="Dirty window before professional cleaning" /><figcaption>Before</figcaption></figure>
          <figure><img src="/images/window-after.jpg" alt="Clear window after professional cleaning" /><figcaption>After</figcaption></figure>
          <div className="result-badge">Real work. Real result.</div>
        </div>
      </section>

      <section className="review-marquee" id="reviews" aria-label="Customer reviews">
        <div className="review-track">
          {[...reviews, ...reviews].map(([quote, name], index) => (
            <article className="review-chip" key={`${name}-${index}`}><span className="stars" aria-hidden="true">★★★★★</span><p>“{quote}”</p><strong>{name}</strong></article>
          ))}
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading">
          <div><span className="kicker">For your home</span><h2>The cleaning services people book us for.</h2></div>
          <p>Start with the service you need today. Each page explains what is included, common pricing and the questions customers ask most.</p>
        </div>
        <div className="service-grid residential-grid">
          {residentialServices.map(([number, title, description, href]) => (
            <Link className="service-card" href={href} key={title}>
              <span className="service-number">{number}</span><h3>{title}</h3><p>{description}</p><span className="service-link">View service <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="business-section" id="business">
        <div className="business-copy">
          <span className="kicker kicker-light">For Christchurch businesses</span>
          <h2>Commercial cleaning you do not have to chase.</h2>
          <p>Regular office, retail and facility cleaning with a written scope, flexible scheduling and one local point of contact.</p>
          <div className="business-actions">
            <Link className="button business-button" href="/services/commercial-cleaning">Explore commercial cleaning <span aria-hidden="true">→</span></Link>
            <a className="business-text-link" href="#quote">Book a free site walkthrough</a>
          </div>
        </div>
        <div className="business-proof">
          <strong>Built for reliable ongoing service</strong>
          <ul>
            <li><span>✓</span> Offices, retail and facilities</li>
            <li><span>✓</span> After-hours scheduling available</li>
            <li><span>✓</span> Fully insured and professionally equipped</li>
            <li><span>✓</span> Windows and carpets available as add-ons</li>
          </ul>
          <div className="business-review"><span className="stars">★★★★★</span><p>“Good clear communication, fair price and professional job standard.”</p></div>
        </div>
      </section>

      <section className="quote-section" id="quote">
        <div className="quote-intro">
          <span className="kicker kicker-light">Quick quote</span><h2>Tell us what needs cleaning.</h2>
          <p>No long forms and no pressure. Send the basics and Daniel will come back to you with a clear next step.</p>
          <ul className="trust-list"><li><span>✓</span> Locally owned and owner-led</li><li><span>✓</span> Fully insured</li><li><span>✓</span> Professional service</li><li><span>✓</span> Christchurch and surrounding areas</li></ul>
        </div>
        <QuoteForm />
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading faq-heading"><div><span className="kicker">Good to know</span><h2>Frequently asked questions.</h2></div><p>Still unsure? Call or text Daniel on 022 422 1696.</p></div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <footer>
        <div><Link href="/" className="brand"><span>SYME</span> CLEANING</Link><p>Residential and commercial cleaning specialists.</p></div>
        <div className="footer-contact"><a href="tel:0224221696">022 422 1696</a><a href="mailto:daniel@symecleaning.co.nz">daniel@symecleaning.co.nz</a><span>Christchurch · Kaiapoi · Rangiora · Lincoln · Rolleston</span></div>
      </footer>
      <a className="mobile-cta" href="#quote">Get a free quote</a>
    </main>
  );
}
