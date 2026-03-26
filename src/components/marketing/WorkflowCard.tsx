import Link from "next/link";
import type { Workflow } from "@/src/data/workflows";
import { LUCIDE_ICONS, accentByCategory } from "@/src/lib/workflowTheme";

export default function WorkflowCard({
  workflow,
}: Readonly<{
  workflow: Workflow;
}>) {
  const accent = accentByCategory(workflow.category);
  const iconName =
    workflow.category.trim().toLowerCase() === "data"
      ? "Database"
      : workflow.category.trim().toLowerCase() === "creative"
        ? "Sparkles"
        : workflow.category.trim().toLowerCase() === "devops"
          ? "Terminal"
          : "Workflow";
  const Icon = LUCIDE_ICONS[iconName] ?? LUCIDE_ICONS.Sparkles;

  return (
    <Link
      href={`/workflows/${workflow.slug}`}
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
            <h3 className="text-lg font-semibold truncate">{workflow.title}</h3>
            <p className="mt-2 text-sm text-zinc-300 line-clamp-3">
              {workflow.description}
            </p>
          </div>
        </div>

        <div className="text-right flex-none">
          <p className="text-xs text-zinc-500">Duration</p>
          <p className="text-sm font-medium text-zinc-100">
            {workflow.duration}
          </p>
          <p className="mt-2 text-xs text-zinc-500">Difficulty</p>
          <p className="text-sm font-medium text-zinc-100">
            {workflow.difficulty}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-zinc-400">Open workflow →</span>
        <span className="text-xs text-zinc-500">/workflows/{workflow.slug}</span>
      </div>
    </Link>
  );
}

