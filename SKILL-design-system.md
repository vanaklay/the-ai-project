# Design System — AI Workflow Platform

Premium dark UI built on Tailwind CSS v4. Every decision prioritises readability, depth, and execution-focus over decoration.

---

## Foundation

### Background & foreground
```css
--background: #050505   /* near-black, not pure black */
--foreground: #ededed   /* off-white, softer than #fff */
```
Body background is always `#050505`. Never use `bg-black` or `bg-gray-*`.

### Typography
- **Font**: Geist Sans (headings + body), Geist Mono (metadata, code, slugs)
- **Heading**: `font-semibold tracking-tight` — never `font-bold`
- **Eyebrow**: `text-xs uppercase tracking-[0.2em] text-zinc-500` — always above a heading
- **Body**: `text-zinc-300 leading-relaxed`
- **Muted**: `text-zinc-400` or `text-zinc-500`
- **Mono label**: `font-mono text-xs text-zinc-500`

### Scale
| Role | Classes |
|---|---|
| Page title | `text-3xl sm:text-4xl font-semibold tracking-tight` |
| Section title | `text-2xl sm:text-3xl font-semibold tracking-tight` |
| Card title | `text-lg font-semibold` |
| Label | `text-sm font-semibold` |
| Small label | `text-xs font-medium` |
| Body | `text-sm text-zinc-300` |
| Eyebrow | `text-xs uppercase tracking-[0.2em] text-zinc-500` |

---

## Color & Accent System

Four accent themes driven by `accentByCategory(category)` in `src/lib/workflowTheme.ts`.

| Category value | Accent color | Text | Border | Glow |
|---|---|---|---|---|
| `"data"` | Cyan | `text-cyan-300` | `border-cyan-400/40` | `shadow-[0_0_22px_rgba(34,211,238,0.25)]` |
| `"creative"` | Purple | `text-purple-300` | `border-purple-400/40` | `shadow-[0_0_22px_rgba(192,132,252,0.24)]` |
| `"devops"` | Emerald | `text-emerald-300` | `border-emerald-400/40` | `shadow-[0_0_22px_rgba(52,211,153,0.22)]` |
| anything else | Zinc | `text-zinc-300` | `border-white/15` | `shadow-[0_0_18px_rgba(255,255,255,0.10)]` |

Always use the `accent.*` object returned by `accentByCategory()` — never hardcode accent colors in components. This keeps themes consistent and easy to change.

### Animated gradient title
Used for `titleParts.head` on workflow pages:
```
bg-[linear-gradient(135deg,#00E5FF,#A855F7,#EC4899)]
bg-clip-text text-transparent
bg-[length:200%_200%] animate-grad-shift
```
The `gradShift` keyframe in `globals.css` animates `background-position` over 5 seconds.

---

## Glass Morphism

The core visual language. Layers of translucent surfaces with blur.

| Layer | Classes |
|---|---|
| Invisible (hover target) | `bg-white/0 backdrop-blur` |
| Subtle fill | `bg-white/[0.02] backdrop-blur` |
| Light fill | `bg-white/5 backdrop-blur` |
| Visible fill | `bg-white/10 backdrop-blur` |
| Dark inset | `bg-black/20` |

All surfaces use `border border-white/10` as the base border.
On hover: `hover:bg-white/5` or `hover:bg-white/10` + `hover:border-white/20`.

---

## Glow Effects

Box shadows simulate neon glow. Use sparingly — one glow per card.

```
/* Page-level ambient */
shadow-[0_0_60px_rgba(34,211,238,0.10)]

/* Card glow (cyan) */
shadow-[0_0_45px_rgba(34,211,238,0.06)]

/* Card glow (white/neutral) */
shadow-[0_0_28px_rgba(255,255,255,0.03)]

/* CTA button glow */
shadow-[0_0_28px_rgba(34,211,238,0.18)]

/* Background ambient blob */
blur-3xl opacity-40 bg-gradient-to-tr from-cyan-500/20 via-purple-500/10 to-white/5
```

---

## Border Radius

| Use case | Class |
|---|---|
| Buttons, inputs, small UI | `rounded-xl` |
| Cards, panels | `rounded-2xl` |
| Hero cards, featured sections | `rounded-3xl` |
| CTA section | `rounded-[2.25rem]` |

---

## Component Patterns

### Card — base
```jsx
<div className="rounded-2xl border border-white/10 bg-white/0 backdrop-blur p-5
                hover:bg-white/5 transition-colors">
```

### Card — with category glow
```jsx
<div className={`rounded-2xl border border-white/10 bg-white/0 backdrop-blur p-5
                hover:bg-white/5 hover:border-white/20 transition-all
                ${accent.border} ${accent.glow}`}>
```

### Card — with top-line accent (CSS before pseudo-element)
```jsx
<div
  className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6
             before:content-[''] before:absolute before:top-0 before:left-0
             before:right-0 before:h-[2px]
             before:bg-[linear-gradient(90deg,transparent,var(--line-color),transparent)]"
  style={{ "--line-color": "#00E5FF" }}  // or "#EC4899" for rose
>
```

### Icon container
```jsx
<div className={`h-10 w-10 rounded-xl border border-white/10 bg-white/5
                flex items-center justify-center flex-none ${accent.ring}`}>
  <Icon size={18} className={accent.text} />
</div>
```

