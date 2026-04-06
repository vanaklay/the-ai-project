import { Workflow } from "./workflows";
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
