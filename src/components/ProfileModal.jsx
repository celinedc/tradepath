import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, User, Mail, GraduationCap, Briefcase, Calendar, CheckCircle2, Save, BookOpen, Trophy, School, Star } from 'lucide-react';
import { TRADE_CAREERS, SCHOOLS } from '../data/mockData';
import { RECOMMENDATIONS } from '../data/aptitudeData';
import { useUser } from '../context/UserContext';

export default function ProfileModal({ isOpen, onClose }) {
  const { profile, updateProfile, userType, toggleStarTrade, toggleStarSchool } = useUser();
  const [formData, setFormData] = useState({ ...profile });
  const [resume, setResume] = useState(profile.resume);
  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Sync with global profile when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({ ...profile });
    }
  }, [isOpen, profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsSaving(true);
    // Simulate save
    setTimeout(() => {
      updateProfile({ ...formData, resume });
      setIsSaving(false);
      onClose();
    }, 800);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      setTimeout(() => {
        setResume(file.name);
        setIsUploading(false);
      }, 1500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[100] p-4 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-industrial-900/60 backdrop-blur-sm pointer-events-auto"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 0 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden pointer-events-auto max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="relative h-24 bg-industrial-900 flex-shrink-0">
               <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-industrial-300 transition-colors z-10"
               >
                 <X className="w-6 h-6" />
               </button>
               <div className="absolute -bottom-8 left-8 p-1 bg-white rounded-2xl shadow-xl">
                 <div className="w-20 h-20 bg-industrial-200 rounded-xl flex items-center justify-center border border-industrial-100">
                   <User className="w-10 h-10 text-industrial-600" />
                 </div>
               </div>
            </div>

            <div className="px-8 pt-12 pb-8 overflow-y-auto custom-scrollbar">
               <div className="flex justify-between items-start mb-6">
                 <div>
                    <h3 className="text-xl font-black text-industrial-900 underline decoration-safety-blue decoration-4 underline-offset-4">{userType === 'student' ? 'Student Profile' : 'Counselor Profile'}</h3>
                    <p className="text-industrial-500 text-xs mt-1 font-medium italic">Configure your {userType === 'student' ? 'career roadmap' : 'counseling workspace'}</p>
                 </div>
                 <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[9px] font-black uppercase tracking-widest rounded-full">Secure</span>
               </div>

               <div className="space-y-5">
                  {/* Name (Read-only) */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-black text-industrial-400 flex items-center gap-1.5 ml-1">
                      <User className="w-3 h-3" /> Full Name (Permanent)
                    </label>
                    <input 
                      type="text" 
                      value={formData.name} 
                      disabled 
                      className="w-full bg-industrial-50 border border-industrial-100 text-industrial-400 font-bold p-3 rounded-xl cursor-not-allowed text-sm"
                    />
                  </div>

                  {/* Email (Read-only for both as requested) */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-black text-industrial-400 flex items-center gap-1.5 ml-1">
                      <Mail className="w-3 h-3" /> Email Address
                    </label>
                    <input 
                      type="email" 
                      value={formData.email} 
                      disabled
                      className="w-full bg-industrial-50 border border-industrial-100 text-industrial-400 font-bold p-3 rounded-xl cursor-not-allowed text-sm"
                    />
                  </div>

                  {userType === 'student' ? (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-black text-industrial-400 flex items-center gap-1.5 ml-1">
                             Ethnicity
                          </label>
                          <select 
                            name="ethnicity"
                            value={formData.ethnicity} 
                            onChange={handleChange}
                            className="input-field text-sm p-3 bg-white appearance-none"
                          >
                            <option value="white">White</option>
                            <option value="black">Black</option>
                            <option value="hispanic">Hispanic</option>
                            <option value="asian">Asian</option>
                            <option value="multi">Multi-racial</option>
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-black text-industrial-400 flex items-center gap-1.5 ml-1">
                            <Calendar className="w-3 h-3" /> Age
                          </label>
                          <input 
                            type="number" 
                            name="age"
                            value={formData.age} 
                            onChange={handleChange}
                            className="input-field text-sm p-3 bg-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                          <label className="text-[10px] uppercase font-black text-industrial-400 flex items-center gap-1.5 ml-1">
                            <GraduationCap className="w-3 h-3" /> Education Status
                          </label>
                          <select 
                            name="educationStatus"
                            value={formData.educationStatus} 
                            disabled
                            className="w-full bg-industrial-50 border border-industrial-100 text-industrial-400 font-bold p-3 rounded-xl cursor-not-allowed text-sm appearance-none"
                          >
                            <option value="HS Junior">HS Junior</option>
                            <option value="HS Senior">HS Senior</option>
                            <option value="HS Graduate">HS Graduate</option>
                          </select>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-black text-industrial-400 flex items-center gap-1.5 ml-1">
                             Target Career Path
                          </label>
                          <select 
                            name="selectedTrade"
                            value={formData.selectedTrade} 
                            onChange={handleChange}
                            className="input-field text-sm p-3 bg-white appearance-none font-bold"
                          >
                            {TRADE_CAREERS.map(t => (
                              <option key={t.id} value={t.id}>{t.id === 'undecided' ? 'Career Discovery (Exploring)' : t.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Locked School Affiliation */}
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-black text-industrial-400 flex items-center gap-1.5 ml-1">
                             <School className="w-3 h-3" /> Affiliated School (Permanent)
                          </label>
                          <input 
                            type="text" 
                            value={formData.currentSchool || profile.currentSchool} 
                            disabled
                            className="w-full bg-industrial-50 border border-industrial-100 text-industrial-400 font-bold p-3 rounded-xl cursor-not-allowed text-sm"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase font-black text-industrial-400 flex items-center gap-1.5 ml-1">
                               School City
                            </label>
                            <input 
                              type="text" 
                              value={formData.schoolCity || profile.schoolCity} 
                              disabled
                              className="w-full bg-industrial-50 border border-industrial-100 text-industrial-400 font-bold p-3 rounded-xl cursor-not-allowed text-sm"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase font-black text-industrial-400 flex items-center gap-1.5 ml-1">
                               School State
                            </label>
                            <input 
                              type="text" 
                              value={formData.schoolState || profile.schoolState} 
                              disabled
                              className="w-full bg-industrial-50 border border-industrial-100 text-industrial-400 font-bold p-3 rounded-xl cursor-not-allowed text-sm"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Starred Career Paths */}
                      <div className="space-y-4 pt-2">
                        <label className="text-[10px] uppercase font-black text-industrial-400 flex items-center gap-1.5 ml-1">
                          <Trophy className="w-3 h-3 text-amber-500" /> Starred Career Paths
                        </label>
                        <div className="space-y-2">
                          {profile.starredTrades && profile.starredTrades.length > 0 ? (
                            profile.starredTrades.map(tradeId => {
                              const trade = TRADE_CAREERS.find(t => t.id === tradeId) || 
                                            RECOMMENDATIONS.find(t => t.id === tradeId);
                                            
                              if (!trade) return null;
                              return (
                                <div key={tradeId} className="flex justify-between items-center p-3 bg-amber-50/50 rounded-xl border border-amber-100 group">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                                      <Star className="w-4 h-4 text-amber-600 fill-current" />
                                    </div>
                                    <div>
                                      <p className="text-xs font-black text-industrial-900">{trade.name}</p>
                                      <p className="text-[10px] text-amber-600 font-bold uppercase">
                                        {trade.sector || trade.credentials || 'Career Path'}
                                      </p>
                                    </div>
                                  </div>
                                  <button 
                                    onClick={() => toggleStarTrade(tradeId)}
                                    className="p-2 text-industrial-300 hover:text-rose-500 transition-colors"
                                  >
                                    <X className="w-4 h-4" />
                                  </button>
                                </div>
                              );
                            })
                          ) : (
                            <div className="p-4 border border-dashed border-industrial-200 rounded-xl flex flex-col items-center justify-center text-center">
                              <p className="text-[10px] font-bold text-industrial-400 italic">No starred careers yet.</p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Starred Schools */}
                      <div className="space-y-4 pt-2">
                         <label className="text-[10px] uppercase font-black text-industrial-400 flex items-center gap-1.5 ml-1">
                          <Star className="w-3 h-3 text-safety-blue fill-current" /> Starred School Programs
                        </label>
                        <div className="space-y-2">
                          {profile.starredSchools && profile.starredSchools.length > 0 ? (
                            profile.starredSchools.map(schoolId => {
                              const school = SCHOOLS.find(s => s.id === schoolId);
                              if (!school) return null;
                              return (
                                <div key={schoolId} className="flex justify-between items-center p-3 bg-blue-50/50 rounded-xl border border-blue-100 group">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                      <Star className="w-4 h-4 text-safety-blue fill-current" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <p className="text-xs font-black text-industrial-900 truncate">{school.name}</p>
                                      <p className="text-[10px] text-safety-blue font-bold uppercase truncate">
                                        {TRADE_CAREERS.find(t => t.id === school.trade)?.name || 'General Trade'} • {school.location}
                                      </p>
                                    </div>
                                  </div>
                                  <button 
                                    onClick={() => toggleStarSchool(schoolId)}
                                    className="p-2 text-industrial-300 hover:text-rose-500 transition-colors"
                                  >
                                    <X className="w-4 h-4" />
                                  </button>
                                </div>
                              );
                            })
                          ) : (
                            <div className="p-4 border border-dashed border-industrial-200 rounded-xl flex flex-col items-center justify-center text-center">
                              <p className="text-[10px] font-bold text-industrial-400 italic">No starred schools yet.</p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Grades & Extracurriculars */}
                      <div className="space-y-4 pt-2">
                        <div className="space-y-2">
                           <label className="text-[10px] uppercase font-black text-industrial-400 flex items-center gap-1.5 ml-1">
                              <BookOpen className="w-3 h-3" /> Academic Record (Current)
                           </label>
                           <div className="grid grid-cols-1 gap-2">
                              {formData.grades?.map((g, i) => (
                                <div key={i} className="flex justify-between items-center p-2.5 bg-industrial-50 rounded-xl border border-industrial-100">
                                   <span className="text-xs font-bold text-industrial-700">{g.subject}</span>
                                   <span className="text-xs font-black text-industrial-900 bg-white px-2 py-0.5 rounded-lg shadow-sm">{g.grade}</span>
                                </div>
                              ))}
                           </div>
                        </div>

                        <div className="space-y-2">
                           <label className="text-[10px] uppercase font-black text-industrial-400 flex items-center gap-1.5 ml-1">
                              <Trophy className="w-3 h-3" /> Extracurriculars
                           </label>
                           <textarea 
                             name="extracurriculars"
                             value={formData.extracurriculars} 
                             onChange={handleChange}
                             className="input-field text-sm p-3 bg-white h-20 resize-none"
                             placeholder="List your sports, clubs, or hobbies..."
                           />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-black text-industrial-400 flex items-center gap-1.5 ml-1">
                           High School
                        </label>
                        <input 
                          type="text" 
                          name="school"
                          value={formData.school} 
                          onChange={handleChange}
                          className="input-field text-sm p-3 bg-white shadow-inner"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-black text-industrial-400 flex items-center gap-1.5 ml-1">
                             Department
                          </label>
                          <input 
                            type="text" 
                            name="department"
                            value={formData.department} 
                            onChange={handleChange}
                            className="input-field text-sm p-3 bg-white shadow-inner"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-black text-industrial-400 flex items-center gap-1.5 ml-1">
                             Specialization
                          </label>
                          <input 
                            type="text" 
                            name="specialization"
                            value={formData.specialization} 
                            onChange={handleChange}
                            className="input-field text-sm p-3 bg-white shadow-inner"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Career Assets / Resume Upload */}
                  {userType === 'student' && (
                    <div className="p-5 bg-industrial-900 text-white rounded-2xl border border-industrial-700 shadow-inner">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xs font-black uppercase tracking-widest text-industrial-400 flex items-center gap-2">
                           <Upload className="w-3.5 h-3.5 text-safety-blue" />
                           Career Assets
                        </h4>
                        {resume && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                      </div>

                      {resume ? (
                        <div className="flex items-center justify-between p-2.5 bg-white/5 border border-white/10 rounded-xl">
                          <div className="flex items-center gap-3">
                             <div className="p-1.5 bg-safety-blue/20 rounded">
                               <Briefcase className="w-3.5 h-3.5 text-safety-blue" />
                             </div>
                             <span className="text-xs font-medium text-industrial-100 truncate max-w-[150px]">{resume}</span>
                          </div>
                          <label className="text-[10px] font-black text-safety-blue cursor-pointer hover:text-white transition-colors">
                            REPLACE
                            <input type="file" onChange={handleFileUpload} className="hidden" accept=".pdf,.doc,.docx" />
                          </label>
                        </div>
                      ) : (
                        <label className={`flex flex-col items-center justify-center w-full h-20 border-2 border-dashed rounded-xl transition-all cursor-pointer ${isUploading ? 'bg-white/5 border-industrial-600' : 'bg-white/5 border-white/20 hover:border-safety-blue hover:bg-white/10'}`}>
                          {isUploading ? (
                            <div className="flex flex-col items-center">
                              <div className="w-5 h-5 border-2 border-safety-blue border-t-transparent rounded-full animate-spin mb-2" />
                              <p className="text-[10px] font-bold text-industrial-300">SECURE UPLOAD...</p>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center">
                              <p className="text-xs font-bold text-industrial-100 mb-1">Upload Resume</p>
                              <p className="text-[9px] text-industrial-400 tracking-wider">PDF, DOCX • MAX 10MB</p>
                            </div>
                          )}
                          <input type="file" onChange={handleFileUpload} className="hidden" accept=".pdf,.doc,.docx" disabled={isUploading} />
                        </label>
                      )}
                    </div>
                  )}
               </div>

               <div className="mt-8 grid grid-cols-2 gap-3">
                  <button 
                    onClick={onClose} 
                    className="py-3.5 px-4 rounded-xl border border-industrial-100 text-industrial-500 font-black text-[11px] uppercase tracking-widest hover:bg-industrial-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleSave}
                    disabled={isSaving}
                    className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-safety-blue text-white font-black text-[11px] uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-70"
                  >
                    {isSaving ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        Commit Changes
                      </>
                    )}
                  </button>
               </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