### Badge / tag
```jsx
<span className={`text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 ${accent.text}`}>
  {label}
</span>
```

### Status dot
```jsx
<span className="h-1.5 w-1.5 rounded-full bg-cyan-300/70" />   // cyan
<span className="h-1.5 w-1.5 rounded-full bg-purple-300/70" /> // purple
<span className="h-1.5 w-1.5 rounded-full bg-white/40" />      // neutral
```

### Step number badge
```jsx
<span className={`inline-flex h-8 w-8 items-center justify-center
                 rounded-xl border border-white/10 bg-white/5
                 text-sm font-semibold flex-none ${accent.ring}`}>
  {step}
</span>
```

### Divider
```jsx
<div className="h-px bg-white/10" />
```

---

## Buttons

### Primary CTA (cyan)
```jsx
<button className="inline-flex items-center justify-center rounded-xl
                   border border-cyan-400/30 bg-cyan-400/10
                   px-5 py-3 text-sm font-semibold text-cyan-200
                   hover:bg-cyan-400/15 transition-colors
                   shadow-[0_0_28px_rgba(34,211,238,0.18)]
                   disabled:opacity-50 disabled:cursor-not-allowed">
```

### Secondary (ghost)
```jsx
<button className="inline-flex items-center justify-center rounded-xl
                   border border-white/10 bg-white/5
                   px-5 py-3 text-sm font-semibold text-zinc-200
                   hover:bg-white/10 transition-colors">
```

### Copy button (inline)
```jsx
<button className="rounded-xl border border-white/10 bg-white/5
                   px-3 py-2 text-sm font-medium text-zinc-200
                   hover:bg-white/10 transition-all">
```

---

## Form Inputs

```jsx
// Input / select
const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5
   text-sm text-zinc-100 placeholder-zinc-500
   focus:outline-none focus:ring-1 focus:ring-cyan-400/40 focus:border-cyan-400/30
   transition-colors";

// Monospace textarea (JSON / code)
const monoClass = `${inputClass} font-mono text-xs leading-relaxed`;
```

---

## Section Anatomy

Every marketing section follows this structure:
```jsx
<section className="py-16 sm:py-20">
  <div className="max-w-7xl mx-auto px-4">
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{eyebrow}</p>
      <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-3 text-zinc-300 leading-relaxed">{subtitle}</p>
    </div>
    <div className="mt-8">{children}</div>
  </div>
</section>
```

---

## Layout & Spacing

| Role | Classes |
|---|---|
| Page container | `max-w-7xl mx-auto px-4` |
| Text block | `max-w-3xl` |
| Centered text block | `max-w-2xl mx-auto` |
| Card grid (2-col) | `grid gap-4 sm:grid-cols-2` |
| Card grid (3-col) | `grid gap-4 sm:grid-cols-2 lg:grid-cols-3` |
| Card grid (4-col) | `grid gap-4 sm:grid-cols-2 lg:grid-cols-4` |
| Vertical card stack | `space-y-4` or `space-y-3` |
| Section padding | `py-16 sm:py-20` |
| Card padding | `p-5` (compact) · `p-6` (standard) |

---

## CTA Section

The full-width CTA block at the bottom of marketing pages:
```jsx
<section className="py-20">
  <div className="max-w-7xl mx-auto px-4">
    <div className="rounded-[2.25rem] border border-cyan-400/20
                    bg-gradient-to-tr from-cyan-400/10 via-purple-500/5 to-white/5
                    p-8 sm:p-10 backdrop-blur
                    shadow-[0_0_60px_rgba(34,211,238,0.10)]">
      <div className="max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{heading}</h2>
        <p className="mt-3 text-zinc-200/80 leading-relaxed">{body}</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          {/* Primary CTA button */}
          {/* Secondary button */}
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## Animations

| Name | Definition | Use |
|---|---|---|
| `animate-grad-shift` | `gradShift 5s ease infinite` | Gradient title text |
| Framer Motion tab underline | `layoutId="tabUnderline"` motion.div | Active tab indicator |
| Framer Motion tab content | `initial opacity:0 y:10` → `animate opacity:1 y:0`, `exit opacity:0 y:-10`, 250ms | Tab panel transitions |
| Accordion | `accordion-down` / `accordion-up` keyframes on `--radix-accordion-content-height` | Setup step accordion |

Framer Motion config for tab transitions:
```jsx
<MotionConfig reducedMotion="never">
  <AnimatePresence mode="wait" initial={false}>
    <motion.div
      key={activeTab}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
```

---

## Do / Don't

| Do | Don't |
|---|---|
| Use `bg-white/5` for card fills | Use `bg-gray-800` or `bg-neutral-*` |
| Use `border-white/10` as default border | Use `border-gray-*` |
| Use `text-zinc-300` for body text | Use `text-gray-300` or `text-white` for body |
| Use `rounded-2xl` for cards | Use `rounded-lg` — too small for this system |
| Use `font-semibold tracking-tight` for headings | Use `font-bold` — too heavy |
| Keep glow shadows subtle (0.06 → 0.25 opacity) | Stack multiple glows on the same element |
| Use `accentByCategory()` for themed colors | Hardcode `text-cyan-300` directly in components |
| Use `{" "}` between adjacent `<span>` elements | Rely on trailing spaces inside string literals |
