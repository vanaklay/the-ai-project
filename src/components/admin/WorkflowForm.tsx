"use client";

import { useActionState } from "react";
import { createWorkflow, type ActionState } from "@/app/(marketing)/admin/actions";

const SECTIONS_TEMPLATE = JSON.stringify(
  {
    overview: {
      content: "",
      idealFor: [""],
      notSuitedFor: [""],
    },
    useCases: [
      { title: "", description: "", icon: "rocket", time: "" },
    ],
    setup: [
      { step: 1, title: "", content: [""], duration: "" },
    ],
    prompts: [
      { label: "", text: "", expectedResult: "" },
    ],
    deployment: {
      methods: [{ name: "", steps: [""] }],
    },
  },
  null,
  2
);

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/40 focus:border-cyan-400/30 transition-colors";

const labelClass = "block text-xs font-medium text-zinc-400 mb-1.5";

export default function WorkflowForm() {
  const [state, action, pending] = useActionState<ActionState, FormData>(
    createWorkflow,
    null
  );

  return (
    <form action={action} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="id" className={labelClass}>
            ID <span className="text-red-400">*</span>
          </label>
          <input
            id="id"
            name="id"
            type="text"
            required
            placeholder="my-workflow-001"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="slug" className={labelClass}>
            Slug <span className="text-red-400">*</span>
          </label>
          <input
            id="slug"
            name="slug"
            type="text"
            required
            placeholder="my-workflow"
            className={inputClass}
          />
          <p className="mt-1 text-xs text-zinc-500">
            URL : /workflows/&lt;slug&gt;. Minuscules et tirets uniquement.
          </p>
        </div>
      </div>

      <div>
        <label htmlFor="title" className={labelClass}>
          Titre <span className="text-red-400">*</span>
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          placeholder="Mon Workflow IA"
          className={inputClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="titleHead" className={labelClass}>
            Titre — partie principale
          </label>
          <input
            id="titleHead"
            name="titleHead"
            type="text"
            placeholder="Mon Workflow"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="titleTail" className={labelClass}>
            Titre — suffixe coloré
          </label>
          <input
            id="titleTail"
            name="titleTail"
            type="text"
            placeholder=" → Résultat"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="description" className={labelClass}>
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={2}
          placeholder="Ce workflow permet de…"
          className={inputClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="category" className={labelClass}>
            Catégorie
          </label>
          <input
            id="category"
            name="category"
            type="text"
            placeholder="Content Automation"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="duration" className={labelClass}>
            Durée
          </label>
          <input
            id="duration"
            name="duration"
            type="text"
            placeholder="20 min"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="difficulty" className={labelClass}>
            Difficulté
          </label>
          <select
            id="difficulty"
            name="difficulty"
            defaultValue="Beginner"
            className={inputClass}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="tools" className={labelClass}>
          Outils (séparés par des virgules)
        </label>
        <input
          id="tools"
          name="tools"
          type="text"
          placeholder="ChatGPT, Notion, Make"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="result" className={labelClass}>
          Résultat attendu
        </label>
        <input
          id="result"
          name="result"
          type="text"
          placeholder="Un site web déployé en 20 minutes"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="sections" className={labelClass}>
          Sections (JSON) <span className="text-red-400">*</span>
        </label>
        <p className="mb-2 text-xs text-zinc-500">
          Structure complète : overview, useCases, setup, prompts, deployment.
        </p>
        <textarea
          id="sections"
          name="sections"
          rows={20}
          required
          defaultValue={SECTIONS_TEMPLATE}
          className={`${inputClass} font-mono text-xs leading-relaxed`}
          spellCheck={false}
        />
      </div>

      {state?.error && (
        <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3">
          <p className="text-sm text-red-400">{state.error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 hover:bg-cyan-400/15 transition-colors shadow-[0_0_28px_rgba(34,211,238,0.12)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? "Création en cours…" : "Créer le workflow"}
      </button>
    </form>
  );
}
