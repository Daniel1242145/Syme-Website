import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { getBlogPost, getBlogPosts } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link href="/resources" className="inline-flex items-center text-sm font-semibold text-royal">
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            Back to blog
          </Link>
          <div className="mt-8 rounded-lg border border-white/10 bg-graphite p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-royal">
              {post.category}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-white/70">{post.excerpt}</p>
            <div className="mt-7 flex flex-wrap gap-4 text-sm text-white/50">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-royal" aria-hidden="true" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-royal" aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
            <div className="mt-10 space-y-8">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
                  <p className="mt-3 text-base leading-8 text-white/68">{section.body}</p>
                </section>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {post.keywords.map((keyword) => (
                <span key={keyword} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
      <CTA />
    </>
  );
}
