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

  // Theoretical API Integration: CareerOneStop
  useEffect(() => {
    if (useRegionalPay && selectedTrade) {
      // Simulate calling CareerOneStop whenever city/trade toggled
      fetchCareerWages(selectedTrade, profile.schoolCity || '72201')
        .then(data => setCurrentWageData(data));
    }
  }, [useRegionalPay, selectedTrade, profile.schoolCity]);

  const regionMultiplier = useMemo(() => {
    if (!useRegionalPay) return 1;
    
    // If custom state is selected, it takes precedence for manual "what-if" analysis
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

    // Leverage CareerOneStop if data available
    if (currentWageData) {
        return getLocalizedMultiplier(currentWageData);
    }
    
    // Default state check from profile
    const state = profile.schoolState || 'AR';
    const highCostStates = ['CA', 'NY', 'MA', 'WA', 'NJ', 'CT', 'HI', 'AK'];
    const midCostStates = ['TX', 'FL', 'IL', 'GA', 'PA', 'OH', 'CO', 'AZ', 'NC', 'VA', 'MD'];
    const lowerCostStates = ['AR', 'MS', 'WV', 'AL', 'KY', 'OK', 'SC', 'TN', 'IN', 'KS', 'IA'];
    
    if (highCostStates.includes(state)) return 1.25;
    if (midCostStates.includes(state)) return 1.1;
    if (lowerCostStates.includes(state)) return 0.92;
    return 1;
  }, [useRegionalPay, profile.schoolCity, profile.schoolState, selectedCustomState, currentWageData]);

  const processedChartData = tradeData.payGrowth.map(point => {
    const baseline = point[selectedEthnicity];
    return {
      ...point,
      baseline,
      regionalShift: Math.round(baseline * regionMultiplier),
      genderGap: Math.round(baseline * 0.92)
    };
  });

  // Comparison Logic (20-year projection)
  const comparisonData = useMemo(() => {
    const data = [];
    
    // Trade Params
    const tradeStartSalary = tradeData.base;
    const tradeCost = 30000;
    const tradeDebt = 10000;
    const tradeGrowth = 0.035;

    // 4-Year Degree Params (Dynamic from comparableJob with robust fallback)
    const comparableJob = tradeData.comparableJob || {
      name: 'Degree Path',
      startingSalary: 58000,
      avgCost: '$120,000'
    };
    const degreeStartSalary = comparableJob.startingSalary;
    const degreeCostStr = comparableJob.avgCost;
    const degreeCost = parseInt(degreeCostStr.replace(/[^0-9]/g, '')) || 120000;
    const degreeDebt = Math.round(degreeCost * 0.35); // Estimated debt ratio
    const degreeGrowth = 0.04;

    let tradeCumulative = -tradeDebt;
    let degreeCumulative = -degreeDebt;
    let breakEvenYear = null;
    for (let year = 1; year <= 40; year++) {
      // Trade Path Calculation
      const tradeSalary = tradeStartSalary * Math.pow(1 + tradeGrowth, year - 1);
      tradeCumulative += tradeSalary;

      // Degree Path Calculation
      let degreeSalary = 0;
      if (year > 4) {
        degreeSalary = degreeStartSalary * Math.pow(1 + degreeGrowth, year - 5);
        degreeCumulative += degreeSalary;
      } else {
        // High cost of living/fees during school
        degreeCumulative -= 5000; 
      }

      if (breakEvenYear === null && degreeCumulative > tradeCumulative) {
        breakEvenYear = year;
      }

      data.push({
        year,
        tradeSalary: Math.round(tradeSalary),
        degreeSalary: Math.round(degreeSalary),
        tradeCumulative: Math.round(tradeCumulative),
        degreeCumulative: Math.round(degreeCumulative),
      });
    }
    return { data, breakEvenYear };
  }, [tradeData]);

  const { data: comparisonDataResults, breakEvenYear } = comparisonData;

  const isStudent = userType === 'student';

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* ROI Path Modal */}
      <ROIPathModal 
        isOpen={isROIModalOpen} 
        onClose={() => setIsROIModalOpen(false)} 
        tradeData={tradeData}
        ethnicity={selectedEthnicity}
        comparisonData={comparisonDataResults}
      />

      {/* Sidebar Filters - Back on Left */}
      <aside className="w-full lg:w-72 flex-shrink-0 space-y-6 lg:sticky lg:top-8 self-start">
        <div className={`card p-6 border-none shadow-sm ${isStudent ? 'bg-white rounded-[2rem]' : 'bg-white'}`}>
          <div className="flex items-center gap-2 mb-6">
            <Filter className={`w-5 h-5 ${isStudent ? 'text-indigo-600' : 'text-safety-blue'}`} />
            <h3 className={`font-black uppercase tracking-widest text-xs ${isStudent ? 'text-indigo-900' : 'text-industrial-900'}`}>Filters</h3>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-industrial-400 uppercase tracking-widest">Career Path</label>
              <select 
                value={selectedTrade}
                onChange={(e) => setSelectedTrade(e.target.value)}
                className={`input-field py-2.5 text-sm appearance-none cursor-pointer ${isStudent ? 'bg-indigo-50/50 border-indigo-100 rounded-2xl text-indigo-900 font-bold' : 'bg-industrial-50 border-industrial-200'}`}
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

            {userType === 'counselor' && (
              <div className="space-y-2">
                 <div className="flex items-center justify-between">
                   <label className="text-[10px] font-black text-industrial-400 uppercase tracking-widest text-industrial-500 uppercase">Demographic filter</label>
                   <button 
                    onClick={() => setShowAllEthnicities(!showAllEthnicities)}
                    className="text-[10px] font-bold text-safety-blue hover:underline"
                   >
                     {showAllEthnicities ? 'Switch to Single' : 'Compare All'}
                   </button>
                 </div>
                 {!showAllEthnicities && (
                   <div className="grid grid-cols-1 gap-1">
                     {ETHNICITIES.map(e => (
                       <button
                         key={e.id}
                         onClick={() => setSelectedEthnicity(e.id)}
                         className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all ${
                           selectedEthnicity === e.id 
                             ? 'bg-industrial-900 text-white shadow-md' 
                             : 'text-industrial-600 hover:bg-industrial-100'
                         }`}
                       >
                         {e.name}
                       </button>
                     ))}
                   </div>
                 )}
              </div>
            )}

            <div className="pt-4 border-t border-industrial-100">
               <div className="flex items-center justify-between mb-2">
                 <span className="text-sm font-bold text-industrial-700">Gender Insights</span>
                 <button 
                  onClick={() => setShowGenderGap(!showGenderGap)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${showGenderGap ? 'bg-safety-blue' : 'bg-industrial-200'}`}
                 >
                   <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${showGenderGap ? 'translate-x-6' : 'translate-x-1'}`} />
                 </button>
               </div>
               <p className="text-[10px] text-industrial-400 leading-tight">
                 View potential wage gaps to better navigate career negotiations.
               </p>
            </div>

            <div className="pt-4 border-t border-industrial-100">
               <div className="flex items-center justify-between mb-2">
                 <div className="flex flex-col">
                   <span className="text-sm font-bold text-industrial-700">Regional Pay Boost</span>
                   <span className="text-[9px] font-black text-safety-blue uppercase">
                     {selectedCustomState ? `Override: ${selectedCustomState}` : (profile.schoolCity && profile.schoolState ? `${profile.schoolCity}, ${profile.schoolState}` : 'Profile Location')}
                   </span>
                 </div>
                 <button 
                  onClick={() => setUseRegionalPay(!useRegionalPay)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${useRegionalPay ? 'bg-emerald-500' : 'bg-industrial-200'}`}
                 >
                   <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${useRegionalPay ? 'translate-x-6' : 'translate-x-1'}`} />
                 </button>
               </div>

                 <div className="mt-3 space-y-2">
                   <label className="text-[9px] font-black text-industrial-400 uppercase tracking-widest">Override State</label>
                   <select 
                     value={selectedCustomState}
                     onChange={(e) => { setSelectedCustomState(e.target.value); if (e.target.value) setUseRegionalPay(true); }}
                     className={`w-full py-1.5 px-2 text-xs border rounded-lg ${isStudent ? 'bg-indigo-50/50 border-indigo-100' : 'bg-industrial-50 border-industrial-100'}`}
                   >
                     <option value="">Current Profile Location</option>
                     <optgroup label="Northeast">
                       <option value="CT">Connecticut</option>
                       <option value="DE">Delaware</option>
                       <option value="ME">Maine</option>
                       <option value="MD">Maryland</option>
                       <option value="MA">Massachusetts</option>
                       <option value="NH">New Hampshire</option>
                       <option value="NJ">New Jersey</option>
                       <option value="NY">New York</option>
                       <option value="PA">Pennsylvania</option>
                       <option value="RI">Rhode Island</option>
                       <option value="VT">Vermont</option>
                     </optgroup>
                     <optgroup label="South">
                       <option value="AL">Alabama</option>
                       <option value="AR">Arkansas</option>
                       <option value="FL">Florida</option>
                       <option value="GA">Georgia</option>
                       <option value="KY">Kentucky</option>
                       <option value="LA">Louisiana</option>
                       <option value="MS">Mississippi</option>
                       <option value="NC">North Carolina</option>
                       <option value="OK">Oklahoma</option>
                       <option value="SC">South Carolina</option>
                       <option value="TN">Tennessee</option>
                       <option value="TX">Texas</option>
                       <option value="VA">Virginia</option>
                       <option value="WV">West Virginia</option>
                     </optgroup>
                     <optgroup label="Midwest">
                       <option value="IL">Illinois</option>
                       <option value="IN">Indiana</option>
                       <option value="IA">Iowa</option>
                       <option value="KS">Kansas</option>
                       <option value="MI">Michigan</option>
                       <option value="MN">Minnesota</option>
                       <option value="MO">Missouri</option>
                       <option value="NE">Nebraska</option>
                       <option value="ND">North Dakota</option>
                       <option value="OH">Ohio</option>
                       <option value="SD">South Dakota</option>
                       <option value="WI">Wisconsin</option>
                     </optgroup>
                     <optgroup label="West">
                       <option value="AK">Alaska</option>
                       <option value="AZ">Arizona</option>
                       <option value="CA">California</option>
                       <option value="CO">Colorado</option>
                       <option value="HI">Hawaii</option>
                       <option value="ID">Idaho</option>
                       <option value="MT">Montana</option>
                       <option value="NV">Nevada</option>
                       <option value="NM">New Mexico</option>
                       <option value="OR">Oregon</option>
                       <option value="UT">Utah</option>
                       <option value="WA">Washington</option>
                       <option value="WY">Wyoming</option>
                     </optgroup>
                   </select>
                 </div>
               
               <p className="text-[10px] text-industrial-400 leading-tight mt-2">
                 Adjust earnings for specific state cost of living and local demand.
               </p>
            </div>

            <div className="pt-4 border-t border-industrial-100 italic">
               <p className="text-[10px] text-industrial-400 leading-tight">
                 * Projections are based on historical industry growth and adjusted for inflation.
               </p>
            </div>
          </div>
        </div>

        <div className="card p-6 bg-blue-50 border-blue-100">
           <div className="flex gap-3">
             <Info className="w-5 h-5 text-safety-blue flex-shrink-0" />
             <p className="text-xs text-blue-800 leading-relaxed">
               <strong>Financial Fact:</strong> Skilled trades often offer "paid-to-learn" apprenticeships, meaning zero student debt and immediate income.
             </p>
           </div>
        </div>

      </aside>

      {/* Main Analysis Content */}
      <div className="flex-1 space-y-8">
        {/* Charts Section */}
        <section className="card p-8 bg-white shadow-xl border-none">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-safety-blue" />
                <span className="text-xs font-black text-safety-blue uppercase tracking-widest">40-Year Career Projection</span>
              </div>
              <h3 className="text-3xl font-black text-industrial-900 tracking-tight">{tradeData.name} Earnings</h3>
              <p className="text-industrial-500">How your salary compounds over a full career path (5-year intervals)</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 bg-industrial-900 rounded-full" /> Baseline Potential
              </div>
              {useRegionalPay && (
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full" /> Regional Shift
                </div>
              )}
              {showGenderGap && (
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-rose-400 rounded-full" /> Gender Insight
                </div>
              )}
            </div>
          </div>

          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={processedChartData}>
                <defs>
                  {ETHNICITIES.map(e => (
                    <linearGradient key={e.id} id={`color${e.id}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={e.color} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={e.color} stopOpacity={0}/>
                    </linearGradient>
                  ))}
                  <linearGradient id="colorMain" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1e293b" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#1e293b" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorGender" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fb7185" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#fb7185" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorRegional" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="year" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 12}} 
                  dy={10}
                  label={{ value: 'Years in Career', position: 'insideBottom', offset: -5, fontSize: 10, fill: '#64748b' }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 12}} 
                  tickFormatter={(value) => `$${value/1000}k`} 
                />
                <Tooltip 
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Annual Salary']}
                  labelFormatter={(label) => `Year ${label}`}
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
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
                   <Area 
                    type="monotone" 
                    dataKey="regionalShift" 
                    stroke="#10b981" 
                    strokeWidth={3} 
                    fillOpacity={1} 
                    fill="url(#colorRegional)" 
                    animationDuration={1500} 
                  />
                )}
                {showGenderGap && (
                   <Area 
                    type="monotone" 
                    dataKey="genderGap" 
                    stroke="#fb7185" 
                    strokeWidth={2} 
                    strokeDasharray="5 5"
                    fillOpacity={1} 
                    fill="url(#colorGender)" 
                    animationDuration={1500} 
                  />
                )}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="card p-5 bg-industrial-900 text-white border-none min-h-[140px] flex flex-col justify-center">
             <div className="flex items-center gap-2 mb-2">
               <Coins className="w-3 h-3 text-safety-blue" />
               <p className="text-[10px] font-black uppercase tracking-wider text-industrial-400">Total Career Potential</p>
             </div>
             <h4 className="text-2xl font-black text-white leading-none mb-3">
               ${Math.round(tradeData.payGrowth.reduce((acc, curr) => acc + curr[selectedEthnicity], 0) * 5 / 1.5).toLocaleString()}
             </h4>
             <p className="text-[10px] text-industrial-400 leading-snug">
               40-year cumulative estimate for {ETHNICITIES.find(e => e.id === selectedEthnicity)?.name} {tradeData.name}s.
             </p>
           </div>
           
           <div className="card p-6 border-industrial-100 bg-white">
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-emerald-100 rounded-lg">
                 <Briefcase className="w-5 h-5 text-emerald-600" />
               </div>
               <span className="text-[10px] font-black uppercase tracking-widest text-industrial-500">Market Demand</span>
             </div>
             <div className="flex items-center gap-2">
                <h4 className="text-xl font-black text-industrial-900">{tradeData.demand}</h4>
                <div className="text-[8px] font-black text-industrial-400 leading-tight border-l border-industrial-200 pl-2 uppercase text-industrial-400">
                  Source: BLS / O*NET 2025
                </div>
              </div>
             <p className="text-xs text-industrial-500 mt-2 font-medium">Industrial growth projected at <span className="text-emerald-600 font-bold">{tradeData.growth}</span> through 2030.</p>
           </div>

           <div className="card p-6 border-industrial-100 bg-white">
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-rose-50 rounded-lg">
                 <Users className="w-5 h-5 text-rose-500" />
               </div>
               <span className="text-[10px] font-black uppercase tracking-widest text-industrial-500">Wealth Gap Alert</span>
             </div>
             <p className="text-[10px] text-industrial-500 leading-relaxed font-medium">
               Baseline disparity for this role: <span className="font-black text-rose-600">
                 {Math.round((1 - (tradeData.payGrowth[0][selectedEthnicity] / tradeData.payGrowth[0].white)) * 100)}%
               </span>. 
               Navigate systemic pay disparities with our specialized negotiation tools.
             </p>
             <button className="mt-3 text-[10px] font-bold text-safety-blue uppercase tracking-widest hover:underline text-left">
               Negotiation Guide
             </button>
           </div>
        </div>

        {/* Path Comparison Section */}
        <section className="space-y-8 pb-12">
          <div className="card p-8 bg-industrial-50 border-industrial-200">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Coins className="w-4 h-4 text-safety-blue" />
                    <span className="text-xs font-black text-safety-blue uppercase tracking-widest">ROI Analysis</span>
                  </div>
                  <h3 className="text-2xl font-black text-industrial-900">The "True Wealth" Comparison</h3>
                  <p className="text-xs text-industrial-500 max-w-xl mt-1">
                    Comparing cumulative earnings of <span className="font-bold">{tradeData.name}</span> vs. a <span className="font-bold text-blue-600">{(tradeData.comparableJob?.name) || '4-Year Degree'}</span>.
                  </p>
                </div>
                
                <div className="p-3 bg-white rounded-lg border border-industrial-200">
                  <div className="flex items-center gap-2 text-[10px] font-black text-industrial-600 uppercase">
                     Crossover: <span className="text-safety-blue">{breakEvenYear ? 'Year ' + breakEvenYear : 'N/A'}</span>
                  </div>
                </div>
              </div>

            <div className="flex flex-col xl:flex-row gap-10">
              {/* Left: Chart */}
              <div className="flex-1">
                <div className="flex items-center gap-6 mb-4 text-[10px] font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-1.5">
                    <div className="w-8 h-2 bg-industrial-900 rounded-full" /> {tradeData.name} (Cumulative)
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-8 h-2 bg-blue-500 rounded-full" /> {(tradeData.comparableJob?.name) || 'Degree Path'} (Cumulative)
                  </div>
                </div>

                <div className="h-[500px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={comparisonDataResults}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis 
                        dataKey="year" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: '#94a3b8', fontSize: 11}} 
                        label={{ value: 'Years Since High School', position: 'insideBottom', offset: -5, fontSize: 10, fill: '#64748b' }}
                      />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: '#94a3b8', fontSize: 11}} 
                        tickFormatter={(value) => `$${value/1000}k`} 
                      />
                      <Tooltip 
                        contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                        formatter={(value, name) => [
                          `$${value.toLocaleString()}`, 
                          name.includes('trade') ? `${tradeData.name} Cumulative` : `${(tradeData.comparableJob?.name) || 'Degree'} Cumulative`
                        ]}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="tradeCumulative" 
                        stroke="#1e293b" 
                        strokeWidth={3} 
                        fill="#1e293b" 
                        fillOpacity={0.05} 
                        name="tradeCumulative"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="degreeCumulative" 
                        stroke="#3b82f6" 
                        strokeWidth={3} 
                        fill="#3b82f6" 
                        fillOpacity={0.05} 
                        name="degreeCumulative"
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Right: Insight Cards */}
              <div className="w-full xl:w-80 space-y-4">
                <div className="card p-6 bg-white border-industrial-200 hover:shadow-md transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-rose-50 rounded-lg group-hover:bg-rose-100 transition-colors">
                      <GraduationCap className="w-5 h-5 text-rose-600" />
                    </div>
                    <h4 className="text-sm font-black text-industrial-900 uppercase">Hidden Cost of Debt</h4>
                  </div>
                  <p className="text-xs text-industrial-500 leading-relaxed">
                    Average Bachelor's graduates start <span className="font-bold text-rose-600">-$35,000</span> in the hole. Total cost of education including lost income (opportunity cost) exceeds <span className="font-bold text-industrial-900">$250k</span>.
                  </p>
                </div>

                <div className="card p-6 bg-white border-industrial-200 hover:shadow-md transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors">
                      <Zap className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h4 className="text-sm font-black text-industrial-900 uppercase">Early Entry Benefit</h4>
                  </div>
                  <p className="text-xs text-industrial-500 leading-relaxed">
                    Trade students enter the workforce at least <span className="font-bold text-emerald-600">4 years earlier</span>. This "Head Start" leads to compounding gains and early home ownership potential.
                  </p>
                </div>

                <div 
                  onClick={() => setIsROIModalOpen(true)}
                  className="card p-5 bg-industrial-900 text-white border-none flex items-center justify-between group cursor-pointer hover:bg-industrial-800 transition-all shadow-xl shadow-industrial-900/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-500/20 rounded-lg">
                      <Target className="w-5 h-5 text-indigo-400" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-widest">Your Path ROI</span>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ROIPathModal({ isOpen, onClose, tradeData, ethnicity, comparisonData }) {
  if (!isOpen) return null;

  const totalTradeWealth = comparisonData[comparisonData.length - 1].tradeCumulative;
  const totalDegreeWealth = comparisonData[comparisonData.length - 1].degreeCumulative;
  const wealthDifference = totalTradeWealth - totalDegreeWealth;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-indigo-950/40 backdrop-blur-md"
      />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative bg-white rounded-[3rem] w-full max-w-2xl overflow-hidden shadow-2xl border border-white/20"
      >
        <div className="bg-indigo-600 p-10 text-white relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400 rounded-full blur-[80px] opacity-30 -mr-20 -mt-20" />
          <button onClick={onClose} className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
          <div className="relative z-10 space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-300" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-200">Personalized Financial Forecast</span>
            </div>
            <h2 className="text-4xl font-black tracking-tight leading-tight">Your {tradeData.name} ROI Path</h2>
          </div>
        </div>

        <div className="p-10 space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase text-industrial-400 tracking-widest leading-none">40-Year Trade Wealth</p>
              <p className="text-4xl font-black text-indigo-900">${totalTradeWealth.toLocaleString()}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase text-industrial-400 tracking-widest leading-none">Net Wealth Advantage</p>
              <p className={`text-4xl font-black ${wealthDifference > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
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
                    desc="While degree students enter the workforce, you've already earned ~$220k+ in cumulative income."
                    icon={<TrendingUp className="w-4 h-4 text-indigo-500" />}
                />
                <Milestone 
                    year="Year 10" 
                    title="Mastery Plateau" 
                    desc="Your specialized experience puts you in the top 15% of earners locally."
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
    </div>
  );
}

function Milestone({ year, title, desc, icon }) {
    return (
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
}
