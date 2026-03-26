import { notFound } from "next/navigation";
import { getAllWorkflowSlugs, getWorkflowBySlug } from "@/src/data/workflows";
import WorkflowPageClient from "@/src/components/workflow/WorkflowPageClient";

export function generateStaticParams() {
  return getAllWorkflowSlugs();
}

export default function WorkflowPage({
  params,
}: Readonly<{
  params: { slug: string };
}>) {
  const workflow = getWorkflowBySlug(params.slug);

  if (!workflow) {
    notFound();
  }

  return <WorkflowPageClient workflow={workflow} />;
}

