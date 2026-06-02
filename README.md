# The AI Project

> Workflows that build — une bibliothèque de workflows IA prêts à l'emploi.

## Stack

- **Next.js 16** — App Router, ISR, Server Components
- **Supabase** — PostgreSQL pour le stockage des workflows
- **Tailwind CSS v4** + **Radix UI** + **Framer Motion**
- **TypeScript**
- Déployé sur **Vercel**

## Démarrage

```bash
pnpm install
pnpm dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Variables d'environnement

Copie `.env.example` en `.env.local` et remplis les valeurs :

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | URL publique du projet Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | Clé service_role (ne jamais exposer côté client) |
| `ADMIN_SECRET` | Mot de passe pour la route `/admin` |

Les valeurs Supabase se trouvent dans **Settings > API** de ton tableau de bord.

## Structure

```
app/
  (marketing)/          # Pages publiques (accueil, about, contact)
  (docs)/workflows/     # Catalogue des workflows (layout dédié)
  workflows/[slug]/     # Page détail d'un workflow
  admin/                # Interface d'administration (protégée)
src/
  components/           # Composants UI, marketing, workflow
  data/                 # Données statiques de workflows
  lib/                  # Supabase, auth admin, utilitaires
scripts/
  seed-workflows.ts     # Seed initial de la base Supabase
```

## Commandes utiles

```bash
pnpm dev        # Serveur de développement
pnpm build      # Build de production
pnpm start      # Démarrer le build de production
pnpm lint       # Linter ESLint

# Seed de la base de données
npx tsx scripts/seed-workflows.ts
```

## Déploiement

Voir [DEPLOYMENT.md](DEPLOYMENT.md) pour le guide complet (Vercel + domaine personnalisé).
