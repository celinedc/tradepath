import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Legend, LineChart, Line, ComposedChart, Bar
} from 'recharts';
import { 
  Filter, Briefcase, Info, TrendingUp, Users, Venus, 
  GraduationCap, Coins, ArrowRight, Zap, Target, BookmarkCheck, X, Sparkles, ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TRADE_CAREERS, ETHNICITIES, CITY_PAY_ADJUSTMENTS, DEMAND_DATA } from '../data/mockData';
import { fetchCareerWages, getLocalizedMultiplier } from '../services/CareerOneStop';
import { useUser } from '../context/UserContext';

// Milestone Component for ROI Modal
const Milestone = ({ year, title, desc, icon }) => (
    <div className="flex gap-4 p-4 rounded-3xl bg-industrial-50 border border-industrial-100 group hover:border-indigo-200 transition-all">
        <div className="w-12 h-12 rounded-2xl bg-white border border-industrial-100 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <div className="space-y-0.5">
            <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{year}</span>
                <h5 className="text-sm font-black text-industrial-900">{title}</h5>
            </div>
            <p className="text-xs text-industrial-500 font-medium leading-relaxed">{desc}</p>
        </div>
    </div>
);

const ROIPathModal = ({ isOpen, onClose, tradeData, ethnicity, comparisonData }) => {
  if (!isOpen) return null;

  const lastPoint = comparisonData[comparisonData.length - 1];
  const totalTradeWealth = lastPoint.tradeCumulative;
  const totalDegreeWealth = lastPoint.degreeCumulative;
  const wealthDifference = totalTradeWealth - totalDegreeWealth;

  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-indigo-950/60 backdrop-blur-xl"
          />
        )}
      </AnimatePresence>
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl border border-white/20"
      >
        <div className="bg-indigo-600 p-5 text-white relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400 rounded-full blur-[80px] opacity-30 -mr-20 -mt-20" />
          <button onClick={onClose} className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
          <div className="relative z-10 space-y-1.5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-300" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-200">Financial Roadmap</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight leading-tight">Your {tradeData.name} ROI Path</h2>
          </div>
        </div>

        <div className="p-5 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase text-industrial-400 tracking-widest leading-none">40-Year Trade Wealth</p>
              <p className="text-3xl font-black text-indigo-900">${totalTradeWealth.toLocaleString()}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase text-industrial-400 tracking-widest leading-none">Net Advantage</p>
              <p className={`text-3xl font-black ${wealthDifference > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                {wealthDifference > 0 ? '+' : ''}${wealthDifference.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="space-y-4">
             <h4 className="text-sm font-black uppercase tracking-widest text-industrial-900 border-l-4 border-indigo-500 pl-4">Path Milestones</h4>
             <div className="space-y-3">
                <Milestone 
                    year="Year 1" 
                    title="Debt-Free Start" 
                    desc={`Unlike college, you start earning ~$${tradeData.base.toLocaleString()} immediately with near-zero student debt.`}
                    icon={<Zap className="w-4 h-4 text-amber-500" />}
                />
                <Milestone 
                    year="Year 4" 
                    title="The Accumulation Gap" 
                    desc={`While degree students enter the workforce, you've already earned ~$${Math.round(totalTradeWealth * 0.1).toLocaleString()} in cumulative income.`}
                    icon={<TrendingUp className="w-4 h-4 text-indigo-500" />}
                />
                <Milestone 
                    year="Year 10" 
                    title={`The ${tradeData.sector} Mastery`} 
                    desc="Your specialized experience puts you in the top 15% of earners locally as a seasoned professional."
                    icon={<Coins className="w-4 h-4 text-emerald-500" />}
                />
             </div>
          </div>

          <button 
            onClick={onClose}
            className="w-full py-5 bg-indigo-600 text-white rounded-[1.5rem] font-black uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20"
          >
            Got it, Let's Go!
          </button>
        </div>
      </motion.div>
    </div>,
    document.body
  );
};

