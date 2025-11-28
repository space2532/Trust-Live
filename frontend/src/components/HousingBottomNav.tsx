import { Home, Heart, ShoppingBag, MessageCircle, User, Users, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HousingBottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function HousingBottomNav({ activeTab, setActiveTab }: HousingBottomNavProps) {
  const { t } = useLanguage();
  
  const tabs = [
    { id: 'home', icon: Home, label: t('nav.home') },
    { id: 'matching', icon: Sparkles, label: t('nav.lifestyle') },
    { id: 'market', icon: ShoppingBag, label: t('nav.market') },
    { id: 'community', icon: Users, label: t('nav.community') },
    { id: 'mypage', icon: User, label: t('nav.mypage') },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50">
      <div className="px-2 py-2 grid grid-cols-5 gap-1 max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 py-2 rounded-[20px] transition-all ${
                isActive 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:bg-muted'
              }`}
            >
              <Icon className={`w-5 h-5`} />
              <span className="text-xs">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}