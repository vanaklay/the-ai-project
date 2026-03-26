import Sidebar from "@/src/components/app/Sidebar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Sidebar />
      <main className="overflow-y-auto overflow-x-hidden px-4 py-6">
        {children}
      </main>
    </div>
  );
}

