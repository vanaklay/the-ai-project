import { Workflow } from "./workflows";

export const aiInfluencerWorkflow: Workflow = {
  id: "ai-influencer-free-stack",
  slug: "build-ai-influencer-free-tools",
  title: "Build an AI Influencer with Free Tools",
  titleParts: {
    head: "Build an AI Influencer",
    tail: "with Free Tools",
  },
  description:
    "Create a fully consistent, monetizable AI influencer using only free image and video generation tools — no camera, no crew, no budget required. Go from character concept to revenue-generating content in under two hours.",
  category: "AI Content Creation",
  duration: "1h 30min",
  difficulty: "Intermediate",
  tools: [
    "Google Flow (Imagen 3 + Veo 3.1)",
    "Claude AI",
    "ChatGPT",
    "Picsart / Canva",
    "AI Image Upscaler (free web)",
    "Arena AI",
    "One.video",
    "Qwen (video gen)",
    "Room 11 (monetization)",
    "CapCut",
  ],
  result:
    "A photorealistic AI influencer with a full character reference board, consistent image and video output pipeline, and a live monetization profile ready to accept paid subscribers.",
  sections: {
    overview: {
      content:
        "This workflow turns a visual inspiration image into a fully operational AI influencer. You build a master character reference board using Imagen 3 inside Google Flow, then use that board as a seed image in every future generation to maintain perfect visual consistency across images, videos, outfit changes, and backgrounds. The pipeline covers character creation, multi-angle generation, outfit locking, upscaling, talking video generation, and fan monetization through Room 11 — all without spending a single dollar.",
      idealFor: [
        "Creators who want to build a personal brand without appearing on camera",
        "Marketers building niche content channels at scale",
        "Entrepreneurs wanting passive subscription income from digital characters",
        "Agencies testing AI-native influencer concepts for clients",
        "Anyone with a niche audience and no production budget",
      ],
      notSuitedFor: [
        "Brands requiring FTC-compliant human disclosure (check local regulations)",
        "Creators needing real-time livestreaming — latency is not solved here",
        "Use cases requiring fully custom-trained LoRA models for extreme fidelity",
        "Teams needing multi-user collaboration on a shared character asset",
      ],
    },

    useCases: [
      {
        title: "Niche authority character",
        description:
          "Build a trusted archetype persona (e.g. a wise financial advisor, a fitness coach, a spiritual guide) that posts daily niche content. Monetize via a $9 PDF, digital download, or paid newsletter from day one — no product funnel required.",
        icon: "UserCheck",
        time: "90 min setup, 20 min/day ongoing",
      },
      {
        title: "Lifestyle brand influencer",
        description:
          "Generate aspirational travel, fashion, and lifestyle content at scale. Use one character board to place your AI influencer in any location or outfit via reference-image prompting. Suitable for affiliate deals and brand sponsorships once you hit 5k followers.",
        icon: "Sparkles",
        time: "2h setup, 30 min/day content batch",
      },
      {
        title: "Fan subscription creator",
        description:
          "Deploy the AI influencer on Room 11 with a managed chatting service. Fans subscribe for exclusive content, the platform handles DM conversations 24/7, and you collect 60% revenue with daily payouts and no lock-in contract.",
        icon: "Heart",
        time: "1h setup, near-zero maintenance",
      },
      {
        title: "Multi-character content agency",
        description:
          "Run 3–5 distinct AI influencers simultaneously from a single Concierge 11 CRM dashboard. Each character has its own niche, content queue, and subscriber base. What would cost $200–$600/month per page on standalone CRM tools is included for free.",
        icon: "LayoutGrid",
        time: "3h initial setup, 1h/day portfolio management",
      },
    ],

    setup: [
      {
        step: 1,
        title: "Source visual inspiration and extract the character prompt",
        duration: "10 min",
        content: [
          "Browse Pinterest for a face/style reference that matches the vibe of your AI influencer. Save the image to your desktop.",
          "Open Claude AI or ChatGPT. Paste the character extraction prompt (see Prompts section) into a new chat.",
          "Upload the Pinterest reference image alongside the prompt. Claude will analyze the visual and output a complete Imagen 3-optimized character prompt.",
          "Copy the generated prompt — this is your master character seed.",
        ],
      },
      {
        step: 2,
        title: "Generate the character board in Google Flow",
        duration: "20 min",
        content: [
          "Go to flow.google.com — free account, no credit card. Set model to Imagen 3, resolution to 9:16, quantity to 4.",
          "Paste your master character prompt and generate. Select the best result as your canonical front-facing portrait.",
          "Set the chosen image as the reference image. Generate a side profile, a back-of-head angle, and a close-up eye shot using the short prompts in the Prompts section.",
          "Generate a full-body shot specifying the complete outfit (e.g. black sleeveless crop top, high-waist fitted leggings, dark sneakers, white background). This locks outfit and body proportions.",
          "Upload the full-body image + the close-up shot together and prompt a clothing replacement so the outfit is consistent across all angles.",
          "Download all generated images (1K resolution on free plan).",
        ],
      },
      {
        step: 3,
        title: "Assemble the master character board",
        duration: "10 min",
        content: [
          "Open Picsart or Canva. Create a blank canvas at 1920×1080.",
          "Upload all character images. Place the main front-facing portrait large and centered — this is the anchor the model will weight most heavily.",
          "Arrange the side profile, back shot, close-up eyes, and full-body outfit around the portrait. Scale the eye close-up up so fine facial details are visible.",
          "Export as a single high-resolution PNG. This file is your character reference board — never delete it.",
        ],
      },
      {
        step: 4,
        title: "Upscale all images to 2K before video generation",
        duration: "5 min",
        content: [
          "Google 'free image upscaler' and navigate to imgupscaler.com or a comparable free tool.",
          "Upload each image you plan to use in a video generation. Select 400% enlargement.",
          "Review the result — upscalers can over-smooth faces. If skin looks plastic, use 200% instead.",
          "Always feed 2K+ resolution images into video models. This is the single biggest quality lever in the entire pipeline.",
        ],
      },
      {
        step: 5,
        title: "Generate talking head videos with Veo 3.1",
        duration: "15 min",
        content: [
          "In Google Flow, switch to video mode. Set resolution to vertical (9:16). Select Veo 3.1 Fast — best quality-to-credit ratio.",
          "Upload your upscaled character portrait as the reference image.",
          "Paste the talking video prompt from the Prompts section, inserting your dialogue line at the end.",
          "Generate. You receive 50 free daily credits (≈ 2 videos/day) plus 100 bonus credits on signup.",
          "To remove the Veo watermark: in CapCut, zoom in slightly and reframe, or use the AI remove watermark feature on CapCut Pro.",
        ],
      },
      {
        step: 6,
        title: "Set up monetization on Room 11",
        duration: "10 min",
        content: [
          "Go to room11.com and sign up with Gmail. Set your birthday, username, and profile image.",
          "Select 'Join as Host', accept terms of service, connect your social profiles, and complete identity verification.",
          "Enable the Managed Chatting Service if you want 24/7 automated fan DMs — you keep 60% revenue, cancel anytime.",
          "Set a subscription price and publish. Room 11 pays out daily at 90% revenue share (vs 80% on most competing platforms).",
          "Use the built-in Concierge 11 CRM to manage multiple AI characters, track stats, and assign staff — no external CRM needed.",
        ],
      },
    ],

    prompts: [
      {
        label: "Character extraction prompt (Claude / ChatGPT)",
        text: "You are an expert AI image prompt engineer specializing in photorealistic character generation with Imagen 3. I'm going to upload a reference image of a person whose visual style I like. Analyze the image thoroughly and generate a detailed Imagen 3 prompt that captures: facial structure and features, skin tone and texture, hair color, texture, and style, eye color and shape, overall aesthetic and mood, lighting style, and approximate age range. The output character must be completely original and unique — not a copy of the reference. Return only the prompt text, nothing else.",
        expectedResult:
          "A single, dense Imagen 3-optimized prompt describing a new original character with all visual parameters specified. Ready to paste directly into Google Flow.",
      },
      {
        label: "Multi-angle generation prompts (Imagen 3, reference image set)",
        text: "[Side profile] Generate a side profile of this woman. Natural studio lighting, white background, same facial features.\n\n[Back of head] Generate an image of this woman from the back, focusing on her head and hair. White background.\n\n[Eye close-up] Generate a close-up shot of this woman's eyes and upper face. Capture fine skin texture, eyelashes, and iris detail. Soft diffused lighting.\n\n[Full body] Generate a full body shot of this woman wearing a black sleeveless crop top and matching high-waist black fitted leggings, dark sneakers. White background. Show full height and proportions.",
        expectedResult:
          "Four consistent angle images of the same character: side profile, back of head, facial close-up, and full body with outfit. All usable as panels in the character reference board.",
      },
      {
        label: "Outfit consistency lock (Imagen 3, two-image upload)",
        text: "I'm uploading two images: a full-body shot with the target outfit and a close-up portrait of the same character. Make her wear the exact outfit from the full-body image in the close-up portrait shot. Preserve all facial features, skin tone, hair, and lighting style precisely.",
        expectedResult:
          "The close-up portrait updated to show the same outfit as the full-body image, maintaining facial and hair consistency — ready to include in the character board.",
      },
      {
        label: "Talking head video prompt (Veo 3.1)",
        text: 'She talks naturally and realistically with a [American / British / neutral] accent. She is in a [podcast studio / modern apartment / coffee shop] environment and is not looking directly into the camera, as if speaking to another person seated nearby. She smiles slightly at the beginning. She says: "[INSERT YOUR DIALOGUE LINE HERE]"',
        expectedResult:
          "A 5–8 second vertical talking video of the AI character with accurate lip sync, natural head movement, and a believable environmental backdrop. Minor watermark present on free plan.",
      },
      {
        label:
          "Scene and location swap prompt (Imagen 3, reference board uploaded)",
        text: "Using the character reference sheet as a visual anchor, generate a photorealistic image of this woman [at a rooftop bar in Tokyo at golden hour / walking through a sunlit Parisian street / sitting in a modern co-working space]. Match her exact facial features, hair, and skin tone from the reference. Natural editorial photography style, shallow depth of field.",
        expectedResult:
          "A high-quality environmental shot of the consistent AI character placed naturally in the specified location. Suitable for Instagram feed posts or brand partnership content.",
      },
      {
        label: "Niche content caption prompt (Claude)",
        text: "You are the social media manager for [CHARACTER NAME], an AI [niche] influencer with [X] followers on Instagram. Her tone is [wise and calm / energetic and motivating / warm and conversational]. Write 5 Instagram captions for the following content theme: [THEME]. Each caption should be 3–5 lines, include a soft call to action pointing to the link in bio, and end with 5 relevant niche hashtags. No generic captions — each must feel specific to her voice and audience.",
        expectedResult:
          "Five distinct, on-brand Instagram captions with built-in CTAs and hashtags. Directly usable for scheduling — no editing required.",
      },
    ],

    deployment: {
      methods: [
        {
          name: "Instagram + TikTok organic growth",
          steps: [
            "Create separate Instagram and TikTok accounts using your character's name and niche keyword (e.g. @coach.mia.ai).",
            "Post 1 image carousel and 1 talking video per day for the first 30 days to signal activity to the algorithm.",
            "Use Veo 3.1 for talking content and Arena AI for movement/transition clips — mix both for feed variety.",
            "Add Room 11 profile link to bio from day one. Every follower who converts is a paying subscriber.",
            "Batch-generate a full week of content in one session using the character board as a reference — aim for 7 images + 3 videos per batch.",
          ],
        },
        {
          name: "Room 11 subscription monetization",
          steps: [
            "Sign up at room11.com (Gmail login, under 5 minutes). Complete identity verification to unlock payouts.",
            "Set a monthly subscription price between $9.99 and $19.99 — lower price maximizes initial conversion rate.",
            "Enable the Managed Chatting Service. The platform's team handles all fan DMs 24/7 — you earn 60% of all revenue generated through that channel.",
            "Upload exclusive content (behind-the-scenes generation process, higher-res images, personalized short videos) available only to subscribers.",
            "Monitor stats in Concierge 11 CRM. If running multiple characters, manage all from a single dashboard — no additional SaaS costs.",
            "Payouts land in your account the next day. No minimum threshold, no two-week wait.",
          ],
        },
        {
          name: "Character swap and video variety with One.video",
          steps: [
            "Go to one.video and click Try Now — no account required to start.",
            "Select Avatar mode and choose either Character Swap or Photo Animate.",
            "Upload your character reference image and a reference video clip you want to mimic (a walking clip, a dance, a gesture).",
            "Set generation mode to Pro and submit. You receive 10 free daily credits — effectively unlimited for one character.",
            "Use output clips for Reels, TikToks, or Room 11 exclusive content. Expect queue wait times of 5–20 minutes on the free tier.",
          ],
        },
        {
          name: "Niche digital product launch",
          steps: [
            "Define the character's niche clearly before creating content (e.g. stoic philosophy for men, abundance mindset for entrepreneurs, minimalist lifestyle).",
            "Create a simple $7–$15 PDF guide using Canva — e.g. '7 daily habits for [niche outcome]'. This is your entry-point product.",
            "Add the Gumroad or Lemon Squeezy product link to the bio alongside the Room 11 profile link.",
            "Post 3–5 content pieces per week that organically lead to the guide's topic. No hard selling — let the CTA do the work.",
            "At 10k followers, pitch niche brand deals relevant to the character's aesthetic. One post can replace a week of subscription revenue.",
          ],
        },
      ],
    },
  },
};
