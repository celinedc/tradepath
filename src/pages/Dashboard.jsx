import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Users, DollarSign, CheckCircle2, ArrowRight, 
  GraduationCap, Calendar, Clock, BarChart3, Bell, UserPlus, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { TRADE_CAREERS, SCHOOLS } from '../data/mockData';
import { useUser } from '../context/UserContext';

const steps = [
  { id: 1, title: 'Career Discovery', path: '/discovery' },
  { id: 2, title: 'School Search', path: '/schools' },
  { id: 3, title: 'Apply', path: '#' },
  { id: 4, title: 'Accepted', path: '#' },
];

const DEADLINES = [
  { id: 1, title: 'FAFSA Priority Deadline', date: 'March 31, 2026', type: 'Finance' },
  { id: 2, title: 'Local IBEW Apprenticeship App', date: 'April 15, 2026', type: 'Career' },
  { id: 3, title: 'SkillPath Scholarship Due', date: 'May 1, 2026', type: 'Scholarship' },
];

export default function Dashboard() {
  const { profile, userType } = useUser();
  const [showSchedulePrompt, setShowSchedulePrompt] = React.useState(null);
  const [showScheduler, setShowScheduler] = React.useState(false);
  
  if (userType === 'counselor') {
    return <CounselorDashboard profile={profile} />;
  }
  
  return (
    <>
      <StudentDashboard 
        profile={profile} 
        onScheduleClick={(stepId) => setShowSchedulePrompt(stepId)} 
      />
      
      <AnimatePresence>
        {showSchedulePrompt && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white p-6 rounded-[2rem] shadow-2xl max-w-sm w-full text-center space-y-4"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-black text-indigo-950">Next Step: Counselor Sync</h3>
              <p className="text-indigo-500 text-sm font-medium leading-relaxed">
                To move forward with your {showSchedulePrompt === 3 ? "applications" : "acceptance"}, you'll need to review details with your guidance counselor.
              </p>
              <div className="space-y-2">
                <button 
                  onClick={() => {
                    setShowSchedulePrompt(null);
                    setShowScheduler(true);
                  }}
                  className="w-full py-4 bg-indigo-600 text-white rounded-xl font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg"
                >
                  Schedule an appointment
                </button>
                <button 
                  onClick={() => setShowSchedulePrompt(null)}
                  className="w-full py-3 text-indigo-400 font-bold hover:text-indigo-600 transition-all"
                >
                  Maybe later
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {showScheduler && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-indigo-950/60 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-white rounded-[2.5rem] shadow-2xl max-w-2xl w-full overflow-hidden"
            >
              <div className="p-8 border-b border-indigo-50 flex justify-between items-center bg-indigo-50/50">
                <div>
                  <h2 className="text-2xl font-black text-indigo-950">Schedule Meeting</h2>
                  <p className="text-indigo-500 font-bold text-xs uppercase tracking-widest mt-1">Select a time with Mrs. Guthrie</p>
                </div>
                <button onClick={() => setShowScheduler(false)} className="p-2 hover:bg-white rounded-xl transition-all">
                  <ArrowRight className="w-6 h-6 text-indigo-400 rotate-180" />
                </button>
              </div>
              
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="text-xs font-black uppercase tracking-widest text-indigo-900 border-b border-indigo-100 pb-2">Available Dates</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {[20, 21, 22, 23, 24, 25, 26, 27].map(day => (
                      <button key={day} className={`p-3 rounded-xl border-2 font-black transition-all ${day === 22 ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-indigo-50 text-indigo-900 hover:border-indigo-200'}`}>
                        {day}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="text-xs font-black uppercase tracking-widest text-indigo-900 border-b border-indigo-100 pb-2">Select Time</h4>
                  <div className="space-y-2">
                    {['9:00 AM', '10:30 AM', '1:00 PM', '2:45 PM'].map(time => (
                      <button key={time} className="w-full p-4 rounded-xl border border-indigo-50 bg-indigo-50/30 text-indigo-900 font-bold hover:bg-indigo-50 transition-all text-left flex justify-between items-center group">
                        {time}
                        <Clock className="w-4 h-4 text-indigo-300 group-hover:text-indigo-600" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-8 border-t border-indigo-50 bg-indigo-50/20 flex gap-4">
                <button 
                  onClick={() => {
                    alert('Appointment Requested! Mrs. Guthrie will confirm via email.');
                    setShowScheduler(false);
                  }}
                  className="flex-1 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl"
                >
                  Confirm Appointment
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function StudentDashboard({ profile, onScheduleClick }) {
  const hasCompletedDiscovery = !!profile.discoveryResults?.matches;
  const hasApplied = profile.searchSchoolsCompleted;
  
  const currentTrade = TRADE_CAREERS.find(t => t.id === profile.selectedTrade) || TRADE_CAREERS[0];
  const tradeName = hasCompletedDiscovery ? currentTrade.name : "High-Demand Trades";

  const progressWidth = hasApplied ? '66%' : (hasCompletedDiscovery ? '33%' : '0%');

  const dynamicSteps = steps.map(s => {
    // Current logic: Forward only progress. If further along, previous steps are complete.
    if (s.id === 1) {
      if (hasCompletedDiscovery || hasApplied) return { ...s, status: 'complete' };
      return { ...s, status: 'current' };
    }
    if (s.id === 2) {
      if (hasApplied) return { ...s, status: 'complete' };
      if (hasCompletedDiscovery) return { ...s, status: 'current' };
      return { ...s, status: 'upcoming' };
    }
    if (s.id === 3) {
      if (hasApplied) return { ...s, status: 'current' };
      return { ...s, status: 'upcoming' };
    }
    return { ...s, status: 'upcoming' };
  });

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero / Progress Section - Teen Friendly */}
      <section className="relative overflow-hidden p-5 rounded-[2.5rem] bg-indigo-600 text-white shadow-2xl shadow-indigo-500/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400 rounded-full blur-[100px] opacity-50 -mr-32 -mt-32" />
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-indigo-100" />
                </div>
                <h3 className="font-black uppercase tracking-widest text-[10px] text-indigo-100 italic">Your Level-Up Progress</h3>
              </div>
              <h2 className="text-4xl font-black tracking-tight">
                {currentTrade.name}
              </h2>
              <p className="text-indigo-200 text-sm font-medium">
                {currentTrade.id === 'undecided' 
                  ? "Explore top trades or complete discovery to find your perfect match."
                  : `Your roadmap to becoming a world-class ${currentTrade.name}.`}
              </p>
            </div>
            {!hasCompletedDiscovery && (
              <Link 
                to="/discovery" 
                className="group bg-white text-indigo-600 px-8 py-4 rounded-2xl font-black uppercase tracking-widest flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
              >
                Start Discovery <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
            {hasCompletedDiscovery && (
              <Link 
                to="/discovery" 
                className="bg-indigo-500/30 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-indigo-500/50 transition-all"
              >
                Review Recommendations
              </Link>
            )}
          </div>
          
          <div className="relative flex justify-between items-center max-w-4xl mx-auto py-4">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 rounded-full overflow-hidden">
               <motion.div 
                initial={{ width: 0 }}
                animate={{ width: progressWidth }}
                className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
               />
            </div>
            
            {dynamicSteps.map((step) => {
              const isSchedulingStep = step.id === 3 || step.id === 4;
              
              const StepContent = (
                <div className="relative z-10 flex flex-col items-center group cursor-pointer">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all transform group-hover:scale-110 ${
                    step.status === 'complete' 
                      ? 'bg-white border-white text-indigo-600 shadow-xl' 
                      : step.status === 'current'
                      ? 'bg-indigo-600 border-white text-white ring-8 ring-white/10'
                      : 'bg-indigo-700 border-indigo-500 text-indigo-300'
                  }`}>
                    {step.status === 'complete' ? <CheckCircle2 className="w-6 h-6" /> : <span className="text-lg font-black">{step.id}</span>}
                  </div>
                  <span className={`mt-3 text-[10px] font-black uppercase tracking-widest ${
                    step.status === 'complete' || step.status === 'current' ? 'text-white' : 'text-indigo-300'
                  }`}>
                    {step.title}
                  </span>
                </div>
              );

              if (isSchedulingStep) {
                return (
                  <div key={step.id} onClick={() => onScheduleClick(step.id)}>
                    {StepContent}
                  </div>
                );
              }

              return (
                <Link key={step.id} to={step.path}>
                  {StepContent}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <MetricCard 
          title="Starting Salary" 
          value={`$${currentTrade.base.toLocaleString()}`}
          subValue={currentTrade.id === 'undecided' ? "Trade Skill Average" : "+12% growth"}
          icon={<DollarSign className="w-6 h-6 text-indigo-500" />}
          trend="up"
          theme="indigo"
        />
        <MetricCard 
          title="Local Demand" 
          value={currentTrade.demand}
          subValue={currentTrade.id === 'undecided' ? "National Benchmark" : "450+ openings"}
          icon={<Users className="w-6 h-6 text-indigo-500" />}
          trend="up"
          theme="indigo"
        />
        <MetricCard 
          title="Field Growth" 
          value={currentTrade.growth}
          subValue={currentTrade.id === 'undecided' ? "Sector Trend" : "Future stable"}
          icon={<TrendingUp className="w-6 h-6 text-indigo-500" />}
          trend="up"
          theme="indigo"
        />
      </div>

      <section className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-black text-indigo-950 tracking-tight">
            {currentTrade.id === 'undecided' ? "Top-Rated Programs" : `Best Schools for ${currentTrade.name}s`}
          </h3>
          <Link to="/schools" className="text-indigo-600 font-black text-xs uppercase flex items-center gap-1 hover:underline tracking-widest bg-indigo-50 px-6 py-3 rounded-full transition-all hover:bg-indigo-100">
            Explore All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-1">
           {profile.starredSchools && profile.starredSchools.length > 0 ? (
             profile.starredSchools.slice(0, 4).map(schoolId => {
               const school = SCHOOLS.find(s => s.id === schoolId);
               if (!school) return null;
               return (
                 <SchoolPreview 
                   key={school.id}
                   schoolId={school.id}
                   name={school.name}
                   image={school.image}
                   tuition={school.tuition === 0 ? "FREE" : `$${school.tuition.toLocaleString()}`}
                   location={school.location}
                   url={school.url}
                 />
               );
             })
           ) : (
             <>
               {SCHOOLS.filter(s => s.trade === profile.selectedTrade).slice(0, 2).map(school => (
                 <SchoolPreview 
                    key={school.id}
                    schoolId={school.id}
                    name={school.name}
                    image={school.image}
                    tuition={school.tuition === 0 ? "FREE" : `$${school.tuition.toLocaleString()}`}
                    location={school.location}
                    url={school.url}
                  />
               ))}
               {/* Final fallback if no trade match */}
               {SCHOOLS.filter(s => s.trade === profile.selectedTrade).length === 0 && (
                 <>
                   <SchoolPreview 
                    schoolId={1}
                    name="Northwest Technical Institute"
                    image="/images/schools/electrician_training_lab_premium_1773773106054.png"
                    tuition="$8,500"
                    location="Springdale, AR"
                    url="https://www.nwti.edu/"
                  />
                  <SchoolPreview 
                    schoolId={2}
                    name="Apex Technical School"
                    image="/images/schools/hvac_lab_training_premium_1773773122562.png"
                    tuition="$12,000"
                    location="Long Island City, NY"
                    url="https://apexschool.com/"
                  />
                 </>
               )}
             </>
           )}
        </div>
      </section>
    </div>
  );
}

function CounselorDashboard({ profile }) {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Counselor Stats Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Assigned Students" 
          value="124"
          subValue="+8 from last month"
          icon={<Users className="w-6 h-6 text-safety-blue" />}
          trend="up"
        />
        <MetricCard 
          title="Aptitude Matches" 
          value="85%"
          subValue="Completion rate"
          icon={<BarChart3 className="w-6 h-6 text-emerald-500" />}
          trend="up"
        />
        <MetricCard 
          title="Career Commits" 
          value="42"
          subValue="Seniors with paths"
          icon={<CheckCircle2 className="w-6 h-6 text-indigo-500" />}
          trend="up"
        />
        <MetricCard 
          title="Avg. Starting Pay" 
          value="$58.5k"
          subValue="For tracked trades"
          icon={<DollarSign className="w-6 h-6 text-amber-500" />}
          trend="up"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Student Activity Feed */}
        <div className="xl:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-industrial-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-safety-blue" />
              Student Interest Distribution
            </h3>
            <button className="text-xs font-bold text-safety-blue hover:underline">Download Report</button>
          </div>
          <div className="card p-6 divide-y divide-industrial-100">
            <StudentStatRow trade="Electrician" count="28" growth="+15%" color="bg-amber-100 text-amber-700" />
            <StudentStatRow trade="HVAC Technician" count="22" growth="+5%" color="bg-blue-100 text-blue-700" />
            <StudentStatRow trade="Welder" count="18" growth="-2%" color="bg-orange-100 text-orange-700" />
            <StudentStatRow trade="Data Center Op" count="15" growth="+40%" color="bg-purple-100 text-purple-700" />
            <StudentStatRow trade="Healthcare (LPN)" count="12" growth="+10%" color="bg-rose-100 text-rose-700" />
          </div>
        </div>

        {/* Deadlines & Alerts */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-industrial-900 flex items-center gap-2">
            <Bell className="w-5 h-5 text-rose-500" />
            Priority Deadlines
          </h3>
          <div className="space-y-3">
            {DEADLINES.map(d => (
              <div key={d.id} className="card p-4 hover:border-rose-200 transition-colors group">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-rose-50 text-rose-600 border border-rose-100">
                    {d.type}
                  </span>
                  <Clock className="w-3.5 h-3.5 text-industrial-400 group-hover:text-rose-500 transition-colors" />
                </div>
                <h4 className="text-sm font-bold text-industrial-900">{d.title}</h4>
                <div className="flex items-center gap-2 mt-1 text-industrial-500 text-xs">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{d.date}</span>
                </div>
              </div>
            ))}
            <button className="w-full py-3 rounded-xl border border-dashed border-industrial-300 text-industrial-500 text-xs font-bold hover:border-industrial-400 hover:bg-industrial-50 transition-all flex items-center justify-center gap-2">
              <UserPlus className="w-4 h-4" />
              Bulk Notify Students
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StudentStatRow({ trade, count, growth, color }) {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <div className={`w-2 h-2 rounded-full ${color.split(' ')[0].replace('bg-', 'bg-')}`} />
        <div>
          <p className="text-sm font-bold text-industrial-900">{trade}</p>
          <p className="text-[10px] text-industrial-500 font-medium">Interest Level</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-black text-industrial-900">{count} Students</p>
        <p className={`text-[10px] font-bold ${growth.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>
          {growth} Trend
        </p>
      </div>
    </div>
  );
}

function SchoolPreview({ name, image, tuition, location, schoolId, url }) {
  const { profile, toggleStarSchool } = useUser();
  const isStarred = profile.starredSchools?.includes(schoolId);

  return (
    <div 
      onClick={() => {
        if (url) window.open(url, '_blank');
        else {
          const foundUrl = SCHOOLS.find(s => s.id === schoolId)?.url;
          if (foundUrl) window.open(foundUrl, '_blank');
        }
      }}
      className="card group cursor-pointer hover:shadow-xl transition-all border-none bg-white overflow-hidden rounded-[2rem]"
    >
      <div className="h-44 overflow-hidden relative">
         <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
         <div className="absolute top-4 left-4 bg-indigo-600/90 backdrop-blur px-3 py-1.5 rounded-xl text-xs font-black text-white shadow-lg">
           {tuition} Tuition
         </div>
         
         <button 
           onClick={(e) => {
             e.preventDefault();
             e.stopPropagation();
             if (schoolId) toggleStarSchool(schoolId);
           }}
           className={`absolute top-4 right-4 z-10 p-2 rounded-xl backdrop-blur-md transition-all ${
             isStarred 
               ? 'bg-amber-400 text-white shadow-lg shadow-amber-500/30 ring-2 ring-white/50' 
               : 'bg-white/80 text-indigo-400 hover:bg-white hover:text-amber-500'
           }`}
         >
           <Star className={`w-4 h-4 ${isStarred ? 'fill-current' : ''}`} />
         </button>
      </div>
      <div className="p-6">
        <h4 className="font-black text-lg text-indigo-950 tracking-tight">{name}</h4>
        <p className="text-indigo-500/80 text-sm font-medium mt-1">{location}</p>
        <div className="mt-4 flex items-center text-indigo-600 font-black text-[10px] uppercase tracking-widest gap-1 group-hover:gap-2 transition-all">
          Explore Program <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, subValue, icon, trend, theme = 'industrial' }) {
  const isIndigo = theme === 'indigo';
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className={`card p-6 border-none shadow-sm hover:shadow-md transition-all ${isIndigo ? 'bg-white rounded-[2rem]' : 'bg-white'}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-xl ${isIndigo ? 'bg-indigo-50' : 'bg-industrial-100'}`}>
          {icon}
        </div>
        <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-full ${
          trend === 'up' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
        }`}>
          {trend === 'up' ? 'Growth' : 'Steady'}
        </span>
      </div>
      <h4 className={`font-black uppercase tracking-wider text-[10px] ${isIndigo ? 'text-indigo-400' : 'text-industrial-500'}`}>{title}</h4>
      <div className="mt-1 flex items-baseline gap-2">
        <span className={`text-3xl font-black tracking-tight ${isIndigo ? 'text-indigo-950' : 'text-industrial-900'}`}>{value}</span>
      </div>
      <p className={`mt-1 text-xs font-medium ${isIndigo ? 'text-indigo-300' : 'text-industrial-400'}`}>{subValue}</p>
    </motion.div>
  );
}
