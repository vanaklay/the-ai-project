import { aiInfluencerWorkflow } from "./aiinfluencerWorkflow";
import { ideaToWorkflowSystem } from "./ideaToWorkflowSystem";
import { notebookLmToWebsite } from "./notebookLmToWebsite";
import { searchDemandWorkflow } from "./searchDemandWorkflow";
import { virtualInfluencerBuilder } from "./virtualInfluencerBuilder";
import { voiceToQuoteApp } from "./voiceToQuoteApp";

export interface Workflow {
  id: string;
  slug: string;
  title: string;
  titleParts: {
    head: string;
    tail: string;
  };
  description: string;
  category: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  tools: string[];
  result: string;
  sections: {
    overview: {
      content: string;
      idealFor: string[];
      notSuitedFor: string[];
    };
    useCases: Array<{
      title: string;
      description: string;
      icon: string;
      time: string;
    }>;
    setup: Array<{
      step: number;
      title: string;
      content: string[];
      duration: string;
    }>;
    prompts: Array<{
      label: string;
      text: string;
      expectedResult: string;
    }>;
    deployment: {
      methods: Array<{
        name: string;
        steps: string[];
      }>;
    };
  };
}

const WORKFLOWS: Workflow[] = [
  notebookLmToWebsite,
  voiceToQuoteApp,
  ideaToWorkflowSystem,
  searchDemandWorkflow,
  virtualInfluencerBuilder,
  aiInfluencerWorkflow,
];

export const workflows = [...WORKFLOWS].sort((a, b) =>
  a.title.localeCompare(b.title),
);

export function getAllWorkflowSlugs() {
  return workflows.map((w) => ({ slug: w.slug }));
}

export function getWorkflowBySlug(slug: string): Workflow | null {
  return workflows.find((w) => w.slug === slug) ?? null;
}
