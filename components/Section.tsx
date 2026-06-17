import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, text, children, className = "" }: SectionProps) {
  return (
    <section className={`px-5 py-20 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-royal">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
          {text ? <p className="mt-4 text-base leading-7 text-white/68">{text}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
