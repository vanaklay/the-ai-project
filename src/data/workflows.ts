import { supabase } from "@/src/lib/supabase";

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

type WorkflowRow = {
  id: string;
  slug: string;
  title: string;
  data: Omit<Workflow, "id" | "slug" | "title">;
};

function rowToWorkflow(row: WorkflowRow): Workflow {
  return { id: row.id, slug: row.slug, title: row.title, ...row.data };
}

export async function getAllWorkflows(): Promise<Workflow[]> {
  const { data, error } = await supabase
    .from("workflows")
    .select("id, slug, title, data")
    .order("title", { ascending: true });

  if (error) throw new Error(`Failed to fetch workflows: ${error.message}`);
  return (data as WorkflowRow[]).map(rowToWorkflow);
}

export async function getAllWorkflowSlugs(): Promise<{ slug: string }[]> {
  const { data, error } = await supabase
    .from("workflows")
    .select("slug");

  if (error) throw new Error(`Failed to fetch slugs: ${error.message}`);
  return data as { slug: string }[];
}

export async function getWorkflowBySlug(slug: string): Promise<Workflow | null> {
  const { data, error } = await supabase
    .from("workflows")
    .select("id, slug, title, data")
    .eq("slug", slug)
    .single();

  if (error) {
    if (error.code === "PGRST116") return null;
    throw new Error(`Failed to fetch workflow: ${error.message}`);
  }
  return rowToWorkflow(data as WorkflowRow);
}
