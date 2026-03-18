import { RECOMMENDATIONS } from '../data/aptitudeData';

// This will load the generated pre-computed embeddings once we run our script!
// We'll import it from a JSON file. For now, it's just a placeholder array.
let PRECOMPUTED_EMBEDDINGS = [];
try {
  // Try to load if it exists
  PRECOMPUTED_EMBEDDINGS = []; // require('../data/careerEmbeddings.json')
} catch (e) {
  // Optional runtime fallback
}

/**
 * Calculates cosine similarity between two numeric vectors
 */
function cosineSimilarity(vecA, vecB) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

/**
 * RagMatcher API Service
 * Replaces SkillsMatcher by using actual LLM Embeddings and Semantic Search
 * instead of heuristic if-statement rules!
 */
export const RagMatcher = {
  
  /**
   * Generates a semantic embedding for the student's profile text using Gemini
   * (Placeholder logic until provided with Google Generative AI key)
   */
  getStudentVector: async (profileText) => {
    // TODO: implement call to GoogleGenAI gemini-embedding-004
    // return await geminiEmbed(profileText);
    return new Array(768).fill(0).map(() => Math.random()); // Mock vector for now
  },

  /**
   * Main matching function just like SkillsMatcher
   * @param {Object} profile - { favoriteSubject, extracurriculars, etc }
   */
  match: async (profile) => {
    // 1. Serialize profile into a narrative paragraph
    const narrative = `This student is good at ${profile.favoriteSubject}. They spend their free time doing ${profile.extracurriculars}. 
      They enjoy ${profile.techVsBookshelf} and prefer working ${profile.environmentChoice}. 
      When faced with a challenge, they ${profile.wifiFix} and their work style is ${profile.grindVsClutch}.
      They feel comfortable working in ${profile.heightsVsCrawlspace}.`;

    // 2. Embed the narrative into a context vector
    const studentVector = await RagMatcher.getStudentVector(narrative);

    // 3. Compute cosine similarities against all recommended paths
    const scoredPaths = RECOMMENDATIONS.map((job, index) => {
      // For now, if no embeddings exist, just use a random score to simulate
      const jobVector = PRECOMPUTED_EMBEDDINGS[index] || new Array(768).fill(0).map(() => Math.random());
      const score = cosineSimilarity(studentVector, jobVector);
      return {
        ...job,
        ragScore: score
      };
    });

    // 4. Sort by highest cosine similarity
    const sortedMatches = scoredPaths.sort((a, b) => b.ragScore - a.ragScore);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return sortedMatches;
  }
};
