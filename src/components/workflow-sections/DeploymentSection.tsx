import type { Workflow } from "@/src/data/workflows";
import { accentByCategory } from "@/src/lib/workflowTheme";
import { Card } from "@/src/components/ui/card";

export default function DeploymentSection({
  methods,
  category,
}: Readonly<{
  methods: Workflow["sections"]["deployment"]["methods"];
  category: string;
}>) {
  const accent = accentByCategory(category);

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <h2 className={["text-sm font-semibold", accent.text].join(" ")}>
          Deployment
        </h2>
        <p className="text-xs text-zinc-500">
          Hosting and go-live instructions for this workflow.
        </p>
      </div>

      <div className="space-y-4">
        {methods.map((m) => (
          <Card
            key={m.name}
            className="p-4 shadow-[0_0_28px_rgba(255,255,255,0.02)]"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-base font-semibold">{m.name}</h3>
              <span
                className={[
                  "text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5",
                  accent.text,
                ].join(" ")}
              >
                Steps
              </span>
            </div>

            <ol className="mt-3 space-y-2 list-decimal ml-6">
              {m.steps.map((s) => (
                <li key={s} className="text-sm text-zinc-300">
                  {s}
                </li>
              ))}
            </ol>
          </Card>
        ))}
      </div>
    </div>
  );
}

