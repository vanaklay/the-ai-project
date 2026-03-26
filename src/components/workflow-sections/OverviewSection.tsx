import type { Workflow } from "@/src/data/workflows";
import { accentByCategory } from "@/src/lib/workflowTheme";
import { Card } from "@/src/components/ui/card";

export default function OverviewSection({
  overview,
  category,
}: Readonly<{
  overview: Workflow["sections"]["overview"];
  category: string;
}>) {
  const accent = accentByCategory(category);

  return (
    <div className="space-y-5">
      <p className="text-zinc-300 leading-relaxed">{overview.content}</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="p-4 shadow-[0_0_28px_rgba(255,255,255,0.03)]">
          <h2 className={["text-sm font-semibold mb-3", accent.text].join(" ")}>
            Ideal For
          </h2>
          <ul className="list-disc ml-5 space-y-1">
            {overview.idealFor.map((item) => (
              <li key={item} className="text-zinc-300">
                {item}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-4 shadow-[0_0_28px_rgba(255,255,255,0.03)]">
          <h2 className={["text-sm font-semibold mb-3", accent.text].join(" ")}>
            Not Suited For
          </h2>
          <ul className="list-disc ml-5 space-y-1">
            {overview.notSuitedFor.map((item) => (
              <li key={item} className="text-zinc-300">
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}

