import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Badge {
  icon: string;
  label: string;
  labelKo: string;
  color: string;
}

export function AchievementBadges() {
  const { language } = useLanguage();
  
  const badges: Badge[] = [
    { icon: '✨', label: 'Clean Roommate', labelKo: '깔끔한 룸메', color: 'from-purple-400 to-purple-600' },
    { icon: '⚡', label: 'Fast Payer', labelKo: '빠른 결제', color: 'from-yellow-400 to-orange-500' },
    { icon: '🎯', label: 'Deal Hunter', labelKo: '딜 헌터', color: 'from-secondary to-emerald-500' },
    { icon: '🤝', label: 'Team Player', labelKo: '팀 플레이어', color: 'from-blue-400 to-primary' },
  ];

  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-foreground">{language === 'ko' ? '달성 과제' : 'Achievements'}</h3>
        <button className="flex items-center gap-1 text-sm text-primary hover:underline">
          {language === 'ko' ? '더보기' : 'View All'}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="grid grid-cols-4 gap-3">
        {badges.map((badge, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className={`w-14 h-14 bg-gradient-to-br ${badge.color} rounded-[16px] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)] transform hover:scale-105 transition-transform`}>
              <span className="text-2xl">{badge.icon}</span>
            </div>
            <p className="text-xs text-center text-muted-foreground leading-tight">
              {language === 'ko' ? badge.labelKo : badge.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}