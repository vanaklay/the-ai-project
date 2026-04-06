import { Workflow } from "./workflows";
export const notebookLmToWebsite: Workflow = {
  id: "notebookLmToWebsite-001",
  slug: "notebooklm-to-website",
  title: "NotebookLM → Site Web",
  titleParts: {
    head: "NotebookLM",
    tail: " → Site Web",
  },
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
