import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, BookOpen, Clock, DollarSign, 
  TrendingUp, ShieldCheck, CheckCircle2, ChevronRight, X,
  Building2, Ship, Plane, Cpu, Wrench, HardHat,
  Anchor, Stethoscope, Sparkles, Wind, Car, Leaf, Box, Star
} from 'lucide-react';
import { TRADE_CAREERS, DEMAND_DATA } from '../data/mockData';
import { useUser } from '../context/UserContext';
import { createPortal } from 'react-dom';

const INTEREST_KEYWORDS = [
  { id: 'all', name: 'All Interests' },
  { id: 'creativity', name: 'Creativity' },
  { id: 'precision', name: 'Precision' },
  { id: 'indoor', name: 'Indoor' },
  { id: 'outdoor', name: 'Outdoor' },
  { id: 'adventure', name: 'Adventure' },
  { id: 'helping', name: 'Helping Others' }
];

export default function TradesLibrary() {
  const navigate = useNavigate();
  const { profile, toggleStarTrade } = useUser();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedWord, setSelectedWord] = useState('all');
  const [selectedDemand, setSelectedDemand] = useState('all');
  const [selectedTrade, setSelectedTrade] = useState(null);

  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedTrade(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const sectors = useMemo(() => {
    const uniqueSectors = Array.from(new Set(TRADE_CAREERS.map(t => t.sector || 'Other'))).sort();
    return ['all', ...uniqueSectors];
  }, []);

  const filteredTrades = useMemo(() => {
    // Interest Buckets Logic mapping helper
    const getInterests = (trade) => {
      const interests = [];
      const content = (trade.name + ' ' + (trade.sector || '') + ' ' + (trade.aptitude || '')).toLowerCase();
      
      if (content.match(/chef|carpenter|cabinetmaker|designer|fabrication|creative|architect/)) interests.push('creativity');
      if (content.match(/precision|technical|logic|wiring|welder|machinist|cnc|operator|electrician|aerospace|engineer/)) interests.push('precision');
      if (content.match(/healthcare|medical|nurse|paramedic|dental|hospitality|service|people|client|teaching|helping/)) interests.push('helping');
      if (content.match(/aviation|marine|adventure|diver|travel|flight|transport|engine|high-stakes/)) interests.push('adventure');
      
      // Sector Based rules
      if (trade.sector === 'Healthcare & Medical' || trade.sector === 'Service') interests.push('indoor');
      if (trade.sector === 'Construction' || trade.sector === 'Environment' || trade.name.toLowerCase().includes('driver')) interests.push('outdoor');
      if (['Industrial & Manufacturing', 'Energy & Utilities', 'Aviation & Aerospace'].includes(trade.sector)) interests.push('indoor');

      return interests;
    };

    const userStateData = DEMAND_DATA.find(d => d.id === profile.schoolState);
    const topTradeInState = userStateData?.topTrade;

    return TRADE_CAREERS
      .filter(trade => {
        if (trade.id === 'undecided') return false;
        
        const matchesSearch = trade.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSector = selectedSector === 'all' || trade.sector === selectedSector;
        const matchesDemand = selectedDemand === 'all' || trade.demand === selectedDemand;
        
        let matchesInterest = true;
        if (selectedWord !== 'all') {
          matchesInterest = getInterests(trade).includes(selectedWord);
        }

        return matchesSearch && matchesSector && matchesInterest && matchesDemand;
      })
      .sort((a, b) => {
        // 1. Starred always first
        const aStarred = profile.starredTrades?.includes(a.id);
        const bStarred = profile.starredTrades?.includes(b.id);
        if (aStarred && !bStarred) return -1;
        if (!aStarred && bStarred) return 1;

        // 2. State-specific Top Trade high priority
        const aIsTopInState = a.name === topTradeInState || a.id === topTradeInState;
        const bIsTopInState = b.name === topTradeInState || b.id === topTradeInState;
        if (aIsTopInState && !bIsTopInState) return -1;
        if (!aIsTopInState && bIsTopInState) return 1;

        // 3. Demand Order
        const demandOrder = { 'Critical': 5, 'Very High': 4, 'High': 3, 'Moderate': 2, 'Stable': 1 };
        const aDemand = demandOrder[a.demand] || 0;
        const bDemand = demandOrder[b.demand] || 0;
        if (aDemand !== bDemand) return bDemand - aDemand;

        return a.name.localeCompare(b.name);
      });
  }, [searchTerm, selectedSector, selectedWord, selectedDemand, profile.starredTrades, profile.schoolState]);

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header>
        <h3 className="text-3xl font-black text-industrial-900 tracking-tight">Trade Careers Library</h3>
        <p className="text-industrial-500 font-medium italic">Explore the 200+ specialized career paths available in the trades.</p>
      </header>

      {/* Filters Area */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-industrial-400" />
          <input 
            type="text" 
            placeholder="Search by career name..." 
            className="input-field pl-16 py-5 bg-white shadow-xl border-none rounded-[2rem] text-lg font-bold placeholder:text-industrial-300 transition-all focus:ring-4 focus:ring-safety-blue/10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select 
            className="input-field py-4 bg-white shadow-sm border-none rounded-2xl font-black uppercase tracking-widest text-[10px] text-industrial-900 appearance-none px-6 cursor-pointer hover:bg-industrial-50 transition-colors"
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value)}
          >
            {sectors.map(s => (
              <option key={s} value={s}>{s === 'all' ? 'All Sectors' : s}</option>
            ))}
          </select>

          <select 
            className="input-field py-4 bg-white shadow-sm border-none rounded-2xl font-black uppercase tracking-widest text-[10px] text-industrial-900 appearance-none px-6 cursor-pointer hover:bg-industrial-50 transition-colors"
            value={selectedDemand}
            onChange={(e) => setSelectedDemand(e.target.value)}
          >
            <option value="all">Any Market Demand</option>
            <option value="Critical">Critical ⚡</option>
            <option value="Very High">Very High ↑</option>
            <option value="High">High</option>
            <option value="Moderate">Moderate</option>
            <option value="Stable">Stable</option>
          </select>

          <select 
            className="input-field py-4 bg-white shadow-sm border-none rounded-2xl font-black uppercase tracking-widest text-[10px] text-industrial-900 appearance-none px-6 cursor-pointer hover:bg-industrial-50 transition-colors"
            value={selectedWord}
            onChange={(e) => setSelectedWord(e.target.value)}
          >
            {INTEREST_KEYWORDS.map(w => (
              <option key={w.id} value={w.id}>{w.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTrades.map(trade => (
          <motion.div
            layout
            key={trade.id}
            onClick={() => setSelectedTrade(trade)}
            className="group cursor-pointer"
          >
            <div className="card p-6 bg-white hover:border-safety-blue transition-all group-hover:shadow-xl group-hover:-translate-y-1 rounded-2xl border-2 border-industrial-100 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-industrial-50 rounded-lg text-industrial-400 group-hover:bg-safety-blue group-hover:text-white transition-colors">
                  <Wrench className="w-5 h-5" />
                </div>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleStarTrade(trade.id);
                  }}
                  className={`absolute top-4 right-4 z-10 p-2 rounded-xl transition-all ${
                    profile.starredTrades?.includes(trade.id)
                      ? 'bg-amber-400 text-white shadow-lg' 
                      : 'bg-industrial-50 text-industrial-300 hover:text-amber-500 hover:bg-white'
                  }`}
                >
                  <Star className={`w-4 h-4 ${profile.starredTrades?.includes(trade.id) ? 'fill-current' : ''}`} />
                </button>

                <span className="text-[10px] font-black uppercase tracking-widest text-industrial-400 bg-industrial-50 px-2 py-1 rounded-full mr-10">
                  {trade.sector}
                </span>
              </div>
              
              <h4 className="text-xl font-black text-industrial-900 group-hover:text-safety-blue transition-colors mb-2">
                {trade.name}
              </h4>
              
              <p className="text-xs text-industrial-500 font-medium italic line-clamp-3 mb-6 flex-1">
                {trade.aptitude || "Requires specialized technical training and practical problem-solving skills in high-demand environments."}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-industrial-50">
                <div className="flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-industrial-400" />
                  <span className="text-sm font-black text-industrial-900">${trade.base?.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    {trade.demand} Demand
                  </span>
                  <ChevronRight className="w-4 h-4 text-industrial-300 group-hover:translate-x-1 group-hover:text-safety-blue transition-all" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {filteredTrades.length === 0 && (
          <div className="col-span-full py-24 text-center">
            <div className="p-8 bg-industrial-50 rounded-full inline-block mb-4">
              <Search className="w-12 h-12 text-industrial-200" />
            </div>
            <h4 className="text-xl font-black text-industrial-900">No matching careers found</h4>
            <p className="text-industrial-400">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
      {/* Detail Modal */}
      {createPortal(
        <AnimatePresence>
          {selectedTrade && (
            <div key="trade-modal-portal" className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8">
              <motion.div 
                key="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedTrade(null)}
                className="absolute inset-0 bg-industrial-950/80 backdrop-blur-md"
              />
              
              <motion.div
                key="modal-content"
                layoutId={selectedTrade.id}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-white rounded-[2.5rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] custom-scrollbar z-[1001]"
              >
                <button 
                  onClick={() => setSelectedTrade(null)}
                  className="absolute top-6 right-6 p-4 hover:bg-industrial-100 rounded-full transition-all z-[1010] group"
                  title="Close (Esc)"
                >
                  <X className="w-8 h-8 text-industrial-400 group-hover:text-industrial-900" />
                </button>

                <div className="p-5 md:p-8 space-y-6">
                  <header className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-safety-blue/10 text-safety-blue rounded-full border border-safety-blue/20">
                      <span className="text-[10px] font-black uppercase tracking-widest">{selectedTrade.sector}</span>
                    </div>
                    <h2 className="text-5xl font-black text-industrial-900 tracking-tight">{selectedTrade.name}</h2>
                    <p className="text-xl text-industrial-500 font-medium italic leading-relaxed">
                      {selectedTrade.aptitude}
                    </p>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-industrial-50 rounded-2xl space-y-1">
                      <span className="text-[10px] font-black uppercase text-industrial-400 tracking-widest">Starting Salary</span>
                      <p className="text-3xl font-black text-industrial-900">${selectedTrade.base?.toLocaleString()}</p>
                    </div>
                    <div className="p-4 bg-industrial-50 rounded-2xl space-y-1">
                      <span className="text-[10px] font-black uppercase text-industrial-400 tracking-widest">Market Demand</span>
                      <p className="text-3xl font-black text-industrial-900">{selectedTrade.demand}</p>
                    </div>
                    <div className="p-4 bg-industrial-50 rounded-2xl space-y-1">
                      <span className="text-[10px] font-black uppercase text-industrial-400 tracking-widest">Job Growth</span>
                      <p className="text-3xl font-black text-industrial-900">{selectedTrade.growth}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h5 className="text-sm font-black uppercase tracking-widest text-industrial-900 border-l-4 border-safety-blue pl-4">Core Competencies</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedTrade.competencies?.map((comp, i) => (
                        <div key={i} className="p-4 border border-industrial-100 rounded-xl space-y-2">
                          <div className={`p-2 rounded-lg w-fit ${comp.color || 'bg-industrial-100 text-industrial-400'}`}>
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <h6 className="font-black text-industrial-900">{comp.title}</h6>
                          <p className="text-xs text-industrial-500 font-medium leading-relaxed">{comp.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-industrial-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="space-y-1 text-center md:text-left">
                      <p className="text-sm font-bold text-industrial-900 italic">Interested in this path?</p>
                      <p className="text-xs text-industrial-400 font-medium">Talk to your career counselor about local training programs.</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                      <button 
                        onClick={() => {
                            const tradeName = encodeURIComponent(selectedTrade.name);
                            window.open(`https://www.apprenticeship.gov/apprenticeship-job-finder?occupation=${tradeName}`, '_blank');
                        }}
                        className="w-full md:w-auto px-8 py-4 bg-white text-industrial-900 border-2 border-industrial-900 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-industrial-50 transition-all shadow-lg"
                      >
                        Search Apprenticeships.gov
                      </button>
                      <button 
                        onClick={() => {
                            const { schoolState } = profile;
                            const tradeId = selectedTrade.id === 'undecided' ? 'all' : selectedTrade.id;
                            navigate(`/schools?trade=${tradeId}&state=${schoolState || ''}`);
                        }}
                        className="w-full md:w-auto px-8 py-4 bg-safety-blue text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
                      >
                        Find Training Programs Near Me
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
