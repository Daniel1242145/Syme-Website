import { business } from "@/lib/site-data";
import { ButtonLink } from "./ButtonLink";

export function CTA() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-lg border border-royal/40 bg-royal p-8 text-white shadow-glow md:grid-cols-[1fr_auto] md:items-center md:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
            Fast Christchurch quotes
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Ready for cleaner carpets, windows or workspaces?
          </h2>
          <p className="mt-4 max-w-2xl text-white/78">
            Tell us what you need and Syme Carpet Cleaning will get back to you with a clear next step.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <ButtonLink href="/contact" variant="secondary" className="border-white/35 bg-white text-ink hover:bg-ink hover:text-white">
            Get a Free Quote
          </ButtonLink>
          <ButtonLink href={business.phoneHref} variant="secondary" className="border-white/35">
            Call {business.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
