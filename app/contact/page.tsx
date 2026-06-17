import type { Metadata } from "next";
import { Mail, MapPin, Phone, Star } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { business } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free quote from Syme Carpet Cleaning for Carpet Cleaning Christchurch, Commercial Cleaning Christchurch, Upholstery Cleaning Christchurch, Window Cleaning Christchurch and more.",
};

export default function ContactPage() {
  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-royal">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
            Get a free cleaning quote
          </h1>
          <p className="mt-5 text-base leading-7 text-white/68">
            Tell us about your property and the service you need. Syme Carpet Cleaning will get back to you with a clear quote for Christchurch carpet cleaning, commercial cleaning or property cleaning support.
          </p>

          <div className="mt-8 space-y-4">
            <a href={business.phoneHref} className="flex items-center gap-4 rounded-lg border border-white/10 bg-graphite p-5 transition hover:border-royal/70">
              <Phone className="h-5 w-5 text-royal" aria-hidden="true" />
              <span>
                <span className="block text-sm text-white/45">Phone</span>
                <span className="font-semibold text-white">{business.phone}</span>
              </span>
            </a>
            <a href={business.emailHref} className="flex items-center gap-4 rounded-lg border border-white/10 bg-graphite p-5 transition hover:border-royal/70">
              <Mail className="h-5 w-5 text-royal" aria-hidden="true" />
              <span>
                <span className="block text-sm text-white/45">Email</span>
                <span className="font-semibold text-white">{business.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-lg border border-white/10 bg-graphite p-5">
              <MapPin className="h-5 w-5 text-royal" aria-hidden="true" />
              <span>
                <span className="block text-sm text-white/45">Location</span>
                <span className="font-semibold text-white">{business.location}</span>
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-royal/40 bg-royal/10 p-5">
              <Star className="h-5 w-5 fill-current text-royal" aria-hidden="true" />
              <span className="font-semibold text-white">{business.rating} stars from Christchurch clients</span>
            </div>
          </div>
        </div>

        <QuoteForm />
      </div>
    </section>
  );
}
