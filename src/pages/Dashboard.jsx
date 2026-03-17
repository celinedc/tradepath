import React from 'react';
import { motion } from 'framer-motion';
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
  
  if (userType === 'counselor') {
    return <CounselorDashboard profile={profile} />;
  }
  
  return <StudentDashboard profile={profile} />;
}

function StudentDashboard({ profile }) {
  const hasCompletedDiscovery = !!profile.discoveryResults?.matches;
  const currentTrade = TRADE_CAREERS.find(t => t.id === profile.selectedTrade) || TRADE_CAREERS[0];
  const tradeName = hasCompletedDiscovery ? currentTrade.name : "High-Demand Trades";

  const dynamicSteps = steps.map(s => {
    if (s.id === 1) return { ...s, status: hasCompletedDiscovery ? 'complete' : 'current' };
    if (s.id === 2) return { ...s, status: hasCompletedDiscovery ? 'current' : 'upcoming' };
    return { ...s, status: 'upcoming' };
  });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero / Progress Section - Teen Friendly */}
      <section className="relative overflow-hidden p-8 rounded-[2.5rem] bg-indigo-600 text-white shadow-2xl shadow-indigo-500/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400 rounded-full blur-[100px] opacity-50 -mr-32 -mt-32" />
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-indigo-100" />
                </div>
                <h3 className="font-black uppercase tracking-widest text-[10px] text-indigo-100 italic">Your Level-Up Progress</h3>
              </div>
              <h2 className="text-4xl font-black tracking-tight">
                {hasCompletedDiscovery ? tradeName : "Discovery Awaits"}
              </h2>
              <p className="text-indigo-200 text-sm font-medium">
                {hasCompletedDiscovery 
                  ? "Your skills match this high-growth trade perfectly." 
                  : "Complete your Career Discovery to unlock personalized recommendations."}
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
                animate={{ width: hasCompletedDiscovery ? '33%' : '0%' }}
                className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
               />
            </div>
            
            {dynamicSteps.map((step) => (
              <Link key={step.id} to={step.path} className="relative z-10 flex flex-col items-center group">
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard 
          title="Starting Salary" 
          value={hasCompletedDiscovery ? `$${currentTrade.base.toLocaleString()}` : "$55k+"}
          subValue="+12% growth"
          icon={<DollarSign className="w-6 h-6 text-indigo-500" />}
          trend="up"
          theme="indigo"
        />
        <MetricCard 
          title="Local Demand" 
          value={hasCompletedDiscovery ? currentTrade.demand : "Critical"}
          subValue="450+ openings"
          icon={<Users className="w-6 h-6 text-indigo-500" />}
          trend="up"
          theme="indigo"
        />
        <MetricCard 
          title="Field Growth" 
          value={hasCompletedDiscovery ? currentTrade.growth : "High"}
          subValue="Future stable"
          icon={<TrendingUp className="w-6 h-6 text-indigo-500" />}
          trend="up"
          theme="indigo"
        />
      </div>

      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-black text-indigo-950 tracking-tight">
            {hasCompletedDiscovery ? `Best Schools for ${currentTrade.name}s` : "Recommended Programs"}
          </h3>
          <Link to="/schools" className="text-indigo-600 font-black text-xs uppercase flex items-center gap-1 hover:underline tracking-widest bg-indigo-50 px-6 py-3 rounded-full transition-all hover:bg-indigo-100">
            Explore All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
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
                  />
               ))}
               {/* Final fallback if no trade match */}
               {SCHOOLS.filter(s => s.trade === profile.selectedTrade).length === 0 && (
                 <>
                   <SchoolPreview 
                    name="Northwest Technical Institute"
                    image="/images/schools/electrician_training_lab_premium_1773773106054.png"
                    tuition="$8,500"
                    location="Springdale, AR"
                  />
                  <SchoolPreview 
                    name="Apex Technical School"
                    image="/images/schools/hvac_lab_training_premium_1773773122562.png"
                    tuition="$12,000"
                    location="Long Island City, NY"
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

function SchoolPreview({ name, image, tuition, location, schoolId }) {
  const { profile, toggleStarSchool } = useUser();
  const isStarred = profile.starredSchools?.includes(schoolId);

  return (
    <div className="card group cursor-pointer hover:shadow-xl transition-all border-none bg-white overflow-hidden rounded-[2rem]">
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
