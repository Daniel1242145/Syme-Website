import Link from "next/link";
import QuoteForm from "./quote-form";

const reviews = [
  ["A++ service! Daniel was great to deal with, very honest and upright with costs. He did an incredible job.", "Robyn Fereti-Noble"],
  ["Amazing job done. Good clear communication, fair price and professional job standard.", "Hayley Walla"],
  ["Highly recommend, great service and communication. Great value and an amazing result.", "Stella Smith"],
  ["Super knowledgeable and efficient. Also, a really great price.", "Aeronwy Cording"],
];

const cleaningServices = [
  ["01", "Carpet & upholstery", "Professional carpet and fabric furniture cleaning for homes and workplaces.", "/services/carpet-cleaning"],
  ["02", "Window cleaning", "Interior and exterior window cleaning for homes and businesses.", "/services/window-cleaning"],
  ["03", "Move-out & end-of-tenancy", "Move-out cleaning, with carpet and window cleaning available as add-ons.", "/end-of-tenancy-cleaning"],
  ["04", "Builders’ cleans", "Builders’ and handover cleaning for new builds and renovation projects.", "#quote"],
];

const projects = [
  ["Ilam Homestead", "Carpet cleaning", "We cleaned the carpets at Ilam Homestead in Christchurch.", "ilam-homestead", "Syme Cleaning van at the entrance to Ilam Homestead"],
  ["Dux Dine", "Carpet and window cleaning", "We cleaned the patterned carpets and windows at Dux Dine.", "dux-dine", "Patterned carpet and bay windows in the Dux Dine dining room"],
  ["Two-storey window clean", "Window cleaning", "We used a water-fed pole to reach the upstairs windows on this Christchurch job.", "two-storey-window-cleaning", "Window-cleaning pole reaching an upstairs window beside the Syme Cleaning van"],
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
          <a href="#services">Cleaning services</a><a href="#builders">Builders’ cleans</a><a href="#business">Commercial</a><a href="#projects">Projects</a>
        </nav>
        <a className="header-phone" href="tel:0224221696">022 422 1696</a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> Christchurch cleaning specialists</div>
          <h1>Specialist cleaning.<br /><span>Clear from the start.</span></h1>
          <p>Carpet and upholstery, windows, move-out cleans, builders’ cleans and commercial cleaning—with straightforward quotes and one local point of contact.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#quote">Get a free quote <span aria-hidden="true">→</span></a>
            <a className="button button-quiet" href="#services">Explore our services</a>
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
          <div><span className="kicker">Cleaning services</span><h2>Choose the service you need.</h2></div>
          <p>Choose the service you need. We’ll confirm what’s included and give you a clear quote before booking.</p>
        </div>
        <div className="service-grid residential-grid">
          {cleaningServices.map(([number, title, description, href]) => (
            <Link className="service-card" id={href === "#quote" ? "builders" : undefined} href={href} key={title}>
              <span className="service-number">{number}</span><h3>{title}</h3><p>{description}</p><span className="service-link">{href === "#quote" ? "Request a quote" : "View service"} <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="business-section" id="business">
        <div className="business-copy">
          <span className="kicker kicker-light">For Christchurch businesses</span>
          <h2>Commercial cleaning that fits your site.</h2>
          <p>Regular workplace cleaning, with periodic carpet and window care and commercial hard-floor stripping and sealing when needed.</p>
          <div className="business-actions">
            <Link className="button business-button" href="/services/commercial-cleaning">Explore commercial cleaning <span aria-hidden="true">→</span></Link>
            <a className="business-text-link" href="#quote">Book a free site walkthrough</a>
          </div>
        </div>
        <div className="business-proof">
          <strong>Reliable ongoing service</strong>
          <ul>
            <li><span>✓</span> Offices, retail and facilities</li>
            <li><span>✓</span> Weekly or scheduled cleaning</li>
            <li><span>✓</span> Written scope and one local contact</li>
            <li><span>✓</span> Carpet, windows and hard floors</li>
          </ul>
          <div className="business-review"><span className="stars">★★★★★</span><p>“Good clear communication, fair price and professional job standard.”</p></div>
        </div>
      </section>

      <section className="section" id="projects" aria-labelledby="projects-heading">
        <div className="section-heading">
          <div><span className="kicker">Recent work</span><h2 id="projects-heading">Projects we’ve done.</h2></div>
          <p>See our carpet and window cleaning work at homes and businesses around Christchurch.</p>
        </div>
        <div className="project-grid">
          {projects.map(([name, service, description, image, alt]) => (
            <article className="project-card" key={name}>
              <img src={`/images/projects/${image}.jpg`} alt={alt} loading="lazy" />
              <div className="project-copy">
                <span className="kicker">{service}</span>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
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
        <div><Link href="/" className="brand"><span>SYME</span> CLEANING</Link><p>Carpet, upholstery, window, move-out, builders’ and commercial cleaning in Christchurch.</p></div>
        <div className="footer-contact"><a href="tel:0224221696">022 422 1696</a><a href="mailto:daniel@symecleaning.co.nz">daniel@symecleaning.co.nz</a><span>Christchurch · Kaiapoi · Rangiora · Lincoln · Rolleston</span></div>
      </footer>
      <a className="mobile-cta" href="#quote">Get a free quote</a>
    </main>
  );
}
