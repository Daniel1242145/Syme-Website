import Link from "next/link";
import { business, contactMethods, navItems, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707] px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-royal text-lg font-black text-white">
              S
            </span>
            <span className="text-base font-bold text-white">{business.name}</span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/58">
            Premium carpet cleaning and property cleaning services for homes, rentals, offices and local businesses across Christchurch.
          </p>
          <div className="mt-6 space-y-3">
            {contactMethods.map((method) => (
              <Link
                key={method.label}
                href={method.href}
                className="flex items-center gap-3 text-sm text-white/68 transition hover:text-white"
              >
                <method.icon className="h-4 w-4 text-royal" aria-hidden="true" />
                {method.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/40">Pages</h3>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/64 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/40">Services</h3>
          <div className="mt-5 grid gap-3">
            {services.map((service) => (
              <Link key={service.title} href="/services" className="text-sm text-white/64 transition hover:text-white">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {business.name}. All rights reserved.</p>
        <p>Carpet Cleaning Christchurch | Commercial Cleaning Christchurch</p>
      </div>
    </footer>
  );
}
