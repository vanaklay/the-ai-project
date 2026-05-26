"use client";

import { useActionState } from "react";
import { verifyAdmin, type LoginState } from "./action";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/40 focus:border-cyan-400/30 transition-colors";

export default function AdminLoginPage() {
  const [state, action, pending] = useActionState<LoginState, FormData>(
    verifyAdmin,
    null
  );

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <header className="mb-8 text-center">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
            Admin
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">Accès restreint</h1>
          <p className="mt-2 text-sm text-zinc-400">Saisir le mot de passe pour continuer.</p>
        </header>

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur p-6">
          <form action={action} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-xs font-medium text-zinc-400 mb-1.5">
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoFocus
                autoComplete="current-password"
                className={inputClass}
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
              {pending ? "Vérification…" : "Accéder"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
