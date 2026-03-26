"use client";

import type { Workflow } from "@/src/data/workflows";
import type { accentByCategory } from "@/src/lib/workflowTheme";

export default function WorkflowSnapshotStepCard({
  step,
  accent,
}: Readonly<{
  step: Workflow["sections"]["setup"][number];
  accent: ReturnType<typeof accentByCategory>;
}>) {
  return (
    <div
      className={[
        "w-full rounded-3xl border border-white/10 bg-white/0 backdrop-blur p-6",
        "shadow-[0_0_34px_rgba(34,211,238,0.06)]",
        accent.glow,
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-zinc-500 font-mono">{`Step ${step.step}`}</p>
        <span className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-200">
          {step.duration}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
      <p className="mt-2 text-sm text-zinc-300">{step.content[0] ?? "—"}</p>

      <div className="mt-4 h-px bg-white/10" />

      <ul className="mt-4 space-y-1">
        {step.content.slice(0, 2).map((action) => (
          <li
            key={action}
            className="text-sm text-zinc-300 flex items-start gap-2"
          >
            <span
              className={[
                "mt-1 h-1.5 w-1.5 rounded-full",
                accent.text,
              ].join(" ")}
            />
            <span className="leading-relaxed">{action}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

