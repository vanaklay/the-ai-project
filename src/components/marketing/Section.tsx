import type { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: Readonly<{
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}>) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-zinc-300 leading-relaxed">{subtitle}</p>
          ) : null}
        </div>

        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

