"use client";

import { workflows } from "@/src/data/workflows";
import { LUCIDE_ICONS, accentByPage } from "@/src/lib/workflowTheme";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

function getActiveSlug(pathname: string) {
  if (pathname.startsWith("/workflows/")) {
    return pathname.split("/workflows/")[1]?.split("/")[0] ?? null;
  }
  return null;
}

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activeSlug = useMemo(() => {
    return getActiveSlug(pathname) ?? workflows[0]?.slug ?? null;
  }, [pathname]);

  return (
    <>
      <button
        type="button"
        className="fixed z-50 top-4 left-6 sm:left-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur px-3 py-2 text-zinc-200 hover:bg-white/10"
        onClick={() => setOpen(true)}
        aria-label="Open workflow sidebar"
      >
        <Menu size={18} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={[
          "fixed z-50 left-0 top-0 h-screen w-72 border-r border-white/10 bg-[#050505]/80 backdrop-blur transition-transform duration-200 ease-out overflow-y-auto",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="relative px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
              <span className="text-xs font-semibold tracking-wide text-zinc-200">
                AI
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-5 text-zinc-100">
                Workflow Directory
              </p>
              <p className="text-xs text-zinc-400 leading-4">
                Browse automations
              </p>
            </div>
          </div>

          <button
            type="button"
            className="absolute top-4 right-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur px-2 py-2 text-zinc-200 hover:bg-white/10"
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="px-3 pb-6">
          <div className="text-xs uppercase tracking-wider text-zinc-500 px-3 mt-2 mb-3">
            Workflows
          </div>
          <ul className="space-y-1">
            {workflows.map((wf) => {
              const accent = accentByPage();
              const isActive = wf.slug === activeSlug;

              const iconName =
                wf.category.trim().toLowerCase() === "data"
                  ? "Database"
                  : wf.category.trim().toLowerCase() === "creative"
                    ? "Sparkles"
                    : wf.category.trim().toLowerCase() === "devops"
                      ? "Terminal"
                      : "Workflow";

              const Icon = LUCIDE_ICONS[iconName] ?? LUCIDE_ICONS.Sparkles;

              return (
                <li key={wf.slug}>
                  <Link
                    href={`/workflows/${wf.slug}`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={[
                      "group flex items-center gap-3 rounded-xl border border-white/10 bg-white/0 px-3 py-2.5 transition-all",
                      "hover:bg-white/5 hover:border-white/20",
                      accent.hover,
                      isActive
                        ? `bg-white/5 border-white/10 ring-1 ring-inset ${accent.ring} ${accent.glow}`
                        : "text-zinc-200",
                    ].join(" ")}
                  >
                    <Icon
                      size={16}
                      className={[
                        isActive ? accent.text : "text-zinc-300",
                      ].join(" ")}
                    />
                    <span
                      className={[
                        "text-sm font-medium truncate",
                        isActive ? accent.text : "text-zinc-300",
                      ].join(" ")}
                      onClick={() => setOpen(false)}
                    >
                      {wf.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
