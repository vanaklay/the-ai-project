# Guide de déploiement — Vercel + Domaine personnalisé

## Stack
- Next.js 16 (App Router, ISR, Server Actions)
- Supabase (PostgreSQL + Realtime)
- Déployé sur Vercel

---

## 1. Pré-requis

- [ ] Code pushé sur la branche `main` (ou la branche de production choisie)
- [ ] Compte Vercel créé sur [vercel.com](https://vercel.com) (gratuit suffisant)
- [ ] Accès au dashboard Supabase pour récupérer les clés API
- [ ] Accès au panneau DNS de ton registrar (OVH / Namecheap / Gandi / Cloudflare…)

---

## 2. Variables d'environnement nécessaires

| Variable | Où la trouver | Exposée client ? |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase > Settings > API > Project URL | ✅ Oui (safe) |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase > Settings > API > `service_role` | ❌ Non (secret) |
| `ADMIN_SECRET` | Génère avec `openssl rand -hex 32` | ❌ Non (secret) |

> ⚠️ `SUPABASE_SERVICE_ROLE_KEY` donne un accès total à ta base. Ne la mets jamais dans
> une variable préfixée `NEXT_PUBLIC_` et ne la commite jamais.
> ⚠️ `ADMIN_SECRET` protège la route `/admin`. Utilise une valeur longue et aléatoire.

---

## 3. Déploiement sur Vercel

### Étape 1 — Importer le projet

1. Va sur [vercel.com/new](https://vercel.com/new)
2. Clique **"Add GitHub Account"** si ce n'est pas déjà fait
3. Sélectionne le dépôt `the-ai-project`
4. Vercel détecte automatiquement Next.js → laisse les paramètres par défaut

### Étape 2 — Configurer les variables d'environnement

Dans la page d'import Vercel, section **"Environment Variables"** :

| Name | Value | Environments |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxxx.supabase.co` | Production, Preview, Development |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJ...` | Production, Preview, Development |
| `ADMIN_SECRET` | valeur générée avec `openssl rand -hex 32` | Production uniquement |

> Les deux premières valeurs sont à copier depuis **Supabase > Settings > API**.

### Étape 3 — Déployer

Clique **"Deploy"**. Le premier build prend ~2 minutes.

Vercel exécute automatiquement :
```
pnpm install
pnpm build   # next build
```

Si le build passe → tu reçois une URL en `*.vercel.app`. Teste-la avant de passer au domaine.

---

## 4. Connecter le domaine personnalisé

### Dans Vercel

1. Va dans ton projet → **Settings > Domains**
2. Clique **"Add Domain"**
3. Entre `ton-domaine.com` (sans `www` d'abord)
4. Vercel te donne les enregistrements DNS à créer

### Enregistrements DNS à créer chez ton registrar

Vercel fournit deux options — choisis selon ton registrar :

**Option A — Nameservers Vercel (recommandé si ton registrar le permet)**

Remplace les nameservers par ceux de Vercel (indiqués dans le dashboard). Vercel gère tout le DNS.

**Option B — Enregistrements CNAME/A manuels**

| Type | Nom | Valeur | TTL |
|---|---|---|---|
| `A` | `@` (racine) | `76.76.21.21` | 3600 |
| `CNAME` | `www` | `cname.vercel-dns.com` | 3600 |

> Les IPs Vercel peuvent varier — utilise toujours les valeurs affichées dans ton dashboard Vercel,
> pas celles de ce fichier.

### Propagation DNS

La propagation prend entre **5 minutes et 48 heures** selon le registrar et le TTL précédent.

Vérification :
```bash
dig ton-domaine.com A
# doit retourner l'IP Vercel
```

### SSL

Vercel génère automatiquement un certificat Let's Encrypt dès que le DNS est validé. Aucune action manuelle.

---

## 5. Variables d'env après déploiement initial

Si tu modifies des variables d'env dans Vercel après le premier déploiement :

1. Va dans **Settings > Environment Variables**
2. Ajoute ou modifie la variable
3. Va dans **Deployments** → redéploie le dernier commit ("Redeploy")

---

## 6. Vérifier que le déploiement est réussi

- [ ] `https://ton-domaine.com` charge la page marketing
- [ ] `https://ton-domaine.com/workflows` affiche tous les workflows
- [ ] `https://ton-domaine.com/workflows/<slug>` affiche un workflow complet avec tous ses onglets
- [ ] `https://ton-domaine.com/admin` redirige vers `/admin/login` (non connecté) puis donne accès après le bon mot de passe
- [ ] Créer un workflow via `/admin` → redirection vers le nouveau workflow ✅
- [ ] Headers de sécurité présents :
  ```bash
  curl -I https://ton-domaine.com | grep -i "x-frame\|x-content\|referrer"
  ```

---

## 7. Erreurs courantes

### Build échoue : "Missing environment variable"

Les variables ne sont pas configurées dans Vercel. Va dans **Settings > Environment Variables** et vérifie que `NEXT_PUBLIC_SUPABASE_URL` et `SUPABASE_SERVICE_ROLE_KEY` sont bien renseignées.

### Page blanche ou erreur 500

Vérifie les logs dans **Vercel > Deployments > [dernier build] > Functions**.
Cause la plus probable : la clé Supabase est incorrecte ou la table `workflows` n'existe pas encore.

### DNS ne pointe pas encore

Normal — attends la propagation. Vérifie avec :
```bash
dig ton-domaine.com +short
```

### `www.ton-domaine.com` ne redirige pas

Ajoute `www.ton-domaine.com` comme deuxième domaine dans **Vercel > Settings > Domains** et configure la redirection vers l'apex (`ton-domaine.com`).

### Erreur CORS avec Supabase

Ajoute ton domaine dans **Supabase > Authentication > URL Configuration > Site URL** et **Redirect URLs**.

---

## 8. Redéploiement automatique

Chaque `git push` sur `main` déclenche automatiquement un nouveau déploiement Vercel.
Les PRs créent des déploiements de preview sur des URLs temporaires (`*.vercel.app`).

---

## 9. Supabase — base de données de production

La base Supabase est partagée entre dev local et production (même projet).
Si tu veux isoler prod/dev, crée deux projets Supabase distincts et utilise des variables d'env différentes par environnement dans Vercel (onglet "Production" vs "Preview").
