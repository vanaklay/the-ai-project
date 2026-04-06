import { Workflow } from "./workflows";
export const ideaToWorkflowSystem: Workflow = {
  id: "ideaToWorkflowSystem-003",
  slug: "idea-to-ai-workflow",
  title: "Idea → AI Workflow System",
  titleParts: {
    head: "Idea",
    tail: " → AI Workflow System",
  },
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
