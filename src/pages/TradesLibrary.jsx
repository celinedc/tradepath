import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, BookOpen, Clock, DollarSign, 
  TrendingUp, ShieldCheck, CheckCircle2, ChevronRight, X,
  Building2, Ship, Plane, Cpu, Wrench, HardHat,
  Anchor, Stethoscope, Sparkles, Wind, Car, Leaf, Box, Star
} from 'lucide-react';
import { TRADE_CAREERS } from '../data/mockData';
import { useUser } from '../context/UserContext';

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
    return TRADE_CAREERS.filter(trade => {
      const matchesSearch = trade.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSector = selectedSector === 'all' || trade.sector === selectedSector;
      
      let matchesWord = true;
      if (selectedWord !== 'all') {
        const content = (trade.name + ' ' + (trade.aptitude || '') + ' ' + (trade.keywords?.join(' ') || '')).toLowerCase();
        matchesWord = content.includes(selectedWord.toLowerCase());
      }
      
      const matchesDemand = selectedDemand === 'all' || trade.demand === selectedDemand;

      return matchesSearch && matchesSector && matchesWord && matchesDemand;
    });
  }, [searchTerm, selectedSector, selectedWord, selectedDemand]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header>
        <h3 className="text-3xl font-black text-industrial-900 tracking-tight">Trade Careers Library</h3>
        <p className="text-industrial-500 font-medium italic">Explore the 200+ specialized career paths available in the trades.</p>
      </header>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-industrial-400" />
          <input 
            type="text" 
            placeholder="Search by career name..." 
            className="input-field pl-12 py-3 bg-white shadow-inner"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <select 
          className="input-field py-3 bg-white shadow-inner font-bold text-industrial-700 text-[11px] md:text-sm truncate"
          value={selectedSector}
          onChange={(e) => setSelectedSector(e.target.value)}
        >
          {sectors.map(s => (
            <option key={s} value={s}>{s === 'all' ? 'All Sectors' : s}</option>
          ))}
        </select>

        <select 
          className="input-field py-3 bg-white shadow-inner font-bold text-industrial-700 text-[11px] md:text-sm truncate"
          value={selectedDemand}
          onChange={(e) => setSelectedDemand(e.target.value)}
        >
          <option value="all">Market Demand</option>
          <option value="Critical">Critical ⚡</option>
          <option value="Very High">Very High ↑</option>
          <option value="High">High</option>
          <option value="Moderate">Moderate</option>
          <option value="Stable">Stable</option>
        </select>

        <select 
          className="input-field py-3 bg-white shadow-inner font-bold text-industrial-700 text-[11px] md:text-sm truncate"
          value={selectedWord}
          onChange={(e) => setSelectedWord(e.target.value)}
        >
          {INTEREST_KEYWORDS.map(w => (
            <option key={w.id} value={w.id}>{w.name}</option>
          ))}
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <AnimatePresence>
        {selectedTrade && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTrade(null)}
              className="absolute inset-0 bg-industrial-900/60 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={selectedTrade.id}
              className="bg-white rounded-[2.5rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl custom-scrollbar"
            >
              <button 
                onClick={() => setSelectedTrade(null)}
                className="absolute top-6 right-6 p-4 hover:bg-industrial-100 rounded-full transition-all z-[210] group"
                title="Close (Esc)"
              >
                <X className="w-8 h-8 text-industrial-400 group-hover:text-industrial-900" />
              </button>

              <div className="p-8 md:p-12 space-y-12">
                <header className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-safety-blue/10 text-safety-blue rounded-full border border-safety-blue/20">
                    <span className="text-[10px] font-black uppercase tracking-widest">{selectedTrade.sector}</span>
                  </div>
                  <h2 className="text-5xl font-black text-industrial-900 tracking-tight">{selectedTrade.name}</h2>
                  <p className="text-xl text-industrial-500 font-medium italic leading-relaxed">
                    {selectedTrade.aptitude}
                  </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-6 bg-industrial-50 rounded-2xl space-y-2">
                    <span className="text-[10px] font-black uppercase text-industrial-400 tracking-widest">Starting Salary</span>
                    <p className="text-3xl font-black text-industrial-900">${selectedTrade.base?.toLocaleString()}</p>
                  </div>
                  <div className="p-6 bg-industrial-50 rounded-2xl space-y-2">
                    <span className="text-[10px] font-black uppercase text-industrial-400 tracking-widest">Market Demand</span>
                    <p className="text-3xl font-black text-industrial-900">{selectedTrade.demand}</p>
                  </div>
                  <div className="p-6 bg-industrial-50 rounded-2xl space-y-2">
                    <span className="text-[10px] font-black uppercase text-industrial-400 tracking-widest">Job Growth</span>
                    <p className="text-3xl font-black text-industrial-900">{selectedTrade.growth}</p>
                  </div>
                </div>

                <div className="space-y-6">
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

                <div className="pt-8 border-t border-industrial-100 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="space-y-1 text-center md:text-left">
                    <p className="text-sm font-bold text-industrial-900 italic">Interested in this path?</p>
                    <p className="text-xs text-industrial-400 font-medium">Talk to your career counselor about local training programs.</p>
                  </div>
                  <button 
                    onClick={() => {
                        const state = (profile.location || '').split(',').pop()?.trim() || '';
                        navigate(`/schools?trade=${selectedTrade.id}&location=${encodeURIComponent(state)}`);
                    }}
                    className="w-full md:w-auto px-8 py-4 bg-safety-blue text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
                  >
                    Find Training Programs Near Me
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
