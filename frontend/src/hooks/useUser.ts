import { useCallback, useMemo, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

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
}

export function useUser() {
  const { language } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
    }),
    [language],
  );

  const login = useCallback(() => setIsLoggedIn(true), []);
  const logout = useCallback(() => setIsLoggedIn(false), []);

  return {
    user,
    isLoggedIn,
    login,
    logout,
  };
}

