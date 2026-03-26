export interface Workflow {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  sections: {
    overview: {
      content: string;
      idealFor: string[];
      notSuitedFor: string[];
    };
    useCases: Array<{
      title: string;
      description: string;
      icon: string;
      time: string;
    }>;
    setup: Array<{
      step: number;
      title: string;
      content: string[];
      duration: string;
    }>;
    prompts: Array<{
      label: string;
      text: string;
      expectedResult: string;
    }>;
    deployment: {
      methods: Array<{
        name: string;
        steps: string[];
      }>;
    };
  };
}

export const workflows: Workflow[] = [
  {
    id: "notebooklm-to-web",
    slug: "notebooklm-to-web",
    title: "NotebookLM to Web Knowledge Base",
    description:
      "Convert NotebookLM notes into a clean, tabbed web experience with reusable prompts and predictable structure.",
    category: "Data",
    duration: "2-3 hours",
    sections: {
      overview: {
        content:
          "Turn scattered NotebookLM outputs into a structured, documentation-style web knowledge base. This workflow standardizes section headings, preserves citations you provide, and produces copy/paste-ready blocks for each tab (Overview, Use Cases, Setup, Prompts, Deployment). Limitations: it assumes you can provide or paste source notes; it does not fully automate secret retrieval from private systems.",
        idealFor: [
          "Teams documenting internal AI knowledge",
          "Educators turning study notes into web lessons",
          "Ops teams creating runbooks from existing notes",
        ],
        notSuitedFor: [
          "Fully offline environments with no clipboard/paste workflow",
          "Highly sensitive environments where prompt text must be kept secret",
          "Projects needing real-time ingestion from NotebookLM without manual export",
        ],
      },
      useCases: [
        {
          title: "Knowledge base starter",
          description:
            "Generate a consistent outline and section copy you can ship quickly.",
          icon: "NotebookPen",
          time: "15-20 min",
        },
        {
          title: "Prompt library packaging",
          description:
            "Produce ready-to-copy prompts for ingestion, validation, and formatting.",
          icon: "FileCode2",
          time: "20-30 min",
        },
        {
          title: "Publish-ready web sections",
          description:
            "Turn structured output into documentation-style blocks with predictable headings.",
          icon: "Globe",
          time: "10-15 min",
        },
      ],
      setup: [
        {
          step: 1,
          title: "Define your target sections",
          content: [
            "Pick the tab set you want to support (Overview, Use Cases, Setup, Prompts, Deployment).",
            "Write 1-2 sentences describing what each tab should accomplish for the reader.",
          ],
          duration: "10 min",
        },
        {
          step: 2,
          title: "Export or paste your NotebookLM notes",
          content: [
            "Paste the relevant notes (or the extracted content) into a single source buffer.",
            "Mark any citations or references you want preserved verbatim.",
          ],
          duration: "25 min",
        },
        {
          step: 3,
          title: "Normalize headings and constraints",
          content: [
            "Ask for a structured outline with explicit headings for each tab.",
            "Require the output to avoid new sections not present in your template.",
          ],
          duration: "30 min",
        },
        {
          step: 4,
          title: "Generate prompts + expected results",
          content: [
            "Request prompts that can be copy/pasted and reused across multiple workflows.",
            "Add expected results that specify what a “good” output looks like.",
          ],
          duration: "30-40 min",
        },
        {
          step: 5,
          title: "Final QA pass",
          content: [
            "Validate that every tab has at least one bullet/section.",
            "Check that limitations are present in Overview and that steps are numbered in Setup.",
          ],
          duration: "10-15 min",
        },
      ],
      prompts: [
        {
          label: "Ingest Notes (Outline)",
          text: `You are a documentation editor. Ingest the following NotebookLM notes and produce a structured outline for a documentation-style web page with these exact tabs: Overview, Use Cases, Step-by-Step Setup, Prompt Library, Deployment.

Rules:
- Do not invent extra tabs.
- Overview must include: content (1 paragraph), idealFor (3-6 bullets), notSuitedFor (3-6 bullets).
- Use Cases must include 3 items with: title, description, icon name, time.
- Setup must include 4-6 numbered steps. Each step has: title, content (list of actions), duration.
- Prompt Library must include 3 prompts. Each prompt has: label, prompt text, expected result.
- Deployment must include 2 methods with hosting/go-live steps.

Input Notes:
"""
{{NOTES}}
"""
`,
          expectedResult:
            "A structured outline with all required fields and exactly the specified tab content.",
        },
        {
          label: "Generate Prompt Library Blocks",
          text: `Rewrite the Prompt Library prompts for the documentation page. Each prompt must be copy/paste-ready and include:
- A clear role instruction
- Input placeholders (use {{PLACEHOLDER}} syntax)
- A section describing "What to return" that matches the schema fields
- A short expected result description.

Do not include any additional commentary outside the three prompts.

Workflow Outline:
{{OUTLINE}}
`,
          expectedResult:
            "Three fully specified prompts with placeholders and expected results.",
        },
        {
          label: "QA Constraints Checker",
          text: `You are a QA checker for documentation workflow pages.

Given:
1) The Overview section
2) The Use Cases section
3) The Setup steps
4) The Prompt Library
5) The Deployment methods

Validate:
- Overview includes idealFor and notSuitedFor arrays with at least 3 items each
- Setup includes 4-6 numbered steps and each step has an actions list
- Prompts includes exactly 3 prompts with label, text, expectedResult
- Deployment includes exactly 2 methods with steps list

Return "PASS" if everything is correct; otherwise return a list of failures with field names.

Content:
{{PAGE_CONTENT}}
`,
          expectedResult:
            "Either PASS or a field-level failure list indicating what needs correction.",
        },
      ],
      deployment: {
        methods: [
          {
            name: "Static Hosting (Vercel / Netlify)",
            steps: [
              "Create a new repo/build pipeline for your Next.js documentation site.",
              "Add the workflow JSON/TS data file under `src/data/workflows.ts`.",
              "Deploy; verify each `/workflows/[slug]` route renders without runtime fetches.",
              "Confirm copy-to-clipboard works over HTTPS and after cache refresh.",
            ],
          },
          {
            name: "Self-hosted (Docker)",
            steps: [
              "Build the Next.js app with `next build` in a Docker multi-stage setup.",
              "Mount your workflow data as part of the build (no runtime secrets required).",
              "Serve the app behind an HTTPS reverse proxy.",
              "Smoke test: switch tabs, copy prompts, and navigate between workflows.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "creative-repurposing-studio",
    slug: "creative-repurposing-studio",
    title: "Creative Repurposing Studio",
    description:
      "Turn a single idea into a multi-format script pack: hooks, outlines, and shareable segments with consistent structure.",
    category: "Creative",
    duration: "1-2 hours",
    sections: {
      overview: {
        content:
          "Repurpose one idea into a structured creative output that matches a predictable script format. The workflow produces a hook set, a full outline, and segment drafts you can adapt for different formats. Limitations: it assumes you provide the seed idea and any brand constraints; it will not guess your style guide unless you specify it.",
        idealFor: [
          "Creators building repeatable content pipelines",
          "Marketing teams standardizing ad/video drafts",
          "Community managers turning Q&A into scripts",
        ],
        notSuitedFor: [
          "Use cases requiring legal approvals without an internal review step",
          "Projects where brand voice cannot be specified at all",
          "Fully automated production without any human input loop",
        ],
      },
      useCases: [
        {
          title: "Hook variations",
          description:
            "Generate multiple opening hooks optimized for clarity and curiosity.",
          icon: "Wand2",
          time: "10-15 min",
        },
        {
          title: "Script outline pack",
          description:
            "Produce a structured outline you can reuse for multiple formats.",
          icon: "Workflow",
          time: "15-20 min",
        },
        {
          title: "Publish sequence drafts",
          description:
            "Create segmented drafts you can paste into your editing workflow.",
          icon: "Rocket",
          time: "20-25 min",
        },
      ],
      setup: [
        {
          step: 1,
          title: "Provide a seed idea + constraints",
          content: [
            "Paste the single seed idea and list constraints (tone, audience, length, do/don't).",
            "If you have examples, include 1-2 reference snippets.",
          ],
          duration: "10 min",
        },
        {
          step: 2,
          title: "Generate a hook set",
          content: [
            "Ask for 8-12 hooks with clear variation and consistent audience targeting.",
            "Require each hook to include a short rationale (1 sentence max).",
          ],
          duration: "20 min",
        },
        {
          step: 3,
          title: "Draft the outline + beats",
          content: [
            "Generate a beat-by-beat outline with sections that map to your format.",
            "Enforce a stable structure so you can repurpose later.",
          ],
          duration: "20 min",
        },
        {
          step: 4,
          title: "Segment into shareable parts",
          content: [
            "Create 3-5 segments with titles and copy blocks.",
            "Include “call to action” variants per segment.",
          ],
          duration: "20-25 min",
        },
      ],
      prompts: [
        {
          label: "Hooks (8-12 Variations)",
          text: `You are a creative director and scriptwriter.

Task: Generate 10 hook variations for the seed idea below.

Requirements:
- Each hook must be 1-2 sentences.
- Hooks must be meaningfully different in structure (question, short claim, contrarian take, story opening).
- Include a one-sentence rationale after each hook.

Tone/Constraints:
{{CONSTRAINTS}}

Seed Idea:
{{IDEA}}
`,
          expectedResult:
            "10 hooks with distinct structures and a one-sentence rationale each.",
        },
        {
          label: "Outline (Stable Beat Structure)",
          text: `Using the seed idea and constraints, create a stable beat outline.

Return:
1) Audience + goal (2-3 bullets)
2) Beat list (5-7 beats) where each beat has:
   - title
   - purpose (1 sentence)
   - key line (one line)

Do not write full script paragraphs yet.

Seed Idea:
{{IDEA}}

Constraints:
{{CONSTRAINTS}}
`,
          expectedResult:
            "A beat outline with audience/goal bullets and 5-7 beats, each with purpose + key line.",
        },
        {
          label: "Segment Drafts (Copy Blocks)",
          text: `Turn the stable outline into segmented copy blocks.

Create 4 segments. Each segment must have:
- Segment title
- Copy block (3-5 sentences)
- CTA variants (3 options, each <= 12 words)

Outline:
{{OUTLINE}}
Constraints:
{{CONSTRAINTS}}
`,
          expectedResult:
            "4 segments with copy blocks and CTA variants, ready to paste into an editor.",
        },
      ],
      deployment: {
        methods: [
          {
            name: "Static Web (No Backend)",
            steps: [
              "Store your workflow data as a TS object in `src/data/workflows.ts`.",
              "Use static generation for `app/workflows/[slug]` so the site deploys fast.",
              "Deploy to Vercel/Netlify; verify tabs render instantly and prompts copy reliably.",
            ],
          },
          {
            name: "Internal Tools (Self-hosted)",
            steps: [
              "Containerize the docs site and host it inside your network.",
              "Lock down access with your reverse proxy rules.",
              "Run a QA pass: copy buttons (HTTPS), navigation between slugs, and tab transitions.",
            ],
          },
        ],
      },
    },
  },
].sort((a, b) => a.title.localeCompare(b.title));

export function getAllWorkflowSlugs() {
  return workflows.map((w) => ({ slug: w.slug }));
}

export function getWorkflowBySlug(slug: string): Workflow | null {
  return workflows.find((w) => w.slug === slug) ?? null;
}

