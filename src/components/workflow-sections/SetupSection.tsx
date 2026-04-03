import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import type { Workflow } from "@/src/data/workflows";
import { accentByCategory } from "@/src/lib/workflowTheme";

export default function SetupSection({
  steps,
  category,
}: Readonly<{
  steps: Workflow["sections"]["setup"];
  category: string;
}>) {
  const accent = accentByCategory(category);

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <h2 className={["text-sm font-semibold", accent.text].join(" ")}>
          Step-by-Step Setup
        </h2>
        <p className="text-xs text-zinc-500">
          Numbered actions your reader can follow in order.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        defaultValue={steps[0] ? `step-${steps[0].step}` : undefined}
      >
        {steps.map((s) => (
          <AccordionItem key={s.step} value={`step-${s.step}`}>
            <AccordionTrigger className="rounded-2xl">
              <span className="flex items-center gap-3 min-w-0">
                <span
                  className={[
                    "inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold",
                    accent.ring,
                    "flex-none",
                  ].join(" ")}
                >
                  {s.step}
                </span>
                <span className="truncate text-zinc-100">{s.title}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <ul className="space-y-1 pt-3">
                  {s.content.map((action) => (
                    <li key={action} className="text-sm text-zinc-300">
                      <span className="text-zinc-500">• </span>
                      {action}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between gap-4 pt-2 border-t border-white/10">
                  <p className="text-xs text-zinc-500">Duration</p>
                  <p className="text-sm font-medium text-zinc-100">
                    {s.duration}
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
