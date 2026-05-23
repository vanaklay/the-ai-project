import Sidebar from "@/src/components/app/Sidebar";
import { getAllWorkflows } from "@/src/data/workflows";

export const revalidate = 60;

export default async function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const workflows = await getAllWorkflows();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Sidebar workflows={workflows} />
      <main className="overflow-y-auto overflow-x-hidden px-4 py-6">
        {children}
      </main>
    </div>
  );
}
