import React, { useState } from 'react';
import { 
  Brain, CheckCircle2, ArrowRight, Target, Sparkles, Lightbulb, ShieldCheck, Zap, 
  Wind, Wrench, Flame, Eye, Droplets, Microscope, Palette, TreeDeciduous, Hammer, Baby
} from 'lucide-react';
import { TRADE_CAREERS } from '../data/mockData';
import { useUser } from '../context/UserContext';
import { motion, AnimatePresence } from 'framer-motion';

const ICON_MAP = {
  Brain, CheckCircle2, ArrowRight, Target, Sparkles, Lightbulb, ShieldCheck, Zap,
  Wind, Wrench, Flame, Eye, Droplets, Microscope, Palette, TreeDeciduous, Hammer, Baby
};

import { Navigate } from 'react-router-dom';

export default function AptitudePage() {
  const { profile, userType } = useUser();
  const isCounselor = userType === 'counselor';
  
  if (userType === 'student') {
    return <Navigate to="/dashboard" replace />;
  }
  
  // Auto-scroll to analysis when trade changes for counselor
  useEffect(() => {
    if (isCounselor && selectedTradeId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedTradeId, isCounselor]);
  
  const currentTrade = TRADE_CAREERS.find(t => t.id === selectedTradeId) || TRADE_CAREERS[0];
  const filteredTrades = TRADE_CAREERS.filter(t => 
    t.name.toLowerCase().includes(filter.toLowerCase())
  );

  const currentCompetencies = currentTrade.competencies || [
    { title: "Spatial Reasoning", desc: "Understanding how objects fit and move in 3D space.", icon: 'Target', color: "text-blue-500" },
    { title: "Mechanical Logic", desc: "Diagnostic thinking and system logic.", icon: 'Brain', color: "text-purple-500" },
    { title: "Precision & Safety", desc: "Rigorous attention to detail and protocol adherence.", icon: 'ShieldCheck', color: "text-emerald-500" }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Skill Assessment Portion - Only for Students or if assessment is the main focus */}
      {!isCounselor && (
        <div className="card p-8 bg-industrial-900 border-none text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-safety-blue" />
              <span className="text-xs font-black uppercase tracking-widest text-safety-blue">Skill Assessment</span>
            </div>
            <h2 className="text-4xl font-black mb-4">Discover Your Trade Match</h2>
            <p className="text-industrial-400 text-lg leading-relaxed mb-8">
              Our aptitude test analyzes your spatial reasoning, mechanical comprehension, and physical coordination to find the trades where you'll excel most.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-safety-blue hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center gap-3 shadow-lg shadow-blue-500/20">
                Start Assessment <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                <Target className="w-5 h-5 text-emerald-400" />
                <div>
                  <p className="text-[10px] uppercase font-black text-industrial-500">Focusing On</p>
                  <p className="text-sm font-bold text-white">{currentTrade.name}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-[-10%] top-[-10%] opacity-10">
             <Brain size={400} />
          </div>
        </div>
      )}

      {/* Dynamic Core Competencies */}
      <section className="space-y-4">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-xl font-bold text-industrial-900 flex items-center gap-2" id="analysis-top">
              <Lightbulb className="w-5 h-5 text-safety-blue" />
              {isCounselor ? 'Competency Framework' : `Core Trade Competencies: ${currentTrade.name}`}
            </h3>
            <p className="text-industrial-500 text-sm mt-1">
              {isCounselor ? `Analyzing the critical aptitude profile for ${currentTrade.name}.` : 'Key skills specifically mapped to your selected career path.'}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {currentCompetencies.map((skill, i) => {
              const IconComponent = ICON_MAP[skill.icon] || Brain;
              return (
                <motion.div 
                  key={`${selectedTradeId}-${skill.title}`} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="card p-6 border-industrial-100 bg-white"
                >
                   <div className="bg-industrial-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-industrial-100">
                     <IconComponent className={`w-6 h-6 ${skill.color}`} />
                   </div>
                   <h4 className="font-extrabold text-industrial-900 mb-2">{skill.title}</h4>
                   <p className="text-sm text-industrial-500 leading-relaxed">{skill.desc}</p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* Career-Specific Aptitudes */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h3 className="text-xl font-bold text-industrial-900 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              Career-Specific Aptitudes
            </h3>
            <p className="text-industrial-500 text-sm">A summary of the mental and physical traits needed for each discipline. Click a trade to view its framework.</p>
          </div>
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Filter by trade..." 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="input-field py-2 px-4 bg-white text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(filter ? filteredTrades : [
            currentTrade,
            ...filteredTrades.filter(t => t.id !== currentTrade.id).slice(0, 11)
          ]).map((trade) => (
            <motion.div 
              key={trade.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setSelectedTradeId(trade.id)}
              className={`p-5 rounded-2xl border transition-[background-color,border-color,box-shadow,transform] cursor-pointer hover:shadow-lg ${
                trade.id === selectedTradeId 
                  ? 'bg-industrial-900 border-safety-blue ring-1 ring-safety-blue/50 text-white' 
                  : 'bg-white border-industrial-100 text-industrial-900'
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-black uppercase tracking-tight text-sm">{trade.name}</h4>
                {trade.id === selectedTradeId && (
                  <span className="bg-safety-blue text-[8px] font-black px-2 py-0.5 rounded-full uppercase">Selected</span>
                )}
              </div>
              <p className={`text-xs leading-relaxed ${trade.id === selectedTradeId ? 'text-industrial-300' : 'text-industrial-500'}`}>
                {trade.aptitude}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className={`text-[9px] font-bold px-2 py-1 rounded-md ${trade.id === selectedTradeId ? 'bg-white/10' : 'bg-industrial-50'}`}>
                  {trade.demand}
                </span>
                <span className={`text-[9px] font-bold px-2 py-1 rounded-md ${trade.id === selectedTradeId ? 'bg-white/10' : 'bg-industrial-50'}`}>
                  {trade.growth} Growth
                </span>
                <span className={`text-[9px] font-bold px-2 py-1 rounded-md opacity-60 ${trade.id === selectedTradeId ? 'bg-white/10' : 'bg-industrial-50'}`}>
                  {trade.sector}
                </span>
              </div>
            </motion.div>
          ))}
          {!filter && filteredTrades.length > 12 && (
            <div className="col-span-full text-center py-4">
              <p className="text-industrial-400 text-xs italic">Use the search to explore {filteredTrades.length - 12} other trades.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
