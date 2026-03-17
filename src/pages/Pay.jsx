import React, { useState, useEffect, useMemo } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Legend, LineChart, Line, ComposedChart, Bar
} from 'recharts';
import { 
  Filter, Briefcase, Info, TrendingUp, Users, Venus, 
  GraduationCap, Coins, ArrowRight, Zap, Target, BookmarkCheck, X, Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TRADE_CAREERS, ETHNICITIES, CITY_PAY_ADJUSTMENTS } from '../data/mockData';
import { fetchCareerWages, getLocalizedMultiplier } from '../services/CareerOneStop';
import { useUser } from '../context/UserContext';

// ROI Path Modal Component
const ROIPathModal = ({ isOpen, onClose, tradeData, ethnicity, comparisonData, comparablePath }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-industrial-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
      >
        <div className="p-8 border-b border-industrial-100 flex justify-between items-center bg-industrial-50/50">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 bg-safety-blue/10 text-safety-blue text-[10px] font-black uppercase rounded-full tracking-wider">Depth Analysis</span>
              <h2 className="text-2xl font-black text-industrial-900 leading-none">Full Wealth Projection</h2>
            </div>
            <p className="text-sm text-industrial-500 font-medium tracking-tight">
              40-Year Cumulative ROI: {tradeData.name} vs {comparablePath.name}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-3 hover:bg-white rounded-2xl transition-all border border-transparent hover:border-industrial-200"
          >
            <X className="w-5 h-5 text-industrial-400" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-[2rem] bg-industrial-900 text-white shadow-xl">
                <p className="text-[10px] font-black uppercase tracking-widest text-industrial-400 mb-2">Trade Advantage</p>
                <h4 className="text-2xl font-black leading-none mb-2">+$182,500</h4>
                <p className="text-[10px] text-industrial-500 leading-snug">Average cumulative wealth lead at Year 10 due to zero student debt.</p>
              </div>
              <div className="p-6 rounded-[2rem] bg-emerald-50 border border-emerald-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-2">Break-Even Point</p>
                <h4 className="text-2xl font-black text-industrial-900 leading-none mb-2">Year 32</h4>
                <p className="text-[10px] text-industrial-500 leading-snug">The year average degree earnings finally catch up to trade wealth.</p>
              </div>
              <div className="p-6 rounded-[2rem] bg-indigo-50 border border-indigo-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-2">Lifetime Difference</p>
                <h4 className="text-2xl font-black text-industrial-900 leading-none mb-2">Comparable</h4>
                <p className="text-[10px] text-industrial-500 leading-snug">Projected lifetime earnings within 5% of technical management roles.</p>
              </div>
           </div>

           <div className="space-y-6">
             <div className="flex items-center justify-between">
                <h3 className="text-lg font-black text-industrial-900 tracking-tight uppercase">Cumulative Wealth Over Time</h3>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-1.5"><div className="w-6 h-1 bg-industrial-900 rounded-full" /> Trade</div>
                  <div className="flex items-center gap-1.5"><div className="w-6 h-1 bg-safety-blue rounded-full" /> Degree</div>
                </div>
             </div>
             <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={comparisonData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} tickFormatter={(val) => `$${val/1000}k`} />
                    <Tooltip 
                      contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                      formatter={(val) => [`$${val.toLocaleString()}`, 'Cumulative Wealth']}
                    />
                    <Area type="monotone" dataKey="tradeCumulative" stroke="#1e293b" fill="#1e293b" fillOpacity={0.05} strokeWidth={3} />
                    <Area type="monotone" dataKey="degreeCumulative" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.05} strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
           </div>
        </div>

        <div className="p-8 bg-industrial-50/50 border-t border-industrial-100">
          <button 
            onClick={onClose}
            className="w-full py-4 bg-industrial-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-industrial-800 transition-all shadow-xl shadow-industrial-900/20"
          >
            Close ROI Roadmap
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default function PayPage() {
  const { profile, userType } = useUser();
  const [selectedTrade, setSelectedTrade] = useState(profile.selectedTrade || 'electrician');
  const [selectedEthnicity, setSelectedEthnicity] = useState(profile.ethnicity || 'white');
  const [showAllEthnicities, setShowAllEthnicities] = useState(false);
  const [showGenderGap, setShowGenderGap] = useState(false);
  const [useRegionalPay, setUseRegionalPay] = useState(false);
  const [selectedCustomState, setSelectedCustomState] = useState('');
  const [isROIModalOpen, setIsROIModalOpen] = useState(false);

  // Sync with global profile when it changes
  useEffect(() => {
    if (profile.selectedTrade) {
      setSelectedTrade(profile.selectedTrade);
    }
    if (userType === 'student' && profile.ethnicity) {
      setSelectedEthnicity(profile.ethnicity);
    }
  }, [profile.selectedTrade, profile.ethnicity, userType]);

  const tradeData = TRADE_CAREERS.find(t => t.id === selectedTrade) || TRADE_CAREERS[0];
  const [currentWageData, setCurrentWageData] = useState(null);

  useEffect(() => {
    if (useRegionalPay && selectedTrade) {
      fetchCareerWages(selectedTrade, profile.schoolCity || '72201')
        .then(data => setCurrentWageData(data));
    }
  }, [useRegionalPay, selectedTrade, profile.schoolCity]);

  const regionMultiplier = useMemo(() => {
    if (!useRegionalPay) return 1;
    if (selectedCustomState) {
        const state = selectedCustomState;
        const highCostStates = ['CA', 'NY', 'MA', 'WA', 'NJ', 'CT', 'HI', 'AK'];
        const midCostStates = ['TX', 'FL', 'IL', 'GA', 'PA', 'OH', 'CO', 'AZ', 'NC', 'VA', 'MD'];
        const lowerCostStates = ['AR', 'MS', 'WV', 'AL', 'KY', 'OK', 'SC', 'TN', 'IN', 'KS', 'IA'];
        if (highCostStates.includes(state)) return 1.25;
        if (midCostStates.includes(state)) return 1.1;
        if (lowerCostStates.includes(state)) return 0.92;
        return 1;
    }
    if (currentWageData) return getLocalizedMultiplier(currentWageData);
    const state = profile.schoolState || 'AR';
    const highCostStates = ['CA', 'NY', 'MA', 'WA', 'NJ', 'CT', 'HI', 'AK'];
    const midCostStates = ['TX', 'FL', 'IL', 'GA', 'PA', 'OH', 'CO', 'AZ', 'NC', 'VA', 'MD'];
    const lowerCostStates = ['AR', 'MS', 'WV', 'AL', 'KY', 'OK', 'SC', 'TN', 'IN', 'KS', 'IA'];
    if (highCostStates.includes(state)) return 1.25;
    if (midCostStates.includes(state)) return 1.1;
    if (lowerCostStates.includes(state)) return 0.92;
    return 1;
  }, [useRegionalPay, selectedCustomState, currentWageData, profile.schoolState]);

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
    const degreeDebt = Math.min(Math.round(degreeCost * 0.25), 32000); 
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

    let tradeCumulative = -10000; // tradeDebt
    let degreeCumulative = -degreeDebt;
    let breakEvenYear = null;
    const dataResults = [];

    for (let year = 1; year <= 40; year++) {
      const tradeSalary = getTradeSalaryForYear(year);
      tradeCumulative += tradeSalary;
      let degreeSalary = 0;
      if (year <= 4) {
        degreeSalary = -(degreeCost / 4);
      } else {
        degreeSalary = degreeStartSalary * Math.pow(1 + degreeGrowth, year - 5);
      }
      if (year > 4) degreeCumulative += degreeSalary;
      else degreeCumulative -= (degreeCost / 4);
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
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Top Filter Bar (Horizontal) - Replaces Sidebar */}
      <div className={`card p-6 border-none shadow-sm flex flex-col md:flex-row items-center gap-6 ${isStudent ? 'bg-white rounded-[2rem]' : 'bg-white'}`}>
          <div className="flex items-center gap-2 pr-6 border-r border-industrial-100 hidden md:flex">
            <Filter className={`w-5 h-5 ${isStudent ? 'text-indigo-600' : 'text-safety-blue'}`} />
            <span className={`font-black uppercase tracking-widest text-xs ${isStudent ? 'text-indigo-900' : 'text-industrial-900'}`}>Control Panel</span>
          </div>

          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-industrial-400 uppercase tracking-widest">Career Path</label>
              <select 
                value={selectedTrade}
                onChange={(e) => setSelectedTrade(e.target.value)}
                className={`input-field py-2 text-sm appearance-none cursor-pointer ${isStudent ? 'bg-indigo-50/50 border-indigo-100 rounded-xl text-indigo-900 font-bold' : 'bg-industrial-50 border-industrial-200'}`}
              >
                {Object.entries(
                  TRADE_CAREERS.reduce((acc, t) => {
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

            <div className="flex items-center gap-4 h-11 border-l border-industrial-100 pl-6">
               <div className="flex flex-col gap-1">
                 <span className="text-[10px] font-black text-industrial-400 uppercase">Region Analysis</span>
                 <button 
                  onClick={() => setUseRegionalPay(!useRegionalPay)}
                  className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors ${useRegionalPay ? 'bg-emerald-500' : 'bg-industrial-200'}`}
                 >
                   <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${useRegionalPay ? 'translate-x-6' : 'translate-x-1'}`} />
                 </button>
               </div>
               <div className="flex flex-col gap-1">
                 <span className="text-[10px] font-black text-industrial-400 uppercase">Gender Equity</span>
                 <button 
                  onClick={() => setShowGenderGap(!showGenderGap)}
                  className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors ${showGenderGap ? 'bg-safety-blue' : 'bg-industrial-200'}`}
                 >
                   <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${showGenderGap ? 'translate-x-6' : 'translate-x-1'}`} />
                 </button>
               </div>
            </div>

            <div className="space-y-1.5 md:col-span-2 flex items-end gap-3">
                <div className="flex-1">
                  <label className="text-[10px] font-black text-industrial-400 uppercase tracking-widest">Override Location</label>
                  <select 
                    value={selectedCustomState}
                    onChange={(e) => { setSelectedCustomState(e.target.value); if (e.target.value) setUseRegionalPay(true); }}
                    className={`w-full py-2 px-3 text-sm border rounded-xl appearance-none cursor-pointer ${isStudent ? 'bg-indigo-50/50 border-indigo-100' : 'bg-industrial-50 border-industrial-100'}`}
                  >
                    <option value="">Current Profile Location</option>
                    <optgroup label="Core States">
                      <option value="CA">California (+25%)</option>
                      <option value="NY">New York (+25%)</option>
                      <option value="TX">Texas (+10%)</option>
                      <option value="FL">Florida (+10%)</option>
                      <option value="AR">Arkansas (-8%)</option>
                    </optgroup>
                    <option value="all">View All States...</option>
                  </select>
                </div>
                {userType === 'counselor' && (
                   <button 
                    onClick={() => setShowAllEthnicities(!showAllEthnicities)}
                    className="h-10 px-4 rounded-xl border border-industrial-200 text-[10px] font-black uppercase tracking-widest text-industrial-600 hover:bg-industrial-50 transition-colors"
                   >
                     {showAllEthnicities ? 'Hide Groups' : 'Compare Groupings'}
                   </button>
                )}
            </div>
          </div>
      </div>

      <div className="space-y-8">
        {/* Main 40-Year Projection */}
        <section className="card p-8 bg-white shadow-xl border-none">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-safety-blue" />
                <span className="text-xs font-black text-safety-blue uppercase tracking-widest">Annual Earnings</span>
              </div>
              <h3 className="text-3xl font-black text-industrial-900 tracking-tight">40-Year Career Projection</h3>
              <p className="text-sm text-industrial-500 mt-1 font-medium">Estimated salary trajectory adjusted for {regionMultiplier !== 1 ? 'Regional Pay' : 'National Averages'}.</p>
            </div>
            <div className="flex gap-3">
              <div className="px-4 py-2 bg-industrial-900 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-industrial-900/20">
                LIFETIME ROI: 4.2X
              </div>
            </div>
          </div>

          <div className="h-[450px] w-full">
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
                {useRegionalPay && (
                   <Area type="monotone" dataKey="regionalShift" stroke="#10b981" strokeWidth={3} fillOpacity={0} animationDuration={1500} />
                )}
                {showGenderGap && (
                   <Area type="monotone" dataKey="genderGap" stroke="#fb7185" strokeWidth={2} strokeDasharray="5 5" fillOpacity={0} animationDuration={1500} />
                )}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="card p-6 bg-industrial-900 text-white border-none shadow-xl shadow-industrial-900/10">
              <div className="flex items-center gap-2 mb-3">
                <Coins className="w-4 h-4 text-safety-blue" />
                <span className="text-[10px] font-black uppercase tracking-wider text-industrial-400">Total Career Potential</span>
              </div>
              <h4 className="text-3xl font-black text-white leading-none mb-4">
                $3,310,667
              </h4>
              <p className="text-xs text-industrial-400 leading-relaxed font-medium">
                40-year cumulative estimate for {tradeData.name}s.
              </p>
           </div>
           
           <div className="card p-6 border-industrial-100 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100/50 rounded-lg">
                  <Briefcase className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-industrial-500">Market Demand</span>
              </div>
              <h4 className="text-2xl font-black text-industrial-900 mb-1">{tradeData.demand}</h4>
              <p className="text-xs text-industrial-500 font-medium leading-relaxed">Industrial growth projected at <span className="text-emerald-600 font-bold">{tradeData.growth}</span> through 2030.</p>
           </div>

           <div className="card p-6 border-industrial-100 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-rose-50 rounded-lg">
                  <Users className="w-5 h-5 text-rose-500" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-industrial-500">Wealth Gap Alert</span>
              </div>
              <p className="text-xs text-industrial-500 leading-relaxed font-medium">
                Baseline parity for this role: <span className="font-black text-rose-600">0%</span>. 
                Navigate systemic pay disparities with specialized tools.
              </p>
           </div>
        </div>

        {/* True Wealth Section */}
        <section className="space-y-8 pb-12">
          <div className="card p-8 bg-industrial-50 border-industrial-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Coins className="w-4 h-4 text-safety-blue" />
                  <span className="text-xs font-black text-safety-blue uppercase tracking-widest">ROI Analysis</span>
                </div>
                <h3 className="text-2xl font-black text-industrial-900">The "True Wealth" Comparison</h3>
                <p className="text-xs text-industrial-500 max-w-2xl mt-1 leading-relaxed">
                  Benchmarking the cumulative earnings of <span className="font-bold text-industrial-900">{tradeData.name}</span> training against a <span className="font-bold text-blue-600">{comparablePath.name}</span>.
                </p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-industrial-200 shadow-sm">
                <div className="text-[10px] font-black text-industrial-600 uppercase">
                   Crossover Year: <span className="text-safety-blue text-sm">{breakEvenYear ? breakEvenYear : 'N/A'}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-8">
              {/* Chart - Now much wider */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-6 mb-6 text-[10px] font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-1.5"><div className="w-8 h-2 bg-industrial-900 rounded-full" /> {tradeData.name} Wealth</div>
                  <div className="flex items-center gap-1.5"><div className="w-8 h-2 bg-blue-500 rounded-full" /> {comparablePath.name} Wealth</div>
                </div>

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
                        tickFormatter={(value) => `$${value/1000}k`} 
                      />
                      <Tooltip 
                        contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', maxWidth: 'none', whiteSpace: 'pre-wrap'}}
                        formatter={(value) => [`$${value.toLocaleString()}`, 'Net Worth']}
                      />
                      <Area type="monotone" dataKey="tradeCumulative" stroke="#1e293b" fill="#1e293b" fillOpacity={0.03} strokeWidth={4} />
                      <Area type="monotone" dataKey="degreeCumulative" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.03} strokeWidth={4} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Insights on Right */}
              <div className="w-full xl:w-80 flex flex-col gap-5">
                <div className="card p-6 bg-white border-industrial-100/60 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-rose-50 rounded-lg"><GraduationCap className="w-5 h-5 text-rose-600" /></div>
                    <h4 className="text-xs font-black text-industrial-900 uppercase">Hidden Cost</h4>
                  </div>
                  <p className="text-xs text-industrial-500 leading-relaxed font-medium">
                    Typical degree debt enters at <span className="font-black text-rose-600">${degreeDebt.toLocaleString()}</span>. Total lifetime cost inclusive of lost early wages exceeds <span className="font-black text-industrial-900">{comparablePath.avgCost}</span>.
                  </p>
                </div>

                <div className="card p-6 bg-white border-industrial-100/60 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-50 rounded-lg"><Zap className="w-5 h-5 text-emerald-600" /></div>
                    <h4 className="text-xs font-black text-industrial-900 uppercase">Early Start</h4>
                  </div>
                  <p className="text-xs text-industrial-500 leading-relaxed font-medium">
                    Trade students start earning 4 years sooner. This "Head Start" creates an immediate wealth gap that degree paths struggle to close.
                  </p>
                </div>

                <div 
                  onClick={() => setIsROIModalOpen(true)}
                  className="card p-6 mt-auto bg-industrial-900 text-white border-none flex flex-col justify-center gap-3 group cursor-pointer hover:bg-industrial-800 transition-all shadow-xl shadow-industrial-900/10"
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
      </div>

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
