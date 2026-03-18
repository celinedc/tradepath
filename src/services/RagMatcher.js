import CAREER_EMBEDDINGS from '../data/careerEmbeddings.json';
import { RECOMMENDATIONS } from '../data/aptitudeData';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const EMBED_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=${API_KEY}`;
const GENERATE_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

function cosineSimilarity(a, b) {
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return normA && normB ? dot / (Math.sqrt(normA) * Math.sqrt(normB)) : 0;
}

async function embedStudentProfile(narrative) {
  const res = await fetch(EMBED_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: { parts: [{ text: narrative }] } }),
  });
  if (!res.ok) throw new Error(`Embedding API failed: ${res.status}`);
  const json = await res.json();
  return json.embedding.values;
}

/**
 * Generates a 2-sentence personalized "why you match" summary — called in the background
 * after results are already displayed, so it never blocks the UI.
 */
export async function generateMatchSummary(studentNarrative, careerName) {
  const prompt = `You are a career counselor for high school students. A student described themselves as: "${studentNarrative}". Based on this, write exactly 2 concise, encouraging sentences explaining why they are a great fit for the career: "${careerName}". Be specific, upbeat, and talk directly to the student.`;
  try {
    const res = await fetch(GENERATE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.candidates?.[0]?.content?.parts?.[0]?.text || null;
  } catch (_) {
    return null;
  }
}

/**
 * RagMatcher API Service
 *
 * Fast path: returns sorted results immediately after embedding + cosine similarity (~1-2s).
 * The AI synthesis summary is NOT awaited here — it is triggered separately from CareerDiscovery
 * as a non-blocking background call that updates the UI when ready.
 *
 * @param {Object} profile - same shape as SkillsMatcher expects
 * @returns {{ matches: Array, narrative: string }} - Sorted matches + the narrative for background synthesis
 */
export const RagMatcher = {
  match: async (profile) => {
    // 1. Build a natural language narrative from survey responses
    const narrative = [
      profile.favoriteSubject && `My favorite subject is ${profile.favoriteSubject}.`,
      profile.extracurriculars && `I enjoy ${profile.extracurriculars}.`,
      profile.techVsBookshelf && `When helping others, I tend to be asked to help with: ${profile.techVsBookshelf}.`,
      profile.environmentChoice && `I prefer working ${profile.environmentChoice}.`,
      profile.wiresPipes && `I find troubleshooting complex systems ${profile.wiresPipes === 'Fun challenge' ? 'exciting and fun' : 'frustrating'}.`,
      profile.steadyHandAesthetics && (profile.steadyHandAesthetics === 'I love detailed work' ? 'I love detailed, precise work.' : 'I prefer broader tasks.'),
      profile.heightsVsCrawlspace && `Physically, I am comfortable with: ${profile.heightsVsCrawlspace}.`,
      profile.dirtyHands && `Getting my hands dirty ${profile.dirtyHands === "Doesn't bother me" ? "doesn't bother me" : 'is not for me'}.`,
      profile.grindVsClutch && `My work style leans toward: ${profile.grindVsClutch}.`,
      profile.visualization && `Visualizing blueprints in 3D is ${profile.visualization === 'Easy' ? 'easy for me' : 'challenging for me'}.`,
    ].filter(Boolean).join(' ');

    // 2. Embed the student narrative (only API call we await)
    const studentVector = await embedStudentProfile(narrative);

    // 3. Score all careers via cosine similarity — pure local math, instant
    const embeddingMap = Object.fromEntries(CAREER_EMBEDDINGS.map(e => [e.id, e.embedding]));
    const matches = RECOMMENDATIONS.map(job => {
      const jobVector = embeddingMap[job.id];
      const score = jobVector ? cosineSimilarity(studentVector, jobVector) : 0;
      return { ...job, ragScore: score };
    }).sort((a, b) => b.ragScore - a.ragScore);

    // Return immediately — synthesis is done in the background by the caller
    return { matches, narrative };
  }
};
