
import { RECOMMENDATIONS } from '../data/aptitudeData';

/**
 * Skills Matcher API Service
 * Simulates an AI-powered matching engine that analyzes survey responses
 * against career path metadata and keywords.
 */
export const SkillsMatcher = {
  /**
   * Match student profile against potential career paths
   * @param {Object} profile - { favoriteSubject, extracurriculars, location, education }
   * @returns {Promise<Array>} - Sorted array of career matches with match scores
   */
  match: async (profile) => {
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 2000));

    const { 
      favoriteSubject = '', 
      extracurriculars = '', 
      grades = [],
      wiresPipes = '',
      steadyHandAesthetics = '',
      environmentChoice = '',
      techVsBookshelf = '',
      dirtyHands = '',
      heightsVsCrawlspace = '',
      visualization = '',
      resultsPatience = '',
      protocolsVsWinging = '',
      functionVsAesthetic = '',
      steadyHandHobby = '',
      wifiFix = '',
      grindVsClutch = '',
      structureVsTinker = ''
    } = profile;

    const studentTokens = `${favoriteSubject} ${extracurriculars} ${techVsBookshelf} ${grades.map(g => g.subject).join(' ')}`.toLowerCase().split(/[ ,.;/]+/).filter(t => t.length > 2);

    const matches = RECOMMENDATIONS.map(job => {
      let rawAptitudeScore = 0;
      const matchedKeywords = [];

      // 1. Aptitude Calculation (Scoring based on profile alignment)
      // Keyword matching (Aptitude signal)
      job.keywords.forEach(keyword => {
        if (studentTokens.some(token => token.includes(keyword) || keyword.includes(token))) {
          rawAptitudeScore += 2;
          matchedKeywords.push(keyword);
        }
      });

      // --- Situational Logic Boosts (Synthetic Intelligence Mapping) ---
      
      // Troubleshooting & Logic Signals
      const isDetective = wiresPipes === 'Fun challenge' || wifiFix === 'Investigate';
      if (isDetective && (job.keywords.includes('logic') || job.keywords.includes('troubleshooting') || job.keywords.includes('diagnostic'))) {
        rawAptitudeScore += 5;
      }

      // Precision & Steady Hand Signals
      const isPrecise = steadyHandAesthetics === 'I love detailed work' || steadyHandHobby === 'Yes';
      if (isPrecise && (job.keywords.includes('precision') || job.keywords.includes('steady hand') || job.keywords.includes('detail'))) {
        rawAptitudeScore += 5;
      }

      // Environmental Comfort
      if (environmentChoice === 'Outdoor variety' && job.keywords.includes('outdoors')) rawAptitudeScore += 4;
      if (environmentChoice === 'Indoor' && !job.keywords.includes('outdoors')) rawAptitudeScore += 4;
      
      // Physical Boundaries (Heights vs Crawlspaces)
      if (heightsVsCrawlspace === 'Top of 20-foot ladder' && job.keywords.includes('heights')) rawAptitudeScore += 6;
      if (dirtyHands === "Doesn't bother me" && (job.keywords.includes('construction') || job.keywords.includes('fixing'))) rawAptitudeScore += 3;

      // Spatial & Visualization
      if (visualization === 'Easy' && (job.keywords.includes('spatial') || job.id.includes('bim') || job.id.includes('carpenter'))) {
        rawAptitudeScore += 5;
      }

      // Interest Pivot (Tech vs Building vs Creative)
      if (techVsBookshelf === 'Setting up tech/software' && (job.keywords.includes('computers') || job.keywords.includes('technology'))) rawAptitudeScore += 5;
      if (techVsBookshelf === 'Building a bookshelf/furniture' && (job.keywords.includes('building') || job.keywords.includes('making'))) rawAptitudeScore += 5;
      if (techVsBookshelf === 'Designing a creative project/art' && (job.keywords.includes('art') || job.keywords.includes('design') || job.keywords.includes('aesthetic'))) rawAptitudeScore += 6;

      // Grind vs Clutch (Personality/Performance Type)
      if (grindVsClutch === 'The long, satisfying grind' && (job.keywords.includes('precision') || job.keywords.includes('detail') || job.keywords.includes('building'))) rawAptitudeScore += 4;
      if (grindVsClutch === 'The high-pressure clutch moment' && (job.keywords.includes('safety') || job.keywords.includes('diagnostic') || job.keywords.includes('emergency'))) rawAptitudeScore += 4;

      // Protocol vs Creative
      if (protocolsVsWinging === 'Follow protocols' && (job.keywords.includes('safety') || job.keywords.includes('security'))) rawAptitudeScore += 4;

      // Gamer/Strategy Signals
      if (structureVsTinker === 'Build massive structures' && job.keywords.includes('building')) rawAptitudeScore += 3;
      if (structureVsTinker === 'Tinker with mods' && job.keywords.includes('logic')) rawAptitudeScore += 3;

      // Subject specific boosts
      const subject = favoriteSubject.toLowerCase();
      if (subject.includes('math') && job.keywords.includes('math')) rawAptitudeScore += 3;
      if (subject.includes('art') && job.keywords.includes('art')) rawAptitudeScore += 3;
      if (subject.includes('science') && job.keywords.includes('science')) rawAptitudeScore += 3;
      if (subject.includes('physics') && job.keywords.includes('physics')) rawAptitudeScore += 3;

      // Grade specific boosts
      grades.forEach(g => {
         const s = g.subject.toLowerCase();
         const v = g.grade.toUpperCase();
         const isTop = v.startsWith('A') || v === 'B+';
         if (isTop) {
            if (s.includes('math') && job.keywords.includes('math')) rawAptitudeScore += 2;
            if (s.includes('physics') && job.keywords.includes('physics')) rawAptitudeScore += 2;
            if (s.includes('craft') || s.includes('shop') || s.includes('drafting')) {
               if (job.keywords.includes('building') || job.keywords.includes('precision')) rawAptitudeScore += 2;
            }
         }
      });

      // Activity/Hobby specific boosts
      const activities = extracurriculars.toLowerCase();
      if (activities.includes('fixing') && job.keywords.includes('fixing')) rawAptitudeScore += 3;
      if (activities.includes('game') && job.keywords.includes('gaming')) rawAptitudeScore += 3;
      if (activities.includes('build') && job.keywords.includes('building')) rawAptitudeScore += 3;

      // 2. Demand Calculation (Market Signal)
      let demandPercent = 0;
      switch(job.demand) {
        case 'Very High': demandPercent = 100; break;
        case 'High': demandPercent = 80; break;
        case 'Medium': demandPercent = 60; break;
        case 'Low': demandPercent = 40; break;
        default: demandPercent = 50;
      }

      // 3. Normalization & Weighting (70% Aptitude / 30% Demand)
      // We assume an "Expert Match" for aptitude reaches ~20 points
      const aptitudePercent = Math.min((rawAptitudeScore / 20) * 100, 100);
      
      const finalPercentage = Math.round((aptitudePercent * 0.7) + (demandPercent * 0.3));
      
      // Add a small random factor for tie-breaking and variation
      const finalScore = finalPercentage + Math.random();

      return {
        ...job,
        matchScore: finalScore,
        matchPercentage: Math.min(finalPercentage, 99), // Cap at 99% for visual realism
        matchedKeywords,
        weights: {
          aptitude: Math.round(aptitudePercent),
          demand: demandPercent
        }
      };
    });


    // 4. Safety Net Logic Override (Contextual Alignment)
    // If we have low confidence (no matches or top match < 55%), trigger Aptitude Mapping
    const topAptitude = matches.length > 0 ? Math.max(...matches.map(m => m.weights.aptitude)) : 0;
    
    if (topAptitude < 40) {
      const activities = `${favoriteSubject} ${extracurriculars}`.toLowerCase();
      
      // Precision & Aesthetic Signals
      const isAesthetic = /art|makeup|draw|sew|detail|steady hands|jewelry|sculpt|aesthetic/.test(activities);
      const aestheticTrades = ['auto-refinishing', 'dental-lab-tech', 'historic-restoration'];
      
      // Systems & Strategy Signals
      const isStrategy = /gaming|minecraft|strategy|puzzle|computers|how things work|logic|modding/.test(activities);
      const strategyTrades = ['bim-coordinator', 'ndt-technician', 'aviation-avionics'];
      
      // Environmental & Bio Signals
      const isEnvironmental = /outdoor|animal|hiking|chemist|helping|nature|science|environment|public health/.test(activities);
      const environmentalTrades = ['water-treatment', 'land-surveyor', 'biomed-tech'];
      
      // Structural & Scale Signals
      const isStructural = /build|heights|machine|physical|climbing|skyscrapers|massive|structural/.test(activities);
      const structuralTrades = ['tower-tech', 'millwright', 'ironworker'];

      matches.forEach(m => {
        if (isAesthetic && (m.keywords.includes('art') || m.keywords.includes('aesthetic') || m.keywords.includes('precision') || aestheticTrades.includes(m.id))) {
          m.matchScore += 85;
          m.matchPercentage = Math.max(m.matchPercentage, 92);
          m.isSafetyNetMatch = true;
          m.safetyNetCategory = "Creative Artisan Pivot";
        }
        if (isStrategy && strategyTrades.includes(m.id)) {
          m.matchScore += 80;
          m.matchPercentage = Math.max(m.matchPercentage, 94);
          m.isSafetyNetMatch = true;
          m.safetyNetCategory = "Systems & Strategy Pivot";
        }
        if (isEnvironmental && environmentalTrades.includes(m.id)) {
          m.matchScore += 80;
          m.matchPercentage = Math.max(m.matchPercentage, 90);
          m.isSafetyNetMatch = true;
          m.safetyNetCategory = "Environmental & Bio Pivot";
        }
        if (isStructural && structuralTrades.includes(m.id)) {
          m.matchScore += 80;
          m.matchPercentage = Math.max(m.matchPercentage, 95);
          m.isSafetyNetMatch = true;
          m.safetyNetCategory = "Structural & Scale Pivot";
        }
      });
    }

    // 5. Filtering & Deduplication
    
    // FILTER: Include matches with aptitude alignment OR if it was a safety net trigger
    const filteredMatches = matches.filter(m => m.weights.aptitude > 0 || m.isSafetyNetMatch);

    // Sort by match score descending
    const sorted = filteredMatches.sort((a, b) => b.matchScore - a.matchScore);

    // Remove duplicates by display title (keeping the one with the higher score)
    const uniqueMatches = [];
    const seenTitles = new Set();
    
    for (const match of sorted) {
      if (!seenTitles.has(match.title)) {
        uniqueMatches.push(match);
        seenTitles.add(match.title);
      }
    }

    return uniqueMatches;
  }
};
