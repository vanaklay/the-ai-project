import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-[#050505]/70 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-sm font-semibold tracking-tight text-zinc-100">
              AI Workflow Systems
            </span>
            <span className="text-xs text-zinc-500 hidden sm:inline">
              ship outcomes
            </span>
          </Link>

          <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-300">
            <Link href="/workflows" className="hover:text-zinc-100">
              Workflows
            </Link>
            <Link href="/about" className="hover:text-zinc-100">
              About
            </Link>
            <Link href="/contact" className="hover:text-zinc-100">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/workflows"
              className="inline-flex items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.15)] hover:bg-cyan-400/15 transition-colors"
            >
              Explore Workflows
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

