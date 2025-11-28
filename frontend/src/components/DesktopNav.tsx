import { Search, Home, Users, ShoppingBag, User, Sparkles, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface DesktopNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function DesktopNav({ activeTab, onTabChange }: DesktopNavProps) {
  const { language } = useLanguage();

  const navItems = [
    { id: 'home', label: language === 'ko' ? '홈' : 'Home', icon: Home },
    { id: 'matching', label: language === 'ko' ? '라이프스타일' : 'Lifestyle', icon: Sparkles },
    { id: 'market', label: language === 'ko' ? '마켓' : 'Market', icon: ShoppingBag },
    { id: 'community', label: language === 'ko' ? '커뮤니티' : 'Community', icon: MessageCircle },
    { id: 'mypage', label: language === 'ko' ? '마이페이지' : 'My Page', icon: User },
  ];

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="w-full max-w-[1440px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">🏠</span>
            </div>
            <h1 className="text-primary text-xl">Trust-Live</h1>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                    activeTab === item.id
                      ? 'bg-primary text-white'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}