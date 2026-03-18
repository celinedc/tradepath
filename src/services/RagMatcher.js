import CAREER_EMBEDDINGS from '../data/careerEmbeddings.json';
import { RECOMMENDATIONS } from '../data/aptitudeData';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const EMBED_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=${API_KEY}`;
const GENERATE_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

/**
 * Calculates cosine similarity between two vectors
 */
function cosineSimilarity(a, b) {
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return normA && normB ? dot / (Math.sqrt(normA) * Math.sqrt(normB)) : 0;
}

/**
 * Embeds the student's profile narrative via Gemini
 */
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
 * Generates a 2-sentence personalized "why you match" summary using Gemini
 */
async function generateMatchSummary(studentNarrative, careerName) {
  const prompt = `You are a career counselor for high school students. A student described themselves as: "${studentNarrative}". Based on this, write exactly 2 concise, encouraging sentences explaining why they are a great fit for the career: "${careerName}". Be specific, upbeat, and talk directly to the student.`;

  const res = await fetch(GENERATE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
  });
  if (!res.ok) return null;
  const json = await res.json();
  return json.candidates?.[0]?.content?.parts?.[0]?.text || null;
}

/**
 * RagMatcher API Service
 * Drop-in replacement for SkillsMatcher — uses real vector embeddings + Gemini synthesis.
 * Original SkillsMatcher.js is preserved for easy rollback.
 * 
 * @param {Object} profile - same shape as SkillsMatcher expects
 * @returns {Promise<Array>} - Sorted career matches with ragScore and aiSummary
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

    // 2. Embed the student narrative
    const studentVector = await embedStudentProfile(narrative);

    // 3. Score each career using cosine similarity against precomputed embeddings
    const embeddingMap = Object.fromEntries(CAREER_EMBEDDINGS.map(e => [e.id, e.embedding]));

    const scoredCareers = RECOMMENDATIONS.map(job => {
      const jobVector = embeddingMap[job.id];
      const score = jobVector ? cosineSimilarity(studentVector, jobVector) : 0;
      return { ...job, ragScore: score };
    }).sort((a, b) => b.ragScore - a.ragScore);

    // 4. Generate a personalized AI summary for the top match
    const topMatch = scoredCareers[0];
    try {
      const aiSummary = await generateMatchSummary(narrative, topMatch.name);
      if (aiSummary) topMatch.relevanceMatch = aiSummary;
    } catch (_) {
      // silently fall back to the static relevanceMatch if synthesis fails
    }

    return scoredCareers;
  }
};
