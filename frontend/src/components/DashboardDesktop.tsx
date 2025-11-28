import { Bell, MapPin, TrendingUp, Users, Clock, ArrowRight, Heart, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { RoommateCardCompact } from './RoommateCardCompact';
import { useState } from 'react';

export function DashboardDesktop() {
  const { t, language } = useLanguage();
  const [selectedRoommateId, setSelectedRoommateId] = useState(1);

  const roommates = [
    {
      id: 1,
      name: language === 'ko' ? '사라 존슨' : 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      matchPercentage: 98,
      status: language === 'ko' ? '활동중' : 'Active',
      sharedInterests: language === 'ko' ? ['아침형 인간', '청결주의', '조용한 학습'] : ['Early Bird', 'Clean Freak', 'Quiet Study'],
    },
    {
      id: 2,
      name: language === 'ko' ? '마크 리' : 'Mark Lee',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      matchPercentage: 92,
      status: language === 'ko' ? '활동중' : 'Active',
      sharedInterests: language === 'ko' ? ['올빼미족', '사교적', '음악 애호가'] : ['Night Owl', 'Social', 'Music Lover'],
    },
    {
      id: 3,
      name: language === 'ko' ? '에밀리 박' : 'Emily Park',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
      matchPercentage: 89,
      status: language === 'ko' ? '활동중' : 'Active',
      sharedInterests: language === 'ko' ? ['정리정돈', '채식주의', '운동 열심'] : ['Organized', 'Vegetarian', 'Gym Enthusiast'],
    },
  ];
  
  const groupBuyDeals = [
    {
      id: 1,
      name: language === 'ko' ? '프리미엄 생수 팩' : 'Premium Water Pack',
      image: 'https://images.unsplash.com/photo-1565151448704-33d96c51fff0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      originalPrice: 20000,
      groupPrice: 15000,
      discount: 30,
      participants: 3,
      target: 5,
      location: language === 'ko' ? 'A동' : 'Dorm A',
      deadline: language === 'ko' ? '3시간 남음' : '3h left',
    },
    {
      id: 2,
      name: language === 'ko' ? '세탁 세제' : 'Laundry Detergent',
      image: 'https://images.unsplash.com/photo-1642429948905-62fc9c9b3f76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      originalPrice: 18000,
      groupPrice: 12600,
      discount: 30,
      participants: 4,
      target: 5,
      location: language === 'ko' ? 'B동' : 'Dorm B',
      deadline: language === 'ko' ? '5시간 남음' : '5h left',
    },
    {
      id: 3,
      name: language === 'ko' ? '청소 용품' : 'Cleaning Supplies',
      image: 'https://images.unsplash.com/photo-1626379481874-3dc5678fa8ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      originalPrice: 25000,
      groupPrice: 17500,
      discount: 30,
      participants: 2,
      target: 5,
      location: language === 'ko' ? 'A동' : 'Dorm A',
      deadline: language === 'ko' ? '8시간 남음' : '8h left',
    },
  ];

  const communityPosts = [
    {
      id: 1,
      author: {
        name: language === 'ko' ? '사라 김' : 'Sarah Kim',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      },
      category: language === 'ko' ? '룸메이트 찾기' : 'Roommate Search',
      title: language === 'ko' ? '깔끔한 룸메이트 구해요!' : 'Looking for a clean roommate!',
      content: language === 'ko' 
        ? '안녕하세요! 다음 달부터 2인실 공유할 룸메이트를 찾고 있습니다. 컴공 3학년이고 조용하고 깔끔한 성격입니다. 월세 45만원.'
        : 'Hi! Looking for a roommate to share a 2BR apartment. CS junior, quiet and clean. Rent is ₩450,000/month.',
      likes: 24,
      comments: 12,
      timeAgo: language === 'ko' ? '2시간 전' : '2h ago',
      categoryColor: 'bg-primary',
    },
    {
      id: 2,
      author: {
        name: language === 'ko' ? '알렉스 박' : 'Alex Park',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      },
      category: language === 'ko' ? '공동구매' : 'Group Buy',
      title: language === 'ko' ? '쌀 대량 구매 같이 하실 분?' : 'Anyone want to join bulk rice purchase?',
      content: language === 'ko'
        ? '20kg 프리미엄 쌀 공동구매 진행합니다. 10명 모이면 1인당 15,000원 절약! 관심있으시면 DM 주세요.'
        : 'Group buy for 20kg premium rice bags. If we get 10 people, we save ₩15,000 each! DM if interested.',
      likes: 45,
      comments: 28,
      timeAgo: language === 'ko' ? '5시간 전' : '5h ago',
      categoryColor: 'bg-secondary',
    },
    {
      id: 3,
      author: {
        name: language === 'ko' ? '제이미 리' : 'Jamie Lee',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
      },
      category: language === 'ko' ? '주거 팁' : 'Housing Tips',
      title: language === 'ko' ? '저렴한 학생 주거지 베스트 3' : 'Best neighborhoods for students on a budget',
      content: language === 'ko'
        ? '막 이사했는데 팁 공유하고 싶어요! 신촌 지역이 잘 찾아보면 좋은 매물이 많더라구요. 제가 추천하는 곳 3군데...'
        : 'Just moved and wanted to share some tips! Sinchon area has great deals if you look carefully. Here are my top 3 picks...',
      likes: 67,
      comments: 19,
      timeAgo: language === 'ko' ? '1일 전' : '1d ago',
      categoryColor: 'bg-blue-500',
    },
    {
      id: 4,
      author: {
        name: language === 'ko' ? '크리스 최' : 'Chris Choi',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
      },
      category: language === 'ko' ? '마켓플레이스' : 'Marketplace',
      title: language === 'ko' ? '책상과 의자 판매 - 거의 새것!' : 'Selling desk and chair - great condition!',
      content: language === 'ko'
        ? '곧 이사가서 책상(8만원)과 인체공학 의자(6만원) 판매합니다. 둘 다 1년 미만 사용. 직접 픽업만 가능.'
        : 'Moving soon, selling my study desk (₩80,000) and ergonomic chair (₩60,000). Both less than 1 year old. Pickup only.',
      likes: 12,
      comments: 8,
      timeAgo: language === 'ko' ? '2일 전' : '2d ago',
      categoryColor: 'bg-orange-500',
    },
  ];

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
                    src="https://images.unsplash.com/photo-1639654655546-68bc1f21e9e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200"
                    alt="Alex Kim"
                    className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div>
                    <h2 className="text-foreground mb-1">{language === 'ko' ? '알렉스 김' : 'Alex Kim'}</h2>
                    <p className="text-sm text-muted-foreground mb-2">{language === 'ko' ? '주립대학교' : 'State University'}</p>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs">
                        {language === 'ko' ? '신뢰점수: 94' : 'Trust Score: 94'}
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
                  <p className="text-2xl text-primary mb-1">94</p>
                  <p className="text-xs text-muted-foreground">{language === 'ko' ? '신뢰도' : 'Trust Score'}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl text-foreground mb-1">12</p>
                  <p className="text-xs text-muted-foreground">{language === 'ko' ? '딜 참여' : 'Deals Joined'}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl text-secondary mb-1">₩45,000</p>
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