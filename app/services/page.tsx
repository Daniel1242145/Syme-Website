import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Carpet Cleaning Christchurch, Upholstery Cleaning Christchurch, End of Tenancy Cleaning Christchurch, Window Cleaning Christchurch and Commercial Cleaning Christchurch.",
};

export default function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Services"
        title="Property cleaning services across Christchurch"
        text="From one room to a full property refresh, Syme Carpet Cleaning offers premium cleaning for homes, rentals, offices and local businesses."
        className="pt-16"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>
      <Section
        eyebrow="How it works"
        title="Simple booking, clear expectations, premium finish"
        className="bg-[#101010]"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["1", "Tell us what you need", "Share the property type, service needed and preferred date."],
            ["2", "Receive a fast quote", "We confirm scope, timing and the best cleaning approach."],
            ["3", "Enjoy the result", "Your space is cleaned carefully, professionally and efficiently."],
          ].map(([number, title, text]) => (
            <div key={title} className="rounded-lg border border-white/10 bg-graphite p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-royal text-sm font-bold text-white">
                {number}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{text}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
