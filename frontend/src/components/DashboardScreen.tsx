import { Bell, Heart, MessageCircle, Megaphone } from 'lucide-react';
import { useState } from 'react';
import { ProfileHeader } from './ProfileHeader';
import { RoommateCardCompact } from './RoommateCardCompact';
import { RoommateDetailModal } from './RoommateDetailModal';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useDashboardLogic } from '../hooks/useDashboardLogic';
import { useUser } from '../hooks/useUser';

interface DashboardScreenProps {
  onViewAllDeals: () => void;
  onJoinDeal: () => void;
  onViewCommunity: () => void;
  onViewAllNotices: () => void;
}

export function DashboardScreen({
  onViewAllDeals,
  onJoinDeal,
  onViewCommunity,
  onViewAllNotices,
}: DashboardScreenProps) {
  const {
    t,
    language,
    roommates,
    groupBuyDeals,
    communityPosts,
    dormNotices,
    selectedRoommateId,
    setSelectedRoommateId,
  } = useDashboardLogic();
  const { user } = useUser();
  const [showRoommateDetail, setShowRoommateDetail] = useState(false);
  const communityPostsForScreen = communityPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="px-4 py-4 flex items-center justify-between max-w-md mx-auto">
          <div>
            <h1 className="text-primary">Trust-Live</h1>
            <p className="text-xs text-muted-foreground">{language === 'ko' ? '학생 주거 허브' : 'Student Housing Hub'}</p>
          </div>
          <button className="relative p-2 hover:bg-muted rounded-full transition-colors">
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
          </button>
        </div>
      </header>

      <main className="pt-4 px-4 max-w-md mx-auto space-y-5 pb-24">
        {/* Profile Header */}
        <ProfileHeader
          name={user.name}
          university={user.university}
          avatar={user.avatar}
          trustScore={user.trustScore}
          trustGrade={language === 'ko' ? '아침형 인간' : 'Morning Person'}
          mainTrait={language === 'ko' ? '깔끔대장' : 'Super Tidy'}
          language={language}
        />

        {/* My Roommates */}
        <div className="bg-white rounded-[20px] p-4 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-foreground">{language === 'ko' ? '내 룸메이트' : 'My Roommates'}</h2>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-muted-foreground hidden xs:inline">
                {language === 'ko' ? `총 ${roommates.length}명` : `${roommates.length} roommates`}
              </span>
              <div className="flex items-center gap-1">
                {roommates.map((roommate) => (
                  <button
                    key={roommate.id}
                    onClick={() => setSelectedRoommateId(roommate.id)}
                    className={`relative rounded-full transition-all ${
                      selectedRoommateId === roommate.id
                        ? 'ring-2 ring-primary ring-offset-1'
                        : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    <ImageWithFallback
                      src={roommate.avatar}
                      alt={roommate.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-2">
            {roommates
              .filter((roommate) => roommate.id === selectedRoommateId)
              .map((roommate) => (
                <RoommateCardCompact
                  key={roommate.id}
                  name={roommate.name}
                  avatar={roommate.avatar}
                  matchPercentage={roommate.matchPercentage}
                  status={roommate.status}
                  sharedInterests={roommate.sharedInterests}
                  className="!w-full"
                  onViewDetails={() => setShowRoommateDetail(true)}
                />
              ))}
          </div>
        </div>

        {/* Dorm Notices */}
        <div className="bg-white rounded-[20px] p-4 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Megaphone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm text-foreground">{t('dashboard.dormNotice')}</p>
                <p className="text-xs text-muted-foreground">{t('dashboard.noticeSubtitle')}</p>
              </div>
            </div>
            <button
              className="text-[11px] text-primary hover:underline"
              onClick={onViewAllNotices}
            >
              {language === 'ko' ? '전체 보기' : 'View all'}
            </button>
          </div>
          <div className="space-y-3">
            {dormNotices.slice(0, 2).map((notice) => (
              <div key={notice.id} className="rounded-2xl bg-muted/40 p-3">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm text-foreground font-medium">{notice.title}</p>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary/20 text-secondary">
                    {notice.status}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{notice.description}</p>
                <p className="text-[11px] text-muted-foreground">{notice.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hyper-local Group Buy Deals */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-foreground">{t('dashboard.nearbyDeals')}</h2>
            <button className="text-sm text-primary hover:underline" onClick={onViewAllDeals}>
              {t('dashboard.seeAll')}
            </button>
          </div>

          {/* Horizontal Scroll */}
          <div className="overflow-x-auto -mx-4 px-4 pb-2">
            <div className="flex gap-4" style={{ minWidth: 'min-content' }}>
              {groupBuyDeals.map((deal) => (
                <div 
                  key={deal.id}
                  className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden flex-shrink-0"
                  style={{ width: '280px' }}
                >
                  {/* Product Image */}
                  <div className="relative">
                    <ImageWithFallback 
                      src={deal.image}
                      alt={deal.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-destructive text-white px-3 py-1 rounded-full text-sm">
                      {deal.discount}% {t('dashboard.off')}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs text-foreground">
                      ⏰ {deal.deadline}
                    </div>
                  </div>

                  {/* Deal Info */}
                  <div className="p-4">
                    <h3 className="text-foreground mb-2">{deal.name}</h3>
                    


                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-lg text-primary">₩{deal.groupPrice.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground line-through">₩{deal.originalPrice.toLocaleString()}</span>
                    </div>

                    {/* Progress */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-muted-foreground">{deal.participants}/{deal.target} {t('dashboard.joined')}</span>
                        <span className="text-secondary">{Math.round((deal.participants / deal.target) * 100)}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-secondary to-emerald-500 h-full transition-all"
                          style={{ width: `${(deal.participants / deal.target) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      className="w-full bg-gradient-to-r from-secondary to-emerald-400 text-white py-2 rounded-[12px] text-sm hover:shadow-lg transition-all"
                      onClick={onJoinDeal}
                    >
                      {t('dashboard.joinDeal')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Community Posts */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-foreground">{language === 'ko' ? '커뮤니티 피드' : 'Community Feed'}</h2>
            <button className="text-sm text-primary hover:underline" onClick={onViewCommunity}>
              {language === 'ko' ? '더보기' : 'See All'}
            </button>
          </div>

          <div className="space-y-3">
            {communityPostsForScreen.map((post) => (
              <div key={post.id} className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-4">
                <div className="flex items-center gap-3 mb-3">
                  <ImageWithFallback
                    src={post.author.avatar}
                    alt={post.isAnonymous ? (language === 'ko' ? '익명' : 'Anonymous') : post.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-foreground">
                      {post.isAnonymous ? (language === 'ko' ? '익명' : 'Anonymous') : post.author.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{post.timeAgo}</p>
                  </div>
                  <span className={`${post.categoryColor} text-white px-2 py-1 rounded-full text-xs`}>
                    {post.category}
                  </span>
                </div>

                <h3 className="text-sm text-foreground mb-2">{post.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{post.content}</p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-3 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Roommate Detail Modal */}
      {roommates
        .filter((r) => r.id === selectedRoommateId)
        .map((roommate) => (
          <RoommateDetailModal
            key={roommate.id}
            isOpen={showRoommateDetail}
            onClose={() => setShowRoommateDetail(false)}
            name={roommate.name}
            avatar={roommate.avatar}
            university={roommate.university}
            major={roommate.major}
            year={roommate.year}
            bio={roommate.bio}
            likes={roommate.likes}
            dislikes={roommate.dislikes}
            reputation={roommate.reputation}
            recentReviews={roommate.recentReviews}
          />
        ))}
    </div>
  );
}