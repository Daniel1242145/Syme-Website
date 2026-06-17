"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { business, navItems } from "@/lib/site-data";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/88 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-royal text-lg font-black text-white shadow-glow">
            S
          </span>
          <span>
            <span className="block text-base font-bold text-white">{business.name}</span>
            <span className="block text-xs font-medium text-white/55">Christchurch, NZ</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition hover:text-white ${
                pathname === item.href ? "text-white" : "text-white/62"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href={business.phoneHref} variant="secondary" className="px-5">
            <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
            {business.phone}
          </ButtonLink>
          <ButtonLink href="/contact" className="px-5">
            Free Quote
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-ink px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                  pathname === item.href
                    ? "bg-royal text-white"
                    : "bg-white/5 text-white/72 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <ButtonLink href="/contact">Get a Free Quote</ButtonLink>
              <ButtonLink href={business.phoneHref} variant="secondary">
                Call {business.phone}
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
