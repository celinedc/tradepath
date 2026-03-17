import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Search, GraduationCap, Trophy, ChevronRight, 
  Target, Info, ArrowUpRight, BookOpen, Brain, 
  ShieldCheck, Zap, TrendingUp, HelpCircle
} from 'lucide-react';
import { STUDENTS_DATA } from '../data/mockData';
import { useUser } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

export default function StudentsPage() {
  const { userType } = useUser();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  if (userType === 'student') {
    return <Navigate to="/dashboard" replace />;
  }

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
                         <div className="p-4 bg-industrial-50 rounded-2xl border border-industrial-100 leading-relaxed">
                            <p className="text-xs text-industrial-600 font-medium">{selectedStudent.extracurriculars}</p>
                         </div>
                         <button className="w-full py-3 bg-industrial-900 text-white rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-industrial-800 transition-all flex items-center justify-center gap-2">
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
                            <p className="text-industrial-400 text-xs font-medium italic">Summarizing academic & co-curricular data into trade success factors.</p>
                         </div>
                         <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20">
                            <Sparkles className="w-3.5 h-3.5 text-safety-blue" />
                            <span className="text-[10px] font-black uppercase tracking-widest">AI Translation Engine</span>
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
                                 <span className="text-[8px] font-bold text-industrial-500 uppercase italic">Translated Signal</span>
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
                            <p className="text-xs font-bold text-industrial-200">Recommended Path: <span className="text-white font-black uppercase tracking-widest">Precision Engineering & Systems Op</span></p>
                            <p className="text-[10px] text-industrial-500 mt-1">Based on highest skill clusters in Spatial Reasoning and Tech Aptitude.</p>
                         </div>
                         <button className="w-full md:w-auto px-8 py-4 bg-safety-blue hover:bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-xl shadow-blue-500/20 transition-all active:scale-95">
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
    </div>
  );
}

const Sparkles = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L14.5 9L21 11.5L14.5 14L12 20L9.5 14L3 11.5L9.5 9L12 3Z" fill="currentColor"/>
  </svg>
);
