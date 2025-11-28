import { useState } from 'react';
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
  const renderDesktopContent = () => {
    if (showSettings) {
      return <SettingsScreen onBack={() => setShowSettings(false)} />;
    }

    if (showLifestyleInput) {
      return <LifestyleInputScreen onBack={() => setShowLifestyleInput(false)} />;
    }

    if (showProductDetail) {
      return <ProductDetailDesktop onBack={() => setShowProductDetail(false)} />;
    }

    return (
      <>
        {activeTab === 'home' && <DashboardDesktop />}
        {activeTab === 'matching' && (
          <LifestyleReportDesktop onStartInput={() => setShowLifestyleInput(true)} />
        )}
        {activeTab === 'market' && <MarketHomeDesktop onProductClick={() => setShowProductDetail(true)} />}
        {activeTab === 'community' && <CommunityDesktop />}
        {activeTab === 'mypage' && <MyPageDesktop onSettingsClick={() => setShowSettings(true)} />}
      </>
    );
  };

  const renderMobileContent = () => {
    if (showSettings) {
      return <SettingsScreen onBack={() => setShowSettings(false)} />;
    }

    if (showLifestyleInput) {
      return <LifestyleInputScreen onBack={() => setShowLifestyleInput(false)} />;
    }

    if (showProductDetail) {
      return <ProductDetailScreen onBack={() => setShowProductDetail(false)} />;
    }

    return (
      <>
        {activeTab === 'home' && <DashboardScreen />}
        {activeTab === 'matching' && (
          <LifestyleReportScreen onStartInput={() => setShowLifestyleInput(true)} />
        )}
        {activeTab === 'market' && <MarketHomeScreen onProductClick={() => setShowProductDetail(true)} />}
        {activeTab === 'community' && <CommunityScreen />}
        {activeTab === 'mypage' && <MyPageScreen onSettingsClick={() => setShowSettings(true)} />}

        <HousingBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </>
    );
  };

  return (
    <LanguageProvider>
      <div className="bg-background min-h-screen">
        <div className="block lg:hidden">{renderMobileContent()}</div>

        <div className="hidden lg:block">
          <DesktopNav activeTab={activeTab} onTabChange={setActiveTab} />
          {renderDesktopContent()}
        </div>
      </div>
    </LanguageProvider>
  );
}