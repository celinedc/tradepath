
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY);

async function listModels() {
  const result = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" }).listModels();
  // Wait, listModels is on the genAI object in some versions, or via a client.
  // In @google/generative-ai, it might be different.
  // Let's just try embedding-001 which is very standard.
  console.log("Attempting to find embedding models...");
}

listModels();
