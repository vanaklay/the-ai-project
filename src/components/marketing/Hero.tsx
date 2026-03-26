import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Execution-first AI
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
              Turn AI ideas into{" "}
              <span className="text-cyan-200 drop-shadow-[0_0_20px_rgba(34,211,238,0.18)]">
                real systems
              </span>
              .
            </h1>
            <p className="mt-5 text-zinc-300 text-lg leading-relaxed max-w-xl">
              Stop collecting prompts. Ship workflows with structured steps,
              reusable prompt libraries, and deployment paths that end in an
              outcome: a tool, an automation, or a live system.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                href="/workflows"
                className="inline-flex items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.18)] hover:bg-cyan-400/15 transition-colors"
              >
                Explore Workflows
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-200 hover:bg-white/10 transition-colors"
              >
                How it works
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/70" />
                Pre-rendered pages (fast)
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-300/70" />
                Copy-ready prompts
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                Outcome-driven steps
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 blur-3xl opacity-40 bg-gradient-to-tr from-cyan-500/20 via-purple-500/10 to-white/5 rounded-[2rem]" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-5 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-zinc-100">
                  Workflow Preview
                </p>
                <span className="text-xs text-zinc-500">tabs • prompts • deploy</span>
              </div>

              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Overview
                  </p>
                  <p className="mt-2 text-sm text-zinc-200">
                    Outcome, audience, limits — no fluff.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Setup
                  </p>
                  <p className="mt-2 text-sm text-zinc-200">
                    Numbered execution steps with time estimates.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Prompt Library
                  </p>
                  <pre className="mt-2 text-xs text-zinc-200 font-mono whitespace-pre-wrap">
                    {"// copy-ready prompts\n// expected results\n// reusable blocks"}
                  </pre>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                <p className="text-sm text-cyan-100 font-medium">
                  Build systems, not content.
                </p>
                <span className="text-xs text-cyan-200/80">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

