import { Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface TrustScoreCardProps {
  score: number;
  maxScore?: number;
}

export function TrustScoreCard({ score, maxScore = 100 }: TrustScoreCardProps) {
  const { language } = useLanguage();
  const percentage = (score / maxScore) * 100;

  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
          <Shield className="w-4 h-4 text-primary" />
        </div>
        <h3 className="text-foreground">{language === 'ko' ? '신뢰 & 평판' : 'Trust & Reputation'}</h3>
      </div>

      {/* Trust Score */}
      <div className="mb-4">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-sm text-muted-foreground">{language === 'ko' ? '신뢰점수' : 'Trust Score'}</span>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl text-primary">{score}</span>
            <span className="text-sm text-muted-foreground">/ {maxScore}</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="relative w-full h-3 bg-muted rounded-full overflow-hidden">
          <div 
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-blue-500 to-blue-600 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* Trust Level */}
      <div className="flex items-center justify-between bg-gradient-to-r from-primary/5 to-blue-50 rounded-[12px] p-3 border border-primary/20">
        <span className="text-sm text-foreground">{language === 'ko' ? '신뢰 등급' : 'Trust Level'}</span>
        <span className="text-sm text-primary px-3 py-1 bg-primary/10 rounded-full">
          ⭐ {language === 'ko' ? '최고' : 'Excellent'}
        </span>
      </div>
    </div>
  );
}
