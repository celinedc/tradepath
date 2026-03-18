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
        className="relative bg-white rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-2xl border border-white/20"
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
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);

  if (userType === 'student') {
    return <Navigate to="/dashboard" replace />;
  }

  const handleViewTranscript = (student) => {
    const transcriptWindow = window.open('', '_blank');
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Academic Transcript - ${student.name}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
          body { font-family: 'Inter', sans-serif; padding: 40px; color: #1e293b; line-height: 1.6; }
          .header { border-bottom: 4px solid #1e293b; padding-bottom: 20px; margin-bottom: 40px; display: flex; justify-content: space-between; align-items: flex-end; }
          .title { font-weight: 900; font-size: 32px; text-transform: uppercase; letter-spacing: -1px; margin: 0; }
          .student-info { margin-bottom: 40px; }
          .student-info h2 { font-weight: 900; margin-bottom: 5px; }
          .grid { display: grid; grid-template-cols: 1fr 1fr; gap: 40px; }
          table { width: 100%; border-collapse: collapse; }
          th { text-align: left; padding: 12px; border-bottom: 2px solid #e2e8f0; font-size: 10px; text-transform: uppercase; letter-spacing: 1px; }
          td { padding: 12px; border-bottom: 1px solid #f1f5f9; font-size: 14px; font-weight: 500; }
          .grade { font-weight: 900; text-align: right; }
          .footer { margin-top: 80px; font-size: 10px; color: #94a3b8; text-transform: uppercase; font-weight: 700; border-top: 1px solid #e2e8f0; padding-top: 20px; }
          .seal { width: 80px; height: 80px; border: 4px solid #1e293b; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 10px; text-align: center; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <p style="font-size: 10px; font-weight: 900; color: #6366f1; margin: 0 0 5px 0; text-transform: uppercase;">Official Academic Record</p>
            <h1 class="title">TradePath Navigator</h1>
          </div>
          <div class="seal">OFFICIAL<br>TRANSCRIPT</div>
        </div>
        
        <div class="student-info">
          <h2>${student.name}</h2>
          <p>${student.grade} • GPA: <strong>${student.gpa}</strong></p>
        </div>

        <div class="grid">
          <div>
            <table>
              <thead>
                <tr><th>Subject</th><th style="text-align: right">Grade</th></tr>
              </thead>
              <tbody>
                ${student.grades.map(g => `<tr><td>${g.subject}</td><td class="grade">${g.grade}</td></tr>`).join('')}
              </tbody>
            </table>
          </div>
          <div>
            <h3 style="font-weight: 900; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px;">Extracurricular Activity</h3>
            <p style="font-size: 14px; color: #475569;">${student.extracurriculars}</p>
            
            <h3 style="font-weight: 900; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 40px 0 20px 0;">Career Discovery Data</h3>
            <p style="font-size: 14px; color: #475569;">Primary Match: <strong>${student.discoveryMatch || 'N/A'}</strong></p>
          </div>
        </div>

        <div class="footer">
          Generated on ${new Date().toLocaleDateString()} • System ID: TRADEPATH-OFFICIAL-${student.id.toUpperCase()}
        </div>
      </body>
      </html>
    `;
    transcriptWindow.document.write(html);
    transcriptWindow.document.close();
  };

  const filteredStudents = STUDENTS_DATA.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h3 className="text-3xl font-black text-industrial-900 tracking-tight">Student Success Hub</h3>
          <p className="text-industrial-500 font-medium italic">Translate academic excellence into trade career readiness.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-industrial-400" />
          <input 
            type="text" 
            placeholder="Search students..." 
            className="input-field pl-12 py-3 w-64 md:w-80 bg-white shadow-inner"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Student List */}
        <div className="lg:col-span-1 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-black uppercase tracking-widest text-industrial-400">Roster</h4>
            <span className="text-[10px] font-bold text-industrial-400">{filteredStudents.length} Students found</span>
          </div>
          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
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

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                         {selectedStudent.skills.map((skill, i) => (
                           <div key={i} className="space-y-3 group">
                              <div className="flex justify-between items-center px-1">
                                 <span className="text-[11px] font-black uppercase tracking-widest text-industrial-300">{skill.name}</span>
                                 <div className="relative">
                                    <HelpCircle className="w-3.5 h-3.5 text-industrial-500 cursor-help" />
                                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 p-2 bg-white text-industrial-900 text-[10px] font-bold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 border border-industrial-100">
                                       {skill.tooltip}
                                    </div>
                                 </div>
                              </div>
                              <div className="h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
                                 <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.value}%` }}
                                    transition={{ duration: 1, delay: i * 0.1 }}
                                    className={`h-full rounded-full ${
                                       skill.value > 85 ? 'bg-emerald-400' : skill.value > 70 ? 'bg-safety-blue' : 'bg-industrial-400'
                                    } shadow-[0_0_10px_rgba(52,211,153,0.3)]`}
                                 />
                              </div>
                              <div className="flex justify-between items-center px-1">
                                 <span className="text-[10px] font-black text-white">{skill.value}% Mastery</span>
                                 <span className="text-[8px] font-bold text-industrial-500 uppercase italic">Aptitude Match</span>
                              </div>
                           </div>
                         ))}
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
                            <p className="text-[10px] text-industrial-500 mt-1 italic">Based on highest skill clusters in {selectedStudent.skills[0].name} and {selectedStudent.skills[1].name}.</p>
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
