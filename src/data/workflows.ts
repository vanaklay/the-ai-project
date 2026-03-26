export interface Workflow {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  tools: string[];
  result: string;
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

const notebookLmToWebsite: Workflow = {
  id: "1",
  slug: "notebooklm-to-website",
  title: "NotebookLM → Site Web",
  description:
    "Transform any knowledge base into a live website in under 20 minutes using NotebookLM, Gemini Canvas, and Netlify — without writing code.",
  category: "Content Automation",
  duration: "20 min",
  difficulty: "Beginner",
  tools: ["NotebookLM", "Gemini", "Netlify"],
  result: "A live website deployed in under 20 minutes",

  sections: {
    overview: {
      content:
        "This workflow turns raw knowledge (PDFs, URLs, notes) into a fully deployed website using AI. NotebookLM structures the information, Gemini generates the UI and code, and Netlify handles instant deployment. It is designed for speed, simplicity, and zero technical friction.",

      idealFor: [
        "Landing pages & sales pages",
        "Documentation hubs",
        "Client reports (branded)",
        "Niche content sites (SEO / affiliate)",
        "Waitlist or product pages",
      ],

      notSuitedFor: [
        "E-commerce (no payments/cart)",
        "Membership or login systems",
        "Frequently updated blogs",
        "Dynamic databases",
        "Complex web applications",
      ],
    },

    useCases: [
      {
        title: "Documentation Hub",
        description:
          "Centralize PDFs, scripts, and training material into a structured, navigable website for your audience.",
        icon: "book",
        time: "20–30 min",
      },
      {
        title: "Landing Page",
        description:
          "Turn a product brief into a high-converting landing page with hero, features, and waitlist form.",
        icon: "rocket",
        time: "15–20 min",
      },
      {
        title: "Client Report",
        description:
          "Generate a polished, branded report (SEO audit, analysis) instead of sending static documents.",
        icon: "bar-chart",
        time: "20 min",
      },
      {
        title: "Niche Site (SEO)",
        description:
          "Create a content-driven niche website from keyword research and competitor analysis.",
        icon: "leaf",
        time: "25 min",
      },
      {
        title: "Course Sales Page",
        description:
          "Convert course material, testimonials, and FAQs into a structured sales page.",
        icon: "graduation-cap",
        time: "20 min",
      },
      {
        title: "Auto-updated Site",
        description:
          "Connect with automation tools (like n8n) to regenerate content periodically.",
        icon: "refresh-cw",
        time: "1–2h setup",
      },
    ],

    setup: [
      {
        step: 1,
        title: "Prepare your sources",
        duration: "20 min",
        content: [
          "Gather all relevant documents (PDFs, guides, research, reports)",
          "Collect URLs of useful web pages (docs, articles, product pages)",
          "Optionally write a custom summary with your positioning, use cases, and insights",
          "Do not over-organize — NotebookLM will structure everything automatically",
        ],
      },
      {
        step: 2,
        title: "Create your Notebook",
        duration: "5 min",
        content: [
          "Go to notebooklm.google.com and create a new notebook",
          "Upload all PDFs and paste your URLs",
          "Enable Deep Research mode",
          "Wait for NotebookLM to process and structure the data (2–5 minutes)",
        ],
      },
      {
        step: 3,
        title: "Generate with Gemini Canvas",
        duration: "8 min",
        content: [
          "Open Gemini and import your NotebookLM data",
          "Use Prompt 1 to generate the site structure (blueprint)",
          "Validate and adjust the structure",
          "Switch to Canvas mode and use Prompt 2 to generate full HTML",
          "Preview the result",
          "Use Prompt 3 to improve UI, spacing, and visual hierarchy",
        ],
      },
      {
        step: 4,
        title: "Export the HTML",
        duration: "2 min",
        content: [
          "In Canvas, click 'View Source Code'",
          "Copy the full HTML file",
          "Paste it into a file named index.html",
          "Open it locally to verify rendering",
        ],
      },
    ],

    prompts: [
      {
        label: "Prompt 1 — Blueprint",
        text: `I have attached my notebook containing all my resources.
Act as a senior web architect. Analyze the notebook and propose a detailed one-page website structure.
Break it down section by section (hero, features, use cases, FAQ, CTA).
Specify the content of each section and suggest a modern dark UI style suitable for a tech/AI brand.`,
        expectedResult:
          "A complete structured outline of the website with sections, hierarchy, and content suggestions.",
      },
      {
        label: "Prompt 2 — Generation",
        text: `Act as a senior frontend developer. Generate the full website code based on the approved structure.
Use a single HTML file with Tailwind CSS.
Include smooth scrolling, hover effects, and a premium dark SaaS design.
Use the exact content from the notebook. No placeholders.`,
        expectedResult:
          "A fully functional HTML page rendered inside Canvas with UI and interactions.",
      },
      {
        label: "Prompt 3 — UI Polish",
        text: `Act as a senior UI/UX designer. Improve the visual design to match a premium SaaS product.
Enhance typography, spacing, animations, and visual hierarchy.
Add subtle micro-interactions on buttons and cards.`,
        expectedResult:
          "A refined version of the site with improved aesthetics and user experience.",
      },
    ],

    deployment: {
      methods: [
        {
          name: "Netlify Drop (Recommended)",
          steps: [
            "Go to netlify.com/drop",
            "Drag and drop your index.html file",
            "Get an instant public URL",
            "Create a free account to manage and edit your site",
          ],
        },
        {
          name: "Custom Domain",
          steps: [
            "Deploy via Netlify first",
            "Go to Domain Settings in Netlify",
            "Add your custom domain",
            "Update DNS settings from your registrar (OVH, Namecheap, etc.)",
            "Wait 5–30 minutes for propagation",
          ],
        },
      ],
    },
  },
};

const voiceToQuoteApp: Workflow = {
  id: "2",
  slug: "voice-to-quote-app",
  title: "Voice → AI Quote Generator",
  description:
    "Build a voice-controlled app that generates professional quotes (PDF) in real time using AI, Cursor, and deployment tools.",
  category: "AI App Builder",
  duration: "30–60 min",

  difficulty: "Intermediate",
  tools: ["Cursor", "OpenAI Realtime API", "GitHub", "Docploy", "VPS"],
  result:
    "A live SaaS-like app that generates quotes from voice input and exports them as PDFs",

  sections: {
    overview: {
      content:
        "This workflow allows you to build a real AI-powered application using voice input. The user speaks, the app interprets the request using a real-time AI API, dynamically generates structured quote data, applies calculations (like VAT or discounts), and exports a ready-to-send PDF. The process relies on a structured methodology: idea validation, PRD creation, planning with Cursor, and automated deployment.",

      idealFor: [
        "Freelancers and service providers (plumbers, electricians, etc.)",
        "SaaS MVP creation",
        "Internal tools automation",
        "AI-powered business tools",
        "Rapid prototyping of ideas",
      ],

      notSuitedFor: [
        "No-code beginners with zero technical exposure",
        "Static websites",
        "Simple landing pages",
        "Projects without clear user workflow",
        "Highly complex enterprise systems (without scaling infra)",
      ],
    },

    useCases: [
      {
        title: "Voice Quote Generator",
        description:
          "Generate client quotes instantly by speaking instead of typing.",
        icon: "mic",
        time: "30 min",
      },
      {
        title: "AI Internal Tool",
        description:
          "Build tools for teams to automate repetitive tasks using voice commands.",
        icon: "tool",
        time: "45 min",
      },
      {
        title: "SaaS MVP",
        description:
          "Turn a simple idea into a functional SaaS product in hours.",
        icon: "rocket",
        time: "1–2h",
      },
      {
        title: "Field Worker Assistant",
        description:
          "Allow workers to create reports or quotes directly on-site using voice.",
        icon: "briefcase",
        time: "30–60 min",
      },
      {
        title: "Custom Business Automation",
        description:
          "Automate workflows like invoicing, reporting, or document creation.",
        icon: "settings",
        time: "1h",
      },
    ],

    setup: [
      {
        step: 1,
        title: "Validate the idea with AI",
        duration: "10 min",
        content: [
          "Ask Gemini or ChatGPT about the real problem you want to solve",
          "Define the target user (ex: plumber, freelancer)",
          "Refine the idea through conversation",
          "Identify key features (voice input, quote generation, PDF export)",
        ],
      },
      {
        step: 2,
        title: "Generate a PRD (Product Requirement Document)",
        duration: "10 min",
        content: [
          "Ask AI to generate a full PRD from your idea",
          "Include features, user flow, and technical requirements",
          "Ensure clarity before coding",
          "This document will guide Cursor entirely",
        ],
      },
      {
        step: 3,
        title: "Plan the app in Cursor",
        duration: "10 min",
        content: [
          "Open Cursor and paste the PRD",
          "Switch to 'Plan mode'",
          "Let Cursor define the architecture and structure",
          "Answer questions about frameworks, PDF generation, etc.",
          "Validate the plan before building",
        ],
      },
      {
        step: 4,
        title: "Build the app with Cursor",
        duration: "15–30 min",
        content: [
          "Switch to 'Build mode'",
          "Let Cursor generate the full codebase",
          "Use powerful models (Opus / Gemini) for better output",
          "Run the app locally using npm run dev",
          "Test features (voice input, quote creation, PDF export)",
        ],
      },
      {
        step: 5,
        title: "Deploy the application",
        duration: "15 min",
        content: [
          "Push your code to GitHub",
          "Connect GitHub to a deployment tool (Docploy, Vercel, Netlify)",
          "Set environment variables (API keys)",
          "Deploy to a VPS (Hostinger or similar)",
          "Link your domain and make the app public",
        ],
      },
    ],

    prompts: [
      {
        label: "Prompt 1 — Idea Validation",
        text: `What are the biggest problems faced by [target user] when creating quotes or invoices?
I want to build an AI-powered voice app that generates quotes automatically. Help me refine the idea and define the core features.`,
        expectedResult:
          "A refined problem statement and a clear product concept with key features.",
      },
      {
        label: "Prompt 2 — PRD Generation",
        text: `Generate a complete PRD (Product Requirement Document) for this app.
Include: user flow, core features, technical requirements, and architecture.
The app should allow voice input, generate structured quotes, apply VAT, and export PDFs.`,
        expectedResult: "A full PRD document ready to be used in Cursor.",
      },
      {
        label: "Prompt 3 — Cursor Planning",
        text: `Here is my PRD. Create a complete development plan for this application.
Break it down into architecture, components, APIs, and steps.
Ask me any necessary technical questions before building.`,
        expectedResult:
          "A structured development plan ready for execution in Cursor.",
      },
    ],

    deployment: {
      methods: [
        {
          name: "Docploy + VPS (Advanced)",
          steps: [
            "Push your project to GitHub",
            "Install Docploy on your VPS",
            "Connect GitHub repository",
            "Set environment variables (API keys)",
            "Deploy automatically on each push",
          ],
        },
        {
          name: "Vercel / Netlify (Simpler)",
          steps: [
            "Connect your GitHub repo",
            "Import project",
            "Configure environment variables",
            "Deploy instantly",
            "Get a public URL",
          ],
        },
      ],
    },
  },
};

const ideaToWorkflowSystem: Workflow = {
  id: "3",
  slug: "idea-to-ai-workflow",
  title: "Idea → AI Workflow System",
  description:
    "Turn any idea, transcript, or use case into a structured, reusable AI workflow using LLMs and a standardized framework.",
  category: "AI Meta Systems",
  duration: "10–20 min",

  difficulty: "Beginner",
  tools: ["ChatGPT", "Gemini", "Claude", "Any LLM"],
  result:
    "A structured, reusable workflow object ready to be published or integrated into a platform",

  sections: {
    overview: {
      content:
        "This workflow allows you to transform raw inputs (ideas, transcripts, videos, or use cases) into structured AI workflows that can be reused, published, or scaled. It relies on a standardized schema and a master prompt that forces the AI to think like a product designer and system architect.",

      idealFor: [
        "Building a workflow library",
        "Creating educational AI content",
        "Scaling content production",
        "Productizing knowledge",
        "Turning experience into assets",
      ],

      notSuitedFor: [
        "Simple one-off tasks",
        "Unstructured brainstorming",
        "Highly technical code generation",
        "Real-time applications",
        "Projects without clear use case",
      ],
    },

    useCases: [
      {
        title: "Workflow Library",
        description:
          "Create a scalable library of AI workflows for a website or platform.",
        icon: "database",
        time: "10–20 min",
      },
      {
        title: "Content Engine",
        description:
          "Turn videos, transcripts, or ideas into structured content assets.",
        icon: "file-text",
        time: "10 min",
      },
      {
        title: "Productization",
        description: "Convert knowledge or expertise into sellable workflows.",
        icon: "package",
        time: "15 min",
      },
      {
        title: "Internal Knowledge Base",
        description:
          "Standardize processes inside a company using reusable workflows.",
        icon: "book",
        time: "15 min",
      },
      {
        title: "AI Education Platform",
        description:
          "Build structured learning material for AI and automation.",
        icon: "graduation-cap",
        time: "20 min",
      },
    ],

    setup: [
      {
        step: 1,
        title: "Collect your input",
        duration: "2–5 min",
        content: [
          "Start with a raw input: idea, transcript, video, or use case",
          "Ensure the input represents a real problem or process",
          "Optional: clean or summarize the input for clarity",
        ],
      },
      {
        step: 2,
        title: "Use the master workflow prompt",
        duration: "5–10 min",
        content: [
          "Use a structured prompt that enforces a strict schema",
          "Ask the LLM to act as a product designer and system architect",
          "Provide your input inside the prompt",
          "Ensure the output is a TypeScript workflow object",
        ],
      },
      {
        step: 3,
        title: "Validate and refine",
        duration: "3–5 min",
        content: [
          "Review the generated workflow for clarity and accuracy",
          "Adjust use cases or steps if needed",
          "Ensure prompts are actionable and realistic",
          "Check that the structure matches your platform schema",
        ],
      },
      {
        step: 4,
        title: "Integrate into your system",
        duration: "2–5 min",
        content: [
          "Add the workflow object to your workflows.ts file",
          "Verify rendering inside your UI (tabs, cards, etc.)",
          "Test readability and UX",
          "Publish or deploy your platform",
        ],
      },
    ],

    prompts: [
      {
        label: "Prompt — Workflow Generator",
        text: `You are an expert product designer and AI systems architect.

Your task is to transform the following input into a structured AI workflow object using a strict TypeScript schema.

The workflow must include:
- Overview
- Use cases
- Step-by-step setup
- Prompt library
- Deployment methods

It must be practical, actionable, and designed for a premium documentation-style platform.

Input:
[PASTE YOUR IDEA / TRANSCRIPT / USE CASE HERE]

Return ONLY the TypeScript object.`,
        expectedResult:
          "A complete, structured workflow ready to be integrated into a Next.js platform.",
      },
    ],

    deployment: {
      methods: [
        {
          name: "Static Integration",
          steps: [
            "Add the workflow to your local data file (workflows.ts)",
            "Ensure it follows the schema exactly",
            "Rebuild your Next.js app",
            "Deploy using Vercel or Netlify",
          ],
        },
        {
          name: "Scalable System",
          steps: [
            "Store workflows in a database or CMS",
            "Create a UI to dynamically add workflows",
            "Enable filtering and search",
            "Deploy as a full workflow platform",
          ],
        },
      ],
    },
  },
};

const WORKFLOWS: Workflow[] = [
  notebookLmToWebsite,
  voiceToQuoteApp,
  ideaToWorkflowSystem,
];

export const workflows = [...WORKFLOWS].sort((a, b) =>
  a.title.localeCompare(b.title),
);

export function getAllWorkflowSlugs() {
  return workflows.map((w) => ({ slug: w.slug }));
}

export function getWorkflowBySlug(slug: string): Workflow | null {
  return workflows.find((w) => w.slug === slug) ?? null;
}
