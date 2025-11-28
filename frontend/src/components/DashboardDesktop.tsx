import { Bell, Users, Clock, ArrowRight, Heart, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { RoommateCardCompact } from './RoommateCardCompact';
import { useDashboardLogic } from '../hooks/useDashboardLogic';
import { useUser } from '../hooks/useUser';

export function DashboardDesktop() {
  const {
    t,
    language,
    roommates,
    groupBuyDeals,
    communityPosts,
    selectedRoommateId,
    setSelectedRoommateId,
  } = useDashboardLogic();
  const { user } = useUser();

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 min-h-screen">
      <div className="w-full max-w-[1440px] mx-auto px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Profile & Roommate */}
          <div className="col-span-4 space-y-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-lg border border-border p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <ImageWithFallback
                    src={user.avatar}
                    alt={user.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div>
                    <h2 className="text-foreground mb-1">{user.name}</h2>
                    <p className="text-sm text-muted-foreground mb-2">{user.university}</p>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs">
                        {language === 'ko' ? `신뢰점수: ${user.trustScore}` : `Trust Score: ${user.trustScore}`}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="relative p-3 hover:bg-muted rounded-xl transition-colors">
                  <Bell className="w-5 h-5 text-foreground" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <p className="text-2xl text-primary mb-1">{user.trustScore}</p>
                  <p className="text-xs text-muted-foreground">{language === 'ko' ? '신뢰도' : 'Trust Score'}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl text-foreground mb-1">{user.dealsJoined}</p>
                  <p className="text-xs text-muted-foreground">{language === 'ko' ? '딜 참여' : 'Deals Joined'}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl text-secondary mb-1">₩{user.amountSaved.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">{language === 'ko' ? '절약액' : 'Saved'}</p>
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
                          ? 'ring-2 ring-primary ring-offset-2' 
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
                  />
                ))}
            </motion.div>
          </div>

          {/* Right Column - Deals & Activity */}
          <div className="col-span-8 space-y-6">
            {/* Living Tip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-secondary/10 to-emerald-50 rounded-3xl p-8 border-2 border-secondary/30"
            >
              <div className="flex items-center gap-4">
                <span className="text-5xl flex-shrink-0">💡</span>
                <div>
                  <p className="text-foreground mb-1">
                    {t('dashboard.livingTip')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('dashboard.tipMessage')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Active Deals */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-foreground">{t('dashboard.nearbyDeals')}</h2>
                <button className="text-primary hover:underline flex items-center gap-2">
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
                        className="w-full h-48 object-cover"
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

                      <button className="w-full bg-gradient-to-r from-secondary to-emerald-400 text-white py-2.5 rounded-xl text-sm hover:shadow-lg transition-all">
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
            <button className="text-primary hover:underline flex items-center gap-2">
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
                  <ImageWithFallback
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground truncate">{post.author.name}</p>
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
    </div>
  );
}