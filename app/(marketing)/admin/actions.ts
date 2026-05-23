"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { supabase } from "@/src/lib/supabase";
import type { Workflow } from "@/src/data/workflows";

export type ActionState = { error: string } | null;

export async function createWorkflow(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  const id = (formData.get("id") as string).trim();
  const slug = (formData.get("slug") as string).trim();
  const title = (formData.get("title") as string).trim();
  const sectionsRaw = formData.get("sections") as string;

  if (!id || !slug || !title) {
    return { error: "id, slug et title sont requis." };
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return { error: "Le slug ne doit contenir que des lettres minuscules, chiffres et tirets." };
  }

  let sections: Workflow["sections"];
  try {
    sections = JSON.parse(sectionsRaw);
  } catch {
    return { error: "Le JSON des sections est invalide. Vérifiez la syntaxe." };
  }

  const data: Omit<Workflow, "id" | "slug" | "title"> = {
    titleParts: {
      head: (formData.get("titleHead") as string).trim(),
      tail: (formData.get("titleTail") as string).trim(),
    },
    description: (formData.get("description") as string).trim(),
    category: (formData.get("category") as string).trim(),
    duration: (formData.get("duration") as string).trim(),
    difficulty: formData.get("difficulty") as Workflow["difficulty"],
    tools: (formData.get("tools") as string)
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    result: (formData.get("result") as string).trim(),
    sections,
  };

  const { error } = await supabase
    .from("workflows")
    .insert({ id, slug, title, data });

  if (error) {
    if (error.code === "23505") {
      return { error: "Un workflow avec cet id ou ce slug existe déjà." };
    }
    return { error: error.message };
  }

  revalidatePath("/workflows");
  revalidatePath(`/workflows/${slug}`);
  redirect(`/workflows/${slug}`);
}
