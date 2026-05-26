import Sidebar from "@/src/components/app/Sidebar";
import Footer from "@/src/components/marketing/Footer";
import { getAllWorkflows } from "@/src/data/workflows";

export const revalidate = 60;

export default async function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const workflows = await getAllWorkflows();

  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col">
      <Sidebar workflows={workflows} />
      <main className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}
