import { useState, useEffect } from 'react';
import { DashboardScreen } from './components/DashboardScreen';
import { LifestyleReportScreen } from './components/LifestyleReportScreen';
import { LifestyleInputScreen } from './components/LifestyleInputScreen';
import { MarketHomeScreen } from './components/MarketHomeScreen';
import { ProductDetailScreen } from './components/ProductDetailScreen';
import { MyPageScreen } from './components/MyPageScreen';
import { CommunityScreen } from './components/CommunityScreen';
import { SettingsScreen } from './components/SettingsScreen';
import { HousingBottomNav } from './components/HousingBottomNav';
import { DesktopNav } from './components/DesktopNav';
import { DashboardDesktop } from './components/DashboardDesktop';
import { LifestyleReportDesktop } from './components/LifestyleReportDesktop';
import { MarketHomeDesktop } from './components/MarketHomeDesktop';
import { ProductDetailDesktop } from './components/ProductDetailDesktop';
import { MyPageDesktop } from './components/MyPageDesktop';
import { CommunityDesktop } from './components/CommunityDesktop';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showSettings, setShowSettings] = useState(false);
  const [showLifestyleInput, setShowLifestyleInput] = useState(false);
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [isDesktopMode, setIsDesktopMode] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopMode(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        {/* Desktop Mode */}
        {isDesktopMode ? (
          <>
            <DesktopNav activeTab={activeTab} onTabChange={setActiveTab} />
            {showSettings ? (
              <SettingsScreen onBack={() => setShowSettings(false)} />
            ) : showLifestyleInput ? (
              <LifestyleInputScreen onBack={() => setShowLifestyleInput(false)} />
            ) : showProductDetail ? (
              <ProductDetailDesktop onBack={() => setShowProductDetail(false)} />
            ) : (
              <>
                {activeTab === 'home' && <DashboardDesktop />}
                {activeTab === 'matching' && <LifestyleReportDesktop onStartInput={() => setShowLifestyleInput(true)} />}
                {activeTab === 'market' && <MarketHomeDesktop onProductClick={() => setShowProductDetail(true)} />}
                {activeTab === 'community' && <CommunityDesktop />}
                {activeTab === 'mypage' && <MyPageDesktop onSettingsClick={() => setShowSettings(true)} />}
              </>
            )}
          </>
        ) : (
          /* Mobile Mode */
          <>
            {showSettings ? (
              <SettingsScreen onBack={() => setShowSettings(false)} />
            ) : showLifestyleInput ? (
              <LifestyleInputScreen onBack={() => setShowLifestyleInput(false)} />
            ) : showProductDetail ? (
              <ProductDetailScreen onBack={() => setShowProductDetail(false)} />
            ) : (
              <>
                {activeTab === 'home' && <DashboardScreen />}
                {activeTab === 'matching' && <LifestyleReportScreen onStartInput={() => setShowLifestyleInput(true)} />}
                {activeTab === 'market' && <MarketHomeScreen onProductClick={() => setShowProductDetail(true)} />}
                {activeTab === 'community' && <CommunityScreen />}
                {activeTab === 'mypage' && <MyPageScreen onSettingsClick={() => setShowSettings(true)} />}

                {/* Bottom Navigation */}
                <HousingBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
              </>
            )}
          </>
        )}
      </div>
    </LanguageProvider>
  );
}