import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface LifestyleScores {
  sleep: number;
  cleanliness: number;
  noise: number;
  social: number;
  study: number;
  sharing: number;
}

interface UserProfile {
  name: string;
  university: string;
  major: string;
  year: number;
  avatar: string;
  trustScore: number;
  compatibilityScore: number;
  verified: boolean;
  dealsJoined: number;
  membershipMonths: number;
  amountSaved: number;
  lifestyle: LifestyleScores;
}

interface UserContextValue {
  user: UserProfile;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  updateLifestyle: (next: Partial<LifestyleScores> | LifestyleScores) => void;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const { language } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [lifestyle, setLifestyle] = useState<LifestyleScores>({
    sleep: 9,
    cleanliness: 8,
    noise: 8,
    social: 7,
    study: 9,
    sharing: 8,
  });

  const updateLifestyle = useCallback(
    (next: Partial<LifestyleScores> | LifestyleScores) => {
      setLifestyle((prev) => ({
        ...prev,
        ...next,
      }));
    },
    [],
  );

  const user: UserProfile = useMemo(
    () => ({
      name: language === 'ko' ? '김철수' : 'Alex Kim',
      university: language === 'ko' ? '주립대학교' : 'State University',
      major: language === 'ko' ? '컴퓨터공학' : 'Computer Science',
      year: 3,
      avatar:
        'https://images.unsplash.com/photo-1639654655546-68bc1f21e9e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDAyMzc3MHww&ixlib=rb-4.1.0&q=80&w=200',
      trustScore: 98,
      compatibilityScore: 94,
      verified: true,
      dealsJoined: 12,
      membershipMonths: 6,
      amountSaved: 45000,
      lifestyle,
    }),
    [language, lifestyle],
  );

  const login = useCallback(() => setIsLoggedIn(true), []);
  const logout = useCallback(() => setIsLoggedIn(false), []);

  const value = useMemo(
    () => ({
      user,
      isLoggedIn,
      login,
      logout,
      updateLifestyle,
    }),
    [user, isLoggedIn, login, logout, updateLifestyle],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
}

