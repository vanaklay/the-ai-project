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

export function lucideIconByName(name: string): LucideIconType {
  switch (name) {
    case "Wand2":
      return Wand2;
    case "NotebookPen":
      return NotebookPen;
    case "Monitor":
      return Monitor;
    case "Globe":
      return Globe;
    case "Terminal":
      return Terminal;
    case "Database":
      return Database;
    case "ShieldCheck":
      return ShieldCheck;
    case "Rocket":
      return Rocket;
    case "Workflow":
      return Workflow;
    case "FileCode2":
      return FileCode2;
    case "Sparkles":
      return Sparkles;
    default:
      return Sparkles;
  }
}

