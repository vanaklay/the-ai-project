"use client";

import { useEffect, useMemo, useState } from "react";
import type { Workflow } from "@/src/data/workflows";
import { accentByCategory } from "@/src/lib/workflowTheme";

export default function PromptCard({
  prompt,
  category,
}: Readonly<{
  prompt: Workflow["sections"]["prompts"][number];
  category: string;
}>) {
  const [copied, setCopied] = useState(false);
  const accent = useMemo(() => accentByCategory(category), [category]);

  useEffect(() => {
    if (!copied) return;

    const t = setTimeout(() => setCopied(false), 1200);
    return () => clearTimeout(t);
  }, [copied]);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(prompt.text);
      setCopied(true);
    } catch {
      // Clipboard can fail on non-secure contexts; fall back to no-op.
      setCopied(false);
    }
  }

  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-white/0 backdrop-blur p-4 transition-colors hover:bg-white/5",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="min-w-0">
          <h3 className="text-base font-semibold truncate">{prompt.label}</h3>
          <p className="text-xs text-zinc-500 mt-1">
            Expected result:{" "}
            <span className="text-zinc-300">{prompt.expectedResult}</span>
          </p>
        </div>

        <button
          type="button"
          onClick={onCopy}
          disabled={copied}
          className={[
            "rounded-xl border px-3 py-2 text-sm font-medium transition-all",
            "border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10",
            accent.ring,
            copied ? "opacity-90" : "",
          ].join(" ")}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <textarea
        readOnly
        value={prompt.text}
        className={[
          "w-full min-h-40 resize-y rounded-xl border border-white/10 bg-black/20",
          "p-3 font-mono text-sm text-zinc-100 outline-none",
          accent.focusRing,
        ].join(" ")}
      />
    </div>
  );
}

