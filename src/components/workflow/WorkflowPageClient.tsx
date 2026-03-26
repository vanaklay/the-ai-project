"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { Workflow } from "@/src/data/workflows";
import { accentByCategory } from "@/src/lib/workflowTheme";
import DeploymentSection from "@/src/components/workflow-sections/DeploymentSection";
import OverviewSection from "@/src/components/workflow-sections/OverviewSection";
import PromptsSection from "@/src/components/workflow-sections/PromptsSection";
import SetupSection from "@/src/components/workflow-sections/SetupSection";
import UseCasesSection from "@/src/components/workflow-sections/UseCasesSection";

type TabKey = "overview" | "useCases" | "setup" | "prompts" | "deployment";

const tabLabels: Record<TabKey, string> = {
  overview: "Overview",
  useCases: "Use Cases",
  setup: "Step-by-Step Setup",
  prompts: "Prompt Library",
  deployment: "Deployment",
};

export default function WorkflowPageClient({
  workflow,
}: Readonly<{ workflow: Workflow }>) {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  const accent = useMemo(() => accentByCategory(workflow.category), [workflow]);

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-5">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={[
                  "inline-flex items-center gap-2 text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5",
                  accent.text,
                ].join(" ")}
              >
                {workflow.category}
              </span>
              <span className="text-xs text-zinc-500">
                Duration:{" "}
                <span className="text-zinc-200 font-medium">
                  {workflow.duration}
                </span>
              </span>
            </div>

            <h1 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
              {workflow.title}
            </h1>
            <p className="mt-2 text-zinc-300">{workflow.description}</p>
          </div>
        </div>
      </header>

      <section className="rounded-2xl border border-white/10 bg-white/0 backdrop-blur">
        <div className="border-b border-white/10 px-2 sm:px-3 flex gap-1 overflow-x-auto">
          {(Object.keys(tabLabels) as TabKey[]).map((key) => {
            const isActive = key === activeTab;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={[
                  "relative flex items-center justify-center whitespace-nowrap px-3 py-3 text-sm font-medium rounded-xl transition-all",
                  isActive ? "text-zinc-100" : "text-zinc-400 hover:text-zinc-200",
                  isActive ? "ring-1 ring-inset " + accent.ring : "",
                ].join(" ")}
              >
                {tabLabels[key]}
                {isActive && (
                  <motion.div
                    layoutId="tabUnderline"
                    className={[
                      "absolute -bottom-[1px] left-2 right-2 h-[2px] rounded-full",
                      accent.underline,
                    ].join(" ")}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="p-4 sm:p-6">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "overview" && (
                <OverviewSection
                  overview={workflow.sections.overview}
                  category={workflow.category}
                />
              )}
              {activeTab === "useCases" && (
                <UseCasesSection
                  useCases={workflow.sections.useCases}
                  category={workflow.category}
                />
              )}
              {activeTab === "setup" && (
                <SetupSection
                  steps={workflow.sections.setup}
                  category={workflow.category}
                />
              )}
              {activeTab === "prompts" && (
                <PromptsSection
                  prompts={workflow.sections.prompts}
                  category={workflow.category}
                />
              )}
              {activeTab === "deployment" && (
                <DeploymentSection
                  methods={workflow.sections.deployment.methods}
                  category={workflow.category}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

