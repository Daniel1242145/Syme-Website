import type { Metadata } from "next";
import { Quote, Star } from "lucide-react";
import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { business, reviews } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Reviews",
  description: "5.0 star reviews for Syme Carpet Cleaning in Christchurch, NZ.",
};

export default function ReviewsPage() {
  return (
    <>
      <Section
        eyebrow="Reviews"
        title={`${business.rating} star rated cleaning in Christchurch`}
        text="Clients choose Syme Carpet Cleaning for responsive quotes, reliable communication and careful cleaning for homes, rentals and local businesses."
        className="pt-16"
      >
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-royal/40 bg-royal/10 px-5 py-3 text-white">
          <span className="text-2xl font-bold">{business.rating}</span>
          <span className="flex gap-1 text-royal">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-4 w-4 fill-current" aria-hidden="true" />
            ))}
          </span>
          <span className="text-sm font-semibold text-white/70">Christchurch rated</span>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-lg border border-white/10 bg-graphite p-6">
              <Quote className="h-7 w-7 text-royal" aria-hidden="true" />
              <p className="mt-5 text-sm leading-6 text-white/70">{review.text}</p>
              <p className="mt-6 font-semibold text-white">{review.name}</p>
            </article>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
