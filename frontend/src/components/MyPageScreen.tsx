import { TrustScoreCard } from './TrustScoreCard';
import { AchievementBadges } from './AchievementBadges';
import { LifestyleDNACard } from './LifestyleDNACard';
import { OrderHistory } from './OrderHistory';
import { MenuOptions } from './MenuOptions';
import { CheckCircle2, Settings, Edit } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

interface MyPageScreenProps {
  onSettingsClick?: () => void;
}

export function MyPageScreen({ onSettingsClick }: MyPageScreenProps) {
  const { t, language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="px-4 py-4 flex items-center justify-between max-w-md mx-auto">
          <h1 className="text-primary">{t('mypage.title')}</h1>
          <button 
            onClick={onSettingsClick}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <Settings className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </header>

      <main className="pt-4 px-4 max-w-md mx-auto space-y-5 pb-24">
        {/* Profile Header */}
        <div className="bg-gradient-to-br from-primary/10 via-blue-50 to-purple-50 rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-5 border-2 border-primary/20 relative">
          {/* Edit Button - Top Right */}
          <button className="absolute top-4 right-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
            <Edit className="w-4 h-4" />
          </button>

          <div className="flex items-start gap-4 mb-4">
            {/* Avatar */}
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1639654655546-68bc1f21e9e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDAyMzc3MHww&ixlib=rb-4.1.0&q=80&w=200"
                alt="Alex Kim"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full border-2 border-white flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-foreground mb-1">{language === 'ko' ? '알렉스 김' : 'Alex Kim'}</h2>
              
              {/* Verified Badge */}
              <div className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full mb-2">
                <CheckCircle2 className="w-3 h-3" />
                <span className="text-xs">{language === 'ko' ? '인증된 대학생' : 'Verified University Student'}</span>
              </div>
              
              <div className="space-y-0.5">
                <p className="text-sm text-foreground">{language === 'ko' ? '주립대학교' : 'State University'}</p>
                <p className="text-xs text-muted-foreground">{language === 'ko' ? '컴퓨터공학 • 3학년' : 'Computer Science • Junior'}</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3 bg-white/60 backdrop-blur rounded-[12px] p-3">
            <div className="text-center">
              <p className="text-xl text-primary">98</p>
              <p className="text-xs text-muted-foreground">{language === 'ko' ? '신뢰점수' : 'Trust Score'}</p>
            </div>
            <div className="text-center border-l border-r border-border">
              <p className="text-xl text-secondary">12</p>
              <p className="text-xs text-muted-foreground">{language === 'ko' ? '참여딜' : 'Deals Joined'}</p>
            </div>
            <div className="text-center">
              <p className="text-xl text-foreground">6 {language === 'ko' ? '개월' : 'mo'}</p>
              <p className="text-xs text-muted-foreground">{language === 'ko' ? '회원' : 'Member'}</p>
            </div>
          </div>
        </div>

        {/* Trust Score */}
        <TrustScoreCard score={98} maxScore={100} />

        {/* Achievement Badges */}
        <AchievementBadges />

        {/* Lifestyle DNA */}
        <LifestyleDNACard />

        {/* Order History */}
        <OrderHistory />

        {/* Menu Options */}
        <MenuOptions />

        {/* App Version */}
        <div className="text-center py-4">
          <p className="text-xs text-muted-foreground">Trust-Live v1.0.2</p>
          <p className="text-xs text-muted-foreground">Student Housing Super App</p>
        </div>
      </main>
    </div>
  );
}