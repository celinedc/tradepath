import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, MapPin, DollarSign, School, Info, ArrowRight, GraduationCap, Building2, Heart, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SCHOOLS, TRADE_CAREERS } from '../data/mockData';
import { useUser } from '../context/UserContext';

export default function SchoolSearchPage() {
  const [searchParams] = useSearchParams();
  const { profile, toggleStarSchool } = useUser();
  const getInitialTrade = () => {
    if (searchParams.get('trade')) return searchParams.get('trade');
    if (profile.selectedTrade === 'undecided') return 'all';
    return profile.selectedTrade || 'all';
  };
  const [selectedTrade, setSelectedTrade] = useState(getInitialTrade());
  const [priceRange, setPriceRange] = useState(50000);
  const [selectedState, setSelectedState] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showStarredOnly, setShowStarredOnly] = useState(false);

  useEffect(() => {
    const tradeParam = searchParams.get('trade');
    const stateParam = searchParams.get('state');
    const locationParam = searchParams.get('location');
    
    if (tradeParam) {
      setSelectedTrade(tradeParam);
    } else {
      setSelectedTrade(profile.selectedTrade === 'undecided' ? 'all' : (profile.selectedTrade || 'all'));
    }
    
    if (stateParam) setSelectedState(stateParam);
    if (locationParam) setSearchQuery(locationParam);
  }, [searchParams, profile.selectedTrade]);

  const statesList = [
    { label: 'Northeast', states: ['CT', 'DE', 'ME', 'MD', 'MA', 'NH', 'NJ', 'NY', 'PA', 'RI', 'VT'] },
    { label: 'South', states: ['AL', 'AR', 'FL', 'GA', 'KY', 'LA', 'MS', 'NC', 'OK', 'SC', 'TN', 'TX', 'VA', 'WV'] },
    { label: 'Midwest', states: ['IL', 'IN', 'IA', 'KS', 'MI', 'MN', 'MO', 'NE', 'ND', 'OH', 'SD', 'WI'] },
    { label: 'West', states: ['AK', 'AZ', 'CA', 'CO', 'HI', 'ID', 'MT', 'NV', 'NM', 'OR', 'UT', 'WA', 'WY'] }
  ];
  const types = ['All', 'Program', 'Apprenticeship', 'Other'];
  const statuses = ['All', 'Non-profit', 'Joint Labor-Management', 'Private/For-Profit'];

  const filteredSchools = useMemo(() => {
    return SCHOOLS.filter(school => {
      const matchTrade = selectedTrade === 'all' || school.trade === selectedTrade;
      const matchPrice = school.tuition <= priceRange;
      const matchState = selectedState === 'All' || school.state === selectedState;
      const matchType = selectedType === 'All' || school.type === selectedType;
      const matchStatus = selectedStatus === 'All' || school.status === selectedStatus;
      const matchSearch = school.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          school.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchStarred = !showStarredOnly || profile.starredSchools?.includes(school.id);
      
      return matchTrade && matchPrice && matchState && matchType && matchStatus && matchSearch && matchStarred;
    });
  }, [selectedTrade, priceRange, selectedState, selectedType, selectedStatus, searchQuery, showStarredOnly, profile.starredSchools]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Sidebar Filters */}
      <aside className="w-full lg:w-72 flex-shrink-0 space-y-6">
        <div className="card p-6 sticky top-8">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-safety-blue" />
            <h3 className="font-bold text-industrial-900 uppercase tracking-wider text-sm">School Filters</h3>
          </div>

          <div className="space-y-6">
            {/* Career Trade */}
            <div className="space-y-2">
              <label className="text-xs font-black text-industrial-500 uppercase">Career Trade</label>
              <select 
                value={selectedTrade}
                onChange={(e) => setSelectedTrade(e.target.value)}
                className="input-field py-2 text-sm bg-industrial-50 border-industrial-200"
              >
                <option value="all">All Trades</option>
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

            {/* Price Range */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-black text-industrial-500 uppercase">Max Tuition</label>
                <span className="text-xs font-bold text-safety-blue">${priceRange.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="50000" 
                step="1000"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full h-1.5 bg-industrial-200 rounded-lg appearance-none cursor-pointer accent-safety-blue"
              />
              <div className="flex justify-between text-[10px] text-industrial-400 font-bold uppercase">
                <span>$0</span>
                <span>$50k+</span>
              </div>
            </div>

            {/* State Filter */}
            <div className="space-y-2">
              <label className="text-xs font-black text-industrial-500 uppercase">Select State</label>
              <select 
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="input-field py-2 text-sm bg-industrial-50 border-industrial-200"
              >
                <option value="All">All 50 States</option>
                {statesList.map(region => (
                  <optgroup key={region.label} label={region.label}>
                    {region.states.map(st => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* School Type */}
            <div className="space-y-2">
              <label className="text-xs font-black text-industrial-500 uppercase">School Type</label>
              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="input-field py-2 text-sm bg-industrial-50 border-industrial-200"
              >
                {types.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            {/* Starred Filter */}
            <div className="pt-2">
              <button 
                onClick={() => setShowStarredOnly(!showStarredOnly)}
                className={`w-full py-2.5 rounded-xl border-2 text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                  showStarredOnly 
                    ? 'bg-amber-50 border-amber-200 text-amber-600 shadow-sm' 
                    : 'bg-white border-industrial-100 text-industrial-400 hover:border-industrial-300'
                }`}
              >
                <Star className={`w-3.5 h-3.5 ${showStarredOnly ? 'fill-current' : ''}`} />
                {showStarredOnly ? 'View All Schools' : 'Show Starred Only'}
              </button>
            </div>

            <button 
              onClick={() => {
                setSelectedTrade(profile.selectedTrade || 'all');
                setPriceRange(50000);
                setSelectedState('All');
                setSelectedType('All');
                setSelectedStatus('All');
                setSearchQuery('');
              }}
              className="w-full py-2 text-[10px] font-black uppercase tracking-widest text-industrial-400 hover:text-safety-blue transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 space-y-6">
        {/* Search Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="relative flex-1 w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-industrial-400" />
            <input 
              type="text" 
              placeholder="Search schools by name or city..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-10 py-3 bg-white shadow-sm"
            />
          </div>
          <div className="text-right">
            <p className="text-xs font-black text-industrial-400 uppercase tracking-widest">Results Found</p>
            <p className="text-2xl font-black text-industrial-900">{filteredSchools.length}</p>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredSchools.length > 0 ? (
              filteredSchools.map((school) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={school.id} 
                  className="card group hover:shadow-xl transition-all border-none overflow-hidden"
                >
                    <div className="h-48 overflow-hidden relative">
                      <img src={school.image} alt={school.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-industrial-900/90 backdrop-blur text-white text-[9px] font-black uppercase px-2 py-1 rounded">
                          {school.type}
                        </span>
                        <span className="bg-safety-blue/90 backdrop-blur text-white text-[9px] font-black uppercase px-2 py-1 rounded">
                          {school.duration}
                        </span>
                      </div>
                      
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleStarSchool(school.id);
                        }}
                        className={`absolute top-4 right-4 z-20 p-2.5 rounded-2xl backdrop-blur-md transition-all border ${
                          profile.starredSchools?.includes(school.id) 
                            ? 'bg-amber-400 text-white border-amber-300 shadow-lg scale-110 shadow-amber-500/30' 
                            : 'bg-white/90 text-industrial-400 border-white/50 hover:bg-white hover:text-amber-500 hover:scale-110'
                        }`}
                        title={profile.starredSchools?.includes(school.id) ? "Unstar Program" : "Star Program"}
                      >
                        <Star className={`w-4 h-4 ${profile.starredSchools?.includes(school.id) ? 'fill-current' : ''}`} />
                      </button>

                      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-lg shadow-lg">
                      <p className="text-[8px] font-black text-industrial-400 uppercase leading-none mb-0.5">Total Tuition</p>
                      <p className="text-sm font-black text-industrial-900">
                        {school.tuition === 0 ? 'COVERED / FREE' : `$${school.tuition.toLocaleString()}`}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-black text-industrial-900 text-lg group-hover:text-safety-blue transition-colors">{school.name}</h4>
                        <div className="flex items-center gap-1.5 text-industrial-500 text-xs mt-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{school.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <div className="p-3 bg-industrial-50 rounded-xl border border-industrial-100">
                        <div className="flex items-center gap-2 mb-1">
                          <Building2 className="w-3.5 h-3.5 text-industrial-400" />
                          <p className="text-[8px] font-black text-industrial-400 uppercase">Affiliation</p>
                        </div>
                        <p className="text-[10px] font-bold text-industrial-700">{school.status}</p>
                      </div>
                      <div className="p-3 bg-industrial-50 rounded-xl border border-industrial-100">
                        <div className="flex items-center gap-2 mb-1">
                          <GraduationCap className="w-3.5 h-3.5 text-industrial-400" />
                          <p className="text-[8px] font-black text-industrial-400 uppercase">Trade Focus</p>
                        </div>
                        <p className="text-[10px] font-bold text-industrial-700 uppercase">
                          {TRADE_CAREERS.find(t => t.id === school.trade)?.name || school.trade}
                        </p>
                      </div>
                    </div>

                    <button 
                      onClick={() => {
                        const url = school.url || `https://www.google.com/search?q=${encodeURIComponent(school.name)}`;
                        window.open(url, '_blank');
                      }}
                      className="w-full mt-6 py-3 bg-industrial-900 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-xl hover:bg-industrial-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-industrial-900/10"
                    >
                      View Program Details <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-industrial-100 rounded-full flex items-center justify-center mx-auto">
                  <School className="w-8 h-8 text-industrial-400" />
                </div>
                <h4 className="text-xl font-black text-industrial-900">No Schools Match Your Filter</h4>
                <p className="text-industrial-500 max-w-xs mx-auto text-sm">Try adjusting your price range or exploring different regions to find the best match for your career path.</p>
                <button 
                  onClick={() => {
                    setSelectedTrade('all');
                    setPriceRange(50000);
                  }}
                  className="text-safety-blue font-bold uppercase text-[10px] tracking-widest hover:underline"
                >
                  Clear Primary Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
