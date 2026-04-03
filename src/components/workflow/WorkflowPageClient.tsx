"use client";

import DeploymentSection from "@/src/components/workflow-sections/DeploymentSection";
import OverviewSection from "@/src/components/workflow-sections/OverviewSection";
import PromptsSection from "@/src/components/workflow-sections/PromptsSection";
import SetupSection from "@/src/components/workflow-sections/SetupSection";
import UseCasesSection from "@/src/components/workflow-sections/UseCasesSection";
import type { Workflow } from "@/src/data/workflows";
import { accentByCategory } from "@/src/lib/workflowTheme";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useMemo, useState } from "react";

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

  const accent = useMemo(() => accentByCategory("workflow"), [workflow]);

  return (
    <div className="relative overflow-x-hidden pt-8">
      <div className="relative max-w-7xl mx-auto px-2 sm:px-0">
        <section className="rounded-2xl border border-white/10 bg-white/0 backdrop-blur shadow-[0_0_45px_rgba(34,211,238,0.06)]">
          <div className="border-b border-white/10 px-2 sm:px-3 flex gap-1 overflow-x-auto overflow-y-hidden">
            {(Object.keys(tabLabels) as TabKey[]).map((key) => {
              const isActive = key === activeTab;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={[
                    "relative flex items-center justify-center whitespace-nowrap px-3 py-3 text-sm font-medium rounded-xl transition-all",
                    isActive ? accent.text : accent.mutedText,
                  ].join(" ")}
                >
                  {tabLabels[key]}
                  {isActive && (
                    <motion.div
                      layoutId="tabUnderline"
                      className={[
                        "absolute -bottom-px left-2 right-2 h-[2px] rounded-full",
                        accent.underline,
                      ].join(" ")}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="p-4 sm:p-6">
            <MotionConfig reducedMotion="never">
              <AnimatePresence mode="wait" initial={false}>
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <OverviewSection
                      overview={workflow.sections.overview}
                      category={workflow.category}
                      titleParts={workflow.titleParts}
                      description={workflow.description}
                      tools={workflow.tools}
                      duration={workflow.duration}
                      setup={workflow.sections.setup}
                    />
                  </motion.div>
                )}

                {activeTab === "useCases" && (
                  <motion.div
                    key="useCases"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <UseCasesSection
                      useCases={workflow.sections.useCases}
                      category={workflow.category}
                    />
                  </motion.div>
                )}

                {activeTab === "setup" && (
                  <motion.div
                    key="setup"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <SetupSection
                      steps={workflow.sections.setup}
                      category={workflow.category}
                    />
                  </motion.div>
                )}

                {activeTab === "prompts" && (
                  <motion.div
                    key="prompts"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <PromptsSection
                      prompts={workflow.sections.prompts}
                      category={workflow.category}
                    />
                  </motion.div>
                )}

                {activeTab === "deployment" && (
                  <motion.div
                    key="deployment"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <DeploymentSection
                      methods={workflow.sections.deployment.methods}
                      category={workflow.category}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </MotionConfig>
          </div>
        </section>
      </div>
    </div>
  );
}
