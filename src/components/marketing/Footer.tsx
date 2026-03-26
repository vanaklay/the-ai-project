import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-zinc-100">
              AI Workflow Systems
            </p>
            <p className="mt-2 text-sm text-zinc-400 max-w-md">
              Structured workflows that turn prompts into execution.
            </p>
          </div>

          <div className="flex items-center gap-5 text-sm text-zinc-300">
            <Link href="/workflows" className="hover:text-zinc-100">
              Workflows
            </Link>
            <Link href="#" className="hover:text-zinc-100">
              Twitter
            </Link>
            <Link href="#" className="hover:text-zinc-100">
              GitHub
            </Link>
          </div>
        </div>

        <div className="mt-8 text-xs text-zinc-500">
          © {new Date().getFullYear()} AI Workflow Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

