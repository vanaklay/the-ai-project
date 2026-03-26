import { notFound } from "next/navigation";
import { getAllWorkflowSlugs, getWorkflowBySlug } from "@/src/data/workflows";
import WorkflowPageClient from "@/src/components/workflow/WorkflowPageClient";

export function generateStaticParams() {
  return getAllWorkflowSlugs();
}

export default async function WorkflowPage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;
  const workflow = getWorkflowBySlug(slug);

  if (!workflow) {
    notFound();
  }

  return <WorkflowPageClient workflow={workflow} />;
}

