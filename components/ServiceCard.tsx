import type { LucideIcon } from "lucide-react";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  keyword: string;
  description: string;
  icon: LucideIcon;
};

export function ServiceCard({ title, keyword, description, icon: Icon }: ServiceCardProps) {
  return (
    <Link
      href="/contact"
      className="group flex min-h-64 flex-col justify-between rounded-lg border border-white/10 bg-graphite p-6 transition duration-300 hover:-translate-y-1 hover:border-royal/70 hover:bg-[#202025]"
    >
      <div>
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-royal text-white shadow-glow">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm font-medium text-royal">{keyword}</p>
        <p className="mt-4 text-sm leading-6 text-white/65">{description}</p>
      </div>
      <span className="mt-8 text-sm font-semibold text-white transition group-hover:text-royal">
        Request a quote
      </span>
    </Link>
  );
}
