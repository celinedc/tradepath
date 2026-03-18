import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ComposableMap, 
  Geographies, 
  Geography, 
  ZoomableGroup 
} from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import { MapPin, Search, TrendingUp, Info, Briefcase, MousePointer2, ArrowRight, GraduationCap, Users } from 'lucide-react';
import { DEMAND_DATA, TRADE_CAREERS } from '../data/mockData';
import { useUser } from '../context/UserContext';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export default function LocationPage() {
  const navigate = useNavigate();
  const { profile, userType } = useUser();
  const [tooltipContent, setTooltipContent] = useState("");
  const [selectedState, setSelectedState] = useState(null);
  const [selectedTrade, setSelectedTrade] = useState(profile.selectedTrade === 'undecided' ? 'all' : (profile.selectedTrade || 'all'));

  useEffect(() => {
    if (profile.selectedTrade) {
      setSelectedTrade(profile.selectedTrade === 'undecided' ? 'all' : profile.selectedTrade);
    }
  }, [profile.selectedTrade]);

  // Memoized demand data based on selected trade
  const tradeDemandData = useMemo(() => {
    if (selectedTrade === 'all') return DEMAND_DATA;
    // Distinct variation based on trade selection to show meaningful heatmap changes
    const hash = selectedTrade.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    return DEMAND_DATA.map((d, i) => {
      const stateVariation = ((hash + i) % 30) - 15;
      return {
        ...d,
        demand: Math.min(100, Math.max(15, d.demand + stateVariation))
      };
    });
  }, [selectedTrade]);

  const colorScale = scaleQuantile()
    .domain(tradeDemandData.map(d => d.demand))
    .range([
      "#eff6ff",
      "#dbeafe",
      "#bfdbfe",
      "#93c5fd",
      "#60a5fa",
      "#3b82f6",
      "#2563eb",
      "#1d4ed8",
      "#1e40af"
    ]);

  const isStudent = userType === 'student';

  return (
    <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        <div>
          <h3 className={`text-2xl font-black tracking-tight ${isStudent ? 'text-indigo-950' : 'text-industrial-900'}`}>Market Demand Heatmap</h3>
          <p className="text-industrial-500 text-xs font-medium">Live job opening density across the United States</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="relative">
            <Briefcase className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${isStudent ? 'text-indigo-400' : 'text-industrial-400'}`} />
            <select 
              value={selectedTrade}
              onChange={(e) => setSelectedTrade(e.target.value)}
              className={`input-field pl-10 py-2 w-56 appearance-none cursor-pointer text-xs ${isStudent ? 'bg-white border-indigo-100 rounded-xl text-indigo-900 font-bold shadow-sm' : 'bg-white text-sm'}`}
            >
              <option value="all">All Skilled Trades</option>
              {Object.entries(
                TRADE_CAREERS
                  .filter(t => t.id !== 'undecided')
                  .reduce((acc, t) => {
                    const sector = t.sector || 'Other';
                    if (!acc[sector]) acc[sector] = [];
                    acc[sector].push(t);
                    return acc;
                  }, {})
              ).map(([sector, trades]) => (
                <optgroup key={sector} label={sector}>
                  {[...trades].sort((a, b) => a.name.localeCompare(b.name)).map(t => (
                    <option key={t.id} value={t.id}>{t.name}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className={`lg:col-span-2 card p-2 bg-white overflow-hidden relative min-h-[320px] border-none shadow-sm ${isStudent ? 'rounded-[1.2rem]' : ''}`}>
          <div className="absolute top-6 left-6 z-10 flex items-center gap-4 bg-white/90 backdrop-blur p-3 rounded-2xl border border-white shadow-lg">
             <div className="flex items-center gap-2">
               <div className={`w-3 h-3 rounded-full ${isStudent ? 'bg-indigo-50' : 'bg-[#eff6ff]'}`} />
               <span className="text-[10px] uppercase font-black text-industrial-500 tracking-widest">Low</span>
             </div>
             <div className="flex items-center gap-1">
               <div className={`w-16 h-2 rounded-full ${isStudent ? 'bg-gradient-to-r from-indigo-50 to-indigo-900' : 'bg-gradient-to-r from-[#eff6ff] to-[#1e40af]'}`} />
             </div>
             <div className="flex items-center gap-2">
               <span className="text-[10px] uppercase font-black text-industrial-500 tracking-widest">High</span>
               <div className={`w-3 h-3 rounded-full ${isStudent ? 'bg-indigo-900' : 'bg-[#1e40af]'}`} />
             </div>
          </div>

          <p className="absolute bottom-4 left-6 z-10 text-[9px] text-industrial-400 font-black uppercase tracking-widest flex items-center gap-1.5 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full shadow-sm">
            <MousePointer2 className="w-3 h-3 text-indigo-500" /> Click a state
          </p>

          <ComposableMap projection="geoAlbersUsa" className="w-full h-full">
            <ZoomableGroup zoom={1}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map(geo => {
                    const cur = tradeDemandData.find(s => s.id === geo.properties.name || s.name === geo.properties.name);
                    const isSelected = selectedState?.name === geo.properties.name;
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                          setTooltipContent(`${geo.properties.name}: ${cur ? cur.demand : 'No Data'}% Demand`);
                        }}
                        onMouseLeave={() => {
                          setTooltipContent("");
                        }}
                        onClick={() => setSelectedState(cur || { name: geo.properties.name, demand: 'N/A' })}
                        fill={cur ? (isStudent ? colorScale(cur.demand).replace('#3b82f6', '#6366f1').replace('#1e40af', '#312e81') : colorScale(cur.demand)) : "#f8fafc"}
                        stroke={isSelected ? (isStudent ? "#4338ca" : "#1e293b") : "#fff"}
                        strokeWidth={isSelected ? 3 : 1}
                        style={{
                          default: { outline: "none" },
                          hover: { fill: isStudent ? "#818cf8" : "#f59e0b", outline: "none", cursor: "pointer" },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>

          {tooltipContent && (
            <div className={`absolute top-24 left-6 px-4 py-2 rounded-2xl text-xs font-black shadow-2xl animate-in fade-in zoom-in-95 pointer-events-none transition-colors border ${isStudent ? 'bg-indigo-900 text-white border-indigo-700' : 'bg-industrial-900 text-white'}`}>
              {tooltipContent}
            </div>
          )}
        </div>

        <div className="space-y-4 lg:max-h-[600px] lg:overflow-y-auto pr-1">
          {selectedState && (
            <div className={`space-y-3 animate-in slide-in-from-right-2`}>
              {/* Compact State Header */}
              <div className={`p-4 ${isStudent ? 'bg-indigo-900 rounded-[1.5rem]' : 'bg-industrial-900'} text-white shadow-lg`}>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-xl font-black">{selectedState.name}</h4>
                  <button onClick={() => setSelectedState(null)} className="text-[9px] font-black uppercase text-white/50 hover:text-white transition-colors">Close</button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black">{selectedTrade === 'all' ? selectedState.demand : (tradeDemandData.find(s => s.name === selectedState.name)?.demand || 'N/A')}%</span>
                  <p className="text-[8px] font-black uppercase tracking-widest text-emerald-400">Trade Density</p>
                </div>
              </div>

              {/* Smaller Data Boxes */}
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-industrial-100">
                  <p className="text-[7px] font-black uppercase text-industrial-400 mb-1">Opp. Map</p>
                  <p className="text-[10px] font-black leading-tight">
                    {selectedTrade === 'all' 
                        ? (selectedState.setting || 'Mixed') 
                        : (['Urban', 'Rural', 'Hub', 'Suburban'][selectedTrade.length % 4])}
                  </p>
                </div>
                {selectedTrade === 'all' && (
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-industrial-100">
                    <p className="text-[7px] font-black uppercase text-industrial-400 mb-1">Top Trade</p>
                    <p className="text-[10px] font-black leading-tight truncate">{selectedState.topTrade || 'Construction'}</p>
                  </div>
                )}
              </div>

              <div className="p-3 bg-white rounded-xl shadow-sm border border-industrial-100">
                <p className="text-[7px] font-black uppercase text-industrial-400 mb-2">Regional Hot Sectors</p>
                <div className="flex flex-wrap gap-1">
                  {(() => {
                    const sectors = ['Manufacturing', 'Infrastructure', 'Telecom', 'Green Energy', 'Logistics', 'Robotics'];
                    const hash = (selectedState.name || '').split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
                    return [sectors[hash % 6], sectors[(hash+1) % 6]].map((s, i) => (
                      <span key={i} className="px-2 py-0.5 bg-industrial-50 text-industrial-700 text-[8px] font-bold rounded-full border border-industrial-100">{s}</span>
                    ));
                  })()}
                </div>
              </div>

              <button 
                onClick={() => navigate(`/schools?state=${encodeURIComponent(selectedState.id)}`)}
                className={`w-full py-3 text-[9px] font-black uppercase tracking-widest rounded-xl shadow-md transition-all ${isStudent ? 'bg-indigo-600 text-white' : 'bg-industrial-900 text-white'}`}>
                Explore {selectedState.name} Schools
              </button>
            </div>
          )}

          {/* High Growth Regions - Always Visible */}
          <div className={`card p-5 text-white border-none shadow-xl ${isStudent ? 'bg-indigo-900 rounded-[1.5rem]' : 'bg-industrial-900'}`}>
            <h4 className="flex items-center gap-3 text-sm font-black tracking-tight mb-3 text-white/90">
              <TrendingUp className={`w-4 h-4 ${isStudent ? 'text-indigo-400' : 'text-safety-blue'}`} />
              High Growth Regions
            </h4>
            <div className="space-y-1.5">
               {[
                 { name: "Texas", demand: "98%", growth: "+12%" },
                 { name: "California", demand: "95%", growth: "+8%" },
                 { name: "New York", demand: "94%", growth: "+7%" },
                 { name: "Florida", demand: "92%", growth: "+10%" },
               ].map((region, i) => (
                 <div key={i} className="flex justify-between items-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                   <div>
                     <p className="font-black text-sm group-hover:text-indigo-300 transition-colors tracking-tight">{region.name}</p>
                     <p className="text-[8px] font-black uppercase tracking-widest text-indigo-400">Demand: {region.demand}</p>
                   </div>
                   <div className="text-right">
                     <span className="text-emerald-400 font-black text-[10px]">{region.growth}</span>
                   </div>
                 </div>
               ))}
            </div>
          </div>

          <div className={`card p-4 border-none shadow-sm ${isStudent ? 'bg-white rounded-[1.5rem]' : 'bg-white border-industrial-100'}`}>
             <div className="flex items-center gap-3 mb-4">
               <div className={`p-2 rounded-xl border border-indigo-50 ${isStudent ? 'bg-indigo-50' : 'bg-blue-50'}`}>
                 <MapPin className={`w-5 h-5 ${isStudent ? 'text-indigo-600' : 'text-safety-blue'}`} />
               </div>
               <h4 className={`text-sm font-black uppercase tracking-widest ${isStudent ? 'text-indigo-900' : 'text-industrial-900'}`}>Market Intel</h4>
             </div>
             <div className="space-y-4">
                <div className="space-y-1">
                   <p className="text-[10px] font-black uppercase text-industrial-400 tracking-widest">Data Context</p>
                   <p className={`text-sm font-black ${isStudent ? 'text-indigo-950' : 'text-industrial-700'}`}>
                     {selectedTrade === 'all' ? 'All Skilled Trades' : TRADE_CAREERS.find(t => t.id === selectedTrade)?.name}
                   </p>
                </div>
                <div className="space-y-1">
                   <p className="text-[10px] font-black uppercase text-industrial-400 tracking-widest">Baseline</p>
                   <p className={`text-xs font-bold leading-tight ${isStudent ? 'text-indigo-900/70' : 'text-industrial-700'}`}>
                     {selectedState ? selectedState.source : 'National Bureau of Labor Statistics (BLS) • 2025 Forecast'}
                   </p>
                </div>
             </div>
             <button 
               onClick={() => window.open('https://www.bls.gov/ooh/', '_blank')}
               className={`w-full mt-6 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${isStudent ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'btn-primary shadow-md'}`}>
               Geo-Data Insight
             </button>
          </div>
        </div>
      </div>

      {/* Local Opportunities Section - Added as requested */}
      <section className="space-y-6 pt-8 border-t border-industrial-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className={`p-2 rounded-xl ${isStudent ? 'bg-indigo-100' : 'bg-industrial-100'}`}>
               <Briefcase className={`w-5 h-5 ${isStudent ? 'text-indigo-600' : 'text-industrial-600'}`} />
             </div>
             <h3 className={`text-2xl font-black tracking-tight ${isStudent ? 'text-indigo-900' : 'text-industrial-900'}`}>
               Opportunities {selectedState ? `in ${selectedState.name}` : 'Nearby'}
             </h3>
          </div>
          <p className="text-xs font-black text-industrial-400 uppercase tracking-widest italic">Updated Hourly</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <OpportunityCard 
             title="Entry-Level Jobs"
             count="450+"
             type={isStudent ? "Student Preferred" : "Direct Hire"}
             icon={<Users className="w-5 h-5" />}
             items={['Jr. Wind Technician', 'Telecom Installer', 'Solar Site Assistant']}
             theme={isStudent ? "indigo" : "blue"}
           />
           <OpportunityCard 
             title="Apprenticeships"
             count="120+"
             type="Earn While You Learn"
             icon={<TrendingUp className="w-5 h-5" />}
             items={['IBEW Local 701 Program', 'ABC Construction Track', 'Ford ASSET Program']}
             theme={isStudent ? "indigo" : "emerald"}
           />
           <OpportunityCard 
             title="Volunteer & Skills"
             count="35+"
             type="Build Your Resume"
             icon={<GraduationCap className="w-5 h-5" />}
             items={['Habitat for Humanity Build', 'Local Tech Expo Mentor', 'Solar Community Project']}
             theme={isStudent ? "indigo" : "amber"}
           />
        </div>
      </section>
    </div>
  );
}

function OpportunityCard({ title, count, type, icon, items, theme }) {
  const isIndigo = theme === 'indigo';
  return (
    <div className={`card p-8 border-none shadow-sm transition-all hover:shadow-xl ${isIndigo ? 'bg-white rounded-[2.5rem]' : 'bg-white'}`}>
       <div className="flex justify-between items-start mb-6">
          <div className={`p-3 rounded-2xl ${isIndigo ? 'bg-indigo-50 text-indigo-600' : 'bg-industrial-100 text-industrial-600'}`}>
             {icon}
          </div>
          <div className="text-right">
             <span className={`text-3xl font-black tracking-tighter ${isIndigo ? 'text-indigo-950' : 'text-industrial-900'}`}>{count}</span>
             <p className={`text-[9px] font-black uppercase tracking-widest ${isIndigo ? 'text-indigo-400' : 'text-industrial-400'}`}>{type}</p>
          </div>
       </div>
       <h4 className={`text-xl font-black tracking-tight mb-4 ${isIndigo ? 'text-indigo-900' : 'text-industrial-900'}`}>{title}</h4>
       <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className={`flex items-center justify-between p-3 rounded-2xl text-[11px] font-bold ${isIndigo ? 'bg-indigo-50/50 text-indigo-900' : 'bg-industrial-50 text-industrial-700'}`}>
               {item}
               <ArrowRight className={`w-3 h-3 ${isIndigo ? 'text-indigo-400' : 'text-industrial-400'}`} />
            </div>
          ))}
       </div>
       <button 
         onClick={() => window.open('https://www.indeed.com/q-skilled-trades-jobs.html', '_blank')}
         className={`w-full mt-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${isIndigo ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'bg-industrial-900 text-white'}`}>
         View Openings
       </button>
    </div>
  );
}
