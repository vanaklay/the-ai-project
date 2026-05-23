import WorkflowForm from "@/src/components/admin/WorkflowForm";

export const metadata = {
  title: "Admin — Nouveau workflow",
};

export default function AdminPage() {
  return (
    <div className="min-h-screen px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <header className="mb-10">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
            Admin
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Nouveau workflow
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Remplis les métadonnées et colle le JSON des sections. Le workflow
            sera disponible sur{" "}
            <span className="font-mono text-zinc-300">/workflows/&lt;slug&gt;</span>{" "}
            immédiatement après soumission.
          </p>
        </header>

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur p-6">
          <WorkflowForm />
        </div>
      </div>
    </div>
  );
}
