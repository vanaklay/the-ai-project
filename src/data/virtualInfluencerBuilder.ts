import { Workflow } from "./workflows";
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
