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
import { UserProvider } from './hooks/useUser';
import { MarketProvider } from './hooks/useMarket';
import { CommunityProvider } from './hooks/useCommunity';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showSettings, setShowSettings] = useState(false);
  const [showLifestyleInput, setShowLifestyleInput] = useState(false);
  const [showProductDetail, setShowProductDetail] = useState(false);

  const resetOverlays = () => {
    setShowSettings(false);
    setShowLifestyleInput(false);
    setShowProductDetail(false);
  };

  const handleTabChange = (tab: string) => {
    resetOverlays();
    setActiveTab(tab);
  };

  const navigateToMarket = () => handleTabChange('market');
  const navigateToCommunity = () => handleTabChange('community');
  const openDealDetail = () => {
    handleTabChange('market');
    setShowProductDetail(true);
  };
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
        {activeTab === 'home' && (
          <DashboardDesktop
            onViewAllDeals={navigateToMarket}
            onJoinDeal={openDealDetail}
            onViewCommunity={navigateToCommunity}
          />
        )}
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
        {activeTab === 'home' && (
          <DashboardScreen
            onViewAllDeals={navigateToMarket}
            onJoinDeal={openDealDetail}
            onViewCommunity={navigateToCommunity}
          />
        )}
        {activeTab === 'matching' && (
          <LifestyleReportScreen onStartInput={() => setShowLifestyleInput(true)} />
        )}
        {activeTab === 'market' && <MarketHomeScreen onProductClick={() => setShowProductDetail(true)} />}
        {activeTab === 'community' && <CommunityScreen />}
        {activeTab === 'mypage' && <MyPageScreen onSettingsClick={() => setShowSettings(true)} />}

        <HousingBottomNav activeTab={activeTab} setActiveTab={handleTabChange} />
      </>
    );
  };

  return (
    <LanguageProvider>
      <UserProvider>
        <MarketProvider>
          <CommunityProvider>
            <div className="bg-background min-h-screen">
              <div className="block md:hidden">{renderMobileContent()}</div>

              <div className="hidden md:block">
                <DesktopNav activeTab={activeTab} onTabChange={handleTabChange} />
                {renderDesktopContent()}
              </div>
            </div>
          </CommunityProvider>
        </MarketProvider>
      </UserProvider>
    </LanguageProvider>
  );
}