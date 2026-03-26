import Link from "next/link";
import Navbar from "@/src/components/marketing/Navbar";
import Hero from "@/src/components/marketing/Hero";
import Section from "@/src/components/marketing/Section";
import Footer from "@/src/components/marketing/Footer";
import WorkflowCard from "@/src/components/marketing/WorkflowCard";
import { workflows } from "@/src/data/workflows";

export default function MarketingHomePage() {
  const preview = workflows.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />

        <Section
          eyebrow="The gap"
          title="AI content is everywhere. Execution is not."
          subtitle="Most people collect prompts and watch tutorials — then nothing ships. The problem isn’t ideas. It’s the absence of a system."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Consumption loops",
                body: "You binge AI content, but the work never becomes a deliverable.",
              },
              {
                title: "Fragmented tutorials",
                body: "Steps live across tabs, docs, threads, and half-working repos.",
              },
              {
                title: "No reusable structure",
                body: "Each “project” restarts from zero instead of compounding.",
              },
              {
                title: "Prompt chaos",
                body: "Prompts aren’t versioned, labeled, or tied to an outcome.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:bg-white/7 transition-colors"
              >
                <h3 className="text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{c.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Why this platform"
          title="Workflows that end in an outcome"
          subtitle="This isn’t “learn AI.” It’s a directory of execution systems: structured steps, prompt libraries, and deployment paths."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Structured workflows",
                body: "Every workflow has the same predictable anatomy — overview, setup, prompts, deployment.",
              },
              {
                title: "Step-by-step execution",
                body: "Numbered actions with time estimates, so you move forward instead of guessing.",
              },
              {
                title: "Reusable prompt library",
                body: "Copy-ready prompts with expected results — engineered for repeatability, not vibes.",
              },
              {
                title: "Outcome-first design",
                body: "Each workflow is built around what ships: a system, an automation, or a live tool.",
              },
              {
                title: "Fast by default",
                body: "Pre-rendered pages. No runtime fetch. Instant navigation between workflows.",
              },
              {
                title: "Premium dark UX",
                body: "High-contrast UI, glass cards, neon accents — like a product, not a wiki.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-white/0 backdrop-blur p-6 hover:bg-white/5 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.02)]"
              >
                <h3 className="text-base font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm text-zinc-300">{c.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="how-it-works"
          eyebrow="How it works"
          title="Three steps. Real result."
          subtitle="No course. No rabbit holes. Pick a workflow, execute the steps, ship the outcome."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Pick a workflow",
                body: "Choose a system that matches your goal — data, creative, ops, automation.",
              },
              {
                step: "02",
                title: "Follow the structure",
                body: "Overview → setup → prompts → deployment. Everything you need, in order.",
              },
              {
                step: "03",
                title: "Ship the outcome",
                body: "Deploy a real artifact: a web KB, an internal tool, an automation, a pipeline.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-3xl border border-white/10 bg-white/0 backdrop-blur p-6 hover:bg-white/5 transition-colors"
              >
                <p className="text-xs text-zinc-500 font-mono">{s.step}</p>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{s.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Workflow preview"
          title="Start with something you can finish"
          subtitle="Here are a few example systems. Each one includes execution steps, copy-ready prompts, and deployment options."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {preview.map((wf) => (
              <WorkflowCard key={wf.slug} workflow={wf} />
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/workflows"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-200 hover:bg-white/10 transition-colors"
            >
              View all workflows
            </Link>
          </div>
        </Section>

        <Section
          eyebrow="About"
          title="I build systems, not content"
          subtitle="I made this because most AI resources optimize for attention — not execution. This platform is my attempt to package what actually works: repeatable systems that compound."
        >
          <div className="rounded-3xl border border-white/10 bg-white/0 backdrop-blur p-6">
            <p className="text-sm text-zinc-300 leading-relaxed max-w-3xl">
              I’m building a library of workflow systems that turn AI into
              deployed outcomes. The goal is simple: fewer tutorials, more
              shipped tools. If you want to move fast, build repeatability, and
              stop resetting to zero every project — you’ll feel at home here.
            </p>
          </div>
        </Section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="rounded-[2.25rem] border border-cyan-400/20 bg-gradient-to-tr from-cyan-400/10 via-purple-500/5 to-white/5 p-8 sm:p-10 backdrop-blur shadow-[0_0_60px_rgba(34,211,238,0.10)]">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  Ready to build something real?
                </h2>
                <p className="mt-3 text-zinc-200/80 leading-relaxed">
                  Pick a workflow. Execute the steps. Copy the prompts. Deploy
                  the outcome. Repeat.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/workflows"
                    className="inline-flex items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 hover:bg-cyan-400/15 transition-colors shadow-[0_0_28px_rgba(34,211,238,0.18)]"
                  >
                    Start building
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-200 hover:bg-white/10 transition-colors"
                  >
                    Why this exists
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

