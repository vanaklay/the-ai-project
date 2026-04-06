import { Workflow } from "./workflows";
export const voiceToQuoteApp: Workflow = {
  id: "2",
  slug: "voice-to-quote-app",
  title: "Voice → AI Quote Generator",
  titleParts: {
    head: "Voice",
    tail: " → AI Quote Generator",
  },
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
