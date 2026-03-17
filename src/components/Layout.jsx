import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Banknote, MapPin, Brain, LogOut, User, Compass, School, Sparkles, Users, BookOpen } from 'lucide-react';
import ProfileModal from './ProfileModal';
import { TRADE_CAREERS } from '../data/mockData';
import { useUser } from '../context/UserContext';

export default function Layout({ children }) {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { profile, userType } = useUser();

  const selectedTradeName = TRADE_CAREERS.find(t => t.id === profile.selectedTrade)?.name;

  return (
    <div className={`flex min-h-screen w-full font-industrial transition-colors duration-500 ${userType === 'student' ? 'bg-slate-50' : 'bg-industrial-100'}`}>
      {/* Sidebar */}
      <aside className={`w-64 text-white flex flex-col fixed inset-y-0 left-0 shadow-2xl z-50 transition-colors duration-500 ${userType === 'student' ? 'bg-indigo-950' : 'bg-industrial-900'}`}>
        <div className="p-6 flex items-center gap-3">
          <div className={`p-2 rounded-lg ${userType === 'student' ? 'bg-indigo-500 shadow-lg shadow-indigo-500/20' : 'bg-safety-blue'}`}>
            <Compass className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">TradePath</h1>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {/* Dashboard is always first */}
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${isActive ? (userType === 'student' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'bg-safety-blue text-white shadow-lg shadow-safety-blue/20') : 'text-industrial-400 hover:bg-industrial-800 hover:text-white'}`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </NavLink>

          {/* Student-specific: Career Discovery */}
          {userType === 'student' && (
            <NavLink 
              to="/discovery" 
              className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${isActive ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'text-industrial-400 hover:bg-industrial-800 hover:text-white'}`}
            >
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">Career Discovery</span>
            </NavLink>
          )}

          {/* Trade Library (Both roles) */}
          <NavLink 
            to="/library" 
            className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${isActive ? (userType === 'student' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'bg-safety-blue text-white shadow-lg shadow-safety-blue/20') : 'text-industrial-400 hover:bg-industrial-800 hover:text-white'}`}
          >
            <BookOpen className="w-5 h-5" />
            <span className="font-medium">Trade Library</span>
          </NavLink>

          {/* Counselor Exclusive Links */}
          {userType === 'counselor' && (
            <>
              <NavLink 
                to="/students" 
                className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${isActive ? 'bg-safety-blue text-white shadow-lg shadow-safety-blue/20' : 'text-industrial-400 hover:bg-industrial-800 hover:text-white'}`}
              >
                <Users className="w-5 h-5" />
                <span className="font-medium">Students</span>
              </NavLink>
              <NavLink 
                to="/aptitude" 
                className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${isActive ? 'bg-safety-blue text-white shadow-lg shadow-safety-blue/20' : 'text-industrial-400 hover:bg-industrial-800 hover:text-white'}`}
              >
                <Brain className="w-5 h-5" />
                <span className="font-medium">Aptitude</span>
              </NavLink>
            </>
          )}

          {/* Core Resources (Both roles) */}
          <NavLink 
            to="/schools" 
            className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${isActive ? (userType === 'student' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'bg-safety-blue text-white shadow-lg shadow-safety-blue/20') : 'text-industrial-400 hover:bg-industrial-800 hover:text-white'}`}
          >
            <School className="w-5 h-5" />
            <span className="font-medium">School Search</span>
          </NavLink>
          
          <NavLink 
            to="/pay" 
            className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${isActive ? (userType === 'student' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'bg-safety-blue text-white shadow-lg shadow-safety-blue/20') : 'text-industrial-400 hover:bg-industrial-800 hover:text-white'}`}
          >
            <Banknote className="w-5 h-5" />
            <span className="font-medium">Pay</span>
          </NavLink>

          <NavLink 
            to="/location" 
            className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${isActive ? (userType === 'student' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'bg-safety-blue text-white shadow-lg shadow-safety-blue/20') : 'text-industrial-400 hover:bg-industrial-800 hover:text-white'}`}
          >
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Location</span>
          </NavLink>
        </nav>

        <div className="p-4 border-t border-industrial-800">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-industrial-400 hover:bg-industrial-800 hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <header className="flex justify-between items-center mb-8 bg-white/50 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className={`text-2xl font-black tracking-tight ${userType === 'student' ? 'text-indigo-900' : 'text-industrial-900'}`}>
                Welcome back, {profile.name.split(' ')[0]}
              </h2>
              <span className={`px-2 py-0.5 text-[10px] font-black uppercase rounded-full ${userType === 'student' ? 'bg-indigo-100 text-indigo-600' : 'bg-safety-blue/10 text-safety-blue'}`}>
                {userType}
              </span>
            </div>
            <p className="text-industrial-500 text-sm font-medium">
              {userType === 'student' ? `Career Path Discovery • ${selectedTradeName}` : `${profile.department} • ${profile.school}`}
            </p>
          </div>
          <div 
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => setIsProfileOpen(true)}
          >
            <div className="text-right">
              <p className={`text-sm font-black transition-colors ${userType === 'student' ? 'text-indigo-900 group-hover:text-indigo-600' : 'text-industrial-900 group-hover:text-safety-blue'}`}>{profile.name}</p>
              <p className="text-xs text-industrial-500 font-medium">{profile.email}</p>
            </div>
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all ${userType === 'student' ? 'bg-indigo-50 bg-white border-indigo-100 group-hover:border-indigo-500 group-hover:bg-indigo-50' : 'bg-industrial-200 border-industrial-300 group-hover:border-safety-blue group-hover:bg-blue-50'}`}>
              <User className={`w-6 h-6 ${userType === 'student' ? 'text-indigo-600' : 'text-industrial-600'}`} />
            </div>
          </div>
        </header>
        
        <div className={userType === 'student' ? 'animate-in fade-in duration-700' : ''}>
          {children}
        </div>
      </main>

      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </div>
  );
}
