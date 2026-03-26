import Link from "next/link";
import { workflows } from "@/src/data/workflows";
import { accentByCategory, lucideIconByName } from "@/src/lib/workflowTheme";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <section className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Premium AI Workflow Directory
        </h1>
        <p className="mt-3 text-zinc-300 max-w-2xl">
          Browse structured, documentation-style automation workflows. Each
          workflow is pre-rendered and organized into tabs so readers can
          quickly understand setup, prompts, and deployment.
        </p>
      </section>

      <section>
        <div className="grid gap-4 sm:grid-cols-2">
          {workflows.map((wf) => {
            const accent = accentByCategory(wf.category);

            const iconName =
              wf.category.trim().toLowerCase() === "data"
                ? "Database"
                : wf.category.trim().toLowerCase() === "creative"
                  ? "Sparkles"
                  : wf.category.trim().toLowerCase() === "devops"
                    ? "Terminal"
                    : "Workflow";

            const Icon = lucideIconByName(iconName);

            return (
              <Link
                key={wf.slug}
                href={`/workflows/${wf.slug}`}
                className={[
                  "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/0 backdrop-blur p-5 transition-all",
                  "hover:bg-white/5 hover:border-white/20",
                  accent.border,
                  accent.glow,
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 min-w-0">
                    <div
                      className={[
                        "h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center flex-none",
                        accent.ring,
                      ].join(" ")}
                    >
                      <Icon size={18} className={accent.text} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <h2 className="text-lg font-semibold truncate">
                          {wf.title}
                        </h2>
                        <span
                          className={[
                            "text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5",
                            accent.text,
                          ].join(" ")}
                        >
                          {wf.category}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-zinc-300 line-clamp-3">
                        {wf.description}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-zinc-500">Duration</p>
                    <p className="text-sm font-medium text-zinc-100">
                      {wf.duration}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-zinc-400">
                    Open workflow →
                  </span>
                  <span className="text-xs text-zinc-500">
                    /workflows/{wf.slug}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
