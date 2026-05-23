// Migration one-time : insère les workflows existants dans Supabase
// Usage : npx tsx scripts/seed-workflows.ts
import { config } from "dotenv";
config({ path: ".env.local" });

import { createClient } from "@supabase/supabase-js";
import { aiInfluencerWorkflow } from "../src/data/aiinfluencerWorkflow";
import { ideaToWorkflowSystem } from "../src/data/ideaToWorkflowSystem";
import { notebookLmToWebsite } from "../src/data/notebookLmToWebsite";
import { searchDemandWorkflow } from "../src/data/searchDemandWorkflow";
import { virtualInfluencerBuilder } from "../src/data/virtualInfluencerBuilder";
import { voiceToQuoteApp } from "../src/data/voiceToQuoteApp";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ NEXT_PUBLIC_SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY manquant dans .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const allWorkflows = [
  aiInfluencerWorkflow,
  ideaToWorkflowSystem,
  notebookLmToWebsite,
  searchDemandWorkflow,
  virtualInfluencerBuilder,
  voiceToQuoteApp,
];

async function seed() {
  for (const wf of allWorkflows) {
    const { id, slug, title, ...rest } = wf;
    const { error } = await supabase
      .from("workflows")
      .upsert({ id, slug, title, data: rest }, { onConflict: "id" });

    if (error) {
      console.error(`❌ ${slug}: ${error.message}`);
    } else {
      console.log(`✅ ${slug}`);
    }
  }
  console.log("\nSeed terminé.");
}

seed();
