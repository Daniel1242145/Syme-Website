import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const base =
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-royal focus:ring-offset-2 focus:ring-offset-ink";
  const styles =
    variant === "primary"
      ? "bg-royal text-white shadow-glow hover:-translate-y-0.5 hover:bg-white hover:text-ink"
      : "border border-white/15 bg-white/5 text-white hover:-translate-y-0.5 hover:border-royal hover:bg-royal/10";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
