import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Search, GraduationCap, Trophy, ChevronRight, 
  Target, Info, ArrowUpRight, BookOpen, Brain, 
  ShieldCheck, Zap, TrendingUp, HelpCircle, X, CheckCircle2, Globe, DollarSign
} from 'lucide-react';
import { STUDENTS_DATA } from '../data/mockData';
import { useUser } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

const CareerPlanModal = ({ isOpen, onClose, student }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-industrial-950/80 backdrop-blur-md"
      />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative bg-white rounded-[2rem] w-full max-w-2xl max-h-[85vh] overflow-hidden shadow-2xl border border-white/20 flex flex-col"
      >
        <div className="bg-industrial-900 p-8 text-white relative">
          <button onClick={onClose} className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
               <Zap className="w-5 h-5 text-safety-blue" />
               <span className="text-xs font-black uppercase tracking-[0.2em] text-industrial-400">Step-by-Step Roadmap</span>
            </div>
            <h2 className="text-4xl font-black tracking-tight">{student.name}'s Career Plan</h2>
            <p className="text-industrial-400 font-medium">Path: <span className="text-white font-bold">{student.discoveryMatch || 'Skilled Trades'}</span></p>
          </div>
        </div>

        <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
           <div className="space-y-4">
              <h4 className="text-sm font-black uppercase tracking-widest text-industrial-900 border-l-4 border-safety-blue pl-4">Next Steps: Program Application</h4>
              <div className="grid gap-3">
                 {[
                   { title: "Review Accredited Programs", desc: "Shortlist top 3 schools from TradePath search with 'A' Grade ROI.", icon: <School className="w-4 h-4" /> },
                   { title: "Portfolio Submission", desc: "Submit transcript highlighting Woodshop/Physics grades as technical markers.", icon: <CheckCircle2 className="w-4 h-4" /> },
                   { title: "Entry Interview Prep", desc: "Focus on extracurricular leadership (Robotics/Football) to demonstrate soft skills.", icon: <Users className="w-4 h-4" /> }
                 ].map((step, i) => (
                   <div key={i} className="flex gap-4 p-4 rounded-2xl bg-industrial-50 border border-industrial-100 italic">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 text-safety-blue shadow-sm border border-industrial-100">
                         {step.icon}
                      </div>
                      <div>
                         <p className="text-xs font-black text-industrial-900 uppercase">{step.title}</p>
                         <p className="text-[11px] text-industrial-500 font-medium leading-tight mt-1">{step.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="space-y-4">
              <h4 className="text-sm font-black uppercase tracking-widest text-industrial-900 border-l-4 border-emerald-500 pl-4">Financial Aid & Grants</h4>
              <div className="p-5 bg-emerald-50 rounded-3xl border border-emerald-100 space-y-3">
                 <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-emerald-600" />
                    <p className="text-sm font-black text-emerald-900 uppercase tracking-tighter">Qualified for State Trade Grants</p>
                 </div>
                 <p className="text-xs text-emerald-700 font-medium leading-relaxed">
                   Based on the selected path in {student.name}'s region, they are eligible for the **Skills Future Grant** covering up to 40% of program costs.
                 </p>
                 <button className="text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:underline">Link to FAFSA + Grant Application</button>
              </div>
           </div>
        </div>

        <div className="p-8 pt-0">
          <button 
            onClick={onClose}
            className="w-full py-5 bg-industrial-900 text-white rounded-[1.5rem] font-black uppercase tracking-widest text-xs hover:bg-industrial-800 transition-all shadow-xl shadow-industrial-900/20"
          >
            Commit to Path & Notify Student
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const School = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 10-10-5L2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

export default function StudentsPage() {
  const { userType } = useUser();
  const [searchTerm, setSearchTerm] = useState('');
  const [stageFilter, setStageFilter] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);

  if (userType === 'student') {
    return <Navigate to="/dashboard" replace />;
  }

  const handleViewTranscript = (student) => {
    const transcriptWindow = window.open('', '_blank');
    if (!transcriptWindow) {
      alert("Please allow pop-ups to view the transcript.");
      return;
    }
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Academic Transcript - ${student.name}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
          :root { --industrial-900: #1e1b4b; --safety-blue: #4F46E5; }
          body { font-family: 'Inter', sans-serif; padding: 60px; color: #1e293b; line-height: 1.6; max-width: 900px; margin: 0 auto; background: #f8fafc; }
          .sheet { background: white; padding: 60px; box-shadow: 0 20px 40px rgba(0,0,0,0.05); border-radius: 8px; border-top: 12px solid var(--industrial-900); }
          .header { border-bottom: 2px solid #e2e8f0; padding-bottom: 30px; margin-bottom: 40px; display: flex; justify-content: space-between; align-items: flex-start; }
          .title { font-weight: 900; font-size: 34px; text-transform: uppercase; letter-spacing: -1px; margin: 0; color: var(--industrial-900); }
          .subtitle { font-size: 11px; font-weight: 900; color: var(--safety-blue); margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 2px; }
          .seal { width: 90px; height: 90px; border: 4px solid var(--industrial-900); border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; font-weight: 900; font-size: 9px; text-transform: uppercase; letter-spacing: 1px; color: var(--industrial-900); }
          .student-info { margin-bottom: 40px; background: #f1f5f9; padding: 24px; border-radius: 12px; }
          .student-name { font-weight: 900; font-size: 24px; margin: 0 0 10px 0; color: var(--industrial-900); }
          .student-meta { margin: 0; font-size: 15px; font-weight: 500; color: #475569; display: flex; gap: 20px; }
          .grid { display: grid; grid-template-cols: 1fr 1fr; gap: 50px; }
          h3 { font-weight: 900; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px; color: var(--industrial-900); border-bottom: 2px solid #f1f5f9; padding-bottom: 10px; }
          table { width: 100%; border-collapse: collapse; }
          th { text-align: left; padding: 12px 12px 12px 0; border-bottom: 2px solid #e2e8f0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; }
          td { padding: 16px 12px 16px 0; border-bottom: 1px solid #f1f5f9; font-size: 15px; font-weight: 500; color: #334155; }
          .grade { font-weight: 900; text-align: right; color: var(--industrial-900); padding-right: 0; }
          th.grade-th { text-align: right; padding-right: 0; }
          .text-block { font-size: 14px; color: #475569; padding: 16px; background: #f8fafc; border-left: 3px solid var(--safety-blue); border-radius: 0 8px 8px 0; }
          .footer { margin-top: 80px; font-size: 10px; color: #94a3b8; text-transform: uppercase; font-weight: 700; border-top: 2px solid #e2e8f0; padding-top: 20px; display: flex; justify-content: space-between; }
          @media print { body { background: white; padding: 0; } .sheet { box-shadow: none; padding: 0; border-top: 6px solid #1e1b4b; } }
        </style>
      </head>
      <body>
        <div class="sheet">
          <div class="header">
            <div>
              <p class="subtitle">Official Academic Record</p>
              <h1 class="title">TradePath Navigator</h1>
            </div>
            <div class="seal"><span>Official</span><span>Transcript</span></div>
          </div>
          
          <div class="student-info">
            <h2 class="student-name">${student.name}</h2>
            <div class="student-meta">
               <span>Grade: <strong>${student.grade}</strong></span>
               <span>Cumulative GPA: <strong style="color: var(--safety-blue);">${student.gpa}</strong></span>
            </div>
          </div>

          <div class="grid">
            <div>
              <h3>Academic Coursework</h3>
              <table>
                <thead>
                  <tr><th>Subject</th><th class="grade-th">Final Grade</th></tr>
                </thead>
                <tbody>
                  ${student.grades.map(g => `<tr><td>${g.subject}</td><td class="grade">${g.grade}</td></tr>`).join('')}
                </tbody>
              </table>
            </div>
            <div>
              <h3>Extracurricular Profile</h3>
              <div class="text-block" style="margin-bottom: 30px;">
                 ${student.extracurriculars}
              </div>
              
              <h3>Career Discovery Synthesis</h3>
              <div class="text-block" style="border-left-color: #10b981;">
                 Primary Match: <strong style="color: #10b981;">${student.discoveryMatch || 'N/A'}</strong>
              </div>
            </div>
          </div>

          <div class="footer">
            <span>System ID: TRADEPATH-OFFICIAL-${student.id.toUpperCase()}</span>
            <span>Generated on ${new Date().toLocaleDateString()}</span>
          </div>
        </div>
        <script>
           window.onload = () => setTimeout(() => window.print(), 500);
        </script>
      </body>
      </html>
    `;
    transcriptWindow.document.write(html);
    transcriptWindow.document.close();
  };

  const filteredStudents = STUDENTS_DATA.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStage = stageFilter === 'all' || s.stage === stageFilter;
    return matchesSearch && matchesStage;
  });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h3 className="text-3xl font-black text-industrial-900 tracking-tight">Student Success Hub</h3>
          <p className="text-industrial-500 font-medium italic">Translate academic excellence into trade career readiness.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-industrial-400" />
            <input 
              type="text" 
              placeholder="Search students..." 
              className="input-field pl-12 py-3 w-full sm:w-64 bg-white shadow-inner"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="input-field py-3 px-4 bg-white shadow-inner font-bold text-xs uppercase text-industrial-700 cursor-pointer appearance-none w-full sm:w-48"
            value={stageFilter}
            onChange={(e) => setStageFilter(e.target.value)}
          >
            <option value="all">All Stages</option>
            <option value="Career Discovery">Career Discovery</option>
            <option value="School Search">School Search</option>
            <option value="Apply">Apply</option>
            <option value="Accepted">Accepted</option>
          </select>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Student List */}
        <div className="lg:col-span-1 flex flex-col h-full min-h-0">
          <div className="flex items-center justify-between mb-4 shrink-0">
            <h4 className="text-sm font-black uppercase tracking-widest text-industrial-400">Roster</h4>
            <span className="text-[10px] font-bold text-industrial-400">{filteredStudents.length} Students found</span>
          </div>
          <div className="space-y-2 flex-1 overflow-y-auto pr-2 custom-scrollbar min-h-0 pb-4">
            {filteredStudents.map(student => (
              <button
                key={student.id}
                onClick={() => setSelectedStudent(student)}
                className={`w-full p-4 rounded-2xl text-left border-2 transition-all group ${
                  selectedStudent?.id === student.id 
                    ? 'border-safety-blue bg-blue-50 shadow-lg translate-x-1' 
                    : 'border-white bg-white hover:border-industrial-200 text-industrial-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black ${
                      selectedStudent?.id === student.id ? 'bg-safety-blue text-white' : 'bg-industrial-100 text-industrial-400'
                    }`}>
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className={`font-black tracking-tight ${selectedStudent?.id === student.id ? 'text-safety-blue' : 'text-industrial-900'}`}>
                        {student.name}
                      </p>
                      <p className="text-[10px] uppercase font-bold text-industrial-400">{student.grade}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${selectedStudent?.id === student.id ? 'rotate-90 text-safety-blue' : 'text-industrial-300'}`} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Student Detail */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {selectedStudent ? (
              <motion.div
                key={selectedStudent.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="card p-8 bg-white border-none shadow-sm relative overflow-hidden rounded-[2.5rem]">
                   <div className="absolute top-0 right-0 p-8">
                      <div className="flex flex-col items-center p-3 bg-emerald-50 rounded-2xl border border-emerald-100">
                        <span className="text-2xl font-black text-emerald-600 tracking-tighter">{selectedStudent.gpa}</span>
                        <span className="text-[8px] font-black uppercase text-emerald-600">Avg. GPA</span>
                      </div>
                   </div>
                   
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-industrial-900 rounded-2xl flex items-center justify-center">
                         <Users className="w-8 h-8 text-safety-blue" />
                      </div>
                      <div>
                         <h4 className="text-3xl font-black text-industrial-900 tracking-tighter">{selectedStudent.name}</h4>
                         <p className="text-industrial-500 font-medium italic">High School Academic Profile</p>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                         <div className="flex items-center gap-2 mb-2">
                            <BookOpen className="w-4 h-4 text-safety-blue" />
                            <h5 className="text-sm font-black uppercase tracking-widest text-industrial-900">Coursework Highlight</h5>
                         </div>
                         <div className="grid grid-cols-1 gap-2">
                            {selectedStudent.grades.map((g, i) => (
                              <div key={i} className="flex justify-between items-center p-3 bg-industrial-50 rounded-xl border border-industrial-100">
                                 <span className="text-xs font-bold text-industrial-700">{g.subject}</span>
                                 <span className="text-xs font-black text-industrial-900">{g.grade}</span>
                              </div>
                            ))}
                         </div>
                      </div>

                      <div className="space-y-4">
                         <div className="flex items-center gap-2 mb-2">
                            <Trophy className="w-4 h-4 text-safety-blue" />
                            <h5 className="text-sm font-black uppercase tracking-widest text-industrial-900">Extracurriculars</h5>
                         </div>
                         <div className="p-4 bg-industrial-50 rounded-2xl border border-industrial-100 leading-relaxed min-h-[100px]">
                            <p className="text-xs text-industrial-600 font-medium">{selectedStudent.extracurriculars}</p>
                         </div>
                         <button 
                            onClick={() => handleViewTranscript(selectedStudent)}
                            className="w-full py-3 bg-industrial-900 text-white rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-industrial-800 transition-all flex items-center justify-center gap-2">
                            View Full Transcript <ArrowUpRight className="w-3.5 h-3.5" />
                         </button>
                      </div>
                   </div>
                </div>

                {/* Aptitude Translation */}
                <div className="card p-8 bg-industrial-900 text-white border-none shadow-2xl rounded-[2.5rem] relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-safety-blue/10 rounded-full blur-[100px] -mr-32 -mt-32" />
                   
                   <div className="relative z-10 space-y-8">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                         <div>
                            <h4 className="text-2xl font-black tracking-tight">Trade Aptitude Analysis</h4>
                            <p className="text-industrial-400 text-xs font-medium italic font-serif">Synthesizing academic & co-curricular metrics into actionable workforce signals.</p>
                         </div>
                      </div>

                      <div className="space-y-6">
                         <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-3">
                            <h5 className="text-[10px] font-black uppercase tracking-widest text-industrial-400">Career Discovery Match</h5>
                            <p className="text-xl font-bold text-white">{selectedStudent.discoveryMatch || 'Results Pending'}</p>
                         </div>
                         
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-3">
                               <h5 className="text-[10px] font-black uppercase tracking-widest text-industrial-400">Academic Alignment</h5>
                               <div className="space-y-2">
                                  {selectedStudent.grades.slice(0, 2).map((g, i) => (
                                     <div key={i} className="flex justify-between items-center bg-industrial-800 p-2 rounded-xl">
                                        <span className="text-xs font-bold text-industrial-300">{g.subject}</span>
                                        <span className="text-xs font-black text-emerald-400">{g.grade}</span>
                                     </div>
                                  ))}
                                  <p className="text-[10px] text-industrial-500 italic mt-2">Core subject trends indicate strong technical foundation.</p>
                               </div>
                            </div>
                            
                            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-3">
                               <h5 className="text-[10px] font-black uppercase tracking-widest text-industrial-400">Co-Curricular Signals</h5>
                               <p className="text-xs text-industrial-300 leading-relaxed font-medium">{selectedStudent.extracurriculars}</p>
                               <p className="text-[10px] text-industrial-500 italic mt-2">Activities show marked inclination towards hands-on problem solving.</p>
                            </div>
                         </div>
                      </div>

                      <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row gap-6 items-center">
                         <div className="flex -space-x-3 overflow-hidden">
                            {[1, 2, 3].map(i => (
                               <div key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-industrial-900 bg-industrial-800 flex items-center justify-center">
                                  <Brain className="w-5 h-5 text-safety-blue" />
                                </div>
                            ))}
                         </div>
                         <div className="flex-1 text-center md:text-left">
                            <p className="text-xs font-bold text-industrial-200">Recommended Path: <span className="text-white font-black uppercase tracking-widest">{selectedStudent.discoveryMatch || 'Evaluating Match...'}</span></p>
                            <p className="text-[10px] text-industrial-500 mt-1 italic">Based on synthesis of academic grades, extracurriculars, and career discovery profile.</p>
                         </div>
                         <button 
                            onClick={() => setIsPlanModalOpen(true)}
                            className="w-full md:w-auto px-8 py-4 bg-safety-blue hover:bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-xl shadow-blue-500/20 transition-all active:scale-95">
                            Auto-Generate Career Plan
                         </button>
                      </div>
                   </div>
                </div>
              </motion.div>
            ) : (
              <div className="h-[700px] flex flex-col items-center justify-center text-center space-y-6 card border-none bg-white opacity-50 rounded-[2.5rem]">
                 <div className="p-8 bg-industrial-50 rounded-full">
                    <Users className="w-16 h-16 text-industrial-200" />
                 </div>
                 <div className="space-y-1">
                    <h4 className="text-2xl font-black text-industrial-900 tracking-tighter">No Student Selected</h4>
                    <p className="text-industrial-400 font-medium">Select a student from the roster to view their academic & career profile.</p>
                 </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {isPlanModalOpen && selectedStudent && (
          <CareerPlanModal 
            isOpen={isPlanModalOpen} 
            onClose={() => setIsPlanModalOpen(false)} 
            student={selectedStudent} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

const Sparkles = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L14.5 9L21 11.5L14.5 14L12 20L9.5 14L3 11.5L9.5 9L12 3Z" fill="currentColor"/>
  </svg>
);
