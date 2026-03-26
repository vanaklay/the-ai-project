import type { Workflow } from "@/src/data/workflows";
import { LUCIDE_ICONS, accentByCategory } from "@/src/lib/workflowTheme";
import { Card } from "@/src/components/ui/card";

export default function UseCasesSection({
  useCases,
  category,
}: Readonly<{
  useCases: Workflow["sections"]["useCases"];
  category: string;
}>) {
  const accent = accentByCategory(category);

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <h2 className={["text-sm font-semibold", accent.text].join(" ")}>
          Use Cases
        </h2>
        <p className="text-xs text-zinc-500">
          Practical scenarios + how long each step typically takes.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {useCases.map((uc) => {
          const Icon = LUCIDE_ICONS[uc.icon] ?? LUCIDE_ICONS.Sparkles;
          return (
            <Card
              key={uc.title}
              className="p-4 hover:bg-white/5 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div
                  className={[
                    "h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center flex-none",
                    accent.ring,
                  ].join(" ")}
                >
                  <Icon size={18} className={accent.text} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-semibold truncate">
                      {uc.title}
                    </h3>
                    <span className="text-xs text-zinc-500">{uc.time}</span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-300">
                    {uc.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

