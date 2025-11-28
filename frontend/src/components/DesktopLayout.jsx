import DesktopNav from './DesktopNav';
import ProfileCard from './ProfileCard';
import RoommateSection from './RoommateSection';
import LifeTipBanner from './LifeTipBanner';
import GroupPurchaseSection from './GroupPurchaseSection';
import CommunityFeedSection from './CommunityFeedSection';

function DesktopLayout() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      {/* Header / Navigation - DesktopNav */}
      <DesktopNav />

      {/* Main Content Container - DashboardDesktop */}
      <div style={{ width: '100%', padding: '45px 24px 32px 24px' }}>
        {/* Main Container: full width with max-width for very large screens */}
        <div style={{ maxWidth: '95%', margin: '0 auto', width: '100%' }}>
          {/* Top Section: Left Sidebar + Right Main Content */}
          <div className="main-content-layout" style={{ display: 'flex', flexDirection: 'row', gap: '32px', marginBottom: '36px', alignItems: 'flex-start' }}>
            {/* Left Sidebar - 397px width */}
            <aside className="sidebar" style={{ width: '397px', minWidth: '320px', flexShrink: 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Profile Card Section */}
                <ProfileCard />

                {/* Roommate Section */}
                <RoommateSection />
              </div>
            </aside>

            {/* Right Main Content */}
            <main className="main-content" style={{ flex: 1, minWidth: '450px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                {/* Life Tip Banner */}
                <LifeTipBanner />

                {/* Group Purchase Section */}
                <GroupPurchaseSection />
              </div>
            </main>
          </div>

          {/* Community Feed Section */}
          <CommunityFeedSection />
        </div>
      </div>
    </div>
  );
}

export default DesktopLayout;

