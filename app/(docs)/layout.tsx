import Sidebar from "@/src/components/app/Sidebar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto sm:pl-72 px-4 py-6">
        {children}
      </main>
    </div>
  );
}

