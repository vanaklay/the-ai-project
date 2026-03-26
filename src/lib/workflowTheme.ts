import {
  Database,
  FileCode2,
  Globe,
  Monitor,
  NotebookPen,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  Wand2,
  Workflow,
  type LucideIcon as LucideIconType,
} from "lucide-react";

export const LUCIDE_ICONS: Record<string, LucideIconType> = {
  Wand2,
  NotebookPen,
  Monitor,
  Globe,
  Terminal,
  Database,
  ShieldCheck,
  Rocket,
  Workflow,
  FileCode2,
  Sparkles,
};

// Small set of pre-defined Tailwind class strings so Tailwind can
// statically detect them during build.
export function accentByCategory(category: string) {
  const key = category.trim().toLowerCase();

  if (key === "data") {
    return {
      text: "text-cyan-300",
      border: "border-cyan-400/40",
      ring: "ring-cyan-400/30",
      underline: "bg-cyan-400/70",
      focusRing: "focus:ring-1 focus:ring-inset focus:ring-cyan-400/30",
      hover: "hover:border-cyan-400/50",
      glow: "shadow-[0_0_22px_rgba(34,211,238,0.25)]",
    };
  }

  if (key === "creative") {
    return {
      text: "text-purple-300",
      border: "border-purple-400/40",
      ring: "ring-purple-400/30",
      underline: "bg-purple-400/70",
      focusRing: "focus:ring-1 focus:ring-inset focus:ring-purple-400/30",
      hover: "hover:border-purple-400/50",
      glow: "shadow-[0_0_22px_rgba(192,132,252,0.24)]",
    };
  }

  if (key === "devops") {
    return {
      text: "text-emerald-300",
      border: "border-emerald-400/40",
      ring: "ring-emerald-400/30",
      underline: "bg-emerald-400/70",
      focusRing: "focus:ring-1 focus:ring-inset focus:ring-emerald-400/30",
      hover: "hover:border-emerald-400/50",
      glow: "shadow-[0_0_22px_rgba(52,211,153,0.22)]",
    };
  }

  if (key === "workflow") {
    return {
      text: "text-cyan-300",
      border: "border-cyan-400/40",
      ring: "ring-cyan-400/30",
      underline: "bg-cyan-400/70",
      mutedText: "text-zinc-400 hover:text-cyan-200",
      focusRing: "focus:ring-1 focus:ring-inset focus:ring-cyan-400/30",
      title:
        "bg-[linear-gradient(135deg,#00E5FF,#A855F7,#EC4899)] bg-clip-text text-transparent bg-[length:200%_200%] animate-grad-shift",
    };
  }

  return {
    text: "text-zinc-300",
    border: "border-white/15",
    ring: "ring-white/15",
    underline: "bg-white/30",
    focusRing: "focus:ring-1 focus:ring-inset focus:ring-white/15",
    hover: "hover:border-white/25",
    glow: "shadow-[0_0_18px_rgba(255,255,255,0.10)]",
  };
}

export function accentByPage() {
  return {
    cta: "border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.18)] hover:bg-cyan-400/15 transition-colors",
    text: "text-cyan-300",
    border: "border-cyan-400/30",
    ring: "ring-cyan-400/30",
    underline: "bg-cyan-400/70",
    mutedText: "text-zinc-400 hover:text-cyan-200",
    focusRing: "focus:ring-1 focus:ring-inset focus:ring-cyan-400/30",
    hover: "hover:border-cyan-400/40",
    glow: "shadow-[0_0_28px_rgba(34,211,238,0.18)]",
  };
}

export function lucideIconByName(name: string): LucideIconType {
  return LUCIDE_ICONS[name] ?? Sparkles;
}
