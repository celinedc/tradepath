
/**
 * CareerOneStop Web API Service
 * 
 * Documentation: https://www.careeronestop.org/Developers/WebAPI/web-api.aspx
 * This service simulates integration with CareerOneStop to fetch 
 * localized wage data for trade careers.
 */

const API_KEY = "MOCKED_KEY_TRADE_PATH"; // Placeholder for actual API key
const USER_ID = "TRADE_NAV_STUDENT";

export const fetchCareerWages = async (occupation, zipCode) => {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 800));

  // In a real production app, this would be a fetch call:
  // const response = await fetch(`https://api.careeronestop.org/v1/wages/${USER_ID}/${occupation}/${zipCode}/10`, {
  //   headers: { "Authorization": `Bearer ${API_KEY}` }
  // });
  // return await response.json();

  // Generate somewhat deterministic but varied mock data
  const hash = (occupation?.length || 0) + (parseInt(zipCode) || 0);
  const isHighCost = hash % 2 === 0;
  const stateMedian = isHighCost ? 68000 : 52000;
  const nationalMedian = 60000;

  // Mocked Response based on CareerOneStop schema
  const mockData = {
    "OccupationList": [
      {
        "OnetTitle": occupation,
        "Wages": {
          "NationalWagesList": [
            { "RateType": "Annual", "Pct10": 35000, "Pct25": 45000, "Median": nationalMedian, "Pct75": 85000, "Pct90": 110000 }
          ],
          "StateWagesList": [
            { "RateType": "Annual", "Pct10": Math.round(stateMedian * 0.6), "Pct25": Math.round(stateMedian * 0.8), "Median": stateMedian, "Pct75": Math.round(stateMedian * 1.3), "Pct90": Math.round(stateMedian * 1.7) }
          ]
        }
      }
    ]
  };

  return mockData;
};

export const getLocalizedMultiplier = (apiData) => {
  if (!apiData || !apiData.OccupationList) return 1.0;
  
  const national = apiData.OccupationList[0].Wages.NationalWagesList[0].Median;
  const state = apiData.OccupationList[0].Wages.StateWagesList[0].Median;
  
  // Calculate a precise multiplier based on real-time data comparison
  return parseFloat((state / national).toFixed(2));
};
