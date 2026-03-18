import * as dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { RECOMMENDATIONS } from "../src/data/aptitudeData.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_KEY = process.env.VITE_GEMINI_API_KEY;
const EMBED_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=${API_KEY}`;

async function embedText(text) {
  const res = await fetch(EMBED_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: { parts: [{ text }] } }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`HTTP ${res.status}: ${err}`);
  }
  const json = await res.json();
  return json.embedding.values;
}

async function generateEmbeddings() {
  console.log(`Generating embeddings for ${RECOMMENDATIONS.length} careers via Gemini v1 REST API...`);
  const results = [];

  for (const job of RECOMMENDATIONS) {
    const textToEmbed = [
      `Title: ${job.name}`,
      `Description: ${job.dayInLife}`,
      `Impact: ${job.impact}`,
      `Skills: ${job.skills.join(", ")}`,
      `Keywords: ${job.keywords.join(", ")}`,
    ].join("\n");

    try {
      const embedding = await embedText(textToEmbed);
      results.push({ id: job.id, embedding });
      console.log(`  ✓ ${job.name}`);
    } catch (err) {
      console.error(`  ✗ ${job.name}: ${err.message}`);
    }

    // Small delay to avoid rate-limiting
    await new Promise(r => setTimeout(r, 200));
  }

  const outPath = path.join(__dirname, "../src/data/careerEmbeddings.json");
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
  console.log(`\nDone! Saved ${results.length} embeddings to ${outPath}`);
}

generateEmbeddings();
