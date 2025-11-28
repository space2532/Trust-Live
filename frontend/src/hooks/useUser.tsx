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

interface ReputationDetail {
  manners: number;
  communication: number;
  payment: number;
}

interface RecentReview {
  text: string;
  date: string;
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
  bio: string;
  likes: string[];
  dislikes: string[];
  reputation: ReputationDetail;
  recentReviews: RecentReview[];
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

  const user: UserProfile = useMemo(() => {
    const baseReputation: ReputationDetail = {
      manners: 96,
      communication: 92,
      payment: 99,
    };

    // 상세 평판 점수의 평균을 신뢰점수로 사용
    const derivedTrustScore = Math.round(
      (baseReputation.manners + baseReputation.communication + baseReputation.payment) / 3,
    );

    return {
      name: language === 'ko' ? '김철수' : 'Alex Kim',
      university: language === 'ko' ? '주립대학교' : 'State University',
      major: language === 'ko' ? '컴퓨터공학' : 'Computer Science',
      year: 3,
      avatar:
        'https://images.unsplash.com/photo-1639654655546-68bc1f21e9e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDAyMzc3MHww&ixlib=rb-4.1.0&q=80&w=200',
      trustScore: derivedTrustScore,
      compatibilityScore: 94,
      verified: true,
      dealsJoined: 12,
      membershipMonths: 6,
      amountSaved: 45000,
      lifestyle,
      bio:
        language === 'ko'
          ? '아침형 인간이고, 깨끗한 공간을 좋아하는 컴공 3학년입니다. 조용히 같이 공부하고 때로는 함께 밥 먹는 룸메를 찾고 있어요.'
          : 'Morning person CS junior who likes tidy spaces. Looking for a roommate to quietly study with and occasionally grab meals together.',
      likes:
        language === 'ko'
          ? ['아침 운동', '카페 공부', '정리 정돈', '조용한 룸메']
          : ['Morning workout', 'Studying at cafés', 'Keeping things tidy', 'Quiet roommates'],
      dislikes:
        language === 'ko'
          ? ['흡연', '심한 야식 냄새', '새벽 소음']
          : ['Smoking', 'Strong late-night food smells', 'Noise after midnight'],
      reputation: baseReputation,
      recentReviews:
        language === 'ko'
          ? [
              { text: '정리도 잘하고 공용 공간을 정말 깨끗하게 써요.', date: '2025-11-10' },
              { text: '약속한 정산은 바로바로 보내줘서 믿음이 가요.', date: '2025-11-02' },
            ]
          : [
              { text: 'Keeps shared spaces super clean and organized.', date: '2025-11-10' },
              { text: 'Always sends his share of payments right on time.', date: '2025-11-02' },
            ],
    };
  }, [language, lifestyle]);

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

