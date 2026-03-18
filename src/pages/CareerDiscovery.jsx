import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ArrowLeft, ChevronRight, GraduationCap, MapPin, 
  BookOpen, Heart, User, CheckCircle2, Info, Clock, DollarSign, 
  TrendingUp, ShieldCheck, HelpCircle, Briefcase, Zap, Globe, Target, Coins, Scale
} from 'lucide-react';
import { INTAKE_QUESTIONS, RECOMMENDATIONS, TRAINING_MODELS } from '../data/aptitudeData';
import { useUser } from '../context/UserContext';
import { SkillsMatcher } from '../services/SkillsMatcher';
import { RagMatcher } from '../services/RagMatcher';

const MultiStepIntake = ({ onComplete, initialData, studentName }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(initialData || {
    name: studentName,
    education: '',
    gender: '',
    location: '',
    favoriteSubject: '',
    extracurriculars: '',
    workEnvironment: '',
    strengths: ''
  });

  const handleNext = () => {
    if (step < INTAKE_QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      onComplete(formData);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const currentQ = INTAKE_QUESTIONS[step];

  return (
    <div className="max-w-2xl mx-auto py-6 px-6">
      <div className="mb-6">
        <div className="flex justify-between mb-4">
          {INTAKE_QUESTIONS.map((_, i) => (
            <div 
              key={i}
              className={`h-2 flex-1 rounded-full mx-1 transition-all duration-500 ${
                i <= step ? 'bg-safety-blue shadow-[0_0_10px_rgba(30,64,175,0.3)]' : 'bg-industrial-100'
              }`}
            />
          ))}
        </div>
        <p className="text-[10px] font-black uppercase tracking-widest text-industrial-400">Step {step + 1} of {INTAKE_QUESTIONS.length}</p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-4"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-industrial-900 leading-tight">
              {currentQ.question}
            </h2>
          </div>

          <div className="space-y-3">
            {currentQ.options ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQ.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                        setFormData({...formData, [currentQ.id]: opt});
                        setTimeout(handleNext, 300);
                    }}
                    className={`p-4 text-left rounded-xl border-2 transition-all font-bold ${
                      formData[currentQ.id] === opt 
                        ? 'border-safety-blue bg-blue-50 text-safety-blue shadow-lg' 
                        : 'border-industrial-100 hover:border-industrial-300 text-industrial-600'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder={currentQ.placeholder}
                  value={formData[currentQ.id] || ''}
                  onChange={(e) => setFormData({...formData, [currentQ.id]: e.target.value})}
                  className="w-full p-4 rounded-xl border-2 border-industrial-100 focus:border-safety-blue outline-none text-lg font-bold transition-all bg-white"
                  onKeyPress={(e) => e.key === 'Enter' && handleNext()}
                />
                <button 
                  onClick={handleNext}
                  disabled={!formData[currentQ.id]}
                  className="w-full py-4 bg-industrial-900 text-white rounded-xl font-black uppercase tracking-widest hover:bg-industrial-800 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                >
                  Continue <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            {step > 0 && (
              <button 
                onClick={handleBack}
                className="text-sm font-bold text-industrial-400 hover:text-industrial-900 transition-all flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Previous
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const MatchingView = ({ studentName }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="max-w-xl mx-auto py-12 px-6 text-center space-y-6"
  >
    <div className="relative w-24 h-24 mx-auto">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border-4 border-industrial-100 border-t-safety-blue rounded-full"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Target className="w-10 h-10 text-safety-blue animate-pulse" />
      </div>
    </div>
    <div className="space-y-4">
      <h2 className="text-3xl font-black text-industrial-900 uppercase tracking-tighter">Matching your skills...</h2>
      <div className="flex flex-col gap-2 max-w-xs mx-auto">
        <div className="h-1 bg-industrial-100 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2 }}
            className="h-full bg-safety-blue"
          />
        </div>
        <p className="text-[10px] font-black uppercase text-industrial-400 tracking-widest animate-pulse">
          Analyzing trades across {studentName}'s profile
        </p>
      </div>
    </div>
  </motion.div>
);

const CareerCard = ({ job, studentName, gender, onClick, isStarred, onStarToggle }) => {
    const genderKey = gender?.toLowerCase() === 'female' ? 'female' : 'male';
    
    // Map job.id to the generated image filenames
    const imageMap = {
        'electrician-comm': 'electrician',
        'hvac-industrial': 'hvac',
        'datacenter-op': 'datacenter',
        'welder-pipe': 'welder',
        'aircraft-mech': 'aircraft',
        'heavy-op': 'heavyop',
        'solar-tech': 'solar',
        'carpenter-finish': 'carpenter',
        'auto-specialist': 'evmechanic',
        'marine-mech': 'aircraft',
        'wind-tech': 'solar',
        'precision-machinist': 'electrician',
        'robotics-tech': 'electrician',
        'solar-installer': 'solar',
        'telecom-installer': 'datacenter',
        'dental-assistant-special': 'carpenter',
        'marine-mech-special': 'aircraft',
        'auto-refinishing': 'evmechanic',
        'dental-lab-tech': 'carpenter',
        'historic-restoration': 'carpenter',
        'bim-coordinator': 'datacenter',
    };

    const baseName = imageMap[job.id] || 'electrician';
    const avatarUrl = `/assets/careers/${baseName}_${genderKey}.png`;
    
    return (
        <motion.div
            whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
            className="card cursor-pointer overflow-hidden border-industrial-100 bg-white group relative"
        >
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    onStarToggle(job.id);
                }}
                className={`absolute top-4 right-4 z-40 p-2 rounded-full backdrop-blur-md transition-all ${
                    isStarred 
                        ? 'bg-amber-400 text-white shadow-lg' 
                        : 'bg-white/50 text-industrial-400 hover:bg-white hover:text-amber-400'
                }`}
            >
                <Heart className={`w-5 h-5 ${isStarred ? 'fill-current' : ''}`} />
            </button>

            <div onClick={() => onClick(job)} className="h-48 bg-industrial-900 relative overflow-hidden flex items-end justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                <img 
                    src={avatarUrl} 
                    alt={`${studentName} the ${job.name}`}
                    className="h-[90%] w-auto relative z-20 transition-transform duration-500 group-hover:scale-110 object-contain translate-y-2"
                />
                <div className="absolute bottom-4 left-4 z-30 flex flex-nowrap items-center gap-1.5 overflow-hidden">
                     <span className="px-2 py-0.5 bg-white/90 backdrop-blur-sm rounded-full text-[9px] font-black uppercase text-industrial-700 border border-industrial-200 shadow-sm whitespace-nowrap">
                        {job.demand} Demand
                     </span>
                     {job.matchPercentage && (
                        <span className="px-2 py-0.5 bg-safety-blue text-white rounded-full text-[9px] font-black uppercase shadow-sm whitespace-nowrap">
                            {job.matchPercentage}% Match
                        </span>
                     )}
                </div>
            </div>
            <div className="p-5">
                <h4 className="text-xl font-black text-industrial-900 group-hover:text-safety-blue transition-colors">
                    {studentName} the {job.title.split(' ').slice(1).join(' ')}
                </h4>
                <p className="text-xs text-industrial-500 font-bold uppercase tracking-wider mt-1">{job.name}</p>
                <div className="mt-3 pt-3 border-t border-industrial-50 flex items-center justify-between">
                     <div className="flex items-center gap-1.5 text-emerald-600">
                        <DollarSign className="w-3 h-3" />
                        <span className="text-xs font-black">${job.startingSalary.toLocaleString()}</span>
                     </div>
                     <span className="text-[10px] font-bold text-industrial-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {job.timeToCertify}
                     </span>
                </div>
            </div>
        </motion.div>
    );
};

const JobDetailModal = ({ job, studentName, onClose }) => {
    const training = TRAINING_MODELS[job.trainingModel];
    const degreeJob = job.comparableJob;

    // Helper component for aligned rows
    const ComparisonRow = ({ title, tradeContent, degreeContent, icon: Icon, type = "default" }) => (
        <div className="grid grid-cols-2 gap-0 border-b border-industrial-100/50 last:border-0">
            <div className={`p-5 md:p-8 ${type === 'dark' ? 'bg-industrial-50' : 'bg-white'}`}>
                <div className="space-y-3">
                    <p className="text-[10px] font-black uppercase text-industrial-400 flex items-center gap-2">
                        {Icon && <Icon className="w-3 h-3 text-safety-blue" />} {title}
                    </p>
                    {tradeContent}
                </div>
            </div>
            <div className={`p-5 md:p-8 ${type === 'dark' ? 'bg-industrial-800' : 'bg-industrial-900'} text-white`}>
                <div className="space-y-3">
                    <p className="text-[10px] font-black uppercase text-white/30 flex items-center gap-2">
                        {Icon && <Icon className="w-3 h-3 text-safety-blue" />} {title}
                    </p>
                    {degreeContent}
                </div>
            </div>
        </div>
    );

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 overflow-hidden">
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-industrial-900/40 backdrop-blur-xl"
            />
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white w-full max-w-5xl max-h-full overflow-y-auto rounded-3xl shadow-2xl overflow-x-hidden border border-white/20"
            >
                {/* Header Row */}
                <div className="grid grid-cols-2 z-20 border-b border-industrial-100">
                    <div className="p-5 md:p-8 bg-white border-r border-industrial-100 flex flex-col justify-center">
                        <div className="flex flex-nowrap items-center gap-1.5 mb-4 overflow-hidden">
                            <span className="px-2 py-0.5 bg-blue-100 text-safety-blue text-[9px] font-black rounded-full uppercase tracking-widest whitespace-nowrap">Trade Path</span>
                            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-600 text-[9px] font-black rounded-full uppercase tracking-widest whitespace-nowrap">{job.demand} Demand</span>
                            {job.matchPercentage && (
                                <span className="px-2 py-0.5 bg-safety-blue text-white text-[9px] font-black rounded-full uppercase tracking-widest whitespace-nowrap">{job.matchPercentage}% Personalized Match</span>
                            )}
                        </div>
                        <h2 className="text-4xl font-black text-industrial-900 leading-tight">{job.name}</h2>
                        <p className="text-industrial-400 text-xs mt-2 italic font-medium">"{job.relevanceMatch}"</p>
                    </div>
                    <div className="p-5 md:p-8 bg-industrial-900 text-white flex flex-col justify-center relative">
                        <button 
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-30"
                        >
                            <Zap className="w-5 h-5 rotate-45" />
                        </button>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-white/10 text-white/50 text-[10px] font-black rounded-full uppercase tracking-widest border border-white/10">Bachelor's Degree Path</span>
                        </div>
                        <h2 className="text-4xl font-black text-white leading-tight">{degreeJob.name}</h2>
                        <p className="text-white/40 text-xs mt-2 italic font-medium">Matched Industry Equivalent</p>
                    </div>
                </div>

                {/* Training Row */}
                <ComparisonRow 
                    title="Training & Certification"
                    icon={Clock}
                    type="dark"
                    tradeContent={
                        <div className="space-y-4">
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-black text-industrial-900">{job.timeToCertify}</span>
                                <span className="text-xs font-bold text-industrial-400 uppercase">to certify</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-safety-blue rounded-lg border border-blue-100">
                                <span className="text-[10px] font-black uppercase whitespace-nowrap">{training.tag}</span>
                            </div>
                            <p className="text-xs text-industrial-500 leading-relaxed">{training.desc}</p>
                        </div>
                    }
                    degreeContent={
                        <div className="space-y-4">
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-black text-white">{degreeJob.timeToCertify}</span>
                                <span className="text-xs font-bold text-white/30 uppercase">to degree</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 text-white/80 rounded-lg border border-white/10">
                                <span className="text-[10px] font-black uppercase">FOUR-YEAR-DEGREE</span>
                            </div>
                            <p className="text-xs text-white/50 leading-relaxed">Traditional University path; broad academic foundation leading to major-specific degree.</p>
                        </div>
                    }
                />

                {/* Financial Row */}
                <ComparisonRow 
                    title="Financial Outlook"
                    icon={DollarSign}
                    tradeContent={
                        <div className="space-y-4">
                            <div className="p-4 bg-emerald-50 rounded-[1.5rem] border-2 border-emerald-100 shadow-inner">
                                <p className="text-xl font-black text-emerald-700">Avg. Training Cost: {training.avgCost}</p>
                                <p className="text-xs text-emerald-600 mt-1 uppercase font-black tracking-widest">Faster ROI potential</p>
                            </div>
                            <div className="grid grid-cols-2 gap-6 px-2">
                                <div>
                                    <p className="text-xl font-black text-emerald-600">${job.startingSalary.toLocaleString()}</p>
                                    <p className="text-[10px] font-bold text-industrial-400 uppercase mt-1 tracking-widest font-black">Starting Salary</p>
                                </div>
                                <div>
                                    <p className="text-xl font-black text-industrial-900">${job.medianSalary10yr.toLocaleString()}</p>
                                    <p className="text-[10px] font-bold text-industrial-400 uppercase mt-1 tracking-widest font-black">10-Year Median</p>
                                </div>
                            </div>
                        </div>
                    }
                    degreeContent={
                        <div className="space-y-4">
                            <div className="p-4 bg-rose-500/10 rounded-[1.5rem] border-2 border-rose-500/30 shadow-inner">
                                <p className="text-xl font-black text-rose-300">Avg. Education Cost: {degreeJob.avgCost}</p>
                                <p className="text-xs text-rose-400/80 mt-1 uppercase font-black tracking-widest">Longer debt cycle predicted</p>
                            </div>
                            <div className="grid grid-cols-2 gap-6 px-2">
                                <div>
                                    <p className="text-xl font-black text-white/90">${degreeJob.startingSalary.toLocaleString()}</p>
                                    <p className="text-[10px] font-bold text-white/30 uppercase mt-1 tracking-widest font-black">Starting Salary</p>
                                </div>
                                <div>
                                    <p className="text-xl font-black text-white/90">${degreeJob.medianSalary10yr.toLocaleString()}</p>
                                    <p className="text-[10px] font-bold text-white/30 uppercase mt-1 tracking-widest font-black">10-Year Median</p>
                                </div>
                            </div>
                        </div>
                    }
                />

                {/* Day in Life Row */}
                <ComparisonRow 
                    title="A Day in the Life"
                    icon={Briefcase}
                    type="dark"
                    tradeContent={
                        <div className="space-y-4">
                            <p className="text-lg font-black text-industrial-900">Experience a typical shift:</p>
                            <p className="text-base text-industrial-600 leading-relaxed italic">"{job.dayInLife} Every project presents a new challenge, testing your problem-solving skills and technical mastery while delivering visible results by the day's end."</p>
                        </div>
                    }
                    degreeContent={
                        <div className="space-y-4">
                            <p className="text-lg font-black text-white">Experience a typical day:</p>
                            <p className="text-base text-white/70 leading-relaxed italic">"{degreeJob.dayInLife} You'll focus on long-term strategy and system-wide improvements, often seeing the fruits of your labor over weeks or months of development cycle."</p>
                        </div>
                    }
                />

                {/* Skills/Impact Row */}
                <ComparisonRow 
                    title="Impact & Values"
                    icon={Target}
                    tradeContent={
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-black uppercase text-industrial-400 mb-1">Community Value</h4>
                            <p className="text-lg text-industrial-900 leading-relaxed font-black">{job.impact}</p>
                            <p className="text-sm text-industrial-500 leading-relaxed">Your work is vital infrastructure. You keep the physical systems of our society running safely and efficiently.</p>
                        </div>
                    }
                    degreeContent={
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-black uppercase text-white/30 mb-1">Societal Contribution</h4>
                            <p className="text-lg text-white leading-relaxed font-black">{degreeJob.impact}</p>
                            <p className="text-sm text-white/50 leading-relaxed">You design the high-level architectures and innovations that define how we move forward as a digital society.</p>
                        </div>
                    }
                />
            </motion.div>
        </div>
    );
};

export default function CareerDiscovery() {
  const { profile, updateProfile, userType, toggleStarTrade } = useUser();
  const [view, setView] = useState('opening');
  const [useRag, setUseRag] = useState(false);

  if (userType === 'counselor') {
    return <Navigate to="/students" replace />;
  }
  const [selectedJob, setSelectedJob] = useState(null);
  const [matchedResults, setMatchedResults] = useState(profile.discoveryResults?.matches || null);
  const [surveyData, setSurveyData] = useState(profile.discoveryResults?.formData || null);
  const [isMatching, setIsMatching] = useState(false);

  useEffect(() => {
    if (profile.discoveryResults?.matches) {
      setView('results');
      setMatchedResults(profile.discoveryResults.matches);
      setSurveyData(profile.discoveryResults.formData);
    } else {
      setView('opening');
      setMatchedResults(null);
      setSurveyData(null);
    }
  }, [profile.discoveryResults]);

  const startIntake = () => {
    setView('intake');
  };

  const handleIntakeComplete = async (data) => {
    setIsMatching(true);
    setView('matching');
    
    // Run whichever algorithm the student selected
    let matches;
    if (useRag) {
      matches = await RagMatcher.match({ ...profile, ...data });
    } else {
      matches = await SkillsMatcher.match({ ...profile, ...data });
    }
    const topMatches = matches.slice(0, 9); // Always show top 9
    
    setSurveyData(data);
    setMatchedResults(topMatches);
    
    // Persist everything
    updateProfile({ 
      discoveryResults: { 
        formData: data, 
        matches: topMatches 
      }
    });

    setTimeout(() => {
      setIsMatching(false);
      setView('results');
    }, 500); // Small buffer for visual smoothness
  };

  const resetDiscovery = () => {
    if (window.confirm("This will clear your current matches and profile. Are you sure you want to start over?")) {
      updateProfile({ 
        discoveryResults: null,
        searchSchoolsCompleted: false,
        appliedSchoolId: null,
        selectedTrade: 'undecided'
      });
      setMatchedResults(null);
      setSurveyData(null);
      setView('opening');
    }
  };

  const studentFirstName = profile.name.split(' ')[0];

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {view === 'opening' && (
          <motion.div 
            key="opening"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 z-0 opacity-10">
                <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000" 
                    className="w-full h-full object-cover" 
                    alt="Background" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white" />
            </div>

            <div className="relative z-10 max-w-3xl space-y-10">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-industrial-900 rounded-full text-white text-[10px] font-black uppercase tracking-widest">
                        <Zap className="w-4 h-4 text-safety-blue" />
                        Future Workforce Discovery
                    </div>
                    <h1 className="text-6xl font-black text-industrial-900 tracking-tighter">
                        Build your Future, <br />
                        <span className="text-safety-blue text-5xl">{studentFirstName}.</span>
                    </h1>
                    <p className="text-xl text-industrial-500 font-medium leading-relaxed max-w-xl mx-auto">
                        High school is just the beginning. Discover high-demand trade careers that pay you to learn and lead to financial freedom.
                    </p>
                </div>

                <div className="flex justify-center pt-8">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={startIntake}
                        className="group bg-industrial-900 hover:bg-industrial-800 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 shadow-2xl shadow-blue-500/20 transition-all"
                    >
                        Explore Your Future <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>

                {/* Matching Algorithm Toggle */}
                <div className="flex flex-col items-center gap-3 pt-2">
                  <p className="text-[10px] font-black uppercase tracking-widest text-industrial-400">Matching Algorithm</p>
                  <div className="flex items-center bg-industrial-100 p-1 rounded-2xl gap-1">
                    <button
                      onClick={() => setUseRag(false)}
                      className={`px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                        !useRag
                          ? 'bg-white text-industrial-900 shadow-md'
                          : 'text-industrial-400 hover:text-industrial-600'
                      }`}
                    >
                      Weighted Heuristic
                    </button>
                    <button
                      onClick={() => setUseRag(true)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                        useRag
                          ? 'bg-industrial-900 text-white shadow-md shadow-industrial-900/30'
                          : 'text-industrial-400 hover:text-industrial-600'
                      }`}
                    >
                      Semantic RAG
                      <span className={`text-[8px] font-black px-1.5 py-0.5 rounded-full ${
                        useRag ? 'bg-safety-blue text-white' : 'bg-industrial-300 text-industrial-600'
                      }`}>BETA</span>
                    </button>
                  </div>
                  <p className="text-[10px] text-industrial-400 font-medium max-w-xs">
                    {useRag
                      ? '✦ AI Semantic Search — uses Gemini embeddings to deeply understand your profile.'
                      : '✦ Classic scoring based on your interests, subjects, and survey answers.'}
                  </p>
                </div>
            </div>
          </motion.div>
        )}

        {view === 'intake' && (
          <motion.div 
            key="intake"
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95 }}
            className="min-h-[80vh]"
          >
            <MultiStepIntake 
                onComplete={handleIntakeComplete} 
                initialData={surveyData} 
                studentName={studentFirstName}
            />
          </motion.div>
        )}

        {view === 'matching' && (
            <MatchingView studentName={studentFirstName} />
        )}

        {view === 'results' && surveyData && matchedResults && (
          <motion.div 
            key="results"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="space-y-6 py-6 px-6"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 max-w-7xl mx-auto">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-safety-blue font-black uppercase tracking-widest text-xs">
                        <CheckCircle2 className="w-4 h-4" />
                        Analysis Complete
                    </div>
                    <h2 className="text-4xl font-black text-industrial-900 tracking-tight">
                        {studentFirstName}'s Recommended Paths
                    </h2>
                    <p className="text-industrial-500 max-w-xl">
                        Based on your profile, the <span className="text-industrial-900 font-bold uppercase">{useRag ? 'AI Semantic Match Engine (Beta)' : 'Weighted Heuristic Matcher'}</span> has identified these nine paths as your strongest career alignments.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button 
                        onClick={resetDiscovery}
                        className="px-6 py-3 border-2 border-industrial-200 rounded-xl text-[10px] font-black uppercase text-industrial-600 hover:bg-industrial-50 transition-all flex items-center gap-2"
                    >
                        <Scale className="w-4 h-4" /> Change Profile
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
                {matchedResults.map((job) => (
                    <CareerCard 
                        key={job.id} 
                        job={job} 
                        studentName={studentFirstName} 
                        gender={surveyData.gender}
                        onClick={setSelectedJob}
                        isStarred={profile.starredTrades?.includes(job.id)}
                        onStarToggle={toggleStarTrade}
                    />
                ))}
            </div>

            <AnimatePresence>
                {selectedJob && (
                    <JobDetailModal 
                        job={selectedJob} 
                        studentName={studentFirstName}
                        onClose={() => setSelectedJob(null)}
                    />
                )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
