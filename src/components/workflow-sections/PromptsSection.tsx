import type { Workflow } from "@/src/data/workflows";
import { accentByCategory } from "@/src/lib/workflowTheme";
import PromptCard from "@/src/components/workflow/PromptCard";

export default function PromptsSection({
  prompts,
  category,
}: Readonly<{
  prompts: Workflow["sections"]["prompts"];
  category: string;
}>) {
  const accent = accentByCategory(category);

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <h2 className={["text-sm font-semibold", accent.text].join(" ")}>
          Prompt Library
        </h2>
        <p className="text-xs text-zinc-500">
          Copy prompts with one click. Designed for repeatable results.
        </p>
      </div>

      <div className="space-y-4">
        {prompts.map((p) => (
          <PromptCard key={p.label} prompt={p} category={category} />
        ))}
      </div>
    </div>
  );
}