export default function PayPage() {
  const { profile, userType } = useUser();
  const [selectedTrade, setSelectedTrade] = useState(profile.selectedTrade === 'undecided' ? 'all-trades' : (profile.selectedTrade || 'electrician'));
  const [selectedEthnicity, setSelectedEthnicity] = useState(profile.ethnicity || 'white');
  const [showAllEthnicities, setShowAllEthnicities] = useState(false);
  const [showGenderGap, setShowGenderGap] = useState(false);
  const [useRegionalPay, setUseRegionalPay] = useState(false);
  const [selectedCustomState, setSelectedCustomState] = useState('');
  const [isROIModalOpen, setIsROIModalOpen] = useState(false);

  // Sync with global profile when it changes
  useEffect(() => {
    if (profile.selectedTrade) {
      setSelectedTrade(profile.selectedTrade === 'undecided' ? 'all-trades' : profile.selectedTrade);
    }
    if (userType === 'student' && profile.ethnicity) {
      setSelectedEthnicity(profile.ethnicity);
    }
  }, [profile.selectedTrade, profile.ethnicity, userType]);

  const tradeCareers = TRADE_CAREERS;
  
  const allTradesAverage = useMemo(() => {
    const coreTrades = tradeCareers.filter(t => t.id !== 'undecided');
    const years = ["1", "5", "10", "15", "20", "25", "30", "35", "40"];
    
    const avgPayGrowth = years.map(yearStr => {
      const yearResult = { year: yearStr };
      ETHNICITIES.forEach(eth => {
        const sum = coreTrades.reduce((acc, trade) => {
          const point = trade.payGrowth.find(p => p.year === yearStr);
          return acc + (point ? point[eth.id] : trade.base);
        }, 0);
        yearResult[eth.id] = Math.round(sum / coreTrades.length);
      });
      return yearResult;
    });

    return {
      id: 'all-trades',
      name: 'All Trades Average',
      sector: 'Averages',
      base: Math.round(coreTrades.reduce((acc, t) => acc + t.base, 0) / coreTrades.length),
      demand: 'High',
      growth: '6%',
      payGrowth: avgPayGrowth,
      comparableJob: {
        name: 'General Bachelor\'s Degree',
        startingSalary: 62000,
        avgCost: '$120,000'
      }
    };
  }, [tradeCareers]);

  const tradeData = useMemo(() => {
    if (selectedTrade === 'all-trades') return allTradesAverage;
    return tradeCareers.find(t => t.id === selectedTrade) || tradeCareers[0];
  }, [selectedTrade, allTradesAverage, tradeCareers]);

  const [currentWageData, setCurrentWageData] = useState(null);

  useEffect(() => {
    if (useRegionalPay && selectedTrade) {
      fetchCareerWages(selectedTrade, profile.schoolCity || '72201')
        .then(data => setCurrentWageData(data));
    }
  }, [useRegionalPay, selectedTrade, profile.schoolCity]);

  const dynamicMultipliers = useMemo(() => {
    const BASE_COL = {
      'CA': 1.25, 'NY': 1.25, 'MA': 1.25, 'WA': 1.25, 'NJ': 1.25, 'CT': 1.25, 'HI': 1.25, 'AK': 1.25,
      'TX': 1.1, 'FL': 1.1, 'IL': 1.1, 'GA': 1.1, 'PA': 1.1, 'OH': 1.1, 'CO': 1.1, 'AZ': 1.1, 'NC': 1.1, 'VA': 1.1, 'MD': 1.1,
      'AR': 0.92, 'MS': 0.92, 'WV': 0.92, 'AL': 0.92, 'KY': 0.92, 'OK': 0.92, 'SC': 0.92, 'TN': 0.92, 'IN': 0.92, 'KS': 0.92, 'IA': 0.92
    };

    const multipliers = { ...BASE_COL };
    if (tradeData.id === 'all-trades') return multipliers;

    // Apply trade-specific logic
    Object.keys(multipliers).forEach(stateCode => {
      const stateData = DEMAND_DATA.find(d => d.id === stateCode);
      let bonus = 0;

      // Premium for Top Trades in that state
      if (stateData?.topTrade === tradeData.id || stateData?.topTrade === tradeData.name) {
        bonus += 0.08;
      }

      // Sector specialties
      if (tradeData.sector === 'Healthcare & Medical' && ['NY', 'MA', 'PA', 'FL'].includes(stateCode)) {
        bonus += 0.05; // High medical concentration
      }
      if (tradeData.sector === 'Industrial & Manufacturing' && ['MI', 'OH', 'IN', 'IL'].includes(stateCode)) {
        bonus += 0.04; // Rust belt industrial premium
      }
      if (tradeData.sector === 'Construction' && ['TX', 'AZ', 'NV', 'FL'].includes(stateCode)) {
        bonus += 0.04; // High growth construction premium
      }

      multipliers[stateCode] = parseFloat((multipliers[stateCode] + bonus).toFixed(2));
    });

    return multipliers;
  }, [tradeData]);

  const regionMultiplier = useMemo(() => {
    if (!useRegionalPay) return 1;
    const state = selectedCustomState || profile.schoolState || 'AR';
    
    if (selectedCustomState) {
        return dynamicMultipliers[selectedCustomState] || 1;
    }
    
    if (currentWageData) return getLocalizedMultiplier(currentWageData);
    
    return dynamicMultipliers[state] || 1;
  }, [useRegionalPay, selectedCustomState, currentWageData, profile.schoolState, dynamicMultipliers]);

  const processedChartData = tradeData.payGrowth.map(point => {
    const baseline = point[selectedEthnicity];
    return {
      ...point,
      baseline,
      regionalShift: Math.round(baseline * regionMultiplier),
      genderGap: Math.round(baseline * 0.92)
    };
  });

  const comparisonData = useMemo(() => {
    const COMPARABLE_MAPPING = {
      'Construction': { name: 'Civil Engineer', salary: 76500, cost: 125000 },
      'Aviation & Aerospace': { name: 'Aerospace Engineer', salary: 88400, cost: 145000 },
      'Energy & Utilities': { name: 'Electrical Engineer', salary: 78200, cost: 130000 },
      'Environment': { name: 'Environmental Engineer', salary: 74500, cost: 115000 },
      'Healthcare & Medical': { name: 'Registered Nurse (BSN)', salary: 81000, cost: 105000 },
      'Industrial & Manufacturing': { name: 'Mechanical Engineer', salary: 73800, cost: 120000 },
      'Service': { name: 'Hospitality Management', salary: 58400, cost: 95000 },
      'Transportation': { name: 'Logistics Manager', salary: 67200, cost: 110000 },
      'electrician': { name: 'Electrical Engineer', salary: 78200, cost: 130000 },
      'hvac': { name: 'Mechanical Engineer', salary: 73800, cost: 125000 },
      'welder': { name: 'Materials Engineer', salary: 72000, cost: 120000 },
      'chef': { name: 'Culinary Arts Degree', salary: 61000, cost: 110000 },
      'plumber': { name: 'Mechanical Engineer', salary: 73800, cost: 125000 },
      'machinist': { name: 'Industrial Engineer', salary: 75200, cost: 125000 },
      'it-specialist': { name: 'Computer Science Degree', salary: 88500, cost: 130000 },
      'dental-assistant': { name: 'Dental Student (DDS)', salary: 145000, cost: 400000 },
      'truck-driver': { name: 'Logistics Manager', salary: 68500, cost: 105000 },
      'paramedic': { name: 'ER Registered Nurse', salary: 82500, cost: 110000 },
      'cabinetmaker': { name: 'Interior Designer', salary: 65000, cost: 95000 },
      'cnc-operator': { name: 'Industrial Engineer', salary: 75200, cost: 125000 }
    };

    const getComparablePath = () => {
        if (tradeData.comparableJob) return {
            name: tradeData.comparableJob.name,
            startingSalary: tradeData.comparableJob.startingSalary,
            avgCost: tradeData.comparableJob.avgCost
        };
        const specifics = COMPARABLE_MAPPING[tradeData.id] || COMPARABLE_MAPPING[tradeData.sector] || {
            name: '4-Year Academic Path',
            salary: 62000,
            cost: 120000
        };
        return {
            name: specifics.name,
            startingSalary: specifics.salary || specifics.startingSalary,
            avgCost: typeof specifics.cost === 'string' ? specifics.cost : `$${(specifics.cost || 120000).toLocaleString()}`
        };
    };

    const comparablePath = getComparablePath();
    const degreeStartSalary = comparablePath.startingSalary;
    const degreeCost = parseInt(comparablePath.avgCost.replace(/[^0-9]/g, '')) || 120000;
    // Average student debt per degree type (national averages, not a % of sticker price)
    const DEGREE_DEBT_MAP = {
      'Dental Student (DDS)': 293900,
      'Doctor': 250000,
      'Law Degree': 130000,
      'Aerospace Engineer': 32000,
      'Electrical Engineer': 30000,
      'Mechanical Engineer': 29000,
      'Civil Engineer': 28000,
      'Environmental Engineer': 27000,
      'Materials Engineer': 28000,
      'Industrial Engineer': 28000,
      'Manufacturing Engineer': 27500,
      'Computer Science Degree': 31000,
      'Registered Nurse (BSN)': 47000,
      'ER Registered Nurse': 47000,
      'Logistics Manager': 29000,
      'Hospitality Management': 30000,
      'Culinary Arts Degree': 35000,
      'Interior Designer': 32000,
      'Sustainable Energy Engineer': 28000,
      'Naval Architect': 26000,
    };
    const degreeDebt = DEGREE_DEBT_MAP[comparablePath.name] ?? 37500; // $37,500 = national avg student debt
    const degreeGrowth = 0.042;

    const getTradeSalaryForYear = (targetYear) => {
      const points = tradeData.payGrowth;
      let prev = points[0];
      let next = points[points.length - 1];
      for (let i = 0; i < points.length; i++) {
        const y = parseInt(points[i].year);
        if (y <= targetYear) prev = points[i];
        if (y >= targetYear) {
          next = points[i];
          break;
        }
      }
      const valPrev = prev[selectedEthnicity] || tradeData.base;
      const valNext = next[selectedEthnicity] || tradeData.base;
      const yearPrev = parseInt(prev.year);
      const yearNext = parseInt(next.year);
      if (yearPrev === yearNext) return valPrev;
      const ratio = (targetYear - yearPrev) / (yearNext - yearPrev);
      return Math.round(valPrev + ratio * (valNext - valPrev));
    };

    let tradeCumulative = 0; 
    let degreeCumulative = 0;
    let breakEvenYear = null;
    const dataResults = [];

    for (let year = 1; year <= 40; year++) {
      const tradeSalary = getTradeSalaryForYear(year);
      tradeCumulative += tradeSalary;
      
      let degreeSalary = 0;
      if (year > 4) {
        degreeSalary = degreeStartSalary * Math.pow(1 + degreeGrowth, year - 5);
        degreeCumulative += degreeSalary;
      } else if (year === 4) {
        // At the end of graduation, the debt is accounted for
        degreeCumulative -= degreeDebt;
      }
      
      if (breakEvenYear === null && degreeCumulative > tradeCumulative && year > 4) {
        breakEvenYear = year;
      }
      dataResults.push({
        year,
        tradeSalary, 
        degreeSalary: Math.round(degreeSalary),
        tradeCumulative: Math.round(tradeCumulative),
        degreeCumulative: Math.round(degreeCumulative)
      });
    }
    return { dataResults, breakEvenYear, comparablePath, degreeDebt };
  }, [tradeData, selectedEthnicity]);

  const { dataResults: comparisonDataResults, breakEvenYear, comparablePath, degreeDebt } = comparisonData;
  const isStudent = userType === 'student';

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Top Row: Sidebar + 40-Year Graph */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Control Panel (Sidebar on Left) */}
        <aside className="w-full lg:w-80 flex-shrink-0 space-y-4">
          <div className={`card p-6 border-none shadow-sm ${isStudent ? 'bg-white rounded-[2rem]' : 'bg-white'}`}>
              <div className="flex items-center gap-2 mb-4">
                <Filter className={`w-5 h-5 ${isStudent ? 'text-indigo-600' : 'text-safety-blue'}`} />
                <span className={`font-black uppercase tracking-widest text-xs ${isStudent ? 'text-indigo-900' : 'text-industrial-900'}`}>Control Panel</span>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-industrial-400 uppercase tracking-widest">Career Path</label>
                  <select 
                    value={selectedTrade}
                    onChange={(e) => setSelectedTrade(e.target.value)}
                    className={`input-field py-3 text-sm appearance-none cursor-pointer ${isStudent ? 'bg-indigo-50/50 border-indigo-100 rounded-2xl text-indigo-900 font-bold' : 'bg-industrial-50 border-industrial-200'}`}
                  >
                    <option value="all-trades">All Trades Average</option>
                    {Object.entries(
                      tradeCareers
                        .filter(t => t.id !== 'undecided')
                        .reduce((acc, t) => {
                          const sector = t.sector || 'Other';
                          if (!acc[sector]) acc[sector] = [];
                          acc[sector].push(t);
                          return acc;
                        }, {})
                    ).map(([sector, trades]) => (
                      <optgroup key={sector} label={sector}>
                        {trades.map(t => (
                          <option key={t.id} value={t.id}>{t.name}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                <div className="pt-4 border-t border-industrial-100 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-industrial-700">Region Pay</span>
                    <button 
                      onClick={() => setUseRegionalPay(!useRegionalPay)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${useRegionalPay ? 'bg-emerald-500' : 'bg-industrial-200'}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${useRegionalPay ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </div>
                  
                  <div className="space-y-1">
                     <p className="text-[10px] text-industrial-400 leading-tight">Adjust earnings for specific state cost of living and local demand.</p>
                    <select 
                      value={selectedCustomState}
                      onChange={(e) => { setSelectedCustomState(e.target.value); if (e.target.value) setUseRegionalPay(true); }}
                      className={`w-full py-2 px-3 text-xs border rounded-xl appearance-none cursor-pointer ${isStudent ? 'bg-indigo-50/50 border-indigo-100' : 'bg-industrial-50 border-industrial-100'}`}
                    >
                      <option value="">Current Profile Location</option>
                      {Object.entries({
                        'High Premium (+25%)': ['CA', 'NY', 'MA', 'WA', 'NJ', 'CT', 'HI', 'AK'],
                        'Standard Premium (+10%)': ['TX', 'FL', 'IL', 'GA', 'PA', 'OH', 'CO', 'AZ', 'NC', 'VA', 'MD'],
                        'Baseline / Rural (-8%)': ['AR', 'MS', 'WV', 'AL', 'KY', 'OK', 'SC', 'TN', 'IN', 'KS', 'IA'],
                        'Other States (National Avg)': ['DE', 'ID', 'LA', 'ME', 'MI', 'MN', 'MO', 'MT', 'NE', 'NV', 'NH', 'NM', 'ND', 'OR', 'RI', 'SD', 'UT', 'VT', 'WI', 'WY']
                      }).map(([label, states]) => (
                        <optgroup key={label} label={label}>
                          {states.map(state => {
                            const mult = dynamicMultipliers[state] || 1;
                            const diff = Math.round((mult - 1) * 100);
                            const sign = diff >= 0 ? '+' : '';
                            return (
                              <option key={state} value={state}>
                                {state} ({sign}{diff}%)
                              </option>
                            );
                          })}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t border-industrial-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-industrial-700">Display Settings</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-industrial-500 font-bold uppercase tracking-wider">Gender Equity Line</span>
                    <button 
                      onClick={() => setShowGenderGap(!showGenderGap)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${showGenderGap ? 'bg-safety-blue' : 'bg-industrial-200'}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${showGenderGap ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </div>

                  {!isStudent && (
                    <div className="pt-4 border-t border-industrial-100 space-y-2">
                      <label className="text-[10px] font-black text-industrial-400 uppercase tracking-widest">Demographic Filter</label>
                      <select 
                        value={selectedEthnicity}
                        onChange={(e) => setSelectedEthnicity(e.target.value)}
                        className="w-full py-2 px-3 text-xs border border-industrial-200 rounded-xl bg-industrial-50 text-industrial-900 font-bold appearance-none cursor-pointer"
                      >
                        {ETHNICITIES.map(eth => (
                          <option key={eth.id} value={eth.id}>{eth.name}</option>
                        ))}
                      </select>
                      <p className="text-[9px] text-industrial-400 italic font-medium leading-tight">Switch view to analyze wage disparities across ethnic backgrounds.</p>
                    </div>
                  )}
                </div>
              </div>
          </div>

          <div className="card p-6 bg-blue-50 border-blue-100">
            <div className="flex gap-3">
              <Info className="w-5 h-5 text-safety-blue flex-shrink-0" />
              <p className="text-xs text-blue-800 font-medium leading-relaxed">
                <strong>Financial Fact:</strong> Skilled trades often offer "paid-to-learn" apprenticeships, meaning zero student debt and immediate income.
              </p>
            </div>
          </div>
        </aside>

        {/* First Graph Section */}
        <section className="flex-1 card p-5 bg-white shadow-xl border-none min-w-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-safety-blue" />
                <span className="text-xs font-black text-safety-blue uppercase tracking-widest">Annual Earnings</span>
              </div>
              <h3 className="text-3xl font-black text-industrial-900 tracking-tight">40-Year Career Projection</h3>
              <p className="text-sm text-industrial-500 mt-1 font-medium italic">Estimated salary trajectory based on {regionMultiplier !== 1 ? 'Regional Pay' : 'National Averages'}.</p>
            </div>
            <div className="flex gap-3">
              <div className="px-4 py-2 bg-industrial-900 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-industrial-900/20">
                LIFETIME ROI: 4.2X
              </div>
            </div>
          </div>

          <div className="h-[450px] w-full bg-white/40 rounded-3xl p-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={processedChartData}>
                <defs>
                  <linearGradient id="colorMain" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={ETHNICITIES.find(e => e.id === selectedEthnicity)?.color || "#0284c7"} stopOpacity={0.3}/>
                    <stop offset="95%" stopColor={ETHNICITIES.find(e => e.id === selectedEthnicity)?.color || "#0284c7"} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="year" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 11}} 
                  label={{ value: 'Years in Career', position: 'insideBottom', offset: -5, fontSize: 10, fill: '#64748b' }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 11}} 
                  tickFormatter={(value) => `$${value/1000}k`} 
                />
                <Tooltip 
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Annual Salary']}
                  labelFormatter={(label) => `Year ${label}`}
                  contentStyle={{
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                    maxWidth: 'none',
                    whiteSpace: 'pre-wrap'
                  }}
                />
                {showAllEthnicities ? (
                  ETHNICITIES.map(e => (
                    <Area 
                      key={e.id}
                      type="monotone" 
                      dataKey={e.id} 
                      stroke={e.color} 
                      strokeWidth={2} 
                      fillOpacity={1} 
                      fill={`url(#color${e.id})`} 
                      animationDuration={1500} 
                    />
                  ))
                ) : (
                    <Area 
                      type="monotone" 
                      dataKey="baseline" 
                      stroke={ETHNICITIES.find(e => e.id === selectedEthnicity)?.color || "#1e293b"} 
                      strokeWidth={4} 
                      fillOpacity={1} 
                      fill="url(#colorMain)" 
                      animationDuration={1500} 
                    />
                )}
                {useRegionalPay && <Area type="monotone" dataKey="regionalShift" stroke="#10b981" strokeWidth={3} fillOpacity={0} animationDuration={1500} />}
                {showGenderGap && <Area type="monotone" dataKey="genderGap" stroke="#fb7185" strokeWidth={2} strokeDasharray="5 5" fillOpacity={0} animationDuration={1500} />}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>

      {/* Full Width Middle Section: Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card p-5 bg-industrial-900 text-white border-none shadow-xl shadow-industrial-900/10">
            <div className="flex items-center gap-2 mb-3">
              <Coins className="w-4 h-4 text-safety-blue" />
              <span className="text-[10px] font-black uppercase tracking-wider text-industrial-400">Total Career Potential</span>
            </div>
            <h4 className="text-3xl font-black text-white leading-none mb-4">
              ${comparisonDataResults[comparisonDataResults.length - 1].tradeCumulative.toLocaleString()}
            </h4>
            <p className="text-xs text-industrial-400 leading-relaxed font-medium">
              40-year cumulative estimate for {tradeData.name}s.
            </p>
          </div>
          
          <div className="card p-5 border-industrial-100 bg-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-100/50 rounded-lg">
                <Briefcase className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-industrial-500">Market Demand</span>
            </div>
            <div className="flex items-center gap-2">
               <h4 className="text-2xl font-black text-industrial-900 mb-1">{tradeData.demand}</h4>
               <div className="text-[8px] font-black text-industrial-400 leading-tight border-l border-industrial-200 pl-2 uppercase">
                 Source: BLS / O*NET 2025
               </div>
            </div>
            <p className="text-xs text-industrial-500 font-medium italic mt-2">National Market Growth: {tradeData.growth}</p>
          </div>

          <div className="card p-5 border-industrial-100 bg-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-safety-blue" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-industrial-500">Union Strength</span>
            </div>
            <p className="text-xs text-industrial-500 leading-relaxed font-medium">
              Trades offer industry-leading <span className="font-black text-safety-blue">collective bargaining power</span>. Union members typically earn 20-30% higher wages and secure better pension/health benefits.
            </p>
          </div>
      </div>

      {/* Full Width Bottom Section: True Wealth */}
      <section className="space-y-4 pb-12">
        <div className="card p-5 bg-industrial-50 border-industrial-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Coins className="w-4 h-4 text-safety-blue" />
                <span className="text-xs font-black text-safety-blue uppercase tracking-widest">ROI Analysis</span>
              </div>
              <h3 className="text-2xl font-black text-industrial-900">The "True Wealth" Comparison</h3>
              <p className="text-xs text-industrial-500 max-w-2xl mt-1 leading-relaxed font-medium">
                Benchmarking the cumulative earnings of <span className="font-bold text-industrial-900 uppercase">{tradeData.name}</span> training against a <span className="font-bold text-purple-600 uppercase">{comparablePath.name}</span> (starting at ${comparablePath.startingSalary.toLocaleString()}/yr).
                Cumulative earnings represent the total sum of all gross annual wages (pre-tax) earned over a 40-year career, reflecting the full financial trajectory of your professional life.
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-industrial-200 shadow-sm text-[10px] font-black uppercase">
                Crossover Year: <span className="text-safety-blue text-sm block">{breakEvenYear ? 'Year ' + breakEvenYear : 'N/A'}</span>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row gap-4">
            {/* Extended Chart Area */}
            <div className="flex-1 min-w-0">
              <div className="h-[500px] w-full bg-white/40 rounded-[2.5rem] p-6 border border-white">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={comparisonDataResults} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="year" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#94a3b8', fontSize: 11}} 
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#94a3b8', fontSize: 11}} 
                      tickFormatter={(val) => {
                        if (val === 0) return '$0';
                        if (Math.abs(val) >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
                        return `$${val / 1000}k`;
                      }} 
                    />
                    <Tooltip 
                      formatter={(val) => [`$${val.toLocaleString()}`, 'Cumulative Wealth']}
                      contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', maxWidth: 'none', whiteSpace: 'pre-wrap'}} 
                    />
                    <Area type="monotone" dataKey="tradeCumulative" stroke="#1e293b" fill="#1e293b" fillOpacity={0.03} strokeWidth={4} name={`${tradeData.name} Wealth`} />
                    <Area type="monotone" dataKey="degreeCumulative" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.03} strokeWidth={4} name={`${comparablePath.name} Wealth`} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Restored Insight Column */}
            <div className="w-full xl:w-80 flex flex-col gap-3">
              <div className="card p-5 bg-white border-purple-100/60 shadow-sm hover:shadow-md transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors">
                    <GraduationCap className="w-5 h-5 text-purple-600" />
                  </div>
                  <h4 className="text-xs font-black text-purple-900 uppercase">Hidden Cost of Debt</h4>
                </div>
                <p className="text-xs text-industrial-500 leading-relaxed font-medium">
                  A typical <span className="font-black">{comparablePath.name}</span> graduate enters the workforce carrying an average of <span className="font-black text-purple-600">${degreeDebt.toLocaleString()}</span> in student loan debt — a financial burden that trade apprentices avoid entirely.
                </p>
              </div>

              <div className="card p-6 bg-white border-industrial-100/60 shadow-sm hover:shadow-md transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors">
                    <Zap className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h4 className="text-xs font-black text-industrial-900 uppercase">Early Entry Benefit</h4>
                </div>
                <p className="text-xs text-industrial-500 leading-relaxed font-medium">
                  Trade paths earn 4 years sooner. This "Head Start" creates an immediate wealth lead that degree paths struggle to close.
                </p>
              </div>

              <div 
                onClick={() => setIsROIModalOpen(true)}
                className="card p-5 mt-auto bg-industrial-900 text-white border-none flex flex-col justify-center gap-2 group cursor-pointer hover:bg-industrial-800 transition-all shadow-xl shadow-industrial-900/20"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-500/20 rounded-lg"><Target className="w-5 h-5 text-indigo-400" /></div>
                    <span className="text-xs font-black uppercase tracking-widest leading-none">Your Path ROI</span>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-[10px] text-industrial-400 font-bold uppercase tracking-wider">Expand Full Wealth Projection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ROIPathModal 
        isOpen={isROIModalOpen} 
        onClose={() => setIsROIModalOpen(false)} 
        tradeData={tradeData}
        ethnicity={selectedEthnicity}
        comparisonData={comparisonDataResults}
        comparablePath={comparablePath}
      />
    </div>
  );
}
