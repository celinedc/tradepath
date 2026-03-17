import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, Mail, Lock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

import { useUser } from '../context/UserContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useUser();
  const [role, setRole] = useState('student');

  const handleLogin = (e) => {
    e.preventDefault();
    login(role);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-industrial-900 font-industrial">
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-safety-blue rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-900 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 card bg-white/95 backdrop-blur-sm shadow-2xl z-10"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="bg-safety-blue p-3 rounded-xl mb-4 shadow-lg shadow-blue-500/20">
            <Compass className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-black text-industrial-900 tracking-tight">TradePath</h1>
          <p className="text-industrial-500 font-medium">Navigate your industrial career</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-industrial-700 uppercase tracking-wider">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-industrial-400" />
              <input 
                type="email" 
                required 
                className="input-field pl-10" 
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-industrial-700 uppercase tracking-wider">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-industrial-400" />
              <input 
                type="password" 
                required 
                className="input-field pl-10" 
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-industrial-700 uppercase tracking-wider">Your Role</label>
            <div className="grid grid-cols-2 gap-3">
              {['student', 'counselor'].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`py-2 px-1 text-xs font-bold uppercase rounded-md border transition-all ${
                    role === r 
                      ? 'bg-industrial-900 text-white border-industrial-900 shadow-md' 
                      : 'bg-white text-industrial-500 border-industrial-200 hover:border-industrial-400'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className="w-full btn-primary py-3 text-lg font-bold shadow-lg shadow-blue-500/25">
            Sign In
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-industrial-500">
          Don't have an account? <span className="text-safety-blue font-bold cursor-pointer hover:underline">Request Access</span>
        </p>
      </motion.div>
    </div>
  );
}
