import { Bell, Users, Clock, ArrowRight, Heart, MessageCircle, Megaphone, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { RoommateCardCompact } from './RoommateCardCompact';
import { RoommateDetailModal } from './RoommateDetailModal';
import { useDashboardLogic } from '../hooks/useDashboardLogic';
import { useUser } from '../hooks/useUser';

interface DashboardDesktopProps {
  onViewAllDeals: () => void;
  onJoinDeal: () => void;
  onViewCommunity: () => void;
  onViewAllNotices: () => void;
}

export function DashboardDesktop({
  onViewAllDeals,
  onJoinDeal,
  onViewCommunity,
  onViewAllNotices,
}: DashboardDesktopProps) {
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

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 min-h-screen">
      <div className="w-full max-w-[1440px] min-w-[1024px] mx-auto px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Profile & Roommate */}
          <div className="col-span-4 space-y-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-primary/10 via-blue-50 to-purple-50 rounded-3xl shadow-lg border-2 border-primary/20 p-8 relative"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4 flex-1">
                  {/* Avatar */}
                  <div className="relative">
                    <ImageWithFallback
                      src={user.avatar}
                      alt={user.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-secondary rounded-full border-2 border-white flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* User Info */}
                  <div className="flex-1">
                    <h2 className="text-foreground mb-2">{user.name}</h2>
                    
                    {/* Verified Badge */}
                    <div className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full mb-3">
                      <CheckCircle2 className="w-3 h-3" />
                      <span className="text-xs">{language === 'ko' ? '인증된 대학생' : 'Verified University Student'}</span>
                    </div>
                    
                    <div className="space-y-0.5">
                      <p className="text-sm text-foreground">{user.university}</p>
                      <p className="text-xs text-muted-foreground">{`${user.major} • ${language === 'ko' ? `${user.year}학년` : user.year === 1 ? 'Freshman' : user.year === 2 ? 'Sophomore' : user.year === 3 ? 'Junior' : 'Senior'}`}</p>
                    </div>
                  </div>
                </div>
                <button className="relative p-3 hover:bg-muted rounded-xl transition-colors">
                  <Bell className="w-5 h-5 text-foreground" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 bg-white/60 backdrop-blur rounded-2xl p-4">
                {/* Trust Score */}
                <div className="flex flex-col items-center justify-center text-center rounded-xl bg-primary/5 px-3 py-2 min-w-0">
                  <p className="text-2xl text-primary mb-0.5">{user.trustScore}</p>
                  <p className="text-xs text-muted-foreground break-keep">
                    {language === 'ko' ? '신뢰점수' : 'Trust Score'}
                  </p>
                </div>

                {/* Trait 1 */}
                <div className="flex flex-col items-center justify-center text-center rounded-xl bg-secondary/10 px-3 py-2 min-w-0">
                  <div className="flex items-center gap-1 min-w-0">
                    <Sparkles className="w-4 h-4 text-secondary shrink-0" />
                    <p
                      className="text-sm text-foreground truncate max-w-[110px]"
                      title={language === 'ko' ? '아침형 인간' : 'Morning Person'}
                    >
                      {language === 'ko' ? '아침형 인간' : 'Morning Person'}
                    </p>
                  </div>
                </div>

                {/* Trait 2 */}
                <div className="flex flex-col items-center justify-center text-center rounded-xl bg-emerald-50 px-3 py-2 min-w-0">
                  <div className="flex items-center gap-1 min-w-0">
                    <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
                    <p
                      className="text-sm text-emerald-700 truncate max-w-[110px]"
                      title={language === 'ko' ? '깔끔 대장' : 'Super Tidy'}
                    >
                      {language === 'ko' ? '깔끔 대장' : 'Super Tidy'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Roommate Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl shadow-lg border border-border p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-foreground">{language === 'ko' ? '내 룸메이트' : 'My Roommate'}</h3>
                <div className="flex items-center gap-2">
                  {roommates.map((roommate) => (
                    <button
                      key={roommate.id}
                      onClick={() => setSelectedRoommateId(roommate.id)}
                      className={`relative transition-all ${
                        selectedRoommateId === roommate.id
                          ? ''
                          : 'opacity-50 hover:opacity-100'
                      }`}
                    >
                      <ImageWithFallback
                        src={roommate.avatar}
                        alt={roommate.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              {roommates
                .filter((r) => r.id === selectedRoommateId)
                .map((roommate) => (
                  <RoommateCardCompact
                    key={roommate.id}
                    name={roommate.name}
                    avatar={roommate.avatar}
                    matchPercentage={roommate.matchPercentage}
                    status={roommate.status}
                    sharedInterests={roommate.sharedInterests}
                    onViewDetails={() => setShowRoommateDetail(true)}
                  />
                ))}
            </motion.div>
          </div>

          {/* Right Column - Deals & Activity */}
          <div className="col-span-8 space-y-6">
            {/* Dorm Notices */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 border border-border shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xl text-foreground mb-1">{t('dashboard.dormNotice')}</p>
                    <p className="text-sm text-muted-foreground">{t('dashboard.noticeSubtitle')}</p>
                  </div>
                </div>
                <button
                  className="text-sm text-primary hover:underline"
                  onClick={onViewAllNotices}
                >
                  {language === 'ko' ? '전체 보기' : 'View all'}
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {dormNotices.map((notice) => (
                  <div key={notice.id} className="rounded-2xl border border-border/70 p-4 bg-muted/20">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-semibold text-foreground pr-2">{notice.title}</p>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-secondary/15 text-secondary">
                        {notice.status}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">{notice.description}</p>
                    <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                      <span>{notice.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Active Deals */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-foreground">{t('dashboard.nearbyDeals')}</h2>
                <button
                  className="text-primary hover:underline flex items-center gap-2"
                  onClick={onViewAllDeals}
                >
                  {t('dashboard.seeAll')}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {groupBuyDeals.map((deal, index) => (
                  <motion.div
                    key={deal.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative">
                      <ImageWithFallback
                        src={deal.image}
                        alt={deal.name}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs">
                        {deal.discount}% OFF
                      </div>
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {deal.deadline}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <h3 className="text-sm text-foreground mb-2 line-clamp-1">{deal.name}</h3>
                      


                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-lg text-secondary">₩{deal.groupPrice.toLocaleString()}</span>
                        <span className="text-xs text-muted-foreground line-through">₩{deal.originalPrice.toLocaleString()}</span>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between text-xs mb-2">
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3 text-primary" />
                            <span className="text-foreground">{deal.participants}/{deal.target}</span>
                          </div>
                          <span className="text-secondary">{Math.round((deal.participants / deal.target) * 100)}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-primary to-secondary h-full transition-all"
                            style={{ width: `${(deal.participants / deal.target) * 100}%` }}
                          />
                        </div>
                      </div>

                      <button
                        className="w-full bg-gradient-to-r from-secondary to-emerald-400 text-white py-2.5 rounded-xl text-sm hover:shadow-lg transition-all"
                        onClick={onJoinDeal}
                      >
                        {t('dashboard.joinDeal')}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Community Feed - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-foreground">{language === 'ko' ? '커뮤니티 피드' : 'Community Feed'}</h2>
            <button
              className="text-primary hover:underline flex items-center gap-2"
              onClick={onViewCommunity}
            >
              {language === 'ko' ? '더보기' : 'See All'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {communityPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-border p-6 hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 aspect-square">
                    <ImageWithFallback
                      src={post.author.avatar}
                      alt={post.isAnonymous ? (language === 'ko' ? '익명' : 'Anonymous') : post.author.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground truncate">
                      {post.isAnonymous ? (language === 'ko' ? '익명' : 'Anonymous') : post.author.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{post.timeAgo}</p>
                  </div>
                </div>

                <span className={`${post.categoryColor} text-white px-3 py-1 rounded-full text-xs inline-block mb-3`}>
                  {post.category}
                </span>

                <h3 className="text-sm text-foreground mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-xs text-muted-foreground mb-4 line-clamp-3">{post.content}</p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

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