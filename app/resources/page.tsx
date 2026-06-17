import type { Metadata } from "next";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Syme Carpet Cleaning blog with local advice for Carpet Cleaning Christchurch, Commercial Cleaning Christchurch, End of Tenancy Cleaning Christchurch and Window Cleaning Christchurch.",
};

export const revalidate = 3600;

export default async function ResourcesPage() {
  const posts = await getBlogPosts();
  const [featuredPost, ...latestPosts] = posts;

  return (
    <>
      <Section
        eyebrow="Blog"
        title="Cleaning advice for Christchurch homes and businesses"
        text="Fresh articles on carpet cleaning, commercial cleaning, end of tenancy cleaning, upholstery care, pre-sale presentation and window cleaning."
        className="pt-16"
      >
        <article className="grid gap-8 rounded-lg border border-royal/35 bg-graphite p-6 shadow-glow lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div className="flex min-h-72 flex-col justify-between rounded-lg bg-[linear-gradient(135deg,#0D5BFF,#101010_58%,#1C1C1F)] p-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                Featured
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-white">
                {featuredPost.title}
              </h2>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {featuredPost.keywords.map((keyword) => (
                <span key={keyword} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold text-royal">{featuredPost.category}</p>
            <p className="mt-4 text-base leading-7 text-white/70">{featuredPost.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/50">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-royal" aria-hidden="true" />
                {featuredPost.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-royal" aria-hidden="true" />
                {featuredPost.readTime}
              </span>
            </div>
            <Link href={`/resources/${featuredPost.slug}`} className="mt-8 inline-flex items-center text-sm font-semibold text-royal">
              Read article
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </article>
      </Section>

      <Section
        eyebrow="Latest articles"
        title="Latest cleaning articles"
        text="Regular tips, service updates and local cleaning advice for Christchurch homes, rentals, offices and businesses."
        className="bg-[#101010]"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <article key={post.slug} className="flex min-h-80 flex-col justify-between rounded-lg border border-white/10 bg-graphite p-6 transition duration-300 hover:-translate-y-1 hover:border-royal/70">
              <div>
                <p className="text-sm font-semibold text-royal">{post.category}</p>
                <h2 className="mt-4 text-xl font-semibold leading-tight text-white">
                  {post.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-white/65">{post.excerpt}</p>
              </div>
              <div className="mt-8">
                <div className="mb-5 flex flex-wrap gap-4 text-xs text-white/45">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-royal" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4 text-royal" aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>
                <Link href={`/resources/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-royal">
                  Read article
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
