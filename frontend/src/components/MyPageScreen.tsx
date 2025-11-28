import { LifestyleDNACard } from './LifestyleDNACard';
import { OrderHistory } from './OrderHistory';
import { MenuOptions } from './MenuOptions';
import { Settings } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useUser } from '../hooks/useUser';
import { ProfileBioCard } from './ProfileBioCard';
import { ProfileHeader } from './ProfileHeader';
import { ReputationDetailCard } from './ReputationDetailCard';

interface MyPageScreenProps {
  onSettingsClick?: () => void;
}

export function MyPageScreen({ onSettingsClick }: MyPageScreenProps) {
  const { t, language } = useLanguage();
  const { user } = useUser();
  const englishYearLabels: Record<number, string> = {
    1: 'Freshman',
    2: 'Sophomore',
    3: 'Junior',
    4: 'Senior',
  };
  const yearLabel = language === 'ko' ? `${user.year}학년` : englishYearLabels[user.year] ?? 'Student';
  
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

      <main className="pt-4 px-4 max-w-md mx-auto flex flex-col gap-6 pb-28">
        {/* Profile Header */}
        <div className="w-full">
          <ProfileHeader
            name={user.name}
            university={user.university}
            avatar={user.avatar}
            trustScore={user.trustScore}
            trustGrade={language === 'ko' ? '아침형 인간' : 'Morning Person'}
            mainTrait={language === 'ko' ? '깔끔 대장' : 'Super Tidy'}
            language={language}
            onEditClick={onSettingsClick}
          />
        </div>

        {/* Bio / 자기소개 */}
        <div className="w-full">
          <ProfileBioCard bio={user.bio} likes={user.likes} dislikes={user.dislikes} />
        </div>

        {/* Reputation Details / 상세 평판 */}
        <div className="w-full">
          <ReputationDetailCard
            livingManners={user.reputation.manners}
            communication={user.reputation.communication}
            payment={user.reputation.payment}
            maxScore={100}
            recentReviews={user.recentReviews.map((r) => r.text)}
          />
        </div>

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