import type { Metadata } from "next";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { maintenancePlans } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Maintenance Plans",
  description:
    "Flexible carpet cleaning and Commercial Cleaning Christchurch maintenance plans from Syme Carpet Cleaning.",
};

export default function MaintenancePlansPage() {
  return (
    <>
      <Section
        eyebrow="Maintenance Plans"
        title="Keep your property clean without a long-term contract"
        text="Keep carpets properly maintained with reminders when they are due for a clean. Most homes sit around a 6-12 month cleaning cycle, with flexible options for offices and local Christchurch businesses."
        className="pt-16"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {maintenancePlans.map((plan) => (
            <div key={plan.title} className="rounded-lg border border-white/10 bg-graphite p-6 transition duration-300 hover:-translate-y-1 hover:border-royal/70">
              <CalendarDays className="h-7 w-7 text-royal" aria-hidden="true" />
              <h3 className="mt-5 text-2xl font-semibold text-white">{plan.title}</h3>
              <p className="mt-2 text-sm font-semibold text-royal">{plan.cadence}</p>
              <p className="mt-4 text-sm leading-6 text-white/65">{plan.details}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Plan benefits"
        title="Built for predictable presentation"
        className="bg-[#101010]"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Priority scheduling for regular clients",
            "Reminder scheduling when carpets are due for a clean",
            "6-12 month carpet cleaning cycles for most homes",
            "Carpet, upholstery, window and commercial cleaning options",
            "No long-term contracts for simple business planning",
          ].map((benefit) => (
            <div key={benefit} className="flex items-center gap-3 rounded-lg border border-white/10 bg-graphite p-5">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-royal" aria-hidden="true" />
              <span className="font-semibold text-white">{benefit}</span>
            </div>
          ))}
        </div>
        <ButtonLink href="/contact" className="mt-8">
          Ask About a Plan
        </ButtonLink>
      </Section>
      <CTA />
    </>
  );
}
