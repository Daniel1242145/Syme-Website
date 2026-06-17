import Image from "next/image";
import { ArrowRight, CheckCircle2, Quote, Star } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { business, reviews, services, trustBadges, whyChooseUs } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="premium-grid relative overflow-hidden px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(13,91,255,0.26),transparent_32%),linear-gradient(90deg,#0B0B0B_0%,rgba(11,11,11,0.92)_44%,rgba(11,11,11,0.35)_100%)]" />
        <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
          <Image
            src="/images/carpet-cleaning-hero.png"
            alt="Professional carpet cleaning service in a modern Christchurch home"
            fill
            priority
            className="object-cover opacity-70"
            sizes="58vw"
          />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-royal/50 bg-royal/10 px-4 py-2 text-sm font-semibold text-white">
              5.0 rated local cleaning in Christchurch
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              Carpet Cleaning Christchurch
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Professional carpet cleaning and property cleaning services for homes, rentals, offices and local businesses across Christchurch.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Get a Free Quote</ButtonLink>
              <ButtonLink href={business.phoneHref} variant="secondary">
                Call {business.phone}
              </ButtonLink>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="rounded-lg border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                  <badge.icon className="h-5 w-5 text-royal" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold text-white">{badge.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-lg border border-white/10 bg-coal shadow-glow lg:hidden">
            <Image
              src="/images/carpet-cleaning-hero.png"
              alt="Professional carpet cleaning in Christchurch"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <Section
        eyebrow="Services"
        title="Premium cleaning for homes, rentals and businesses"
        text="Choose one service or combine carpet, upholstery, window and commercial cleaning for a complete property refresh."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why choose us"
        title="A cleaner, simpler way to look after your property"
        text="Syme Carpet Cleaning pairs responsive local service with careful workmanship and clear communication from quote to finish."
        className="bg-[#101010]"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="rounded-lg border border-white/10 bg-graphite p-6">
              <item.icon className="h-7 w-7 text-royal" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-royal">
              Commercial Cleaning Christchurch
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Reliable cleaning support without long-term lock-in
            </h2>
            <p className="mt-5 text-base leading-7 text-white/68">
              Keep offices, local businesses, retail spaces and shared areas looking professional with flexible commercial cleaning plans. Book one-off carpet cleaning, regular workspace cleaning or seasonal window cleaning as your business needs change.
            </p>
            <ButtonLink href="/maintenance-plans" className="mt-8">
              View Maintenance Plans
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Office carpets", "Retail spaces", "Shared facilities", "Window cleaning"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-graphite p-5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-royal" aria-hidden="true" />
                <span className="font-semibold text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Reviews" title={`${business.rating} star service across Christchurch`} className="bg-[#101010]">
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-lg border border-white/10 bg-graphite p-6">
              <div className="mb-5 flex gap-1 text-royal">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <Quote className="h-7 w-7 text-white/30" aria-hidden="true" />
              <p className="mt-4 text-sm leading-6 text-white/70">{review.text}</p>
              <p className="mt-5 font-semibold text-white">{review.name}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
