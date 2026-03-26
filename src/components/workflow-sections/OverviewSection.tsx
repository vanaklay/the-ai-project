import { Card } from "@/src/components/ui/card";
import WorkflowSnapshotStepCard from "@/src/components/workflow/WorkflowSnapshotStepCard";
import type { Workflow } from "@/src/data/workflows";
import { accentByCategory } from "@/src/lib/workflowTheme";
import { CheckCircle2, XCircle } from "lucide-react";

export default function OverviewSection({
  overview,
  category,
  titleParts,
  description,
  tools,
  duration,
  setup,
}: Readonly<{
  overview: Workflow["sections"]["overview"];
  category: string;
  titleParts: Workflow["titleParts"];
  description: string;
  tools: string[];
  duration: string;
  setup: Workflow["sections"]["setup"];
}>) {
  const accent = accentByCategory(category);
  const titleAccent = accentByCategory("workflow");
  const stepCount = setup.length;
  const cssHelper =
    "before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-[linear-gradient(90deg,transparent,var(--line-color),transparent)]";

  return (
    <div className="space-y-10">
      <header className="mb-6 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
          {category}
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
          <span className={titleAccent.title}>{titleParts.head}</span>
          <span>{titleParts.tail}</span>
        </h1>
        <p className="mt-3 text-zinc-300 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {tools.slice(0, 5).map((tool) => (
            <span
              key={tool}
              className={[
                "text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5",
                titleAccent.text,
              ].join(" ")}
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <span className="inline-flex items-center gap-2 text-xs text-zinc-500">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/70" />
            Pre-rendered & fast
          </span>
          <span className="inline-flex items-center gap-2 text-xs text-zinc-500">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-300/70" />
            Copy-ready prompts
          </span>
          <span className="inline-flex items-center gap-2 text-xs text-zinc-500">
            <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
            Outcome-driven steps
          </span>
        </div>
      </header>

      <section className="text-center">
        <h2 className="text-xs uppercase tracking-[0.25em] text-zinc-500">
          WORKFLOW SNAPSHOT
        </h2>
        <p className="mt-4 text-3xl font-semibold tracking-tight">
          {stepCount} steps, ~ {duration}
        </p>
        <p className="mt-3 text-sm text-zinc-400 max-w-2xl mx-auto">
          Built to be executed. Follow the structure, then ship the outcome.
        </p>

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-x-auto pb-2 mx-auto">
          {setup.map((s) => (
            <WorkflowSnapshotStepCard key={s.step} step={s} accent={accent} />
          ))}
        </div>
      </section>

      <div className="space-y-3 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          IMPORTANT TO KNOW
        </p>
        <p className="text-zinc-300 leading-relaxed max-w-2xl mx-auto">
          {overview.content}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:max-w-3xl mx-auto">
        <Card
          className={[
            "relative p-6 shadow-[0_0_28px_rgba(255,255,255,0.03)]",
            cssHelper,
          ].join(" ")}
          style={{ "--line-color": "#00E5FF" } as React.CSSProperties}
        >
          <h2
            className={["text-sm font-semibold mb-4", "text-green-400"].join(
              " ",
            )}
          >
            Ideal For
          </h2>
          <ul className="space-y-2">
            {overview.idealFor.map((item) => (
              <li
                key={item}
                className="flex items-start justify-start gap-2 text-sm text-zinc-200"
              >
                <CheckCircle2 size={16} className="text-green-400" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card
          className={[
            "relative p-6 shadow-[0_0_28px_rgba(255,255,255,0.03)]",
            cssHelper,
          ].join(" ")}
          style={{ "--line-color": "#EC4899" } as React.CSSProperties}
        >
          <h2 className="text-sm font-semibold mb-4 text-rose-400">
            Not suited for
          </h2>
          <ul className="space-y-2">
            {overview.notSuitedFor.map((item) => (
              <li
                key={item}
                className="flex items-start justify-start gap-2 text-sm text-zinc-200"
              >
                <XCircle size={16} className="text-rose-400" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
