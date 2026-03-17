import React, { createContext, useContext, useState, useEffect } from 'react';
import { USER_PROFILE, COUNSELOR_PROFILE } from '../data/mockData';

const UserContext = createContext();

export function UserProvider({ children }) {
  // Load initial state from localStorage if available
  const [userType, setUserType] = useState(() => {
    return localStorage.getItem('userType') || 'student';
  });

  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem('userProfile');
    const defaultProfile = userType === 'student' ? USER_PROFILE : COUNSELOR_PROFILE;
    
    if (savedProfile) {
      try {
        const parsed = JSON.parse(savedProfile);
        // Merge to ensure new fields (like schoolCity, schoolState) are present
        return { ...defaultProfile, ...parsed };
      } catch (e) {
        console.error("Error parsing saved profile", e);
      }
    }
    return defaultProfile;
  });

  // Persist state changes
  useEffect(() => {
    localStorage.setItem('userType', userType);
    localStorage.setItem('userProfile', JSON.stringify(profile));
  }, [profile, userType]);

  const updateProfile = (updates) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  const toggleStarTrade = (tradeId) => {
    setProfile(prev => {
      const starredTrades = prev.starredTrades || [];
      if (starredTrades.includes(tradeId)) {
        return { ...prev, starredTrades: starredTrades.filter(id => id !== tradeId) };
      } else {
        return { ...prev, starredTrades: [...starredTrades, tradeId] };
      }
    });
  };

  const toggleStarSchool = (schoolId) => {
    setProfile(prev => {
      const starredSchools = prev.starredSchools || [];
      if (starredSchools.includes(schoolId)) {
        return { ...prev, starredSchools: starredSchools.filter(id => id !== schoolId) };
      } else {
        return { ...prev, starredSchools: [...starredSchools, schoolId] };
      }
    });
  };

  const login = (role) => {
    setUserType(role);
    const initialProfile = role === 'student' ? USER_PROFILE : COUNSELOR_PROFILE;
    setProfile(initialProfile);
    localStorage.setItem('userType', role);
    localStorage.setItem('userProfile', JSON.stringify(initialProfile));
  };

  return (
    <UserContext.Provider value={{ profile, userType, updateProfile, login, toggleStarTrade, toggleStarSchool }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
