export interface Workflow {
  id: string;
  slug: string;
  title: string;
  titleParts: {
    head: string;
    tail: string;
  };
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

const voiceToQuoteApp: Workflow = {
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

const ideaToWorkflowSystem: Workflow = {
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

export const searchDemandWorkflow: Workflow = {
  id: "searchDemandWorkflow-004",
  slug: "youtube-video-research-system",
  title: "YouTube Video Research System",
  titleParts: {
    head: "YouTube Video ",
    tail: "Research System",
  },
  description:
    "A structured system to find, validate, and plan 10 high-performing YouTube video ideas using search data, competitor analysis, and market gap detection — before writing a single word of script.",
  category: "AI Content Strategy",
  duration: "2–4h",
  difficulty: "Beginner",
  tools: [
    "YouTube Search Autocomplete",
    "YouTube Studio (Inspiration Tab)",
    "Google Trends",
    "VidIQ",
    "ChatGPT",
    "Gemini",
    "Notion",
  ],
  result:
    "A locked content plan of 10 validated YouTube video titles — 7 search-based for steady growth, 3 trend-based for viral potential — with a committed publish schedule.",

  sections: {
    overview: {
      content:
        "This workflow removes all guesswork from YouTube content planning. Instead of brainstorming in the dark, you systematically mine real search data, identify proven outlier concepts from competitors, and detect market gaps no one is filling yet. The output is a concrete, prioritized list of 10 video titles you can execute immediately — each one backed by audience demand, not assumptions.",
      idealFor: [
        "New YouTube channels in a defined niche",
        "Faceless AI business brand channels",
        "Coaches and solopreneurs entering YouTube",
        "Creators who want consistent, predictable growth",
        "Anyone building a content pipeline before production starts",
      ],
      notSuitedFor: [
        "Channels without a defined niche",
        "Pure entertainment or reaction content",
        "Channels focused on personal storytelling only",
        "Creators who prioritize trending content over evergreen",
      ],
    },

    useCases: [
      {
        title: "New Channel Launch",
        description:
          "Build a validated content plan of 10 videos before publishing your first one. Ensure every upload targets real search demand from day one.",
        icon: "rocket",
        time: "3–4h total",
      },
      {
        title: "Competitor Upgrade Strategy",
        description:
          "Identify outlier videos from small channels with outsized views, then rebuild those concepts at a higher production quality.",
        icon: "trending-up",
        time: "1–2h",
      },
      {
        title: "Market Gap Detection",
        description:
          "Mine competitor comment sections and rising Google Trends queries to find topics no one in your niche has covered yet.",
        icon: "search",
        time: "1h",
      },
      {
        title: "Monthly Content Planning",
        description:
          "Use this system every month to replenish your idea pipeline with validated, high-potential topics — never face a blank content calendar again.",
        icon: "calendar",
        time: "2h/month",
      },
      {
        title: "Title Optimization via AI",
        description:
          "Use the screenshot prompt hack to extract psychological hooks from top competitors and generate 20 original, high-CTR title ideas instantly.",
        icon: "zap",
        time: "15 min",
      },
    ],

    setup: [
      {
        step: 1,
        title: "Prime your YouTube homepage",
        duration: "30 min",
        content: [
          "Log in to the YouTube account for your channel.",
          "Search for your 5 core niche keywords and watch the top 3 results for each — do not skip.",
          "Like and save videos from channels you want to emulate.",
          "After 20–30 minutes of interaction, your homepage will reflect your niche. Screenshot 10 recommended titles — these are proven concepts.",
        ],
      },
      {
        step: 2,
        title: "Mine YouTube Search Autocomplete",
        duration: "30 min",
        content: [
          "Go to YouTube (not Google) and type your primary niche keyword without pressing Enter.",
          "Record every autocomplete suggestion — these are exact phrases people are typing daily.",
          "Repeat with 5 variations: add 'how to', 'best', 'free', 'with AI', 'for coaches' as prefixes.",
          "Add all autocomplete phrases to a Notion table with a 'Search-Based' tag.",
          "Target: collect at least 20 raw ideas from this step alone.",
        ],
      },
      {
        step: 3,
        title: "Find outlier videos to upgrade",
        duration: "45 min",
        content: [
          "Identify 3–5 competitor channels in your niche with under 20,000 subscribers.",
          "Go to their Videos tab, sort by 'Most Popular'.",
          "Look for any video where views are 3x–15x higher than the channel's subscriber count — this is an outlier.",
          "Watch each outlier critically: note poor audio, slow pacing, weak thumbnail, or low visual quality.",
          "For each outlier, write one sentence: 'This topic works. My upgrade: [specific improvement].'",
          "Add to Notion table with a 'Trend-Based / Upgrade' tag.",
        ],
      },
      {
        step: 4,
        title: "Run the AI title generator (screenshot prompt hack)",
        duration: "20 min",
        content: [
          "Pick the strongest competitor channel in your niche.",
          "Go to their Videos tab sorted by Popular. Take a full screenshot showing at least 6 thumbnails and titles.",
          "Upload the screenshot to ChatGPT or Gemini.",
          "Paste the screenshot analysis prompt (see Prompts section) — replace the 3 example titles with actual titles from the screenshot.",
          "Collect the 20 generated titles. Filter the 5 most relevant to your niche and audience.",
          "Add to Notion with a 'AI-Generated / High-CTR' tag.",
        ],
      },
      {
        step: 5,
        title: "Validate with Google Trends + VidIQ",
        duration: "30 min",
        content: [
          "Open Google Trends and filter to 'YouTube Search' (not web search).",
          "Test your top 10 idea candidates. Look for steady or upward trend lines — reject topics with a single past spike.",
          "Open VidIQ's free AI Keyword Generator. Enter each topic and record monthly search volume and competition score.",
          "Prioritize topics with high search volume + low/medium competition.",
          "Flag any 'Rising' breakout topics in Google Trends' Related Queries section — these are gap opportunities.",
        ],
      },
      {
        step: 6,
        title: "Select your final 10 and lock the schedule",
        duration: "20 min",
        content: [
          "Review your full Notion idea table. Apply the 2-to-1 rule: select 7 search-based (evergreen) and 3 trend-based (viral potential).",
          "Write the final, clickable title for each of the 10 videos. Make every title follow the format: [Result] + [Method/Number/Timeframe].",
          "Assign a publish date to each video based on your weekly schedule (e.g. every Tuesday).",
          "Mark video #1 as your highest-confidence search-based topic with clear ROI framing.",
          "Lock this plan — do not change titles or order unless data forces it.",
        ],
      },
    ],

    prompts: [
      {
        label: "Screenshot analysis + title generator",
        text: `Analyze this YouTube channel screenshot.

Identify:
- Title patterns
- Psychological hooks (FOMO, curiosity, controversy, transformation)
- Recurring themes and keywords
- Structural frameworks (list, how-to, story, comparison)
- Emotional triggers
- Word positioning and formatting patterns

Now generate 20 original video ideas that:
- Follow the same structure and psychological hooks
- Are NOT copies of the original titles
- Feel premium and educational
- Have high CTR potential
- Are relevant to the niche: AI content repurposing for coaches and solopreneurs

Make them similar in style to:
"[Insert successful title 1]"
"[Insert successful title 2]"
"[Insert successful title 3]"

Return titles only, numbered 1–20.`,
        expectedResult:
          "A list of 20 original, high-CTR YouTube titles that mirror the psychological structure of proven viral content in your niche — without copying any actual content.",
      },
      {
        label: "Comment section mining for market gaps",
        text: `I'm going to paste comments from a popular YouTube video in my niche. 

Analyze them and identify:
1. The top 5 follow-up questions viewers are asking that the video didn't answer
2. Any specific sub-topics mentioned multiple times
3. Any frustrations or 'missing piece' complaints

Then suggest 3 YouTube video titles I could create to directly answer these gaps. Each title should be specific, outcome-focused, and optimized for search.

Niche: AI content repurposing for coaches and solopreneurs.

Here are the comments:
[PASTE COMMENTS]`,
        expectedResult:
          "3 specific, validated video title ideas derived from real audience demand — each addressing an unanswered question or gap your competitors haven't filled.",
      },
      {
        label: "Google Trends rising query to video title",
        text: `I found the following rising search query on Google Trends in my niche:
"[INSERT RISING QUERY]"

Generate 5 YouTube video title options that:
- Target this exact search query
- Are optimized for high click-through rate
- Follow the format: [Result] + [Method or Timeframe]
- Are appropriate for a professional AI content channel targeting coaches and solopreneurs

Return titles only, no explanations.`,
        expectedResult:
          "5 title variants optimized for a rising keyword, giving you options to A/B test or pick the strongest angle.",
      },
      {
        label: "Outlier upgrade brief",
        text: `I found a YouTube video with [X views] on a channel with only [Y subscribers]. The video is titled: "[ORIGINAL TITLE]".

The video has these weaknesses:
- [List 2–3 flaws: audio quality, pacing, visuals, depth, etc.]

Write an upgraded version of this concept for my channel. Provide:
1. A new, stronger YouTube title
2. A 2-sentence hook that grabs attention in the first 10 seconds
3. One structural improvement that makes my version more valuable than the original

My channel: The Output Agency — AI content repurposing for coaches and solopreneurs. Production: 100% AI avatar, professional voiceover, screencast workflow.`,
        expectedResult:
          "A complete upgrade brief: new title, stronger hook, and one key improvement that differentiates your version from the original outlier video.",
      },
    ],

    deployment: {
      methods: [
        {
          name: "Notion Content Calendar",
          steps: [
            "Create a Notion database with columns: Title, Type (Search/Trend), Publish Date, Status, Views (post-publish), CTR.",
            "Import all 10 validated titles into the database with their assigned publish dates.",
            "Set Status options: Idea → Scripting → In Production → Scheduled → Published.",
            "Add a 'KPI Review' column to log CTR and views 7 days after publish.",
            "Review and update the pipeline every 4 weeks — add 10 new validated ideas to maintain a rolling content buffer.",
          ],
        },
        {
          name: "VidIQ Keyword Tracking",
          steps: [
            "Create a VidIQ account and connect your YouTube channel.",
            "Add your 10 final video topics as tracked keywords in VidIQ.",
            "Monitor weekly search volume changes — prioritize rising topics for earlier publish dates.",
            "Use VidIQ's title scoring feature to finalize each title before uploading.",
            "After each video is live, track its keyword ranking weekly for the first 30 days.",
          ],
        },
        {
          name: "Cross-platform trend monitoring",
          steps: [
            "Set up a daily 10-minute scan: check X (Twitter) and LinkedIn for trending posts in your niche.",
            "Search the trending topic on YouTube — if no recent, high-quality video exists, add it to your idea pipeline immediately.",
            "Use Google Trends 'Rising' filter weekly to catch breakout queries before competitors do.",
            "Maintain a 'Fast Track' slot in your content calendar — one open slot per month for urgent trend-based content.",
          ],
        },
      ],
    },
  },
};

export const virtualInfluencerBuilder: Workflow = {
  id: "workflow_virtual_influencer_001",
  slug: "build-ai-virtual-influencer",
  title: "Build a Hyperrealistic AI Virtual Influencer",
  titleParts: {
    head: "Build a Hyperrealistic ",
    tail: "AI Virtual Influencer",
  },
  description:
    "Generate a fully consistent, photorealistic AI character from a single foundation image and scale it into thousands of brand-ready photos and videos using Google Flow, Gemini, and the ingredient system.",
  category: "AI Content Creation",
  duration: "20 min",
  difficulty: "Beginner",
  tools: [
    "Google Flow (Imagen 3 / Nano Banana)",
    "Gemini Chatbot",
    "ChatGPT",
    "Google Veo 3 (VO3 Fast)",
    "Pinterest",
  ],
  result:
    "A complete digital twin: a locked, hyperrealistic AI character that maintains facial consistency across 1,000+ images and videos, deployable across any brand aesthetic or social platform.",

  sections: {
    overview: {
      content:
        "This workflow walks you through the exact five-step system used by top AI content creators to build a virtual influencer with consistent facial identity, hyperrealistic skin texture, and scalable brand placement. Starting from a single AI-generated foundation image, you will lock facial features, build a lifestyle camera roll, and deploy the ingredient system to control every visual detail—outfit, location, props—on command. The final output is a moving, speaking digital twin ready for social media deployment.",
      idealFor: [
        "Creators who want to build an AI influencer brand without appearing on camera",
        "Marketers producing high-volume visual content for social media",
        "Brand owners who need a consistent digital spokesperson",
        "Agencies offering AI content production as a service",
        "Anyone building a faceless monetized social account",
      ],
      notSuitedFor: [
        "Creators who already have an established personal brand with their own face",
        "Platforms that prohibit AI-generated content disclosure",
        "Projects requiring legally defensible model rights or model releases",
        "High-stakes campaigns requiring actor likeness agreements",
      ],
    },

    useCases: [
      {
        title: "Faceless Lifestyle Brand",
        description:
          "Run an Instagram or TikTok account built entirely around a consistent AI persona. Post daily without ever being on camera, and monetize through affiliate links, brand deals, or digital products.",
        icon: "Sparkles",
        time: "20 min setup, then 10 min per post",
      },
      {
        title: "Brand Campaign Mockups",
        description:
          "Create fully styled product placement mockups for fashion, beauty, or lifestyle brands without booking models or studios. Deliver photorealistic campaign assets at a fraction of traditional production cost.",
        icon: "ShoppingBag",
        time: "5 min per scene",
      },
      {
        title: "AI UGC for Paid Ads",
        description:
          "Generate user-generated-content-style videos of your AI character reviewing, using, or unboxing products. Use VO3 Fast to animate the character and sync lips for ad-ready video creatives.",
        icon: "Video",
        time: "15 min per video asset",
      },
      {
        title: "Digital Twin for Coaches and Educators",
        description:
          "Build a visual AI avatar that represents your personal brand in course thumbnails, email headers, and promotional materials, keeping aesthetic consistency without repeated photo shoots.",
        icon: "GraduationCap",
        time: "30 min for full asset library",
      },
      {
        title: "AI Content Agency Service",
        description:
          "Package this entire workflow as a productized service. Charge clients for a custom AI model build, a monthly content retainer, or one-off campaign deliverable bundles.",
        icon: "Briefcase",
        time: "1–2 hours per client deliverable",
      },
    ],

    setup: [
      {
        step: 1,
        title: "Generate your foundation face",
        duration: "2 min",
        content: [
          "Go to flow.google.com and sign in with your Google account.",
          "Click 'New Project', select 'Image Generation', and ensure Imagen 3 (Nano Banana) is selected as the model.",
          "Set orientation to Portrait and outputs to 1.",
          "Use the two-part prompt structure: Part 1 is the beauty lock prompt (see Prompts section). Part 2 is your model description from ChatGPT.",
          "Generate 3–5 variations and select the one with the most symmetrical, editorial-quality face.",
          "Download the selected image. This is your blueprint — do not modify it.",
        ],
      },
      {
        step: 2,
        title: "Force a hyperrealistic skin pass",
        duration: "3 min",
        content: [
          "Open Gemini Chatbot (gemini.google.com) — this step is free and requires no credits.",
          "Upload your foundation image into the chat.",
          "Run the hyperrealism refinement prompt (see Prompts section).",
          "Review the output: skin should have visible pores, subtle asymmetry, and window-light quality.",
          "Download the refined image. This replaces the original blueprint for all future steps.",
        ],
      },
      {
        step: 3,
        title: "Lock facial consistency with a reference image",
        duration: "2 min",
        content: [
          "Return to Google Flow. In the image generation interface, click 'Add Reference Image'.",
          "Upload your hyperrealistic foundation photo as the reference.",
          "Confirm the reference image is active before generating — an inactive reference means the AI will produce a different person.",
          "Run a consistency test: generate the same model in a new environment (e.g. a coffee shop). The face, eyes, and bone structure must match the reference exactly.",
          "If the face drifts, regenerate with the reference image re-uploaded and the prompt simplified.",
        ],
      },
      {
        step: 4,
        title: "Build the camera roll (5 core photo types)",
        duration: "10 min",
        content: [
          "Identify 5 target content types: outdoor candid, mirror selfie, gym photo, social setting (bar/cafe), and lifestyle close-up.",
          "For each type, find a real influencer reference image on Pinterest or Instagram.",
          "Upload the reference photo into ChatGPT and prompt: 'Describe this photo as an image generation prompt. Focus on lighting, composition, setting, and mood. Do not describe the person's face.'",
          "Copy the prompt output into Google Flow, attach your locked reference image, and generate.",
          "Review all 5 outputs side by side. The face must be identical across every shot. If any image shows facial drift, regenerate that type with a simplified location prompt.",
        ],
      },
      {
        step: 5,
        title: "Deploy the ingredient system for brand placements",
        duration: "5 min per scene",
        content: [
          "Collect 3 ingredient images: (1) background/location, (2) specific outfit or product, (3) prop or accessory.",
          "Sources can be Pinterest screenshots, fashion catalog images, or photos of real clothing items.",
          "In Google Flow, upload all 3 ingredient images alongside your locked reference image.",
          "Use the ingredient assembly prompt (see Prompts section) to instruct the model to combine all elements precisely.",
          "Generate. Review that: the outfit matches ingredient 2, the background matches ingredient 1, and the prop appears naturally in frame.",
          "For video output, switch the engine in Google Flow from Image Generation to Frames to Video, upload the output image, add a video motion prompt, set model to VO3 Fast, and generate.",
        ],
      },
    ],

    prompts: [
      {
        label: "Foundation face — beauty lock",
        text: "Highly edited studio portrait of a flawless fashion model with perfectly symmetrical features and full glam makeup. [ADD MODEL DESCRIPTION: e.g. 25-year-old woman with olive skin, dark almond-shaped eyes, high cheekbones, and a sharp jawline, wearing a neutral expression]",
        expectedResult:
          "A heavily retouched, magazine-cover-quality portrait. Skin should look polished and uniform — this is intentional. It serves as a blueprint, not the final output.",
      },
      {
        label: "Hyperrealism pass — Gemini refinement",
        text: "Using this reference image, create a new version that looks like an unedited photo taken on an iPhone 15. Natural grain, no filters, natural beauty. Preserve the exact facial structure, eye color, and bone structure from the reference. Add realistic skin texture with subtle pores and slight facial asymmetry. Lighting should appear as soft natural window light from the left side.",
        expectedResult:
          "A visually believable candid-style portrait. The skin loses its plastic uniformity and gains texture. Lighting has realistic falloff. The result should make a viewer unsure whether it is a real photograph.",
      },
      {
        label: "Model description generator — ChatGPT helper",
        text: "Write a concise 2–3 sentence visual description of a 25-year-old [male/female] model. Include: skin tone, eye shape and color, hair texture and length, face shape, and one distinguishing feature. Keep it neutral and objective — no personality or emotion. This will be used as part of an AI image generation prompt.",
        expectedResult:
          "A clean, 2–3 sentence physical description ready to append to the beauty lock prompt. Example: '25-year-old woman with warm caramel skin, large dark brown almond eyes, and thick jet-black hair falling past her shoulders. She has a wide forehead, full lips, and softly defined cheekbones.'",
      },
      {
        label: "Camera roll scene prompt — reference-to-prompt",
        text: "[Upload influencer reference photo to ChatGPT] Describe this photo as an image generation prompt. Focus on: the lighting quality and direction, the setting and background details, the camera angle and composition, and the overall mood or color grading. Do not describe or reference the person's face, skin, or identity. Output should be 3–4 sentences formatted as a direct image prompt.",
        expectedResult:
          "A scene-only prompt you can paste into Google Flow. It describes environment and composition without referencing the subject's appearance, allowing the reference image to supply the face independently.",
      },
      {
        label: "Ingredient system — brand placement assembly",
        text: "Using the provided reference images: place the person from reference image 1 into the location shown in reference image 2. Dress her in the exact outfit shown in reference image 3. She is holding the object shown in reference image 4 naturally in her hand. The lighting should match the location in reference image 2. Maintain all facial features from reference image 1 exactly. The result should look like a candid lifestyle photograph.",
        expectedResult:
          "A single cohesive scene where the model is wearing the specified outfit, in the specified location, holding the specified prop. All visual elements should feel naturally composed rather than collaged.",
      },
      {
        label: "Video animation — VO3 Fast motion prompt",
        text: "Animate this portrait naturally. The subject has slow, subtle head movement, natural blinking, and slight shoulder breathing motion. Camera is static. She speaks directly to camera in a warm, conversational tone. Lip sync is active. Duration: 6 seconds. Lighting is stable and matches the source image.",
        expectedResult:
          "A 6-second video clip in which the AI character appears to breathe, blink, and speak. Lip movement should feel natural rather than mechanical. The output is ready to use as a short-form video clip or to add a voiceover in post-production.",
      },
    ],

    deployment: {
      methods: [
        {
          name: "Organic social media (Instagram / TikTok)",
          steps: [
            "Create a new social account with a character name, bio, and niche (e.g. luxury travel, fitness, fashion).",
            "Batch-generate 30 images using the camera roll + ingredient system workflow for your first month of content.",
            "Schedule posts using a tool like Buffer or Later — post 1 static image daily and 2–3 reels per week using VO3-animated clips.",
            "Apply for affiliate programs (Amazon, LTK, AWIN) once you reach 1,000 followers. Link products in bio and captions.",
            "Disclose AI-generated content in the bio per platform guidelines.",
          ],
        },
        {
          name: "Paid ads (Meta / TikTok Ads)",
          steps: [
            "Generate 5–10 UGC-style video creatives using the ingredient system and VO3 Fast animation.",
            "Add a voiceover track in CapCut or Adobe Premiere — sync to the lip movement from the VO3 output.",
            "Upload creatives to Meta Ads Manager or TikTok Ads as dark posts (no public profile required).",
            "Run a creative split test across 3 variations: different outfits, different opening frames.",
            "Scale budget to the top-performing creative once ROAS data is stable after 3–5 days.",
          ],
        },
        {
          name: "Client service delivery (agency model)",
          steps: [
            "Package the workflow into a tiered service: Tier 1 = foundation + 10 images ($300), Tier 2 = full camera roll + 5 video clips ($800), Tier 3 = monthly retainer ($500/mo for 30 images).",
            "Onboard clients with a brief: collect their brand colors, target aesthetic, and product/service to feature.",
            "Generate the foundation face based on the brand brief. Present 3 face options for client approval before locking.",
            "Run the full 5-step workflow and deliver a Google Drive folder with all source images, video files, and prompt logs.",
            "Retain the locked reference image file for future retainer content production.",
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
  searchDemandWorkflow,
  virtualInfluencerBuilder,
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
